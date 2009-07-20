var WeSchemeInteractions;

WeSchemeInteractions = (function () {

    

    // WeSchemeInteractions: div -> WeScheme
    function WeSchemeInteractions(interactionsDiv) { 
	    this.interactionsDiv = jQuery(interactionsDiv);
	    this.prompt = undefined;
	    this.namespace = undefined;
	    this.pinfo = undefined;
    };

    
    // freshPinfo: -> pinfo
    // Returns a new Pinfo object with a good toplevel environment.
    function freshPinfo() {
	return get_dash_base_dash_pinfo(plt.types.Symbol.makeInstance("moby"));
    }



    // reset: -> void
    // Clears out the interactions.
    WeSchemeInteractions.prototype.reset = function() {
	this.interactionsDiv.empty();
	this.prompt = jQuery("<div style='width:100%'><span>&gt;&gt;&gt; <textarea style='width: 75%'></textarea></span></div>");
	this.interactionsDiv.append(this.prompt);

	this.addToInteractions("WeScheme Interactions");
	this.addToInteractions("---");
	this.namespace = new Namespace();
	this.pinfo = freshPinfo();
	//	this.prompt.value = "";
    }


    // addToInteractions: string -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
	var newArea = jQuery("<div style='width: 100%'></div>");
	newArea.text(interactionVal);
	this.prompt.before(newArea);
    };


    // addErrorToInteractions: string -> void
    // Adds a notification that something bad happened.
    // TODO: do something colorful.
    WeSchemeInteractions.prototype.addErrorToInteractions = function(val) {
	this.interactions.append(val);
    }


    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource) {
	var that = this;
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
	} catch (err) {
	    this.addToInteractions(err.toString() + "\n");
	    throw err;
	}
    };


//     // Evaluate the code that's in the prompt.
//     function runPrompt() {
// 	addToInteractions(">>> " + this.prompt.value + "\n");
// 	this.runCode(this.prompt.value);
// 	this.prompt.value = "";
//     }



//     function maybeRunPrompt(keyEvent) {
// 	if (keyEvent.keyCode == 13) {
// 	    runPrompt();
// 	}
//     }

    return WeSchemeInteractions;
})();