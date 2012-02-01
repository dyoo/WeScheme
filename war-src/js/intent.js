goog.provide('plt.wescheme.WeSchemeIntentBus');


if (typeof (plt) === 'undefined') {
    this.plt = {};
}
if (typeof (plt.wescheme) === 'undefined') {
    this.plt.wescheme = {};
}



var WeSchemeIntentBus = (function() {

    // FIXME: figure out what other intentish stuff would be useful for WeScheme.


    function WeSchemeIntentBus() {
	this.listeners = [];
    }


    WeSchemeIntentBus.prototype.addNotifyListener = function(l) {
	this.listeners.push(l);
    };


    WeSchemeIntentBus.prototype.removeNotifyListener = function(l) {
	var i = this.listeners.indexOf(l);
	if (i != -1) {
	    this.listeners.splice(i, 1);
	}
    };


    WeSchemeIntentBus.prototype.notify = function(category, data) {
	for(var i = 0; i < this.listeners.length; i++) {
	    try {
		this.listeners[i].apply(this, ["notify", category, data]);
	    } catch (e) {
                // Ignore quietly.
	    }
	}
    };



    return new WeSchemeIntentBus();
})();

plt.wescheme.WeSchemeIntentBus = WeSchemeIntentBus;