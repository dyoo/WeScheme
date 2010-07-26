// console.js provides the functionality for the console: listing
// current projects, deleting and sharing projects.


goog.require('plt.wescheme.AjaxActions');
goog.require('plt.wescheme.SharingDialog');
goog.require('plt.wescheme.DeleteDialog');
goog.require("plt.wescheme.ProgramDigest");
goog.require("plt.wescheme.helpers");




// loadProgramList: (-> void) -> void
// Load up the program list and fill the document with it.
// Calls the continuation if the load is successful.
var loadProgramList = function(k) {
    var actions = new plt.wescheme.AjaxActions();

    actions.listProjects(
	// On successful project list loading, load the list
	function(dom) {
	    var programListUl = clearConsoleListing();	
	    dom.find("ProgramDigest").each(function() {	
		var digest = jQuery(this);
		

		if (digest.children("published").text() == 'true') {
		    // skip it
		} else {
		    addProgramEntry(digest, 
				    new plt.wescheme.ProgramDigest(digest),
				    programListUl);
		}
	    });
	    
	    k();
	},

	// Otherwise, fail by raising an alert.
	function() {
	    alert("Could not load list of projects")
	});
}





// clearConsoleListing: -> ul
// clears the contents of the console list, returning a fresh
// ul entry where things can be appended.
var clearConsoleListing = function() {
    var programListDiv = jQuery("#programList");
    var sharedListDiv = jQuery("#sharedList");

    programListDiv.empty();
    sharedListDiv.empty();

    var programListUl = jQuery("<ul/>");
    programListDiv.append(programListUl);
    // Headers
    programListUl.append(
	jQuery("<li/>").addClass("EntryHeader")
	    .append(jQuery("<span/>").addClass("ProgramTitle").text("Program Title"))
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Share"))
	    .append(jQuery("<span/>").addClass("ProgramDelete").text("Delete")));
    return programListUl
}



var addProgramEntry = function(digest, aProgramDigest, programListUl) {
    // The program entry
    var programEntry = (jQuery("<li/>").addClass("ProgramEntry"));

    var title = aProgramDigest.getTitle();
    var id = aProgramDigest.getId();
    var anchor = jQuery("<span/>")
	.addClass("ProgramTitle")
	.append(jQuery("<a/>")
		.attr("href", "/openEditor?pid="+id)
		.attr("target", "_editor" + id)
		.text(title));


    // form.submit(function() { 
// 	console.log("opening first window");
// 	submitPost("/openEditor",
// 		   { pid: id },
// 		   { target: "wescheme_editor_" + id });
// 	console.log("opening second window");
// 	submitPost("/openEditor",
// 		   { pid: id },
// 		   { target: "2ndwindowwescheme_editor_" + id });
// 	return false;
//     });


    var modifiedSpan = (jQuery("<span/>")
			.text(plt.wescheme.helpers.prettyPrintDate(
			    aProgramDigest.getModified()))
			.addClass("ProgramModified"));
    var shareSpan = plt.wescheme.SharingDialog.makeShareButton(
	aProgramDigest, loadProgramList);

    var deleteSpan = plt.wescheme.DeleteDialog.makeDeleteButton(
	aProgramDigest, loadProgramList, loadProgramList);

    (programEntry
     .append(anchor)
     .append(modifiedSpan)
     .append(shareSpan)
     .append(deleteSpan));
    
    programListUl.append(programEntry);
};



var continueRefreshingProgramList = function() {
    // Every 30 seconds, refresh the program list.
    var DELAY_BETWEEN_RELOADS = 30000;
    setTimeout(function() { loadProgramList(continueRefreshingProgramList); },
	       DELAY_BETWEEN_RELOADS);
};


jQuery(document).ready(function() {
    loadProgramList(continueRefreshingProgramList);    
});