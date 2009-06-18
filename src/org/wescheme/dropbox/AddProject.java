package org.wescheme.dropbox;

import java.io.IOException;

import javax.cache.CacheException;
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
import org.wescheme.util.Crypt.KeyNotFoundException;

import com.google.appengine.api.datastore.Key;

public class AddProject extends HttpServlet {

	private static final long serialVersionUID = 1927887337443757869L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Transaction tx = pm.currentTransaction();
		try {
			try {
				tx.begin();
				//	TODO this must be done in a transaction.
			
				Session userSession;
				SessionManager sm = new SessionManager();
				userSession = sm.authenticate(req, resp);
				Long id = (Long) Base64.decodeToObject(req.getParameter("dbid"));
				Long pid = (Long) Base64.decodeToObject(req.getParameter("pid"));
				String binName = req.getParameter("bin");
				Dropbox db = Dropbox.getDropbox(pm, id);
				Program prog = (Program) pm.getObjectById(pid);
			
				if( userSession.getName() != prog.getOwner() ){
					throw new UnauthorizedUserException();
				}
			
				Bin bin = db.getBin(binName);
				bin.add(prog, db.owner());
				pm.makePersistent(db);
				tx.commit();
				pm.close();
		
			} finally {
				if(tx.isActive()){
					tx.rollback();
				}
			
				pm.close();
			
			}
		} catch (Exception e){
			System.err.println("Error while adding project");
			//TODO make error handling robust.
		}
	
	}
}
