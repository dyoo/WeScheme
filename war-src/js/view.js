// Main entry for viewing a program, to show either its source
// or a running program.

goog.require('plt.wescheme.helpers');
goog.require('plt.wescheme.Program');
goog.require('plt.wescheme.AjaxActions');


$(document).ready(
    function() {    
        var title = $("title").text();
        var publicId = $("#publicId").text();

        // Add the social bookmarks, too.
        $("#socialBookmarks").append(
	    $(plt.wescheme.helpers.generateSocialBookmarks(
		title, 
		plt.wescheme.helpers.makeShareUrl(publicId))))
        $("#bottomMessage").show();
    });
