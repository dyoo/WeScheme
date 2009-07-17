var WeSchemeTextContainer;

(function() {
    // container: textarea
    WeSchemeTextContainer = function(container) {
	this.container = container;
    };

    WeSchemeTextContainer.prototype.getCode = function() {
	var result = this.container.value;
	return result;
    };

    WeSchemeTextContainer.prototype.setCode = function(code) {
	this.container.value = code;
    }
})();