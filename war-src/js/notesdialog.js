goog.provide("plt.wescheme.NotesDialog");

goog.require("goog.dom");
goog.require('goog.ui.AdvancedTooltip');

goog.require("plt.wescheme.AjaxActions");
goog.require("plt.wescheme.helpers");
goog.require("plt.wescheme.WeSchemeIntentBus");



(function() {
    "use strict";
    // constructor: id (string | null) -> NotesDialog
    plt.wescheme.NotesDialog = function(pid) {
	this.pid = pid;
	this.actions = new plt.wescheme.AjaxActions();
    };


    plt.wescheme.NotesDialog.prototype.show = function(onSuccess, onAbort) {
	var that = this;
	var dialogWindow = (jQuery("<div/>"));
	
	var closeDialog = function() {
	    dialogWindow.dialog("close");
	};

        var onClose = function() {
            alert('onclose');
            if (that.pid) {
                // save the content of notes.
                onSuccess();
            } else {
                // otherwise, just close quietly.
                onSuccess();
            }
        };

        if (that.pid) {
            that.actions.loadProject(
                that.pid,
                null,
                function(dom, aProgram) {
                    var textArea = jQuery("<textarea class='notesTextarea'></textarea>")
                    if (aProgram.getNotes()) { 
                        textArea.val(aProgram.getNotes());
                    } else {
                        textArea.val("Enter your notes here.");
                    }
	            dialogWindow.append(jQuery("<p/>").text("Notes"));
                    dialogWindow.append(textArea);
	            dialogWindow.dialog({title: 'Notes',
			                 bgiframe : true,
			                 modal : true,
			                 overlay : { opacity: 0.5,
					             background: 'black'},
			                 buttons : { "Save notes" : closeDialog },
                                         close : onClose 
			                });
	            dialogWindow.dialog("open");
                },
                onAbort);
        } else {
	    dialogWindow.append(jQuery("<p/>").text("Notes"));
            dialogWindow.append(jQuery("<span>Please save the program first.</span>"));
	    dialogWindow.dialog({title: 'Notes',
			         bgiframe : true,
			         modal : true,
			         overlay : { opacity: 0.5,
					     background: 'black'},
			         buttons : { "Close" : closeDialog },
                                 close : onClose
			        });
	    dialogWindow.dialog("open");

        }
    };


})();
