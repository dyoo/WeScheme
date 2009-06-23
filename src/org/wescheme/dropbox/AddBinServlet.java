package org.wescheme.dropbox;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

public class AddBinServlet extends HttpServlet {
	private static final long serialVersionUID = -182869406403756507L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try{
			
			Session userSession;
			SessionManager sm = new SessionManager();
			userSession = sm.authenticate(req, resp);
			Long dbID = new Long(req.getParameter("dbid"));
			
			String binName = req.getParameter("binName");
			
			System.out.println("Entered addBin as " + userSession.getName() + " with dbid " + dbID + " and bin " + binName);
			
			Dropbox db = Dropbox.getDropbox(pm, dbID);
				
			if( userSession.getName().equals(db.owner()) ){
				db.addBin(binName);
			}
		} finally { 
				//TODO finalize bin adding
				pm.close();
				
				try {
					resp.sendRedirect("/dropbox");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} // TODO make this AJAXian
			}
	}
}
