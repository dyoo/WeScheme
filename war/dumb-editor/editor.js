var WeSchemeEditor;

(function() {
    var ajaxUrl = "/ajax";


    WeSchemeEditor = function(attrs) {
	// defn and statusbar are assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer

	this.interactions = new WeSchemeInteractions(attrs.interactions);
	this.interactions.reset();


	this.statusbar = attrs.statusbar; // JQuery
	this.filenameDiv = attrs.filenameDiv; // JQuery

	// pid: (or false number)
	this.pid = false;
    };

    WeSchemeEditor.prototype.save = function() {
	var that = this;

	if (this.pid == false) {
	    var data = { code: this.defn.getCode()};
	    var type = "text";
	    var callback = function(data) {
		// The data contains the pid of the saved program.
		that.pid = parseInt(data);
		that.notifyOnStatusBar("Program " + that.pid + " saved")
		that.filenameDiv.text(data);
	    };
	    jQuery.post("/saveProject", data, callback, type);
	} else {
	    console.log("saving as " + this.pid);
	    var data = { code: this.defn.getCode(),
	                 pid: this.pid };
	    var type = "text";
	    var callback = function(data) {
		that.notifyOnStatusBar("Program " + that.pid + " saved")
		that.filenameDiv.text(data);
		console.log("ok");
	    };
	    jQuery.post("/saveProject", data, callback, type);
	}
    };



    WeSchemeEditor.prototype.load = function() {
	var that = this;
	var data = { action: "load",
		     code: this.defn.getCode(),
		     pid: this.pid };
	var type = "text";
	var callback = function(data) {
	    that.defn.setCode(data);
	    that.filenameDiv.text(that.pid);
	    that.notifyOnStatusBar("Program " + that.pid + " loaded")
	};
	jQuery.post(ajaxUrl, data, callback, type);
    };
	

    WeSchemeEditor.prototype.run = function() {
	this.interactions.reset();
	this.interactions.runCode(this.defn.getCode());
    };



    WeSchemeEditor.prototype.notifyOnStatusBar = function(msg) {
	var that = this;
	//this.statusbar.show();
	this.statusbar.text(msg);
	//this.statusbar.fadeIn("slow",
	//		      function() { that.statusbar.fadeOut(5000); });
    }




})();