// The code for the run page.  This has most of the evaluator from
// openEditor, but stripped down since it does not need to support
// interactive evaluation.

goog.require("plt.wescheme.AjaxActions");




var Runner = function(compilationServerUrl, interactionsDiv) {
    var that = this;
    this.interactionsDiv = jQuery(interactionsDiv);
    this.evaluator = new Evaluator({
	write: function(thing) {
	    that.addToInteractions(thing);
	},
	compilationServletUrl: compilationServerUrl
    });
    this.evaluator.setImageProxy("/imageProxy");
    this.evaluator.setRootLibraryPath("/js/mzscheme-vm/collects");
    this.evaluator.setDynamicModuleLoader(function(aName, onSuccess, onFail) {
        loadScript(this.rootLibraryPath + "/" + aName + "-min.js",
                   onSuccess,
                   onFail);
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



function init(compilationServerUrl, publicId) { 
    var runner = 
	new Runner(compilationServerUrl, document.getElementById('interactions'));
    var callback = function(aProgram) {
	var title = aProgram.getTitle();
	var programCode = aProgram.getObjectCode();
	var permissions = aProgram.getPermissions();
  
  var j = jQuery("#interactions");
  j.dblclick(function (evt) {
                            var elem = evt.target;
                            if (elem.webkitRequestFullscreen) {
                                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                            } else {
                                    if (elem.mozRequestFullScreen) {
                                        elem.mozRequestFullScreen();
                                    } else {
                                           elem.requestFullscreen();
                                           }
                            }});
        // Change the title of the document to that of the program.
        document.title = title;
	runner.runCompiledCode(title, programCode, permissions);
    };
    new plt.wescheme.AjaxActions().loadProject(
        null, publicId, callback, function() { alert("unable to load program"); });
}
