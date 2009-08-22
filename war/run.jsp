<%-- Runs a program
     Url scheme:

     http://www.wescheme.org/run?publicId=...
--%>

<%
    String publicId = request.getParameter("publicId");
%>


<html>
<head>
<title>WeScheme</title>
<script src="/editor/jquery.js"></script>
<script src="/editor/jquery.createdomnodes.js"></script>
<jsp:include page="/moby-runtime-includes.jsp" />
<script src="/runtime/permission-struct.js"></script>
<script src="/openEditor/interaction.js"></script>




<script>

function Runner(interactionsDiv) {
    this.namespace = new Namespace();
    this.interactionsDiv = jQuery(interactionsDiv);
}


Runner.prototype._prepareToRun = function() {
    var that = this;
    plt.world.MobyJsworld.makeToplevelNode = function() {
	var area = jQuery("<div></div>");
	that.interactionsDiv.append(area);
	return area.get(0);
    };
}


Runner.prototype.runCompiledCode = function(compiledCode, permStringArray) {
    var that = this;
    this._prepareToRun();

    var permArray = [];
    for (var i = 0; i < permStringArray.length; i++) {
	permArray.push(symbol_dash__greaterthan_permission(permStringArray[i]))
    }
    
    plt.permission.startupAllPermissions(
	permArray,
        function() { 
            try {
	        // FIXME: we may want a repl.  We may also want to
                // see the intermediate values come from toplevel.
                that.namespace.eval(compiledCode);
            } catch (err) {
                that.addToInteractions(err.toString() + "\n");
 	        throw err;
            }
	    
        });
};


Runner.prototype.addToInteractions = function (interactionVal) {
    if (interactionVal instanceof Element ||
	interactionVal instanceof Text) {
	this.interactionsDiv.append(interactionVal);
    } else {
	var newArea = jQuery("<div style='width: 100%'></div>");
	newArea.text(interactionVal);
	this.interactionsDiv.append(newArea);
    }
    this.interactionsDiv.attr("scrollTop", this.interactionsDiv.attr("scrollHeight"));
};






function init() { 
    var interactions = 
	new Runner(document.getElementById('interactions'));

    var data = { publicId: "<%= publicId %>" };
    var type = "xml";
    var callback = function(data) {
        var dom = jQuery(data);
	var program = dom.find("ObjectCode").find("obj").text();
	var permissions = [];
	dom.find("ObjectCode").
	    find("permissions").
	    find("permission").
	    each(function() { 
		permissions.push(plt.Kernel.string_dash__greaterthan_symbol(jQuery(this).text())); });
	interactions.runCompiledCode(program, permissions);
    };
    jQuery.get("/loadProject", data, callback, type);
}
</script>





</head>




<body onload="init()">
<div id="interactions">
</div>

</body>
</html>