goog.provide("plt.wescheme.helpers");



// makeShareUrl: string -> string
// Produces the sharing url.
plt.wescheme.helpers.makeShareUrl = function(publicId) {
    var a = document.createElement("a");
    a.href = "/view?publicId=" + encodeURIComponent(publicId);
    // slightly funny, but the browser normalizes href on assignment.
    return a.href; 
}


// urlToAnchor: string -> anchor-element
plt.wescheme.helpers.urlToAnchor = function(url) {
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(url));
    a.href = url;
    return a;
}