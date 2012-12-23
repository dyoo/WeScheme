goog.provide("plt.wescheme.ProgramDigest");

goog.require("plt.wescheme.SharedAs");



// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }

// plt.wescheme.ProgramDigest = {};





// Abstraction around ProgramDigest XML objects


(function() {

    plt.wescheme.ProgramDigest = function(dom) {
	this.dom = dom;
    };


    plt.wescheme.ProgramDigest.prototype.getTitle = function() {
	return this.dom.children("title").text();
    };


    plt.wescheme.ProgramDigest.prototype.getId = function() {
	return this.dom.children("id").text();
    };


    plt.wescheme.ProgramDigest.prototype.getModified = function() {
	return this.dom.children("modified").text();
    };


    plt.wescheme.ProgramDigest.prototype.hasSharingUrls = function() {
	return (this.getSharedAsEntries().length > 0);
    };


    // getSharedAsEntries: -> [{publicId: string, title: string, modified: string} ...]
    plt.wescheme.ProgramDigest.prototype.getSharedAsEntries = function() {
	return plt.wescheme.SharedAs.fromDom(this.dom.children('sharedAs')).getEntries();
    };


    plt.wescheme.ProgramDigest.prototype.isPublished = function() {
	return this.dom.children("published").text() == 'true'
    };


}());
