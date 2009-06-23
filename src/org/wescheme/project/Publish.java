package org.wescheme.project;

import java.io.IOException;

import javax.cache.CacheException;
import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.PMF;
import org.wescheme.util.Crypt.KeyNotFoundException;

public class Publish extends HttpServlet{

	private static final long serialVersionUID = -5765142296681571504L;

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
				Integer publish = new Integer(req.getParameter("publish"));
				resp.setContentType("text/plain");
			
				Program prog = new Program(code, userSession);
				if( 1 == publish ){
					prog.publish();
				}
				pm.makePersistent(prog);
			
				long duration = System.currentTimeMillis() - startTime;
				System.out.println("Took " + duration/1000 + " seconds.");	
				System.out.println("Published as " + userSession.getName());
			}

		} finally {
			pm.close();
		}
		
		resp.sendRedirect("index.jsp");
	}
	
}
