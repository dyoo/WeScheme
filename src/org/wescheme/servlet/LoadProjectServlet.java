package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
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

public class LoadProjectServlet extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
			PersistenceManager pm = PMF.get().getPersistenceManager();
			Session userSession;
			SessionManager sm = new SessionManager();
			
			try {
				
				userSession = sm.authenticate(req, resp);
				
				if( null != userSession ){
					Long id = (Long) Base64.decodeToObject(req.getParameter("pid"));
					Key k = KeyFactory.createKey("Program", id);
	    			Program prog = pm.getObjectById(Program.class, k);
					resp.getWriter().print(prog.toXML());
				} else {
					resp.sendError(403);
				}
			} catch (ClassNotFoundException e) {
				resp.sendError(500);
				e.printStackTrace();
			} finally {
				pm.close();
			}
	}
	
}
