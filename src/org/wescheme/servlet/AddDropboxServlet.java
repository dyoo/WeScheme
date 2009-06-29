package org.wescheme.dropbox;

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
			if( true || sm.isIntentional(req, resp)){
				Session s = sm.authenticate(req, resp);
				String name = s.getName();
				String title = req.getParameter("title");
				
				Dropbox db = new Dropbox(name, title);
				pm.makePersistent(db);
				pm.close();
			}
			
			resp.sendRedirect("dropbox");
		} catch (Exception e ) {
			// TODO `Authenticate` must throw fewer exceptions. Perhaps 'AuthenticationFailedException' 
			e.printStackTrace();
		}
		
	}
}
