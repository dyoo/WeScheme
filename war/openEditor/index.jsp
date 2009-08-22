<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<html>
<head>

<link rel="stylesheet" type="text/css" href="/openEditor/default.css" />
<script src="/flapjax-2.0.1.compressed.js"></script>
<script src="/flapjax-helpers.js"></script>
<script src="/editor/jquery.js"></script>
<script src="/editor/jquery.createdomnodes.js"></script>
<script src="/safeSubmit.js"></script>
<script src="/editor/debug.js"></script>


<script src="/openEditor/intent.js"></script>
<script src="/openEditor/editor.js"></script>
<script src="/openEditor/statusbar.js"></script>
<script src="/openEditor/textcontainer.js"></script>
<script src="/openEditor/interaction.js"></script>


<!-- Includes the moby runtime lbiraries -->
<jsp:include page="/moby-runtime-includes.jsp" />
<!-- And we need the compiler. -->
<script src="/runtime/compiler.js"></script>



<%
   org.wescheme.user.Session userSession = 
   (new org.wescheme.user.SessionManager()).authenticate(request, response); 
   
   UserService us = UserServiceFactory.getUserService();
%>




<script>
   var myEditor;

  jQuery(document).ready(function() {

  // Fixme: trigger file load if the pid has been provided.

  var statusBar = new WeSchemeStatusBar(jQuery("#statusbar"));


  myEditor = new WeSchemeEditor(
  { userName: "<%= userSession != null? userSession.getName() : null %>",
    defn: new WeSchemeTextContainer(jQuery("#defn").get(0)),
    interactions: jQuery("#inter").get(0),
    jsworldDiv: jQuery("#jsworld-div").get(0),
    pidDiv: jQuery("#pidArea"),
    filenameDiv: jQuery("#filenameArea"),

    publicIdPane: jQuery("#publicIdPane"),
    publicIdDiv: jQuery("#publicId"),

    publishedDiv: jQuery("#published"),

    saveButton : jQuery("#save"),
    cloneButton : jQuery("#clone"),

    publishButton : jQuery("#publish")});
  
  jQuery("#save").click(function() { myEditor.save(); });
  jQuery("#clone").click(function() { myEditor.clone(); });
  jQuery("#run").click(function()  { myEditor.run(); });
  jQuery("#publish").click(function()  { myEditor.publish(); });
  jQuery("#console").click(function()  { window.location = "/"; });


<% if (request.getParameter("pid") != null) { %>
  myEditor.load({pid : <%= request.getParameter("pid") %> });
<% } else if (request.getParameter("publicId") != null) { %>
  myEditor.load({publicId : '<%= request.getParameter("publicId") %>' });
<% } %>


  // For debugging:
  WeSchemeIntentBus.addNotifyListener(function(action, category, data) {
     //debugLog(action + ": " + category + " " + data.toString());
  });

  });
  
  function switchStyle(style){
	  document.getElementById('style').href = 'css/'+style;
	}
  
  
</script>
</head>
<body>

<div id="header">
	<h1>WeScheme</h1>
	<h2>Sometimes YouTube.  Perhaps iPhone.  Together, WeScheme!</h2>
</div>


<div id="toolbar">
<ul>
<li class="run">	<a id="run" href="#">Run<span>&nbsp;your program.</span></a></li>
<% if (userSession != null) { %>
<li class="save">	<a id="save" href="#">Save<span>&nbsp;for later.</span></a></li>
<li class="share">	<a id="publish" href="#">Share<span>&nbsp;with friends.</span></a></li>
<li class="logout">	<a id="logout" href="#">Logout</span></a></li>
<% } %>
<li class="docs">	<a id="docs" target="_blank" href="/openEditor/moby-user-api.txt">API</a></li>
<li class="account"><a id="account" href="#">Manage<span>&nbsp;your account.</span></a></li>
</ul>
</div>

<div id="definitions">
<textarea id="defn">
&#59;  Write your code here
</textarea>
</div>

<div id="fileInfo">
  <label id="filenamelabel" for="filename">Project name:</label>
  <input id= "filename" type="text" style="width: 20%">
  
<% if (request.getParameter("pid") != null ||
       request.getParameter("publicId") != null) { %>
  <div id="publicIdLabel">Public URL:</div>
  <div id="publicId"></div>

<% } %>
</div>

<% if (userSession != null) { %>
<div id="publishedPane">
  <div id="publishedLabel">Publication status:</div>
  <div id="published"></div>
</div>
<% } %>


<div id="interactions" onclick="document.getElementById('inputBox').focus()">
	<div id="inter">

		<div style="width: 100%;"><span>&gt; <input style="width: 75%;" type="text"></span></div>
	</div>
</div>

<!-- FIXME: make this appear or disappear depending on usage. -->
<div id="footer">
	<!-- FIXME: make this appear or disappear depending on usage. -->
	<div id="jsworld-div"></div>
	<div id="statusbar" style="float: left; margin-left: 10px;" >Program 118 saved</div>
	<div style="text-align: right; margin-right: 10px;">

		Editor Style:&nbsp;
		<select onchange="switchStyle(this.value)">
			<option value="default.css" selected="true">Default</option>
			<option value="hacker.css">Hacker</option>
			<option value="compact.css">Compact</option>
			<option value="personal.css">Personal</option>

		</select>
		</div>
</div>


</body>

</html>
