<html>
<head>
<script src="editor.js"></script>
<script src="textcontainer.js"></script>
<script src="../compiler.js"></script>



<!-- Evaluation and world runtime stuff -->
<!-- FIXME: bundle into single js for convenience. -->
<script src="runtime/namespace.js"></script>
<script src="runtime/kernel.js"></script>
<script src="runtime/world-config.js"></script>
<script src="runtime/platform.js"></script>
<script src="runtime/world.js"></script>
<script src="runtime/jsworld/jsworld.js"></script>
<script src="runtime/jsworld.js"></script>




<!-- Order dependent -->
<script src="../editor/jquery.js"></script>

<script>
  jQuery(document).ready(function() {
  var myEditor = new WeSchemeEditor(
  { defn: new WeSchemeTextContainer(jQuery("#defn")),
    repl: new WeSchemeTextContainer(jQuery("#inter")),
    jsworldDiv: jQuery("#jsworld-div").get(0),
    statusbar: new WeSchemeTextContainer(jQuery("#statusbar")) });
  
  jQuery("#save").click(function() { myEditor.save(); });
  jQuery("#load").click(function() { myEditor.load(); });
  jQuery("#run").click(function()  { myEditor.run(); });
  });
</script>
</head>
<body>

<span>
<span><input id="save" type="button" value="Save"></input></span>
<span><input id="load" type="button" value="Load"></input></span>
<span><input id="run" type="button" value="Run"></input></span>
</span>

<div>
<textarea id="defn" style="width:100%; height:45%">
</textarea>
</div>


<div>
<textarea id="inter" style="width:100%; height:45%">
</textarea>
</div>



<!-- FIXME: make this appear or disappear depending on usage. -->
<div id="jsworld-div"></div>




<div id="statusbar"></div>

</body>

</html>
