if (typeof (plt) === 'undefined') {
    this.plt = {};
}
if (typeof (plt.wescheme) === 'undefined') {
    this.plt.wescheme = {};
}


function beat(){

  jQuery.post("/heartbeat");

}

plt.wescheme.beat = beat;