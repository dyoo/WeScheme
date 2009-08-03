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
		var idDiv = (jQuery("<div/>").text(digest.find("id").text())
			     .addClass("ProgramId"));
		var titleDiv = (jQuery("<div/>").text(digest.find("title").text())
				.addClass("ProgramTitle"));
		var modifiedDiv = (jQuery("<div/>").text(digest.find("modified").text())
				   .addClass("ProgramModified"));
		var newEntry = (jQuery("<li/>")
				.append(jQuery("<a/>")
					.append(titleDiv)
					.append(idDiv)
					.append(modifiedDiv)
					.attr("href", "/openEditor?pid=" + digest.find("id").text()))
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