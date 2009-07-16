var WeSchemeEditor;

(function() {
    WeSchemeEditor = function(attrs) {
	// defn, repl, and statusbar are assumed to be Containers.
	// The only container we've got so far are TextContainers.
	this.defn = attrs.defn;
	this.repl = attrs.repl;
	this.statusbar = attrs.statusbar;
	this.name = undefined;
    };

    WeSchemeEditor.prototype.save = function() {
	// Do AJAX call
	// Fill me in
	console.log("I should save");
	console.log("I should save the code " + this.defn.getCode());
    };

    WeSchemeEditor.prototype.load = function() {
	// Do AJAX call
	// Fill me in
	console.log("I should load");
    };
	
    WeSchemeEditor.prototype.run = function() {
	console.log("I should run");
    };

    WeSchemeEditor.getCode = function() {
	return this.container.value;
    };
})();