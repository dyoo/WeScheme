package org.wescheme.servlet;

import java.io.IOException;

import javax.cache.CacheException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.user.WeSchemeUser;
import org.wescheme.util.Crypt.KeyNotFoundException;

public class CreateUserServlet extends HttpServlet  {
	private static final long serialVersionUID = 9165706971511057523L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException
	{
		try {
			//TODO I'm not sanity checking the e-mail address. What happens when the user enters a gmail addy?
			
			WeSchemeUser.createUser(req.getParameter("user"), req.getParameter("password"),req.getParameter("email"));
			//SessionManager sm = new SessionManager();
			//sm.login(req, resp);
			resp.getWriter().println("created " + req.getParameter("user"));
		} catch (UnauthorizedUserException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (CacheException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (KeyNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		resp.sendRedirect("index.jsp");
	}
}
