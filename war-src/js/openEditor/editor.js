// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }


goog.provide('plt.wescheme.WeSchemeEditor');


goog.require('plt.wescheme.AjaxActions');
goog.require('plt.wescheme.WeSchemeIntentBus');
goog.require('plt.wescheme.SharingDialog');
goog.require('plt.wescheme.WeSchemeInteractions');



var WeSchemeEditor;

(function() {

    // The timeout between autosaving.
    var AUTOSAVE_TIMEOUT = 5000;



    // 
    // These are the dependencies we're trying to maintain.
    // 

    // isDirty: true if the file has been changed
    //          false when the file becomes saved.

    // saveButton: enabled only when the definitions area is dirty
    //             and the file hasn't been published
    //             and you own the file
    //             and you are logged in (non-"null" name)

    // 
    // cloneButton: enabled when you are logged in (non-"null" name)
    //              and the file isn't dirty

    // 
    // runButton: enabled all the time


    // the definitions and filename areas: readonly if you don't own the file,


    
    //////////////////////////////////////////////////////////////////////

    
    





    WeSchemeEditor = function(attrs) {
	var that = this;

	this.userName = attrs.userName; // string
	this.actions = new plt.wescheme.AjaxActions();


	// defn is assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer
	this.isOwner = false;

	this.interactions = new plt.wescheme.WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();

	this.interactions.setSourceHighlighter(function(id, offset, line, column, span) {
	    that.highlight(id, offset, line, column, span);
	});


	this.filenameEntry = new FlapjaxValueHandler(
	    attrs.filenameInput.get(0));

	this.filenameEntry.node.type = "text";
	this.filenameEntry.setValue("Unknown");
	this.filenameEntry.behavior.changes().mapE(function(v) {
	    plt.wescheme.WeSchemeIntentBus.notify("filename-changed", that);
	});


	// pid: (or false number)
	this.pid = false;

	this.defn.getSourceB().changes().mapE(function() {
	    plt.wescheme.WeSchemeIntentBus.notify("definitions-changed", that);
	});




	//////////////////////////////////////////////////////////////////////

	// Flapjax stuff.
	
	//////////////////////////////////////////////////////////////////////
	// EVENTS
	//////////////////////////////////////////////////////////////////////

	// savedE is a boolean eventStream which receives true
	// when a save has happened.
	this.savedE = receiverE();	

	// loadedE is a boolean eventStream that receives true whenever
	// a load has happened.
	this.loadedE = receiverE();

	// publishedE is a boolean eventStream that receives true whenever
	// a program has been published;
	this.isPublishedE = receiverE();


	// contentChangedE event fires true if the source or filename
	// changes.
	this.contentChangedE = mergeE(
	    constantE(changes(this.defn.getSourceB()), true),
	    constantE(changes(this.filenameEntry.behavior), true));
	

	this.isOwnerE = receiverE();



	// loggedInB is a boolean behavior that's true when the user has
	// logged in.
	this.isLoggedInB = constantB(this._getIsLoggedIn());
	
	
	// A number or false behavior.
	this.pidB = startsWith(
	    this.loadedE.mapE(function(v) {
		return that.pid; }),
	    that.pid);
	
	
	// Returns true if the file is new.
	this.isNewFileB = startsWith(
 	    changes(this.pidB).mapE(function(v) {
 		return that.pid == false; }),
 	    that.pid == false);
	
	
	this.isPublishedB = startsWith(this.isPublishedE,
				       false);

	
	// isOwnerB is a boolean behavior that's true if we own the file,
	// and false otherwise.  It changes on load.
	this.isOwnerB = startsWith(this.isOwnerE, this.isOwner);
    
	
	// isDirtyB is initially false, and changes when
	// saves or changes to the source occur.
	this.isDirtyB = startsWith(
	    mergeE(// false if we loaded a file
		constantE(this.loadedE, false),
		// false when the file becomes saved.
		constantE(this.savedE, false),
		// true if the content has changed.
		constantE(this.contentChangedE, true)),
	    false);



	// isAutosaveEnabledB: enabled only when the definitions area is dirty
	//             and it hasn't been published yet
	//             and you own the file
	//             and you are logged in (non-"null" name)
	this.isAutosaveEnabledB = andB(this.isDirtyB,
				       notB(this.isPublishedB),
				       this.isOwnerB,
				       this.isLoggedInB);




	// We'll fire off an autosave if the content has changed and
	// saving is enabled, and it's not a new file.
	this.autosaveRequestedE = 
	    calmE(andE(this.contentChangedE,
		       changes(this.isAutosaveEnabledB)),
		  constantB(AUTOSAVE_TIMEOUT));
		  
	

	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	// HOOKS

	// Autosave
	this.autosaveRequestedE.mapE(function(v) { 
	    if (v) {
		that._autosave();
	    }
	});

    };





    // Inserting the value of a boolean behavior into the enabled
    // attribute of a node.
    function insertEnabledB(aBooleanBehavior, jQueryNode) {
	function f(v) {
	    if (v) {
		jQueryNode.removeAttr("disabled")
	    } else {
		jQueryNode.attr("disabled", "true");
	    }

	}
	f(valueNow(aBooleanBehavior));
	aBooleanBehavior.changes().mapE(f);
    }


    WeSchemeEditor.prototype.highlight = function(id, offset, line, column, span) {
	if (id === '<definitions>') {
	    this.defn.highlight(id, offset, line, column, span);
	} else {
	    // FIXME: we need to make interaction divs also codemirror divs so we can
	    // do the source highlighting.
	}
    };



    // WeSchemeEditor._getIsLoggedIn: -> boolean
    // Returns true if the user has been logged in.
    WeSchemeEditor.prototype._getIsLoggedIn = function() {
	return (this.userName && this.userName != 'null');
    }




    // WeSchemeEditor._autosave: -> void
    WeSchemeEditor.prototype._autosave = function() {
	plt.wescheme.WeSchemeIntentBus.notify("autosave", this);
	this.save();
    };




    WeSchemeEditor.prototype.save = function() {
	var that = this;
	var afterSave = function(pid) {
	    that.pid = pid;
	    plt.wescheme.WeSchemeIntentBus.notify("before-save", that);

	    that.savedE.sendEvent(true);
	    plt.wescheme.WeSchemeIntentBus.notify("after-save", that);
	}
	var whenSaveBreaks = function() {
	    alert("Unable to save");
	    // FIXME
	}

	var onFirstSave = function() {
	    that.actions.save(false, 
		 that.filenameEntry.attr("value"),
		 that.defn.getCode(),
		 function(newPid) { afterSave(newPid);
				    // We want the reload button to work from this
				    // point forward, so let's change the history.
//				    window.location = (
//					"/openEditor?pid=" + encodeURIComponent(that.pid));
				  },
		 whenSaveBreaks);
	}
	var onUpdate = function() {
	    that.actions.save(that.pid,
		 that.filenameEntry.attr("value"),
		 that.defn.getCode(),
		 afterSave,
		 whenSaveBreaks);
	};

	if (this.pid == false) {
	    onFirstSave();
	} else {
	    if (valueNow(this.isPublishedB)) {
		that.actions.makeAClone(that.pid,
			   that.defn.getCode(),
			   function(x) {
			       afterSave(x);
			       window.location = (
				   "/openEditor?pid=" + encodeURIComponent(that.pid)
			       );
			   }
			   ,
			   whenSaveBreaks);
	    } else {
		onUpdate();
	    }
	}
    };






    WeSchemeEditor.prototype.load = function(attrs) {
	var that = this;

	
	var whenLoadSucceeds = function(data, aProgram) {
 	    that.pid = aProgram.getId();
 	    var publicUrl = getAbsoluteUrl(
 		"/openEditor?publicId=" +
 		    encodeURIComponent(aProgram.getPublicId()));
 	    that.filenameEntry.attr("value", aProgram.getTitle());
 	    that.defn.setCode(aProgram.getSourceCode());
			      
	    if (that.userName === aProgram.getOwner()) {
		that._setIsOwner(true);
	    } else {
		that._setIsOwner(false);
	    }
	    that.loadedE.sendEvent(true);
	    that.isPublishedE.sendEvent(aProgram.isPublished());
	    plt.wescheme.WeSchemeIntentBus.notify("after-load", that);
	};

	var whenLoadFails = function() { 
	    // FIXME
	    alert("The load failed.");
	}
	if (attrs.pid) {
	    plt.wescheme.WeSchemeIntentBus.notify("before-load", this);
	    that.actions.loadAProject(attrs.pid,
			 undefined,
			 whenLoadSucceeds,
			 whenLoadFails);
	} else if (attrs.publicId) {
	    plt.wescheme.WeSchemeIntentBus.notify("before-load", this);
	    that.actions.loadAProject(undefined,
			 attrs.publicId,
			 whenLoadSucceeds,
			 whenLoadFails);
	} else {
	    throw new Error("pid or publicId required");
	}
    };




    function getAbsoluteUrl(relativeUrl) {
	var anchor = document.createElement("a");
	anchor.href = relativeUrl;
	return anchor.href;
    }
	



    WeSchemeEditor.prototype.share = function() {
	var dialog = new plt.wescheme.SharingDialog(this.pid, this.defn.getCode());
	dialog.show();
    };



    WeSchemeEditor.prototype.run = function() {
	var that = this;
	plt.wescheme.WeSchemeIntentBus.notify("before-run", this);
	this.interactions.reset();
	this.interactions.runCode(
	    this.defn.getCode(), 
	    "<definitions>",
	    function() {
		plt.wescheme.WeSchemeIntentBus.notify("after-run", that);
	    });
    };


    WeSchemeEditor.prototype.requestBreak = function() {
	this.interactions.requestBreak();
    };



    WeSchemeEditor.prototype._setIsOwner = function(v) {
	this.isOwner = v;
	this.isOwnerE.sendEvent(v);
    }


    WeSchemeEditor.prototype.toString = function() { return "WeSchemeEditor()"; };




    // FIXME: copy and paste from console.js
    // makeShareUrl: string -> string
    // Produces the sharing url
    function makeShareUrl(publicId) {
	if (publicId != "") {
	    var a = document.createElement("a");
	    a.href = "/view?publicId=" + encodeURIComponent(publicId);
	    a.appendChild(document.createTextNode(a.href));
	    return jQuery(a); 
	}
    }





})();


plt.wescheme.WeSchemeEditor = WeSchemeEditor;