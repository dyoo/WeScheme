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
        this.textArea = jQuery("<textarea class='notesTextarea'></textarea>");
        this.textArea.css("width", '100%');
        this.textArea.css("height", '100%');
    };


    plt.wescheme.NotesDialog.prototype.show = function(onSuccess, onAbort) {
	var that = this;
	var dialogWindow = (jQuery("<div/>"));
	
	var closeDialog = function() {
	    dialogWindow.dialog("close");
	};

        var onClose = function() {
            if (that.pid) {
                that.actions.save({ pid : that.pid,
                                    notes : that.textArea.val() },
                                  onSuccess,
                                  onAbort);
            } else {
                // otherwise, just close quietly.
                onSuccess();
            }
        };

        if (that.pid) {
            that.actions.loadProject(
                that.pid,
                null,
                function(aProgram) {
                    
                    if (aProgram.getNotes()) { 
                        that.textArea.val(aProgram.getNotes());
                    } else {
                        that.textArea.val("Enter your notes here.");
                    }
                    dialogWindow.append(jQuery('<div/>').append(that.textArea).css('height', '100%'));
	            dialogWindow.dialog({title: 'Notes',
			                 bgiframe : true,
			                 modal : true,
			                 overlay : { opacity: 0.5,
					             background: 'black'},
			                 buttons : { "Save" : closeDialog },
                                         width : 400,
                                         height : 500,
                                         close : onClose 
			                });
	            dialogWindow.dialog("open");
                },
                onAbort);
        } else {
            dialogWindow.append(jQuery("<span>Please save the program first.</span>"));
	    dialogWindow.dialog({title: 'Notes',
			         bgiframe : true,
			         modal : true,
			         overlay : { opacity: 0.5,
					     background: 'black'},
			         buttons : { "Close" : closeDialog },
                                 width : 400,
                                 height : 500,
                                 close : onClose
			        });
	    dialogWindow.dialog("open");

        }
    };


})();
