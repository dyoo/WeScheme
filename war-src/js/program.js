goog.provide("plt.wescheme.Program");


goog.require("plt.wescheme.SharedAs");
goog.require("plt.wescheme.WeSchemeProperties");
goog.require("plt.wescheme.base64");


// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }
// plt.wescheme.Program = {};




// Abstraction around Program objects.

(function() {

    plt.wescheme.Program = function(json) {
	this.json = json;
    };


    // getId: -> number
    plt.wescheme.Program.prototype.getId = function() {
        return this.json.id;
    };

    // hasSharingUrls: -> boolean
    plt.wescheme.Program.prototype.hasSharingUrls = function() {
	return (this.getSharedAsEntries().length > 0);
    };

    // getSharedAsEntries: -> [{publicId: string, title: string, modified: string} ...]
    plt.wescheme.Program.prototype.getSharedAsEntries = function() {
	return new plt.wescheme.SharedAs(this.json.sharedAs);
    };


    // isPublished: -> boolean
    plt.wescheme.Program.prototype.isPublished = function() {
	return this.json.published;
    };

    // getTitle: -> string
    plt.wescheme.Program.prototype.getTitle = function() {
	return this.json.title;
    };

    // getOwner: -> string
    plt.wescheme.Program.prototype.getOwner = function() {
	return this.json.owner;
    };

    // getPublicId: -> string
    plt.wescheme.Program.prototype.getPublicId = function() {
	return this.json.publicId;
    };

    // getNotes: -> string
    plt.wescheme.Program.prototype.getNotes = function() {
	return this.json.notes;
    };

    plt.wescheme.Program.prototype.getSourceCode = function() {
        return this.json.source.src;
    };

    plt.wescheme.Program.prototype.getPermissions = function() {
        return this.json.permissions;
    };

    // getProvides: -> arrayof string
    // Returns a list of the names provided by the program.
    plt.wescheme.Program.prototype.getProvides = function() {
        return this.json.provides;
    };

    // isSourcePublic: -> boolean
    plt.wescheme.Program.prototype.isSourcePublic = function() {
        return this.json.isSourcePublic;
    };


    // getObjectCode: -> string
    plt.wescheme.Program.prototype.getObjectCode = function() {
        return this.json.object.obj;
    };


    // isAndroidPackageBuilt: -> boolean
    plt.wescheme.Program.prototype.isAndroidPackageBuilt = function() {
        return false;
    };

    // getAndroidPackageUrl: -> string
    plt.wescheme.Program.prototype.getAndroidPackageUrl = function() {
        return "";
    };

    // getPublicEditingUrl: -> string
    // Returns a url that, when visited, opens up the editor.
    plt.wescheme.Program.prototype.getPublicEditingUrl = function() {
        return (plt.wescheme.WeSchemeProperties.wescheme_server_base + 
                "/openEditor?publicId="+ encodeURIComponent(this.getPublicId()));

    };



}());
