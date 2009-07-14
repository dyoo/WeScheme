var savedContents = "";



// makeBreak: key-event -> void
function makeBreak(e){

  jQuery(e.target).splitWith($("<br />").addClass("userBreak"));
  jQuery(e.target).children("br").next().contentFocus();
  
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
         .addClass("body")
         .attr("contenteditable","false")    
         .append(
           $("<div />")
             .addClass("data")
             .attr("contenteditable","true")
             .text("...")))
     .append(
       $("<div />")
         .addClass("closeQuote")
         .text('"'));

  str.keypress(stringKeyHandler);


  tar.splitWith('"', str);
  
  str.children(".body").children(".data").focus();
  str.children(".body").children(".data").contentFocus();

//  tar.children(".string").children(".body").contentFocus();


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
             .addClass("data")
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

// makeSpace: key-event -> void
function makeSpace(e){

  var tar = jQuery(e.target);


}

function globalKeyHandler(e){

    console.log(e);
    console.log(e.data);

  switch(e.keyCode){
  case 13:                   // newline
      setTimeout(function(){makeBreak(e);},1);
      break;
  case 32:                   // space
      setTimeout(function(){makeSpace(e);},1);
      break;
  case 37:                   // left
      setTimeout(function(){leftKey(e);},1);
      break;
  case 39:                 // right
      setTimeout(function(){rightKey(e);},1);
      break;
  }
}


function leftKey(e) {
}

function rightKey(e) {
}



// sexprKeyHandler: key-event -> void
function sexprKeyHandler(e){

  e.stopPropagation();

  switch(e.charCode){
  case 34:                 // quote
      setTimeout(function(){makeString(e);},1);
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
    var editor = $("#editor");
    unserialize(savedContents, editor);
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