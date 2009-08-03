// http://www.w3schools.com/JS/js_cookies.asp  
function getCookie(c_name) {
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
function newsubmit(event) {
    var target = event ? event.target : this;

    var tokenNode = document.createElement("input");
    tokenNode.setAttribute("type","hidden");
    tokenNode.setAttribute("name","token");
    tokenNode.setAttribute("value", getCookie("token"));
    target.appendChild(tokenNode);
    
    // call real submit function
    return this._submit();
}

function instrumentedSend(body){
	if( body == null || body == ""){
		body = "?";
	} else {
		body += "&";
	}
	
        body += "token=" + encodeURIComponent(getCookie("token"));

	return this._send(body);
}

// capture the onsubmit event on all forms
window.addEventListener('submit', newsubmit, true);

// If a script calls someForm.submit(), the onsubmit event does not fire,
// so we need to redefine the submit method of the HTMLFormElement class.
HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = newsubmit;

XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = instrumentedSend;