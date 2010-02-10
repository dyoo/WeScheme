package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Transaction;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.dropbox.Dropbox;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.PMF;

public class AddBinServlet extends HttpServlet {
	private static final long serialVersionUID = -182869406403756507L;
	private static final Logger log = Logger.getLogger(AddBinServlet.class.getName());
	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		PersistenceManager pm = PMF.getManager();
		Transaction tx = pm.currentTransaction();

		try {



			tx.begin();
			Session userSession;
			SessionManager sm = new SessionManager();
			userSession = sm.authenticate(req, resp);

			if( !sm.isIntentional(req, resp) ){
				log.warning("Intentionality check failed. Potential CSRF.");
				throw new UnauthorizedUserException();
			}

			Long dbID = new Long(req.getParameter("dbid"));

			String binName = req.getParameter("binName");

			System.out.println("Entered addBin as " + userSession.getName() + " with dbid " + dbID + " and bin " + binName);

			Dropbox db = Dropbox.getDropbox(pm, dbID);

			if( userSession.getName().equals(db.owner()) ){
				db.addBin(binName);
			}
		} catch (UnauthorizedUserException e) {
			try {
				log.info("User authentication failure in AddBinServlet");
				resp.sendError(500);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
		} finally { 
			if(tx.isActive()){
				tx.rollback();
			}
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
