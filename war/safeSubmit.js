(function() {

    // http://www.w3schools.com/JS/js_cookies.asp  
    var getCookie = function(c_name) {
	var c_start = -1;
	var c_end = -1;
	if (document.cookie.length>0) {
	    c_start=document.cookie.indexOf(c_name + "=");
	    if (c_start!=-1) {
		c_start=c_start + c_name.length+1;
		c_end=document.cookie.indexOf(";",c_start);
		if (c_end==-1){ c_end=document.cookie.length; }
		return document.cookie.substring(c_start,c_end);
	    }
	}
	return "";
    }

    // adapted from http://diveintogreasemonkey.org/patterns/override-method.html
    var newsubmit = function(event) {
	var target = event ? event.target : this;

	var tokenNode = document.createElement("input");
	tokenNode.setAttribute("type","hidden");
	tokenNode.setAttribute("name","token");
	tokenNode.setAttribute("value", getCookie("token"));
	target.appendChild(tokenNode);
	
	// call real submit function
	return this._submit();
    }

    var instrumentedSend = function(body){
	if( body == null || body == ""){
	    body = "?";
	} else {
	    body += "&";
	}
	
        body += "token=" + encodeURIComponent(getCookie("token"));

	return this._send(body);
    }

    var isIE7OrBelow = function() {
	if (window.XMLHttpRequest) {
	    if(document.epando){
		//IE7
		return true;
	    }
	    return false;
	} else {
	    return true;
	}
    };
    


   // capture the onsubmit event on all forms
    if (window.addEventListener) {
	window.addEventListener('submit', newsubmit, true);
    } else {
	document.attachEvent('onsubmit', newsubmit)
    }



    if (isIE7OrBelow()) {
	// IE Hack for IE <=7
	Element = function () {};
	Element.prototype._submit = function() { Element.prototype.submit() } 
	Element.prototype.submit = newsubmit;

	// IEWorkaround: creates a new object so we can hack the prototype.
	Element = function () {};
	var anXmlHttpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest(): new ActiveXObject('MSXML2.XMLHTTP.3.0');
	Element.prototype._send = function() { Element.prototype.send() } 
	Element.prototype.send = instrumentedSend;

    } else  {

	// If a script calls someForm.submit(), the onsubmit event does not fire,
	// so we need to redefine the submit method of the HTMLFormElement class.
	if (typeof(HTMLFormElement) == 'undefined') {
	    HTMLFormElement = function() {};
	    new HTMLFormElement();
	}
	HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
	HTMLFormElement.prototype.submit = newsubmit;
	XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = instrumentedSend;
    }

}());