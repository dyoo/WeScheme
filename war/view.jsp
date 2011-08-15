<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="org.wescheme.user.SessionManager" %>
<%@ page import="org.wescheme.user.Session" %>
<%@ page import="org.wescheme.project.Program" %>
<%@ page import="org.wescheme.util.Queries" %>
<%@ page import="javax.jdo.PersistenceManager" %>
<%@ page import="org.wescheme.util.PMF" %>

<%
    Program aProgram;
    String publicId = request.getParameter("publicId");
    String encodedId = java.net.URLEncoder.encode(publicId, "utf-8");
    PersistenceManager pm = PMF.get().getPersistenceManager();
    boolean hasSource = false;
    boolean isPublic = false;
    String title = "";
    try {
        aProgram = Queries.getProgramByPublicId(pm, publicId);
        title = aProgram.getTitle();
        isPublic = aProgram.getIsSourcePublic();
        hasSource = !("".equals(aProgram.getObject().toString()));
    } catch (RuntimeException e) {
        aProgram = null;
    } finally {
        pm.close();
    }

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title><%= title %></title>
<link rel="stylesheet" type="text/css" href="css/view.css" id="style" />

<!-- Google analytics support -->
<jsp:include page="/google-analytics.jsp"/>


<script src="/editor/jquery.js"></script>
<script src="/js/submitpost.js"></script>
<script src="/js/view-calc.js"></script>
</head>


<body onload='update(decodeURIComponent("<%= encodedId %>"))'>
<h1 id="programTitle"><%= title %></h1>



<% if (aProgram == null) { %>
<script>
alert("Unable to load program");
</script>
<div>
WeScheme is unable to find your program.
</div>
<% } %>



<% if (aProgram != null && hasSource) { %>
<a id="runIt" class="linkbutton"
   href="/run?publicId=<%= encodedId %>">Run it!</a>
<% } %>


<% if (aProgram != null && isPublic) { %>
<a id="viewSource" 
   class="linkbutton"
   href="/openEditor?publicId=<%= encodedId %>">View source</a>
<% } %>

<% if (false) { %>
<a id="androidApk" 
   class="linkbutton"
   style="display: none">Download Android APK</a>
<% } %>

<h2><div id="socialBookmarks"></div></h2>	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme!</h2>




<div id="footer">
<a href="#">About</a>

<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>

</body></html>
