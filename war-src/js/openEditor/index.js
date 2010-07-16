goog.require("plt.wescheme.WeSchemeStatusBar");
goog.require("plt.wescheme.WeSchemeTextContainer");
goog.require("plt.wescheme.WeSchemeEditor");


goog.require('goog.ui.Container');
goog.require('goog.style');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.ui.SplitPane');
goog.require('goog.ui.SplitPane.Orientation');




var myEditor;
var defnSourceContainer;



var initializeEditor = function(attrs) {

    splitPaneSetup();

    // Set up the heartbeat.
    setInterval(beat, 1800000);


    interactionsSetup();
    

    editorSetup(attrs);
};



var interactionsSetup = function() {
    jQuery("#interactions").click(function(e) {
        document.getElementById('inputBox').focus();
	e.stopPropagation();
	e.preventDefault();
	return false;
    });

};


var editorSetup = function(attrs) {
    var userName = attrs['userName'];
    var pid = attrs['pid'];
    var publicId = attrs['publicId'];


    // Fixme: trigger file load if the pid has been provided.

    var statusBar = new plt.wescheme.WeSchemeStatusBar(jQuery("#statusbar"));
    new plt.wescheme.WeSchemeTextContainer(
	jQuery("#definitions").get(0),
	function(container) {
	    defnSourceContainer = container;
	    defnSourceContainer.setMode(
		"codemirror",
		function() {
		    myEditor = new plt.wescheme.WeSchemeEditor(
			{ userName: "<%= userSession != null? userSession.getName() : null %>",
			  defn: defnSourceContainer,
			  interactions: jQuery("#inter").get(0),
			  filenameInput: jQuery("#filename")});
		    
		    jQuery("#save").click(function() { myEditor.save(); });
		    jQuery("#run").click(function()  { myEditor.run(); });
		    jQuery("#stop").click(function()  { myEditor.requestBreak(); });
		    jQuery("#share").click(function()  { myEditor.share(); });
		    jQuery("#account").click(function()  { submitPost("/console"); });
		    jQuery("#logout").click(function() { submitPost("/logout"); });
		    jQuery("#bespinMode").click(function() { defnSourceContainer.setMode("bespin")});

		    if (pid !== null) {
			myEditor.load({pid : parseInt(pid) });
		    } else if (publicId != null) {
			myEditor.load({publicId : publicId});
		    } else {
			// otherwise, dont load.
		    }
		});
	});
};



var splitPaneSetup = function() {
    var parentContainer = document.getElementById('middle');
    var splitpaneDiv = document.getElementById('splitpane');
    var top = document.getElementById("definitions");
    var textarea = document.getElementById("defn");
    var bottom = document.getElementById("interactions");


    var splitpane1 = new goog.ui.SplitPane(
	new goog.ui.Component(),
	new goog.ui.Component(),
        goog.ui.SplitPane.Orientation.VERTICAL);
    
    splitpane1.decorate(splitpaneDiv);

    var vsm = new goog.dom.ViewportSizeMonitor();

    var getSize = function() {
        return goog.style.getBorderBoxSize(
            parentContainer);
    };


    var currentSize = getSize();

    var onResize = function(e) {
	var newSize = getSize();
	if (! goog.math.Size.equals(currentSize, newSize)) {
            currentSize = newSize;
            splitpane1.setSize(newSize);
	}

	goog.style.setBorderBoxSize(splitpaneDiv,
				   newSize);

	synchronizeTopSize();
    };

    var synchronizeTopSize = function() {
	goog.style.setBorderBoxSize(
	    textarea,
	    goog.style.getBorderBoxSize(top));
    };

    synchronizeTopSize();

    goog.events.listen(splitpane1,
		       goog.events.EventType.CHANGE,
		       synchronizeTopSize);

    goog.events.listen(parentContainer,
                       goog.events.EventType.RESIZE,
                       onResize);
    goog.events.listen(vsm,
                       goog.events.EventType.RESIZE,
                       onResize);
};




function switchStyle(style){
    document.getElementById('style').href = '/css/'+style;
}
