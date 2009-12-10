goog.require("plt.wescheme.AjaxActions");
goog.require("plt.wescheme.helpers");


goog.provide("plt.wescheme.SharingDialog")



plt.wescheme.SharingDialog = function(pid, code) {
    this.pid = pid;
    this.code = code;
    this.actions = new plt.wescheme.AjaxActions();
};


plt.wescheme.SharingDialog.prototype.show = function() {
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
		that.actions.runTheCompiler(
		    newPid, 
		    function() {
			that.actions.share(newPid,
			      isPublic,
			      function(sharedProgram) {
				  var newDialog = jQuery("<div/>");
				  newDialog.dialog({title: 'Sharing your program',
						    bgiframe : true,
						    modal : true,
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
		    whenCompilationFails);
	    },
	    whenCloningFails);
    };

    var whenCompilationFails = function() {
	// FIXME
	alert("compilation failed");
    };

    var whenCloningFails = function() {
	// FIXME
	alert("cloning failed");
    };

    var whenSharingFails = function() {
	// FIXME
	alert("Sharing failed.");
    };


    if (this.pid) {
	// 	    var that = this;
	// 	    var afterPublish = function(data, textStatus) {
	// 		var dom = jQuery(data);
	// 		WeSchemeIntentBus.notify("after-publish", that);
	// 	    };

	// 	    var error = function(xmlhttp, textstatus, errorThrown) {
	// 		WeSchemeIntentBus.notify("exception", 
	// 					 [that, "publish", textstatus, errorThrown]);
	// 	    };

	// 	    WeSchemeIntentBus.notify("before-publish", this);
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
