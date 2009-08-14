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

    // 
    // runButton: enabled all the time

    // 
    // publishButton: enabled only when the editor isn't dirty
    //                and the file hasn't been published yet
    //                and you own the file

    // the definitions area: readonly if you don't own the file,
    //                       or the file has been published






    WeSchemeEditor = function(attrs) {
	var that = this;

	this.userName = attrs.userName; // string

	// defn is assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer
	this.isDirty = false;
	this.isOwner = true;

	this.interactions = new WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();

	this.saveButton = attrs.saveButton;

	this.pidDiv = attrs.pidDiv;           // JQuery
	this.filenameDiv = attrs.filenameDiv; // JQuery

	this.publicIdPane = attrs.publicIdPane;
	this.publicIdDiv = attrs.publicIdDiv; // JQuery

	this.filenameEntry = (jQuery("<input/>").
			      attr("type", "text").
			      attr("value", "Unknown").
			      change(function() { 
				  WeSchemeIntentBus.notify("filename-changed", that);
			      }));;
	this.filenameDiv.append(this.filenameEntry);

	this.isPublished = false;

	// publishButton: (jqueryof button)
	this.publishButton = attrs.publishButton;

	// pid: (or false number)
	this.pid = false;

	this.defn.addChangeListener(function() {
	    WeSchemeIntentBus.notify("definitions-changed", that);
	});


	startAutosaving(this);
	startIsDirtyMonitor(this);
    };




    // Maintains a monitor that watches whenever things get changed, and
    // maintains the dirty attribute.
    function startIsDirtyMonitor(editor) {
	WeSchemeIntentBus.addNotifyListener(function(action, category, data) {
	    if ((category == 'filename-changed' || 
		 category == 'definitions-changed') && 
		data == editor) {
		editor.isDirty = true;

		if (editor.isPublished) {
		    editor.saveButton.attr("value", "Save");
		    editor.saveButton.attr("disabled", "true");		
		} else {
		    editor.saveButton.attr("value", "Save");
		    editor.saveButton.removeAttr("disabled");
		}

	    } else if (((category == 'after-save' || category == 'after-load') 
			&& data == editor)) {
		editor.isDirty = false;

		editor.saveButton.attr("value", "Saved");
		editor.saveButton.attr("disabled", "true");		
	    }
	});
    }
    



    // Every few seconds, will check if the program hasn't been saved yet.
    function startAutosaving(editor) {
	var currentTimer = false;

	function restartTimerListener(action, category, data) {
	    if (action == "notify" && 
		category == "before-save" && 
		data instanceof WeSchemeEditor) {
		if (currentTimer) {
		    clearTimeout(currentTimer);
		}
		currentTimer = beginTimer();
	    }
	}

	function timerFiredOff() {
	    if (editor.isDirty) {
		WeSchemeIntentBus.notify("autosave", editor);
		if (editor.pid && ! editor.isPublished) {
		    editor.save();
		}
	    }
	    clearTimeout(currentTimer);
	    currentTimer = beginTimer();
	}

	function beginTimer() {
	    return setTimeout(timerFiredOff, AUTOSAVE_TIMEOUT);
	}

	WeSchemeIntentBus.addNotifyListener(restartTimerListener);
	currentTimer = beginTimer();
    }






    WeSchemeEditor.prototype.save = function() {
	var that = this;

	function saveProjectCallback(data) {
	    // The data contains the pid of the saved program.
	    that.pid = parseInt(data);
	    WeSchemeIntentBus.notify("before-save", that);
	    that.pidDiv.text(data);
	    that.filenameEntry.value = data;

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

	    that.pidDiv.text(dom.find("id").text());
	    that.pid = parseInt(dom.find("id").text());
	    that.publicIdDiv.empty();
	    var publicUrl = getAbsoluteUrl(
		"/openEditor?publicId=" +
		    encodeURIComponent(dom.find("publicId").text()));
	    that.publicIdDiv.append(jQuery("<input/>")
				    .attr("type", "text")
				    .attr("size", publicUrl.length)
				    .attr("value", publicUrl)
				    .attr("readonly", true));
	    that.filenameEntry.attr("value", dom.find("title").text());
	    that.defn.setCode(dom.find("source").text());
	    that._setIsPublished(dom.find("published").text() == "true" ?
				 true : false);

	    if (that.userName == dom.find("owner").text()) {
		that._setIsOwner(true);
	    } else {
		that._setIsOwner(false);
	    }

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
	


    WeSchemeEditor.prototype.publish = function() {
	if (this.pid) {
	    var that = this;
	    function callback(data, textStatus) {
		var dom = jQuery(data);
		that._setIsPublished(dom.find("published").text() == "true" 
				     ? true : false);
		WeSchemeIntentBus.notify("after-publish", that);
	    };

	    function error(xmlhttp, textstatus, errorThrown) {
		WeSchemeIntentBus.notify("exception", 
					 [that, "publish", textstatus, errorThrown]);
	    };

	    WeSchemeIntentBus.notify("before-publish", this);
	    var xmlhttp = jQuery.ajax({cache : false,
				       data : { pid: this.pid },
				       dataType: "xml",
				       type: "POST",
				       url: "/publishProject",
				       success: callback,
				       error: error
				      });
	}
    };



    WeSchemeEditor.prototype.run = function() {
	WeSchemeIntentBus.notify("before-run", this);
	this.interactions.reset();
	this.interactions.runCode(this.defn.getCode());
	WeSchemeIntentBus.notify("after-run", this);
    };





    WeSchemeEditor.prototype._setIsPublished = function(isPublished) {
	this.isPublished = isPublished;

	if (isPublished) {
	    this.publishButton.attr("value", "Published");
	    this.publishButton.attr("disabled", "true");

	    this.defn.setReadOnly(true);
	    this.filenameEntry.attr("readonly", "true");
	} else {
	    this.publishButton.attr("value", "Publish");
	    this.publishButton.removeAttr("disabled");
	}
    }

    WeSchemeEditor.prototype._setIsOwner = function(v) {
	this.isOwner = v;
	if (this.isOwner && !this.isPublished) {
	    this.defn.setReadOnly(false);
	    this.filenameEntry.removeAttr("readonly");
	} else {
	    this.defn.setReadOnly(true);
	    this.filenameEntry.attr("readonly", "true");
	}
    }



    WeSchemeEditor.prototype.toString = function() { return "WeSchemeEditor()"; };

})();