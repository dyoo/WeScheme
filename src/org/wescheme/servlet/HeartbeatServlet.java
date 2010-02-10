package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

public class HeartbeatServlet extends HttpServlet {

	/**
	 * Returns program XML if either pid or publicId is provided.
	 */
	private static final long serialVersionUID = 1165047992267892812L;

	public void service(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		Session userSession;
		SessionManager sm = new SessionManager();
		userSession = sm.authenticate(req, resp);
		if( null != userSession ){
			resp.sendError(200);
		} else {
			resp.sendError(500);
		}
	} 
}
