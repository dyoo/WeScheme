 (function($){
   $.fn.contentFocus = function(){
 
    if (document.selection) {
      var range = document.body.createTextRange(this);
      range.moveToElementText();
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();      
      range.selectNodeContents($(this).get(0));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }

  $.fn.focusEnd = function(){
    if (window.getSelection) {
	var range = document.createRange();
     //     debugLog("Focus end: " + this.text() + "(" + this.text().length + ")");
     //     debugLog(this);
     //     debugLog(this.contents().get(0));
	window.getSelection().removeAllRanges();
	range.setStart(this.contents().get(0),this.text().length);
	range.setEnd(this.contents().get(0),this.text().length);
	window.getSelection().addRange(range);
     
     // NOTE Here we insert a dummyNode to force a redraw, otherwise
     //      the cursor appears in the wrong location.
     //      It is safe to remove this code.
     var dummyNode = $("<span />")
                       .addClass("dummy")
                       .text("&");
     range.insertNode(dummyNode.get(0));
     $(this).children(".dummy").remove();
     $(this).get(0).focus();
    }

    

  }
 
  $.fn.focusStart = function(){
    if (window.getSelection) {
	var range = document.createRange();

	//debugLog("Focus start: " + this.text() + "(" + this.text().length + ")");
	window.getSelection().removeAllRanges();
	range.setStart(this.contents().get(0),0);
	range.setEnd(this.contents().get(0),0);
	window.getSelection().addRange(range);
     
     // NOTE Here we insert a dummyNode to force a redraw, otherwise
     //      the cursor appears in the wrong location.
     //      It is safe to remove this code.
/*     var dummyNode = $("<span />")
                       .addClass("dummy")
                       .text("&");
     range.insertNode(dummyNode.get(0));
     $(this).children(".dummy").remove(); */
     $(this).get(0).focus();
    }

    

  }

  $.fn.focusAt = function(loc){
    if (window.getSelection) {
	var range = document.createRange();
	window.getSelection().removeAllRanges();
	range.setStart(this.contents().get(0),loc);
	range.setEnd(this.contents().get(0),loc);
	window.getSelection().addRange(range);
	this.focus();
    }

  }

})(jQuery); 
