goog.provide("plt.wescheme.SharingDialog");

goog.require("goog.dom");
goog.require('goog.ui.AdvancedTooltip');

goog.require("plt.wescheme.AjaxActions");
goog.require("plt.wescheme.helpers");
goog.require("plt.wescheme.WeSchemeIntentBus");


// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }
//plt.wescheme.SharingDialog = {};



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
            doTheSharing(true);
        };

        var shareWithoutSource = function() {
            dialogWindow.dialog("close");
            doTheSharing(false);
        };

        // Does the brunt work of the sharing.
        // If sharing is completely successful, onSuccess will be called.
        // If at any point, something breaks, onFailure will be called.
        var doTheSharing = function(isPublic) {
            plt.wescheme.WeSchemeIntentBus.notify("before-share", that);
            
            that.actions.makeAClone(
                that.pid, 
                that.code,
                function(newPid) { 
                    that.actions.runTheCompiler(
                        newPid, 
                        function() { whenCompilationSucceeds(isPublic, newPid); },
                        function(err) { whenCompilationFails(isPublic, newPid, err); });
                },
                whenCloningFails);
        };

        var whenCompilationSucceeds = function(isPublic, newPid) {
            showResultOfSharing(isPublic, newPid, false);
        };

        var whenCompilationFails = function(isPublic, newPid, errMessage) {
            showResultOfSharing(isPublic, newPid, errMessage);
        };

        var showResultOfSharing = function(isPublic, newPid, errMessage) {
            that.actions.share(newPid, isPublic,
                               function(sharedProgram) {
                                   var newDialog = jQuery("<div/>");
                                   newDialog.dialog(
                                       {title: 'Sharing your program',
                                        bgiframe : true,
                                        modal : true,
                                        close : function() {
                                            if (onShareSuccess) {onShareSuccess(sharedProgram);}
                                        }
                                       });
                                   plt.wescheme.WeSchemeIntentBus.notify("after-share", that);
                                   
                                   newDialog.append(jQuery("<p/>").text("Program has been shared: "));
                                   var publicId = sharedProgram.find("publicId").text();
                                   anchor = plt.wescheme.helpers.urlToAnchor(plt.wescheme.helpers.makeShareUrl(publicId)),
                                   title = sharedProgram.find("title").text();
                                   anchor.target = "_blank";
                                   newDialog.append(jQuery(anchor));
                                   newDialog.append(jQuery("<p/>"));
                                   newDialog.append(jQuery(plt.wescheme.helpers.generateSocialBookmarks(title, anchor.href)));

                                   // Ignore errMessage.
                                   // We'll deal with it during Run time.
                                   //
                                   // // Add error message content if something weird happened during the build.
                                   // if (errMessage !== false) {
                                   //     newDialog.append(
                                   //         jQuery("<p/>").text("However, the program won't be able to run because of the following: "));
                                   //     newDialog.append(jQuery("<tt/>").css("color", "red").text(errMessage));
                                   //     if (isPublic) {
                                   //         newDialog.append(
                                   //             jQuery("<p/>")
                                   //                 .text("Although it won't run, its source can still be viewed."));
                                   //     }
                                   // }

                                   newDialog.dialog("open");
                               },
                               whenSharingFails);
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
            dialogWindow.append(jQuery("<p/>").text("Do you wish to share with source?"));
            dialogWindow.dialog({title: 'Sharing your program',
                                 bgiframe : true,
                                 modal : true,
                                 overlay : {opacity: 0.5, background: 'black'},
                                 buttons : { "Share source" : shareWithSource,
                                             "Keep source private" : shareWithoutSource }
                                });
            dialogWindow.dialog("open");
        } else {
            dialogWindow.append(jQuery("<p/>").text("The program needs to be saved before it can be shared."));
            dialogWindow.dialog({title: 'Sharing your program',
                                 bgiframe : true,
                                 modal : true,
                                 overlay : {opacity: 0.5, background: 'black'},
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
            (new plt.wescheme.SharingDialog(aProgramOrDigest.getId(), null)).show(onSuccess, onFailure);
        });
        var shareSpan =(jQuery("<span/>").addClass("ProgramPublished").append(img));

        attachSharingPopupTooltip(shareSpan.get(0), aProgramOrDigest);
        return shareSpan;
    };


    // attachSharingPopupTooltip: dom program-or-digest -> void
    var attachSharingPopupTooltip = function(parent, aProgramOrDigest) {
        var tooltip = new goog.ui.AdvancedTooltip(parent);
        tooltip.className = 'tooltip';
        if (aProgramOrDigest.hasSharingUrls()) {
            tooltip.setHtml("<h2>Program sharing</h2>" + "This program has been shared.", true);
            var aList = goog.dom.createElement("ul");
            var entries = aProgramOrDigest.getSharedAsEntries();
            // We'll just look at the first one.
            var elt = entries[0];
            var item = goog.dom.createElement("li");
            aList.appendChild(item);
            var title = elt.title;
            var anchor = makeShareAnchor(elt.publicId, elt.title);
            item.appendChild(anchor);
            item.appendChild(goog.dom.createTextNode(" [" + plt.wescheme.helpers.prettyPrintDate(elt.modified) + "]"));
            item.appendChild(plt.wescheme.helpers.generateSocialBookmarks(title, anchor.href));
            goog.dom.appendChild(tooltip.getElement(), aList);

        } else {
            tooltip.setHtml("<h2>Program sharing</h2>" +
                            "This program has not been shared yet.  Click the share icon to share it.", true);
        }
        tooltip.setHotSpotPadding(new goog.math.Box(5, 5, 5, 5));
        tooltip.setCursorTracking(true);
        tooltip.setHideDelayMs(250);
    }


    // makeShareUrl: string -> element
    // Produces the sharing url
    var makeShareAnchor = function(publicId, name) {
        if (publicId != "") {
            var a = document.createElement("a");
            a.href = plt.wescheme.helpers.makeShareUrl(publicId);
            a.target = "_blank";
            a.appendChild(document.createTextNode(name || a.href));
            return a;
        } else {
            throw new Error();
        }
    }

    //////////////////////////////////////////////////////////////////////
})();
