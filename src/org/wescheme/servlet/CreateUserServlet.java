package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.cache.CacheException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import org.wescheme.user.Session;
//import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.user.WeSchemeUser;
import org.wescheme.util.Crypt.KeyNotFoundException;

public class CreateUserServlet extends HttpServlet  {
	private static final Logger log = Logger.getLogger(CreateUserServlet.class.getName());
	private static final long serialVersionUID = 9165706971511057523L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException
	{
		
		
		try {
			//TODO I'm not sanity checking the e-mail address. What happens when the user enters a gmail addy?
			
			WeSchemeUser.createUser(req.getParameter("user"), req.getParameter("password"),req.getParameter("email"));
			//SessionManager sm = new SessionManager();
			//sm.login(req, resp);
			resp.sendError(200);
			return;
		} catch (UnauthorizedUserException e) {
			log.info("User " + req.getParameter("user") + " already exists, cannot create.");
			resp.sendError(401);
			return;
		} catch (CacheException e) {
			log.severe("Cache failure in CreateUserServlet");
			resp.sendError(500);
			return;
		} catch (KeyNotFoundException e) {
			log.severe("Creating user failed: Key not found!");
			resp.sendError(500);
			return;
		}
		
	}
}
