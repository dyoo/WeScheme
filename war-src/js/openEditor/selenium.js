goog.provide("plt.wescheme.selenium");



plt.wescheme.selenium.test1 = function() {
    alert('hi, this is a function');
};

plt.wescheme.selenium.findParen = function(find) {
	var matches = jQuery('span').filter(function() { return jQuery(this).text() === find });
	var i;
	for(i = 0; i < matches.length; i++)
    return jQuery('span').filter(function() { return jQuery(this).text() === find }).css('background-color');
    //return window.jQuery('span:contains('+'\'' + find + '\''+')');
};

plt.wescheme.selenium.moveCursor = function(offset){
    window.myEditor.defn.impl.moveCursor(offset);
    return true;
}

plt.wescheme.selenium.hasColoredText = function(text, color){
    var spanArray = jQuery("span");
    var i;
    for(i = 0; i < spanArray.length; i++){
	var span = jQuery(spanArray[i]);
	if(span.text() === text &&
	   span.css('background-color') === color)
            return true;
    }
    return false;
}

// Look at all divs and see if we provide the expected
// text somewhere.
plt.wescheme.selenium.hasText = function(text){
    var spanArray = jQuery("div");
    var i;
    for(i = 0; i < spanArray.length; i++){
	var span = jQuery(spanArray[i]);
	if(span.text() === text)
            return true;
    }
    return false;
}