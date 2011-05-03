goog.provide("plt.wescheme.Program");


goog.require("plt.wescheme.SharedAs");
goog.require("plt.wescheme.WeSchemeProperties");



// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }
// plt.wescheme.Program = {};




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
	return (this.getSharedAsEntries().length > 0);
	//	return this.dom.find('sharedAs > Entry').length > 0;
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

    // isSourcePublic: -> boolean
    plt.wescheme.Program.prototype.isSourcePublic = function() {
	return this.dom.find("isSourcePublic").text() == 'true';
    };


    // getObjectCode: -> string
    plt.wescheme.Program.prototype.getObjectCode = function() {
	return this.dom.find("ObjectCode obj").text();
    };


    // isAndroidPackageBuilt: -> boolean
    plt.wescheme.Program.prototype.isAndroidPackageBuilt = function() {
	return this.dom.find("ObjectCode isAndroidPackageBuilt").text() === "true";
    };

    // getAndroidPackageUrl: -> string
    plt.wescheme.Program.prototype.getAndroidPackageUrl = function() {
        return (plt.wescheme.WeSchemeProperties.wescheme_server_base + 
                "/android?publicId=" + encodeURIComponent(this.getPublicId()));
    };


    // getPublicEditingUrl: -> string
    // Returns a url that, when visited, opens up the editor.
    plt.wescheme.Program.prototype.getPublicEditingUrl = function() {
        return (plt.wescheme.WeSchemeProperties.wescheme_server_base + 
                "/openEditor?publicId="+ encodeURIComponent(this.getPublicId()));

    };



}());