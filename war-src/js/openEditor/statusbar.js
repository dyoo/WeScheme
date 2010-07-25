// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }


goog.provide('plt.wescheme.WeSchemeStatusBar');


goog.require('plt.wescheme.WeSchemeIntentBus');



var WeSchemeStatusBar;

plt.wescheme.WeSchemeStatusBar = WeSchemeStatusBar = (function() {
    function WeSchemeStatusBar(statusbar) {
	this.statusbar = statusbar;

	this.delay_till_fade = 5000; // five seconds until we fade the text.
	this.fadeCallbackId = undefined;

	var that = this;
	var handleNotifyIntent = function(action, category, data) {
	    if (action == 'notify' && 
		category == 'after-save' && 
		data instanceof WeSchemeEditor) {
		that.notify("Program " + data.pid + " saved");	    
	    } else if (action == 'notify' && 
		       category == 'after-clone' && 
		       data instanceof WeSchemeEditor) {
		that.notify("Program " + data.pid + " cloned");	    
	    } else if (action == 'notify' && 
		       category == 'after-load' && 
		       data instanceof WeSchemeEditor) {
		that.notify("Program " + data.pid + " loaded");
	    } else if (action == 'notify' && 
		       category == 'after-publish' && 
		       data instanceof WeSchemeEditor) {
		that.notify("Program " + data.pid + " published");	    
	    } else if (action == 'notify' && 
		       category == 'after-run' && 
		       data instanceof WeSchemeEditor) {
		that.notify("Executed definitions");	    
	    } else if (action == 'notify' &&
		       category == 'exception') {
		var component = data[0];
		if (component instanceof WeSchemeEditor) {
		    var operation = data[1];
		    var statustext = data[2];
		    var exceptionObj = data[3];
		    that.notify("Exception occured in operation " + operation);
		}
	    }
	};

	plt.wescheme.WeSchemeIntentBus.addNotifyListener(handleNotifyIntent);
    }



    WeSchemeStatusBar.prototype.notify = function(msg) {
	var that = this;
	
	if (this.fadeCallbackId) {
	    clearTimeout(this.fadeCallbackId);
	    this.fadeCallbackId = undefined;
	}

	this.statusbar.text(msg);
	this.statusbar.fadeIn("fast");

	this.fadeCallbackId = setTimeout(
	    function() {
		that.statusbar.fadeOut("fast");
	    }, 
	    this.delay_till_fade);
	// FIXME: make transparent after a while.
	// FIXME: use flapjax to guarantee that a message shows up for some period of time.
	// FIXME: allow the user to see all the statusbar messages sent to us.
    };


    return WeSchemeStatusBar;
})();