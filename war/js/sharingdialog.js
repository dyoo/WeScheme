goog.require("plt.wescheme.AjaxActions");
goog.require("plt.wescheme.helpers");
//goog.require("plt.wescheme.WeSchemeIntentBus");


goog.provide("plt.wescheme.SharingDialog");


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

})();