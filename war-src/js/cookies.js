goog.provide("plt.wescheme.cookies");

(function() {
    // Gotten from http://www.quirksmode.org/js/cookies.html and
    // http://www.w3schools.com/JS/js_cookies.asp, with additional
    // extensions to support rfc2965 a little bit better.




    // createCookie: string string number -> void
    var createCookie = function(name,value,days) {
	if (days) {
	    var date = new Date();
	    date.setTime(date.getTime()+(days*24*60*60*1000));
	    var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
    }


    // TODO: fix readCookie to do proper parsing.  What's being done here is
    // not quite safe.
    //
    // readCookie: string -> string
    var readCookie = function(c_name) {
	var c_start = -1;
	var c_end = -1;
	if (document.cookie.length>0) {
	    c_start=document.cookie.indexOf(c_name + "=");
	    if (c_start!=-1) {
		c_start=c_start + c_name.length+1;
		// According to http://tools.ietf.org/html/rfc2965,
		// the cookie value may be a quoted string.
		if (document.cookie.charAt(c_start) === '"') {
		    c_start++;
		    c_end = document.cookie.indexOf('"', c_start);
		} else {
		    c_end=document.cookie.indexOf(";",c_start);
		}
		if (c_end==-1){ c_end=document.cookie.length; }
		return document.cookie.substring(c_start,c_end);
	    }
	}
	return "";
    };
    

    // eraseCookie: string -> void
    var eraseCookie = function (name) {
	createCookie(name,"",-1);
    }



    //////////////////////////////////////////////////////////////////////
    plt.wescheme.cookies.createCookie = createCookie;
    plt.wescheme.cookies.readCookie = readCookie;
    plt.wescheme.cookies.eraseCookie = eraseCookie;
}());