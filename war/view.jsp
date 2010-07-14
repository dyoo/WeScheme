<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<%
    String publicId = request.getParameter("publicId");
    String encodedId = java.net.URLEncoder.encode(publicId, "utf-8");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme</title>
<link rel="stylesheet" type="text/css" href="css/view.css" id="style" />

<script src="/runtime/base.js"></script>
<script src="/editor/jquery.js"></script>
<script src="/heartbeat.js"></script>
<script src="/js/submitpost.js"></script>

<script src="/js/view-calc.js"></script>
</head>


<body onload='setInterval("beat()",1800000); update(decodeURIComponent("<%= encodedId %>"))'>
<h1>WeScheme</h1>
<h2 id="programTitle">&nbsp;</h2>

<a id="runIt" class="linkbutton">Run it!</a>
<a id="viewSource" class="linkbutton">View source</a>


<h2><div id="socialBookmarks"></div></h2>	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme!</h2>




<div id="footer">
<a href="#">About</a>

<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>

</body></html>
