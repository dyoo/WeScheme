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