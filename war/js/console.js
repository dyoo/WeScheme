goog.require('goog.ui.AdvancedTooltip');
goog.require('goog.dom');
goog.require('plt.wescheme.AjaxActions');


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
			    .text(prettyPrintDate(digest.children("modified").text()))
			    .addClass("ProgramModified"));

	var shareSpan =(hasSharingUrls(digest) ? 
			(jQuery("<span/>")
			 .addClass("ProgramPublished")
			 .append(jQuery("<img class='button' src='/css/images/share.png'/>"))) 
			:
			(jQuery("<span/>")
			 .addClass("ProgramPublished")
			 .append(jQuery("<img class='button' src='/css/images/share-decolored.png'/>"))));

	attachSharingPopupTooltip(shareSpan.get(0), digest);

	(programEntry
	 .append(form)
	 .append(modifiedSpan)
	 .append(shareSpan)
	 //.append(deleteSpan)
	);
	
	programListUl.append(programEntry);
    };



    var hasSharingUrls = function(digest) {
	return digest.find('sharedAs *').length > 0;
    }



    var attachSharingPopupTooltip = function(parent, digest) {
	var tooltip = new goog.ui.AdvancedTooltip(parent);
	tooltip.className = 'tooltip';
	if (hasSharingUrls(digest)) {
	    tooltip.setHtml(
		"<h2>Program sharing</h2>" +
		    "This program has been shared.", true);
	    var aList = goog.dom.createElement("ul");
	    digest.find('sharedAs Entry').each(function(i,elt) {
		var item = goog.dom.createElement("li");
		aList.appendChild(item);
		item.appendChild(makeShareUrl(jQuery(elt).children('publicId').text(),
					      jQuery(elt).children('title').text()));
		item.appendChild(goog.dom.createTextNode(
		    " [" + prettyPrintDate(jQuery(elt).children('modified').text()) + "]"));
	    });
	    goog.dom.appendChild(tooltip.getElement(), aList);

	} else {
	    tooltip.setHtml(
		"<h2>Program sharing</h2>" +
		    "This program has not been shared yet.", true);
	}
	tooltip.setHotSpotPadding(new goog.math.Box(5, 5, 5, 5));
	tooltip.setCursorTracking(true);
	tooltip.setMargin(new goog.math.Box(100, 0, 0, 100));
	tooltip.setHideDelayMs(250);

    }





    var actions = new plt.wescheme.AjaxActions();
    actions.listProjects(function(dom) {
	dom.find("ProgramDigest").each(function() {	
	    var digest = jQuery(this);


	    if (digest.find("published").text() == 'true') {
		// skip it
	    } else {
		addProgramEntry(digest);
	    }
	});
    },
			 function() {
			     alert("Could not load list of projects")
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


// makeShareUrl: string -> element
// Produces the sharing url
function makeShareUrl(publicId, name) {
    if (publicId != "") {
	var a = goog.dom.createElement("a");
	a.href = "/view?publicId=" + encodeURIComponent(publicId);
	a.appendChild(goog.dom.createTextNode(name || a.href));
	return a;
    } else {
	throw new Error();
    }
}



jQuery(document).ready(function() {
    loadProgramList();
});