// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }


goog.provide("plt.wescheme.WeSchemeInteractions");



var WeSchemeInteractions;

WeSchemeInteractions = (function () {

    

    // WeSchemeInteractions: div -> WeScheme
    function WeSchemeInteractions(interactionsDiv) { 
	var that = this;

	this.interactionsDiv = jQuery(interactionsDiv);
	this.prompt = makePrompt();
	this.interactionsDiv.append(this.prompt);

	this.evaluator = this.makeFreshEvaluator();
	
	this.highlighter = function(id, offset, line, column, span) {
	    // default highlighter does nothing.
	};

	// history: (listof string)
	this.history = [];
    };

    var makePrompt = function() {
	return jQuery("<div><span>&gt;&nbsp;<input type='text' id='inputBox'></span></div>");
    };



    WeSchemeInteractions.prototype.makeFreshEvaluator = function() {
	var that = this;
	var evaluator = new Evaluator({
	    write: function(thing) {
		that.addToInteractions(thing);
	    },
	    transformDom : function(dom) {
		return that._transformDom(dom);
	    },
	    compilationServletUrl: "/compile",
	    scriptCompilationServletUrl: "http://go.cs.brown.edu:8000/servlets/standalone.ss"
	});
	evaluator.makeToplevelNode = function() {
	    var dialog = jQuery("<div/>");
	    var handleClose = function(event, ui) {
		that.evaluator.requestBreak();
	    };

	    dialog.dialog( {
		bgiframe : true,
		position: ["left", "top"],
		modal : true,
		width: "auto",
		height: "auto",
	        beforeclose: handleClose
	    });

	    var innerArea = jQuery("<div></div>");
	    dialog.append(innerArea);
	    dialog.dialog("open");
	    return innerArea.get(0);
	}
	return evaluator;
    };

    


    WeSchemeInteractions.prototype.notifyBus = function(action, data) {
	if (typeof plt.wescheme.WeSchemeIntentBus != 'undefined') {
	    plt.wescheme.WeSchemeIntentBus.notify("after-reset", this);
	}
    };


    WeSchemeInteractions.prototype.setSourceHighlighter = function(highlighter) {
	this.highlighter = highlighter;
    };





    // reset: -> void
    // Clears out the interactions.
    WeSchemeInteractions.prototype.reset = function() {
	this.notifyBus("before-reset", this);
	var that = this;
	this.interactionsDiv.empty();
	this.prompt = makePrompt();
	this.interactionsDiv.append(this.prompt);

	this.prompt.contents().keydown(function(e) { that._maybeRunPrompt(e) });
	this.evaluator = this.makeFreshEvaluator();

	this.notifyBus("after-reset", this);
    }


    // Returns if x is a dom node.
    function isDomNode(x) {
	return (x.nodeType != undefined);
    }



    // addToInteractions: string | dom-node -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
	this.notifyBus("before-add-to-interactions", this);
	if (isDomNode(interactionVal)) {
	    this.prompt.before(interactionVal);
	} else {
	    var newArea = jQuery("<div style='width: 100%'></div>");
	    newArea.text(interactionVal);
	    this.prompt.before(newArea);
	}
	this.interactionsDiv.attr("scrollTop", this.interactionsDiv.attr("scrollHeight"));
	this.notifyBus("after-add-to-interactions", this);
    };


    WeSchemeInteractions.prototype._transformDom = function(dom) {
	if (helpers.isLocationDom(dom)) {
	    return this._rewriteLocationDom(dom);
	} else {
	    return dom;
	}
    };


    WeSchemeInteractions.prototype._rewriteLocationDom = function(dom) {
	var newDom = document.createElement("span");
	var children = dom.children;
	var offset, line, column, id, span;
	for (var i = 0; i < children.length; i++) {
	    if (children[i]['class'] === 'location-id') {
		id = children[i].textContent;
	    }
	    if (children[i]['class'] === 'location-offset') {
		offset = children[i].textContent;
	    }
	    if (children[i]['class'] === 'location-line') {
		line = children[i].textContent;
	    }
	    if (children[i]['class'] === 'location-column') {
		column = children[i].textContent;
	    }
	    if (children[i]['class'] === 'location-span') {
		span = children[i].textContent;
	    }
	}
	return this.createLocationHyperlink({ id: id,
					      offset: parseInt(offset),
					      line: parseInt(line),
					      column: parseInt(column),
					      span: parseInt(span) });
    };




    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource, sourceName, contK) {
	this.notifyBus("before-run", this);
	var that = this;
	this.disableInput();
	this.evaluator.executeProgram(sourceName,
				      aSource,
				      function() { 
					  that.enableInput();
					  document.getElementById('inputBox').focus();
					  document.getElementById('inputBox').select();
					  contK();
				      },
				      function(err) { 
					  that.handleError(err); 
					  that.enableInput();
					  document.getElementById('inputBox').focus();
					  document.getElementById('inputBox').select();
					  contK();
				      });
    };
    
    WeSchemeInteractions.prototype.handleError = function(err) {
	this.addToInteractions(this.renderErrorAsDomNode(err));
	this.addToInteractions("\n");
    };




    // renderErrorAsDomNode: exception -> element
    // Given an exception, produces error dom node to be displayed.
    WeSchemeInteractions.prototype.renderErrorAsDomNode = function(err) {
	var that = this;
	var msg = this.evaluator.getMessageFromExn(err);

	var dom = document.createElement('div');
	dom['className'] = 'moby-error';

	var msgDom = document.createElement('div');
	msgDom['className'] = 'moby-error:message';
	msgDom.appendChild(document.createTextNode(msg));
	dom.appendChild(msgDom);

	var stacktrace = this.evaluator.getTraceFromExn(err);
	var stacktraceDiv = document.createElement("div");
	stacktraceDiv['className'] = 'error-stack-trace';
	for (var i = 0; i < stacktrace.length; i++) {
	    var anchor = this.createLocationHyperlink(stacktrace[i]);
	    stacktraceDiv.appendChild(anchor);
	    stacktraceDiv.appendChild(document.createElement("br"));
	}
	dom.appendChild(stacktraceDiv);

	return dom;
    };


    WeSchemeInteractions.prototype.createLocationHyperlink = function(aLocation) {
	var anchor = document.createElement("a");
	anchor['href'] = "#";
	anchor['onclick'] = makeHighlighterLinkFunction(
	    this, aLocation);
	anchor.appendChild(document.createTextNode(
	    "at: line " + aLocation.line + 
		", column " + aLocation.column +
		", in " + aLocation.id));
	return anchor;
    };


    var makeHighlighterLinkFunction = function(that, elt) {
	return function() { 
	    that.highlighter(elt.id, elt.offset, elt.line, elt.column, elt.span);
	};
    };




    WeSchemeInteractions.prototype._maybeRunPrompt = function(keyEvent) {
	var that = this;
 	if (keyEvent.keyCode == 13) {
	    var nextCode = this.prompt.find("input").attr("value");
	    this.addToInteractions("> " + nextCode + "\n");
	    that.history.push(nextCode);
	    that.prompt.find("input").attr("value", "");
	    this.runCode(nextCode, 
			 "<interactions>", 
			 function() {
			 });
	    return false;
 	} else if (keyEvent.keyCode == 38) {
	    this.history.unshift(this.prompt.find("input").attr("value"));
	    this.prompt.find("input").attr("value", this.history.pop());
	    return false;
 	} else if (keyEvent.keyCode == 40) {
	    this.history.push(this.prompt.find("input").attr("value"));
	    this.prompt.find("input").attr("value", this.history.shift());
	    return false;
	} else {
	    return true;
	}
    }

    WeSchemeInteractions.prototype.disableInput = function() {
	this.prompt.hide();
    };


    WeSchemeInteractions.prototype.enableInput = function() {
 	this.prompt.show();
    };


    WeSchemeInteractions.prototype.requestBreak = function() {
	this.evaluator.requestBreak();
    };


    WeSchemeInteractions.prototype.toString = function() { return "WeSchemeInteractions()"; };

    return WeSchemeInteractions;
})();

plt.wescheme.WeSchemeInteractions = WeSchemeInteractions;