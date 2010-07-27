goog.provide('plt.wescheme.beat');


// Heartbeat function.  Calls the heartbeat servlet, ignoring the
// response.  This should renew the user's session key if key rotation
// has taken place.
(function() {
    var beat = function(){
	jQuery.post("/heartbeat");	
    }    
    plt.wescheme.beat = beat;
})();