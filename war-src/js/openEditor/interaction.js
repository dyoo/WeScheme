// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }


goog.provide("plt.wescheme.WeSchemeInteractions");


goog.require("plt.wescheme.topKeymap");
goog.require("plt.wescheme.WeSchemeTextContainer");
goog.require('plt.wescheme.tokenizer');


var WeSchemeInteractions;

WeSchemeInteractions = (function () {



    // WeSchemeInteractions: div (WeSchemeInteractions -> void) -> WeScheme
    function WeSchemeInteractions(interactionsDiv,
				  afterInit) { 
	var that = this;
	this.interactionsDiv = jQuery(interactionsDiv);
	this.interactionsDiv.empty();

	this.previousInteractionsDiv = document.createElement("div");
	this.previousInteractionsTextContainers = {};
	this.interactionsDiv.append(this.previousInteractionsDiv);
	
	new Prompt(
	    this,
	    this.interactionsDiv,
	    function(prompt) {
		that.prompt = prompt;
		that.evaluator = that.makeFreshEvaluator();
		that.highlighter = function(id, offset, line, column, span) {
		    // default highlighter does nothing.  Subclasses will specialize that.
		};
		if (afterInit) { 
		    afterInit(that);
		}
	    }
	);
    };


    // reset: -> void
    // Clears out the interactions.
    WeSchemeInteractions.prototype.reset = function() {
	var that = this;
	this.notifyBus("before-reset", this);
	this.evaluator = that.makeFreshEvaluator();
	jQuery(this.previousInteractionsDiv).empty();
	this.notifyBus("after-reset", that);
	this.prompt.clear();

// 	// this.interactionsDiv.empty();
// 	new Prompt(this, this.interactionsDiv, function(prompt) {
// 	    that.prompt = prompt;
// 	    that.interactionsDiv.append(that.prompt.getDiv());   
	    
// 	});
    };


    // clearLine: -> void
    // Make sure we're on a line that's clear of any floats.
    WeSchemeInteractions.prototype.clearLine = function() {
	var clearDiv = document.createElement("div");
	clearDiv.style.clear = 'left';
	this.addToInteractions(clearDiv);
    };


    // Sets the text in the prompt.
    WeSchemeInteractions.prototype.setPromptText = function(t) {
	this.prompt.setText(t);
    };



    //////////////////////////////////////////////////////////////////////
    var Prompt = function(interactions, parentDiv, K) {
	var that = this;
	this.interactions = interactions;
	this.div = jQuery("<div><span class='top-aligned-inline-block'>&gt;&nbsp;</span><span class='top-aligned-inline-block' style='width: 90%'/></div>");
	parentDiv.append(this.div);

	var innerDivElt = this.div.find("span").get(1);
	new plt.wescheme.WeSchemeTextContainer(
	    innerDivElt,
	    { height: 'dynamic',
	      minHeight: 15,
	      lineNumbers: false,
	      stylesheet: "/js/codemirror/contrib/scheme/css/schemecolors-interactive.css",
	      makeTransparentIframe: true },
	    function(container) {
		that.textContainer = container;
		container.addKeymap(
		    function(event) {
			// handle F5 especially
			if (that.isRunEvent(event)) {
			    return true;
			}
			// Also, handle enter if what's in the text is ready for
			// evaluation.
			if (that.isExpressionToEvaluateEvent(event)) {
			    return true;
			}
			return false;
		    },
		    function(event) {
			if (that.isExpressionToEvaluateEvent(event)) {
			    that.onEvaluation();
			    return false;
			} else {
			    return plt.wescheme.topKeymap(event);
			}
		    });
		
		if (K) {
		    K(that);
		}
	    });
    };

    Prompt.prototype.onEvaluation = function() {
	var that = this;
	var nextCode = that.textContainer.getCode();
	that.textContainer.setCode("");
	
	var parentDiv = document.createElement('div');

	var promptSpan = document.createElement('span');
	promptSpan.className = 'top-aligned-inline-block';
	promptSpan.appendChild(document.createTextNode(">"));

	var textareaSpan = document.createElement("span");
	textareaSpan.className = 'top-aligned-inline-block';
	textareaSpan.style['width'] = '90%';

	parentDiv.appendChild(promptSpan);
	parentDiv.appendChild(document.createTextNode(" "));
	parentDiv.appendChild(textareaSpan);
	that.interactions.addToInteractions(parentDiv);

	that.interactions.clearLine();

	// // FIXME: figure out how to get the line height
	// dynamically, because I have no idea how to do
	// this correctly at the moment.
	new plt.wescheme.WeSchemeTextContainer(
	    textareaSpan,
	    { height: 'dynamic',
	      minHeight: 15,
	      lineNumbers: false,
	      stylesheet: "/js/codemirror/contrib/scheme/css/schemecolors-interactive.css",
	      content: nextCode,
	      makeTransparentIframe: true,
	      readOnly: true },
	    function(container) {
		var newId = makeFreshId();
		that.interactions.previousInteractionsTextContainers[newId] = container;
		that.interactions.runCode(nextCode, newId,
					  function() { 
					      that.focus();
					  });
	    });
	
    };

    // isRunEvent: key-event -> boolean
    Prompt.prototype.isRunEvent = function(event) {
	return (event.type === 'keydown' && event.keyCode === 116);
    };
    
    // isExpressionToEvaluateEvent: key-event -> boolean
    Prompt.prototype.isExpressionToEvaluateEvent = function(event) {
	return (event.type === 'keydown' && event.keyCode === 13 &&
		this.hasCompleteExpression());
    };

    // hasExpressionToEvaluate: -> boolean
    // Return true if the prompt contains a complete expression
    Prompt.prototype.hasCompleteExpression = function() {
	var codePastCursor = this.textContainer.getCode(this.textContainer.getCursorStartPosition());
	if (codePastCursor.match(new RegExp("[^\\s]"))) {
	    return false;
	}
	var codeUpToCursor = this.textContainer.getCode(0, this.textContainer.getCursorStartPosition());
	var tokens = plt.wescheme.tokenizer.tokenize(codeUpToCursor);
	var nestingLevel = 0;

	for (var i = 0; i < tokens.length; i++) {
	    if (tokens[i].type === '(') {
		nestingLevel++;
	    } else if (tokens[i].type === ')') {
		nestingLevel--;
	    }
	    if (nestingLevel < 0) { return false; }
	}
	return nestingLevel === 0;
    };

    Prompt.prototype.setText = function(t) {
	this.textContainer.setCode(t);
    };

    Prompt.prototype.clear = function() {
	this.textContainer.setCode("");
    };


    Prompt.prototype.getDiv = function() {
	return this.div;
    };

    Prompt.prototype.hide = function() {
	this.div.hide();
    };


    Prompt.prototype.show = function() {
	this.div.show();
    };

    Prompt.prototype.focus = function() {
	this.textContainer.focus();
	this.interactions._scrollToBottom();
    };
    //////////////////////////////////////////////////////////////////////





    WeSchemeInteractions.prototype.makeFreshEvaluator = function() {
	var that = this;
	var evaluator = new Evaluator({
	    write: function(thing) {
		that.addToInteractions(thing);
	    },
	    transformDom : function(dom) {
		var result = that._transformDom(dom);
		return result;
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

    
    WeSchemeInteractions.prototype.focusOnPrompt = function() {
	this.prompt.focus();
    };



    WeSchemeInteractions.prototype.notifyBus = function(action, data) {
	if (typeof plt.wescheme.WeSchemeIntentBus != 'undefined') {
	    plt.wescheme.WeSchemeIntentBus.notify("after-reset", this);
	}
    };


    WeSchemeInteractions.prototype.setSourceHighlighter = function(highlighter) {
	this.highlighter = highlighter;
    };






    // Returns if x is a dom node.
    function isDomNode(x) {
	return (x.nodeType != undefined);
    }



    // addToInteractions: string | dom-node -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
	var that = this;
	this.notifyBus("before-add-to-interactions", this);
	if (isDomNode(interactionVal)) {
	    this.previousInteractionsDiv.appendChild(interactionVal);
	} else {
	    var newArea = jQuery("<div style='width: 100%'></div>");
	    newArea.text(interactionVal);
	    this.previousInteractionsDiv.appendChild(newArea.get(0));
	}
	this._scrollToBottom();
	this.notifyBus("after-add-to-interactions", this);
    };
    
    
    
    WeSchemeInteractions.prototype._scrollToBottom = function() {
	this.interactionsDiv.attr(
	    "scrollTop", 
	    this.interactionsDiv.attr("scrollHeight"));
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
	    var textBody = children[i].textContent || children[i].innerText;
	    if (children[i]['className'] === 'location-id') {
		id = textBody;
	    }
	    if (children[i]['className'] === 'location-offset') {
		offset = textBody;
	    }
	    if (children[i]['className'] === 'location-line') {
		line = textBody;
	    }
	    if (children[i]['className'] === 'location-column') {
		column = textBody;
	    }
	    if (children[i]['className'] === 'location-span') {
		span = textBody;
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
					  that.focusOnPrompt();
					  contK();
				      },
				      function(err) { 
					  that.handleError(err); 
					  that.enableInput();
					  that.focusOnPrompt();
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
	var msg;
	var dom = document.createElement('div');
	if (types.isSchemeError(err) && types.isExnBreak(err.val)) {
	    dom['className'] = 'moby-break-error';
	    msg = "Program stopped by user (user break)";
	} else {
	    dom['className'] = 'moby-error';
	    msg = this.evaluator.getMessageFromExn(err);
	}


	if (err.domMessage) {
	    dom.appendChild(err.domMessage);
	} else {
	    var msgDom = document.createElement('div');
	    msgDom['className'] = 'moby-error:message';
	    msgDom.appendChild(document.createTextNode(msg));
	    dom.appendChild(msgDom);
	}

	var stacktrace = this.evaluator.getTraceFromExn(err);
	var stacktraceDiv = document.createElement("div");
	stacktraceDiv['className'] = 'error-stack-trace';
	for (var i = 0; i < stacktrace.length; i++) {
	    var anchor = this.createLocationHyperlink(stacktrace[i]);
	    stacktraceDiv.appendChild(anchor);
	}
	dom.appendChild(stacktraceDiv);

	return dom;
    };


    // createLocationHyperlink: location (or dom undefined) -> paragraph-anchor-element
    // Produce a hyperlink that, when clicked, will jump to the given location on the editor.
    // FIXME: should this really wrap a paragraph around a link?  The client
    // really should be responsible for layout issues instead....
    WeSchemeInteractions.prototype.createLocationHyperlink = function(aLocation, anchorBodyDom) {
	if (! anchorBodyDom) {
	    anchorBodyDom = document.createTextNode(
		"at: line " + aLocation.line + 
		    ", column " + aLocation.column +
		    ", in " + aLocation.id);
	}
	var para = document.createElement('p');
	para.className = 'location-paragraph';
	var anchor = document.createElement("a");
	anchor['href'] = "#";
	anchor['onclick'] = makeHighlighterLinkFunction(
	    this, aLocation);
	anchor.appendChild(anchorBodyDom);
	para.appendChild(anchor);
	return para;
    };


    var makeHighlighterLinkFunction = function(that, elt) {
	return function() { 
	    that.highlighter(elt.id, elt.offset, elt.line, elt.column, elt.span);
	};
    };



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







    //////////////////////////////////////////////////////////////////////
    var _idNum = 0;
    var makeFreshId = function() {
	return ("<interactions" + (_idNum++) + ">");
    }
    //////////////////////////////////////////////////////////////////////




    return WeSchemeInteractions;
})();

plt.wescheme.WeSchemeInteractions = WeSchemeInteractions;