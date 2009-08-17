(function ($){

    // Inorder traversal: Visit a node, then visit its children.


    // Returns the immediate predecessor to this node.
    $.fn.predecessor = function(){
	var p = this;
	if (p.prev().size() > 0) {
	    p = p.prev();
	    while(p.children(":last").size() > 0) {
		p = p.children(":last");
	    }
	    return p;
	} else {
	    return p.parent();
	}
    };
    

    // Returns the immediate successor to this node.
    $.fn.successor = function(){
	var p = this;
	
	// Descend toward the left if we can
	if (p.children(":first").size() > 0) {
	    return p.children(":first");
	}

	while(p.size() > 0 && p.next().size() == 0) {
	    p = p.parent();
	}
	return p.next();
    };


    // Return the successor leaf node.
    $.fn.leafSuccessor = function() {
	return this.successorWith(function(p) { return p.children().size() == 0; });
    };



    // Return the predecessor leaf node;
    $.fn.leafPredecessor = function() {
	return this.predecessorWith(function(p) { return p.children().size() == 0; });
    };
    

    $.fn.successorWith = function(f){
       var p = $(this).successor();
       while(true) {
        if( f(p) ){
          return p;
        }
        if( p.size() != 0 ){
          p = $(p).successor();
        } else {
          return p;
        }
       }
    };
    


    $.fn.predecessorWith = function(f){
 
     var p = $(this).predecessor();
     while(true) {
        if( f(p) ){
          return p;
        }
        if( p.size() != 0 ){
          p = $(p).predecessor();
        } else {
          return p;
        }
      }
    };


    // Splits and inserts at the current selection.
    // node: jquery
    $.fn.splitAndInsertAtSelection = function() {
	var range = window.getSelection().getRangeAt(0);
	range.deleteContents();
	range.collapse(false);
  
  if( $(range.startContainer).hasClass("data") ){
    var dataNode = $(range.startContainer);
  } else {
    var dataNode = $(range.startContainer).parents(".data:first");
  }

	var originalText = dataNode.text();
	var prefixNode = dataNode.clone(true).empty().text(originalText.substring(0, range.startOffset)).attr("contenteditable", "true");
	var suffixNode = dataNode.clone(true).empty().text(originalText.substring(range.startOffset)).attr("contenteditable", "true");

  dataNode.empty();
  dataNode.append(prefixNode);
  dataNode.append(this);
  dataNode.append(suffixNode);
  dataNode.unwrap(); 
  }

})(jQuery);
