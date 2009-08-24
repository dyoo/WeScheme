<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>

<html>
<head><title>WeScheme</title>

<script src="/editor/jquery.js"></script>
<script src="/heartbeat.js"></script>
<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

</head>
<body onload='setInterval("beat()",1800000);'>
<h1>WeScheme</h1>
<input id="newProgram" value="Start Coding" type="button" onclick="javascript:window.location='/openEditor'" />
	<img src="css/images/BigLogo.png">
	

<%
		// Are we logged in?
		SessionManager sm = new SessionManager();
		Session s = sm.authenticate(request, response);
		UserService us = UserServiceFactory.getUserService();
		if( s == null ) {
%>

 <input id="newProgram" value="Log In" type="button" onclick="javascript:window.location='<%= us.createLoginURL("/login.jsp") %>'" />
 
<%  } else { %>

<input id="newProgram" value="Log Out" type="button" onclick="javascript:window.location='/logout'" %>

<% } %>	
	
	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme</h2>




<div id="footer">
<a href="#">About</a>

<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>

</body></html>