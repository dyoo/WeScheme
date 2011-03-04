<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme :: Copyright</title>

<script src="/editor/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="/css/splash.css" id="style" />

<!-- Google analytics support -->
<jsp:include page="/google-analytics.jsp"/>


</head>
<body>
<h1>WeScheme</h1><a href="/" class="headerlink"><img src="/css/images/BigLogo.png" width="20%"></a>
<h2>is available under the GNU LGPL (Copyleft) License</h2>
<div id="text">
	More information can be found at the <a href="http://www.gnu.org/copyleft/">GNU LGPL page</a>.
</div>


<jsp:include page="/footer.jsp"/>


</body></html>