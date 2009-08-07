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

		var idDiv = (jQuery("<div/>").text(digest.find("id").text())
			     .addClass("ProgramId"));
		var titleDiv = (jQuery("<div/>").text(digest.find("title").text())
				.addClass("ProgramTitle"));
		var modifiedDiv = (jQuery("<div/>").text("Last modified: " + modifiedDate.toTimeString())
				   .addClass("ProgramModified"));
		var form = (jQuery("<form/>")
			    .attr("method", "post")
			    .attr("action",   "/openEditor?pid=" + 
				  digest.find("id").text())
			    .append(jQuery("<input/>")
				    .attr("value", "Open")
				    .attr("type", "submit")));
		var newEntry = (jQuery("<li/>")
				.append(jQuery("<div/>")
					.append(titleDiv)
					.append(idDiv)
					.append(modifiedDiv)
					.append(form))
				.addClass("ProgramEntry"));
		programListDiv.append(newEntry);

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