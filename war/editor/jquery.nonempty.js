(function($){
    $.fn.nonempty = function(){
      return $(this).filter(function(index){
        return (jQuery.trim($(this).text()).length > 0)
      });
    }
})(jQuery);
