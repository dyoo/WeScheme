(function($){

	$.fn.foldl = function(f, a){
    var acc = a;
    this.each(function(){ a = f(a, this); });
    return a;
    }

  $.fn.map = function(f){
    var arr = this.clone(true);
    return arr.each(function(){ f(this); });
  }
  

})(jQuery);  
