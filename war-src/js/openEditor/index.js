goog.require("plt.wescheme.WeSchemeStatusBar");
goog.require("plt.wescheme.WeSchemeTextContainer");
goog.require("plt.wescheme.WeSchemeEditor");


goog.require('goog.ui.Container');
goog.require('goog.style');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.ui.SplitPane');
goog.require('goog.ui.SplitPane.Orientation');

goog.require('goog.math.Size');


goog.require('plt.wescheme.topKeymap');


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

    
    jQuery("body").keydown(plt.wescheme.topKeymap);
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
    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    var middle = document.getElementById('middle');


    var splitpaneDiv = document.getElementById('splitpane');
    var definitions = document.getElementById("definitions");
    var textarea = document.getElementById("defn");
    var interactions = document.getElementById("interactions");


    var splitpane1 = new goog.ui.SplitPane(
	new goog.ui.Component(),
	new goog.ui.Component(),
        goog.ui.SplitPane.Orientation.VERTICAL);
    
    splitpane1.decorate(splitpaneDiv);

    var vsm = new goog.dom.ViewportSizeMonitor();



    var currentSize = undefined;

    // The display should consist of the top, the middle, and the bottom.
    // The middle should expand to the size of the viewport minus the top and bottom.
    var onResize = function(e) {
	var viewportSize = vsm.getSize();
	var desiredWidth = viewportSize.width;
	var desiredHeight = (viewportSize.height - 
			     goog.style.getBorderBoxSize(top).height - 
			     goog.style.getBorderBoxSize(bottom).height);

	var newSize = new goog.math.Size(desiredWidth, desiredHeight);
	if ((! currentSize) ||
	    (! goog.math.Size.equals(currentSize, newSize))) {
            currentSize = newSize;
            splitpane1.setSize(newSize);
	    goog.style.setBorderBoxSize(middle, newSize);
	}

	goog.style.setBorderBoxSize(splitpaneDiv,
				    newSize);
	synchronize();
    };



    var synchronize = function() {
	synchronizeTopSize();
	synchronizeCodeMirror();
    };

    var synchronizeTopSize = function() {
	goog.style.setBorderBoxSize(
	    textarea,
	    goog.style.getBorderBoxSize(definitions));
    };

    var synchronizeCodeMirror = function() {
	// HACK: get the width of the internal frame of the editor to match
	// the viewport, taking into account the width of the line numbers.
	var wrapping = goog.dom.getElementsByTagNameAndClass('div', 
							     'CodeMirror-wrapping',
							     definitions);
	for (var i = 0 ; i < wrapping.length; i++) {
	    var wrappingSize = goog.style.getBorderBoxSize(wrapping[i]);
	    var lineNumberWidth;
	    var lineNumberDivs = 
		goog.dom.getElementsByTagNameAndClass('div', 
						      'CodeMirror-line-numbers',
						      wrapping[i]);
	    for (var j = 0; j < lineNumberDivs.length; j++) {
		lineNumberWidth = goog.style.getBorderBoxSize(lineNumberDivs[j]).width;
	    }
	    if (typeof(lineNumberWidth) !== 'undefined') {
		var iframes = 
		    goog.dom.getElementsByTagNameAndClass(
			'iframe', undefined, wrapping[i]);
		for (var j = 0; j < iframes.length; j++) {
		    var iframeSize = goog.style.getBorderBoxSize(iframes[j]);
		    goog.style.setBorderBoxSize(
			iframes[j],
			new goog.math.Size(wrappingSize.width - lineNumberWidth,
					   iframeSize.height));
		}
	    }
	};
    };



    goog.events.listen(splitpane1,
		       goog.events.EventType.CHANGE,
		       synchronizeTopSize);

    goog.events.listen(vsm,
                       goog.events.EventType.RESIZE,
                       onResize);

    setTimeout(onResize, 0);
};




function switchStyle(style){
    document.getElementById('style').href = '/css/'+style;
}
