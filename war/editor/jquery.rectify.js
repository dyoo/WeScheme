(function($){

	$.fn.rectify = function(){
 		$(this).children(".head").unwrap();
 		$(this).children(":first").wrap($("<div/>").addClass("head"));
 		$(this).children(".head").indent();
	}

})(jQuery);  