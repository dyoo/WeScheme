<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>

<%
SessionManager sm = new SessionManager();
Session s = sm.authenticate(request, response);
UserService us = UserServiceFactory.getUserService();
%>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme</title>


<!-- Google analytics support -->
<jsp:include page="/google-analytics.jsp"/>


<!-- Add compatibility libraries for IE. -->
<jsp:include page="/js/compat/compat.jsp"/>

<script src="/editor/jquery.js"></script>

<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

</head>
<script>
var onOpenEditor = function() {
    window.location='/openEditor';
};

var onLogin = function() {
    window.location = '<%= us.createLoginURL("/login.jsp") %>';
};

var onLogout = function() {
    window.location='/logout';
};

$(document).ready(function() {
    $("#startCoding").click(onOpenEditor);
    $("#loginButton").click(onLogin);
    $("#logoutButton").click(onLogout);
});
</script>
<body>
<h1>WeScheme</h1>
<input id="startCoding" value="Start Coding" type="button">

<img src="css/images/BigLogo.png">
	

<% if( s == null ) { %>
    <input id="loginButton" value="Log In" type="button">
<%  } else { %>
    <input id="logoutButton" value="Log Out" type="button">
<% } %>	
	
	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme!</h2>


<div id="links">
     <a href="http://www.vidiowiki.com/watch/cydr9yk/#">What is WeScheme? [video]</a>
</div>


<jsp:include page="/footer.jsp"/>
</body></html>