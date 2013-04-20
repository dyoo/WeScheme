/*global goog,jQuery,plt*/
/*jslint browser: true, vars: true, white: true, plusplus: true, maxerr: 50, indent: 4 */
//if (typeof (plt) === 'undefined') {
//this.plt = {};
//}
//if (typeof (plt.wescheme) === 'undefined') {
//this.plt.wescheme = {};
//}

goog.provide("plt.wescheme.WeSchemeInteractions");

goog.require("plt.wescheme.topKeymap");
goog.require("plt.wescheme.WeSchemeTextContainer");
goog.require("plt.wescheme.tokenizer");
goog.require("plt.wescheme.WeSchemeProperties");
goog.require("plt.wescheme.RoundRobin");
goog.require("plt.wescheme.makeDynamicModuleLoader");

var WeSchemeInteractions;

WeSchemeInteractions = (function () {
    'use strict';

    var Prompt, makeFreshId;

    // WeSchemeInteractions: div (WeSchemeInteractions -> void) -> WeScheme
    var WeSchemeInteractions = function(interactionsDiv, afterInit) {
        var that = this;
        this.interactionsDiv = jQuery(interactionsDiv);
        this.interactionsDiv.empty();

        this.resetters = [];

        this.previousInteractionsDiv = document.createElement("div");
        this.previousInteractionsTextContainers = {};
        this.interactionsDiv.append(this.previousInteractionsDiv);
        
        this.withColoredErrorMessages = true;


        new Prompt(
            this,
            this.interactionsDiv,
            function(prompt) {
                that.prompt = prompt;
                makeFreshEvaluator(that, function(e) {
                    that.evaluator = e;
                    that.highlighter = function(id, offset, line, column, span, color) {
                        // default highlighter does nothing.  Subclasses will specialize that.
                    };

                    // Note: When starting a new prompt, the last element of
                    // "historyArray" is always an empty string, and "historyIndex"
                    // is the index of the last element in "historyArray".
                    // When recalling history, the last element of "historyArray"
                    // can be set to the line being edited (if different from the
                    // history it recalls), so that a user can back out of the
                    // history recall to return to the edited line.
                    prompt.historyArray = [""];
                    prompt.historyIndex = 0;
                    prompt.maxSavedHistory = 100;

                    if (afterInit) {
                        afterInit(that);
                    }
                });
            }
        );
    };

    // reset: -> void
    // Clears out the interactions.
    WeSchemeInteractions.prototype.reset = function() {
        var that = this;
        this.notifyBus("before-reset", this);
        var i;
        // We walk the resetters backwards to allow resetters
        // to remove themselves during iteration.
        for (i = that.resetters.length - 1; i>= 0; i--){
            that.resetters[i]();
        }

        silenceCurrentEvaluator(that);
        makeFreshEvaluator(that, function(e) {
            that.evaluator = e;
            jQuery(that.previousInteractionsDiv).empty();
            that.notifyBus("after-reset", that);
            that.prompt.clear();
        })
    };

    // Wrap a callback so that it does not apply if we have reset
    // the console already.
    var withCancellingOnReset = function(that, f) {
        var cancelled = false;
        var onReset = function() { 
            cancelled = true; 
            that.removeOnReset(onReset);
        };
        that.addOnReset(onReset);
        return function() {
            if (cancelled) { return; }
            f.apply(null, arguments);
        };
    };


    WeSchemeInteractions.prototype.disableColoredErrorMessages = function() {
        this.withColoredErrorMessages = false;
    };



    // clearLine: -> void
    // Make sure we're on a line that's clear of any floats.
    WeSchemeInteractions.prototype.clearLine = function() {
        var clearDiv = document.createElement("div");
        clearDiv.style.clear = 'left';
        this.addToInteractions(clearDiv);
    };

    // Sets the text in the prompt.
    WeSchemeInteractions.prototype.setPromptText = function(t) {
        this.prompt.setText(t);
    };

    //////////////////////////////////////////////////////////////////////
    Prompt = function(interactions, parentDiv, K) {
        var that = this;
        this.interactions = interactions;
        this.div = jQuery("<div><span class='top-aligned-inline-block'>&gt;&nbsp;</span><span class='top-aligned-inline-block' style='width: 90%'/></div>");
        parentDiv.append(this.div);

        var innerDivElt = this.div.find("span").get(1);
        new plt.wescheme.WeSchemeTextContainer(
            innerDivElt,
            { dynamicHeight: true,
              lineNumbers: false,
              theme: "scheme-interactive",
              //stylesheet: "/js/codemirror/contrib/scheme/css/schemecolors-interactive.css",
              makeTransparentIframe: true,
              extraKeys: {
                  "Enter":function (ed) {
                      if (that.hasCompleteExpression()) {
                          that.onEvaluation();
                      } else {
                          CodeMirror.commands.newlineAndIndent(ed);
                      }
                  },
                  "Ctrl-N":function (ed) {
                      that.onHistoryNext();
                  },
                  "Ctrl-P":function (ed) {
                      that.onHistoryPrevious();
                  },
                  "Alt-N":function (ed) {
                      that.onHistoryNext();
                  },
                  "Alt-P":function (ed) {
                      that.onHistoryPrevious();
                  }
              }},
            function(container) {
                that.textContainer = container;

                if (K) {
                    K(that);
                }
            });
    };

    Prompt.prototype.onEvaluation = function() {
        this.saveHistoryWithCleanup();
        var that = this;
        var nextCode = that.textContainer.getCode();
        that.textContainer.setCode("");

        var parentDiv = document.createElement('div');

        var promptSpan = document.createElement('span');
        promptSpan.className = 'top-aligned-inline-block';
        promptSpan.appendChild(document.createTextNode(">"));

        var textareaSpan = document.createElement("span");
        textareaSpan.className = 'top-aligned-inline-block';
        textareaSpan.style.width = '90%';

        parentDiv.appendChild(promptSpan);
        parentDiv.appendChild(document.createTextNode(" "));
        parentDiv.appendChild(textareaSpan);
        that.interactions.addToInteractions(parentDiv);

        that.interactions.clearLine();
        // // FIXME: figure out how to get the line height
        // dynamically, because I have no idea how to do
        // this correctly at the moment.
        var n = new plt.wescheme.WeSchemeTextContainer(
            textareaSpan,
            {   dynamicHeight: true,
                lineNumbers: false,
                theme: "scheme-interactive",
                //stylesheet: "/js/codemirror/contrib/scheme/css/schemecolors-interactive.css",
                content: nextCode,
                makeTransparentIframe: true,
                readOnly: true,
                matchBrackets: false },
            function(container) {
                var newId = makeFreshId();
                that.interactions.previousInteractionsTextContainers[newId] = container;
                that.interactions.runCode(nextCode, newId, function() {});
            });
        that.focus();
    };

    // TODO: historyPreviousIsOk and historyNextIsOk don't have to be methods.

    Prompt.prototype.historyPreviousIsOk = function(index, length) {
        return (index > 0);
    };

    Prompt.prototype.historyNextIsOk = function(index, length) {
        return ((length - index) > 1);
    }

    Prompt.prototype.onHistoryPrevious = function() {
        this.doHistory(-1, this.historyPreviousIsOk);
    };

    Prompt.prototype.onHistoryNext = function() {
        this.doHistory(1, this.historyNextIsOk);
    };

    Prompt.prototype.doHistory = function(increment, incrementIsOk) {
        if (this.historyArray.length > 1) {
            var code = jQuery.trim(this.textContainer.getCode());
            if (code === this.historyArray[this.historyIndex]) {
                // The code *is* the same as the history slot, so do the increment if OK.
                if (incrementIsOk(this.historyIndex, this.historyArray.length)) {
                    this.doHistoryPart2(increment);
                }
            } else {
                // The code is *not* the same as the history slot, so,
                // if increment will be OK if we update the last slot
                // with the current code, then update the last slot and
                // then do the increment.
                var tentativeIndex = (this.historyArray.length - 1);
                if (incrementIsOk(tentativeIndex, this.historyArray.length)) {
                    this.historyIndex = tentativeIndex;
                    this.historyArray[this.historyIndex] = code;
                    this.doHistoryPart2(increment);
                }
            }
        }

    };

    Prompt.prototype.doHistoryPart2 = function(increment) {
        this.historyIndex += increment;
        this.textContainer.setCode(this.historyArray[this.historyIndex]);
        // TODO: !!! setCursorToEnd doesn't yet work.
        this.textContainer.setCursorToEnd();
    };

    Prompt.prototype.saveHistoryWithCleanup = function() {
        var newEntry = jQuery.trim(this.textContainer.getCode());
        var lastIndex = (this.historyArray.length - 1);
        this.historyArray[lastIndex] = newEntry;
        var prevEntry = ((lastIndex < 1) ? null : this.historyArray[lastIndex - 1]);
        if (prevEntry && (prevEntry === newEntry)) {
            // The new entry is the same as the previous, so fall through and
            // let the new entry be reset to a blank.
        } else if (newEntry === "") {
            // New entry is already blank, so don't need to add a new one.
        } else {
            // Need to add a blank to historyArray, so shrink historyArray
            // if necessary, and then add blank.
            var shiftCount = Math.max(0, (this.historyArray.length - this.maxSavedHistory));
            while (shiftCount > 0) {
                this.historyArray.shift();
                shiftCount--;
            }
            // Note: We are setting lastIndex to one greater than the
            // current last index, so that our use of it in as an array
            // index in lhs of assignment below will result in appending to
            // the array.
            lastIndex = this.historyArray.length;
        }
        this.historyArray[lastIndex] = "";
        this.historyIndex = lastIndex;
    };

    // hasExpressionToEvaluate: -> boolean
    // Return true if the prompt contains a complete expression
    Prompt.prototype.hasCompleteExpression = function() {
        var codePastCursor = this.textContainer.getCode(this.textContainer.getCursorStartPosition());
        if (codePastCursor.match(new RegExp("[^\\s]"))) {
            return false;
        }
        var codeUpToCursor = this.textContainer.getCode(0, this.textContainer.getCursorStartPosition());
        return plt.wescheme.tokenizer.hasCompleteExpression(codeUpToCursor);
    };



    Prompt.prototype.setText = function(t) {
        this.textContainer.setCode(t);
    };

    Prompt.prototype.clear = function() {
        this.textContainer.setCode("");
    };

    Prompt.prototype.getDiv = function() {
        return this.div;
    };

    Prompt.prototype.hide = function() {
        this.div.hide();
    };

    Prompt.prototype.show = function() {
        this.div.show();
    };

    Prompt.prototype.focus = function() {
        this.interactions._scrollToBottom();
        this.textContainer.focus();
    };


    //////////////////////////////////////////////////////////////////////


    // Initializes the evaluator to use round-robin compilation, given a list of
    // servers.
    var compilation_servers = plt.wescheme.WeSchemeProperties.compilation_servers.split(/\s+/);


    // Configures the evaluator to use round-robin compilation between
    // a set of servers.  Compilation will also fall back to other
    // servers under network failure.
    WeSchemeInteractions.prototype.initializeRoundRobinCompilation = function(evaluator, after) {
        var that = this;
        plt.wescheme.RoundRobin.initialize(
            compilation_servers,
            function() {
                evaluator.setCompileProgram(
                    plt.wescheme.RoundRobin.roundRobinCompiler);
                after();
            },
            function() {
                // Under this situation, all compilation servers are inaccessible.
                evaluator.setCompileProgram(
                    plt.wescheme.RoundRobin.roundRobinCompiler);
                alert("WeScheme appears to be busy or unavailable at this time." +
                      "  Please try again later.");
                after();
            });
    };
                        
    // calculateWidth : node -> number
    // cache and return the width of the current node, and all of its children
    function calculateWidth(node){
        node.cachedWidth = 1;
        for(var i = 0; i < node.children.length; i++) {
            node.cachedWidth += (node.children[i].cachedWidth || calculateWidth(node.children[i]));
        }
        node.cachedWidth = Math.max(node.cachedWidth, node.offsetWidth);
        return node.cachedWidth;
    }
                        
    // rewrap the REPL output according to DrRacket's conventions
    // compare width of the line to the interactions window
    // If the wrapping status has changed, re-check- all the children
    var rewrapOutput = function(node){
      var oldWrap   = (node.className.indexOf("wrapped") > -1),    // original wrap state
          width     = node.cachedWidth || calculateWidth(node),   // current width (use cache if possible)
          maxWidth  = document.getElementById('inter').offsetWidth,// maximum width
          newWrap   = width > maxWidth;                           // should we wrap?
      if((!oldWrap && newWrap) || (oldWrap && !newWrap)){
         node.className=newWrap? node.className+" wrapped" : node.className.replace(/ wrapped/g, "");
         for(var i = 0; i < node.children.length; i++){ rewrapOutput(node.children[i]); }
      }
    }

    // rewrap all REPL content onresize, throttled by 250ms
    var rewrapThrottle = null;
    var rewrapPreviousInteractions = function(){
      clearTimeout(rewrapThrottle);
      rewrapThrottle = setTimeout(function(){
         var repls = document.getElementsByClassName('replOutput');
         for(var i=0; i<repls.length; i++){ rewrapOutput(repls[i])};
       }, 250);
    }
    jQuery(window).bind('resize', rewrapPreviousInteractions);
                        

    var silenceCurrentEvaluator = function(that) {
        that.evaluator.write = function(thing) {};
        that.evaluator.transformDom = function(thing) {};
        that.evaluator.requestBreak();
    };


    var makeFreshEvaluator = function(that, afterInit) {         
        var evaluator = new Evaluator({
            write: function(thing) {
                thing.className += " replOutput";
                that.addToInteractions(thing);
                rewrapOutput(thing);
            },
            transformDom : function(dom) {
                var result = that._transformDom(dom);
                return result;
            }
        });

        var dialog = jQuery("<div/>");
        var onFullScreenChange = function() {
            if (document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen) {
                // do nothing if we're full-screen.
            } else {
                // if we came out of fullscreen, try closing
                if (dialog.dialog && dialog.dialog("isOpen")) {
                    dialog.dialog('close');
                }
            }
        };
        jQuery(document).bind("fullscreenchange", onFullScreenChange);
        jQuery(document).bind("mozfullscreenchange", onFullScreenChange);
        jQuery(document).bind("webkitfullscreenchange", onFullScreenChange);

        that.initializeRoundRobinCompilation(
            evaluator,
            function() {
                evaluator.makeToplevelNode = function() {
                    var handleClose = function(event, ui) {
                        that.evaluator.requestBreak();
                        dialog.dialog("destroy");
                    };

                    dialog.dialog( {
                        bgiframe : true,
                        position: ["left", "top"],
                        modal : true,
                        width: "auto",
                        height: "auto",
                        beforeclose: handleClose,
                        resizable: false,
                        closeOnEscape: true
                    });

                    var supportsFullScreen = function() {
                        var elem = document.createElement("div");
                        return ((elem.webkitRequestFullscreen ||
                                 elem.mozRequestFullScreen || 
                                 elem.requestFullscreen) !== undefined);
                    };

                    var toggleFullScreen = function() {
                        var elem;
                        if (innerArea.find("canvas").length === 1) {
                            // If there's a unique canvas, highlight that one.
                            elem = innerArea.find("canvas").get(0);
                        } else { 
                            // Otherwise, just highlight the whole toplevel node.
                            elem = innerArea.get(0);
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

                    if (supportsFullScreen()) {
                        jQuery("<span><img src='/images/fullscreen.png' width='12' height='12'></span>")
                            .css("float", "left")
                            .css("cursor", "auto")
                            .css("margin-top", "5px")
                            .click(toggleFullScreen)
                            .appendTo(dialog.parent().find(".ui-dialog-titlebar"));
                    }   

                    var innerArea = jQuery("<div class='evaluatorToplevelNode'></div>");
                    innerArea.css("background-color", "white");
                    dialog.append(innerArea);
                    dialog.dialog("open");
                    dialog.dblclick(function (evt){
                                   var elem = evt.target;
                                   if (elem.webkitRequestFullscreen) {
                                    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                                   } else {
                                      if (elem.mozRequestFullScreen) {
                                        elem.mozRequestFullScreen();
                                      } else {
                                        elem.requestFullscreen();
                                      }
                                   }
                                   });
                    return innerArea.get(0);
                };
                evaluator.setImageProxy("/imageProxy");
                evaluator.setRootLibraryPath("/js/mzscheme-vm/collects");
                evaluator.setDynamicModuleLoader(plt.wescheme.makeDynamicModuleLoader("/js/mzscheme-vm/collects"));
                afterInit(evaluator);
            }); 
    };


    WeSchemeInteractions.prototype.focusOnPrompt = function() {
        this.prompt.focus();
    };

    WeSchemeInteractions.prototype.notifyBus = function(action, data) {
        if (typeof plt.wescheme.WeSchemeIntentBus != 'undefined') {
            plt.wescheme.WeSchemeIntentBus.notify("after-reset", this);
        }
    };


    //FIXME refactor this
    WeSchemeInteractions.prototype.setSourceHighlighter = function(highlighter) {
        this.highlighter = highlighter;
    };
    
    WeSchemeInteractions.prototype.setAddToCurrentHighlighter = function(addToCurrentHighlighter) {
        this.addToCurrentHighlighter = addToCurrentHighlighter;
    };

    WeSchemeInteractions.prototype.setMoveCursor = function(moveCursor) {
        this.moveCursor = moveCursor;
    };

    WeSchemeInteractions.prototype.setScrollIntoView = function(scrollIntoView) {
        this.scrollIntoView = scrollIntoView;
    };

    WeSchemeInteractions.prototype.addSetSelection = function(setSelection) {
        this.setSelection = setSelection;
    };

    WeSchemeInteractions.prototype.setFocus = function(focus) {
        this.focus = focus;
    };

    WeSchemeInteractions.prototype.addOnReset = function(onReset) {
        this.resetters.push(onReset);
    };

    WeSchemeInteractions.prototype.removeOnReset = function(onReset) {
        var i;
        for (i = 0; i < this.resetters.length; i++) {
            if (onReset === this.resetters[i]) {
                this.resetters.splice(i, 1);
                return;
            }
        } 
    };

    

    // Returns if x is a dom node.
    function isDomNode(x) {
        return (x.nodeType != undefined);
    }

    // addToInteractions: string | dom-node -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
        var that = this;
        var newArea;
        var domNode;
        this.notifyBus("before-add-to-interactions", this);
        if (isDomNode(interactionVal)) {
            domNode = jQuery(interactionVal);
            domNode.click(function(e){ e.stopPropagation(); });
            jQuery(this.previousInteractionsDiv).append(domNode);
        } else {
            newArea = jQuery("<div style='width: 100%'></div>");
            newArea.text(interactionVal);
            newArea.click(function(e) { e.stopPropagation(); });
            jQuery(this.previousInteractionsDiv).append(newArea);
        }
        this._scrollToBottom();
        this.notifyBus("after-add-to-interactions", this);
    };



    WeSchemeInteractions.prototype._scrollToBottom = function() {
        this.interactionsDiv.attr(
            "scrollTop", 
            this.interactionsDiv.attr("scrollHeight"));
    };

    WeSchemeInteractions.prototype._transformDom = function(dom) {
        if (helpers.isLocationDom(dom)) {
            return this._rewriteLocationDom(dom);
        } else {
            return dom;
        }
    };

    WeSchemeInteractions.prototype._rewriteLocationDom = function(dom) {
        var newDom = document.createElement("span");
        var children = dom.children;
        var offset, id, span, line, column, color;
        for (var i = 0; i < children.length; i++) {
            var textBody = children[i].textContent || children[i].innerText;
            if (children[i]['className'] === 'location-id') {
                id = textBody;
            }
            if (children[i]['className'] === 'location-offset') {
                offset = textBody;
            }
            if (children[i]['className'] === 'location-span') {
                span = textBody;
            }
            if (children[i]['className'] === 'location-line') {
                line = textBody;
            }
            if (children[i]['className'] === 'location-column') {
                column = textBody;
            }
            if (children[i]['className'] === 'location-color') {
                color = textBody;
            }

        }
         if(!color) { color = "red"; }
        return this.createLocationHyperlink({ id: id,
                                              offset: parseInt(offset),
                                              line: parseInt(line),
                                              column: parseInt(column),
                                              span: parseInt(span),
                                              color: color});
    };

    // Evaluate the source code and accumulate its effects.
    WeSchemeInteractions.prototype.runCode = function(aSource, sourceName, contK) {
        var that = this;
        setTimeout(
            withCancellingOnReset(
                that,
                function() {
                    that.notifyBus("before-run", that);

                    that.disableInput();
                    that.evaluator.executeProgram(
                        sourceName,
                        aSource,
                        withCancellingOnReset(
                            that,
                            function() { 
                                that.enableInput();
                                that.focusOnPrompt();
                                contK();
                            }),
                        withCancellingOnReset(
                            that,
                            function(err) { 
                                that.handleError(err); 
                                that.enableInput();
                                that.focusOnPrompt();
                                contK();
                            }));
                }),
            0);
    };

    WeSchemeInteractions.prototype.handleError = function(err) {
        this.addToInteractions(renderErrorAsDomNode(this, err));
        this.addToInteractions("\n");
    };

    //nextColor: int float -> int
    //takes in a rgb color from 0 to 255 and a percentage from 0 to 1 to tint by, 
    //  outputs the tinted color as an int
    var nextColor = function(color, percentage) {
        return Math.floor(percentage*color + (255 * (1 - percentage)));
    };
    
    //nextTint: int int int float -> string
    //given rgb ints and a percentage to tint, returns the rgb string of the tinted color
    var nextTint = function(red, green, blue, percentage) {
        return "rgb(" + nextColor(red, percentage) + "," + nextColor(green, percentage) + "," 
                      + nextColor(blue, percentage) + ")";
    };
 
    
    var Color = function(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    };
    
    Color.prototype.toString = function() {
       return "rgb(" + this.red +"," + this.green + "," + this.blue + ")";
      
    };

    //proper order is id offset line column span
    //badLocs is in   col id line offset span
   var locObjToVector = function(badLocs) {
        return types.vector([badLocs.id,
                     parseInt(badLocs.offset),
                     parseInt(badLocs.line),
                     parseInt(badLocs.column),
                     parseInt(badLocs.span)]);
   };

    //return array of fixed locs
   var fixLocList = function(badLocList) {
       var toReturn = [];

       var i;
       for (i =0; i < badLocList.length; i++) {
           toReturn.push(locObjToVector(badLocList[i]));
       }
       return toReturn;
   };

    //structuredError -> Message
    var structuredErrorToMessage = function(se) {
        var msg = [];
        var i;
        for(i = 0; i < se.length; i++){
            if(typeof(se[i]) === 'string') {
                msg.push(se[i]);
            }
            else if(se[i].type === "ColoredPart"){
                msg.push(new types.ColoredPart(se[i].text, locObjToVector(se[i].loc)));
            }

            else if(se[i].type === "GradientPart"){
                var j;
                var parts = [];
                for(j = 0; j < se[i].parts.length; j++){
                    var coloredPart = se[i].parts[j];
                    parts.push(new types.ColoredPart(coloredPart.text, locObjToVector(coloredPart.loc)));
                }
                msg.push(new types.GradientPart(parts));
            }
            else if(se[i].type === "MultiPart"){
                msg.push(new types.MultiPart(se[i].text, fixLocList(se[i].locs), se[i].solid));
            }
            else msg.push(se[i]+'');
        }
        return new types.Message(msg);
    };


    // that: ???
    // msgDom: dom.  The target element that we write output to.
    // args: arrayof (U string ColoredPart GradiantPart MultiPart)
    // Special multi-color highlighting
    var formatColoredMessage = function(that, msgDom, msg) {
        var args = msg.args;

        // These colors are different versions of the same color, used
        // for gradient purposes to allow for greater differentiation
        // between nearby colors.  The first element in each sublist
        // is the primary color.
        // 
        // Most of these colors come from:
        // http://en.wikipedia.org/wiki/Web_colors
        var colors = [
            // shades of blue: SkyBlue, LightSteelBlue, PowderBlue, LightBlue
            [new Color(135, 206, 235), new Color(176, 196, 222), new Color(176, 224, 230), new Color(173, 216, 230)],

            // shades of purple: Violet, Thistle, Plum,  Orchid
            [new Color(238, 130, 238), new Color(216, 191, 216), new Color(221, 160, 221), new Color(218, 112, 214)],

            // shades of yellow: Moccasin, PaleGoldenrod, PeachPuff
            [new Color(255, 228, 181), new Color(238, 232, 170), new Color(255, 218, 185)],

            // // shades of cyan: PaleTurquoise, Aquamarine, Turquoise
            // [new Color(175, 238, 238), new Color(127, 255, 212), new Color(64, 224, 208)],

            // shades of brown: BurlyWood, Bisque, NavajoWhite, Wheat
            [new Color(222, 184, 135), new Color(255, 228, 196), new Color(255, 222, 173), new Color(245, 222, 179)]   
        ];



        var colorIndex = 0;
        var currColor = colors[colorIndex][0];
        var i;


        // Helper: iterate across elts, and pick a new tint.  Apply f on each elt with that new tint.
        var foreachTint = function(elts, f) {
            var currTint;
            var altIndex = 0;
            var j;
            var percentage = 1;
            var change = 2/(elts.length+1);
            for (j = 0; j < elts.length; j++){
                if (altIndex >= colors[colorIndex].length) {
                    altIndex = 0;
                    percentage = percentage - change;
                }
                currColor = colors[colorIndex][altIndex];
                currTint = nextTint(currColor.red, currColor.green, currColor.blue, percentage);
                f(elts[j], currTint);
                altIndex++;
            }
        };

        var doColoredPart = function(part) {
            colorAndLink(that, msgDom, currColor, part.text, [currColor], [part.location]);
            colorIndex = (colorIndex + 1) % colors.length;
        };

        var doGradientPart = function(part) {
            var parts = part.coloredParts;
            foreachTint(parts,
                        function(subpart, currTint) {
                            colorAndLink(that, msgDom, currTint, subpart.text, [currTint], [subpart.location])
                        });
            colorIndex = (colorIndex + 1) % colors.length;
        };

        var doMultiPart = function(part) {
            var locTints = [];
            var i;
            var baseColor = currColor;
            var box;
            if(part.locations.length > 0){ 
                if (part.solid || part.locations.length === 1) {
                    for (i = 0; i < part.locations.length; i++) {
                        locTints.push(baseColor);
                    }
                    colorAndLink(that, msgDom, baseColor, part.text, 
                                 locTints, part.locations);
                    colorIndex = (colorIndex + 1) % colors.length;
                    
                } else {
                    foreachTint([undefined].concat(part.locations),
                                function(loc, tint) {
                                    locTints.push(tint);
                                });
                    colorAndLink(that, msgDom, baseColor, part.text, 
                                 locTints.slice(1), part.locations);
                    jQuery(msgDom).append("\u00ab"); // left-pointing-double-angle quotation mark
                    for (i = 0; i < part.locations.length; i++) {
                        box = jQuery("<tt/>");
                        // white large box character.
                        // http://www.fileformat.info/info/unicode/char/2b1c/index.htm
                        box.text("\u2b1c"); 
                        colorAndLink(that, msgDom, locTints.slice(1)[i], 
                                     box, [locTints.slice(1)[i]], [part.locations[i]]);
                    }
                    jQuery(msgDom).append("\u00bb"); // right-pointing-double-angle quotation mark
                    colorIndex = (colorIndex + 1) % colors.length;
                }
            }
            else {
                msgDom.appendChild(document.createTextNode(part.text+''));
            }
        };

        var doPlainPart = function(part) {
            msgDom.appendChild(document.createTextNode(part+''));
            
        };

        for (i = 0; i < args.length; i++){
            currColor = colors[colorIndex][0];
            if (types.isColoredPart(args[i])) {
                doColoredPart(args[i]);
            } else if(types.isGradientPart(args[i])) {
                doGradientPart(args[i]);
            } else if(types.isMultiPart(args[i])) {
                doMultiPart(args[i]);
            } else {
                doPlainPart(args[i]);
            }
        }
    };





    // that: ???
    // msgDom: dom.  The target element that we write output to.
    // args: arrayof (U string ColoredPart GradiantPart MultiPart)
    // Disabled multi-colored highlighting.
    var formatUncoloredMessage = function(that, msgDom, msg, errorLoc) {
        var args = msg.args;
        var i;

        var pinkColor = new Color(240,181,194);

        var doColoredPart = function(part) {
            msgDom.appendChild(document.createTextNode(part.text));
        };
        var doGradientPart = function(part) {
            var parts = part.coloredParts;
            var i;
            for (i = 0; i < parts.length; i++) {
                msgDom.appendChild(document.createTextNode(parts[i].text+''));
            }
        };

        var doMultiPart = function(part) {
            msgDom.appendChild(document.createTextNode(part.text+''));
        };

        var doPlainPart = function(part) {
            msgDom.appendChild(document.createTextNode(part+''));
        };

        for (i = 0; i < args.length; i++){
            if (types.isColoredPart(args[i])) {
                doColoredPart(args[i]);
            } else if(types.isGradientPart(args[i])) {
                doGradientPart(args[i]);
            } else if(types.isMultiPart(args[i])) {
                doMultiPart(args[i]);
            } else {
                doPlainPart(args[i]);
            }
        }

        that.addToCurrentHighlighter(errorLoc.id,
                                     errorLoc.offset, 
                                     errorLoc.line,
                                     errorLoc.column, 
                                     errorLoc.span,
                                     pinkColor+"");
    };




    //that, dom, Color, string, nonempty array[loc]
    //does the coloring and makes a link to the location in the definitions
    var colorAndLink = function(that, msgDom, errorColor, text, locColors, locs) {
        var i;
        var x;
        var pieces = [];
        if (typeof text === 'string') {
            text = jQuery("<span/>").text(text);
        }
        for(i = 0; i < locs.length; i++){
            pieces.push(that.addToCurrentHighlighter(locs[i].ref(0), locs[i].ref(1), locs[i].ref(2), locs[i].ref(3), locs[i].ref(4), 
                                                     locColors[i]+''));
        }
        if(locs[0].ref(0) === "<no-location>"){
            jQuery(msgDom).append(text);
        } else {
            var clickFunction = makeCursorLink(that, locs, pieces, errorColor);
            var aChunk = jQuery("<span/>").css("background-color", errorColor+'')
                                          .addClass("colored-link")
                                          .click(clickFunction);
            var aLink = jQuery("<a/>").append(text)
                                      .attr("href", "#")
                                      .click(clickFunction);
            jQuery(aChunk).append(aLink);
            jQuery(msgDom).append(aChunk);
        }
    };

    //WeSchemeInteractions locations {find, clear, styleName} string -> function
    //takes in information, returns a function to run when clicked-
    //moves the cursor before the first piece, and catches the user's attention
    var makeCursorLink = function(that, locs, pieces, color) {
        var currItem = locs[0];
        return function(e) {
            var i;
            e.stopPropagation();
            e.preventDefault();
            that.scrollIntoView(currItem.ref(0), parseInt(currItem.ref(1)));
            that.focusOnPrompt();
            for(i = 0; i < pieces.length; i++){
                catchAttention(pieces[i].styleName);
            }
        }
    };

    //takes in style name, then for all elements with that style name,
    //fades them out and back in
    var catchAttention = function(styleName){
        var opacity = 0;
        var intervalId = setInterval(function() {
            jQuery("." + styleName).css("opacity", opacity);
            opacity = opacity + 0.02;                
            if (opacity >= 1) { clearInterval(intervalId); }
        }, 15);
    };


    // renderErrorAsDomNode: WeSchemeInteractions exception -> element
    // Given an exception, produces error dom node to be displayed.
    var renderErrorAsDomNode = function(that, err) {
        var msg;
        var i;
        var dom = document.createElement('div');
        if (types.isSchemeError(err) && types.isExnBreak(err.val)) {
            dom['className'] = 'moby-break-error';
            msg = "Program stopped by user (user break)";
        } 
        else {
            dom['className'] = 'moby-error';
            if(err.structuredError && err.structuredError.message) {
                msg = structuredErrorToMessage(err.structuredError.message);
            }
            else {
                msg = that.evaluator.getMessageFromExn(err);
            }
        }

        var msgDom = document.createElement('div');
        msgDom['className'] = 'moby-error:message';

        if(types.isMessage(msg)) {
            if (that.withColoredErrorMessages) {
                //if it is a Message, do special formatting
                formatColoredMessage(that, msgDom, msg);
            } else {
                formatUncoloredMessage(that, msgDom, msg, getPrimaryErrorLocation(that, err));
            }
        } else {
            if(err.domMessage){
              dom.appendChild(err.domMessage);
            }
            else {
              msgDom.appendChild(document.createTextNode(msg));
            }
        } 
        dom.appendChild(msgDom);

        if(err.structuredError && err.structuredError.message) {
            var link = that.createLocationHyperlink(err.structuredError.location);
            dom.appendChild(link);
        }

        var stacktrace = that.evaluator.getTraceFromExn(err);
        var stacktraceDiv = document.createElement("div");
        stacktraceDiv['className'] = 'error-stack-trace';
        for (i = 0; i < stacktrace.length; i++) {
            var anchor = that.createLocationHyperlink(stacktrace[i]);
            stacktraceDiv.appendChild(anchor);
        }

        //do stuff with feedback here

        
        dom.appendChild(stacktraceDiv);
    
        return dom;
    };


    // getPrimaryErrorLocation: error -> (U location false)
    // Try to get the primary error location.  Return false
    // if we can't localize it.
    var getPrimaryErrorLocation = function(that, err) {
        var i;
        if(err.structuredError && err.structuredError.message) {
            return err.structuredError.location;
        }
        var stacktrace = that.evaluator.getTraceFromExn(err);
        for (i = 0; i < stacktrace.length; i++) {
            return stacktrace[i];
        }
        return false;
    };


    // createLocationHyperlink: location (or dom undefined) -> paragraph-anchor-element
    // Produce a hyperlink that, when clicked, will jump to the given location on the editor.
    // FIXME: should this really wrap a paragraph around a link?  The client
    // really should be responsible for layout issues instead....
    WeSchemeInteractions.prototype.createLocationHyperlink = function(aLocation, anchorBodyDom) {
        if (! anchorBodyDom) {
            anchorBodyDom = document.createTextNode(
                "at: line " + aLocation.line + 
                    ", column " + aLocation.column +
                    ", in " + aLocation.id);
        }
        var para = document.createElement('p');
        para.className = 'location-paragraph';
        var anchor = document.createElement("a");
        anchor['href'] = "#";
        anchor['onclick'] = makeHighlighterLinkFunction(this, aLocation);
        anchor.appendChild(anchorBodyDom);
        para.appendChild(anchor);
        return para;
    };
    
    var makeHighlighterLinkFunction = function(that, elt) {
        return function() { 
            //that.highlighter(elt.id, elt.offset, elt.line, elt.column, elt.span, "rgb(254, 196, 79)");
            that.setSelection(elt.id, elt.offset, elt.line, elt.column, elt.span);
        };
    };

    WeSchemeInteractions.prototype.disableInput = function() {
        this.prompt.hide();
    };

    WeSchemeInteractions.prototype.enableInput = function() {
        this.prompt.show();
    };

    WeSchemeInteractions.prototype.requestBreak = function() {
        this.evaluator.requestBreak();
    };

    WeSchemeInteractions.prototype.toString = function() { return "WeSchemeInteractions()"; };

    //////////////////////////////////////////////////////////////////////
    var _idNum = 0;
    makeFreshId = function() {
        return ("<interactions" + (_idNum++) + ">");
    }
    //////////////////////////////////////////////////////////////////////

    return WeSchemeInteractions;
})();

plt.wescheme.WeSchemeInteractions = WeSchemeInteractions;
