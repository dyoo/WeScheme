goog.require("plt.wescheme.SharedAs");


goog.provide("plt.wescheme.Program");



// Abstraction around Program objects.

(function() {

    plt.wescheme.Program = function(dom) {
	this.dom = dom;
    };


    // getId: -> number
    plt.wescheme.Program.prototype.getId = function() {
	return parseInt(this.dom.children("id").text());
    };

    // hasSharingUrls: -> boolean
    plt.wescheme.Program.prototype.hasSharingUrls = function() {
	return this.dom.find('sharedAs > Entry').length > 0;
    };

    // getSharedAsEntries: -> [{publicId: string, title: string, modified: string} ...]
    plt.wescheme.Program.prototype.getSharedAsEntries = function() {
	return new plt.wescheme.SharedAs(
	    this.dom.children('sharedAs')).getEntries();
    };


    // isPublished: -> boolean
    plt.wescheme.Program.prototype.isPublished = function() {
	return this.dom.children("published").text() == 'true';
    };

    // getTitle: -> string
    plt.wescheme.Program.prototype.getTitle = function() {
	return this.dom.children("title").text();
    };

    // getOwner: -> string
    plt.wescheme.Program.prototype.getOwner = function() {
	return this.dom.children("owner").text();
    };

    // getPublicId: -> string
    plt.wescheme.Program.prototype.getPublicId = function() {
	return this.dom.children("publicId").text();
    };


    plt.wescheme.Program.prototype.getSourceCode = function() {
	return this.dom.children("source").text();
    };

}());