(function($){

	$.fn.unwrap = function(elem){
		var elements;
		
		if (elem == null){
			elements = jQuery(this);
		}
		else if (typeof elem == "string"){
			elements = jQuery(this).find(elem);
		}
		else if (typeof elem == "object"){
			elements = elem;
		}
		else alert("unknow elem");
		
		elements.each(function(){
			jQuery(this).replaceWith(jQuery(this).contents());
		});
	}

})(jQuery);  
