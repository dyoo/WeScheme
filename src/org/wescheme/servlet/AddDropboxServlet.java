package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.dropbox.Dropbox;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

public class AddDropboxServlet extends HttpServlet {
	private static final long serialVersionUID = -3189019553237054108L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		SessionManager sm = new SessionManager();
		try {
			if( !sm.isIntentional(req, resp)) {
				resp.sendError(500);
			} else try {
				
					Session s = sm.authenticate(req, resp);
					String name = s.getName();
					String title = req.getParameter("title");
					
					Dropbox db = new Dropbox(name, title);
					pm.makePersistent(db);
					pm.close();
				
					resp.getWriter().println(db.getId());
			} catch (Exception e ) {
				// TODO `Authenticate` must throw fewer exceptions. Perhaps 'AuthenticationFailedException' 
				e.printStackTrace();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
