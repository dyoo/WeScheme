/*jslint devel: true, browser: true, unparam: true, sub: true, windows: false, vars: true, white: true, plusplus: true, maxerr: 50, indent: 4 */
/*global CodeMirror*/
var initializeWidget = (function () {
    'use strict';
    

    //////////////////////////////////////////////////////////////////////

    // Requirement, in order of priority:
    //
    // 1.  If a field are modified out-of-order, that is, without
    // filling the prerequisite, the element should report that one of
    // its dependencies has not been satisfied.
    //
    // 2.  Each field should be guarded so that, if its constraints
    // are violated, the element reports its failure with an error
    // message.
    //
    //
    // 3.  If a field passes validation, it should notify the user
    // that the field is fine.
    //
    // Also, as a goal:
    //
    //     * Guide the user to make it easy to see what to fill in next.
    //
    //     * Don't overwhelm the user.
    //
    // There are three events we can trigger on:
    //
    //    1) focus   2) blur   3) change
    //
    //
    // What techniques can we use to accomplish these goals?  Color,
    // animation, messages.
    //
    // * Automatically place focus on the first element?
    //
    // * Focused elements can use features such as border color to let
    // the user know when a field is being edited, and whether it's good or bad.
    //
    // * Only the focused field should be saying things to the user.
    //
    // * As content changes, the field should do on-line validation.
    //
    // * If a field's dependencies aren't satisifed, when focused or
    // changed, the field should cause the missing dependencies to
    // animate in such a way to draw the eye (such as blinking), and
    // the error message should say an error message with respect to
    // the dependencies.
    //
    //////////////////////////////////////////////////////////////////////


    // Animate a DOM element and its contents by causing it to blink
    // in and out twice.
    var blinkTwice = function(x) { doBlink(x, 1, 2); };
    var doBlink = function(obj,start,finish) {
        jQuery(obj).fadeOut(300).fadeIn(300);
        if(start!=finish) { 
            start=start+1; 
            doBlink(obj,start,finish); 
        }
    }


    //////////////////////////////////////////////////////////////////////
    var CalmedEvent = function(delay) {
        this.delay = delay || 300;
        this.id = undefined;
    };
    CalmedEvent.prototype.trigger = function(f) {
        if (this.id) {
            clearTimeout(this.id);
        }
        this.id = setTimeout(f, this.delay);
    };

    //////////////////////////////////////////////////////////////////////




    // A ValidatedTextInputElement is a combination of an text
    // element, a function for determining erroneous content, and
    // an element for which errors should be reported.
    var ValidatedTextInputElement = function(textElement,
                                             isError,
                                             errorElement,
                                             isViolatingDependencies) {
        var that = this;
        
        isViolatingDependencies = isViolatingDependencies || function() { return false; };


        this.textElement = textElement;
        this.isError = isError;
        this.errorElement = errorElement;
        this.isViolatingDependencies = isViolatingDependencies;
        this.disabled = false;
        this.listeners = [];

        var calmedChange = new CalmedEvent();

        var onChange = function() {
            if (!that.disabled) {
                calmedChange.trigger(function() {
                    that.scheduleNotification();
                    
                    var err;
                    var newValue = that.getValue();
                    
                    // Check dependencies
                    err = isViolatingDependencies.call(that);
                    if (err) {
                        jQuery(errorElement).empty();
                        jQuery(errorElement).append(jQuery('<span/>').addClass("error").append(err.message));

                        if (!err.target.calmedBlink) { err.target.calmedBlink = new CalmedEvent(600); }
                        err.target.calmedBlink.trigger(function() { blinkTwice(err.target); });
                        jQuery(that.codeMirrorElement.getWrapperElement()).removeClass("correct");
                        jQuery(that.codeMirrorElement.getWrapperElement()).addClass("stillErroneous");
                        return;
                    }

                    // Check validation errors.
                    err = isError.call(that, newValue);
                    if (err) {
                        jQuery(errorElement).empty();
                        jQuery(errorElement).append(jQuery('<span/>').addClass("error").append(err));
                        jQuery(that.codeMirrorElement.getWrapperElement()).removeClass("correct");
                        jQuery(that.codeMirrorElement.getWrapperElement()).addClass("stillErroneous");
                        return;
                    }

                    // Otherwise, validation passes.
                    jQuery(errorElement).empty();
                    jQuery(errorElement).append(jQuery('<span/>').text(" "));
                    jQuery(that.codeMirrorElement.getWrapperElement()).removeClass("stillErroneous");
                    jQuery(that.codeMirrorElement.getWrapperElement()).addClass("correct");
                });
            }
        };

        var onFocus = function() {
            onChange();
        };

        var onBlur = function() {
            // jQuery(errorElement).empty();
        };
        
	var km = {};
	km["Tab"] = tabIndent? "indentAuto" : CodeMirror.Pass;
	km["Shift-Tab"] = CodeMirror.Pass;

        this.codeMirrorElement = 
            CodeMirror.fromTextArea(textElement,
                                    { matchBrackets: true,
				      extraKeys: km,
				      mode: "scheme2",
                                      value: "",
                                      onChange: onChange,
                                      onBlur: onBlur,
                                      onFocus: onFocus
                                    });
    };

    ValidatedTextInputElement.prototype.isOk = function() {
        if (this.isViolatingDependencies.call(this)) { return false; }
        if (this.isError.call(this, this.getValue())) { return false; }
        return true;
    };

    ValidatedTextInputElement.prototype.getValue = function() {
        return this.codeMirrorElement.getValue();
    };

    ValidatedTextInputElement.prototype.focus = function() {
        this.codeMirrorElement.focus();
    };

    ValidatedTextInputElement.prototype.clear = function() {
        this.disabled = true;
        this.codeMirrorElement.setValue('');
        this.disabled = false;
        jQuery(this.errorElement).empty();
        jQuery(this.errorElement).append(jQuery('<span/>').text(" "));
        jQuery(this.codeMirrorElement.getWrapperElement()).removeClass("stillErroneous");
        jQuery(this.codeMirrorElement.getWrapperElement()).removeClass("correct");
    };

    ValidatedTextInputElement.prototype.addChangeListener = function(f) {
        this.listeners.push(f);
    };

    ValidatedTextInputElement.prototype.scheduleNotification = function() {
        var i;
        for (i = 0; i < this.listeners.length; i++) {
            this.listeners[i](this.isOk());
        }
    };





    // editor: CodeMirror2 editor
    var initializeWidget = function(editor, tokenizer) {
        
        var contract_name, contract_domain, contract_range,
        example1_header, example1_body,
        example2_header, example2_body,
        definition_header, definition_body,
        example1_error, example2_error;


        var getFunctionNameFromContract = function() {
            var identifiers = collectIdentifiers(contract_name.getValue());
            return identifiers[0];
        };

        // Returns a true value (the remaining tokens)
        // if str appears to contain a leading application of a function
        // named with 'name'.
        var looksLikeApplicationOf = function(name, str) {
            var tokens = tokenizer.tokenize(str);
            var i = 0;
            for (; i < tokens.length; i++) {
                if (tokens[i].type === 'whitespace') {
                    // skip whitespace
                } else if (tokens[i].type == '(') {
                    break;
                }
            }
            i++;

            for (; i < tokens.length; i++) {
                if (tokens[i].type === 'whitespace') {
                    // skip whitespace
                } else if (tokens[i].type == 'variable') {
                    if (tokens[i].content === name) {
                        return tokens.slice(i+1);
                    }
                } else {
                    break;
                }
            }
            return false;
        };


        // isNameError: string -> (U #f string)
        // If there's a problem with the name of the function, return a string.
        var isNameError = function(s) {
            if (collectIdentifiers(s).length === 0){
                return "What is the name of your function?";
            }
            if (hasNonIdentifiers(s)) {
                return "The name of your function appears to contains a non-word: " +
                    hasNonIdentifiers(s);
            }
            if (collectIdentifiers(s).length > 1){
                return "The name of your function can only be one word long.";
            }
            return false;
        };

 
        // isDomainError: string -> (U #f string)
        // Returns a string if there's a problem with the domain's value.
        // Returns false otherwise.
        var isDomainError = function(s) {
            if (hasNonIdentifiers(s)) {
                return "The domain of your function appears to contains a non-word: " +
                    hasNonIdentifiers(s);
            }
            if(collectIdentifiers(s).length === 0) {
                return "What is the domain of your function?";
            }
            return false;
        };

        var isRangeError = function(s) {
            if (hasNonIdentifiers(s)) {
                return "The range of your function appears to contains a non-word: " +
                    hasNonIdentifiers(s);
            }
            if(collectIdentifiers(s).length === 0) {
                return "What is the range of your function?";
            }
            if(collectIdentifiers(s).length !== 1){
                return "The range of a function must contain exactly one type";
            }
            return false;
        };


        var isExampleHeaderError = function(header) {
            var name = getFunctionNameFromContract();
            var result = jQuery("<span/>")
                .append("How would use use this function with some inputs?")
                .append(jQuery("<br/>"))
                .append(jQuery("<span/>")
                        .append("HINT: (")
                        .append(name)
                        .append(jQuery("<i/>")
                        		.append("&nbsp;...")
                        		.append(contract_domain.getValue())
                        		.append("...)"))
                        .css("padding-left", "10px"));
                
            // make sure the header begins with "(name", accounting for whitespace
            if (! looksLikeApplicationOf(name, header)) {
                return result;
            }
            
            // make sure the header is well-formed
            if(!wellFormed(header)) {
                result.append(jQuery("<br/>"));
                result.append("The header isn't finished yet.")
                result.append(jQuery("<br/>"));
                result.append("It may have mis-matched parentheses or an unclosed string.");
                return result;
            }
            return false;
        };

        var isExampleBodyError = function(body) {
            if(body.length===0){
                return jQuery("<span/>").text("What should happen for this example?");
            }
            // make sure the body is well-formed
            if(!wellFormed(body)) {
                return jQuery("<span/>").text("Complete the expected value for this example.")
                    .append(jQuery("<br/>"))
                    .append("The expected value might have mis-matched parentheses, or an unclosed string.");
            }
            return false;
        };

        var isContractDependencyError = function() {
            // needs to depend on the okness contract
            // {message: ..., target: ...}
            if (! checkContract()) {
                return { message: "Fix your contract first!",
                         target : document.getElementById("design-recipe-contract") };
            }
            return false;
        };

        var isExampleDependencyError = function() {
            // needs to depend on the okness contract
            // {message: ..., target: ...}
            if (! checkExamples()) {
                return { message: "Complete your examples first!",
                         target : document.getElementById("design-recipe-examples") };
            }
            return false;
        };



        var isDefinitionHeaderError = function(header) {
            var name = getFunctionNameFromContract();
            var result = jQuery("<span/>")
                .append("A function header looks like:")
                .append(jQuery("<br/>"))
                .append(jQuery("<span/>")
                        .append("(")
                        .append(name)
                        .append(jQuery("<i/>")
                        		.append("  ...")
                        		.append(jQuery("<i>variables</i>"))
                        		.append("...)"))
                        .css("padding-left", "10px")
                        .append(jQuery("<br/>")))
                .append("HINT: What changes from one example to another?");

                
            // make sure the header begins with "(name", accounting for whitespace
            if (! looksLikeApplicationOf(name, header)) {
                return result;
            }


            var restOfTheHeader = looksLikeApplicationOf(name, header);
            var extraContent;
            var i, j;
            for (i = 0; i < restOfTheHeader.length; i++) {
                if (restOfTheHeader[i].type === 'whitespace') {
                    // skip
                } else if (restOfTheHeader[i].type === ')') {
                    for (j = i+1; j < restOfTheHeader.length; j++) {
                        if (restOfTheHeader[j].type === 'whitespace') {
                            // skip
                        } else {
                            result.append(jQuery("<br/>"));
                            result.append("The header should only have the function's name and it's variables.");
                            result.append(jQuery("<br/>"));
                            result.append("but it appears to have extra content after the header: ");
                            result.append(jQuery("<br/>"));
                            extraContent = jQuery('<tt/>');
                            for (; j < restOfTheHeader.length; j++) {
                                extraContent.append(restOfTheHeader[j].content)
                            }
                            extraContent.css('padding-left', '10px');
                            result.append(extraContent);
                            return result;
                        }
                    }
                } else if (restOfTheHeader[i].type === 'variable') {
                    // skip
                } else {
                    result.append(jQuery("<br/>"));
                    result.append("The header's variables should only have words, but");
                    result.append(jQuery("<br/>"));
                    result.append(jQuery("<tt/>").text(restOfTheHeader[i].content).css('padding-left', '10px'));
                    result.append(jQuery("<br/>"));
                    result.append("looks like a non-word");
                    return result;
                }
            }

            
            // make sure the header is well-formed
            if(!wellFormed(header)) {
                result.append(jQuery("<br/>"));
                result.append("The function header isn't finished yet.")
                result.append(jQuery("<br/>"));
                result.append("It may have mis-matched parentheses or an unclosed string.");
                return result;
            }
            return false;
        };

        var isDefinitionBodyError = function(body) {
            if(body.length===0){
                return "Fill in the body for this function";
            } else if(!wellFormed(body)) {
                return "The function body might have mis-matched parentheses, or an unclosed string.";
            }
            return false;
        };


        // Forward references
        var checkContract, checkExamples, checkDefinition;
    
        /////////////////////////////////// SETUP /////////////////////////////////////////
        // Create CM instances for code, and all fields of DR Form


        var BlockingConstraint = function(id, elts, okToUnblock, extraParams) {
            this.listeners = [];
            if (! extraParams) { extraParams = {}; }

            var that = this;

            var currentlyBlocked;
            var onChange = function(isOk) {
                if (okToUnblock() && currentlyBlocked) {
                    if (extraParams.toUnblock) {
                        extraParams.toUnblock.call(jQuery(id));
                    } else {
                        jQuery(id).unblock();
                    }
                    currentlyBlocked = false;
                    that.scheduleNotification();
                } else if ((!okToUnblock()) && (!currentlyBlocked)) {
                    if (extraParams.toBlock) {
                        extraParams.toBlock.call(jQuery(id));
                    } else {
                        jQuery(id).block({message : null,
                                          applyPlatformOpacityRules: false});
                    }
                    currentlyBlocked = true;
                    that.scheduleNotification();
                }
            };
            var i;
            for (i = 0; i < elts.length; i++) { 
                elts[i].addChangeListener(onChange);
            }
            if (extraParams.toBlock) {
                extraParams.toBlock.call(jQuery(id));
            } else {
                jQuery(id).block({message : null,
                                  applyPlatformOpacityRules: false});
            }
            currentlyBlocked = true;
            this.scheduleNotification();
        }
        BlockingConstraint.prototype.addChangeListener = function(f) {
            this.listeners.push(f);
        };
        BlockingConstraint.prototype.scheduleNotification = function() {
            var i;
            for (i = 0; i < this.listeners.length; i++) {
                this.listeners[i]();
            }
        };
      



        var setupFieldBindings = function() {
            var contractErrorElt = document.getElementById('design-recipe-contract_error');

            contract_name = new ValidatedTextInputElement(
                document.getElementById("design-recipe-name"),
                isNameError,
                contractErrorElt);

            contract_domain = new ValidatedTextInputElement(
                document.getElementById("design-recipe-domain"),
                isDomainError,
                contractErrorElt);
            
            contract_range = new ValidatedTextInputElement(
                document.getElementById("design-recipe-range"),
                isRangeError,
                contractErrorElt);

            var bc1 = new BlockingConstraint('#design-recipe-examples',
                                             [contract_name, contract_domain, contract_range],
                                             checkContract);
            

            example1_header = new ValidatedTextInputElement(
                document.getElementById("design-recipe-example1_header"),
                isExampleHeaderError,
                document.getElementById("design-recipe-example1_error"),
                isContractDependencyError);
            
            example1_body = new ValidatedTextInputElement(
                document.getElementById("design-recipe-example1_body"),
                isExampleBodyError,
                document.getElementById("design-recipe-example1_error"),
                isContractDependencyError);

            example2_header = new ValidatedTextInputElement(
                document.getElementById("design-recipe-example2_header"),
                isExampleHeaderError,
                document.getElementById("design-recipe-example2_error"),
                isContractDependencyError);
            
            example2_body = new ValidatedTextInputElement(
                document.getElementById("design-recipe-example2_body"),
                isExampleBodyError,
                document.getElementById("design-recipe-example2_error"),
                isContractDependencyError);
            
            var bc2 = new BlockingConstraint('#design-recipe-definition',
                                             [example1_header, example1_body, 
                                              example2_header, example2_body,
                                              bc1],
                                             checkExamples);


            definition_header = new ValidatedTextInputElement(
                document.getElementById("design-recipe-definition_header"),
                isDefinitionHeaderError,
                document.getElementById("design-recipe-definition_error"),
                function() { return isContractDependencyError() || 
                             isExampleDependencyError(); });

            definition_body = new ValidatedTextInputElement(
                document.getElementById("design-recipe-definition_body"),
                isDefinitionBodyError,
                document.getElementById("design-recipe-definition_error"),
                function() { return isContractDependencyError() || 
                             isExampleDependencyError(); });

            
            var bc3 = new BlockingConstraint('#design-recipe-insertCode',
                                             [definition_header, definition_body, bc2],
                                             checkDefinition,
                                             {
                                                 toBlock: function() {
                                                     this.attr('disabled', 'disabled');
                                                 },
                                                 toUnblock: function(x) {
                                                     this.removeAttr('disabled');
                                                 }
                                             });

            example1_error = document.getElementById("design-recipe-example1_error");
            example2_error = document.getElementById("design-recipe-example2_error");


            
        };


        
        // Minimal event-handling wrapper.
        var stopEvent = function() {
            if (this.preventDefault) {this.preventDefault(); this.stopPropagation();}
            else {this.returnValue = false; this.cancelBubble = true;}
        };
        var addStop = function(event) {
            if (!event.stop) { event.stop = stopEvent; }
            return event;
        };
        var connect = function(node, type, handler) {
            function wrapHandler(event) {handler(addStop(event || window.event));}
            if (typeof node.addEventListener === "function") {
                node.addEventListener(type, wrapHandler, false);
            } else {
                node.attachEvent("on" + type, wrapHandler);
            }
        };
        
        ///////////////////////////////////////////////////////////////////////////////////// 
        /////////////////////////////////// PRIVATE /////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////
        
        // store the cursor position
        var pos;
        

        // Scrape the form and return an object, containing all strings
        // put example items in a list, for variable # of examples
        // formValues: -> object
        var formValues = function(){
            return { name:       contract_name.getValue(),
                     domain:     contract_domain.getValue()
                     ,range:      contract_range.getValue()
                     ,contract_error: document.getElementById('design-recipe-contract_error')
                     ,examples:  [{header: example1_header.getValue(),
                                   body: example1_body.getValue(), 
                                   errorDOM: example1_error},
                                  {header: example2_header.getValue(),
                                   body: example2_body.getValue(), 
                                   errorDOM: example2_error}]
                     ,def_header: definition_header.getValue()
                     ,def_body:   definition_body.getValue()
                     ,definition_error: document.getElementById('design-recipe-definition_error')
                   };
        };


        // get the code out of the DR form, and compile into a single string 
        // getDRCode -> string
        var getDRCode = function(){

            // if the code for an editor wrapper fits on one line, return a space. otherwise, a line break
            // TODO: compare to height of actual CM dom node, not the contract wrapper
            var ws = function(elt){ 
                return (document.getElementById(elt).offsetHeight > 
                        (document.getElementById('design-recipe-contract_wrapper').offsetHeight+10))? "\n" : " ";
            };
            var values = formValues();            
            var contract = "; "+values.name+" : "+values.domain+" -> "+values.range;
            var example1     = "(EXAMPLE "+ values.examples[0].header + ws('design-recipe-example1_wrapper') + values.examples[0].body  + ")";   
            var example2     = "(EXAMPLE "+ values.examples[1].header + ws('design-recipe-example2_wrapper') + values.examples[1].body  + ")";   
            var definition   = "(define  "+ values.def_header + ws('design-recipe-definition_wrapper')+values.def_body+ ")";
            
            return contract + "\n" + example1 + "\n" + example2 + "\n"+ definition + "\n\n";
        };
        
        // wellFormed: string -> boolean
        var wellFormed = function(str){
            return tokenizer.hasCompleteExpression(str);
        };
       

        // collectIdentifiers: string -> (listof string)
        var collectIdentifiers = function(str){
            var tokens = tokenizer.tokenize(str);
            var result = [];
            var i;
            for (i = 0; i < tokens.length; i++) {
                if (tokens[i].type === 'variable') {
                    result.push(tokens[i].content);;
                }
            }
            return result;
        };

        // hasNonIdentifiers: string -> (U #f string)
        var hasNonIdentifiers = function(str) {
            var tokens = tokenizer.tokenize(str);
            var i;
            for (i = 0; i < tokens.length; i++) {
                if (tokens[i].type !== 'variable' && tokens[i].type !== 'whitespace') {
                    return tokens[i].content;
                }
            }
            return false;
        };
                                            
        

        /*********************************************
         * Check the name, domain and range
         */
        checkContract = function(){
            return (contract_name.isOk() && 
                    contract_domain.isOk() && 
                    contract_range.isOk());
        };

        checkExamples = function() {
            return (example1_header.isOk() &&
                    example1_body.isOk() &&
                    example2_header.isOk() &&
                    example2_body.isOk());
        };

        checkDefinition = function() {
            return (definition_header.isOk() && definition_body.isOk());
        };
        
        
        
        //////////////////////////////////////////////////////////////////////////////////// 
        /////////////////////////////////// PUBLIC /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////// 
        
        var hlLine;
        
        // add a demo DR widget at cursor location
        var showWidget = function(){
            clearForm();

            // document.getElementById('design-recipe-insertCode').disabled = true;
            pos = editor.getCursor(true);		// get the current cursor location
            pos.ch = 0;							// force the character to 0
            var node= document.getElementById('design-recipe-form');
            connect(node, "click", function(event){event.target.focus(); event.stop(); return false;});
            editor.addWidget(pos, node, true);	// display the DR widget just below the line, and scroll so it's visible
            hlLine = editor.setLineClass(editor.getCursor().line, "activeline");
            contract_name.focus();
        };
        
        
        // inject the text into the editor, indent each line of code, and select it
        var injectCode = function (){
            var text = getDRCode();
            var numLines = text.split("\n").length-1;
            var i;
            editor.replaceRange(text, pos);	// insert all the code from the DR form at the current cursort position
            for(i=pos.line; i< editor.getCursor(true).line; i++) {
                editor.indentLine(i);
            }
            editor.setSelection(pos, {line: pos.line+numLines, ch:0});
            editor.focus();
        };
        
        var clearForm = function (){
            // var i;
            // var values = formValues();
            // values.contract_error.firstChild = "";
            // for (i = 0; i< values.examples.length; i++) {
            //     values.examples[i].errorDOM.innerHTML = "";
            // }
            contract_name.clear();
            contract_domain.clear();
            contract_range.clear();
            example1_header.clear();
            example1_body.clear();
            example2_header.clear();
            example2_body.clear();
            definition_header.clear();
            definition_body.clear();
        };
 
       var hideWidget = function (widget){
            document.getElementById('design-recipe-form').style.left = '-1000px';
            editor.setLineClass(hlLine, "");
            editor.focus();
            clearForm();
        };
        
        
        
        ///////////////// AUTOCOMPLETE //////////////////////////
        

        // // Compare strings case-insensitively.
        // // stringCmp: string string -> (U -1 0 1)
        // var stringCmp = function(x, y) { 
        //     var xn = x.toUpperCase(), yn = y.toUpperCase();
        //     if (xn < yn) { return -1; }
        //     if (xn > yn) { return 1; }
        //     if (x < y) { return -1; }
        //     if (x > y) { return 1; }
        //     return 0;
        // };

        // var functions = "define cond else abs acos add1 andmap angle append asin atan boolean=? boolean? build-list caaar caadr caar cadar cadddr caddr cadr car cdaar cdadr cdar cddar cdddr cddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? complex? conjugate cons cons? cos cosh current-seconds denominator e eighth empty empty? eof eof-object? eq? equal? equal~? eqv? error even? exact->inexact exp expt false false? fifth first floor foldl format fourth gcd identity imag-part inexact->exact inexact? integer->char integer? lcm length list list* list->string list-ref log magnitude make-posn make-string map max member memq memv min modulo negative? not null null? number->string number? numerator odd? pair? pi positive? posn-x posn-y posn? quotient random rational? real-part real? remainder rest reverse round second seventh sgn sin sinh sixth sqr sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-length string-ref string<=? string<? string=? string>=? string>? string? struct? sub1 substring symbol->string symbol=? symbol? tan third true zero? circle triangle star rectangle radial-star rotate flip-vertical flip-horizontal bitmap/url scale scale/xy place-image put-image line overlay overlay/align underlay underlay/align";

        // // Given any of the identifiers in the program or any of the
        // // hardcoded functions that we know, and a token, return the
        // // identifiers that can complete the token.
        // var getCompletions = function(token) {
        //     var i;
        //     // append all strings from the editor, then alphabetize and remove duplicates
        //     var strings = (functions + editor.getValue()).replace(/[\(\)]/g, "").replace(/\s+/g, " ");
        //     strings = strings.split(/[\s+]/);

        //     var found = {}, result = [];
        //     for (i = 0; i < strings.length; i++) {
        //         if (strings[i].indexOf(token.string) === 0) { 
        //             if (! found[strings[i]]) {
        //                 result.push(strings[i]);
        //                 found[strings[i]] = true;
        //             }
        //         }
        //     }
        //     return result.sort(stringCmp);
        // };
        
        
        // var startComplete = function() {
        //     var i;
        //     // We want a single cursor position.
        //     if (editor.somethingSelected()) {
        //         return;
        //     }
        //     // Find the token at the cursor
        //     var cur = editor.getCursor(false), token = editor.getTokenAt(cur), tprop = token;
        //     // If it's not a 'word-style' token, ignore the token.
        //     if (!/^[\w$_]*$/.test(token.string)) {
        //         token = tprop = {start: cur.ch, end: cur.ch, string: "", state: token.state,
        //                          className: token.string === "." ? "js-property" : null};
        //     }
            
        //     var completions = getCompletions(token);
        //     if (!completions.length) {
        //         return;
        //     }
            
        //     function insert(str) {
        //         editor.replaceRange(str, {line: cur.line, ch: token.start}, {line: cur.line, ch: token.end});
        //     }
        //     // When there is only one completion, use it directly.
        //     if (completions.length === 1) {insert(completions[0]); return true;}
            
        //     // Build the select widget
        //     var complete = document.createElement("div");
        //     complete.className = "completions";
        //     var sel = complete.appendChild(document.createElement("select"));
        //     sel.multiple = true;
        //     for (i = 0; i < completions.length; i++) {
        //         var opt = sel.appendChild(document.createElement("option"));
        //         opt.appendChild(document.createTextNode(completions[i]));
        //     }
        //     sel.firstChild.selected = true;
        //     sel.size = Math.min(10, completions.length);
        //     var pos = editor.cursorCoords();
        //     complete.style.left = pos.x + "px";
        //     complete.style.top = pos.yBot + "px";
        //     document.body.appendChild(complete);
        //     // Hack to hide the scrollbar.
        //     if (completions.length <= 10) { 
        //         complete.style.width = (sel.clientWidth - 1) + "px";
        //     }
            
        //     var done = false;
        //     var close = function() {
        //         if (done) {
        //             return;
        //         }
        //         done = true;
        //         complete.parentNode.removeChild(complete);
        //     };
        //     var pick = function() {
        //         insert(sel.options[sel.selectedIndex].value);
        //         close();
        //         setTimeout(function(){editor.focus();}, 50);
        //     };
        //     connect(sel, "blur", close);
        //     connect(sel, "keydown", function(event) {
        //         var code = event.keyCode;
        //         // Enter and space
        //         if (code === 13 || code === 32) {event.stop(); pick();}
        //         // Escape
        //         else if (code === 27) {event.stop(); close(); editor.focus();}
        //         else if (code !== 38 && code !== 40) {close(); editor.focus(); setTimeout(startComplete, 50);}
        //     });
        //     connect(sel, "dblclick", pick);
            
        //     sel.focus();
        //     // Opera sometimes ignores focusing a freshly created node
        //     if (window.opera) {
        //         setTimeout(
        //             function(){
        //                 if (!done) { sel.focus(); }
        //             },
        //             100);
        //     }
        //     return true;
        // };
        

                


        // initialization time:
        setupFieldBindings();
        document.getElementById('design-recipe-insertCode').onclick = function(e) { 
            injectCode(); hideWidget();
        };
        document.getElementById('design-recipe-cancel').onclick = hideWidget;
        
        return { showWidget: showWidget,
                 injectCode: injectCode,
                 hideWidget: hideWidget, 
                 clearForm: clearForm};
        
    };
    
    return initializeWidget;
}());