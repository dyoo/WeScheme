/*jslint devel: true, browser: true, unparam: true, sub: true, windows: false, vars: true, white: true, plusplus: true, maxerr: 50, indent: 4 */
/*global CodeMirror*/
var initializeWidget = (function () {
    'use strict';
    



    // editor: CodeMirror2 editor
    var initializeWidget = function(editor, tokenizer) {
        
        var contract_name, contract_domain, contract_range,
        example1_header, example1_body,
        example2_header, example2_body,
        definition_header, definition_body,
        example1_error, example2_error;



        // A ValidatedTextInputElement is a combination of an text
        // element, a function for determining erroneous content, and
        // an element for reporting errors.
        //
        // A ValidatedTextInputElement has several event streams:
        //
        // textValueE: the content of the text field.
        // isGoodB: if the text field satisfies all its tests
        //
        // This injects a span into the errorElement that will report
        // errors.
        var ValidatedTextInputElement = function(textElement,
                                                 isError,
                                                 errorElement) {
            var that = this;
            var textValueE = receiverE();
            var setValue = function() {
                textValueE.sendEvent(that.codeMirrorElement.getValue());
            };
            

            this.codeMirrorElement = 
                CodeMirror.fromTextArea(textElement,
                                        { matchBrackets: true,
                                          tabMode: "default",
                                          onChange: setValue,
                                          onBlur: setValue,
                                          onFocus: setValue });

            var calmedTextValueE = textValueE.calmE(500);
            var errorE = calmedTextValueE.mapE(isError);

            this.isGoodB = startsWith(notE(errorE), false);

            // On errors, the content of the errorElement will change.
            var parentElt = document.createElement('span');
            errorElement.appendChild(parentElt);
            insertDomE(
                errorE.mapE(
                    function(msg) {
                        var elt = document.createElement('span');
                        elt.className = "error";
                        if (msg) {
                            that.codeMirrorElement.getWrapperElement().style.border = '1px solid red';
                            elt.appendChild(document.createTextNode(msg));
                        } else {
                            that.codeMirrorElement.getWrapperElement().style.border = '1px solid black';
                        }
                        return elt;
                    }),
                parentElt);
        };

        ValidatedTextInputElement.prototype.getValue = function() {
            return this.codeMirrorElement.getValue();
        };

        ValidatedTextInputElement.prototype.focus = function() {
            this.codeMirrorElement.focus();
        };

        ValidatedTextInputElement.prototype.clear = function() {
            this.codeMirrorElement.setValue('');
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
            if(collectIdentifiers(s).length === 0) {
                return "What is the domain of your function?";
            }
            if (hasNonIdentifiers(s)) {
                return "The domain of your function appears to contains a non-word: " +
                    hasNonIdentifiers(s);
            }
            return false;
        };

        var isRangeError = function(s) {
            if(collectIdentifiers(s).length !== 1){
                return "The range of a function must contain exactly one type";
            }
            if (hasNonIdentifiers(s)) {
                return "The range of your function appears to contains a non-word: " +
                    hasNonIdentifiers(s);
            }
            return false;
        };



        // Forward references
        var checkContract, checkExamples, checkDefinition;
    
        /////////////////////////////////// SETUP /////////////////////////////////////////
        // Create CM instances for code, and all fields of DR Form

        var setupFieldBindings = function() {
            var errorElt = document.getElementById('design-recipe-contract_error');

            contract_name = new ValidatedTextInputElement(
                document.getElementById("design-recipe-name"),
                isNameError,
                errorElt);

            contract_domain = new ValidatedTextInputElement(
                document.getElementById("design-recipe-domain"),
                isDomainError,
                errorElt);
            
            contract_range = new ValidatedTextInputElement(
                document.getElementById("design-recipe-range"),
                isRangeError,
                errorElt);

            example1_header   = CodeMirror.fromTextArea(document.getElementById("design-recipe-example1_header")
                                                        ,{matchBrackets: true
                                                          , tabMode: "default"
                                                          , onChange: checkExamples
                                                          , onFocus: checkExamples});
            example1_body     = CodeMirror.fromTextArea(document.getElementById("design-recipe-example1_body")
                                                        ,{matchBrackets: true
                                                          , tabMode: "default"
                                                          , onChange: checkExamples
                                                          , onFocus: checkExamples});
            example2_header   = CodeMirror.fromTextArea(document.getElementById("design-recipe-example2_header")
                                                        ,{matchBrackets: true
                                                          , tabMode: "default"
                                                          , onChange: checkExamples
                                                          , onFocus: checkExamples});
            example2_body     = CodeMirror.fromTextArea(document.getElementById("design-recipe-example2_body")
                                                        ,{matchBrackets: true
                                                          , tabMode: "default"
                                                          , onChange: checkExamples
                                                          , onFocus: checkExamples});
            definition_header = CodeMirror.fromTextArea(document.getElementById("design-recipe-definition_header")
                                                        ,{matchBrackets: true
                                                          , tabMode: "default"
                                                          , onChange: checkDefinition
                                                          , onFocus: checkDefinition});
            definition_body  = CodeMirror.fromTextArea(document.getElementById("design-recipe-definition_body"),
                                                       { matchBrackets: true,
                                                         tabMode: "default",
                                                         onChange: checkDefinition,
                                                         onFocus: checkDefinition,
                                                         onBlur: function() { contract_name.focus(); }});
            
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
            var definition   = "(define  "+ values.def_header + ws('design-recipe-definition_wrapper')+values.def_header+ ")";
            
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
            //var values = formValues();
            // if(collectIdentifiers(values.name).length === 0){
            //     values.contract_error.innerHTML = "What is the name of your function?";
            //     return false;
            // } else if(collectIdentifiers(values.name).length > 1){
            //     values.contract_error.innerHTML = "The name of your function can only be one word long";
            //     return false;
            // } 
            // if(collectIdentifiers(values.range).length !== 1){
            //     values.contract_error.innerHTML = "The range of a function must contain exactly one type";
            //     return false; 
            // } else {
            //     values.contract_error.innerHTML = "";
            //     return true;
            // }
            return (contract_name.isGoodB.valueNow() && 
                    contract_domain.isGoodB.valueNow() && 
                    contract_range.isGoodB.valueNow());
        };
        
        
        /*********************************************
         * Check a single example for well-formedness
         */
        var checkExample = function(name, header, body, errorDOM){
            var nameRegExp = new RegExp("\\(\\s*"+name);
            // make sure the header begins with "(name", accounting for whitespace
            if(!header.match(nameRegExp)) {
                errorDOM.innerHTML = "An example header looks like \"(<i>name</i> ...<i>inputs</i>...)\"";
                return false;
            }
            // make sure the header is well-formed
            if(!wellFormed(header)) {
                errorDOM.innerHTML = "The header might have mis-matched parentheses, or an unclosed string.";
                return false;
            }
            
            // TODO: count inputs, if possible
            // make sure the body is non-null
            if(body.length===0){
                errorDOM.innerHTML = "Fill in the body for this example";
                return false;
            }
            // make sure the body is well-formed
            if(!wellFormed(body)) {
                errorDOM.innerHTML = "The header might have mis-matched parentheses, or an unclosed string.";
                return false;
            }
            
            errorDOM.innerHTML = "";
            return true;
        };
        
        /*********************************************
         * Check all examples
         */
        checkExamples = function(){
            var values = formValues();
            //            var correctExamples = false;
            var i;
            if(!checkContract()){
                for (i = 0; i < values.examples.length; i++) {
                    values.examples[i].errorDOM.innerHTML = "<b>Fix your contract first!</b>";
                }
                
                return false;
            }
            
            var all_valid = true;
            for(i=0; i<values.examples.length; i++){
                var example = values.examples[i];
                if(all_valid){ 
                    all_valid = all_valid && checkExample(values.name, example.header, example.body, example.errorDOM);
                } else {
                    example.errorDOM.innerHTML = "<b>Finish your previous example before starting this one</b>";
                }
            }
            
            return all_valid;
        };
        
        /*********************************************
         * Check the function definition
         */
        checkDefinition = function(){
            var values = formValues();
            //            var correctExamples;

            if(!checkContract()){
                values.definition_error.innerHTML = "<b>Fix your contract first!</b>";
                return false;
            }
            if(!checkExamples()){
                values.definition_error.innerHTML = "<b>Fix your examples first!</b>";
                return false;
            }
            
            var nameRegExp = new RegExp("\\(\\s*"+values.name);
            // make sure the header begins with "(name", accounting for whitespace
            if(!values.def_header.match(nameRegExp)) {
                values.definition_error.innerHTML = "A function header looks like \"(<i>name</i> ...<i>variables</i>...)\". <br/>HINT: Look at your examples if you get stuck. What changes from example to example?";
                return false;
            } else if(!wellFormed(values.def_header)){
                values.definition_error.innerHTML = "The function header might have mis-matched parentheses, or an unclosed string.";
                return false;
            }
            
            // TODO: count inputs, if possible
            // make sure the header and body are non-null
            else if(values.def_body.length===0){
                values.definition_error.innerHTML = "Fill in the body for this function";
            } else if(!wellFormed(values.def_body)) {
                values.example1_error.innerHTML = "The function body might have mis-matched parentheses, or an unclosed string.";
                //correctExamples = false;
            } else {
                values.definition_error.innerHTML = ""; 
                document.getElementById('design-recipe-insertCode').disabled = false;
                return true;
            }
        };
        
        // // are all of the Forms parts correct?
        // var checkForm = function(){
        //     return checkContract() && checkExamples && checkDefinition;
        // };
        
        //////////////////////////////////////////////////////////////////////////////////// 
        /////////////////////////////////// PUBLIC /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////// 
        
        var hlLine;
        
        // add a demo DR widget at cursor location
        var showWidget = function(){
            document.getElementById('design-recipe-insertCode').disabled = true;
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
            var i;
            var values = formValues();
            values.contract_error.firstChild = "";
            for (i = 0; i< values.examples.length; i++) {
                values.examples[i].errorDOM.innerHTML = "";
            }
            values.definition_error.innerHTML = "";
            contract_name.clear();
            contract_domain.clear();
            contract_range.setValue('');
            example1_header.setValue('');
            example1_body.setValue('');
            example2_header.setValue('');
            example2_body.setValue('');
            definition_header.setValue('');
            definition_body.setValue('');
        };
 
       var hideWidget = function (widget){
            document.getElementById('design-recipe-form').style.left = '-1000px';
            editor.setLineClass(hlLine, "");
            editor.focus();
            clearForm();
        };
        
        
        
        ///////////////// AUTOCOMPLETE //////////////////////////
        

        // Compare strings case-insensitively.
        // stringCmp: string string -> (U -1 0 1)
        var stringCmp = function(x, y) { 
            var xn = x.toUpperCase(), yn = y.toUpperCase();
            if (xn < yn) { return -1; }
            if (xn > yn) { return 1; }
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        };

        var functions = "define cond else abs acos add1 andmap angle append asin atan boolean=? boolean? build-list caaar caadr caar cadar cadddr caddr cadr car cdaar cdadr cdar cddar cdddr cddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? complex? conjugate cons cons? cos cosh current-seconds denominator e eighth empty empty? eof eof-object? eq? equal? equal~? eqv? error even? exact->inexact exp expt false false? fifth first floor foldl format fourth gcd identity imag-part inexact->exact inexact? integer->char integer? lcm length list list* list->string list-ref log magnitude make-posn make-string map max member memq memv min modulo negative? not null null? number->string number? numerator odd? pair? pi positive? posn-x posn-y posn? quotient random rational? real-part real? remainder rest reverse round second seventh sgn sin sinh sixth sqr sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-length string-ref string<=? string<? string=? string>=? string>? string? struct? sub1 substring symbol->string symbol=? symbol? tan third true zero? circle triangle star rectangle radial-star rotate flip-vertical flip-horizontal bitmap/url scale scale/xy place-image put-image line overlay overlay/align underlay underlay/align";

        // Given any of the identifiers in the program or any of the
        // hardcoded functions that we know, and a token, return the
        // identifiers that can complete the token.
        var getCompletions = function(token) {
            var i;
            // append all strings from the editor, then alphabetize and remove duplicates
            var strings = (functions + editor.getValue()).replace(/[\(\)]/g, "").replace(/\s+/g, " ");
            strings = strings.split(/[\s+]/);

            var found = {}, result = [];
            for (i = 0; i < strings.length; i++) {
                if (strings[i].indexOf(token.string) === 0) { 
                    if (! found[strings[i]]) {
                        result.push(strings[i]);
                        found[strings[i]] = true;
                    }
                }
            }
            return result.sort(stringCmp);
        };
        
        
        var startComplete = function() {
            var i;
            // We want a single cursor position.
            if (editor.somethingSelected()) {
                return;
            }
            // Find the token at the cursor
            var cur = editor.getCursor(false), token = editor.getTokenAt(cur), tprop = token;
            // If it's not a 'word-style' token, ignore the token.
            if (!/^[\w$_]*$/.test(token.string)) {
                token = tprop = {start: cur.ch, end: cur.ch, string: "", state: token.state,
                                 className: token.string === "." ? "js-property" : null};
            }
            
            var completions = getCompletions(token);
            if (!completions.length) {
                return;
            }
            
            function insert(str) {
                editor.replaceRange(str, {line: cur.line, ch: token.start}, {line: cur.line, ch: token.end});
            }
            // When there is only one completion, use it directly.
            if (completions.length === 1) {insert(completions[0]); return true;}
            
            // Build the select widget
            var complete = document.createElement("div");
            complete.className = "completions";
            var sel = complete.appendChild(document.createElement("select"));
            sel.multiple = true;
            for (i = 0; i < completions.length; i++) {
                var opt = sel.appendChild(document.createElement("option"));
                opt.appendChild(document.createTextNode(completions[i]));
            }
            sel.firstChild.selected = true;
            sel.size = Math.min(10, completions.length);
            var pos = editor.cursorCoords();
            complete.style.left = pos.x + "px";
            complete.style.top = pos.yBot + "px";
            document.body.appendChild(complete);
            // Hack to hide the scrollbar.
            if (completions.length <= 10) { 
                complete.style.width = (sel.clientWidth - 1) + "px";
            }
            
            var done = false;
            var close = function() {
                if (done) {
                    return;
                }
                done = true;
                complete.parentNode.removeChild(complete);
            };
            var pick = function() {
                insert(sel.options[sel.selectedIndex].value);
                close();
                setTimeout(function(){editor.focus();}, 50);
            };
            connect(sel, "blur", close);
            connect(sel, "keydown", function(event) {
                var code = event.keyCode;
                // Enter and space
                if (code === 13 || code === 32) {event.stop(); pick();}
                // Escape
                else if (code === 27) {event.stop(); close(); editor.focus();}
                else if (code !== 38 && code !== 40) {close(); editor.focus(); setTimeout(startComplete, 50);}
            });
            connect(sel, "dblclick", pick);
            
            sel.focus();
            // Opera sometimes ignores focusing a freshly created node
            if (window.opera) {
                setTimeout(
                    function(){
                        if (!done) { sel.focus(); }
                    },
                    100);
            }
            return true;
        };
        

                


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