<%-- Runs a program
     Url scheme:

     http://www.wescheme.org/run?publicId=...
--%>

<%
    String publicId = request.getParameter("publicId");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>WeScheme</title>

<!--[if lt IE 8]>
<script src="http://ie7-js.googlecode.com/svn/version/2.0(beta3)/IE8.js" type="text/javascript"></script>
<script src="http://ie7-js.googlecode.com/svn/version/2.0(beta3)/ie7-squish.js" type="text/javascript"></script>
<![endif]-->

<!--[if IE]>
<script src="/js/excanvas.js" type="text/javascript"></script>
<![endif]-->

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
	permArray.push(string_dash__greaterthan_permission(permStringArray[i]))
    }
    
(function() { ((function (toplevel_dash_expression_dash_show0) { toplevel_dash_expression_dash_show0((plt.types.String.makeInstance("this should be shared."))); }))(plt.Kernel.identity) })();

    plt.permission.startupAllPermissions(
	permArray,
        function() { 
            try {
	        // FIXME: we may want a repl.
		var runToplevel = that.namespace.eval(compiledCode);
 		runToplevel(function(val) {
 		    if (val != undefined) {
 			that.addToInteractions(
 			    plt.Kernel.toDomNode(val));
			that.addToInteractions("\n");
 		    }
 		});



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
		permissions.push(jQuery(this).text()); });
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