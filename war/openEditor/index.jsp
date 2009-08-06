<html>
<head>

<link rel="stylesheet" type="text/css" href="/openEditor/style.css" />

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
<script src="/openEditor/runtime/types.js"></script>
<script src="/openEditor/runtime/kernel.js"></script>
<script src="/openEditor/runtime/compiler.js"></script>
<script src="/openEditor/runtime/read.js"></script>
<script src="/openEditor/runtime/namespace.js"></script>
<script src="/openEditor/runtime/world-config.js"></script>
<script src="/openEditor/runtime/platform.js"></script>
<script src="/openEditor/runtime/lib.js"></script>
<script src="/openEditor/runtime/world.js"></script>
<script src="/openEditor/runtime/jsworld/jsworld.js"></script>
<script src="/openEditor/runtime/jsworld.js"></script>


<script>
  jQuery(document).ready(function() {

  // Fixme: trigger file load if the pid has been provided.
<% if (request.getParameter("pid") != null) { %>
    jQuery("#pidArea").text("<%= request.getParameter("pid")%>");
<% } %>

  var statusBar = new WeSchemeStatusBar(jQuery("#statusbar"));

  var myEditor = new WeSchemeEditor(
  { defn: new WeSchemeTextContainer(jQuery("#defn").get(0)),
    interactions: jQuery("#inter").get(0),
    jsworldDiv: jQuery("#jsworld-div").get(0),
    pidDiv: jQuery("#pidArea"),
    filenameDiv: jQuery("#filenameArea"),

    saveButton : jQuery("#save"),
    cloneButton : jQuery("#clone"),

    publishButton : jQuery("#publish")});
  
  jQuery("#save").click(function() { myEditor.save(); });
  jQuery("#clone").click(function() { myEditor.clone(); });
  jQuery("#run").click(function()  { myEditor.run(); });
  jQuery("#publish").click(function()  { myEditor.publish(); });
  jQuery("#back").click(function()  { window.location = "/"; });


  myEditor.load();


  // For debugging:
  WeSchemeIntentBus.addNotifyListener(function(action, category, data) {
     //debugLog(action + ": " + category + " " + data.toString());
  });

  });
</script>
</head>
<body>

<span>
<span><input id="save" type="button" value="Save"></input></span>
<span><input id="clone" type="button" value="Clone"></input></span>
<span><input id="run" type="button" value="Run"></input></span>
<span><input id="publish" type="button" value="Publish"></input></span>
<span><input id="back" type="button" value="Back to main"></input></span>
</span>



<span>
<div id="filenameLabel">Project name:</div>
<div id="filenameArea">
</div>
<div id="pidArea">Unknown</div>
</span>




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
