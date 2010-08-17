goog.provide('plt.wescheme.topKeymap');


// FIXME: depends on global variable myEditor at toplevel.


// The following is a global keyhandler that's intended to be attached
// to the document body, so it should see all key events.
plt.wescheme.topKeymap = function(e) {
    var F5_KEYCODE = 116
    var BACKSPACE_KEYCODE = 8;
 
    if (e.keyCode === F5_KEYCODE) {
	myEditor.run();
	e.stopPropagation();
	e.preventDefault();
	return false;
    }

    // Special case: we want to intercept all backspaces that hit the
    // document body, and prevent us from going back in history.
    if (e.target === document.body) {
	if (e.keyCode === BACKSPACE_KEYCODE) {
	    e.stopPropagation();
	    e.preventDefault();
	    return false;
	}
    }

    return true;
}



