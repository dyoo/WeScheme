function loadProgramList() {
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
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified")));
    
    
    sharedListUl.append(
	jQuery("<li/>").addClass("EntryHeader")
	    .append(jQuery("<span/>").addClass("ProgramTitle").text("Program Title"))
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Sharing URL")));
    

    var addProgramEntry = function(digest) {

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
	var modifiedSpan = (jQuery("<span/>").text(prettyPrintDate(digest.find("modified").text()))
			    .addClass("ProgramModified"));
	(programEntry
	 .append(form)
	 .append(modifiedSpan));
	
	programListUl.append(programEntry);
    };



    var addSharedEntry = function(digest) {

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
	var modifiedSpan = (jQuery("<span/>").text(prettyPrintDate(digest.find("modified").text()))
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
	 .append(modifiedSpan)
	 .append(publishedSpan));

	sharedListUl.append(programEntry);
    };



    var callback = function(data) {
	var dom = jQuery(data);
	dom.find("ProgramDigest").each(function() {	
	    var digest = jQuery(this);
	    if (digest.find("published").text() == 'true') {
		addSharedEntry(digest);
	    } else {
		addProgramEntry(digest);
	    }
	});

    };
    jQuery.get("/listProjects", {}, callback, "xml");
}



// prettyPrintDate: string -> string
function prettyPrintDate(modified) {
    var modifiedDate = new Date();
    modifiedDate.setTime(parseInt(modified));
    var day = (["Sunday", "Monday", "Tuesday", "Wednesday",
		"Thursday", "Friday", "Saturday"]
	       [modifiedDate.getDay()]);
    var month = (["January", "February", "March", "April",
		  "May", "June", "July", "August", "September",
		  "October", "November", "December"]
		 [modifiedDate.getMonth()]);

    return (day + ", " + month + " " + modifiedDate.getDate() + ", "
	    + modifiedDate.toLocaleTimeString());
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