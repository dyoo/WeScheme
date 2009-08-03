<html>
<head>

<script src="../editor/jquery.js"></script>
<script src="../editor/jquery.createdomnodes.js"></script>
<script src="../safeSubmit.js"></script>



<script src="editor.js"></script>
<script src="textcontainer.js"></script>
<script src="interaction.js"></script>


<!-- Evaluation and world runtime stuff -->
<!-- FIXME: bundle into single js for convenience. -->
<script src="runtime/kernel.js"></script>
<script src="runtime/compiler.js"></script>
<script src="runtime/read.js"></script>
<script src="runtime/namespace.js"></script>
<script src="runtime/world-config.js"></script>
<script src="runtime/platform.js"></script>
<script src="runtime/world.js"></script>
<script src="runtime/jsworld/jsworld.js"></script>
<script src="runtime/jsworld.js"></script>


<script>
  jQuery(document).ready(function() {
  var myEditor = new WeSchemeEditor(
  { defn: new WeSchemeTextContainer(jQuery("#defn").get(0)),

    interactions: jQuery("#inter").get(0),
    jsworldDiv: jQuery("#jsworld-div").get(0),
    statusbar: jQuery("#statusbar"),
    pidDiv: jQuery("#pidArea"),
    filenameDiv: jQuery("#filenameArea") });
  
  jQuery("#save").click(function() { myEditor.save(); });
  jQuery("#load").click(function() { myEditor.load(); });
  jQuery("#run").click(function()  { myEditor.run(); });
  jQuery("#back").click(function()  { window.location = "/"; });


  // Fixme: trigger file load if the pid has been provided.

  });
</script>
</head>
<body>

<span>
<span><input id="save" type="button" value="Save"></input></span>
<span><input id="load" type="button" value="Load"></input></span>
<span><input id="run" type="button" value="Run"></input></span>
<span><input id="back" type="button" value="Back to main"></input></span>
</span>



<span>
<div id="filenameArea" style="background-color: lightgrey">Unknown</div>
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
