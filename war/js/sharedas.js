goog.provide("plt.wescheme.SharedAs");

// Wrapper around jquery object 

plt.wescheme.SharedAs = function(dom) {
    this.dom = dom;
};


plt.wescheme.SharedAs.prototype.getEntries = function() {
    var results = [];
    this.dom.children("Entry").each(function(i) {
	results.push({ publicId: this.children("publicId").text(),
		       title: this.children("title").text(),
		       modified: this.children("modified").text() });
    });
    return results;
};