goog.provide("plt.wescheme.ProgramDigest");

// Abstraction around ProgramDigest XML objects


function() {

    plt.wescheme.ProgramDigest = function(dom) {
	this.dom = dom;
    };


    plt.wescheme.ProgramDigest.prototype.hasSharingUrls = function() {
	return this.dom.find('sharedAs Entry').length > 0;
    };


    plt.wescheme.ProgramDigest.prototype.isPublished = function() {
	return this.dom.children("published").text() == 'true'
    };


}();