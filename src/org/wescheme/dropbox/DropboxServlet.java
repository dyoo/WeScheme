package org.wescheme.dropbox;

import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.PMF;

public class DropboxServlet extends HttpServlet {
	private static final long serialVersionUID = 3502366250772332984L;

	
	public void service(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try{
			try{
				Session userSession;
				SessionManager sm = new SessionManager();
				userSession = sm.authenticate(req, resp);
				
				if( userSession == null ){
					throw new UnauthorizedUserException();
				}
				
				Query query = pm.newQuery(Dropbox.class);
				query.setFilter("ownerName_ == ownerParam");
				query.declareParameters("String ownerParam");
				
				try {
					@SuppressWarnings({ "unchecked" })
					List<Dropbox> dbl = (List<Dropbox>) query.execute(userSession.getName());
					resp.getWriter().println("got " + dbl.size() + " dropboxes");
					for( Dropbox d : dbl ){
						resp.getWriter().print(d.toXML());
					}
				} finally {
					query.closeAll();
				}
				
			} catch (Exception e) {
				System.err.println(e);
			}
		} finally {
			pm.close();
		}
	}

}
