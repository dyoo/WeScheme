var savedContents = "";

// makeBreak: key-event -> void
function makeBreak(e){
  var brk = $("<br />")
             .addClass("userBreak")
             .addClass("wspace")
             .attr("contenteditable","false");
  brk.splitAndInsertAtSelection();
  brk.next().focusStart();
}

// makeSpace: key-event -> void
function makeSpace(e){
  var space =
    $("<div/>")
      .addClass("wspace")
      .addClass("space");

  space.splitAndInsertAtSelection();
  space.next().focusStart();

}

// makeLiteral : key-event -> void
function makeLiteral(e){
  var lit =
    $("<div/>")
     .addClass("literal")
     .append(
       $("<div />")
         .addClass("tick")
         .attr("contenteditable","false")
         .text('\''))
      .append(
        $("<div />")
          .addClass("data")
          .attr("contenteditable","true")
          .text(" ")
          .keypress(tempKeyHandler));
  lit.splitAndInsertAtSelection();

  lit.keypress(literalKeyHandler);
  lit.children(".data").focus();
  lit.children(".data").contentFocus();

}

// makeString: key-event -> void
function makeString(e){
  var tar = jQuery(e.target);
  var str =
    $("<div/>")
     .addClass("string")
     .append(
       $("<div />")
         .addClass("open")
         .text('"'))
     .append(
       $("<div />")
         .addClass("data")
         .attr("contenteditable","true")
         .text(" ")
         .keypress(tempKeyHandler))
     .append(
       $("<div />")
         .addClass("close")
         .addClass("gray")
         .text('"'));


  str.splitAndInsertAtSelection();
  str.find(":data").keypress(stringKeyHandler);

  str.children(".data").focus();
  str.children(".data").contentFocus();


}


// makeSexpr: key-event -> void
function makeSexpr(e){
 
  var tar = jQuery(e.target);
 
 var sexpr =  
   $("<div/>")
     .addClass("sexpr")
     .attr("contenteditable","false")
     .append(
       $("<div />")
         .addClass("open")
         .text("("))
     .append(
       $("<div />")
         .addClass("data ")
         .attr("contenteditable","true")
         .html("&nbsp;")
         .keypress(tempKeyHandler))
     .append(
       $("<div />")
         .addClass("close")
         .addClass("gray")
         .text(")"));
  sexpr.splitAndInsertAtSelection();

  sexpr.children(".data").focus();
  sexpr.children(".data").contentFocus();


}

function tempKeyHandler(e){
  e.stopPropagation();
  switch(e.keyCode){
  case 8:                   //backspace
  case 46:                  //delete
    e.preventDefault();
    break;
  default:
    var tar = $(e.target);
    tar.text("");
    tar.unbind('keypress',tempKeyHandler);
  }
}

function leaveBlock(type, e){
  var tar = $(e.target);
  var range = window.getSelection().getRangeAt(0);

  if(tar.next(":first").hasClass(type) 
     && range.endOffset == tar.text().length ){
    tar.next(":first").removeClass("gray");
    tar.parent().next(":first").focusStart();
    e.preventDefault(); 
  }
}

function globalKeyHandler(e){
  
  console.log("reached the global key handler");

  switch(e.keyCode){
  case 8:                   //backspace
      backspace(e);
      return;
  case 13:                   // newline
      makeBreak(e);
      e.preventDefault();
      return;
  case 37:                   // left
      leftKey(e);
      return;
  case 39:                 // right
      rightKey(e);
      return;
  case 46:
      deleteKey(e);
      return;
  }

  switch(e.charCode){
  case 32:                   // space
      makeSpace(e);
      e.preventDefault();
      return;
  default:
      return;
  }
}


// backspace: key-event -> void
function backspace(e) {
    

    var aSelection = getCursorSelection();
    var tar = aSelection.node;

    // If we're at the start edge, merge with the previous sibling.
    if(aSelection.atStart()) {
	e.preventDefault();
	
        var pred = tar.prev(":first");
    
        if( pred.hasClass("wspace") ){
            pred.remove();
            pred = tar.predecessor();

            if( pred.hasClass("data") ){
              var loc = pred.text().length;
              tar.text(pred.text() + tar.text());
              pred.remove();              
              tar.focusAt(loc); 
            }
        } 
    
        if( pred.hasClass("open") ){
          // We need to walk up to the S-expr
          var sexpr = tar.parent();
          var lastNode = tar.parent().children(":last"); // the last node might be the same as tar
          
          sexpr.children(".open").remove();
          sexpr.children(".close").remove();

          var prev = sexpr.prev(":first");
          var next = sexpr.next(":first");
          sexpr.unwrap();

          if( lastNode.hasClass("data") && next.hasClass("data") ){
            lastNode.text(lastNode.text() + next.text());
            next.remove();
          }


          if( tar.hasClass("data") && prev.hasClass("data") ){
            var len = prev.text().length;
            tar.text(prev.text() + tar.text());
            prev.remove();
            tar.focusAt(len);
          } else {
            tar.focusAt(0);
          }
        }
        

    } else {
	e.preventDefault();
	// Manually doing backspace deletion to avoid the introduction
	// of the weird <br _mozdirty="" type="_moz"> stuff.
	var range = window.getSelection().getRangeAt(0);
	if (range.startOffset == range.endOffset) {
	    range.setStart(range.startContainer, range.startOffset - 1);
	}
	range.deleteContents();
  }

  if( tar.text().length == 0 ){
    tar.html("&nbsp;");
    tar.keypress(tempKeyHandler);
  }

}

