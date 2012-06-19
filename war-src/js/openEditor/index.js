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
goog.require('plt.wescheme.browserCheck');

//FIXME: these should NOT be global variables, but at the moment, they're exposed
//as such, and the topKeymap refers to myEditor.

var myEditor;

var initializeEditor;



(function() {
    var setupDocumentationFrame = function() {
	  var thediv = document.getElementById("documentation");
	  thediv.style.display = 'block';
	  var button = document.getElementById("docs");
	  button.onclick = function() { 
		thediv.style.display = 'block';
	  };
	  var hideButton = document.getElementById("docButton");
	  hideButton.onclick = function() {
		thediv.style.display = 'none';
	  }
	  var iframe = document.getElementById("docFrame");  
	  
	  var resetButton = document.getElementById("resetButton");
	  resetButton.onclick = function() {
		  iframe.src = "/doc/wescheme.html";
	  }
    };



    initializeEditor = function(attrs) {
	setupDocumentationFrame();
	plt.wescheme.browserCheck();
	maybeHideHeaderAndFooter(attrs.hideHeader, 
                                 attrs.hideToolbar,
                                 attrs.hideProjectName,
                                 attrs.hideFooter);
	editorSetup(attrs, 
		    function() { 
                        // At this point, we know the editor has been
                        // initialized.
		        maybeWarnOnExit(attrs.warnOnExit);
                        splitPaneSetup(attrs); 
                    });
    };



	var maybeWarnOnExit = function(warnOnExit) {
		var doubleCheck = function(){
			return "Are you sure you want to leave the Editor? (all unsaved changes will be lost)";
		};
		if (warnOnExit) {
		    window.onbeforeunload = doubleCheck;

                    // // If the editor is dirty
                    // changes(myEditor.isDirtyB).mapE(function(v) {
                    //     if (v) {
                    //     } else {
                    //     }
                    // });
		}
	};



    var maybeHideHeaderAndFooter = function(hideHeader, hideToolbar, hideProjectName, hideFooter) {
	if (hideHeader) {
	    document.getElementById("header").style.display = 'none';
	}

	if (hideToolbar) {
	    document.getElementById("toolbar").style.display = 'none';
	}

	if (hideProjectName) {
	    document.getElementById("fileInfo").style.display = 'none';
	}

	if (hideFooter) {
	    document.getElementById("bottom").style.display = 'none';
	}
    };


	var editorSetup = function(attrs, after) {
		var userName = attrs['userName'];
		var pid = attrs['pid'];
		var publicId = attrs['publicId'];


		// Fixme: trigger file load if the pid has been provided.

		var statusBar = new plt.wescheme.WeSchemeStatusBar(jQuery("#statusbar"));

		var textContainerOptions = { width: "100%", 
				lineNumbers: true };
		new plt.wescheme.WeSchemeTextContainer(
				jQuery("#definitions").get(0),
				textContainerOptions,
				function(container) {
					var defnSourceContainer = container;
					myEditor = new plt.wescheme.WeSchemeEditor(
							{ userName: userName,
								defn: defnSourceContainer,
								interactions: jQuery("#inter").get(0),
								filenameInput: jQuery("#filename")},
								function(_myEditor) {
									myEditor = _myEditor;


									jQuery("#run").click(function()  { myEditor.run(); });
									jQuery("#stop").click(function()  { myEditor.requestBreak(); });
									jQuery("#save").click(function() { myEditor.save(); });
									jQuery("#share").click(function()  { myEditor.share(); });
									jQuery("#logout").click(function() { 
                                                                            if(confirm("You will be logged out of WeScheme and other Google services.")) {
                                                                                submitPost("/logout"); 
                                                                            }
                                                                        });
									jQuery("#bespinMode").click(function() { defnSourceContainer.setMode("bespin"); });


									var afterLoad1 = function() {
										if (attrs.autorunDefinitions) {
											myEditor.run(afterLoad2);
										} else {
											afterLoad2();
										}
									};

									var afterLoad2 = function() {
										if (attrs.initialInteractionsText) {
											myEditor.interactions.setPromptText(attrs.initialInteractionsText + '');
										}
										if (attrs.initialDefinitionsText) {
											myEditor.defn.setCode(attrs.initialDefinitionsText + '');
										}

										// Set up interactions afterwards.
										jQuery("#interactions").click(function(e) {
											myEditor.interactions.focusOnPrompt();
											e.stopPropagation();
											e.preventDefault();
											return false;
										});
										jQuery(document.body).keydown(plt.wescheme.topKeymap);


										// Call the after continuation at the end.
										after();
									};

									if (pid !== null) {
										myEditor.load({pid : parseInt(pid) }, afterLoad1, afterLoad1);
									} else if (publicId != null) {
										myEditor.load({publicId : publicId}, afterLoad1, afterLoad1);
									} else {
										// otherwise, dont load.
										afterLoad1();
									}


								}
					);
				});
	};



	var splitPaneSetup = function(attrs) {
		if (attrs.hideDefinitions) {
			document.getElementById("interactions").style.height = "100%";
			document.getElementById("definitions").style.display = "none";
			return;
		}
		if (attrs.hideInteractions) {
			document.getElementById("interactions").style.display = "none";
			document.getElementById("definitions").style.height = "100%";
			return;
		}


		var getDefn = function() {
			return goog.dom.getElementsByTagNameAndClass(
					'div', 'CodeMirror',
					document.getElementById("definitions"))[0];
		};



		var top = document.getElementById("top");
		var bottom = document.getElementById("bottom");
		var middle = document.getElementById('middle');


		var splitpaneDiv = document.getElementById('splitpane');
		var definitions = document.getElementById("definitions");
		var defn = getDefn();

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
					defn,
					goog.style.getBorderBoxSize(definitions));
			//console.log(defn)
			//defn.refresh()
		};


		var synchronizeCodeMirror = function() {
			// HACK: get the width of the internal frame of the editor to match
			// the viewport, taking into account the width of the line numbers.
			var wrapping = goog.dom.getElementsByTagNameAndClass(
					'div', 'CodeMirror', definitions);

			for (var i = 0 ; i < wrapping.length; i++) {
				var wrappingSize = goog.style.getBorderBoxSize(wrapping[i]);
				var lineNumberWidth;
				var lineNumberDivs = 
					goog.dom.getElementsByTagNameAndClass('div', 
							'CodeMirror-gutter',
							wrapping[i]);
				for (var j = 0; j < lineNumberDivs.length; j++) {
					lineNumberWidth = goog.style.getBorderBoxSize(lineNumberDivs[j]).width;
				}

				if (typeof(lineNumberWidth) !== 'undefined') {
					var iframes = 
						goog.dom.getElementsByTagNameAndClass(
								'iframe', undefined, wrapping[i]);
					for (var j = 0; j < iframes.length; j++) {
						var iframe = iframes[j];
						var iframeBox = goog.style.getBorderBoxSize(iframe);

						iframe.style.width = (vsm.getSize().width - lineNumberWidth) + "px";
					}
				}
			};
			//fix the height of the definitions gutter
			myEditor.defn.refresh();
			
		};


		goog.events.listen(splitpane1,
				goog.events.EventType.CHANGE,
				synchronize);

		goog.events.listen(vsm,
				goog.events.EventType.RESIZE,
				onResize);

		setTimeout(onResize, 0);
	};


	var switchStyle = function(style){
		document.getElementById('style').href = '/css/'+style;
	};
})();