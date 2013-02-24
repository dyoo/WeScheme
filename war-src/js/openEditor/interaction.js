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

        new Prompt(
            this,
            this.interactionsDiv,
            function(prompt) {
                that.prompt = prompt;
                that.makeFreshEvaluator(function(e) {
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
        for (i =0; i< that.resetters.length; i++){
            that.resetters[i]();
        }

        that.makeFreshEvaluator(function(e) {
            that.evaluator = e;
            jQuery(that.previousInteractionsDiv).empty();
            that.notifyBus("after-reset", that);
            that.prompt.clear();
        })
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
                readOnly: 'nocursor',
                matchBrackets: false },
            function(container) {
                var newId = makeFreshId();
                that.interactions.previousInteractionsTextContainers[newId] = container;
                that.interactions.runCode(nextCode, newId, function() {});
            });
        //calling that.focus() doesn't work - the codeMirror box looks focused, but you can't type into it
        //if I focus on something else first, everything works fine
        n.focus();
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
                        
    WeSchemeInteractions.prototype.makeFreshEvaluator = function(afterInit) {
        var that = this;
         
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
                        if (innerArea.find("canvas").length == 1) {
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
                evaluator.setDynamicModuleLoader(function(aName, onSuccess, onFail) {
                    loadScript(this.rootLibraryPath + "/" + aName + "-min.js",
                               onSuccess,
                               onFail);
                });
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
    WeSchemeInteractions.prototype.addSetSelection = function(setSelection) {
        this.setSelection = setSelection;
    };

    WeSchemeInteractions.prototype.setFocus = function(focus) {
        this.focus = focus;
    };

    WeSchemeInteractions.prototype.addOnReset = function(onReset) {
        this.resetters.push(onReset);
    };
    

    // Returns if x is a dom node.
    function isDomNode(x) {
        return (x.nodeType != undefined);
    }

    // addToInteractions: string | dom-node -> void
    // Adds a note to the interactions.
    WeSchemeInteractions.prototype.addToInteractions = function (interactionVal) {
        var that = this;
        this.notifyBus("before-add-to-interactions", this);
        if (isDomNode(interactionVal)) {
            this.previousInteractionsDiv.appendChild(interactionVal);
        } else {
            var newArea = jQuery("<div style='width: 100%'></div>");
            newArea.text(interactionVal);
            this.previousInteractionsDiv.appendChild(newArea.get(0));
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
        this.notifyBus("before-run", this);
        var that = this;
        this.disableInput();
        this.evaluator.executeProgram(sourceName,
                                      aSource,
                                      function() { 
                                          that.enableInput();
                                          that.focusOnPrompt();
                                          contK();
                                      },
                                      function(err) { 
                                          that.handleError(err); 
                                          that.enableInput();
                                          that.focusOnPrompt();
                                          contK();
                                      });
    };

    WeSchemeInteractions.prototype.handleError = function(err) {
        this.addToInteractions(this.renderErrorAsDomNode(err));
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
                msg.push(new types.MultiPart(se[i].text, fixLocList(se[i].locs)));
            }
            else msg.push(se[i]+'');

        }
        return new types.Message(msg);
    };

    // Special multi-color highlighting
    var specialFormatting = function(that, msgDom, msg) {
        //pink, blue, green, yellow, gray
        var colors = [new Color(240, 181, 194), new Color(161, 200, 224), new Color(146, 200, 142), 
                  new Color(255, 239, 0), new Color(186,186,186)];

        //these colors are different versions of the same color, used for gradient purposes
        //to allow for greater differentiation between nearby colors
        var altColors = [
            [new Color(240,181,194), new Color(220, 20, 60), new Color(171, 78, 82), new Color(128, 0, 0)],    //shades of red/pink
            [new Color(161,200,224), new Color(137,207,240), new Color(0, 147, 175), new Color(89, 89,187)],    //shades of blue
            [new Color(146,200,142), new Color(123, 158, 147), new Color(41, 171,135), new Color(169, 186, 157)],    //shades of green
            [new Color(255, 239, 0), new Color(255, 215, 0), new Color(250, 218,94), new Color(239,204, 0)],    //shades of yellow
            [new Color(186,186,186), new Color(100,100,100), new Color(147,147,147), new Color(212,212,212)]    //shades of gray
        ];

        //to turn off highlighting, have the only color be white
      //  var colors = [new Color (255, 255, 255)];
        var colorIndex = 0;
        var currItem;
        var currColor = colors[colorIndex];
        var args = msg.args;
        var i;

        for(i = 0; i < args.length; i++){
            //in the event that there are no more preset colors, reset it
            if(colorIndex >= colors.length){
                colorIndex = 0;
            }
            currColor = colors[colorIndex];
            
            if(types.isColoredPart(args[i])) {
                colorAndLink(that, msgDom, currColor, args[i].text, [args[i].location]);
                colorIndex++;
            }
            else if(types.isGradientPart(args[i])) {
                var parts = args[i].coloredParts;
                var currTint;
                var altIndex = 0;
                var j;
                var percentage = 1;
                var change = 2/(parts.length+1);

                for (j = 0; j < parts.length; j++){
                    if(altIndex >= altColors[colorIndex].length) {
                        altIndex = 0;
                        percentage = percentage - change;
                    }
                    currColor = altColors[colorIndex][altIndex];

                    currTint = nextTint(currColor.red, currColor.green, currColor.blue, percentage);

                    colorAndLink(that, msgDom, currTint, parts[j].text, [parts[j].location])

                    altIndex++;

                }
                colorIndex++;
            }
            else if(types.isMultiPart(args[i])) {
                if(args[i].locations.length > 0){ //should really go to the source of the multipart to fix
                    colorAndLink(that, msgDom, currColor, args[i].text, args[i].locations);
                    colorIndex++;
                }
                else {
                    msgDom.appendChild(document.createTextNode(args[i].text+''));
                }
            } 
            else {
                msgDom.appendChild(document.createTextNode(args[i]+''));
            }
        }
    };

    //that, dom, Color, string, nonempty array[loc]
    //does the coloring and makes a link to the location in the definitions
    var colorAndLink = function(that, msgDom, color, text, locs) {
        var i;
        var x;
        var pieces = [];
        for(i = 0; i < locs.length; i++){
            pieces.push(that.addToCurrentHighlighter(locs[i].ref(0), locs[i].ref(1), locs[i].ref(2), locs[i].ref(3), locs[i].ref(4), color+''));
        }
        if(locs[0].ref(0) === "<no-location>"){
            var aChunk = jQuery("<span/>").text(text);
            jQuery(msgDom).append(aChunk);
        }
        else {
            var clickFunction = makeCursorLink(that, locs, pieces, color);
            var aChunk = jQuery("<span/>").css("background-color", color+'')
                                          .addClass("colored-link")
                                          .click(clickFunction);
            var aLink = jQuery("<a/>").text(text+'')
                                      .attr("href", "#")
                                      .click(clickFunction);
            jQuery(aChunk).append(aLink);
            jQuery(msgDom).append(aChunk);
        }
    }

    //WeSchemeInteractions locations {find, clear, styleName} string -> function
    //takes in information, returns a function to run when clicked-
    //moves the cursor before the first piece, and catches the user's attention
    var makeCursorLink = function(that, locs, pieces, color) {
        var currItem = locs[0];
        return function(e) {
            var i;
            e.stopPropagation();
            e.preventDefault();
            that.moveCursor(currItem.ref(0), parseInt(currItem.ref(1)));
            that.focus(currItem.ref(0));
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


    // renderErrorAsDomNode: exception -> element
    // Given an exception, produces error dom node to be displayed.
    WeSchemeInteractions.prototype.renderErrorAsDomNode = function(err) {
        var that = this;
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
                msg = this.evaluator.getMessageFromExn(err);
            }
        }

        var msgDom = document.createElement('div');
        msgDom['className'] = 'moby-error:message';

        if(types.isMessage(msg)) {
            //if it is a Message, do special formatting
            specialFormatting(that, msgDom, msg);
        }
        else {
            if(err.domMessage){
              dom.appendChild(err.domMessage);
            }
            else {
              msgDom.appendChild(document.createTextNode(msg));
            }
        } 
        dom.appendChild(msgDom);

        if(err.structuredError && err.structuredError.message) {
            var link = this.createLocationHyperlink(err.structuredError.location);
            dom.appendChild(link);
        }

        var stacktrace = this.evaluator.getTraceFromExn(err);
        var stacktraceDiv = document.createElement("div");
        stacktraceDiv['className'] = 'error-stack-trace';
        for (i = 0; i < stacktrace.length; i++) {
            var anchor = this.createLocationHyperlink(stacktrace[i]);
            stacktraceDiv.appendChild(anchor);
        }

        //do stuff with feedback here

        
        dom.appendChild(stacktraceDiv);
    
        return dom;
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
