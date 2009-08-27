<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<% 
   System.out.println("In console.jsp");
   // The Console page requires a login: if you come in without the right
   // credentials, let's bump them to the login page.
   SessionManager sm = new SessionManager(); 
   Session s = sm.authenticate(request, response);
   if( s == null ) {
       UserService us = UserServiceFactory.getUserService();
       // Not logged in: we should send them off to the login page.
       System.out.println("Not authenticated.  Redirecting");
       response.sendRedirect(us.createLoginURL("/login.jsp"));
   } else {
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>

<link rel="stylesheet" type="text/css" href="/css/console.css" />
<title>WeScheme</title>

<script src="editor/jquery.js"></script>
<script src="editor/jquery.createdomnodes.js"></script>
<script src="safeSubmit.js"></script>
<script src="/js/console.js"></script>

</head>
<body>


<div class="header">
	<h1 class="title">Your WeScheme Account</h1>
	<h2>Welcome <%= s.getName() %></h2>
</div>


<div id="toolbar">
	<ul>
		<li>
			<form method="POST" action="/logout">
			<input name="logout" value="Log Out" type="submit">
			</form>
		</li>
		<li><a href="/openEditor">Start<span>&nbsp;a new program</span></a></li>
	</ul>

</div>


<ul id="programList">
	<li class="EntryHeader">
	  <span class="ProgramTitle">Program Title</span>
	  <span class="ProgramId">Program ID</span>
	  <span class="ProgramModified">Last Modified</span>
	  <span class="ProgramPublishedPublished">Published?</span>
	</li>
	<%-- The rest will be filled in through Javascript --%>
</ul>





</body>
</html>
<% } %>
