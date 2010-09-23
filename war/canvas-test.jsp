<html>
<head>
<!-- Add compatibility libraries for IE. -->
<jsp:include page="/js/compat/compat.jsp"/>
</head>


<script>
var makeCanvas = function(width, height) {
    var canvas = document.createElement("canvas");
    if (window && typeof window.G_vmlCanvasManager != 'undefined') {
        canvas = window.G_vmlCanvasManager.initElement(canvas);
    }
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
    canvas.style.border = "1px solid black";
    return canvas;
}

var addCircleCanvas = function() {
    var canvas = makeCanvas(300, 300);
    document.getElementById('container').appendChild(canvas);    
    document.getElementById('container').appendChild(
	document.createTextNode("foo"));
    setTimeout(
	function() {
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
<input type="button" value="Add a button" onclick="addCircleCanvas()">
<div id="container"
     style="width: 100%; height: 500px; border: 1px solid red; overflow: auto"/>
</body>
</html>