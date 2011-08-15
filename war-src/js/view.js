// Main entry for viewing a program, to show either its source
// or a running program.

goog.require('plt.wescheme.helpers');
goog.require('plt.wescheme.Program');
goog.require('plt.wescheme.AjaxActions');


$(document).ready(
    function() {    
        // Add the social bookmarks, too.
        jQuery("#socialBookmarks").append(
	    jQuery(
	        plt.wescheme.helpers.generateSocialBookmarks(
		    myProgram.getTitle(), 
		    plt.wescheme.helpers.makeShareUrl(publicId))))
    });
    


