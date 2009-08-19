(function($){

	$.fn.indent = function(){
	
	   //TODO: If the first element has not changed, do not fire.
	   
 		$(this).children().removeClass("begin-like define-like lambda-like string-node function-node begin-indent define-indent lambda-indent");
   
    var head = $(this).children("").nonempty().eq(0);

 		var type = getType(head);    
    head.addClass(type);
    indenter(this, head);
    
  }	
 	

  function defineIndenter(n,c){
    
    var offset = c.prevAll(".space").length;
    var distance = 2;

    if(!c.hasClass("define-like")){
        return;
    }
    var kids = $(n).children();
    var indentNext = false;
    distance *= 0.64;

    kids.each(function(){
      var elm = jQuery(this);

      if( elm.hasClass("userBreak") ){
            indentNext = true;
        } else if( !elm.hasClass("wspace") && indentNext){
            elm.attr("style", "padding-left: " + distance + "em");
            indentNext = false;
        }
      });
  }

  function beginIndenter(n,c){
    if(!(c.hasClass("begin-like"))){
      return;
    }
    
    var kids = $(n).children();
    var distance = null;
    var hasSpace = false;

    c.nextAll().each(function(){
      var elm = jQuery(this);
      
      if( elm.hasClass("space") ){ hasSpace = true;  }

      if( null == distance && elm.hasClass("userBreak") ){
        if( hasSpace ){
          distance = 2;
        } else {
          distance = 1;
        }
      }

      if( null == distance && 
          !elm.hasClass("wspace") &&
          elm.text().length != 0 ){
        distance = c.text().length - 1 ;
      }

    });
    
    var indentNext = false;

    distance *= 0.64;
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

  function functionIndenter(n,c){
    if(!c.hasClass("function-node")){
      return;
    }
    
    var kids = $(n).children();
    var distance = null;
    var hasSpace = false;
    var count = 0;
    c.nextAll().each(function(){
      ++count;

      var elm = jQuery(this);
      

      if( elm.hasClass("space") ){ hasSpace = true;  }

      if( null == distance && elm.hasClass("userBreak") ){
        if( hasSpace ){
          distance = 0;
        } else {
          distance = c.text().length + 1; 
        }
      }

      if( null == distance && 
          !elm.hasClass("wspace") &&
          elm.text().length != 0 ){
        distance = c.text().length * 0.625 + 0.6 ;
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

        
    distance *= 0.64;

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

  function indenter(n, head){

    $(n).children().each(function(){
      if(!$(this).hasClass("wspace")){
        $(this).removeAttr("style");
      }
    beginIndenter(n,head);
    lambdaIndenter(n,head);
    functionIndenter(n,head);
    defineIndenter(n,head);
  
    });
  }
 

})(jQuery);  
