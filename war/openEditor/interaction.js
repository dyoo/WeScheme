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

    


    // freshPinfo: -> pinfo
    // Returns a new Pinfo object with a good toplevel environment.
    function freshPinfo() {
	return get_dash_base_dash_pinfo(plt.types.Symbol.makeInstance("moby"));
    }



    // reset: -> void
    // Clears out the interactions.
    WeSchemeInteractions.prototype.reset = function() {
	WeSchemeIntentBus.notify("before-reset", this);
	var that = this;
	this.interactionsDiv.empty();
	this.prompt = jQuery("<div style='width:100%'><span>&gt; <input type='text' style='width: 75%'></span></div>");
	this.interactionsDiv.append(this.prompt);

	this.prompt.contents().keydown(function(e) { that._maybeRunPrompt(e) });

	this.addToInteractions("WeScheme Interactions");
	this.addToInteractions("---");
	this.namespace = new Namespace();
	this.pinfo = freshPinfo();

	WeSchemeIntentBus.notify("after-reset", this);
    }


    // addToInteractions: string -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
	WeSchemeIntentBus.notify("before-add-to-interactions", this);
	var newArea = jQuery("<div style='width: 100%'></div>");
	newArea.text(interactionVal);
	this.prompt.before(newArea);
	this.interactionsDiv.attr("scrollTop", this.interactionsDiv.attr("scrollHeight"));
	WeSchemeIntentBus.notify("after-add-to-interactions", this);
    };



    WeSchemeInteractions.prototype._prepareToRun = function() {
	var that = this;
	plt.world.MobyJsworld.makeToplevelNode = function() {
	    var area = jQuery("<div>hello</div>");
	    that.prompt.before(area);
	    return area.get(0);
	};
    }

    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource) {
	WeSchemeIntentBus.notify("before-run", this);
	var that = this;
	this._prepareToRun();
	try {
	    var program = readSchemeExpressions(aSource);
	    var compiledProgram = 
		program_dash__greaterthan_compiled_dash_program_slash_pinfo(program, this.pinfo);

	    var defns = compiled_dash_program_dash_defns(compiledProgram);
	    var interFunc = compiled_dash_program_dash_toplevel_dash_exprs(compiledProgram);
	    var runToplevel = this.namespace.eval(defns, interFunc);
            
	    runToplevel(function(val) {
		if (val != undefined) {
		    that.addToInteractions(val.toWrittenString() + "\n");
		}
	    });

	    // Update the pinfo.
	    this.pinfo = compiled_dash_program_dash_pinfo(compiledProgram);
	    WeSchemeIntentBus.notify("after-run", this);
	} catch (err) {
	    this.addToInteractions(err.toString() + "\n");
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