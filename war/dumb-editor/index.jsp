<html>
<head>
<script src="editor.js"></script>
<script src="textcontainer.js"></script>
<script src="../compiler.js"></script>

<!-- Order dependent -->
<script src="../editor/jquery.js"></script>

<script>
  jQuery(document).ready(function() {
  var myEditor = new WeSchemeEditor(
  { defn: new WeSchemeTextContainer(jQuery("#defn").get(0)),
  repl: new WeSchemeTextContainer(jQuery("#inter").get(0)),
  statusbar: new WeSchemeTextContainer(jQuery("#statusbar").get(0)) });
  
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



<div id="statusbar"></div>

</body>

</html>
