if (typeof (plt) === 'undefined') {
    this.plt = {};
}
if (typeof (plt.wescheme) === 'undefined') {
    this.plt.wescheme = {};
}



// goog.require("plt.wescheme.AjaxActions");
// goog.require("plt.wescheme.helpers");
// goog.require("goog.dom");
// goog.require('goog.ui.AdvancedTooltip');
// goog.require("plt.wescheme.WeSchemeIntentBus");


//goog.provide("plt.wescheme.SharingDialog");

plt.wescheme.SharingDialog = {};


(function() {
    // constructor: id (string | null) -> SharingDialog
    plt.wescheme.SharingDialog = function(pid, code) {
	this.pid = pid;
	this.code = code;
	this.actions = new plt.wescheme.AjaxActions();
    };






    plt.wescheme.SharingDialog.prototype.show = function(onShareSuccess, onAbort) {
	var that = this;
	var dialogWindow = (jQuery("<div/>"));
	
	var shareWithSource = function() {
	    dialogWindow.dialog("close");
	    doTheSharing(true, function() {});
	};

	var shareWithoutSource = function() {
	    dialogWindow.dialog("close");
	    doTheSharing(false, function() {});
	};

	// Does the brunt work of the sharing.
	var doTheSharing = function(isPublic, onSuccess, onFailure) {
	    that.actions.makeAClone(
		that.pid, 
		that.code,
		function(newPid) { 
		    // FIXME: what should happen if the compilation succeeds,
		    // versus when it fails?
		    that.actions.runTheCompiler(
			newPid, 
			whenCompilationSucceeds,
			whenCompilationFails);

		    that.actions.share(newPid,
				       isPublic,
				       function(sharedProgram) {
					   var newDialog = jQuery("<div/>");
					   newDialog.dialog({title: 'Sharing your program',
							     bgiframe : true,
							     modal : true,
							     close : function() {
								 if (onShareSuccess) { 
								     onShareSuccess(sharedProgram); 
								 }
							     }
							    });
					   newDialog.append(
					       jQuery("<p/>")
						   .text("Program has been shared: "));
					   newDialog.append(
					       jQuery(plt.wescheme.helpers.urlToAnchor(
						   plt.wescheme.helpers.makeShareUrl(
						       sharedProgram.find("publicId").text()))));
					   newDialog.dialog("open");

				       },
				       whenSharingFails);
		},
		whenCloningFails);
	};

	var whenCompilationSucceeds = function() {
	};
	var whenCompilationFails = function() {
	    // FIXME
	    alert("compilation failed");
	    if (onAbort) { onAbort(); }
	};

	var whenCloningFails = function() {
	    // FIXME
	    alert("cloning failed");
	    if (onAbort) { onAbort(); }
	};

	var whenSharingFails = function() {
	    // FIXME
	    alert("Sharing failed.");
	    if (onAbort) { onAbort(); }
	};


	if (this.pid) {
	    // 	    var that = this;
	    // 	    var afterPublish = function(data, textStatus) {
	    // 		var dom = jQuery(data);
	    // 		plt.wescheme.WeSchemeIntentBus.notify("after-publish", that);
	    // 	    };

	    // 	    var error = function(xmlhttp, textstatus, errorThrown) {
	    // 		plt.wescheme.WeSchemeIntentBus.notify("exception", 
	    // 					 [that, "publish", textstatus, errorThrown]);
	    // 	    };

	    // 	    plt.wescheme.WeSchemeIntentBus.notify("before-publish", this);
	    // 	    jQuery.ajax({cache : false,
	    // 			 data : { pid: this.pid },
	    // 			 dataType: "xml",
	    // 			 type: "POST",
	    // 			 url: "/publishProject",
	    // 			 success: afterPublish,
	    // 			 error: error
	    // 			});
	    dialogWindow.append(jQuery("<p/>").text(
		"Do you wish to share with source?"));
	    dialogWindow.dialog({title: 'Sharing your program',
				 bgiframe : true,
				 modal : true,
				 overlay : {opacity: 0.5,
					    background: 'black'},
				 buttons : { "Share source" : shareWithSource,
					     "Keep source private" : shareWithoutSource }
				});
	    dialogWindow.dialog("open");
	} else {
	    dialogWindow.append(jQuery("<p/>").text(
		"The program needs to be saved before it can be shared."));
	    dialogWindow.dialog({title: 'Sharing your program',
				 bgiframe : true,
				 modal : true,
				 overlay : {opacity: 0.5,
					    background: 'black'},
				 buttons : {}
				});
	    dialogWindow.dialog("open");
	}
    };





    //////////////////////////////////////////////////////////////////////

    // makeShareButton: (Program | ProgramDigest) (-> void) (-> void) -> void
    // Creates a share button, given a Program or a ProgramDigest.
    // Either must have the following methods:
    // p.getId()
    // p.hasSharingUrls()
    // p.getSharedAsEntries()
    plt.wescheme.SharingDialog.makeShareButton = function(aProgramOrDigest,
							  onSuccess,
							  onFailure) {
	var img = (aProgramOrDigest.hasSharingUrls() ?
		   jQuery("<img class='button' src='/css/images/share.png'/>") :
		   jQuery("<img class='button' src='/css/images/share-decolored.png'/>"));
	img.click(function() {
	    (new plt.wescheme.SharingDialog(aProgramOrDigest.getId(), null)).show(onSuccess, 
							    onFailure);
	});
	var shareSpan =(jQuery("<span/>")
			.addClass("ProgramPublished")
			.append(img));

	attachSharingPopupTooltip(shareSpan.get(0), aProgramOrDigest);
	return shareSpan;
    };


    // attachSharingPopupTooltip: dom program-or-digest -> void
    var attachSharingPopupTooltip = function(parent, aProgramOrDigest) {
// 	var tooltip = new goog.ui.AdvancedTooltip(parent);
// 	tooltip.className = 'tooltip';
// 	if (aProgramOrDigest.hasSharingUrls()) {
// 	    tooltip.setHtml(
// 		"<h2>Program sharing</h2>" +
// 		    "This program has been shared.", true);
// 	    var aList = goog.dom.createElement("ul");
// 	    var entries = aProgramOrDigest.getSharedAsEntries();
// 	    // We'll just look at the first one.
// 	    var elt = entries[0];
// 	    var item = goog.dom.createElement("li");
// 	    aList.appendChild(item);
// 	    var title = elt.title;
// 	    var anchor = makeShareAnchor(elt.publicId, elt.title);
// 	    item.appendChild(anchor);
// 	    item.appendChild(goog.dom.createTextNode(
// 		" [" + plt.wescheme.helpers.prettyPrintDate(elt.modified) + "]"));
// 	    item.appendChild(plt.wescheme.helpers.generateSocialBookmarks(
// 		title, anchor.href));
// 	    goog.dom.appendChild(tooltip.getElement(), aList);

// 	} else {
// 	    tooltip.setHtml(
// 		"<h2>Program sharing</h2>" +
// 		    "This program has not been shared yet.  Click the share icon to share it.", true);
// 	}
// 	tooltip.setHotSpotPadding(new goog.math.Box(5, 5, 5, 5));
// 	tooltip.setCursorTracking(true);
// 	tooltip.setHideDelayMs(250);
    }


    // makeShareUrl: string -> element
    // Produces the sharing url
    var makeShareAnchor = function(publicId, name) {
	if (publicId != "") {
	    var a = document.createElement("a");
	    a.href = "/view?publicId=" + encodeURIComponent(publicId);
	    a.appendChild(document.createTextNode(name || a.href));
	    return a;
	} else {
	    throw new Error();
	}
    }





    //////////////////////////////////////////////////////////////////////








})();