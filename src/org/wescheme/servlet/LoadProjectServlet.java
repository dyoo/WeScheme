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

	public void doGet(HttpServletRequest req, HttpServletResponse resp){
		
			PersistenceManager pm = PMF.get().getPersistenceManager();
			Session userSession;
			SessionManager sm = new SessionManager();
			
			if( !sm.isIntentional(req,resp)){
				
					try {
						resp.sendError(500);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				
			}
			
			try {
				
				userSession = sm.authenticate(req, resp);
				
				if( null != userSession ){
					Long id = (Long) Base64.decodeToObject(req.getParameter("pid"));
					Key k = KeyFactory.createKey("Program", id);
	    			Program prog = pm.getObjectById(Program.class, k);
					resp.getWriter().print(prog.toXML());
				} else {
					resp.sendError(500);
				}
				
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
