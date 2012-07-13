// Defines an Evaluator class, with the following constructor:
//
//
// Evaluator(options)
//     options: { write: dom -> void,
//                compilationServletUrl: string }

//
// Constructs a new evaluator.
// 
//
// and the main method:
//
//
// Evaluator.prototype.executeProgram: [name string] [program string] [onDone (-> void)] -> void
//
//
// Executes the program with the given name.  When the program is done evaluating,
// calls onDone.
//
//
// Evaluator.prototype.requestBreak: -> void
//
// Triggers scheme evaluation to raise an exn:break.
//
//
// Evaluator.prototype.executeCompiledProgram: bytecode (-> void) (exn -> void) -> void 
//
// Execute a compiled program, given the bytecode already.
//
//
//
// Evaluator.prototype.getMessageFromExn
//
// Evaluator.prototype.getStackTraceFromExn
//
// 




var Evaluator = (function() {

    var DEFAULT_COMPILATION_SERVLET_URL = "/servlets/standalone.ss";


    var Evaluator = function(options) {
	var that = this;

	if (options.write) {
	    this.write = options.write;
	} else {
	    this.write = function(dom) {
	    };
	}

	if (options.compilationServletUrl) {
	    this.compilationServletUrl = options.compilationServletUrl;
	} else {
	    this.compilationServletUrl = DEFAULT_COMPILATION_SERVLET_URL;
	}

	if (options.transformDom) {
	    this.transformDom = options.transformDom;
	} else {
	    this.transformDom = function(dom) {
		if (helpers.isLocationDom(dom)) {
		    dom = rewriteLocationDom(dom);
		}
		return dom;
	    }
	}



	this.aState = new state.State();

	this.aState.setPrintHook(function(thing) {
	    var dom = types.toDomNode(thing);
	    dom = that.transformDom(dom);
	    that.write(dom);
	    helpers.maybeCallAfterAttach(dom);
	});
		

	this.aState.setDisplayHook(function(aStr) {
	    var dom = document.createElement("span");
            dom.style.whiteSpace = "pre";
	    dom.style.fontFamily = "monospace";
            var chunks = aStr.split("\n");
            if (chunks.length > 0) {
                dom.appendChild(document.createTextNode(chunks[0]));
            }
            var newlineDiv;
            var i;
            for (i = 1; i < chunks.length; i++) {
                newlineDiv = document.createElement("br");
                newlineDiv.style.clear = 'left';
                dom.appendChild(newlineDiv);
                dom.appendChild(document.createTextNode(chunks[i]));
            }
	    dom = that.transformDom(dom);
	    that.write(dom);	
	    helpers.maybeCallAfterAttach(dom);
	});
	
	this.aState.setToplevelNodeHook(function() {
	    // KLUDGE: special hook to support jsworld.
	    return that.makeToplevelNode();
	});


        this.aState.hooks.dynamicModuleLoader = function(aName, onSuccess, onFail) {
            that.dynamicModuleLoader(aName, onSuccess, onFail);
        };

        this.dynamicModuleLoader = function(aName, onSuccess, onFail) {
            loadScript(that.rootLibraryPath + "/" + aName + ".js",
                       onSuccess,
                       onFail);
        };

        this.rootLibraryPath = "/collects";
    };

    Evaluator.prototype.setImageProxy = function(proxy) {
	this.aState.setImageProxyHook(proxy);
    };

    Evaluator.prototype.setRootLibraryPath = function(path) {
        this.rootLibraryPath = path;
    };

    Evaluator.prototype.setDynamicModuleLoader = function(loader) {
        this.dynamicModuleLoader = loader;
    };


    // Toplevel nodes are constructed for world programs.
    Evaluator.prototype.makeToplevelNode = function() {
	var innerDom = document.createElement("div");
	var dom = document.createElement("div");
	dom.appendChild(innerDom);
	this.write(dom);	
	helpers.maybeCallAfterAttach(dom);
	return innerDom;
    };


    Evaluator.prototype.requestBreak = function() {
	this.aState.requestBreak();
    };



    var rewriteLocationDom = function(dom) {
	var newDom = document.createElement("span");
	var children = dom.children;
	var line, column, id;
	for (var i = 0; i < children.length; i++) {
	    if (children[i]['className'] === 'location-id') {
		id = children[i].textContent;
	    }
	    if (children[i]['className'] === 'location-offset') {
		// ignore for now
	    }
	    if (children[i]['className'] === 'location-line') {
		line = children[i].textContent;
	    }
	    if (children[i]['className'] === 'location-column') {
		column = children[i].textContent;
	    }
	    if (children[i]['className'] === 'location-span') {
		// ignore for now
	    }
	}
        newDom.appendChild(document.createElement("br"));
	newDom.appendChild(document.createTextNode('at line: ' + line + ', column: ' + column + ', in ' + id));
	return newDom;
    };



    // executeProgram: string string (-> void) (exn -> void) -> void
    Evaluator.prototype.executeProgram = function(programName, code,
						  onDone,
						  onDoneError) {
	var that = this;
        this.compileProgram(programName, code,
                            function(responseText) {
		                that._onCompilationSuccess(eval('(' + responseText + ')'), 
					                   onDone, onDoneError);
                            },
                            function(responseErrorText) {
		                that._onCompilationFailure(JSON.parse(responseErrorText),
					                   onDoneError);
                            })
    };



    // Under environments that need to customize the compiler, we provide a setter
    // for compileProgram:
    Evaluator.prototype.setCompileProgram = function(compileProgram) {
        this.compileProgram = compileProgram;
    };


    // The default value for it is:
    // compileProgram: string string (string -> any) (string -> any) -> void
    // Runs the compiler on the given program.
    Evaluator.prototype.compileProgram = function(programName, code, onDone, onDoneError) {
	var that = this;
	var params = encodeUrlParameters({'name': programName,
					  'program': code,
					  'compiler-version' : '1'});
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4) {
		if (xhr.status === 200) {
                    onDone(xhr.responseText);
		} else {
                    onDoneError(xhr.responseText);
		}
	    }
	};
	xhr.open("POST", this.compilationServletUrl, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);
    };


    Evaluator.prototype.executeCompiledProgram = function(compiledBytecode,
							  onDoneSuccess, onDoneFail) {
	this.aState.clearForEval();
	try {
	    interpret.load(compiledBytecode, this.aState);
	} catch(e) {
	    onDoneFail(e);
	    return;
	}
	interpret.run(this.aState, onDoneSuccess, onDoneFail);
    };


    var encodeUrlParameters = function(hash) {
	var chunks = [];
	for (var key in hash) {
	    if (hash.hasOwnProperty(key)) {
		chunks.push(encodeURIComponent(key) +"="+ encodeURIComponent(hash[key]));
	    }
	}
	return chunks.join('&');
    };
        

	



    Evaluator.prototype.getTraceFromExn = function(exn) {
	if (types.isSchemeError(exn)) {
	    var errorValue = exn.val;
	    if (types.isExn(errorValue)) {
		if (types.exnContMarks(errorValue)) {
		    return getTraceFromContinuationMarks(
			types.exnContMarks(errorValue));
		}
	    } else {
		return [];
	    }
	} else if (types.isInternalError(exn)) {
	    return getTraceFromContinuationMarks(exn.contMarks);
	}	
	return [];
    };


    var getTraceFromContinuationMarks = function(contMarkSet) {
	return state.getStackTraceFromContinuationMarks(contMarkSet);
    };



    var isEqualHash = function(hash1, hash2) {
	for (var key in hash1) {
	    if (hash1.hasOwnProperty(key)) {
		if (hash2.hasOwnProperty(key)) {
		    if (hash1[key] !== hash2[key]) {
			return false;
		    }
		} else {
		    return false;
		}
	    }
	}
	for (var key in hash2) {
	    if (hash2.hasOwnProperty(key)) {
		if (hash1.hasOwnProperty(key)) {
		    if (hash1[key] !== hash2[key]) {
			return false;
		    }
		} else {
		    return false;
		}
	    }
	}
	return true;
    };


    Evaluator.prototype.getMessageFromExn = function(exn) {
	if (typeof(exn) === 'undefined') {
	    // We should never get here
	    return 'internal undefined error';
	} else if (types.isSchemeError(exn)) {
	    var errorValue = exn.val;
	    if (types.isExn(errorValue)) {
		return types.exnMessage(errorValue);
	    } else {
		return errorValue + '';
	    }
	} else if (types.isInternalError(exn)) {
	    return exn.val + '';
	} else if (exn.nodeType) {
	    return exn;
	} else {
	    return exn.message;
	}
    };



    Evaluator.prototype._onCompilationSuccess = function(compiledBytecode,
							 onDoneSuccess,
							 onDoneFail) {
	this.executeCompiledProgram(compiledBytecode, onDoneSuccess, onDoneFail);
    };
    



    // The type of errorValue is either
    //
    // A string, or
    //
    // A structure of the form { type: "exn:fail:read",
    //                           message: string,
    //                           srclocs: [srcloc]}
    //
    // where each srcloc is of the form
    // { type: "srcloc",
    //   source: string
    //   line: number,
    //   column: number,
    //   position: number,
    //   span: number
    // }

    Evaluator.prototype._onCompilationFailure = function(errorValue, onDoneError) {
	if (typeof(errorValue) === 'string') {
	    onDoneError(new Error(errorValue));
	} else if (typeof(errorValue) === 'object') {
	    onDoneError(this._convertErrorValue(errorValue));
	} else {
	    onDoneError(new Error(errorValue));
	}
    };


    Evaluator.prototype._convertErrorValue = function(errorValue) {
	if (errorValue.type && errorValue.type === 'exn:fail:read') {
	    return new Error(errorValue.message);
	} else if (errorValue.type && errorValue.type === 'moby-failure') {
	    var domMessage = this._convertDomSexpr(errorValue['dom-message']);
            var structuredError = errorValue['structured-error'];
	    return new ErrorWithDomMessage(domMessage, structuredError);
	}
	return new Error(errorValue + '');
    };


    var ErrorWithDomMessage = function(domMessage, structuredError) {
	this.message = domMessage.textContent || domMessage.innerText;
	this.domMessage = domMessage;
	this.structuredError = JSON.parse(structuredError);
    };



    // convertDomSexpr: dom-sexpr -> dom-sexpr
    // Converts the s-expression (array) representation of a dom element.
    Evaluator.prototype._convertDomSexpr = function(domSexpr) {
	if (typeof(domSexpr) === 'number' ||
	    typeof(domSexpr) === 'string') {
	    var aSpan = document.createElement('span');
	    aSpan.appendChild(document.createTextNode(domSexpr + ''));
	    return aSpan;
	} else if (typeof (domSexpr) === 'object') {
	    var anElt = document.createElement(domSexpr[0]);
	    var attrs = domSexpr[1];
	    for (var i = 0 ; i < attrs.length; i++) {
		if (attrs[i][0] === 'style') {
		    anElt.style.cssText = attrs[i][1];
		} else if (attrs[i][0] === 'class') {
		    anElt.className = attrs[i][1];
		} else {
		    anElt[attrs[i][0]] = attrs[i][1]; 
		}
	    }	    
	    var children = domSexpr.splice(2);
	    for (var i = 0; i < children.length; i++) {
		anElt.appendChild(this._convertDomSexpr(children[i]));
	    }
	    // Note: we're calling transformDom here as a hook to allow
	    // the editor to rewrite any location doms as anchors to 
	    // interact with the editor.
	    return this.transformDom(anElt);
	} else {
	    return domSexpr;
	}
    };






    return Evaluator;
})();

