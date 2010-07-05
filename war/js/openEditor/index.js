var myEditor;
var defnSourceContainer;



var initializeEditor = function(attrs) {
    var userName = attrs['userName'];
    var pid = attrs['pid'];
    var publicId = attrs['publicId'];


    // Fixme: trigger file load if the pid has been provided.

    var statusBar = new WeSchemeStatusBar(jQuery("#statusbar"));
    new WeSchemeTextContainer(
	jQuery("#definitions").get(0),
	function(container) {
	    defnSourceContainer = container;
	    defnSourceContainer.setMode(
		"codemirror",
		function() {
		    myEditor = new WeSchemeEditor(
			{ userName: "<%= userSession != null? userSession.getName() : null %>",
			  defn: defnSourceContainer,
			  interactions: jQuery("#inter").get(0),
			  filenameInput: jQuery("#filename")});
		    
		    jQuery("#save").click(function() { myEditor.save(); });
		    jQuery("#run").click(function()  { myEditor.run(); });
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




function switchStyle(style){
    document.getElementById('style').href = '/css/'+style;
}
