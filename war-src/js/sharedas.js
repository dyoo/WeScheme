goog.provide("plt.wescheme.SharedAs");


plt.wescheme.SharedAs = function(entries) {
    this.entries = entries;
};


plt.wescheme.SharedAs.fromDom = function(dom) {
    var entries = [];
    jQuery(dom).children("Entry").each(
        function() {
            var publicId = jQuery(this).children("publicId").text();
            var title = jQuery(this).children("title").text();
            var modified = parseInt(jQuery(this).children("modified").text());
            entries.push({ publicId : publicId,
                           title: title,
                           modified: modified });
        });
    return new plt.wescheme.SharedAs(entries);
};

plt.wescheme.SharedAs.prototype.getEntries = function() {
    return this.entries;
};
