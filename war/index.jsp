<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<html>
<head>

<script src="safeSubmit.js"></script>

</head>
<body>


<%
		SessionManager sm = new SessionManager();
		Session s = sm.authenticate(request, response);
		
		if( s != null ) {
%>

Welcome <%= s.getName() %>

<% } else { %>

Welcome anonymous!

<% } %>

<a href="/openEditor">Open Editor</a>


<form method="POST" action="/publish">

<textarea cols="120" rows="20" name="code"></textarea>
<input type="checkbox" name="publish" value="publish">
<input type="submit" name="Publish">

</form>
<p>
Fetch programs:
<form method="POST" action="/programManager">
<input type="submit" value="fetch programs">

</form>
</p>
<p>
Create User:
<form method="POST" action="/createUser">

<textarea cols="20" rows="1" name="user"></textarea>
<textarea cols="20" rows="1" name="email"></textarea>
<textarea cols="20" rows="1" name="password"></textarea>
<input type="submit" name="Create User">

</form>
</p>

<a href="login.jsp">Login</a>
<form method="POST" action="/logout">
<input type="submit" name="logout" value="logout">
</form>
<p>
Key Server:
<form method="POST" action="/keyServer">
<input type="submit" name="Create User">
</form>
</p>




</body>
</html>
