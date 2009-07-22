(function($){

	$.fn.indent = function(){
	
	   //TODO: If the first element has not changed, do not fire.
	   
 		$(this).children().removeClass("begin-like define-like lambda-like string-node unknown-node begin-indent define-indent lambda-indent");
	
 		var head = $(this).children(":first");
 		var type = getType(head);    
    head.addClass(type);
    indenter(this);
    }	
 	

  function defineIndenter(n,c){
    if(!c.hasClass("define-like")){
        return;
    }

    var kids = $(n).children();
    var indentNext = false;
    kids.each(function(){
      var elm = jQuery(this);

      if( elm.hasClass("userBreak") ){
            indentNext = true;
        } else if(indentNext){
            elm.addClass(styles[ii] + "-indentation");
            indentNext = false;
        }
      });
  }

  function beginIndenter(n,c){
    if(!(c.hasClass("begin-like") || c.hasClass("unknown-node"))){
      return;
    }
    
    var kids = $(n).children();
    var distance = 0;
    
    if( c.hasClass("userBreak") ){
      distance = 1;
    } else {
      distance = c.text().length;
    }
    
    var indentNext = false;

    kids.each(function(){
      var elm = jQuery(this);
      elm.removeAttr("style");

      if( elm.hasClass("userBreak") ){
            indentNext = true;
      } else if(indentNext){
        elm.attr("style","padding-left:" + distance + "em");
        indentNext = false;
      }
    });
  }

  function lambdaIndenter(n,c){
    if(!c.hasClass("lambda-like")){
      return;
    }
 
    var indentNext = false;
    var breakCount = 0;
    var distance = 0;
    
    var kids = $(n).children();
    kids.each(function(){
      var elm = jQuery(this);
      elm.removeAttr("style");

      if( elm.hasClass("userBreak") ){
            breakCount++;
            indentNext = true;
      } else if(indentNext){
        if( breakCount < 2){
          distance = 2;
        } else {
          distance = 1;
        }
        elm.attr("style","padding-left:" + distance + "em");
        indentNext = false;
      }
    });
  }

  function indenter(n){
    var c = $(n).children(":first");
    beginIndenter(n,c);
    lambdaIndenter(n,c);
    defineIndenter(n,c);
  
  }
  

})(jQuery);  
