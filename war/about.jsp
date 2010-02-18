<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme :: About</title>

<script src="/runtime/base.js"></script>
<script src="/editor/jquery.js"></script>
<script src="/heartbeat.js"></script>
<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

</head>
<body onload='setInterval("beat()",1800000);'>
<h1>WeScheme</h1><img src="css/images/BigLogo.png" width="20%">
<h2>makes use of...</h2>
<div id="text">
<ul>
	<li><a href="#">moby</a> : a Scheme compiler which allows Scheme programs to be run as "native" Android apps, or as javascript programs which run in a web browser.</li>
	<li><a href="#">AppEngine</a> : Google's "cloud" of computing infrastructure. WeScheme uses AppEngine to handle user accounts, serverside compilation, and file management </li>
	<li><a href="#">IE8</a> : Dean Edwards' excellent javascript library, which allows us to ignore many of the cross-browser issues associated with supporting IE6 and 7. </li>
	<li><a href="#">ExCanvas</a> : Google's javascript library that provides a Canvas implementation on browsers which do not support it (IE). </li>
	<li><a href="#">Closure</a> : Google's javascript compiler, library and template system.</li>
</ul>
</div>

<div id="footer">
<a href="About.jsp">About</a>
<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>

</body></html>