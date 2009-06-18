package org.wescheme.dropbox;

import org.wescheme.util.Base64;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.PMF;

public class AddBin extends HttpServlet {
	private static final long serialVersionUID = 4170044691079582171L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Session userSession;
		SessionManager sm = new SessionManager();
		try {
			
			userSession = sm.authenticate(req, resp);
			
			if( null != userSession ){		
				String binName = req.getParameter("binName");
				Long dbid = (Long) Base64.decodeToObject(req.getParameter("dbid"));
				
				Dropbox db = Dropbox.getDropbox(pm, dbid);
				
				if( userSession.getName() != db.owner() ){
					throw new UnauthorizedUserException();
				}
				
				db.addBin(binName);
			}
	} catch (Exception e) {
		System.out.println("Add bin exploded");
	}
	}
}
