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
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Share"))
	    .append(jQuery("<span/>").addClass("ProgramDelete").text("Delete")));
    
    
    sharedListUl.append(
	jQuery("<li/>").addClass("EntryHeader")
	    .append(jQuery("<span/>").addClass("ProgramTitle").text("Program Title"))
	    .append(jQuery("<span/>").addClass("ProgramModified").text("Last Modified"))
	    .append(jQuery("<span/>").addClass("ProgramPublished").text("Sharing URL")));
    

    var addProgramEntry = function(digest) {

	// The program entry
	var programEntry = (jQuery("<li/>").addClass("ProgramEntry"));

	var title = digest.find("title").text();

	var form = (jQuery("<form/>")
		    .attr("method", "post")
		    .attr("action",   "/openEditor")
		    .append(jQuery("<input/>")
			    .addClass("ProgramTitle")
			    .attr("type", "submit")
			    .attr("value", digest.find("title").text()))
		    .append(jQuery("<input/>")
			    .attr("type", "hidden")
			    .attr("name", "pid")
			    .attr("value", digest.find("id").text())));
	var modifiedSpan = (jQuery("<span/>")
			    .text(prettyPrintDate(digest.find("modified").text()))
			    .addClass("ProgramModified"));
	var shareSpan = (jQuery("<span/>")
			 .addClass("ProgramPublished")
			 .append(jQuery("<img class='button' src='/css/images/share.png'/>")));
	var deleteSpan = (jQuery("<span/>")
			  .addClass("ProgramDelete")
			  .append(jQuery("<img class='button' src='/css/images/delete.png'/>")));

	(programEntry
	 .append(form)
	 .append(modifiedSpan)
	 .append(shareSpan)
	 .append(deleteSpan));
	
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
			    .attr("type", "submit")
			    .attr("value", digest.find("title").text())));
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
		//addSharedEntry(digest);
	    } else {
		addProgramEntry(digest);
	    }
	});

    };
    jQuery.ajax({cache: false,
		 data: {},
		 dataType: "xml",
		 type: "GET",
		 url: "/listProjects",
		 success: callback,
		 xhr: function(settings) { return new XMLHttpRequest(settings); }
		});
}



// prettyPrintDate: string -> string
function prettyPrintDate(modified) {
    var modifiedDate = new Date();
    modifiedDate.setTime(parseInt(modified));


    var day = modifiedDate.getUTCDate();
    var month = modifiedDate.getUTCMonth() + 1;
    var year = modifiedDate.getFullYear();
    var time = (((modifiedDate.getHours() % 12) == 0 ?
		 12 :
		 (modifiedDate.getHours() % 12))
		+ ":" 
		+ modifiedDate.getMinutes()
		+ (modifiedDate.getHours() >= 12 ? "pm" : "am" ));
    return day + "/" + month + "/" + year + ", " + time;
//     var day = (["Sunday", "Monday", "Tuesday", "Wednesday",
// 		"Thursday", "Friday", "Saturday"]
// 	       [modifiedDate.getDay()]);
//     var month = (["January", "February", "March", "April",
// 		  "May", "June", "July", "August", "September",
// 		  "October", "November", "December"]
// 		 [modifiedDate.getMonth()]);

//     return (day + ", " + month + " " + modifiedDate.getDate() + ", "
// 	    + modifiedDate.toLocaleTimeString());
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