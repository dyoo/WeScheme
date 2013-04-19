goog.provide("plt.wescheme.AjaxActions");


goog.require('plt.wescheme.Program');

// if (typeof (plt) === 'undefined') {
//     this.plt = {};
// }
// if (typeof (plt.wescheme) === 'undefined') {
//     this.plt.wescheme = {};
// }



(function() {
    plt.wescheme.AjaxActions = function() {}


    // loadProject: number (jquery -> void) (-> void)
    plt.wescheme.AjaxActions.prototype.loadProject = function(pid, publicId, onSuccess, onFailure) {
	var pid;
	if (pid) {
	    data = { pid: pid };
	} else {
	    data = { publicId: publicId };
	}
        // to prevent caching:
        data.gensym = Math.random();
	jQuery.ajax({cache : false,
  		     data : data,
  		     dataType: "json",
  		     type: "GET",
  		     url: "/loadProject",
  		     success: function(json) {
			 onSuccess(new plt.wescheme.Program(json));
		     },
  		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    };


    // listProjects: (jquery -> void) -> void
    plt.wescheme.AjaxActions.prototype.listProjects = function(onSuccess, onFailure) {
	var callback = function(data) {
	    var dom = jQuery(data);
	    onSuccess(dom);
	};
        var data = {};
        // to prevent caching:
        data.gensym = Math.random();
	jQuery.ajax({cache: false,
		     data: data,
		     dataType: "xml",
		     type: "GET",
		     url: "/listProjects",
		     success: callback,
		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    };



    // runTheCompiler: number (-> void) (-> void) -> void
    // Drives the compiler.
    plt.wescheme.AjaxActions.prototype.runTheCompiler = function(pid, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/build",
  		     success: function(data) {
			 onSuccess();
		     },
  		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    };



    // makeAClone: number (string | null) (number -> void) (-> void) -> void
    // Clones a program.  If code is non-null, also update the code source of the
    // clone.
    plt.wescheme.AjaxActions.prototype.makeAClone = function(pid, code, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : (code === null ? {pid: pid}: { pid: pid, code: code }),
  		     dataType: "text",
  		     type: "POST",
  		     url: "/cloneProject",
  		     success: function(data) {
			 var newPid = parseInt(data);
			 onSuccess(newPid);
		     },
		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     }, 
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    };




    // share: number boolean (-> void) (-> void) -> void
    // Shares a program.
    // Sets the published flag on a program.
    plt.wescheme.AjaxActions.prototype.share = function(pid, isPublic, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid,
			      isPublic: isPublic },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/shareProject",
  		     success: function(data) {
			 onSuccess(jQuery(data));
		     },
  		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     }, 
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
  		    });
    };


    // deleteProject: number (program -> void) (-> void) -> void
    // Deletes a program.
    plt.wescheme.AjaxActions.prototype.deleteProject = function(pid, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/deleteProject",
  		     success: function(data) {
			 onSuccess(jQuery(data));
		     },
  		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     }, 
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
  		    });
    };




    // save: { pid : (U undefined number),
    //         title: string,
    //         code: string,
    //         notes: string },
    //       (number -> void) (-> void) -> void
    // Does a save.
    plt.wescheme.AjaxActions.prototype.save = function(attrs, onSuccess, onFailure) {
        var i;
	var data = {};
        var attrNames = ['title', 'code', 'notes'];
	if (attrs.pid) {
	    data.pid = attrs.pid;
        }
        for (i=0; i < attrNames.length; i++) {
            if (attrs.hasOwnProperty(attrNames[i])) {
                data[attrNames[i]] = attrs[attrNames[i]];
            }
        }
	jQuery.ajax({cache : false,
  		     data : data,
  		     dataType: "text",
  		     type: "POST",
  		     url: "/saveProject",
  		     success: function(data) {
			 var newPid = data; //// Changed from parseInt()
			 onSuccess(newPid);
		     },
		     error: function(xhr) {
			 onFailure(xhr.statusText);
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    };


    // string string string (-> void) -> void
    // Asynchronously record feedback from the author.
    plt.wescheme.AjaxActions.prototype.sendFeedback = function(author, type, feedbackText, onSuccess) {
	jQuery.ajax({cache : false,
  		     data : {author : author,
                             type : type,
                             feedbackText : feedbackText },
                     datatype: "text",
                     type: "POST",
                     url: "/addFeedback",
                     success: function(data) {
                         onSuccess();
                     },
                     error: function(xhr) {
                         onSuccess();
                     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
                    });

    };

})();
