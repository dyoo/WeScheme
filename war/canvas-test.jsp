<html>
<head>
<!-- Add compatibility libraries for IE. -->
<jsp:include page="/js/compat/compat.jsp"/>

<!-- Google analytics support -->
<jsp:include page="/google-analytics.jsp"/>

<script src="/js/openEditor/openEditor-calc.js"></script>
<script src="/js/codemirror/js/codemirror.js"></script>
<link rel="stylesheet" type="text/css" href="/css/codemirror.css" id="style" />






<script>
var makeCanvas = function() {
    var canvas = document.createElement("canvas");
    if (window && typeof window.G_vmlCanvasManager != 'undefined') {
        canvas = window.G_vmlCanvasManager.initElement(canvas);
    }
    return canvas;
}

var addCircleCanvas = function() {
    var canvas = makeCanvas();
    document.getElementById('container').appendChild(canvas);    
    document.getElementById('container').appendChild(
	document.createTextNode("foo"));
    setTimeout(
	function() {
	    canvas.width = 300;
	    canvas.height = 300;
	    canvas.style.border = "1px solid black";
	    canvas.style.width = '300px';
	    canvas.style.height = '300px';
	    var ctx = canvas.getContext('2d');
	    ctx.beginPath();
	    ctx.arc(100 + 50,
		    100 + 50,
		    100,
		    0,
		    2*Math.PI,
		    false);
	    ctx.fillStyle = "black";
	    ctx.closePath();
	    ctx.fill();
	}, 
	0);
};

var addTextContainer = function() {
    var area = document.createElement("div");
    document.getElementById('container').appendChild(area);

    new CodeMirror(
	    area, 
	    { 
		path: "/js/codemirror/js/",
		parserfile: ["../contrib/scheme/js/tokenizescheme.js",
			     "../contrib/scheme/js/parsescheme.js"],
		stylesheet: "/js/codemirror/contrib/scheme/css/schemecolors.css",
		autoMatchParens: true,
		disableSpellcheck: true,
		lineNumbers: true,
		textWrapping: true,
		content: "hello world",
		width: "100%",
		height: "300px",
		readOnly: false,
		initCallback: function(editor) {
		}});
};


</script>


</head>




<body>

<h1>Canvas test</h1>
<input type="button" value="Add a circle" onclick="addCircleCanvas()">
<input type="button" value="Add a text area" onclick="addTextContainer()">
<div id="container"
     style="width: 100%; height: 500px; border: 1px solid red; overflow: auto">
</div>
</body>
</html>
