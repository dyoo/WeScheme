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


	// defn is assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer
	this.isOwner = true;

	this.interactions = new WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();


	this.filenameEntry = new FlapjaxValueHandler(
	    attrs.filenameInput.get(0));

	this.filenameEntry.node.type = "text";
	this.filenameEntry.setValue("Unknown");
	this.filenameEntry.behavior.changes().mapE(function(v) {
	    WeSchemeIntentBus.notify("filename-changed", that);
	});


	// pid: (or false number)
	this.pid = false;

	this.defn.getSourceB().changes().mapE(function() {
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



	// isAutosaveEnabledB: enabled only when the definitions area is dirty
	//             and it hasn't been published yet
	//             and you own the file
	//             and the file isn't new
	//             and you are logged in (non-"null" name)
	this.isAutosaveEnabledB = andB(this.isDirtyB,
				       notB(this.isPublishedB),
				       notB(this.isNewFileB),
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
	var afterSave = function(pid) {
	    that.pid = pid;
	    WeSchemeIntentBus.notify("before-save", that);

	    that.savedE.sendEvent(true);
	    WeSchemeIntentBus.notify("after-save", that);
	}
	var whenSaveBreaks = function() {
	    alert("Unable to save");
	    // FIXME
	}

	var onFirstSave = function() {
	    save(false, 
		 that.filenameEntry.attr("value"),
		 that.defn.getCode(),
		 function(newPid) { afterSave(newPid);
				    // We want the reload button to work from this
				    // point forward, so let's change the history.
				    window.location = (
					"/openEditor?pid=" + encodeURIComponent(that.pid));
				  },
		 whenSaveBreaks);
	}
	var onUpdate = function() {
	    save(that.pid,
		 that.filenameEntry.attr("value"),
		 that.defn.getCode(),
		 afterSave,
		 whenSaveBreaks);
	};

	if (this.pid == false) {
	    onFirstSave();
	} else {
	    if (valueNow(this.isPublishedB)) {
		makeAClone(that.pid,
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
	    that.loadedE.sendEvent(true);
	    that.isPublishedE.sendEvent(
		dom.find("published").text() == "true" ? true : false);
	    WeSchemeIntentBus.notify("after-load", that);
	};

	var whenLoadFails = function() { 
	    // FIXME
	    alert("The load failed.");
	}
	if (attrs.pid) {
	    WeSchemeIntentBus.notify("before-load", this);
	    loadAProject(attrs.pid,
			 undefined,
			 callback,
			 whenLoadFails);
	} else if (attrs.publicId) {
	    WeSchemeIntentBus.notify("before-load", this);
	    loadAProject(undefined,
			 attrs.publicId,
			 callback,
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
	var that = this;
	var dialogWindow = (jQuery("<div/>"));
	
	var shareWithSource = function() {
	    dialogWindow.dialog("close");
	    doTheSharing(true, function() {});
	};

	var shareWithoutSource = function() {
	    dialogWindow.dialog("close");
	    doTheSharing(false, function() {});
	};

	// Does the brunt work of the sharing.
	var doTheSharing = function(isPublic, onSuccess, onFailure) {
	    makeAClone(
		that.pid, 
		that.defn.getCode(),
		function(newPid) { 
		    runTheCompiler(
			newPid, 
			function() {
			    publish(newPid,
				    isPublic,
				    function() {
				    },
				    whenPublishingFails);
			},
			whenCompilationFails);
		},
		whenCloningFails);
	};

	var whenCompilationFails = function() {
	    // FIXME
	    alert("compilation failed");
	};

	var whenCloningFails = function() {
	    // FIXME
	    alert("cloning failed");
	};

	var whenPublishingFails = function() {
	    // FIXME
	    alert("Publishing failed.");
	};


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
	    dialogWindow.append(jQuery("<p/>").text(
		"Do you wish to share with source?"));
	    dialogWindow.dialog({title: 'Sharing your program',
				 bgiframe : true,
				 modal : true,
				 overlay : {opacity: 0.5,
					    background: 'black'},
				 buttons : { "Share source" : shareWithSource,
					     "Keep source private" : shareWithoutSource }
				});
	    dialogWindow.dialog("open");
	} else {
	    dialogWindow.append(jQuery("<p/>").text(
		"The program needs to be saved before it can be shared."));
	    dialogWindow.dialog({title: 'Sharing your program',
				 bgiframe : true,
				 modal : true,
				 overlay : {opacity: 0.5,
					    background: 'black'},
				 buttons : {}
				});
	    dialogWindow.dialog("open");
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







    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    // AJAX HELPERS



    // loadAProject: number (jquery -> void) (-> void)
    function loadAProject(pid, publicId, onSuccess, onFailure) {
	var pid;
	if (pid) {
	    data = { pid: pid };
	} else {
	    data = { publicId: publicId };
	}
  	jQuery.ajax({cache : false,
  		     data : data,
  		     dataType: "xml",
  		     type: "GET",
  		     url: "/loadProject",
  		     success: function(dom) {
			 onSuccess(jQuery(dom));
		     },
  		     error: function() {
			 onFailure();
		     },
		     xhr: function() { return new XMLHttpRequest(); }
		    });
    }


    // runTheCompiler: number (-> void) (-> void) -> void
    // Drives the compiler.
    function runTheCompiler(pid, onSuccess, onFailure) {
  	jQuery.ajax({cache : false,
  		     data : { pid: pid },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/build",
  		     success: function(data) {
			 onSuccess();
		     },
  		     error: function() {
			 onFailure();
		     },
		     xhr: function() { return new XMLHttpRequest(); }
		    });
    }


    // makeAClone: number string (number -> void) (-> void) -> void
    // Clones a program.
    function makeAClone(pid, code, onSuccess, onFailure) {
  	jQuery.ajax({cache : false,
  		     data : { pid: pid, code: code },
  		     dataType: "text",
  		     type: "POST",
  		     url: "/cloneProject",
  		     success: function(data) {
			 var newPid = parseInt(data);
			 onSuccess(newPid);
		     },
		     error: function() {
			 onFailure();
		     }, 
		     xhr: function() { return new XMLHttpRequest(); }
		    });
    }
    

    // publish: number boolean (-> void) (-> void) -> void
    // Sets the published flag on a program.
    function publish(pid, isPublic, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid,
			      isPublic: isPublic },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/publishProject",
  		     success: function(data) {
			 onSuccess();
			 // FIXME
		     },
  		     error: function() {
			 // FIXME
			 onFailure();
		     }, 
		     xhr: function() { return new XMLHttpRequest(); }
  		    });
    }



    // save: (U undefined number) string string (number -> void) (-> void) -> void
    // Does a save.
    function save(pid, title, code, onSuccess, onFailure) {
	var data;
	if (pid) {
	    data = { pid: pid,
		     title: title,
		     code: code };
	} else {
	    data = { title: title,
		     code: code };
	}
  	jQuery.ajax({cache : false,
  		     data : data,
  		     dataType: "text",
  		     type: "POST",
  		     url: "/saveProject",
  		     success: function(data) {
			 var newPid = parseInt(data);
			 onSuccess(newPid);
		     },
		     error: function() {
			 onFailure();
		     },
		     xhr: function() { return new XMLHttpRequest(); }
		    });
    }


})();