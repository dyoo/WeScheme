var WeSchemeTextContainer;

(function() {
    // container: textarea
    WeSchemeTextContainer = function(container) {
	this.container = container;
    };

    WeSchemeTextContainer.prototype.getCode = function() {
	return this.container.value;
    };
})();