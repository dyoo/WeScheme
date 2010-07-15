goog.provide("plt.wescheme.helpers");

// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }

// plt.wescheme.helpers = {};


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
	span.className = "socialBookmarks";
	var addBookmarklet = function(name, imgSrc, url) {
	    var a = document.createElement("a");
	    var img = document.createElement("img");
	    a.className = "socialBookmarklet";
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
		       "http://digg.com/submit?" +
		       encodeKeyPairs({url: url,
				       title: title,
				       bodytext: title,
				       media: "news"}));

	addBookmarklet("Reddit",
		       "/images/icon_reddit.gif",
		       "http://www.reddit.com/submit?" +
		       encodeKeyPairs({url: url,
				       title: title}));
	addBookmarklet("Twitter",
		       "/images/icon_twitter.gif",
		       "http://twitter.com/home" + "?" + 
		       encodeKeyPairs({status: url}));
	
	// http://delicious.com/help/savebuttons
	addBookmarklet("Del.icio.us",
		       "/images/icon_delicious.gif",
		       "http://del.icio.us/post?" +
		       encodeKeyPairs({url: url,
				       title: title}));

	// http://www.facebook.com/facebook-widgets/share.php
	addBookmarklet("Facebook",
		       "/images/icon_facebook.gif",
		       "http://www.facebook.com/sharer.php" + "?" + 
		       encodeKeyPairs({u: url,
				       t: title}));
	return span;
    };


    var zpad = function(s) {
	if ((s+'').length == 1) {
	    return "0" + s;
	} else {
	    return s;
	}
    };

    // prettyPrintDate: string -> string
    plt.wescheme.helpers.prettyPrintDate = function(modified) {
	var modifiedDate = new Date();
	modifiedDate.setTime(parseInt(modified));


	var day = modifiedDate.getUTCDate();
	var month = modifiedDate.getUTCMonth() + 1;
	var year = modifiedDate.getFullYear();
	var time = (((modifiedDate.getHours() % 12) == 0 ?
		     12 :
		     (modifiedDate.getHours() % 12))
		    + ":" 
		    + zpad(modifiedDate.getMinutes())
		    + (modifiedDate.getHours() >= 12 ? "pm" : "am" ));
	return day + "/" + month + "/" + year + ", " + time;
    };




})();