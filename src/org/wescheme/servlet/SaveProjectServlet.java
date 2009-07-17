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
			// TODO: this must be done in a transaction.
			if( null != userSession ){		
				if (req.getParameter("pid") != null) {
					String code = req.getParameter("code");
					Long id = (Long) Long.parseLong(req.getParameter("pid"));
					Key k = KeyFactory.createKey("Program", id);
	    			Program prog = pm.getObjectById(Program.class, k);
	    			prog.updateSource(code);
	    			pm.makePersistent(prog);	    	
	    			
					resp.getWriter().print(prog.getId());
				} else {				
					String code = req.getParameter("code");
					resp.setContentType("text/plain");
				
					Program prog = new Program(code, userSession);
					pm.makePersistent(prog);
					resp.getWriter().print(prog.getId());
				}
			}		
		} finally {
			pm.close();
		}
	}
}
