if (typeof (plt) === 'undefined') {
    this.plt = {};
}
if (typeof (plt.wescheme) === 'undefined') {
    this.plt.wescheme = {};
}




var WeSchemeInteractions;

WeSchemeInteractions = (function () {

    

    // WeSchemeInteractions: div -> WeScheme
    function WeSchemeInteractions(interactionsDiv) { 
	var that = this;

	this.interactionsDiv = jQuery(interactionsDiv);
	this.prompt = jQuery("<div style='width:100%'><span>&gt; <input type='text' style='width: 75%'></span></div>");
	this.interactionsDiv.append(this.prompt);

	this.evaluator = this.makeFreshEvaluator();
	
	
	// history: (listof string)
	this.history = [];
    };


    WeSchemeInteractions.prototype.makeFreshEvaluator = function() {
	var that = this;
	return new Evaluator({
	    write: function(thing) {
		that.addToInteractions(thing);
	    },
	    compilationServletUrl: "/compile",
	    scriptCompilationServletUrl: "http://go.cs.brown.edu:8000/servlets/standalone.ss"
	});
    };

    


    WeSchemeInteractions.prototype.notifyBus = function(action, data) {
	if (typeof plt.wescheme.WeSchemeIntentBus != 'undefined') {
	    plt.wescheme.WeSchemeIntentBus.notify("after-reset", this);
	}
    }




    // reset: -> void
    // Clears out the interactions.
    WeSchemeInteractions.prototype.reset = function() {
	this.notifyBus("before-reset", this);
	var that = this;
	this.interactionsDiv.empty();
	this.prompt = jQuery("<div style='width:100%'><span>&gt; <input type='text' style='width: 75%' id='inputBox'></span></div>");
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

plt.wescheme.interactions = WeSchemeInteractions;