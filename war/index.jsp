<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>

<html>
<head><title>WeScheme</title>
<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

</head>
<body>
<h1>WeScheme</h1>
<input id="newProgram" value="Start Coding" type="button" onclick="javascript:window.location='/openEditor'" />
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

 <input id="newProgram" value="Log In" type="button" onclick="javascript:window.location='<%= us.createLoginURL("/openEditor") %>'" />
<h2><%= request.getRequestURI() %></h2>
<div id="login">
<a href="">Sign in with Google</a>
	<p>
	</p><form method="post" target="/" onsubmit="return window.confirm(&quot;You are submitting information to an external page.\nAre you sure?&quot;);">
	Username: <input disabled name="user" type="text"> <br>
	Password: <input disabled name="password" type="password"> <br>
	<input disabled name="login" value="Log In" type="submit">

	<input disabled name="cancel" value="Cancel" type="submit">
	</form>
	<p></p>
</div>


<%  }}} %>	
	
	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme</h2>



</div>

<div id="footer">
<a href="#">About</a>

<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>
</div></body></html>