package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class SaveProjectServlet extends HttpServlet{

	private static final long serialVersionUID = 4038563388689831368L;
	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Session userSession;
		SessionManager sm = new SessionManager();

		if( !sm.isIntentional(req, resp) ){
			resp.sendError(401);
			return;
		}
		
		try {
			userSession = sm.authenticate(req, resp);
			
			if( null != userSession ){				
				String code = req.getParameter("code");
				String pid = req.getParameter("pid");
				if (code != null && pid == null) {
					Program prog = saveNewProgram(pm, userSession, code);
					resp.setContentType("text/plain");
					resp.getWriter().println(prog.getId());					
				} else if (code != null && pid != null) {
					Program prog = saveExistingProgram(pm, pid, code);
					resp.setContentType("text/plain");
					resp.getWriter().println(prog.getId());					
				} else {
					// FIXME: needs better error message.
					resp.sendError(401);
				}
			} else {				
				resp.sendError(401);
				return;
			}
		} finally {
			pm.close();
		}		
	}
	
	private Program saveNewProgram(PersistenceManager pm, Session userSession, String code) {
		Program prog = new Program(code, userSession);
		pm.makePersistent(prog);
		return prog;
	}
	
	private Program saveExistingProgram(PersistenceManager pm, String pid, String code) {
		Long id = (Long) Long.parseLong(pid);
		Key k = KeyFactory.createKey("Program", id);
		Program prog = pm.getObjectById(Program.class, k);
		prog.updateSource(code);
		pm.makePersistent(prog);
		return prog;
	}
}