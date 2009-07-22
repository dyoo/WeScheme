var savedContents = "";




// mergeElements: element -> element -> bool
function mergeElements(a,b){

  a.text(a.text() + b.text());
  b.remove();

  return true;
}


// makeBreak: key-event -> void
function makeBreak(e){
  var brk = $("<br />")
             .addClass("userBreak")
             .addClass("wspace")
             .attr("contenteditable","false");
  jQuery(e.target).splitWith(brk);
  brk.next().focusStart();
}

// makeSpace: key-event -> void
function makeSpace(e){

  var tar = jQuery(e.target);
  var space =
    $("<div/>")
      .addClass("wspace")
      .addClass("space");

  tar.splitWith(" ", space);
  space.next().focusStart();

}

// makeLiteral : key-event -> void
function makeLiteral(e){
  var tar = jQuery(e.target);
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
          .text("..."))
  tar.splitWith("'", lit);

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
         .addClass("openQuote")
         .text('"'))
     .append(
       $("<div />")
         .addClass("data")
         .attr("contenteditable","true")
         .text("..."))
     .append(
       $("<div />")
         .addClass("closeQuote")
         .text('"'));

  str.keypress(stringKeyHandler);


  tar.splitWith('"', str);
  
  str.children(".data").focus();
  str.children(".data").contentFocus();


}


// makeSexpr: key-event -> void
function makeSexpr(e){
 
  var tar = jQuery(e.target);
 
 var sexpr =  
   $("<div/>")
     .addClass("sexpr")
     .append(
       $("<div />")
         .addClass("openParen")
         .text("("))
     .append(
       $("<div />")
         .addClass("body")
         .attr("contenteditable","false")
         .append(
           $("<div />")
             .addClass("data ")
             .attr("contenteditable","true")
             .text("...")))
     .append(
       $("<div />")
         .addClass("closeParen")
         .text(")"));
   tar.splitWith('(', sexpr);

  sexpr.children(".body").children(".data").focus();
  sexpr.children(".body").children(".data").contentFocus();


}


function globalKeyHandler(e){

  switch(e.keyCode){
  case 8:                   //backspace
      setTimeout(function(){backspace(e);},1);
      break;
  case 13:                   // newline
      setTimeout(function(){makeBreak(e);},1);
      break;
  case 37:                   // left
      leftKey(e);
      break;
  case 39:                 // right
      rightKey(e);
      break;
  case 8:
      backspaceKey(e);
      break;
  case 46:
      deleteKey(e);
      break;
 
  }

  switch(e.charCode){
      case 32:                   // space
      setTimeout(function(){makeSpace(e);},1);
      break;

  }
}

function backspace(e) {
    var aSelection = getCursorSelection();
    var tar = aSelection.node;
    if(aSelection.atStart()) {
        var pred = tar.predecessor();
        if( pred.hasClass("wspace") ){
            pred.remove();
            pred = tar.predecessor();
        } 

        var len = tar.length;

        if( mergeElements(tar, pred) ){
            tar.focusAt(len);
        }
    }
  

}

// FIXME: We may need to do something clever here, at least according to
// http://stackoverflow.com/questions/202285/trigger-a-keypress-with-jqueryand-specify-which-key-was-pressed
function leftKey(e) {

    var aSelection = getCursorSelection();
    if(aSelection.atStart()) {
	e.preventDefault();
  debugLog("at left");
	var predecessor = aSelection.node.predecessorWith(
	    function(p){ 
		return p.attr("contenteditable") == "true" && p.children().size() == 0;
	    });
	if (predecessor.size() > 0) {
      debugLog(predecessor.text());
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


function backspaceKey(e) {
    var aSelection = getCursorSelection();
    if (aSelection.atStart()) {
	e.preventDefault();
	debugLog("We should delete backward");
    }
}

function deleteKey(e) {
    var aSelection = getCursorSelection();
    debugLog(aSelection);
    if (aSelection.atEnd()) {
	e.preventDefault();
	debugLog("We should delete forward");
    }
}






// sexprKeyHandler: key-event -> void
function sexprKeyHandler(e){

  e.stopPropagation();
  debugLog(e);


  switch(e.charCode){
  case 34:                 // quote
      setTimeout(function(){makeString(e);},1);
      break;
  case 39:
      setTimeout(function(){makeLiteral(e);},1);
      break;
  case 40:                 // paren
      setTimeout(function(){makeSexpr(e);},1);
      break;
    default:
      globalKeyHandler(e);
  }

  setTimeout(function(){
    jQuery(e.target).parents(".body").indent();
    },2);

  return true;
}


// literalKeyHandler: key-event -> void
function literalKeyHandler(e){
  e.stopPropagation();
  switch(e.charCode){
    case 32:
      alert(1);
      setTimeout(function(){makeBreak(e);},1);
      break;
    case 32:
  }
}

// stringKeyHandler: key-event -> void
function stringKeyHandler(e){
	e.stopPropagation();
	
	switch(e.keyCode){
      case 13: 			// space
      case 32: 			// return
        return;
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
    jQuery("#editor").keypress(sexprKeyHandler);
    jQuery("#editor").find(":literal").keypress(literalKeyHandler);
    jQuery("#editor").find(":string").keypress(stringKeyHandler);
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
