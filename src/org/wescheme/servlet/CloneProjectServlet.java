package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.NameGenerator;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;


public class CloneProjectServlet extends javax.servlet.http.HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5310251019625080018L;
	private static final Logger log = Logger.getLogger(CloneProjectServlet.class.getName());
	
	// Precondition: you should be able to clone a project if
	// you own the project, or
	// you don't own the project but you can see it because it's been published.
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		PersistenceManager pm = PMF.getManager();
		
		try {
			Session userSession;
			SessionManager sm = new SessionManager();
			
			if( !sm.isIntentional(req, resp) ){
				resp.sendError(401);
				return;
			}
			
			userSession = sm.authenticate(req, resp);
			
			if( null == userSession ){
				resp.sendError(401);
			}
			
			Program prog = pm.getObjectById(Program.class, Long.parseLong(req.getParameter("pid")));
			if( !prog.getOwner().equals(userSession.getName()) && !prog.isPublished()){
				log.info(req.getParameter("user") + " cannot clone " + prog.getPublicId());
				resp.sendError(401);				
				return;
			}
			Program cloned = prog.clone(userSession.getName(), pm);
			cloned.unpublish();
			cloned.setAuthor(userSession.getName());
			cloned.setPublicId(NameGenerator.getInstance(getServletContext()).generateUniqueName(pm));
			
			if(req.getParameter("code") != null) {
				cloned.updateSource(req.getParameter("code"));
			}
			
			pm.makePersistent(cloned);
			resp.setContentType("text/plain");
			resp.getWriter().println(cloned.getId());
		} catch (IOException e) {
			e.printStackTrace();
			resp.sendError(500);
		} finally {
			pm.close();
		}
	}
	
}
