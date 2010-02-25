<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme :: Copyright</title>

<script src="/runtime/base.js"></script>
<script src="/editor/jquery.js"></script>
<script src="/heartbeat.js"></script>
<link rel="stylesheet" type="text/css" href="css/splash.css" id="style" />

</head>
<body onload='setInterval("beat()",1800000);'>
<h1>WeScheme</h1><img src="css/images/BigLogo.png" width="20%">
<h2>is available under the GNU LGPL (Copyleft) License</h2>
<div id="text">
	More information can be found at the <a href="http://www.gnu.org/copyleft/">GNU LGPL page</a>.
</div>

<div id="footer">
<a href="About.jsp">About</a>
<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>

</body></html>