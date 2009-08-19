var WeSchemeTextContainer;

// TextContainers should support the following:
//
// onchange attribute: called whenever the text changes, with this bound to the container.
// 
// getCode: void -> string
// setCode: string -> void

(function() {

    // container: textarea
    WeSchemeTextContainer = function(container) {
	var that = this;
	this.container = new FlapjaxValueHandler(container);
	this.changeListeners = [];

	this.container.behavior.changes().mapE(function(v) {
	    that._notifyListeners();
	});
    };

    WeSchemeTextContainer.prototype._notifyListeners = function() {
	for(var i = 0; i < this.changeListeners.length; i++) {
	    this.changeListeners[i].apply(this, []);
	}
    };


    // Returns a behavior of the source code
    WeSchemeTextContainer.prototype.getSourceB = function() {
	return this.container.behavior;
    };


    WeSchemeTextContainer.prototype.getCode = function() {
	var result = this.container.attr("value");
	return result;
    };

    WeSchemeTextContainer.prototype.setCode = function(code) {
	this.container.attr("value", code);
    };

    WeSchemeTextContainer.prototype.addChangeListener = function(l) {
	this.changeListeners.push(l);
    };
    
    WeSchemeTextContainer.prototype.addClass = function(aClass) {
	this.container.addClass(aClass);
    };

    WeSchemeTextContainer.prototype.removeClass = function(aClass) {
	this.container.removeClass(aClass);
    };

    WeSchemeTextContainer.prototype.setReadOnly = function(b) {
	if (b) {
	    this.container.attr("readonly", "true");
	} else {
	    this.container.removeAttr("readonly");
	}
    };

})();