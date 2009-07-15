(function ($){

    $.fn.predecessor = function(){
      var p = this;
      var t;

      // Grab the node to our left, if it doesn't exist, go up until we find one
      do{
        t = $(p).prev();
        if( t.size() == 0 ){
          t = p.parent();
        } else {
          p = t;
          break;
        }
        p = t;
      } while( p.size() == 0 )
      
      t = p;

      //Descend to the right
      do{
       p = t;
       t = $(p).children(":last");

      } while( t.size() == 1 )

      return p;

    }

    $.fn.successor = function(){
      var p = this;
      var t;

      // Grab the node to our left, if it doesn't exist, go up until we find one
      do{
        t = $(p).next();
        if( t.size() == 0 ){
          t = p.parent();
        } else {
          p = t;
          break;
        }
        p = t;
      } while( p.size() == 0 )
      
      t = p;

      //Descend to the right
      do{
       p = t;
       t = $(p).children(":first");

      } while( t.size() == 1 )

      return p;
    }

})(jQuery);
