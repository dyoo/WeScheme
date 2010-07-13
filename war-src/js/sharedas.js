goog.provide("plt.wescheme.SharedAs");

// Wrapper around jquery object 

plt.wescheme.SharedAs = function(dom) {
    this.dom = dom;
};


plt.wescheme.SharedAs.prototype.getEntries = function() {
    var results = [];
    this.dom.children("Entry").each(function(i) {
	results.push({ publicId: jQuery(this).children("publicId").text(),
		       title: jQuery(this).children("title").text(),
		       modified: jQuery(this).children("modified").text() });
    });
    return results;
};