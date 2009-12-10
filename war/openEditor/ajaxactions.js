goog.provide("plt.wescheme.AjaxActions");

(function() {

    plt.wescheme.AjaxActions = function() {
    }


    // loadAProject: number (jquery -> void) (-> void)
    AjaxActions.prototype.loadAProject = function(pid, publicId, onSuccess, onFailure) {
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
			 onSuccess(jQuery(dom));
		     },
  		     error: function() {
			 onFailure();
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    }


    // runTheCompiler: number (-> void) (-> void) -> void
    // Drives the compiler.
    AjaxActions.prototype.runTheCompiler = function(pid, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/build",
  		     success: function(data) {
			 onSuccess();
		     },
  		     error: function() {
			 onFailure();
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    }



    // makeAClone: number string (number -> void) (-> void) -> void
    // Clones a program.
    AjaxActions.prototype.makeAClone = function(pid, code, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid, code: code },
  		     dataType: "text",
  		     type: "POST",
  		     url: "/cloneProject",
  		     success: function(data) {
			 var newPid = parseInt(data);
			 onSuccess(newPid);
		     },
		     error: function() {
			 onFailure();
		     }, 
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    }




    // share: number boolean (-> void) (-> void) -> void
    // Shares a program.
    // Sets the published flag on a program.
    AjaxActions.prototype.share = function(pid, isPublic, onSuccess, onFailure) {
	jQuery.ajax({cache : false,
  		     data : { pid: pid,
			      isPublic: isPublic },
  		     dataType: "xml",
  		     type: "POST",
  		     url: "/shareProject",
  		     success: function(data) {
			 onSuccess(jQuery(data));
		     },
  		     error: function() {
			 // FIXME
			 onFailure();
		     }, 
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
  		    });
    }



    // save: (U undefined number) string string (number -> void) (-> void) -> void
    // Does a save.
    AjaxActions.prototype.save = function(pid, title, code, onSuccess, onFailure) {
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
		     error: function() {
			 onFailure();
		     },
		     xhr: function(settings) { return new XMLHttpRequest(settings); }
		    });
    }
})();