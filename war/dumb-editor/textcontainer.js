var WeSchemeTextContainer;

(function() {
    // container: jquery
    WeSchemeTextContainer = function(container) {
	this.container = container;
    };

    WeSchemeTextContainer.prototype.getCode = function() {
	var result = this.container.get(0).value;
	console.log(result);
	return result;
    };
})();