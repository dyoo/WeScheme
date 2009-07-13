var keyHold = false;


var savedContents = "";



// makeBreak: key-event -> void
function makeBreak(e){
  
  jQuery(e.target).children("br").replaceWith(">");
  jQuery(e.target).splitWith('>', $("<br />").addClass("userBreak"));
  


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
   tar.rectify();
 
   
 keyHold = false;
}

// sexprKeyHandler: key-event -> void
function sexprKeyHandler(e){
  e.stopPropagation();
  if( keyHold ){ return false; }

  switch(e.keyCode){
    case 13:
      setTimeout(function(){makeBreak(e);},1);
      break;
  }

  switch(e.charCode){
    case 40:
      keyHold = true;
      setTimeout(function(){makeSexpr(e);},1);
      break;
    default:
  }

  return true;
}


// stringKeyHandler: key-event -> void
function stringKeyHandler(e){

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



// Hooking up the save button.
$(document).ready(function() {
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