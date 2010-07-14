// Main entry for viewing a program, to show either its source
// or a running program.

goog.require('plt.wescheme.helpers');


function update(publicId) {

    // TODO: notify the user if the program uses some
    // permissions

    var callback = function(data) {
	var dom = jQuery(data);
	var programTitle = jQuery("#programTitle");
	programTitle.empty();
	var titleText = jQuery("<span/>")
	    .addClass("programName")
	    .text(dom.find("title").text());
	programTitle.append(jQuery("<span/>").text("Program name: "));
	programTitle.append(titleText);
	jQuery("#runIt").attr(
	    "href",
	    "/run?publicId=" + encodeURIComponent(publicId));

	// If the thing doesn't have source, hide the run button
	if (dom.find("ObjectCode obj").text() === "") {
	    jQuery("#runIt").hide();
	}


        if (dom.find("isSourcePublic").text() == 'true') {
	    jQuery("#viewSource").attr(
		"href",
		"/openEditor?publicId="+ encodeURIComponent(publicId));

        } else {
	    jQuery("#viewSource").hide();
	}


	// Add the social bookmarks, too.
	jQuery("#socialBookmarks").append(
	    jQuery(
	    plt.wescheme.helpers.generateSocialBookmarks(
		titleText, 
		plt.wescheme.helpers.makeShareUrl(publicId))));
 
   };
    jQuery.get("/loadProject", 
               {publicId: publicId},
               callback, 
               "xml");
}
