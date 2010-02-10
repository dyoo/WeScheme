package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

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
	private static final Logger log = Logger.getLogger(AddDropboxServlet.class.getName());

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.getManager();
		SessionManager sm = new SessionManager();
		try {
			if( !sm.isIntentional(req, resp)) {
				log.warning("Intentionality check failed. Potential CSRF.");
				resp.sendError(500);
			} else try {
				
					Session s = sm.authenticate(req, resp);
					String name = s.getName();
					String title = req.getParameter("title");
					
					Dropbox db = new Dropbox(name, title);
					pm.makePersistent(db);				
					resp.getWriter().println(db.getId());
			} catch (Exception e ) {
				// TODO `Authenticate` must throw fewer exceptions. Perhaps 'AuthenticationFailedException' 
				log.info("Failed to authenticate in AddDropboxSerlvet.");
				e.printStackTrace();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			log.severe("IO problem in AddDropboxServlet. (This is bad)");
			e.printStackTrace();
		} finally {
			pm.close();
		}
		
	}
}
