package org.wescheme.project;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

public class SaveProgram extends HttpServlet{

	private static final long serialVersionUID = 4038563388689831368L;
	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Session userSession;
		SessionManager sm = new SessionManager();
		try {
			
			userSession = sm.authenticate(req, resp);
			
			if( null != userSession ){
				long startTime = System.currentTimeMillis();
		
				String code = req.getParameter("code");
				resp.setContentType("text/plain");
			
				Program prog = new Program(code, userSession);
				pm.makePersistent(prog);
			
				long duration = System.currentTimeMillis() - startTime;
				System.out.println("Took " + duration/1000 + " seconds.");	
				System.out.println("Saved as " + userSession.getName());
			}

		} finally {
			pm.close();
		}
		
		resp.sendRedirect("index.jsp");
	}
}
