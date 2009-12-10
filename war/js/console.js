goog.require('goog.ui.AdvancedTooltip');
goog.require('goog.dom');

goog.require('plt.wescheme.AjaxActions');
goog.require('plt.wescheme.SharingDialog');
goog.require("plt.wescheme.ProgramDigest");
goog.require("plt.wescheme.helpers");




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

	var img = (aProgramDigest.hasSharingUrls() ?
		   jQuery("<img class='button' src='/css/images/share.png'/>") :
		   jQuery("<img class='button' src='/css/images/share-decolored.png'/>"));
	img.click(function() {
	    var onSuccess = function(shared) {
		loadProgramList();
	    };
	    (new plt.wescheme.SharingDialog(id, null)).show(onSuccess);
	});
	var shareSpan =(jQuery("<span/>")
			.addClass("ProgramPublished")
			.append(img));

	attachSharingPopupTooltip(shareSpan.get(0), digest, aProgramDigest);

	(programEntry
	 .append(form)
	 .append(modifiedSpan)
	 .append(shareSpan)
	);
	
	programListUl.append(programEntry);
    };



    var hasSharingUrls = function(digest) {
	return digest.find('sharedAs Entry').length > 0;
    }



    var attachSharingPopupTooltip = function(parent, digest, aProgramDigest) {
	var tooltip = new goog.ui.AdvancedTooltip(parent);
	tooltip.className = 'tooltip';
	if (aProgramDigest.hasSharingUrls()) {
	    tooltip.setHtml(
		"<h2>Program sharing</h2>" +
		    "This program has been shared.", true);
	    var aList = goog.dom.createElement("ul");
	    var entries = aProgramDigest.getSharedAsEntries();
	    // We'll just look at the first one.
	    var elt = entries[0];
	    var item = goog.dom.createElement("li");
	    aList.appendChild(item);
	    var title = elt.title;
	    var anchor = makeShareAnchor(elt.publicId, elt.title);
	    item.appendChild(anchor);
	    item.appendChild(goog.dom.createTextNode(
		" [" + plt.wescheme.helpers.prettyPrintDate(elt.modified) + "]"));
	    item.appendChild(plt.wescheme.helpers.generateSocialBookmarks(
		title, anchor.href));
	    goog.dom.appendChild(tooltip.getElement(), aList);

	} else {
	    tooltip.setHtml(
		"<h2>Program sharing</h2>" +
		    "This program has not been shared yet.  Click the share icon to share it.", true);
	}
	tooltip.setHotSpotPadding(new goog.math.Box(5, 5, 5, 5));
	tooltip.setCursorTracking(true);
	tooltip.setHideDelayMs(250);

    }






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



// makeShareUrl: string -> element
// Produces the sharing url
function makeShareAnchor(publicId, name) {
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