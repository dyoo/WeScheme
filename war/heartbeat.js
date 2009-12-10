goog.provide("plt.wescheme.beat");

function beat(){

  jQuery.post("/heartbeat");

}

plt.wescheme.beat = beat;