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
<script src="/editor/jquery.js"></script>
<script src="/heartbeat.js"></script>
<script src="/js/submitpost.js"></script>

<script>


function update() {

        // TODO: notify the user if the program uses some
        // permissions

	var callback = function(data) {
	    var dom = jQuery(data);
	    var programTitle = jQuery("#programTitle");
	    programTitle.empty();
	    programTitle.append(jQuery("<span/>").text("Program name: "));
	    programTitle.append(jQuery("<span/>")
				.addClass("programName")
				.text(dom.find("title").text()));
	    jQuery("#runIt").attr("href",
				  "/run?publicId=<%= encodedId%>");
            if (dom.find("isSourceShared").text() == true) {
		jQuery("#viewSource").attr("href",
					   "/openEditor?publicId=<%= encodedId%>");

            } else {
		jQuery("#viewSource").hide();
	    }



	};
	jQuery.get("/loadProject", 
                   {publicId: decodeURIComponent("<%= encodedId %>")},
                   callback, 
                   "xml");
}




</script>
</head>


<body onload='setInterval("beat()",1800000); update()'>
<h1>WeScheme</h1>
<h2 id="programTitle">&nbsp;</h2>

<a id="runIt" class="linkbutton">Run it!</a>
<a id="viewSource" class="linkbutton">View source</a>

	
	
<h2>Sometimes YouTube. Perhaps iPhone. Together, WeScheme!</h2>




<div id="footer">
<a href="#">About</a>

<a href="#">Contact</a>
<a href="#">Copyright</a>
</div>

</body></html>
