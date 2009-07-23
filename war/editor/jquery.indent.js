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
        } else if( !elm.hasClass("wspace") && indentNext){
            elm.attr("style", "padding-left: 1em");
            indentNext = false;
        }
      });
  }

  function beginIndenter(n,c){
    if(!(c.hasClass("begin-like") || c.hasClass("unknown-node"))){
      return;
    }
    
    var kids = $(n).children();
    var distance = null;
   
    c.nextAll().each(function(){
      var elm = jQuery(this);
      
      if( null == distance && elm.hasClass("userBreak") ){
        distance = 1;
      }

      if( null == distance && 
          !elm.hasClass("wspace") &&
          elm.text().length != 0 ){
        distance = c.text().length - 1;
      }

    });
    
    var indentNext = false;

    kids.each(function(){
      var elm = jQuery(this);
      
      if( elm.hasClass("userBreak") ){
            indentNext = true;
      } else if(indentNext && !elm.hasClass("wspace")){
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
    var kidCount = 0;
    var distance = 0;
    
    var kids = $(n).children();
    kids.each(function(){

      var elm = jQuery(this);

      if(!elm.hasClass("wspace")){

      if( elm.text().length != 0 ){
        kidCount++;
      }
        if( kidCount == 1){
          distance = 2;
        } else {
          distance = 1;
        }

        

        if(indentNext){
          elm.attr("style","padding-left:" + distance + "em");
          indentNext = false;
        }
      }

      if( elm.hasClass("userBreak") ){
        indentNext = true;
      } 
    });
  }

  function indenter(n){
    var c = $(n).children(":first");
    $(n).children().each(function(){
      if(!$(this).hasClass("wspace")){
        $(this).removeAttr("style");
      }
    beginIndenter(n,c);
    lambdaIndenter(n,c);
    defineIndenter(n,c);
  
    });
  }
 

})(jQuery);  
