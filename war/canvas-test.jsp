<html>
<head>
<!-- Add compatibility libraries for IE. -->
<jsp:include page="/js/compat/compat.jsp"/>
</head>


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
	    canvas.style.border = "1px solid black";
	    canvas.style.width = '300px';
	    canvas.style.height = '300px';
	    var ctx = canvas.getContext();
	    ctx.arc(100 + 50,
		    100 + 50,
		    100,
		    0,
		    2*Math.PI,
		    false);
	    ctx.fillStyle = "black";
	    ctx.fill();
	}, 
	0);
}


</script>

<body>

<h1>Canvas test</h1>
<input type="button" value="Add a circle" onclick="addCircleCanvas()">
<div id="container"
     style="width: 100%; height: 500px; border: 1px solid red; overflow: auto"/>
</body>
</html>