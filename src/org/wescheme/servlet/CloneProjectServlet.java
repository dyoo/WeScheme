package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.WeSchemeUser;
import org.wescheme.util.Base64;
import org.wescheme.util.PMF;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class CloneProjectServlet {

	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try {
			

			Session userSession;
			SessionManager sm = new SessionManager();
			
			if( !sm.isIntentional(req, resp) ){
				resp.sendError(401);
				return;
			}
			
			userSession = sm.authenticate(req, resp);
			
			Long pid = (Long) Base64.decodeToObject(req.getParameter("pid"));
			Program prog = pm.getObjectById(Program.class, pid);
			
			if( !prog.getOwner().equals(userSession.getName()) && !prog.isPublished()){
				resp.sendError(401);
				return;
			}
			Program cloned = prog.clone(userSession.getName());
			cloned.unpublish();
			cloned.setAuthor(userSession.getName());
			
			pm.makePersistent(cloned);
			
			resp.getWriter().println(cloned.getId());
			
		} catch (IOException e) {
			e.printStackTrace();
			resp.sendError(500);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			resp.sendError(500);
		} finally {
			pm.close();
		}
	}
	
}
