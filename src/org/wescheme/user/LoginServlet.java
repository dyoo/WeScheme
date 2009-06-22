package org.wescheme.user;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.util.Crypt.KeyNotFoundException;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = -1587137886502580664L;

	

	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{	
		SessionManager sm = new SessionManager();
		try {
			sm.login(req, resp);
			resp.sendRedirect("index.html");
		} catch (KeyNotFoundException e) {
			e.printStackTrace();
		}
		
	}
	
}
