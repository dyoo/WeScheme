var WeSchemeInteractions;

WeSchemeInteractions = (function () {

    

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
	    _freshToplevel = get_dash_base_dash_pinfo(plt.types.Symbol.makeInstance("moby"));
	}
	return _freshToplevel;
    }



    WeSchemeInteractions.prototype.notifyBus = function(action, data) {
	if (typeof WeSchemeIntentBus != 'undefined') {
	    WeSchemeIntentBus.notify("after-reset", this);
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
	    if (interactionVal.afterAttach) { interactionVal.afterAttach(); }
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
	    var area = jQuery("<div id='top' style='border-style: solid; border-width: thin;'></div>");
	    that.prompt.before(area);
	    var innerArea = jQuery("<div></div>");
	    area.append(innerArea);
	    return innerArea.get(0);
	};
	plt.Kernel.lastLoc = undefined;
    }

    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource) {
	this.notifyBus("before-run", this);
	var that = this;
	this._prepareToRun();
	try {
	    var program = plt.reader.readSchemeExpressions(aSource);
	    var compiledProgram = 
		program_dash__greaterthan_compiled_dash_program_slash_pinfo(program, this.pinfo);

	    var newPinfo = 
		compiled_dash_program_dash_pinfo(compiledProgram);

	    var permArray = that._getPermissionArray(pinfo_dash_permissions(newPinfo));
	} catch (err) {
	    this.handleError(err);
	    return;
	}


	plt.permission.startupAllPermissions(
	    permArray,
	    function() {
		try {

		    var defns = compiled_dash_program_dash_defns(compiledProgram);
		    var interFunc = compiled_dash_program_dash_toplevel_dash_exprs(compiledProgram);
		    var runToplevel = that.namespace.eval(defns, interFunc);
		    
		    plt.Kernel.printHook = function(s) {
			that.addToInteractions(document.createTextNode(s));
			that.addToInteractions("\n");
		    };

		    runToplevel(function(val) {
			if (val != undefined) {
			    that.addToInteractions(plt.Kernel.toDomNode(val));
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
	if (err instanceof plt.Kernel.MobyParserError) {
		this.addToInteractions(
		    "Error (" + 
			Loc_dash__greaterthan_string(err.loc).toDisplayedString()
			+ ")\n");
	    this.addToInteractions(err.msg + "\n");
	} else if (err instanceof plt.Kernel.MobySyntaxError) {
		this.addToInteractions(
		    "Error (" + 
			Loc_dash__greaterthan_string(err.stx.loc).toDisplayedString()
			+ ")\n");
	    this.addToInteractions(err.msg + "\n");
	} else if (err instanceof plt.Kernel.MobyError){
	    if (plt.Kernel.lastLoc) {
		this.addToInteractions(
		    "Error (" + plt.Kernel.lastLoc + ")\n");
	    }
	    this.addToInteractions(err.msg + "\n");
	} else {
	    if (plt.Kernel.lastLoc) {
		this.addToInteractions(
		    "Error (" + plt.Kernel.lastLoc + ")\n");
	    }
	    this.addToInteractions(err.toString() + "\n");
	}
    };


    WeSchemeInteractions.prototype.runCompiledCode = function(compiledCode, permStringArray) {
	this.notifyBus("before-run", this);
	var that = this;
	this._prepareToRun();
	var permArray = [];
	for (var i = 0; i < permStringArray.length; i++) {
	    permArray.push(symbol_dash__greaterthan_permission(permStringArray[i]))
	}
	var afterPermissionsGranted = function() {
	    try {
		var runToplevel = that.namespace.eval("", compiledCode);
 		runToplevel(function(val) {
 		    if (val != undefined) {
 			that.addToInteractions(
 			    plt.Kernel.toDomNode(val));
			that.addToInteractions("\n");
 		    }
 		});
		that.notifyBus("after-run", that);
	    } catch (err) {
		handleError(err);
	    }
	};

	try {
	    plt.permission.startupAllPermissions(
		permArray, afterPermissionsGranted);
	} catch (err) {
	    handleError(err);
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
	    this.runCode(nextCode);
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