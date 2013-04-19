package org.wescheme.servlet;

import java.io.IOException;
import java.lang.reflect.Type;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;
import org.wescheme.util.Queries;

import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpResponse;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

import java.util.Scanner;
import java.util.logging.Logger;

public class LoadProjectServlet extends BaseServlet {

    /**
     * Returns program output if either pid or publicId is provided.
     * Meant to be parsed by the JavaScript in org.wescheme.Program.
     */
    private static final long serialVersionUID = 1165047992267892812L;
    private static final Logger log = Logger.getLogger(LoadProjectServlet.class.getName());
	
    private boolean isOwner(Session userSession, Program prog) {
        return (userSession != null && 
                prog != null && 
                prog.getOwner().equals(userSession.getName()));
    }
	
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        PersistenceManager pm = PMF.get().getPersistenceManager();
        try {
            Session userSession;
            SessionManager sm = new SessionManager();
            userSession = sm.authenticate(req, resp);
            if (req.getParameter("pid") != null) {
                Program prog = getProgramByPid(pm, req.getParameter("pid"));
                if( null != userSession ){
                    if (isOwner(userSession, prog) || userSession.isAdmin()) {
                        resp.setContentType("text/json");
                        resp.getWriter().print(prog.toJSON(pm).toString());
                    } else {
                        log.warning(userSession.getName() + " does not own " + req.getParameter("pid"));
                        resp.sendError(401, "Not owner");
                        return;
                    }
                } else {
                    resp.sendError(403);
                }					
            } else if (req.getParameter("publicId") != null) {
            	//// FIXME Decide whether drive program ids are actually public ids
            	//// and remove code that uses legacy programs if they are no longer used
                /*Program prog = getProgramByPublicId(pm, req.getParameter("publicId"));
                if (isOwner(userSession, prog) || prog.getIsSourcePublic()) {
                    resp.setContentType("text/json");
                    resp.getWriter().print(prog.toJSON(pm).toString());
                } else {
                    // Show the record, but without source.
                    resp.setContentType("text/json");
                    resp.getWriter().print(prog.toJSON(false, pm).toString());
                }*/
            	getAndPutDriveProgram(req.getParameter("publicId"), req, resp);
            } else {
                resp.sendError(400, "pid or publicId parameter missing");
                return;
            }
        } finally {
            pm.close();
        }
    }
    
    private void getAndPutDriveProgram(String programId, HttpServletRequest req, HttpServletResponse resp) throws IOException
    {
    	Drive service = getDriveService(req, resp);
    	File file = null;
    	try {
    		file = service.files().get(programId).execute();
    	} catch (GoogleJsonResponseException e) {
    		if (e.getStatusCode() == 401) {
    			// The user has revoked our token or it is otherwise bad.
    			// Delete the local copy so that their next page load will recover.
    			deleteCredential(req, resp);
    			sendError(resp, 401, "Unauthorized");
    			return;
    		}
    	}

    	if (file != null) {
    		String content = downloadFileContent(service, file);
    		if (content == null) {
    			content = "";
    		}
    		resp.setContentType(JSON_MIMETYPE);
    		//resp.getWriter().print(DriveProgram.fromJson(file, content));
    		resp.getWriter().print(content); //// May need to convert into wescheme Program object
    	} else {
    		sendError(resp, 404, "File not found");
    	}
    }


    /**
     * Download the content of the given file.
     *
     * @param service Drive service to use for downloading.
     * @param file File metadata object whose content to download.
     * @return String representation of file content.  String is returned here
     *         because this app is setup for text/plain files.
     * @throws IOException Thrown if the request fails for whatever reason.
     */
    private String downloadFileContent(Drive service, File file)
    		throws IOException {
    	GenericUrl url = new GenericUrl(file.getDownloadUrl());
    	HttpResponse response = service.getRequestFactory().buildGetRequest(url)
    			.execute();
    	try {
    		return new Scanner(response.getContent()).useDelimiter("\\A").next();
    	} catch (java.util.NoSuchElementException e) {
    		return "";
    	}
    }
	
    private Program getProgramByPid(PersistenceManager pm, String pid) {
        Long id = (Long) Long.parseLong(pid);
        Key k = KeyFactory.createKey("Program", id);
        Program prog = pm.getObjectById(Program.class, k);
        return prog;
    }

	
    private Program getProgramByPublicId(PersistenceManager pm, String publicId) {
        Program program = Queries.getProgramByPublicId(pm, publicId);
        if (program == null) {
            throw new RuntimeException("Could not find unique program with publicId=" + publicId);
        }
        return program;
    }	
}
