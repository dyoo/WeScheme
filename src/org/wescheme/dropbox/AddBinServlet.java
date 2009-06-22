package org.wescheme.dropbox;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.Base64;
import org.wescheme.util.PMF;

public class AddBinServlet extends HttpServlet {
	private static final long serialVersionUID = -182869406403756507L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
	
		try{
		try{
			Session userSession;
			SessionManager sm = new SessionManager();
			userSession = sm.authenticate(req, resp);
			Long dbID = (Long) Base64.decodeToObject(req.getParameter("dbID"));
				
			String binName = req.getParameter("binName");
				
			Dropbox db = Dropbox.getDropbox(pm, dbID);
				
			if( userSession.getName() != db.owner() ){
				db.addBin(binName);
			} 
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} finally { 
				//TODO finalize bin adding
				pm.close();
				
				try {
					resp.sendRedirect("displayDB");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} // TODO make this AJAXian
			}
		}
}
