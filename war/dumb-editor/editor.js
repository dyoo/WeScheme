var WeSchemeEditor;

(function() {
    var ajaxUrl = "/ajax";


    WeSchemeEditor = function(attrs) {
	// defn, repl, and statusbar are assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;  // TextAreaContainer
	this.repl = attrs.repl;  // TextAreaContainer
	this.statusbar = attrs.statusbar; // JQuery

	this.pid = false;
    };

    WeSchemeEditor.prototype.save = function() {
	var that = this;

	if (this.pid == false) {
	    var data = { action: "saveNew",
			 code: this.defn.getCode()};
	    var type = "text";
	    var callback = function(data) {
		// The data contains the pid of the saved program.
		that.pid = data;
		that.notifyOnStatusBar("Program " + that.pid + " saved")
	    };
	    jQuery.post(ajaxUrl, data, callback, type);
	} else {
	    var data = { action: "save",
			 code: this.defn.getCode(),
	                 pid: this.pid };
	    var type = "text";
	    var callback = function(data) {
		that.notifyOnStatusBar("Program " + that.pid + " saved")
	    };
	    jQuery.post(ajaxUrl, data, callback, type);
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
	    that.notifyOnStatusBar("Program " + that.pid + " loaded")
	};
	jQuery.post(ajaxUrl, data, callback, type);
    };
	

    WeSchemeEditor.prototype.run = function() {
    };



    WeSchemeEditor.prototype.notifyOnStatusBar = function(msg) {
	var that = this;
	this.statusbar.show();
	this.statusbar.text(msg);
	this.statusbar.fadeIn("slow",
			      function() { that.statusbar.fadeOut(5000); });
    }




})();