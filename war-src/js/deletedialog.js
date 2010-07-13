// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }

goog.provide("plt.wescheme.DeleteDialog");



goog.require("plt.wescheme.AjaxActions");
goog.require("plt.wescheme.helpers");
goog.require("plt.wescheme.WeSchemeIntentBus");
goog.require("goog.dom");
goog.require('goog.ui.AdvancedTooltip');



plt.wescheme.DeleteDialog = {};


(function() {
    // constructor: id (string | null) -> DeleteDialog
    plt.wescheme.DeleteDialog = function(pid, code) {
	this.pid = pid;
	this.actions = new plt.wescheme.AjaxActions();
    };


    plt.wescheme.DeleteDialog.prototype.show = function(onSuccess, onFailure) {
	var that = this;
	var dialogWindow = (jQuery("<div/>"));	

	var doTheDelete = function() {
	    dialogWindow.dialog("close");
	    that.actions.deleteProject(that.pid, onSuccess, onFailure);
	};

	var abortTheDelete = function() {
	    dialogWindow.dialog("close");
	    onSuccess();
	};

	dialogWindow.append(jQuery("<p/>").text(
	    "Do you wish to delete the project?"));
	dialogWindow.dialog({title: 'Deleting the program',
			     bgiframe : true,
			     modal : true,
			     overlay : {opacity: 0.5,
					background: 'black'},
			     buttons : { "Delete" : doTheDelete,
					 "Keep the project" : abortTheDelete }
			    });
	dialogWindow.dialog("open");
    };





    //////////////////////////////////////////////////////////////////////

    // makeShareButton: (Program | ProgramDigest) (-> void) (-> void) -> void
    // Creates a share button, given a Program or a ProgramDigest.
    // Either must have the following methods:
    // p.getId()
    // p.hasSharingUrls()
    // p.getSharedAsEntries()
    plt.wescheme.DeleteDialog.makeDeleteButton = function(aProgramOrDigest,
							  onSuccess,
							  onFailure) {
	var img = jQuery("<img class='button' src='/css/images/delete.png'/>");
	img.click(function() {
	    (new plt.wescheme.DeleteDialog(aProgramOrDigest.getId(), null)).show(
		onSuccess, 
		onFailure);
	});
	var deleteSpan =(jQuery("<span/>")
			.addClass("ProgramPublished")
			.append(img));

	return deleteSpan;
    };



    //////////////////////////////////////////////////////////////////////








})();