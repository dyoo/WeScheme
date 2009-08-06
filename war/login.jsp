<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>

<html>
  <body>

<%
		// Are we logged in?
		SessionManager sm = new SessionManager();
		Session s = sm.authenticate(request, response);
		
		if( s != null ) {
			response.sendRedirect("index.jsp");
		} else {

			// We aren't logged in, so let's try to authenticate against google.
			UserService us = UserServiceFactory.getUserService();
			s = sm.authGoogle(us);
			if( s != null ){				// we've authenticated against google
				sm.issueSession(s, response);	// issue the session
				response.sendRedirect(request.getRequestURI());	// discard google credentials
			} else {

				// Let's try to authenticate against WeScheme!
				s = sm.authWeScheme(request, response);
        		if( s != null ){
        			sm.issueSession(s, response);
        			response.sendRedirect("index.jsp");
        		} else { 
%>

<a href="<%= us.createLoginURL(request.getRequestURI()) %>">Sign in with Gmail credentials</a>
<p>
Sign in with WeScheme credentials 
<form method="POST" action="http://localhost:8080/login.jsp">
<textarea cols="20" rows="1" name="user"></textarea>
<textarea cols="20" rows="1" name="password"></textarea>
<input type="submit" name="login" value="login">
</form>
</p>

<%  }}} %>
  </body>
</html>
