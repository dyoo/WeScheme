<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>

<html>
<head><title>WeScheme</title></head>

<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

<body>
<h1>WeScheme</h1>
	<a href="openEditor"><input type="button" id="newProgram" value="Start Coding" /></a>
	<img src="css/images/BigLogo.png">
	

<%
		// Are we logged in?
		SessionManager sm = new SessionManager();
		Session s = sm.authenticate(request, response);
		
		if( s == null ) {

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
        		} else { 
%>
<a href="login"><input type="button" id="newProgram" value="Log In" /></a>

<div id="login">
<a href="<%= us.createLoginURL(request.getRequestURI()) %>">Sign in with Google</a>
<p>
Sign in with WeScheme 
<form method="POST" action="/">
Username: <input type="text" disabled="disabled" name="user"></input> <br />
Password: <input type="password" disabled="disabled" name="password"></input> <br />
<input type="submit" disabled="disabled" name="login" value="Log In">
<input type="submit" disabled="disabled" name="register" value="Register">
</form>
</p>

</div>

<%  }}} %>	
	
	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme</h2>



</div>

<div id="footer">
<a href="#" class="foot-link">About</a>
<a href="#" class="foot-link">Contact</a>
<a href="#" class="foot-link">Copyright</a>
</div>
</body>
</html>