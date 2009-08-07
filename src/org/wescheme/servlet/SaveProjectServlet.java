package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.NameGenerator;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

import java.util.List;

public class SaveProjectServlet extends HttpServlet{

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
		Program prog = new Program(code, userSession);
		prog.updateTitle(title);
		prog.setPublicId(findUniquePublicId(pm));
		pm.makePersistent(prog);

		resp.setContentType("text/plain"); 
		resp.getWriter().println(prog.getId());					
	}
	
	
	// Generates a new id that's unique from any other program's public id.
	@SuppressWarnings("unchecked")
	private String findUniquePublicId(PersistenceManager pm) throws IOException {
		javax.jdo.Query query = pm.newQuery(Program.class);
		query.setFilter("publicId_ == param");
		query.declareParameters("String param");
		try {
			while (true) {
				String aName = NameGenerator.getInstance(getServletContext()).generateName();
				List<Program> list = (List<Program>) query.execute(aName);
				if (list.size() == 0) {
					return aName;
				}
				else {
					System.out.println("found duplicate for " + aName);
				}
			}
		} finally {
			query.closeAll();
		}
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
				prog.setPublicId(findUniquePublicId(pm));
			}
		
			resp.setContentType("text/plain");
			resp.getWriter().println(prog.getId());					
		} else {
			// FIXME: throw an error that the client can recognize!
			throw new RuntimeException("Cannot save program: either not owner, or program published");
		}
	}
}