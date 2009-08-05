<html>
<head>

<link rel="stylesheet" type="text/css" href="/openEditor/style.css" />

<script src="/editor/jquery.js"></script>
<script src="/editor/jquery.createdomnodes.js"></script>
<script src="/safeSubmit.js"></script>



<script src="/openEditor/editor.js"></script>
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


  var myEditor = new WeSchemeEditor(
  { defn: new WeSchemeTextContainer(jQuery("#defn").get(0)),
    interactions: jQuery("#inter").get(0),
    jsworldDiv: jQuery("#jsworld-div").get(0),
    statusbar: jQuery("#statusbar"),
    pidDiv: jQuery("#pidArea"),
    filenameDiv: jQuery("#filenameArea"),

    saveButton : jQuery("#save"),
    publishButton : jQuery("#publish")});
  

  jQuery("#save").click(function() { myEditor.save(); });
  jQuery("#run").click(function()  { myEditor.run(); });
  jQuery("#back").click(function()  { window.location = "/"; });


  myEditor.load();
  });
</script>
</head>
<body>

<span>
<span><input id="save" type="button" value="Save"></input></span>
<span><input id="run" type="button" value="Run"></input></span>
<span><input id="publish" type="button" value="Publish"></input></span>
<span><input id="back" type="button" value="Back to main"></input></span>
</span>



<span>
<div id="filenameArea" style="background-color: lightgrey">
</div>
<div id="pidArea" style="background-color: lightgrey">Unknown</div>
</span>




<div>
<textarea id="defn" style="width:100%; height:45%">
</textarea>
</div>


<div>
<div id="inter" style="width:100%; height:45%"></div>
</div>



<!-- FIXME: make this appear or disappear depending on usage. -->
<div id="jsworld-div"></div>


<div id="statusbar" style="background-color: lightgrey"></div>

</body>

</html>
