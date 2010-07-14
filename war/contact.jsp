<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme :: Contact</title>

<script src="/editor/jquery.js"></script>
<script src="/heartbeat.js"></script>
<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

</head>
<body onload='setInterval("beat()",1800000);'>
<h1>WeScheme</h1><img src="css/images/BigLogo.png" width="20%">
<h2>Talk to us!</h2>
<div id="text">
What would you like to do?
<ul>
	<li><a href="mailto:dyoo@cs.wpi.edu">Report a bug</a> : Contact Danny Yoo, lead WeScheme and moby developer.</li>
	<li><a href="http://www.bootstrapworld.org/">Teach with it</a> : Contact Emmanuel Schanzer, developer of the <a href="http://www.bootstrapworld.org">Bootstrap</a> curriculum</li>
	<li><a href="http://github.com/dyoo/WeScheme">Get the source</a> : Check it out on <a href="https://github.com/dyoo/WeScheme">Github</a></li>
	<li>Suggest a feature : TBD</li>
</ul>
</div>

<div id="footer">
<a href="/about.jsp">About</a>
<a href="/contact.jsp">Contact</a>
<a href="/copyright.jsp">Copyright</a>
</div>

</body></html>