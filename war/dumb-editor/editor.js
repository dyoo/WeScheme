var WeSchemeEditor;

(function() {
    var ajaxUrl = "/ajax";


    WeSchemeEditor = function(attrs) {
	// defn, repl, and statusbar are assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;
	this.repl = attrs.repl;
	this.statusbar = attrs.statusbar;

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
		console.log("hurrah, we were able to save.");
		console.log("data is " + data);
	    };
	    jQuery.post(ajaxUrl, data, callback, type);
	} else {
	    var data = { action: "save",
			 code: this.defn.getCode(),
	                 pid: this.pid };
	    var type = "text";
	    var callback = function(data) {
		console.log("Saving as " + data);
	    };
	    jQuery.post(ajaxUrl, data, callback, type);
	}
    };



    WeSchemeEditor.prototype.load = function() {
	var data = { action: "load",
		     code: this.defn.getCode(),
		     pid: this.pid };
	var type = "text";
	var callback = function(data) {
	    this.defn.setCode(data);
	};
	jQuery.post(ajaxUrl, data, callback, type);
    };
	
    WeSchemeEditor.prototype.run = function() {
    };



})();