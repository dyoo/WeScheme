// The code for the run page.  This has most of the evaluator from
// openEditor, but stripped down since it does not need to support
// interactive evaluation.

goog.require("plt.wescheme.AjaxActions");
goog.require("plt.wescheme.WeSchemeProperties");
goog.require("plt.wescheme.makeDynamicModuleLoader");
goog.require("plt.wescheme.RoundRobin");
goog.provide("plt.wescheme.runner");

(function() {


    var Runner = function(compilationServerUrl, interactionsDiv) {
        var that = this;
        this.interactionsDiv = jQuery(interactionsDiv);
        this.evaluator = new Evaluator({
	    write: function(thing) {
	        that.addToInteractions(thing);
	    },
	    compilationServletUrl: compilationServerUrl
        });
        this.evaluator.setImageProxy("/imageProxy");
        this.evaluator.setRootLibraryPath("/js/mzscheme-vm/collects");
        this.evaluator.setDynamicModuleLoader(
            plt.wescheme.makeDynamicModuleLoader("/js/mzscheme-vm/collects"));
    };


    Runner.prototype.runCompiledCode = function(compiledCode, permStringArray) {
        var that = this;
        var onSuccessRun = function() {
        };
        var onFailRun = function(exn) {
	    that.renderErrorAsDomNode(exn);
        };
        this.evaluator.executeCompiledProgram((0,eval)('(' + compiledCode + ')'),
					      onSuccessRun,
					      onFailRun);
    };


    Runner.prototype.runSourceCode = function(title, sourceCode, permStringArray) {
        var that = this;
        var onSuccessRun = function() {
        };
        var onFailRun = function(exn) {
	    that.renderErrorAsDomNode(exn);
        };
        this.evaluator.executeProgram(title,
                                      sourceCode,
				      onSuccessRun,
				      onFailRun);
    };



    // Returns if x is a dom node.
    function isDomNode(x) {
        return (x.nodeType != undefined);
    }


    Runner.prototype.addToInteractions = function (interactionVal) {
        if (isDomNode(interactionVal)) {
	    this.interactionsDiv.append(interactionVal);
        } else {
	    var newArea = jQuery("<div style='width: 100%'></div>");
	    newArea.text(interactionVal);
	    this.interactionsDiv.append(newArea);
        }
        this.interactionsDiv.attr("scrollTop", this.interactionsDiv.attr("scrollHeight"));
    };



    // renderErrorAsDomNode: exception -> element
    // Given an exception, produces error dom node to be displayed.
    Runner.prototype.renderErrorAsDomNode = function(err) {
        var msg = this.evaluator.getMessageFromExn(err);

        var dom = document.createElement('div');
        dom['class'] = 'moby-error';

        var msgDom = document.createElement('div');
        msgDom['class'] = 'moby-error:message';
        msgDom.appendChild(document.createTextNode(msg));
        dom.appendChild(msgDom);

        var stacktrace = this.evaluator.getTraceFromExn(err);
        for (var i = 0; i < stacktrace.length; i++) {
	    dom.appendChild(document.createTextNode("at: line " + stacktrace[i].line + 
						    ", column " + stacktrace[i].column));
        }

        return dom;
    };


    // Configures the evaluator to use round-robin compilation between
    // a set of servers.  Compilation will also fall back to other
    // servers under network failure.
    var initializeRoundRobinCompilation = function(evaluator, after) {
        var that = this;
        // Initializes the evaluator to use round-robin compilation, given a list of
        // servers.
        var compilation_servers = plt.wescheme.WeSchemeProperties.compilation_servers.split(/\s+/);
        plt.wescheme.RoundRobin.initialize(
            compilation_servers,
            function() {
                evaluator.setCompileProgram(
                    plt.wescheme.RoundRobin.roundRobinCompiler);
                after();
            },
            function() {
                // Under this situation, all compilation servers are inaccessible.
                evaluator.setCompileProgram(plt.wescheme.RoundRobin.roundRobinCompiler);
                alert("WeScheme appears to be busy or unavailable at this time." +
                      "  Please try again later.");
                after();
            });
    };




    function init(compilationServerUrl, publicId) { 
        var runner = 
	    new Runner(compilationServerUrl, document.getElementById('interactions'));
        var afterLoad = function(aProgram) {
	    var title = aProgram.getTitle();
	    var programCode = aProgram.getObjectCode();
	    var sourceCode = aProgram.getSourceCode();
	    var permissions = aProgram.getPermissions();
            
            var j = jQuery("#interactions");


            var supportsFullScreen = function() {
                var elem = document.createElement('div');
                return ((elem.webkitRequestFullscreen ||
                         elem.mozRequestFullScreen || 
                         elem.requestFullscreen) !== undefined);
            };

            var toggleFullscreen = function() {
                var elem;
                if (j.find("canvas").length == 1) {
                    elem = j.find("canvas").get(0);
                } else {
                    elem = j.get(0);
                }
                if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else {
                    if (elem.mozRequestFullScreen) {
                        elem.mozRequestFullScreen();
                    } else {
                        elem.requestFullscreen();
                    }
                }
            };
            if(supportsFullScreen()) {
                jQuery("<div><img src='/images/fullscreen.png' width='16' height='16'></div>")
                    .css("float", "right")
                    .css("cursor", "auto")
                    .click(toggleFullscreen)
                    .appendTo(j);
            }

            // Change the title of the document to that of the program.
            document.title = title;
            if (programCode) {
	        runner.runCompiledCode(programCode, permissions);
            } else  {


                ///
                // FIXME: add call to queue/retrieve a server-side compilation here.
                ///
                // Only do this if we have no other choice.
                initializeRoundRobinCompilation(runner.evaluator,
                                                function() {
	                                            runner.runSourceCode(title, sourceCode, permissions);
                                                });
            }
        };
        new plt.wescheme.AjaxActions().loadProject(
            null, publicId, afterLoad, function() { alert("unable to load program"); });
    }


    plt.wescheme.runner.Runner = Runner;
    plt.wescheme.runner.init = init;
}());