// FIXME: We may need to do something clever here, at least according to
// http://stackoverflow.com/questions/202285/trigger-a-keypress-with-jqueryand-specify-which-key-was-pressed
function leftKey(e) {

    var aSelection = getCursorSelection();
    if(aSelection.atStart()) {
	e.preventDefault();
	var predecessor = aSelection.node.predecessorWith(
	    function(p){ 
		return p.attr("contenteditable") == "true" && p.children().size() == 0;
	    });
	if (predecessor.size() > 0) {
	    predecessor.get(0).focus();
      predecessor.focusEnd();
	}

    }
}

function rightKey(e) {
    var aSelection = getCursorSelection();
    if (aSelection.atEnd()) {
	e.preventDefault();
	var successor =	aSelection.node.successorWith(
	    function(p){ 
		return p.attr("contenteditable") == "true" && p.children().size() == 0;
	    });

	if (successor.size() > 0) {
	    successor.focusStart();
	}
    }
}



function deleteKey(e) {
    var aSelection = getCursorSelection();
    //    debugLog(aSelection);
    if (aSelection.atEnd()) {
	e.preventDefault();
	//	debugLog("We should delete forward");
    }
}

// sexprKeyHandler: key-event -> void
function sexprKeyHandler(e){

  console.log("trapped a keypress in sexpr");
  e.stopPropagation();
  //  debugLog("sexprKeyHandler");
  //  debugLog(e.target);
  //  debugLog(e);


  switch(e.charCode){
  case 34:                 // quote
      makeString(e);
      e.preventDefault();
      break;
  case 39:
      makeLiteral(e);
      e.preventDefault();
      break;
  case 40:                 // paren
      makeSexpr(e);
      e.preventDefault();
      break;
  case 41:
      leaveBlock("close",e);
      break;
    default:
      globalKeyHandler(e);
  }

  setTimeout(function(){jQuery(e.target).parents(".data:first").indent();},1);

  return true;
}


// literalKeyHandler: key-event -> void
function literalKeyHandler(e){
  
  console.log("trapped a keypress in literal");
  e.stopPropagation();
  switch(e.charCode){
    case 32:
      alert(1);
      makeBreak(e);
      e.preventDefault();
      break;
    case 32:
  }
}

// stringKeyHandler: key-event -> void
function stringKeyHandler(e){
	e.stopPropagation();
  e.cancelBubble = true;

        console.log("trapped a keypress in string");
  switch(e.charCode){
      case 34:
        leaveBlock("close",e);
        break;
      case 32:
        return;
      default:
  }
	
	switch(e.keyCode){
      case 13:                   // newline
        makeBreak(e);
        e.preventDefault();
      return;
 
        break;
      default:
        globalKeyHandler(e);
    }
}


// isParen: key-event -> boolean
function isParen(e){ return (e.charCode == 40); }

// isQuote: key-event -> boolean
function isQuote(e){ return (e.charCode == 34); }


// serialize: node -> string
function serialize(node) {
    return $(node).html()
}


// unserialize: string node -> void
function unserialize(text, node) {
    $(node).html(text);
}


// doSave: -> void
// Save the contents of the buffer.
function doSave() {
    savedContents = serialize($("#editor"));
}



// doRestore: -> void
// Restore the contents of the buffer.
function doRestore() {
    unserialize(savedContents, jQuery("#editor"));
    // fixme: restore the key handlers
}

$(document).ready(function() {

    // Set the default keyhandler of the editor.
    $("#editor").keypress(sexprKeyHandler);

    // Hooking up the save and restore buttons.
    $("#save").click(function(e) {
	doSave();
	e.preventDefault();
    });
    $("#restore").click(function(e) {
	doRestore();
	e.preventDefault();
    });

    // Do an initial save.
    doSave();
});
