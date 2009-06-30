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

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try {
			

			Session userSession;
			SessionManager sm = new SessionManager();
			
			if( !sm.isIntentional(req, resp) ){
				resp.sendError(500);
				return;
			}
			
			userSession = sm.authenticate(req, resp);
			
			Long pid = (Long) Base64.decodeToObject(req.getParameter("pid"));
			Program prog = pm.getObjectById(Program.class, pid);
			
			if( !prog.getOwner().equals(userSession.getName()) && !prog.isPublished()){
				resp.sendError(500);
				return;
			}
			Program cloned = prog.clone(userSession.getName());
			cloned.unpublish();
			cloned.setAuthor(userSession.getName());
			cloned.setBacklink(pid);
			
			pm.makePersistent(cloned);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			pm.close();
		}
	}
	
}
