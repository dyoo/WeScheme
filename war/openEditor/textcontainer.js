var WeSchemeTextContainer;

// TextContainers should support the following:
//
// onchange attribute: called whenever the text changes, with this bound to the container.
// 



(function() {

    // container: DIV
    // Assumption the div contains a "defn" element.
    WeSchemeTextContainer = function(aDiv) {
	var that = this;
	this.div = aDiv;
	this.mode = 'textarea';
	this.changeListeners = [];


	this.container = new FlapjaxValueHandler(
	    jQuery(aDiv).find("#defn").get(0));
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


    // getCode: void -> string
    WeSchemeTextContainer.prototype.getCode = function() {
	var result = this.container.attr("value");
	return result;
    };

    // setCode: string -> void
    WeSchemeTextContainer.prototype.setCode = function(code) {
	this.container.attr("value", code);
    };

    // addChangeListener: (-> void) -> void
    WeSchemeTextContainer.prototype.addChangeListener = function(l) {
	this.changeListeners.push(l);
    };
 
    // addClass: string -> void
    WeSchemeTextContainer.prototype.addClass = function(aClass) {
	this.container.addClass(aClass);
    };

    // removeClass: string -> void
    WeSchemeTextContainer.prototype.removeClass = function(aClass) {
	this.container.removeClass(aClass);
    };

    // setReadOnly: boolean -> void
    WeSchemeTextContainer.prototype.setReadOnly = function(b) {
	if (b) {
	    this.container.attr("readonly", "true");
	} else {
	    this.container.removeAttr("readonly");
	}
    };

})();