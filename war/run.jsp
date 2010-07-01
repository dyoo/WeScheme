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

<script src="/runtime/base.js"></script>

<!-- Add compatibility libraries for IE. -->
<jsp:include page="/js/compat/compat.jsp"/>


<script src="/editor/jquery.js"></script>
<script src="/editor/jquery.createdomnodes.js"></script>
<script src="/js/mzscheme-vm/support.js"></script>
<script src="/js/mzscheme-vm/evaluator.js"></script>



<script>

var Runner = function(interactionsDiv) {
    var that = this;
    this.interactionsDiv = jQuery(interactionsDiv);
    this.evaluator = new Evaluator({
	    write: function(thing) {
		that.addToInteractions(thing);
	    },
	    compilationServletUrl: "http://go.cs.brown.edu:8000/servlets/standalone.ss"
	});
};


Runner.prototype.runCompiledCode = function(title, compiledCode, permStringArray) {
    var that = this;
    var onSuccessRun = function() {
    };
    var onFailRun = function(exn) {
	that.renderErrorAsDomNode(exn);
    };
    this.evaluator.executeCompiledProgram(eval('(' + compiledCode + ')'),
					  onSuccessRun,
					  onFailRun);
};


// Returns if x is a dom node.
function isDomNode(x) {
    return (x.nodeType != undefined);
}


Runner.prototype.addToInteractions = function (interactionVal) {
    if (isDomNode(interactionVal)) {
	this.interactionsDiv.append(interactionVal);
    } else {
	var newArea = jQuery("<div style='width: 100%'></div>");
	newArea.text(interactionVal);
	this.interactionsDiv.append(newArea);
    }
    this.interactionsDiv.attr("scrollTop", this.interactionsDiv.attr("scrollHeight"));
};



// renderErrorAsDomNode: exception -> element
// Given an exception, produces error dom node to be displayed.
Runner.prototype.renderErrorAsDomNode = function(err) {
    var msg = this.evaluator.getMessageFromExn(err);

    var dom = document.createElement('div');
    dom['class'] = 'moby-error';

    var msgDom = document.createElement('div');
    msgDom['class'] = 'moby-error:message';
    msgDom.appendChild(document.createTextNode(msg));
    dom.appendChild(msgDom);

    var stacktrace = this.evaluator.getTraceFromExn(err);
    for (var i = 0; i < stacktrace.length; i++) {
	dom.appendChild(document.createTextNode("at: line " + stacktrace[i].line + 
						", column " + stacktrace[i].column));
    }

    return dom;
};





function init() { 
    var runner = 
	new Runner(document.getElementById('interactions'));
    var data = { publicId: "<%= publicId %>" };
    var type = "xml";
    var callback = function(data) {
        var dom = jQuery(data);
	var title = dom.find("title").text();
	var programCode = dom.find("ObjectCode").find("obj").text();
	var permissions = [];
	dom.find("ObjectCode").
	    find("permissions").
	    find("permission").
	    each(function() { 
		permissions.push(jQuery(this).text()); });
	runner.runCompiledCode(title, programCode, permissions);
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