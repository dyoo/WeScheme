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
	this.container = jQuery(container);
	this.changeListeners = [];

	this.container.change(function() {
	    that._notifyListeners();
	});
	
	// Polling: checks for content change.
	// FIXME: figure out how to do this without polling.
	(function() {
	    var oldContent = that.container.attr("value");
	    setInterval(function() {
		var newContent = that.container.attr("value");
		if (newContent != oldContent) {
		    oldContent = newContent;
		    setTimeout(function() {that._notifyListeners()}, 0);
		}
	    },
			500);
	})();
	
    };

    WeSchemeTextContainer.prototype._notifyListeners = function() {
	for(var i = 0; i < this.changeListeners.length; i++) {
	    this.changeListeners[i].apply(this, []);
	}
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