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

<!-- JQuery -->
<script src="/js/jquery/jquery-1.3.2-min.js" type="text/javascript"></script>
<script src="/js/jquery/jquery-ui-1.7.3.custom.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="/css/jquery-ui.css"/>


<!-- The splash screen JavaScript libraries. -->
<script src="/js/splash-calc-min.js" type="text/javascript"></script>


<link rel="stylesheet" type="text/css" href="/css/splash.css" id="style" />

</head>
<script type="text/javascript">
var onOpenEditor = function() {
    window.location='/openEditor';
};

var onMyPrograms = function() {
    window.location='/console';
};

var onLogin = function() {
    window.location = '/driveLogin';
};

var onLogout = function() {
    if(confirm("You will be logged out of WeScheme and other Google services.")) {
       window.location='/logout';
    }
};

$(document).ready(function() {
    $("#startCoding").click(onOpenEditor);
    $("#loginButton").click(onLogin);
    $("#logoutButton").click(onLogout);
    $("#myPrograms").click(onMyPrograms);
});
</script>
<body>
<h1>WeScheme</h1>
<% if (s == null) { %>
    <input id="startCoding" value="Start Coding" type="button">
<% } else { %>
    <input id="myPrograms" value="My Programs" type="button">
<% } %>

<img src="css/images/BigLogo.png">
	

<% if( s == null ) { %>
    <input id="loginButton" value="Log In" type="button">
<%  } else { %>
    <input id="logoutButton" value="Log Out" type="button">
<% } %>	
	

<div id="links">
     <a href="http://www.BootstrapWorld.org">Looking for a curriculum, too?</a>
</div>


<jsp:include page="/footer.jsp"/>
</body></html>