<html>
<head>

<link rel="stylesheet" type="text/css" href="/openEditor/style.css" />
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


<!-- Evaluation and world runtime stuff -->
<!-- FIXME: bundle into single js for convenience. -->

<jsp:include page="/moby-runtime-includes.jsp" />



<%
   org.wescheme.user.Session userSession = 
   (new org.wescheme.user.SessionManager()).authenticate(request, response); 
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
</script>
</head>
<body>

<h1 class="title">WeScheme Editor</h1>

<span>
<span><input id="save" type="button" value="Save"></input></span>
<span><input id="clone" type="button" value="Clone"></input></span>
<span><input id="run" type="button" value="Run"></input></span>
<span><input id="publish" type="button" value="Publish"></input></span>
<span><input id="console" type="button" value="Go to Console"></input></span>
<span><a href="/openEditor/moby-user-api.txt">API docs</a></span>
</span>



<span>
<div id="filenameLabel">Project name:</div>
<div id="filenameArea"></div>
<div id="pidArea"></div>
</span>

<div id="publicIdPane">
  <div id="publicIdLabel">Public URL:</div>
  <div id="publicId"></div>
</div>


<div id="publishedPane">
  <div id="publishedLabel">Publication status:</div>
  <div id="published"></div>
</div>





<div>
<textarea id="defn">
</textarea>
</div>


<div>
<div id="inter"></div>
</div>



<!-- FIXME: make this appear or disappear depending on usage. -->
<div id="jsworld-div"></div>


<div id="statusbar"></div>

</body>

</html>
