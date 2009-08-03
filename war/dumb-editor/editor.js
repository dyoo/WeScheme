var WeSchemeEditor;

(function() {


    WeSchemeEditor = function(attrs) {
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
			      attr("value", "Unknown"));
	this.filenameDiv.append(this.filenameEntry);

	// pid: (or false number)
	this.pid = false;
	if (this.pidDiv.text() != "Unknown") {
	    this.pid = parseInt(this.pidDiv.text());
	}
    };

    WeSchemeEditor.prototype.save = function() {
	var that = this;
	if (this.pid == false) {
	    var data = { title: this.filenameEntry.attr("value"),
			 code: this.defn.getCode()};
	    var type = "text";
	    var callback = function(data) {
		// The data contains the pid of the saved program.
		that.pid = parseInt(data);
		that.notifyOnStatusBar("Program " + that.pid + " saved")
		that.pidDiv.text(data);
		that.filenameEntry.value = data;
	    };
	    jQuery.post("/saveProject", data, callback, type);
	} else {
	    var data = { pid: this.pid,
			 title: this.filenameEntry.attr("value"),
			 code: this.defn.getCode()};
	    var type = "text";
	    var callback = function(data) {
		that.notifyOnStatusBar("Program " + that.pid + " saved")
		that.pidDiv.text(data);
		that.filenameEntry.value = data;
	    };
	    jQuery.post("/saveProject", data, callback, type);
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
    };



    WeSchemeEditor.prototype.notifyOnStatusBar = function(msg) {
	var that = this;
	//this.statusbar.show();
	this.statusbar.text(msg);
	this.statusbar.fadeIn("slow",
			      function() { that.statusbar.fadeOut(5000); });
    };


})();