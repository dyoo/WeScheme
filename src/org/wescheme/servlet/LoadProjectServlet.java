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

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class LoadProjectServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1165047992267892812L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
			PersistenceManager pm = PMF.get().getPersistenceManager();
			Session userSession;
			SessionManager sm = new SessionManager();
			
			try {
				
				userSession = sm.authenticate(req, resp);
				
				if( null != userSession ){
					XMLOutputter outputter = new XMLOutputter();
					Long id = (Long) Long.parseLong(req.getParameter("pid"));
					Key k = KeyFactory.createKey("Program", id);
	    			Program prog = pm.getObjectById(Program.class, k);
	    			resp.setContentType("text/xml");
					resp.getWriter().print(outputter.outputString(prog.toXML()));
				} else {
					resp.sendError(403);
				}
			} finally {
				pm.close();
			}
	}
	
}
