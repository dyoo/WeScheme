<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<%@ page import="org.wescheme.dropbox.Dropbox" %>
<%@ page import="javax.jdo.Query" %>
<%@ page import="org.jdom.output.XMLOutputter" %>
<%@ page import="java.util.List" %>
<%@ page import="javax.jdo.PersistenceManager" %>
<%@ page import="org.wescheme.util.PMF" %>
<html>
<head>

<script src="/runtime/base.js"></script>
<script src="safeSubmit.js"></script>

</head>
<body>

<%
		PersistenceManager pm = PMF.getManager();
                try {
		    SessionManager sm = new SessionManager();
		    Session s = sm.authenticate(request, response);
		    XMLOutputter x = new XMLOutputter();
		    
		    if( s != null ) {
			
			Query query = pm.newQuery(Dropbox.class);
			query.setFilter("ownerName_ == ownerParam");
			query.declareParameters("String ownerParam");
			
			try {
			    List<Dropbox> dbl = (List<Dropbox>) query.execute(s.getName());
			    for( Dropbox d : dbl ){	
%>
	<p><b><%= x.outputString(d.toXML()) %></b><i><%= d.getId() %></i></p>
<%
			    }
		        } finally {
			    query.closeAll();
			}
		    }
		} finally {
		    pm.close();
		}
%>


</body>
</html>