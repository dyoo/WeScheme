(function($){

	$.fn.splitWith = function(split, elem){
	
	    var prefix;
	    var suffix;
	    var toFocus = null;
	    
	    if( elem != null ){
	      toFocus = $(elem).children(".body").children(".data");
	    }
	
		if (typeof split == "string"){
			
			 var txt = this.text();
		     var loc = txt.indexOf(split);
             prefix = txt.substring(0,loc);
             suffix = txt.substring(loc+1);

		     
		} else if (elem == null){
		     elem = split;
			 var nodes = $(this).contents();
			 prefix = nodes.get(0).nodeValue;
			 suffix = nodes.get(2).nodeValue;
			 
		}
		
	var prototypeNode = this.clone(true).empty();
	this.empty();
	
	if( jQuery.trim(prefix) != "" && prefix != null ){
    	this.append(prototypeNode.clone(true).text(prefix));
    }
    
    this.append(elem);
    
    if( jQuery.trim(suffix) != "" && suffix != null ){
   		this.append(prototypeNode.clone(true).text(suffix));
   	}
    
    if( toFocus == null ){
      toFocus = this.children(":last");
    }
    
    this.unbind("keypress");
    this.addClass("wrapper");
    this.attr("contenteditable","false");
    
    toFocus.focus();


 
  }

})(jQuery);  