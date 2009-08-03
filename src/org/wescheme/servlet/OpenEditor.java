package org.wescheme.servlet;

import javax.jdo.PersistenceManager;
import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;



// Open an editor.
public class OpenEditor extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -418081137326385730L;

	/**
	 * 
	 */

	public void doGet(HttpServletRequest req, HttpServletResponse resp){
		doIt(req, resp);
	}

	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		doIt(req, resp);
	}

	private void doIt(HttpServletRequest req, HttpServletResponse resp) {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try {
			SessionManager sm = new SessionManager();			
			if( !sm.isIntentional(req, resp) ){
				resp.sendError(500);
				return;
			}
			Session userSession = sm.authenticate(req, resp);
			if (userSession == null) {
				resp.sendError(500);
			}
			RequestDispatcher dispatcher = 
					getServletContext().getRequestDispatcher("/dumb-editor/index.jsp");
			dispatcher.include(req, resp);
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {				
			pm.close();
		}
	}
}
