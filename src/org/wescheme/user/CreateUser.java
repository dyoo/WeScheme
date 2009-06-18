package org.wescheme.user;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CreateUser extends HttpServlet  {
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
		}
		resp.sendRedirect("index.jsp");
	}
}
