package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.output.XMLOutputter;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;
import org.wescheme.util.Queries;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import java.util.logging.Logger;

public class LoadProjectServlet extends HttpServlet {

    /**
     * Returns program XML if either pid or publicId is provided.
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
                        XMLOutputter outputter = new XMLOutputter();
                        resp.setContentType("text/xml");
                        resp.getWriter().print(outputter.outputString(prog.toXML(pm)));
                    } else {
                        log.warning(userSession.getName() + " does not own " + req.getParameter("pid"));
                        throw new RuntimeException("Not owner");
                    }
                } else {
                    resp.sendError(403);
                }					
            } else if (req.getParameter("publicId") != null) {
                Program prog = getProgramByPublicId(pm, req.getParameter("publicId"));
                if (isOwner(userSession, prog) || prog.getIsSourcePublic()) {
                    XMLOutputter outputter = new XMLOutputter();
                    resp.setContentType("text/xml");
                    resp.getWriter().print(outputter.outputString(prog.toXML(pm)));
                } else {
                    // Show the record, but without source.
                    XMLOutputter outputter = new XMLOutputter();
                    resp.setContentType("text/xml");
                    resp.getWriter().print(outputter.outputString(prog.toXML(false, pm)));
                }
            } else {
                throw new RuntimeException("pid or publicId parameter missing");
            }
        } finally {
            pm.close();
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
