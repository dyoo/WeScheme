<html>
<head>
<script src="editor.js"></script>
<script src="../editor/jquery.js"></script>
<script>
  var myeditor = new WeSchemeEditorState(jQuery("#textarea").get(0));
</script>
</head>
<body>


<div><input type="button" value="Save"></input></div>
<div><input type="button" value="Load"></input></div>
<div><input type="button" value="Run"></input></div>

<div>
<textarea id="textarea">
</textarea>
</div>

</body>

</html>