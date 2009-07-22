(function($){
  
  // returns void.
	$.fn.splitWith = function(split, elem){
	
	    var prefix = "zounds";
	    var suffix = "kabloo";
      
      if (elem == null){
		   elem = split;
			 var nodes = $(this).contents();

       //if we don't have three nodes, then we're on the edge
       if( nodes.size() < 3){
         var range = window.getSelection().getRangeAt(0);
         debugLog("Selection location " + range.startOffset);
         if( range.startOffset != 0 ){
           debugLog(nodes);
           prefix = "";
           suffix = nodes.get(1).nodeValue;
         } else {
           // FIXME Something very peculiar is going on here.
           alert("Hit some code that I thought was dead");
           prefix = "";
           suffix = nodes.get(0).nodeValue;
         }

         debugLog("prefix: " + prefix);
         debugLog("suffix: " + suffix);

       } else {
           prefix = nodes.get(0).nodeValue;
           suffix = nodes.get(2).nodeValue;
       }
    } else {
			
			 var txt = this.text();
	     var loc = txt.indexOf(split);
           prefix = txt.substring(0,loc);
           suffix = txt.substring(loc+1);    
		}			 
		
		
	var prototypeNode = this.clone(true).empty();
	this.empty();
	
	if( jQuery.trim(prefix) != "" && prefix != null ){
    	this.append(prototypeNode.clone(true).text(prefix));
    } else {
    	this.append(prototypeNode.clone(true).text(""));
    }
    
    this.append(elem);
    
    if( jQuery.trim(suffix) != "" && suffix != null ){
   		this.append(prototypeNode.clone(true).text(suffix));
   	} else {
    	this.append(prototypeNode.clone(true).text(""));
    }

    this.unwrap();
    
  }

})(jQuery);  
