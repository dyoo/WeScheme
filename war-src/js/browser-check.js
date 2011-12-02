goog.provide("plt.wescheme.browserCheck");

// Implements a browser-checking module that's pervasive across WeScheme.
//
// Here are the levels of support we're providing.
//
//     * FULLY: we support this platform and anything that breaks is a bug.
//     * PARTIALLY: things might break, but for the most part, things should work.
//     * UNSUPPORTED: we really expect things to break.  We're not going to fix it.
//     * UNKNOWN: we have no clue if things will break.
//
//
// If you're FULLY, then everything runs smoothly and no dialog comes up.
//
// If PARTIALLY, we raise a dialog only once that says that things might break.
// 
// If UNSUPPORTED, we raise a dialog all the time that says that things will break.
//
// If UNKNOWN, we raise a dialog all the time that says that things
// might break, but that we don't know.


goog.require('plt.wescheme.BrowserDetect');
goog.require('plt.wescheme.cookies');

(function() {
    var BrowserDetect = plt.wescheme.BrowserDetect;
    var Cookies = plt.wescheme.cookies;

    var fullySupportedVersions = [ {browser: 'Safari', minimumVersion: '5'},
				   {browser: 'Chrome', minimumVersion: '5'},
				   {browser: 'Firefox', minimumVersion: '3.5.1'},
                                   {browser: 'Explorer', minimumVersion: '7'}];

    var knownBadBrowsers = [ {browser: 'Explorer', lessThan: '7'},
			     {browser: 'Safari', lessThan: '4'},
			     {browser: 'Firefox', lessThan: '3.5.1'} ];



    //////////////////////////////////////////////////////////////////////

    // browserCheck: -> void
    // Check to see if the browser is supported or not.
    // If not, bring up a warning dialog saying that we haven't tested
    // on the other platforms.
    plt.wescheme.browserCheck = function() {
	var browser = BrowserDetect.browser;
	var versionString = BrowserDetect.versionString;
	
	if (isFullySupported(browser, versionString)) {
	    return;
	} else if (isUnsupported(browser, versionString)) {
	    warnBrowserUnsupported();
	} else if (isPartiallySupported(browser, versionString)) {
	    if (browserAlreadyChecked()) {
		return;
	    }
	    var minimumVersion;
	    for (var i = 0 ; i < fullySupportedVersions; i++) {
		if (browser === fullySupportedVersions[i].browser) {
		    minimumVersion  = fullySupportedVersions[i].minimumVersion;
		}
	    }
	    markBrowserChecked();
	    warnBrowserPartiallySupported(browser, minimumVersion);
	} else {
	    // Warn: using browser that we haven't tested against.
	    warnBrowserMightNotWork();
	}
    };



    //////////////////////////////////////////////////////////////////////

    
    // // isFullySupported: -> boolean
    // // Returns true if the currently running browser is fully supported.
    var isFullySupported = function(browser, versionString) {
    	for (var i = 0; i < fullySupportedVersions.length; i++) {
    	    if (browser === fullySupportedVersions[i].browser) {
    		if (versionGreaterThanOrEqual(versionString,
					      fullySupportedVersions[i].minimumVersion)) {
    		    return true;
    		}
    	    }
    	}
    	return false;
    };
    
    // isUnsupported: -> boolean
    var isUnsupported = function(browser, versionString) {
    	for (var i = 0; i < knownBadBrowsers.length; i++) {
    	    if (browser === knownBadBrowsers[i].browser) {
    		if (versionLessThan(versionString,
				    knownBadBrowsers[i].lessThan)) {
    		    return true;
    		}
    	    }
    	}
    	return false;
    };

    // isPartiallySupported: -> boolean
    var isPartiallySupported = function(browser, versionString) {
	if (isUnsupported(browser, versionString)) { return false; }
	if (isFullySupported(browser, versionString)) { return false; }
    	for (var i = 0; i < fullySupportedVersions.length; i++) {
    	    if (browser === fullySupportedVersions[i].browser) {
		return true;
	    }
	}
	return false;
    };





    // Version comparison of strings.  Lexicographic comparison.
    var versionGreaterThanOrEqual = function(v1, v2) {
	var l1 = v1.split('.');
	var l2 = v2.split('.');
	var i = 0;
	while (true) {
	    if (i < l1.length && i < l2.length) {
		if (parseFloat(l1[i]) > parseFloat(l2[i])) {
		    return true;
		} if (parseFloat(l1[i]) < parseFloat(l2[i])) {
		    return false;
		} else {
		    i++;
		    continue;
		}		
	    } else if (i >= l1.length && i >= l2.length) {
		return true;
	    } else if (i >= l1.length) {
		return false;
	    } else if (i >= l2.length) {
		return true;
	    }
	}
    };

    var versionLessThan = function(v1, v2) {
	var l1 = v1.split('.');
	var l2 = v2.split('.');
	var i = 0;
	while (true) {
	    if (i < l1.length && i < l2.length) {
		if (parseFloat(l1[i]) < parseFloat(l2[i])) {
		    return true;
		} if (parseFloat(l1[i]) > parseFloat(l2[i])) {
		    return false;
		} else {
		    i++;
		    continue;
		}		
	    } else if (i >= l1.length && i >= l2.length) {
		return false;
	    } else if (i >= l1.length) {
		return true;
	    } else if (i >= l2.length) {
		return false;
	    }
	}
    };








    var COOKIE_NAME = 'weschemeBrowserVersionCheck';
    var COOKIE_VALUE = 'checked';
    var browserAlreadyChecked = function() {
	return Cookies.readCookie(COOKIE_NAME) === COOKIE_VALUE;
    };

    var markBrowserChecked = function() {
	Cookies.createCookie(COOKIE_NAME, COOKIE_VALUE);
    };



    var warnBrowserUnsupported = function() {
	var dialogWindow = (jQuery("<div/>"));
	dialogWindow.append(
	    "WeScheme detects that you're using " + BrowserDetect.browser + " " + 
		BrowserDetect.version + 
		" but WeScheme has only been tested on modern versions of " +
		"<a href='http://www.google.com/chrome'>Chrome</a>,  "+
		"<a href='http://www.getfirefox.com'>Firefox</a>, or "+
		"<a href='http://www.apple.com/safari'>Safari</a>."+
		"<hr/>  Unfortunately, WeScheme is known to break under your "+
		"current browser.  Please update your browser.");
	dialogWindow.dialog({'title': 'Browser version check',
			     'bgiframe' : true,
			     'modal' : true,
			     'overlay' : {'opacity': 0.5,
					  'background': 'black'}
			    });
	dialogWindow.dialog("open");
    };


    
    // warnBrowserPartiallySupported: string number -> void
    // Bring up a modal dialog that warns the user if the browser has 
    var warnBrowserPartiallySupported = function(browser, minimumVersion) {
	var dialogWindow = (jQuery("<div/>"));
	dialogWindow.append(
	    "<p>WeScheme detects that you're using " + BrowserDetect.browser + " " + 
		BrowserDetect.version + ", but WeScheme needs " + browser + " >= " +
		minimumVersion + ".<hr/>  WeScheme may still continue to work on your browser,"+
		" but we have not tested it. We recommend installing "+
		"<a href='http://www.google.com/chrome'>Chrome</a>,  "+
		"<a href='http://www.getfirefox.com'>Firefox</a>, or "+
		"<a href='http://www.apple.com/safari'>Safari</a>."
	);
	dialogWindow.dialog({'title': 'Browser version check',
			     'bgiframe' : true,
			     'modal' : true,
			     'overlay' : {'opacity': 0.5,
					  'background': 'black'}
			    });
	dialogWindow.dialog("open");
    };


    var warnBrowserMightNotWork = function() {
	var dialogWindow = (jQuery("<div/>"));
	dialogWindow.append(
	    "WeScheme detects that you're using " + BrowserDetect.browser + " " + 
		BrowserDetect.version + 
		" but WeScheme has only been tested on modern versions of " +
		"<a href='http://www.google.com/chrome'>Chrome</a>,  "+
		"<a href='http://www.getfirefox.com'>Firefox</a>, or "+
		"<a href='http://www.apple.com/safari'>Safari</a>." +
		"<hr/>  WeScheme may still continue "+
		"to work on your browser, but we have not tested it.");
	dialogWindow.dialog({'title': 'Browser version check',
			     'bgiframe' : true,
			     'modal' : true,
			     'overlay' : {'opacity': 0.5,
					  'background': 'black'}
			    });
	dialogWindow.dialog("open");
    };

    
    // Debugging hooks.  These are not going to be normally used, but
    // are at least accessible from a debugging console.
    BrowserDetect.debug = {};
    BrowserDetect.debug.warn1 = warnBrowserPartiallySupported;
    BrowserDetect.debug.warn2 = warnBrowserMightNotWork;
    BrowserDetect.debug.warn3 = warnBrowserUnsupported;

    BrowserDetect.debug.versionLessThan = versionLessThan;
    BrowserDetect.debug.versionGreaterThanOrEqual = versionGreaterThanOrEqual;

    BrowserDetect.debug.isFullySupported = isFullySupported;
    BrowserDetect.debug.isPartiallySupported = isPartiallySupported;
    BrowserDetect.debug.isUnsupported = isUnsupported;
})();