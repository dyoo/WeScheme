goog.provide("plt.wescheme.SharedAs");


plt.wescheme.SharedAs = function(json) {
    this.json = json;
};


plt.wescheme.SharedAs.prototype.getEntries = function() {
    return this.json;
};
