goog.provide('plt.wescheme.topKeymap');


// FIXME: depends on global variable myEditor at toplevel.


plt.wescheme.topKeymap = function(e) {
    var F5_KEYCODE = 116
    var BACKSPACE_KEYCODE = 8;
    
    // FIXME: I don't understand the logic behind this.
    if (e.keyCode === F5_KEYCODE) {
	myEditor.run();
	e.preventDefault();
    } else if (event.keyCode === BACKSPACE_KEYCODE) {
	e.stopPropagation();
    }
}