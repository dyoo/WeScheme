package org.wescheme.servlet;

import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.dropbox.Dropbox;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.PMF;

public class ShowDropboxServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
		Session userSession;
		SessionManager sm = new SessionManager();
		userSession = sm.authenticate(req, resp);
				
		if( userSession == null ){
			resp.sendError(401);
			return;
		}
				
		Query query = pm.newQuery(Dropbox.class);
		query.setFilter("ownerName_ == ownerParam");
		query.declareParameters("String ownerParam");
				
		try {
			@SuppressWarnings({ "unchecked" })
			List<Dropbox> dbl = (List<Dropbox>) query.execute(userSession.getName());
			resp.getWriter().println("got " + dbl.size() + " dropboxes");
			for( Dropbox d : dbl ){	resp.getWriter().print(d.toXML()); }
		} finally {
			query.closeAll();
		}
		} finally {
		
			pm.close();
		}
		}
	}
	


