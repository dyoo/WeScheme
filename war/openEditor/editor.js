var WeSchemeEditor;

(function() {
    WeSchemeEditor = function(attrs) {
	var that = this;
	// defn is assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer

	this.interactions = new WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();

	this.pidDiv = attrs.pidDiv; // JQuery
	this.filenameDiv = attrs.filenameDiv; // JQuery
	this.filenameEntry = (jQuery("<input/>").
			      attr("type", "text").
			      attr("value", "Unknown").
			      change(function() { 
				  WeSchemeIntentBus.notify("filename-changed", that);
			      }));;
	this.filenameDiv.append(this.filenameEntry);

	this.isPublished = false;

	// saveOrCloneButton: (jqueryof button)
	this.saveOrCloneButton = attrs.saveOrCloneButton;
	// publishButton: (jqueryof button)
	this.publishButton = attrs.publishButton;

	// pid: (or false number)
	this.pid = false;
	if (this.pidDiv.text() != "Unknown") {
	    this.pid = parseInt(this.pidDiv.text());
	}

	this.defn.addChangeListener(function() {
	    WeSchemeIntentBus.notify("definitions-changed", that);
	});


//	startAutosaveMonitor(this);
    };


    



//     // Every few seconds, will check if the program hasn't been saved yet.
//     function startAutosaveMonitor(editor) {
// 	var currentTimer = false;
// 	function restartTimerListener(action, category, data) {
// 	    if (action == "notify" && 
// 		category == "before-save" && 
// 		data instanceof WeSchemeEditor) {
		
// 	    }
// 	}

// 	function beginTimeout() {
// 	    return setTimeout(function() {
// 		if (! editor.isPublished) {
// 		    editor.saveOrClone();
// 		}
// 	    },
// 			      TIMEOUT_DELAY);
// 	}


//     }






    WeSchemeEditor.prototype.saveOrClone = function() {
	if (! this.isPublished) {
	    this._save();
	} else {
	    this._clone();
	}
    }


    WeSchemeEditor.prototype._save = function() {
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


    WeSchemeEditor.prototype._clone = function() {
	if (this.pid) {
	    var that = this;
	    var data = { pid: this.pid };
	    var type = "text";
	    var callback = function(data) {
		WeSchemeIntentBus.notify("after-clone", that);
		window.location = "/openEditor?pid=" + encodeURIComponent(parseInt(data));
	    };
	    WeSchemeIntentBus.notify("before-clone", this);
	    jQuery.post("/cloneProject", data, callback, type);
	}
    };



    WeSchemeEditor.prototype.load = function() {
	if (this.pid) {
	    var that = this;
	    var data = { pid: this.pid };
	    var type = "xml";
	    var callback = function(data) {
		var dom = jQuery(data);
		that.filenameEntry.attr("value", dom.find("title").text());
		that.defn.setCode(dom.find("source").text());
		that._setIsPublished(dom.find("published").text() == "true" ? true : false);

		WeSchemeIntentBus.notify("after-load", that);
	    };
	    WeSchemeIntentBus.notify("before-load", this);
	    jQuery.get("/loadProject", data, callback, type);
	}
    };
	


    WeSchemeEditor.prototype.publish = function() {
	if (this.pid) {
	    var that = this;
	    var data = { pid: this.pid };
	    var type = "xml";
	    var callback = function(data) {
		var dom = jQuery(data);
		that._setIsPublished(dom.find("published").text() == "true" ? true : false);
		WeSchemeIntentBus.notify("after-publish", that);
	    };
	    WeSchemeIntentBus.notify("before-publish", this);
	    jQuery.post("/publishProject", data, callback, type);
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
	if (this.isPublished) {
	    this.saveOrCloneButton.attr("value", "Clone");
	    this.publishButton.attr("disabled", "true");
	} else {
	    this.saveOrCloneButton.attr("value", "Save");
	    this.publishButton.removeAttr("disabled");
	}
    }


    WeSchemeEditor.prototype.toString = function() { return "WeSchemeEditor()"; };

})();