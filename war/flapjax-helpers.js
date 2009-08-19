// A workaround a bug in flapjax: we return an object that has a
// value behavior, but we also have an explicit way to trigger the
// value's change.
function FlapjaxValueHandler(node) {
    this.node = node;
    this._manualChanger = receiverE();
    this.behavior = startsWith(
	filterRepeatsE(
	    mergeE(extractValueB(node).changes(),
		   this._manualChanger,
		   // HACK: every 100 miliseconds, check the value manually.
		   timerE(100).mapE(function(v) { return node.value; } ))),
	node.value);
    insertValueE(this._manualChanger, this.node);
}

FlapjaxValueHandler.prototype.getValue = function() {
    return this.attr("value");
};

FlapjaxValueHandler.prototype.setValue = function(x) {
    this.attr("value", x);
};

// Get or set an attribute.
FlapjaxValueHandler.prototype.attr = function() {
    if (arguments.length == 2) {
	if (arguments[0] == "value") {
	    this.node.value = arguments[1];
	    this._manualChanger.sendEvent(arguments[1]);
	} else {
	    this.node.setAttribute(arguments[0], arguments[1]);
	}
    } else if (arguments.length == 1) {
	if (arguments[0] == "value") {
	    return this.node.value;
	} else {
	    return this.node.getAttribute(arguments[0]);
	}
    } else {
	throw new Error("attr");
    }
};

FlapjaxValueHandler.prototype.removeAttr = function(x) {
    this.node.removeAttribute(x);
};


FlapjaxValueHandler.prototype.addClass = function(x) {
    if (this.attr("class")) {
	var attrs = this.attr("class").split(" ");
	attrs.push(x);
	this.attr("class", attrs.join(" "));
    } else {
	this.attr("class", x);
    }
}

FlapjaxValueHandler.prototype.removeClass = function(x) {
    if (this.attr("class")) {
	var attrs = this.attr("class").split(" ");
	for(var i = attrs.length - 1; i >= 0; i--) { 
	    if (attrs[i] == x) {
		attrs.splice(i, 1);
	    }
	}
	this.attr("class", attrs.join(" "));
    }
}