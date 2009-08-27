function loadProgramList() {
    var programListDiv = jQuery("#programList");
    if (programListDiv.length > 0) {
	programListDiv.empty();

	var data = {};
	var type = "xml";
	var callback = function(data) {
	    var dom = jQuery(data);
	    dom.find("ProgramDigest").each(function() {	
		var digest = jQuery(this);

		var modifiedDate = new Date();
		modifiedDate.setTime(parseInt(digest.find("modified").text()));

		// The program entry
		var programEntry = (jQuery("<li/>").addClass("ProgramEntry"));

		var form = (jQuery("<form/>")
			    .attr("method", "post")
			    .attr("action",   "/openEditor?pid=" + 
				  digest.find("id").text())
			    .append(jQuery("<input/>")
				    .addClass("ProgramTitle")
				    .attr("value", digest.find("title").text())
				    .attr("type", "submit")));
		var idDiv = (jQuery("<div/>").text(digest.find("id").text())
			     .addClass("ProgramId"));
		var modifiedDiv = (jQuery("<div/>").text("Last modified: " + modifiedDate.toTimeString())
				   .addClass("ProgramModified"));
		var publishedDiv = (jQuery("<div/>").text(digest.find("published").text())
				    .addClass("ProgramPublished"));
		(programEntry
		 .append(form)
		 .append(idDiv)
		 .append(modifiedDiv)
		 .append(publishedDiv));
		 
		programListDiv.append(programEntry);

	    });

	};
	jQuery.get("/listProjects", data, callback, type);
    } else {
	// Do nothing: the user isn't logged in yet.
    }
}



jQuery(document).ready(function() {
    loadProgramList();
});