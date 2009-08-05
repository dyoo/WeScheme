var WeSchemeEditor;

(function() {


    WeSchemeEditor = function(attrs) {
	var that = this;
	// defn and statusbar are assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer

	this.interactions = new WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();


	this.statusbar = attrs.statusbar; // JQuery
	this.pidDiv = attrs.pidDiv; // JQuery
	this.filenameDiv = attrs.filenameDiv; // JQuery
	this.filenameEntry = (jQuery("<input/>").
			      attr("type", "text").
			      attr("value", "Unknown").
			      change(function() { that.filenameEntry.addClass("dirty")}));;
	this.filenameDiv.append(this.filenameEntry);

	// pid: (or false number)
	this.pid = false;
	if (this.pidDiv.text() != "Unknown") {
	    this.pid = parseInt(this.pidDiv.text());
	}

	this.defn.addChangeListener(function() { this.addClass("dirty"); });
    };


    // afterSave: -> void
    // Clears out the dirty tag off of the editable things.
    // 
    WeSchemeEditor.prototype.afterSave = function() {
	this.filenameEntry.removeClass("dirty");
	this.defn.removeClass("dirty");
    };


    WeSchemeEditor.prototype.save = function() {
	var that = this;

	function saveProjectCallback(data) {
	    // The data contains the pid of the saved program.
	    that.pid = parseInt(data);
	    that.notifyOnStatusBar("Program " + that.pid + " saved")
	    that.pidDiv.text(data);
	    that.filenameEntry.value = data;
	    that.afterSave();
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


    WeSchemeEditor.prototype.load = function() {
	if (this.pid) {
	    var that = this;
	    var data = { pid: this.pid };
	    var type = "xml";
	    var callback = function(data) {
		var dom = jQuery(data);
		that.filenameEntry.attr("value", dom.find("title").text());
		that.defn.setCode(dom.find("source").text());
		that.notifyOnStatusBar("Program " + that.pid + " loaded")
	    };
	    jQuery.get("/loadProject", data, callback, type);
	}
    };
	

    WeSchemeEditor.prototype.run = function() {
	this.interactions.reset();
	this.interactions.runCode(this.defn.getCode());
	this.notifyOnStatusBar("Executed code");
    };



    WeSchemeEditor.prototype.notifyOnStatusBar = function(msg) {
	var that = this;
	//this.statusbar.show();
	this.statusbar.text(msg);
	this.statusbar.fadeIn("slow",
			      function() { that.statusbar.fadeOut("slow"); });
    };


})();