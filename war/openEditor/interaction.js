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
	    this.handleError(err);
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
			    that.addToInteractions(plt.types.toDomNode(val));
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
    
    WeSchemeInteractions.prototype.handleError = function(err) {
	this.addToInteractions(this.renderErrorLocationAsDomNode(err));
	this.addToInteractions("\n");
	this.addToInteractions(this.renderErrorAsDomNode(err));
	this.addToInteractions("\n");
    };



    // renderErrorAsDomNode: exception -> element
    // Given an exception, produces error dom node to be displayed.
    WeSchemeInteractions.prototype.renderErrorAsDomNode = function(err) {
	var type, msg;
	if (err.hasOwnProperty("name") &&
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
		{ 'class' : "moby-error:type"},
		type),
	    createDom(
		"div",
		{ 'class': "moby-error:message"},
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
	    return createDom(
		"div",
		{'class': "moby-location"},
		createDom("div", {'class': "moby-location:source-id"}, "source: " + loc.id),
		createDom("div", {'class': "moby-location:line"}, "line: " +loc.line),
		createDom("div", {'class': "moby-location:offset"}, "offset: " + loc.offset),
		createDom("div", {'class': "moby-location:span"}, "span: " + loc.span)
	    );
	}
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