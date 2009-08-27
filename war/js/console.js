function loadProgramList() {
    var programListDiv = jQuery("#programList");

    programListDiv.empty();
    var listUl = jQuery("<ul/>");
    programListDiv.append(listUl);

    // Header
    listUl.append(
	jQuery("<li/>").addClass("EntryHeader")
	    .append(jQuery("<span/>").addClass("ProgramTitle").text("Program Title"))
	    .append(jQuery("<span/>").addClass("ProgramId").text("Program ID"))
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Published?")));

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
	    var idSpan = (jQuery("<span/>").text(digest.find("id").text())
			 .addClass("ProgramId"));
	    var modifiedSpan = (jQuery("<span/>").text("Last modified: " + modifiedDate.toTimeString())
			       .addClass("ProgramModified"));
	    var publishedSpan = 
		digest.find("published").text() == 'true' ?
		(jQuery("<span/>")
		 .append(jQuery("<a/>")
			 .attr("href",
			       makeShareUrl(
				   digest.find("publicId").text()))
			 .text(makeShareUrl(
			     digest.find("publicId").text())))
		 .addClass("ProgramPublished"))
		:
		(jQuery("<span/>").text("Unshared")
		 .addClass("ProgramPublished"));
	    (programEntry
	     .append(form)
	     .append(idSpan)
	     .append(modifiedSpan)
	     .append(publishedSpan));
	    
	    listUl.append(programEntry);

	});

    };
    jQuery.get("/listProjects", {}, callback, "xml");
}



// makeShareUrl: string -> string
// Produces the sharing url
function makeShareUrl(publicId) {
    if (publicId != "") {
	var a = document.createElement("a");
	a.href = "/view?publicId=" + encodeURIComponent(publicId);
	return a.href; 
    }
}



jQuery(document).ready(function() {
    loadProgramList();
});