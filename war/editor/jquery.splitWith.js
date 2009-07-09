(function($){

	$.fn.splitWith = function(ch, elem){
	
    var txt = this.text();
    var loc = txt.indexOf(ch);
    var prefix = txt.substring(0,loc);
    var suffix = txt.substring(loc+1);

    var prefNode = this.clone(true).empty().text(prefix);
    var sufNode  = this.clone(true).empty().text(suffix);
    
    this.empty();
    this.append(prefNode);
    this.append(elem);
    this.append(sufNode);
    this.unbind("keypress");
    this.addClass("wrapper");
    this.attr("contenteditable","false");
    var tar = this.find(".data").get(1);

    tar.focus();

    if (document.selection) {
      var range = document.body.createTextRange(tar);
      range.moveToElementText();
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(tar);
      window.getSelection().addRange(range);
    }
  }

})(jQuery);  
