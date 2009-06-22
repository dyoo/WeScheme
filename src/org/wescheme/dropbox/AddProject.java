package org.wescheme.dropbox;

import javax.jdo.PersistenceManager;
import javax.jdo.Transaction;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.Base64;
import org.wescheme.util.PMF;

public class AddProject extends HttpServlet {

	private static final long serialVersionUID = 1927887337443757869L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try {
		
			
				Session userSession;
				SessionManager sm = new SessionManager();
				userSession = sm.authenticate(req, resp);
				
				Long dbID = (Long) Base64.decodeToObject(req.getParameter("dbID"));
				Integer binID = (Integer) Base64.decodeToObject(req.getParameter("binID"));
				Long progID = (Long) Base64.decodeToObject(req.getParameter("progID"));
				
				Dropbox db = Dropbox.getDropbox(pm, dbID);
				Program prog = (Program) pm.getObjectById(progID);
			
				if( userSession.getName() != prog.getOwner() ){
					throw new UnauthorizedUserException();
				}
			
				Entry entry = new Entry(db, binID, prog);
				pm.makePersistent(entry);
				pm.close();
		} catch (Exception e){
			System.err.println("Error while adding project");
			//TODO make error handling robust.
		}
	
	}
}
