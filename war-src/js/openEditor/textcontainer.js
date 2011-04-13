
goog.provide('plt.wescheme.WeSchemeTextContainer');

goog.require('plt.wescheme.topKeymap');



var WeSchemeTextContainer;

// TextContainers should support the following:
//
// onchange attribute: called whenever the text changes, with this bound to the container.
// 



(function() {

    // container: DIV
    // WARNING WARNING. 
    // There's a non-obvious assumption of the textarea implementation:
    // The DIV is already attached to document.body.
    // If this assumptions are violated, then Bad Things happen.
    WeSchemeTextContainer = function(aDiv, options, afterInitialization) {
	var that = this;
	this.div = aDiv;
	this.mode = 'textarea';
	this.impl = null;
	this.options = options;
	this.keymaps = [];

	jQuery(this.div).empty();
	new CodeMirrorImplementation(
	    this,
	    options,
	    function(anImpl){
		that.impl = anImpl;
		afterInitialization(that);
	    });

    };

//     // setMode: string (-> void) -> void
//     WeSchemeTextContainer.prototype.setMode = function(mode,
// 						       afterModeSwitch) {
// 	var that = this;
// 	if (mode == this.mode) {
// 	    return;
// 	} else {
// 	    var code = this.getCode();
// 	    this.impl.shutdown();
// 	    jQuery(this.div).empty();
	    
// 	    var implementations = { textarea: TextareaImplementation,
// 				    codemirror: CodeMirrorImplementation };

// 	    var afterConstruction = function(impl) {
// 		that.impl = impl;
// 		that.mode = mode;
// 		that.impl.setCode(code);

// 		if (afterModeSwitch) { 
// 		    afterModeSwitch(); 
// 		}
// 	    };

// 	    if (implementations.hasOwnProperty(mode)) {
// 		new implementations[mode](this, this.options, afterConstruction);
// 	    } else {
// 		throw new Error("Unknown mode " + mode);
// 	    }

// 	}
//     }


    // Returns a behavior of the source code
    WeSchemeTextContainer.prototype.getSourceB = function() {
	return this.impl.getSourceB();
    };


    WeSchemeTextContainer.prototype.getDiv = function() {
	return this.div;
    };

    // getCode: void -> string
    WeSchemeTextContainer.prototype.getCode = function() {
	return normalizeString(this.impl.getCode.apply(this.impl, arguments));
    };


    // setCode: string -> void
    WeSchemeTextContainer.prototype.setCode = function(code) {
	return this.impl.setCode(normalizeString(code));
    };

    WeSchemeTextContainer.prototype.highlight = function(id, offset, line, column, span) {
	return this.impl.highlight(id, offset, line, column, span);
    };
    

    WeSchemeTextContainer.prototype.addKeymap = function(keyFilter, keyHandler) {
	this.keymaps.push({keyFilter: keyFilter,
			   keyHandler: keyHandler});
    };

    WeSchemeTextContainer.prototype.getKeymap = function() {
	// Creates a composite keymap out of all the keymaps we've received.
	var keymaps = this.keymaps;
	var keyFilter = function(evt) {
	    for (var i = 0 ; i < keymaps.length; i++) {
		if (keymaps[i].keyFilter(evt)) {
		    return true;
		}
	    }
	    return false;
	};
	var keyHandler = function(evt) {
	    for (var i = 0 ; i < keymaps.length; i++) {
		if (keymaps[i].keyFilter(evt)) {
		    return keymaps[i].keyHandler(evt);
		}
	    }
	    return true;
	};
	return { keyFilter: keyFilter,
		 keyHandler: keyHandler };
    };



    WeSchemeTextContainer.prototype.focus = function() {
 	this.impl.focus();
    };


    WeSchemeTextContainer.prototype.getCursorStartPosition = function() {
	return this.impl.getCursorStartPosition();
    };

     WeSchemeTextContainer.prototype.setCursorToBeginning = function() {
         this.impl.setCursorToBeginning();
     };

    //////////////////////////////////////////////////////////////////////
    var CodeMirrorImplementation = function(parent, options, onSuccess) {
	var that = this;
	this.behaviorE = receiverE();
	this.behavior = startsWith(this.behaviorE, "");

	new CodeMirror(
	    parent.getDiv(), 
	    { 
		path: "/js/codemirror/js/",
		parserfile: ["../contrib/scheme/js/tokenizescheme.js",
			     "../contrib/scheme/js/parsescheme.js"],
		stylesheet: (options.stylesheet ||
			     "/js/codemirror/contrib/scheme/css/schemecolors.css"),
		autoMatchParens: true,
		disableSpellcheck: true,
		lineNumbers: (typeof (options.lineNumbers) !== 'undefined'? options.lineNumbers :  true),
		textWrapping: true,
		content: options.content || "",
		width: options.width || "100%",
		height: options.height || "100%",
		minHeight: options.minHeight,
		readOnly: (typeof (options.readOnly) !== 'undefined'? options.readOnly : false),

		markParen: function(span, good) {addClass(span, good ? "good-matching-paren" : "bad-matching-paren");},

		unmarkParen: function(span) {removeClass(span, "good-matching-paren"); removeClass(span, "bad-matching-paren");},


		onChange: function() {
		    that.behaviorE.sendEvent(that.editor.getCode());
		},

		initCallback: function(editor) {
		    that.editor = editor;
		    
		    if (options.makeTransparentIframe) {
			// IE compatibility.
			// See: http://blogs.msdn.com/b/tl/archive/2008/10/28/9020354.aspx
			that.editor.frame.allowTransparency = true;
		    }

		    var keyFilter = function(keycode, event) {
			return parent.getKeymap().keyFilter(event);
		    };

		    var keyHandler = function(event) {
			return parent.getKeymap().keyHandler(event);
		    };


		    that.editor.grabKeys(keyHandler, keyFilter);
		    onSuccess.call(that, that);
		}});
    };

    CodeMirrorImplementation.prototype.getSourceB = function() {
	return this.behavior;
    };

    CodeMirrorImplementation.prototype.getCode = function(startOffset, endOffset) {
	// On exceptional cases, onChange does NOT get called.
	// I haven't traced exactly where this is happening in the
	// CodeMirror source, but it's happening.  So we have to do
	// some defensive programming here...
	var code = this.editor.getCode();
 	if (valueNow(this.behavior) !== code) {
 	    this.behaviorE.sendEvent(code);
 	}

	if (typeof(startOffset) !== 'undefined') {
	    if (typeof(endOffset) !== 'undefined') {
		return code.substring(startOffset, endOffset);
	    } else {
		return code.substring(startOffset);
	    }
	} else {
 	    return code;
	}
    };

    CodeMirrorImplementation.prototype.setCode = function(code) {
	this.editor.setCode(code);
	this.behaviorE.sendEvent(code);
    };


    CodeMirrorImplementation.prototype.highlight = function(id, offset, line, column, span) {
	offset--;
	// For some reason, we're getting the offset from the highlighter
	// as 1-offset, rather than 0-offset.
	var startHandleAndColumn = this.findHandleAndColumn(offset);
	var endHandleAndColumn = this.findHandleAndColumn(offset+span);
	this.editor.selectLines(startHandleAndColumn.handle, startHandleAndColumn.column,
				endHandleAndColumn.handle, endHandleAndColumn.column);
    };


    // findHandleAndColumn: number -> { handle: handle, column: number }
    // Figures out the line and column.
    CodeMirrorImplementation.prototype.findHandleAndColumn = function(offset) {
	var endHandle = this.editor.nthLine(1);
	var endColumn = 0;
	while (offset > 0) {
	    if (this.editor.lineContent(endHandle).length >= offset) {
		endColumn += offset;
		offset = 0;
	    } else {
		offset = offset - this.editor.lineContent(endHandle).substring(endColumn).length - 1;
		endHandle = this.editor.nextLine(endHandle);
		endColumn = 0;
	    }
	}
	return { handle: endHandle, column: endColumn };
    };


    CodeMirrorImplementation.prototype.getOffsetFromHandleAndColumn = function(handle, column) {
	var startHandle = this.editor.firstLine();
	var offset = 0;
	while (this.editor.lineNumber(startHandle) !== this.editor.lineNumber(handle)) {
	    offset += this.editor.lineContent(startHandle).length + 1;
	    startHandle = this.editor.nextLine(startHandle);
	}
	offset += column;
	return offset;
    };


    CodeMirrorImplementation.prototype.getCursorStartPosition = function() {
	var pos = this.editor.cursorPosition(true);
	return this.getOffsetFromHandleAndColumn(pos.line,
						 pos.character);
    };

     CodeMirrorImplementation.prototype.setCursorToBeginning = function() {
         // TODO: Is there a better way to do this?
	var startHandleAndColumn = this.findHandleAndColumn(0);
	this.editor.selectLines(startHandleAndColumn.handle,
                                startHandleAndColumn.column,
				startHandleAndColumn.handle,
                                startHandleAndColumn.column);
     };

    CodeMirrorImplementation.prototype.shutdown = function() {
    };


    CodeMirrorImplementation.prototype.focus = function() {
 	this.editor.focus();
	var start = this.editor.cursorPosition(true);
	var end = this.editor.cursorPosition(false);
	this.editor.selectLines(start.line, start.character,
				end.line, end.character);
    };


    //////////////////////////////////////////////////////////////////////
    // Helpers


    var normalizeString = function(s) {
	return s.replace(/\r\n/g, "\n");
    };



    var hasClass = function(element, className) {
	var classes = element.className;
	return classes && new RegExp("(^| )" + className + "($| )").test(classes);
    };


    var addClass = function(element, className) {
	if (!hasClass(element, className)) {
	    element.className = ((element.className.split(" ")).concat([className])).join(" ");
	}
    };

    var removeClass = function(element, className) {
	if (hasClass(element, className)) {
	    var classes = element.className.split(" ");
	    for (var i = classes.length - 1 ; i >= 0; i--) {
		if (classes[i] === className) {
		    classes.splice(i, 1);
		}
	    }
	    element.className = classes.join(" ");
	}
    };


})();



plt.wescheme.WeSchemeTextContainer = WeSchemeTextContainer;
