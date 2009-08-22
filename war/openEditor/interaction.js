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

	this.addToInteractions("WeScheme Interactions");
	this.addToInteractions("---");
	this.namespace = new Namespace();
	this.pinfo = freshPinfo();

	this.notifyBus("after-reset", this);
    }


    // addToInteractions: string | dom-node -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
	this.notifyBus("before-add-to-interactions", this);
	if (interactionVal instanceof Element ||
	    interactionVal instanceof Text) {
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
	    var area = jQuery("<div></div>");
	    that.prompt.before(area);
	    return area.get(0);
	};
    }

    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource) {
	this.notifyBus("before-run", this);
	var that = this;
	this._prepareToRun();
	try {
	    var program = readSchemeExpressions(aSource);
	    var compiledProgram = 
		program_dash__greaterthan_compiled_dash_program_slash_pinfo(program, this.pinfo);

	    var newPinfo = 
		compiled_dash_program_dash_pinfo(compiledProgram);

	    that._updatePermissionList(pinfo_dash_permissions(newPinfo));

	    var defns = compiled_dash_program_dash_defns(compiledProgram);
	    var interFunc = compiled_dash_program_dash_toplevel_dash_exprs(compiledProgram);
	    var runToplevel = this.namespace.eval(defns, interFunc);
            
	    runToplevel(function(val) {
		if (val != undefined) {
		    that.addToInteractions(plt.Kernel.toDomNode(val));
		    that.addToInteractions("\n");
		}
	    });

	    // Update the pinfo.
	    this.pinfo = newPinfo;
	    this.notifyBus("after-run", this);
	} catch (err) {
	    if (plt.Kernel.lastLoc) {
		this.addToInteractions("Hit an error around: " + plt.Kernel.lastLoc + "\n");
	    }
	    this.addToInteractions(err.toString() + "\n");
	    throw err;
	}
    };



    WeSchemeInteractions.prototype.runCompiledCode = function(compiledCode, permStringArray) {
	this.notifyBus("before-run", this);
	var that = this;
	this._prepareToRun();
	try {
	    for (var i = 0; i < permStringArray.length; i++) {
		var perm = symbol_dash__greaterthan_permission(permStringArray[i]);
		plt.permission.runStartupCode(perm);
	    }
	    var runToplevel = this.namespace.eval(compiledCode, '""');
	    runToplevel(function(val) {
		if (val != undefined) {
		    that.addToInteractions(plt.Kernel.toDomNode(val) + "\n");
		}
	    });
	    this.notifyBus("after-run", this);
	} catch (err) {
	    this.addToInteractions(err.toString() + "\n");
	    throw err;
	}
    };




    WeSchemeInteractions.prototype._updatePermissionList = function(permissionList) {
	// FIXME: we should notify the user what permissionList are being asked,
	// and what to permit.
	while (! permissionList.isEmpty()) {
	    var nextPermission = permissionList.first();
	    plt.permission.runStartupCode(nextPermission);
	    permissionList = permissionList.rest();
	}
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