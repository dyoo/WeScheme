var WeSchemeEditor;

(function() {

    // The timeout between autosaving.
    var AUTOSAVE_TIMEOUT = 10000;



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


	// defn is assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer
	this.isOwner = true;

	this.interactions = new WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();

	this.saveButton = attrs.saveButton;
	this.cloneButton = attrs.cloneButton;


	this.filenameEntry = new FlapjaxValueHandler(
	    attrs.filenameInput.get(0));

	this.filenameEntry.node.type = "text";
	this.filenameEntry.setValue("Unknown");
	this.filenameEntry.behavior.changes().mapE(function(v) {
	    WeSchemeIntentBus.notify("filename-changed", that);
	});


	// pid: (or false number)
	this.pid = false;

	this.defn.addChangeListener(function() {
	    WeSchemeIntentBus.notify("definitions-changed", that);
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




	// contentChangedE event fires true if the source or filename
	// changes.
	this.contentChangedE = mergeE(
	    constantE(changes(this.defn.getSourceB()), true),
	    constantE(changes(this.filenameEntry.behavior), true));
	



	this.isOwnerE = receiverE();


	// We'll fire off an autosave if the content has changed and
	// saving is enabled, and it's not a new file.
	this.autosaveRequestedE = 
	    filterE(calmE(this.contentChangedE, constantB(AUTOSAVE_TIMEOUT)),
		    function(v) {return (v &&
					 valueNow(that.saveButtonEnabledB) &&
					 !(valueNow(that.isNewFileB)))});
	
	

	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////

	// BEHAVIORS



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
	
	
	
	// isOwnerB is a boolean behavior that's true if we own the file,
	// and false otherwise.  It changes on load.
	this.isOwnerB = startsWith(this.isOwnerE, false);
    
	
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



	// saveButton: enabled only when the definitions area is dirty
	//             and the file hasn't been published
	//             and (you own the file, or the file is new)
	//             and you are logged in (non-"null" name)
	this.saveButtonEnabledB = andB(this.isDirtyB,
				       orB(this.isOwnerB,
					   this.isNewFileB),
				       this.isLoggedInB);

    
	// The areas are editable under the following condition:
	var isEditableB = andB(orB(this.isOwnerB, 
				   this.isNewFileB));

	

	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	// HOOKS

	// Autosave
	this.autosaveRequestedE.mapE(function(v) { 
	    if (v) {
		that._autosave();
	    }
	});

	// The enabled button's state, if one were provided.
	if (this.saveButton) {
	    insertEnabledB(this.saveButtonEnabledB, this.saveButton);
	}

	// The clone button's enabled state
	if (this.cloneButton) {
	    insertEnabledB(andB(this.isLoggedInB, notB(this.isDirtyB)),
			   this.cloneButton);
	}
    

	// Editable editors and text areas.
	isEditableB.changes().mapE(function(v) {
	    if (v) {
 		that.defn.setReadOnly(false);
 		that.filenameEntry.removeAttr("readonly");
 	    } else {
 		that.defn.setReadOnly(true);
 		that.filenameEntry.attr("readonly", "true");
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



    // WeSchemeEditor._getIsLoggedIn: -> boolean
    // Returns true if the user has been logged in.
    WeSchemeEditor.prototype._getIsLoggedIn = function() {
	return (this.userName && this.userName != 'null');
    }




    // WeSchemeEditor._autosave: -> void
    WeSchemeEditor.prototype._autosave = function() {
	WeSchemeIntentBus.notify("autosave", this);
	this.save();
    };




    WeSchemeEditor.prototype.save = function() {
	var that = this;
	function saveProjectCallback(data) {
	    // The data contains the pid of the saved program.
	    that.pid = parseInt(data);
	    WeSchemeIntentBus.notify("before-save", that);

	    that.savedE.sendEvent(true);
	    WeSchemeIntentBus.notify("after-save", that);
	}

	function onFirstSave() {
	    var data = { title: that.filenameEntry.attr("value"),
			 code: that.defn.getCode()};
	    var type = "text";
	    jQuery.post("/saveProject", 
			data, 
			function(data) { 
			    saveProjectCallback(data); 
			    // We want the reload button to work from this
			    // point forward, so let's change the history.
			    window.location = "/openEditor?pid=" + encodeURIComponent(that.pid);
			},
			type);
	}

	function onUpdate() {
	    var data = { pid: that.pid,
			 title: that.filenameEntry.attr("value"),
			 code: that.defn.getCode()};
	    var type = "text";
	    jQuery.post("/saveProject", data, saveProjectCallback, type);
	}

	if (this.pid == false) {
	    onFirstSave();
	} else {
	    onUpdate();
	}
    };


    WeSchemeEditor.prototype.clone = function() {
	if (this.pid) {
	    var that = this;
	    var data = { pid: this.pid,
		         code: that.defn.getCode() };
	    var type = "text";
	    var callback = function(data) {
		WeSchemeIntentBus.notify("after-clone", that);
		window.location = "/openEditor?pid=" + encodeURIComponent(parseInt(data));
	    };
	    WeSchemeIntentBus.notify("before-clone", this);
	    jQuery.post("/cloneProject", data, callback, type);
	}
    };



    WeSchemeEditor.prototype.load = function(attrs) {

	var that = this;
	var data;
	if (attrs.pid) {
	    data = { pid: attrs.pid };
	} else if (attrs.publicId) {
	    data = { publicId: attrs.publicId };
	} else {
	    throw new Error("pid or publicId required");
	}
	var type = "xml";
	var callback = function(data) {
	    var dom = jQuery(data);

	    that.pid = parseInt(dom.find("id").text());
	    var publicUrl = getAbsoluteUrl(
		"/openEditor?publicId=" +
		    encodeURIComponent(dom.find("publicId").text()));
	    that.filenameEntry.attr("value", dom.find("title").text());
	    that.defn.setCode(dom.find("source").text());

	    if (that.userName == dom.find("owner").text()) {
		that._setIsOwner(true);
	    } else {
		that._setIsOwner(false);
	    }
	    that.loadedE.sendEvent("true");
	    WeSchemeIntentBus.notify("after-load", that);
	};
	WeSchemeIntentBus.notify("before-load", this);
	jQuery.get("/loadProject", data, callback, type);
    };




    function getAbsoluteUrl(relativeUrl) {
	var anchor = document.createElement("a");
	anchor.href = relativeUrl;
	return anchor.href;
    }
	


    WeSchemeEditor.prototype.share = function() {
	if (this.pid) {
// 	    var that = this;
// 	    var afterPublish = function(data, textStatus) {
// 		var dom = jQuery(data);
// 		WeSchemeIntentBus.notify("after-publish", that);
// 	    };

// 	    var error = function(xmlhttp, textstatus, errorThrown) {
// 		WeSchemeIntentBus.notify("exception", 
// 					 [that, "publish", textstatus, errorThrown]);
// 	    };

// 	    WeSchemeIntentBus.notify("before-publish", this);
// 	    jQuery.ajax({cache : false,
// 			 data : { pid: this.pid },
// 			 dataType: "xml",
// 			 type: "POST",
// 			 url: "/publishProject",
// 			 success: afterPublish,
// 			 error: error
// 			});
	    var dialogWindow = (
		jQuery("#dialog")
		    .empty()
		    .append(jQuery("<p/>").text(
			"Do you wish to share with source?")));
	    dialogWindow.dialog({title: 'Sharing',
				 bgiframe : true,
				 modal : true,
				 overlay : {opacity: 0.5,
					    background: 'black'}
				});
	} else {

	}
    };



    WeSchemeEditor.prototype.run = function() {
	WeSchemeIntentBus.notify("before-run", this);
	this.interactions.reset();
	this.interactions.runCode(this.defn.getCode());
	WeSchemeIntentBus.notify("after-run", this);
    };



    WeSchemeEditor.prototype._setIsOwner = function(v) {
	this.isOwner = v;
	this.isOwnerE.sendEvent(v);
    }


    WeSchemeEditor.prototype.toString = function() { return "WeSchemeEditor()"; };

})();