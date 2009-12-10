goog.provide("plt.wescheme.helpers");


(function() {
    // makeShareUrl: string -> string
    // Produces the sharing url.
    plt.wescheme.helpers.makeShareUrl = function(publicId) {
	var a = document.createElement("a");
	a.href = "/view?publicId=" + encodeURIComponent(publicId);
	// slightly funny, but the browser normalizes href on assignment.
	return a.href; 
    };


    // urlToAnchor: string -> anchor-element
    plt.wescheme.helpers.urlToAnchor = function(url) {
	var a = document.createElement("a");
	a.appendChild(document.createTextNode(url));
	a.href = url;
	return a;
    };



    // generateSocialBookmarks: string string -> span-element
    // Makes a social bookmarks span, given a title and a URL to link to.
    plt.wescheme.helpers.generateSocialBookmarks = function(title, url) {

	var span = document.createElement("span");

	var addBookmarklet = function(name, imgSrc, url) {
	    var a = document.createElement("a");
	    var img = document.createElement("img");
	    a.title = "Post to " + name;
	    img.src = imgSrc;
	    img.alt = "Post to " + name;
	    a.appendChild(img);
	    a.href = url;
	    span.appendChild(a);
	};

	var encodeKeyPairs = function(attrs) {
	    var key, buffer = [];
	    for (key in attrs) {
		if (attrs.hasOwnProperty(key)) {
		    buffer.push(key + "=" + encodeURIComponent(attrs[key]));
		}
	    }
	    return buffer.join("&");
	}


	addBookmarklet("email",
		       "/images/icon_email.gif",
		       "mailto:" + "?" + encodeKeyPairs({subject: title,
							 body: url}));
	addBookmarklet("Digg",
		       "/images/icon_digg.gif",
		       "mailto:" + "?" + encodeKeyPairs({subject: title,
							 body: url}));
	addBookmarklet("Reddit",
		       "/images/icon_reddit.gif",
		       "mailto:" + "?" + encodeKeyPairs({subject: title,
							 body: url}));
	addBookmarklet("Twitter",
		       "/images/icon_twitter.gif",
		       "mailto:" + "?" + encodeKeyPairs({subject: title,
							 body: url}));
	addBookmarklet("Del.icio.us",
		       "/images/icon_delicious.gif",
		       "mailto:" + "?" + encodeKeyPairs({subject: title,
							 body: url}));
	addBookmarklet("Facebook",
		       "/images/icon_facebook.gif",
		       "mailto:" + "?" + encodeKeyPairs({subject: title,
							 body: url}));
	return span;
    };

})();