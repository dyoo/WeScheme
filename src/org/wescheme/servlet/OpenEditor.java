package org.wescheme.servlet;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.dropbox.Dropbox;
import org.wescheme.dropbox.Entry;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
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
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		try {
/*			SessionManager sm = new SessionManager();			
			if( !sm.isIntentional(req, resp) ){
				resp.sendError(500);
				return;
			}
			Session userSession = sm.authenticate(req, resp);
			if (userSession == null) {
				resp.sendError(500);
			}
			*/
			resp.sendRedirect("/dumb-editor/index.jsp");
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {				
			pm.close();
		}
	
	}
	
	
	
	
}
