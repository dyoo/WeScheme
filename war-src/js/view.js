// Main entry for viewing a program, to show either its source
// or a running program.

goog.require('plt.wescheme.helpers');
goog.require('plt.wescheme.Program');
goog.require('plt.wescheme.AjaxActions');

function update(publicId) {

    // TODO: notify the user if the program uses some
    // permissions

    var whenLoadSucceeds = function(data, myProgram) {
	var programTitle = jQuery("#programTitle");
	programTitle.empty();
	programTitle.append(jQuery("<span/>").text("Program name: "));
	programTitle.append(myProgram.getTitle());
	jQuery("#runIt").attr(
	    "href",
	    "/run?publicId=" + encodeURIComponent(publicId));

	// If the thing doesn't have source, hide the run button
	if (myProgram.getObjectCode() === "") {
	    jQuery("#runIt").hide();
	}


        if (myProgram.isSourcePublic()) {
	    jQuery("#viewSource").attr(
		"href",
		"/openEditor?publicId="+ encodeURIComponent(publicId));

        } else {
	    jQuery("#viewSource").hide();
	}


        if (myProgram.isAndroidPackageBuilt()) {
	    jQuery("#androidApk").attr(
		"href",
		myProgram.getAndroidPackageUrl());

        } else {
	    jQuery("#androidApk").hide();
	}



	// Add the social bookmarks, too.
	jQuery("#socialBookmarks").append(
	    jQuery(
	    plt.wescheme.helpers.generateSocialBookmarks(
		myProgram.getTitle(), 
		plt.wescheme.helpers.makeShareUrl(publicId))));
 
    };
    
    var whenLoadFails = function(data, myProgram) {
	alert("Unable to load program");
    };


    (new plt.wescheme.AjaxActions()).loadAProject(undefined,
						  publicId,
						  whenLoadSucceeds,
						  whenLoadFails);
}
