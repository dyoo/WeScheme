var WeSchemeTextContainer;

// TextContainers should support the following:
//
// onchange attribute: called whenever the text changes, with this bound to the container.
// 



(function() {

    // container: DIV
    // Assumption of the textarea implementation:
    // The div contains a "defn" element.
    WeSchemeTextContainer = function(aDiv) {
	var that = this;
	this.div = aDiv;
	this.mode = 'textarea';
	this.impl = new TextareaImplementation(
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
	return this.impl.getSourceB();
    };


    // getCode: void -> string
    WeSchemeTextContainer.prototype.getCode = function() {
	return this.impl.getCode();
    };


    // setCode: string -> void
    WeSchemeTextContainer.prototype.setCode = function(code) {
	return this.impl.setCode(code);
    };


    //////////////////////////////////////////////////////////////////////

    function TextareaImplementation(rawContainer) {
	this.container = new FlapjaxValueHandler(rawContainer);
    }


    // Returns a behavior of the source code
    TextareaImplementation.prototype.getSourceB = function() {
	return this.container.behavior;
    };

    // getCode: void -> string
    TextareaImplementation.prototype.getCode = function() {
	var result = this.container.attr("value");
	return result;
    };

    // setCode: string -> void
    TextareaImplementation.prototype.setCode = function(code) {
	this.container.attr("value", code);
    };









})();