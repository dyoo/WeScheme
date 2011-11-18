goog.provide('plt.wescheme.WeSchemeTextContainer');

goog.provide('plt.wescheme.fireEvent')

goog.require('plt.wescheme.topKeymap');

//hack to fire events that CodeMirror will pick up

var fireEvent = function (element,event){
    if (document.createEventObject){
    // dispatch for IE
    var evt = document.createEventObject();
    return element.fireEvent('on'+event,evt)
    }
    else{
    // dispatch for firefox + others
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true ); // event type,bubbling,cancelable
    return !element.dispatchEvent(evt);
    }
}

plt.wescheme.fireEvent = fireEvent;

var WeSchemeTextContainer;

//TextContainers should support the following:

//onchange attribute: called whenever the text changes, with this bound to the container.

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

	WeSchemeTextContainer.prototype.refresh = function() {
		this.impl.refresh();
	};

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

	WeSchemeTextContainer.prototype.setCursorToEnd = function() {
		this.impl.setCursorToEnd();
	};

	//////////////////////////////////////////////////////////////////////

	var CodeMirrorImplementation = function(parent, options, onSuccess) {

		// Note: "parent" seems to be a "WeSchemeTextContainer".
		//
		// Note: "CodeMirrorImplementation.editor" is set by the "initCallback"
		// of the "CodeMirror" created here, to the argument of the
		// "initCallback".

		var that = this;
		this.behaviorE = receiverE();
		this.behavior = startsWith(this.behaviorE, "");


		this.editor = CodeMirror(
				parent.getDiv(), 
				{ 
					/*path: "/js/codemirror/js/",
		parserfile: ["../contrib/scheme/js/tokenizescheme.js",
			     "../contrib/scheme/js/parsescheme.js"],
		stylesheet: (options.stylesheet ||
			     "/js/codemirror/contrib/scheme/css/schemecolors.css"),
		autoMatchParens: true,
		disableSpellcheck: true,*/
					theme: (options.theme || "scheme"),
					mode: "scheme2",
					tabMode: "indent",
					lineNumbers: (typeof (options.lineNumbers) !== 'undefined'? options.lineNumbers :  true),
					//textWrapping: true,
					matchBrackets: true,
					value: options.content || "",
					//width: options.width || "100%",
					//height: options.height || "100%",
					//minHeight: options.minHeight,
					readOnly: (typeof (options.readOnly) !== 'undefined'? options.readOnly : false),

					//markParen: function(span, good) {addClass(span, good ? "good-matching-paren" : "bad-matching-paren");},

					//unmarkParen: function(span) {removeClass(span, "good-matching-paren"); removeClass(span, "bad-matching-paren");},


					onChange: function() {
						that.behaviorE.sendEvent(that.editor.getValue());
					},
					//TODO what does this do?
					
					onKeyEvent: function(editor,event) {
						var keymap = parent.getKeymap();
						if (keymap.keyFilter(event)) {
							keymap.keyHandler(event);
							event.stop();
							return true;
						}
					}});
		/*if (options.makeTransparentIframe) {
			// IE compatibility.
			// See: http://blogs.msdn.com/b/tl/archive/2008/10/28/9020354.aspx
			that.editor.frame.allowTransparency = true;
		}*/

		//console.log(this.editor.getScrollerElement())
		this.editor.getWrapperElement().style.width = options.width || "100%";
            // Under IE 7, this appears to die.
            try {
		this.editor.getWrapperElement().style.height = options.height || "100%";
            } catch (e) {}

		this.editor.getScrollerElement().style.width = "100%";
            // Under IE 7, this appears to die.
            try {
		this.editor.getScrollerElement().style.height = "100%";
            } catch (e) {}
		
		this.editor.refresh();

		onSuccess.call(that, that);
	};

	CodeMirrorImplementation.prototype.getSourceB = function() {
		return this.behavior;
	};

	CodeMirrorImplementation.prototype.getCode = function(startOffset, endOffset) {
		// On exceptional cases, onChange does NOT get called.
		// I haven't traced exactly where this is happening in the
		// CodeMirror source, but it's happening.  So we have to do
		// some defensive programming here...
		var code = this.editor.getValue();
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
		this.editor.setValue(code);
		this.behaviorE.sendEvent(code);
		this.editor.refresh();
	};

	CodeMirrorImplementation.prototype.handleAndColumnToPos = function (handle) {
		return {
			line: handle.handle,
			ch: handle.column
		}
	}

	CodeMirrorImplementation.prototype.highlight = function(id, offset, line, column, span) {
		offset--;
		// For some reason, we're getting the offset from the highlighter
		// as 1-offset, rather than 0-offset.
		var startHandleAndColumn = this.findHandleAndColumn(offset);
		var endHandleAndColumn = this.findHandleAndColumn(offset+span);
		this.editor.setSelection(
				this.handleAndColumnToPos(startHandleAndColumn),
				this.handleAndColumnToPos(endHandleAndColumn))
	};


	// findHandleAndColumn: number -> { handle: handle, column: number }
	// Figures out the line and column.
	CodeMirrorImplementation.prototype.findHandleAndColumn = function(offset) {
		var endHandle = 0;
		var endColumn = 0;
		while (offset > 0) {
			if (this.editor.getLine(endHandle).length >= offset) {
				endColumn += offset;
				offset = 0;
			} else {
				offset = offset - this.editor.getLine(endHandle).length - 1;
				endHandle += 1;
			}
		}
		return { handle: endHandle, column: endColumn };
	};


	CodeMirrorImplementation.prototype.getOffsetFromHandleAndColumn = function(handle, column) {
		var startHandle = 0
		var offset = 0;
		while (startHandle !== handle) {
			offset += this.editor.getLine(startHandle).length + 1;
			startHandle += 1
		}
		offset += column;
		return offset;
	};


	CodeMirrorImplementation.prototype.getCursorStartPosition = function() {
		var pos = this.editor.getCursor(true);
		return this.getOffsetFromHandleAndColumn(pos.line,
				pos.ch);
	};

	CodeMirrorImplementation.prototype.setCursorToBeginning = function() {
		this.editor.setCursor(0,0)
		/*
		// TODO: Is there a better way to do this?
		var startHandleAndColumn = this.findHandleAndColumn(0);
		this.editor.selectLines(startHandleAndColumn.handle,
				startHandleAndColumn.column,
				startHandleAndColumn.handle,
				startHandleAndColumn.column);
				*/
	};

	CodeMirrorImplementation.prototype.setCursorToEnd = function() {
		this.editor.setCursor({line:this.editor.lineCount()});
		/*
		var editor = this.editor;
		editor.selectLines(editor.lastLine(),
				editor.lineContent(editor.lastLine()).length);
				*/
	};

	CodeMirrorImplementation.prototype.shutdown = function() {
	};


	CodeMirrorImplementation.prototype.focus = function() {
		this.editor.focus();
		/*
		var start = this.editor.getCursor(true);
		var end = this.editor.getCursor(false);
		this.editor.setSelection(start,end);
		*/
	};
	
	CodeMirrorImplementation.prototype.refresh = function() {
		this.editor.refresh();
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
