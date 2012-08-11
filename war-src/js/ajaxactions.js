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


    // loadAProject: number (jquery -> void) (-> void)
    plt.wescheme.AjaxActions.prototype.loadAProject = function(pid, publicId, onSuccess, onFailure) {
	var pid;
	if (pid) {
	    data = { pid: pid };
	} else {
	    data = { publicId: publicId };
	}
	jQuery.ajax({cache : false,
  		     data : data,
  		     dataType: "xml",
  		     type: "GET",
  		     url: "/loadProject",
  		     success: function(dom) {
			 var jDom = jQuery(dom).find("Program");
			 onSuccess(jDom, new plt.wescheme.Program(jDom));
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
	jQuery.ajax({cache: false,
		     data: {},
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




    // save: (U undefined number) string string (number -> void) (-> void) -> void
    // Does a save.
    plt.wescheme.AjaxActions.prototype.save = function(pid, title, code, onSuccess, onFailure) {
	var data;
	if (pid) {
	    data = { pid: pid,
		     title: title,
		     code: code };
	} else {
	    data = { title: title,
		     code: code };
	}
	jQuery.ajax({cache : false,
  		     data : data,
  		     dataType: "text",
  		     type: "POST",
  		     url: "/saveProject",
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