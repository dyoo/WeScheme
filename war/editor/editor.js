var keyHold = false;

function makeSexpr(e){
 
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
 jQuery(e.target).splitWith('(', sexpr);
  
 keyHold = false;
}

function sexprKeyHandler(e){
  e.stopPropagation();
  if( keyHold ){ return false; }

  switch(e.charCode){
    case 40:
      keyHold = true;
      setTimeout(function(){makeSexpr(e);},1);
      break;
    default:
  }

  return true;
}


function stringKeyHandler(e){

}

function isParen(e){ return (e.charCode == 40); }
function isQuote(e){ return (e.charCode == 34); }
