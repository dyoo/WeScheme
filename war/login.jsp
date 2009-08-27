<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>

<html>
<head><title>WeScheme</title></head>
  <body>

<h1 class="title">WeScheme Login</h1>

<%
		// Are we logged in?
		SessionManager sm = new SessionManager();
		Session s = sm.authenticate(request, response);
		
		if( s != null ) {
			response.sendRedirect("/openEditor");
		} else {

			// We aren't logged in, so let's try to authenticate against google.
			UserService us = UserServiceFactory.getUserService();
			s = sm.authGoogle(us);
			if( s != null ){				// we've authenticated against google
				sm.issueSession(s, response);	// issue the session
			} else {
				// Let's try to authenticate against WeScheme!
				s = sm.authWeScheme(request, response);
        		if( s != null ){
        			sm.issueSession(s, response);
        		}
        	}
        }
	if (request.getParameter("dest") != null) {
   	    response.sendRedirect(request.getParameter("dest"));
        } else {
            response.sendRedirect("/openEditor"); 
        }
%>

  </body>
</html>
