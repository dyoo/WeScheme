<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<%@ page import="org.wescheme.dropbox.Dropbox" %>
<%@ page import="javax.jdo.Query" %>
<%@ page import="java.util.List" %>
<%@ page import="javax.jdo.PersistenceManager" %>
<%@ page import="org.wescheme.util.PMF" %>
<html>
<head>

<script src="safeSubmit.js"></script>

</head>
<body>

<%
		PersistenceManager pm = PMF.get().getPersistenceManager();
		SessionManager sm = new SessionManager();
		Session s = sm.authenticate(request, response);
		
		if( s != null ) {

			Query query = pm.newQuery(Dropbox.class);
			query.setFilter("ownerName_ == ownerParam");
			query.declareParameters("String ownerParam");

		try {
			List<Dropbox> dbl = (List<Dropbox>) query.execute(s.getName());
			for( Dropbox d : dbl ){	
%>
	<p><b><%= d.display(s.getName()) %></b><i><%= d.getId() %></i></p>
<%
			}
		} finally {
			query.closeAll();
		}
	}
%>


</body>
</html>