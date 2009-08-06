var WeSchemeStatusBar;


WeSchemeStatusBar = (function() {
    function WeSchemeStatusBar(statusbar) {
	this.statusbar = statusbar;

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
	    }
	};


	WeSchemeIntentBus.addNotifyListener(handleNotifyIntent);
    }



    WeSchemeStatusBar.prototype.notify = function(msg) {
	var that = this;
	this.statusbar.text(msg);
	this.statusbar.fadeIn("slow",
			      function() { that.statusbar.fadeOut("slow"); });
    };


    return WeSchemeStatusBar;
})();