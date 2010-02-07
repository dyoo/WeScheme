goog.require("plt.Kernel");
goog.require("plt.wescheme.WeSchemeIntentBus");
goog.require("plt.world.MobyJsworld");
goog.require("plt.world.stimuli");

goog.require("goog.dom");


goog.provide("plt.wescheme.interactions");



var WeSchemeInteractions;

WeSchemeInteractions = (function () {

    var createDom = goog.dom.createDom;
    

    var compilerModule = plt.Kernel.invokeModule("moby/compiler");
    var stxModule = plt.Kernel.invokeModule("moby/runtime/stx");
    var errorStructModule = plt.Kernel.invokeModule("moby/runtime/error-struct");
    var errorToDomModule = plt.Kernel.invokeModule("moby/runtime/error-struct-to-dom");
    var schemeValueToDomModule = plt.Kernel.invokeModule("moby/runtime/scheme-value-to-dom");
    var domParametersModule = plt.Kernel.invokeModule("moby/runtime/dom-parameters");


    var customDomParameters =
	domParametersModule.EXPORTS.make_dash_dom_dash_parameters(
	plt.types.liftToplevelToFunctionValue(
	    function(val) {
		return plt.world.Kernel.isImage(val);
	    },
	    "->dom?",
	    1,
	    plt.types.Rational.makeInstance(1)),


	plt.types.liftToplevelToFunctionValue(
	    function(val, recur) {
		return val.toDomNode(false);
	    },
	    "->dom",
	    2,
	    plt.types.Rational.makeInstance(2)));


    // WeSchemeInteractions: div -> WeScheme
    function WeSchemeInteractions(interactionsDiv) { 
	this.interactionsDiv = jQuery(interactionsDiv);
	this.prompt = undefined;
	this.namespace = undefined;
	this.pinfo = undefined;

	this.prompt = jQuery("<div style='width:100%'><span>&gt; <input type='text' style='width: 75%'></span></div>");
	this.interactionsDiv.append(this.prompt);
	// history: (listof string)
	this.history = [];
    };

    

    var _freshToplevel = false;
    // freshPinfo: -> pinfo
    // Returns a new Pinfo object with a good toplevel environment.
    function freshPinfo() {
	if (!_freshToplevel) { 
	    _freshToplevel = compilerModule.EXPORTS.get_dash_base_dash_pinfo(plt.types.Symbol.makeInstance("moby"));
	}
	return _freshToplevel;
    }



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

	this.namespace = new Namespace();
	this.pinfo = freshPinfo();

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



    WeSchemeInteractions.prototype._prepareToRun = function() {
	var that = this;
	plt.world.MobyJsworld.makeToplevelNode = function() {
	    var dialog = jQuery("<div/>");
	    var handleClose = function(event, ui) {
		plt.world.stimuli.onShutdown();
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
	};
	plt.Kernel.lastLoc = undefined;
    }

    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource, sourceName) {
	this.notifyBus("before-run", this);
	var that = this;
	this._prepareToRun();
	try {
	    var program = plt.reader.readSchemeExpressions(aSource, sourceName);
	    var compiledProgram = 
		compilerModule.EXPORTS.program_dash__greaterthan_compiled_dash_program_slash_pinfo(program, this.pinfo);

	    var newPinfo = 
		compilerModule.EXPORTS.compiled_dash_program_dash_pinfo(compiledProgram);

	    var permArray = that._getPermissionArray(compilerModule.EXPORTS.pinfo_dash_permissions(newPinfo));
	} catch (err) {
	    that.handleError(err);
	    return;
	}


	plt.permission.startupAllPermissions(
	    permArray,
	    function() {
		try {

		    var defns = compilerModule.EXPORTS.compiled_dash_program_dash_defns(compiledProgram);
		    var interFunc = compilerModule.EXPORTS.compiled_dash_program_dash_toplevel_dash_exprs(compiledProgram);
		    var runToplevel = that.namespace.eval(defns, interFunc);
		    
		    plt.Kernel.printHook = function(s) {
			that.addToInteractions(document.createTextNode(s));
			that.addToInteractions("\n");
		    };
		    

		    plt.Kernel.reportError = function(err) {
			if (typeof(err) === 'string') {
			    that.handleError(new Error(err));
			} else {
			    that.handleError(err);
			}
		    }


		    runToplevel(function(val) {
			if (val != undefined) {
			    that.addToInteractions(
				sexpToDom(
				    schemeValueToDomModule.EXPORTS.scheme_dash_value_dash__greaterthan_dom_dash_sexp(val, customDomParameters)));
			    that.addToInteractions("\n");
			}
		    });

		    // Update the pinfo.
		    that.pinfo = newPinfo;
		    that.notifyBus("after-run", that);

		} catch (err) {
		    that.handleError(err);
		}
	    });
    };



    var sexpToDom = function(anSexp) {
	if (typeof(anSexp) === 'undefined') {
	    return document.createTextNode("undefined");
	}
	if (typeof(anSexp) === 'string') {
	    return document.createTextNode(anSexp)
	} else if (anSexp.hasOwnProperty('nodeType')) {
	    return anSexp;
	} else {
	    var nodeType = 
		plt.Kernel.symbol_dash__greaterthan_string(
		    plt.Kernel.list_dash_ref(anSexp, plt.types.Rational.ZERO));
	    var nodeAttrList =
		plt.Kernel.list_dash_ref(anSexp, plt.types.Rational.ONE);
	    var nodeChildList =
		plt.Kernel.rest(plt.Kernel.rest(anSexp));
	    
	    var newNode = document.createElement(nodeType);
	    while (! plt.Kernel.empty_question_(nodeAttrList)) {
		var attrName = 
		    plt.Kernel.symbol_dash__greaterthan_string(
			plt.Kernel.first(plt.Kernel.first(nodeAttrList)));
		var attrValue = 
		    plt.Kernel.second(plt.Kernel.first(nodeAttrList));
		if (attrName === "style") {
		    newNode.style.cssText = attrValue;
		} else if (attrName === "class") {
		    newNode.className = attrValue;
		} else {
		    newNode[attrName] = attrValue;
		}

		nodeAttrList = plt.Kernel.rest(nodeAttrList);
	    }

	    while (! plt.Kernel.empty_question_(nodeChildList)) {
		newNode.appendChild(sexpToDom(plt.Kernel.first(nodeChildList)));
		nodeChildList = plt.Kernel.rest(nodeChildList);
	    }

	    
	    return newNode;
	}
    }



    
    WeSchemeInteractions.prototype.handleError = function(err) {
	if (errorStructModule.EXPORTS.moby_dash_error_question_(err)) {
	    var newSexp = 
		errorToDomModule.EXPORTS.error_dash_struct_dash__greaterthan_dom_dash_sexp(err, false);
	    var aLoc = errorStructModule.EXPORTS.moby_dash_error_dash_location(err);
	    
	    var aLocHash = 
		{ offset: plt.types.NumberTower.toFixnum(stxModule.EXPORTS.Loc_dash_offset(aLoc)),
		  line: plt.types.NumberTower.toFixnum(stxModule.EXPORTS.Loc_dash_line(aLoc)),
		  column: plt.types.NumberTower.toFixnum(stxModule.EXPORTS.Loc_dash_column(aLoc)),
		  span: plt.types.NumberTower.toFixnum(stxModule.EXPORTS.Loc_dash_span(aLoc)),
		  id: stxModule.EXPORTS.Loc_dash_id(aLoc) };

	    this.addToInteractions(renderLocHashAsDom(aLocHash));
	    this.addToInteractions("\n");
	    this.addToInteractions(sexpToDom(newSexp));
	    this.addToInteractions("\n");
	} else {
	    this.addToInteractions(this.renderErrorLocationAsDomNode(err));
	    this.addToInteractions("\n");
	    this.addToInteractions(this.renderErrorAsDomNode(err));
	    this.addToInteractions("\n");
	}
    };



    // renderErrorAsDomNode: exception -> element
    // Given an exception, produces error dom node to be displayed.
    WeSchemeInteractions.prototype.renderErrorAsDomNode = function(err) {
	var type, msg;
	if (err && 
	    err.hasOwnProperty("name") &&
	    err.hasOwnProperty("msg")) {
	    type = err.name;
	    msg = err.msg;
	} else {
	    type = "Error";
	    msg = err.msg;
	}
	return createDom(
	    "div",
	    { 'class': "moby-error" },
	    createDom(
		"div",
		{ 'class' : "moby-error-type"},
		type),
	    createDom(
		"div",
		{ 'class': "moby-error-message"},
		msg));
    };



    // getLocFromError: error -> loc or undefined
    // Tries to get the location from an error value.
    // FIXME: this should be refactored so Moby runtime errors
    // include loc in their structure: we should NOT be touching
    // plt.Kernel.lastLoc.
    var getLocFromError = function(err) {
	if (err instanceof plt.types.MobyParserError) {
	    return err.log;
	} else if (err instanceof plt.types.MobySyntaxError) {
	    return err.stx.loc;
	} else if (err instanceof plt.types.MobyError){
	    return plt.Kernel.lastLoc;
	} else {
	    if (plt.Kernel.lastLoc) {
		return plt.Kernel.lastLoc;
	    }
	} 
	return undefined;
    };


    // renderErrorLocationAsDomNode: error -> element
    // Given an exception, produces an error location dom node to be displayed.
    WeSchemeInteractions.prototype.renderErrorLocationAsDomNode = function(err) {
	var loc = getLocFromError(err);	
	if (!loc) {
	    return createDom(
		"div",
		{'class' : "moby-location-unknown"});
	} else {
	    return renderLocHashAsDom(loc);
	}
    };


    var renderLocHashAsDom = function(loc) {
	return createDom(
	    "div",
	    {'class': "moby-location"},
	    createDom("div", {'class': "moby-location-source-id"}, "source: " + loc.id),
	    createDom("div", {'class': "moby-location-line"}, "line: " +loc.line),
	    createDom("div", {'class': "moby-location-line"}, "column: " +loc.column),
	    createDom("div", {'class': "moby-location-offset"}, "offset: " + loc.offset),
	    createDom("div", {'class': "moby-location-span"}, "span: " + loc.span)
	);
    };




    WeSchemeInteractions.prototype._getPermissionArray = function(permissionList) {
	// FIXME: we should notify the user what permissionList are being asked,
	// and what to permit.
	var perms = [];
	while (! permissionList.isEmpty()) {
	    var nextPermission = permissionList.first();
	    perms.push(nextPermission);
	    permissionList = permissionList.rest();
	}
	return perms;
    };




    WeSchemeInteractions.prototype._maybeRunPrompt = function(keyEvent) {
 	if (keyEvent.keyCode == 13) {
	    var nextCode = this.prompt.find("input").attr("value");
	    this.addToInteractions("> " + nextCode + "\n");
	    this.runCode(nextCode, "<interactions>");
	    this.history.push(nextCode);
	    this.prompt.find("input").attr("value", "");
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

    WeSchemeInteractions.prototype.toString = function() { return "WeSchemeInteractions()"; };

    return WeSchemeInteractions;
})();

plt.wescheme.interactions = WeSchemeInteractions;