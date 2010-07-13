// console.js provides the functionality for the console: listing
// current projects, deleting and sharing projects.


goog.require('plt.wescheme.AjaxActions');
goog.require('plt.wescheme.SharingDialog');
goog.require('plt.wescheme.DeleteDialog');
goog.require("plt.wescheme.ProgramDigest");
goog.require("plt.wescheme.helpers");


if (typeof (plt) === 'undefined') {
    this.plt = {};
}
if (typeof (plt.wescheme) === 'undefined') {
    this.plt.wescheme = {};
}



function loadProgramList() {
    var actions = new plt.wescheme.AjaxActions();


    var programListDiv = jQuery("#programList");
    var sharedListDiv = jQuery("#sharedList");

    programListDiv.empty();
    sharedListDiv.empty();

    var programListUl = jQuery("<ul/>");
    programListDiv.append(programListUl);

    var sharedListUl = jQuery("<ul/>");
    sharedListDiv.append(sharedListUl);


    // Headers
    programListUl.append(
	jQuery("<li/>").addClass("EntryHeader")
	    .append(jQuery("<span/>").addClass("ProgramTitle").text("Program Title"))
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Share"))
	    .append(jQuery("<span/>").addClass("ProgramDelete").text("Delete")));
    
    
    sharedListUl.append(
	jQuery("<li/>").addClass("EntryHeader")
	    .append(jQuery("<span/>").addClass("ProgramTitle").text("Program Title"))
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Sharing URL")));
    

    var addProgramEntry = function(digest, aProgramDigest) {

	// The program entry
	var programEntry = (jQuery("<li/>").addClass("ProgramEntry"));

	var title = aProgramDigest.getTitle();
	var id = aProgramDigest.getId();
	var form = (jQuery("<form/>")
		    .attr("method", "post")
		    .attr("action",   "/openEditor")
		    .append(jQuery("<input/>")
			    .addClass("ProgramTitle")
			    .attr("type", "submit")
			    .attr("value", title))
		    .append(jQuery("<input/>")
			    .attr("type", "hidden")
			    .attr("name", "pid")
			    .attr("value", id)));
	var modifiedSpan = (jQuery("<span/>")
			    .text(plt.wescheme.helpers.prettyPrintDate(
				aProgramDigest.getModified()))
			    .addClass("ProgramModified"));
	var shareSpan = plt.wescheme.SharingDialog.makeShareButton(
	    aProgramDigest, loadProgramList);

	var deleteSpan = plt.wescheme.DeleteDialog.makeDeleteButton(
	    aProgramDigest, loadProgramList, loadProgramList);

	(programEntry
	 .append(form)
	 .append(modifiedSpan)
	 .append(shareSpan)
	 .append(deleteSpan));
	
	programListUl.append(programEntry);
    };



    actions.listProjects(function(dom) {
	dom.find("ProgramDigest").each(function() {	
	    var digest = jQuery(this);


	    if (digest.children("published").text() == 'true') {
		// skip it
	    } else {
		addProgramEntry(digest, new plt.wescheme.ProgramDigest(digest));
	    }
	});
    },
			 function() {
			     alert("Could not load list of projects")
			 });
}





jQuery(document).ready(function() {
    loadProgramList();
});