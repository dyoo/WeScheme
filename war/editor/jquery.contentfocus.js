 (function($){
   $.fn.contentFocus = function(){
 
    if (document.selection) {
      var range = document.body.createTextRange(this);
      range.moveToElementText();
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();

      range.selectNodeContents($(this).get(0));
      window.getSelection().addRange(range);
    }
  }

})(jQuery); 