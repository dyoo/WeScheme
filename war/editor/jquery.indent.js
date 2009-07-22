(function($){

	$.fn.indent = function(){
	
	   //TODO: If the first element has not changed, do not fire.
	   
 		$(this).children().removeClass("begin-like define-like lambda-like string-node unknown-node");
 		
 		var head = $(this).children(":first");
 		var type = getType(head);
 	    
 	    head.addClass(type);	
 	
 		
	}

})(jQuery);  