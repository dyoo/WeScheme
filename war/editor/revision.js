function RevisionController (sz){

  var size = (sz == null) ? 100 : size;

  var before = new Array();
  var after  = new Array();

  this.undo = function(){ 
    after.push(before.pop());
  }
  this.redo = function(){ 
    before.push(after.pop());
  }
  this.last = function(){
    
    before = before.concat(after);

  }
  this.store = function(jqo){ 

    

    before.push(jqo.clone(true));
    after = new Array();  

    if( before.length > size ){
      var rm = before.length - size;
      before.splice(0, rm);
    }
  
  }

}
