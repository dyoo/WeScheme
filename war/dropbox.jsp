<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<%@ page import="org.wescheme.dropbox.Dropbox" %>
<%@ page import="org.wescheme.dropbox.Bin" %>
<%@ page import="org.wescheme.project.Program" %>
<%@ page import="javax.jdo.Query" %>
<%@ page import="java.util.List" %>
<%@ page import="javax.jdo.PersistenceManager" %>
<%@ page import="org.wescheme.util.PMF" %>

<html>

<head>
<title>Dropbox</title>
<link rel="stylesheet" href="/demo.css"/>
<script src="/runtime/base.js"></script>
</head>

<body onload="loader()">

<div>

<div class="list" id="programs">
<div class="header">Your programs</div>

<%

	PersistenceManager pm = PMF.getManager();
        try {
	    SessionManager sm = new SessionManager();
	    Session s = sm.authenticate(request, response);
		
	    if( s == null ){
%>

not authenticated
<%
            } else {
%>
<form action="/addProject" method="POST">
<%
	        Query query = pm.newQuery(Program.class);
		query.setFilter("owner_== userParam && author_ == userParam");
		query.setOrdering("time_ desc");
		query.declareParameters("String userParam");

		try {
		    List<Program> pl = (List<Program>) query.execute(s.getName());
		    for( Program p : pl ){	
%>

	<div id="<%= p.getId() %>"> 
	<%= p.getSource().toString() %>
	<input type="checkbox" value="<%= pm.getObjectId(p) %>" name="program"></input> 
	<%= p.getTime() %> 
	</div>
<%
			}
		} finally {
		    query.closeAll();
		}

%>

<%
		Long dbid = new Long(request.getParameter("dbid"));
		Dropbox db = Dropbox.getDropbox(pm, dbid);


%>
<input type="hidden" name="dbID" value="<%= dbid %>"></input>
<script>

document.title = "WeScheme.org Dropbox: <%= db.getTitle() %>"; 

</script>
<select name="binID">
<%	
                List<Bin> bins = db.getBins();
	
		for( Bin b : bins ){ %>
			<option value="<%= b.toString() %>"><%= b.toString() %></option>
		<%
		}
	    }
	} finally {
	    pm.close();
	}
%>
</select>
<input type="submit" value="Submit">
</form>

</div>

</body>

</html>