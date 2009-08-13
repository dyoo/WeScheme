
// Zero-based index.


// node: jQuery
// start: number
// end: number
function CursorSelection(node, start, end) {
    this.node = node;
    this.start = start;
    this.end = end;
}

CursorSelection.prototype.toString = function() {
    return "[" + this.start + ", " + this.end + "]";
};

CursorSelection.prototype.atStart = function() {
    return this.start == this.end && this.end == 0;
};

CursorSelection.prototype.atEnd = function() {
    return this.start == this.end && this.node.text().length == this.end;

};



// getCursorSelection: 
function getCursorSelection() {
    var userSelection;

    if (window.getSelection) {
	var range = window.getSelection().getRangeAt(0);
	return new CursorSelection(jQuery(range.commonAncestorContainer).parent(),
				   range.startOffset,
				   range.endOffset);
    }
    // FIXME: implement for firefox.
    
    throw new Error("Don't know how to get the selection");
}
