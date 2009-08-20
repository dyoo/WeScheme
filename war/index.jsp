<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<html>
<head>

<link rel="stylesheet" type="text/css" href="style.css" />


<script src="editor/jquery.js"></script>
<script src="editor/jquery.createdomnodes.js"></script>
<script src="safeSubmit.js"></script>
<script src="index.js"></script>

<script>
<% SessionManager sm = new SessionManager(); 
   Session s = sm.authenticate(request, response);
   if( s != null ) {
%>
     var userName = "<%= s.getName()%>";
<% } else { %>
     var userName = undefined;
<% } %>
</script>


</head>
<body>

<h1 class="title">WeScheme Console</h1>


<%
if( s != null ) {
%>

Welcome <%= s.getName() %>

<form method="POST" action="/logout">
<input type="submit" name="logout" value="logout">
</form>

<h2>Your programs</h2>
<ul id="programList"></ul>






<% } else { %>
Welcome anonymous!   <a href="login.jsp">Login</a>
<% } %>






<div><a href="/openEditor">Open New Program</a></div>



<!-- Everything below this point is for debugging purposes -->

<hr/>


<%--

<h2>Debug stuff</h2>

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

--%>

Create User:
<form method="POST" action="/createUser">

Name: <input type="text" cols="20" name="user"></input>
E-mail: <input type="text" cols="20" name="email"></input>
Password: <input type="password" cols="20" name="password"></input>
<input type="submit" name="Create User">

</form>
</p>

<%--
<p>
Key Server:
<form method="POST" action="/keyServer">
<input type="submit" name="Create User">
</form>
</p>



--%>


</body>
</html>
