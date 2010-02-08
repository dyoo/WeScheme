package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.NameGenerator;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;


public class SaveProjectServlet extends HttpServlet{
	private static final Logger log = Logger.getLogger(SaveProjectServlet.class.getName());
	private static final long serialVersionUID = 4038563388689831368L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		SessionManager sm = new SessionManager();
		
		if( !sm.isIntentional(req, resp) ){
			resp.sendError(401);
			return;
		}
		String title = req.getParameter("title");
		String code = req.getParameter("code");
		String pid = req.getParameter("pid");
		try {
			Session userSession = sm.authenticate(req, resp);
			if( null != userSession ){			
				if (pid == null) {
					saveNewProgram(pm, userSession, resp, title, code);
				} else {
					saveExistingProgram(pm, userSession, resp, pid, title, code);
					}
			} else {
				log.warning("User session can't be retrieved; user appears to be logged out.");
//				log.warning("User does not own project " + req.getParameter("pid"));
				resp.sendError(401);
				return;
			}
		} finally {
			pm.close();
		}		
	}

	private void saveNewProgram(PersistenceManager pm, Session userSession,
			HttpServletResponse resp,
			String title, String code) throws IOException {
		Program prog = new Program(code, userSession.getName());
		prog.updateTitle(title);
		prog.setPublicId(NameGenerator.getInstance(getServletContext()).generateUniqueName(pm));
		pm.makePersistent(prog);

		resp.setContentType("text/plain"); 
		resp.getWriter().println(prog.getId());					
	}
	
	

	


	private void saveExistingProgram(PersistenceManager pm, Session userSession,
			HttpServletResponse resp,
			String pid, String title, String code) throws IOException {
		// Preconditions: the program is owned by the user, and has not been published yet.
		Long id = (Long) Long.parseLong(pid);
		Program prog = pm.getObjectById(Program.class, id);
		if (prog.getOwner().equals(userSession.getName()) && !prog.isPublished()) {
			prog.updateTitle(title);
			prog.updateSource(code);

			if (prog.getPublicId() == null) {
				prog.setPublicId(NameGenerator.getInstance(getServletContext()).generateUniqueName(pm));
			}
		
			resp.setContentType("text/plain");
			resp.getWriter().println(prog.getId());					
		} else {
			// FIXME: throw an error that the client can recognize!
			throw new RuntimeException("Cannot save program: either not owner, or program published");
		}
	}
}