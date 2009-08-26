package org.wescheme.servlet;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.SessionManager;
import org.wescheme.util.Crypt.KeyNotFoundException;
import java.util.logging.Logger;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = -1587137886502580664L;
	
	private static final Logger log = Logger.getLogger(LoginServlet.class.getName());

	public void service(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{	
		SessionManager sm = new SessionManager();
		try {
			sm.login(req, resp); // This method fires its own HTTP responses.
		} catch (KeyNotFoundException e) {
			e.printStackTrace();
			log.severe("Login failed: Key not found!");
		}
		
	}
	
}
