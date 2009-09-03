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


	this.container = new FlapjaxValueHandler(
	    jQuery(aDiv).find("#defn").get(0));
    };


    WeSchemeTextContainer.prototype.changeMode = function(mode) {
	if (mode == this.mode) {
	    return;
	} else if (mode == 'bespin') {
	} else if (mode == 'textarea') {
	} else if (mode == 'domeditor') {
	    // When Brendan's editor is ready, use this...
	}
    }



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


    //////////////////////////////////////////////////////////////////////

    function TextareaImplementation(rawContainer) {
	this.container = new FlapjaxValueHandler(
	    rawContainer);
	this.container.behavior.changes().mapE(function(v) {
	    that._notifyListeners();
	});
    }








})();