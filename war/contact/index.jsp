<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>WeScheme :: Contact</title>

<script src="/js/jquery/jquery-1.3.2-min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="/css/splash.css" id="style" />

<!-- Google analytics support -->
<jsp:include page="/google-analytics.jsp"/>


</head>
<body>
<h1>WeScheme</h1><a href="/" class="headerlink"><img src="/css/images/BigLogo.png" width="20%"></a>
<h2>Talk to us!</h2>
<div id="text">
<ul>
	<li><a href="mailto:dyoo@cs.wpi.edu">Report a bug</a> : Contact Danny Yoo, lead WeScheme and moby developer.</li>
	<li><a href="http://www.bootstrapworld.org/">Teach with it</a> : Contact Emmanuel Schanzer, developer of the <a href="http://www.bootstrapworld.org">Bootstrap</a> curriculum.</li>
</ul>
</div>


<jsp:include page="/footer.jsp"/>

</body></html>