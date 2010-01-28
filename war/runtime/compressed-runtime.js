// Copyright 2007, Google Inc.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  1. Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//  3. Neither the name of Google Inc. nor the names of its contributors may be
//     used to endorse or promote products derived from this software without
//     specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Sets up google.gears.*, which is *the only* supported way to access Gears.
//
// Circumvent this file at your own risk!
//
// In the future, Gears may automatically define google.gears.* without this
// file. Gears may use these objects to transparently fix bugs and compatibility
// issues. Applications that use the code below will continue to work seamlessly
// when that happens.

(function() {
  // We are already defined. Hooray!
  if (window.google && google.gears) {
    return;
  }

  var factory = null;

  // Firefox
  if (typeof GearsFactory != 'undefined') {
    factory = new GearsFactory();
  } else {
    // IE
    try {
      factory = new ActiveXObject('Gears.Factory');
      // privateSetGlobalObject is only required and supported on IE Mobile on
      // WinCE.
      if (factory.getBuildInfo().indexOf('ie_mobile') != -1) {
        factory.privateSetGlobalObject(this);
      }
    } catch (e) {
      // Safari
      if ((typeof navigator.mimeTypes != 'undefined')
           && navigator.mimeTypes["application/x-googlegears"]) {
        factory = document.createElement("object");
        factory.style.display = "none";
        factory.width = 0;
        factory.height = 0;
        factory.type = "application/x-googlegears";
        document.documentElement.appendChild(factory);
      }
    }
  }

  // *Do not* define any objects if Gears is not installed. This mimics the
  // behavior of Gears defining the objects in the future.
  if (!factory) {
    return;
  }

  // Now set up the objects, being careful not to overwrite anything.
  //
  // Note: In Internet Explorer for Windows Mobile, you can't add properties to
  // the window object. However, global objects are automatically added as
  // properties of the window object in all browsers.
  if (!window.google) {
    google = {};
  }

  if (!google.gears) {
    google.gears = {factory: factory};
  }
})();

goog.provide('plt.types');




//////////////////////////////////////////////////////////////////////
/*

Provided types:

String
Number (Rational, FloatPoint, Complex)
Boolean
Char
Symbol
List (Cons, Empty)
Vector
Struct
Hashtable (EqHashTable, EqualHashTable)
Box


*/
//////////////////////////////////////////////////////////////////////





(function() {
    
    
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    // Types
    
    plt.types = plt.types || {};
    

    //////////////////////////////////////////////////////////////////////
    // helper functions


    var appendChild = function(parent, child) {
	parent.appendChild(child);
    }


    // Inheritance from pg 168: Javascript, the Definitive Guide.
    var heir = function(p) {
	var f = function() {}
	f.prototype = p;
	return new f();
    }


    var _eqHashCodeCounter = 0;
    plt.types.makeEqHashCode = function() {
	_eqHashCodeCounter++;
	return _eqHashCodeCounter;
    }
    
    
    // plt.types.getHashCode: any -> (or fixnum string)
    // Produces a hashcode appropriate for eq.
    plt.types.getEqHashCode = function(x) {
	if (x && !x._eqHashCode) {
	    x._eqHashCode = plt.types.makeEqHashCode();
	}
	if (x && x._eqHashCode) {
	    return x._eqHashCode;
	}
	if (typeof(x) == 'string') {
	    return x;
	}
	return 0;
    };



    //////////////////////////////////////////////////////////////////////


    // Structures.
    var Struct = function (constructorName, fields) {
	this._constructorName = constructorName; 
	this._fields = fields;
    };

    plt.types.Struct = Struct;

    Struct.prototype.toWrittenString = function(cache) { 
	cache.put(this, true);
	var buffer = [];
	buffer.push("(");
	buffer.push(this._constructorName);
	for(var i = 0; i < this._fields.length; i++) {
	    buffer.push(" ");
	    buffer.push(plt.types.toWrittenString(this._fields[i], cache));
	}
	buffer.push(")");
	return plt.types.String.makeInstance(buffer.join(""));
    };

    Struct.prototype.toDisplayedString = Struct.prototype.toWrittenString;

    Struct.prototype.toDomNode = function(cache) {
	cache.put(this, true);
	var node = document.createElement("div");
	node.appendChild(document.createTextNode("("));
	node.appendChild(document.createTextNode(this._constructorName));
	for(var i = 0; i < this._fields.length; i++) {
	    node.appendChild(document.createTextNode(" "));
	    appendChild(node, plt.types.toDomNode(this._fields[i], cache));
	}
	node.appendChild(document.createTextNode(")"));
	return node;
    }


    Struct.prototype.isEqual = function(other, aUnionFind) {
	if (typeof(other) != 'object') {
	    return false;
	}
	if (! other._constructorName) {
	    return false;
	}
	if (other._constructorName != this._constructorName) {
	    return false;
	}
	if (typeof(other._fields) === 'undefined') {
	    return false;
	}
	if (this._fields.length != other._fields.length) {
	    return false;
	}
	for (var i = 0; i < this._fields.length; i++) {
	    if (! plt.types.isEqual(this._fields[i],
				     other._fields[i],
				     aUnionFind)) {
		return false;
	    }
	}
	return true;
    };









    //////////////////////////////////////////////////////////////////////
    // Boxes
    
    var Box = function(x) { 
	plt.types.Struct.call(this, "box", [x]);
    };

    Box.prototype = heir(plt.types.Struct.prototype);

    Box.prototype.unbox = function() {
	return this._fields[0];
    }

    Box.prototype.set = function(newVal) {
	this._fields[0] = newVal;
    }
    //////////////////////////////////////////////////////////////////////








    // We are reusing the built-in Javascript boolean class here.
    plt.types.Logic = {
	TRUE : true,
	FALSE : false
    };

    // WARNING
    // WARNING: we are extending the built-in Javascript boolean class here!
    // WARNING
    Boolean.prototype.toWrittenString = function(cache) {
	if (this.valueOf()) { return "true"; }
	return "false";
    };
    Boolean.prototype.toDisplayedString = Boolean.prototype.toWrittenString;


    Boolean.prototype.isEqual = function(other, aUnionFind){
	return this == other;
    };




    // Chars
    // Char: string -> Char
    plt.types.Char = function(val){
	this.val = val;
    };
    
    plt.types.Char.makeInstance = function(val){
	return new plt.types.Char(val);
    };

    plt.types.Char.prototype.toWrittenString = function(cache) {
	return "#\\" + this.val;
    };

    plt.types.Char.prototype.toDisplayedString = function (cache) {
        return this.val;
    };

    plt.types.Char.prototype.getValue = function() {
	return this.val;
    };

    plt.types.Char.prototype.isEqual = function(other, aUnionFind){
	return other instanceof plt.types.Char && this.val == other.val;
    };
    
    // Symbols


    plt.types.Symbol = function(val) {
	this.val = val;
    };

    var symbolCache = {};
    
    // makeInstance: string -> Symbol.
    plt.types.Symbol.makeInstance = function(val) {
	// To ensure that we can eq? symbols with equal values.
	if (!(val in symbolCache)) {
	    symbolCache[val] = new plt.types.Symbol(val);
	} else {
	}
	return symbolCache[val];
    };
    
    plt.types.Symbol.prototype.isEqual = function(other, aUnionFind) {
	return other instanceof plt.types.Symbol &&
	    this.val == other.val;
    };
    

    plt.types.Symbol.prototype.toString = function() {
        return this.val;
    };

    plt.types.Symbol.prototype.toWrittenString = function(cache) {
	return this.val;
    };

    plt.types.Symbol.prototype.toDisplayedString = function(cache) {
	return this.val;
    };

    
    
    
    plt.types.Empty = function() {
    };
    plt.types.Empty.EMPTY = new plt.types.Empty();


    plt.types.Empty.prototype.isEqual = function(other, aUnionFind) {
	return other instanceof plt.types.Empty;
    };

    plt.types.Empty.prototype.first = function() {
	throw new MobyRuntimeError("first can't be applied on empty.");
    };
    plt.types.Empty.prototype.rest = function() {
	throw new MobyRuntimeError("rest can't be applied on empty.");
    };
    plt.types.Empty.prototype.isEmpty = function() {
	return true;
    };
    plt.types.Empty.prototype.toWrittenString = function(cache) { return "empty"; };
    plt.types.Empty.prototype.toDisplayedString = function(cache) { return "empty"; };



    
    // Empty.append: (listof X) -> (listof X)
    plt.types.Empty.prototype.append = function(b){
	return b;
    }
    
    plt.types.Cons = function(f, r) {
	this.f = f;
	this.r = r;
    };

    plt.types.Cons.reverse = function(lst) {
	var ret = plt.types.Empty.EMPTY;
	while (!lst.isEmpty()){
	    ret = plt.types.Cons.makeInstance(lst.first(), ret);
	    lst = lst.rest();
	}
	return ret;
    };
    
    plt.types.Cons.makeInstance = function(f, r) {
	return new plt.types.Cons(f, r);
    };


    // FIXME: can we reduce the recursion on this?
    plt.types.Cons.prototype.isEqual = function(other, aUnionFind) {
	if (! (other instanceof plt.types.Cons)) {
	    return plt.types.Logic.FALSE;
	}
	return (plt.types.isEqual(this.first(), other.first(), aUnionFind) &&
		plt.types.isEqual(this.rest(), other.rest(), aUnionFind));
    };
    
    plt.types.Cons.prototype.first = function() {
	return this.f;
    };
    
    plt.types.Cons.prototype.rest = function() {
	return this.r;
    };
    
    plt.types.Cons.prototype.isEmpty = function() {
	return false;
    };
    
    // Cons.append: (listof X) -> (listof X)
    plt.types.Cons.prototype.append = function(b){
	if (b.isEmpty())
	    return this;
	var ret = b;
	var lst = plt.types.Cons.reverse(this);
	while (!lst.isEmpty()){
	    ret = plt.types.Cons.makeInstance(lst.first(), ret);
	    lst = lst.rest();
	}
	
	return ret;
    };
    
    plt.types.Cons.prototype.toWrittenString = function(cache) {
	cache.put(this, true);
	var texts = [];
	var p = this;
	while (! p.isEmpty()) {
	    texts.push(plt.types.toWrittenString(p.first(), cache));
	    p = p.rest();
	}
	return "(" + texts.join(" ") + ")";
    };


    plt.types.Cons.prototype.toDisplayedString = function(cache) {
	cache.put(this, true);
	var texts = [];
	var p = this;
	while (! p.isEmpty()) {
	    texts.push(plt.types.toDisplayedString(p.first(), cache));
	    p = p.rest();
	}
	return "(" + texts.join(" ") + ")";
    };



    plt.types.Cons.prototype.toDomNode = function(cache) {
	cache.put(this, true);
	var node = document.createElement("div");
	node.appendChild(document.createTextNode("("));
	var p = this;
	while (! p.isEmpty()) {
	    appendChild(node, plt.types.toDomNode(p.first(), cache));
	    p = p.rest();
	    if (! p.isEmpty()) {
		appendChild(node, document.createTextNode(" "));
	    }
	}
	node.appendChild(document.createTextNode(")"));
	return node;
    };



    //////////////////////////////////////////////////////////////////////

    plt.types.Vector = function(n, initialElements) {
	this.elts = new Array(n);
	if (initialElements) {
	    for (var i = 0; i < n; i++) {
		this.elts[i] = initialElements[i];
	    }
	} else {
	    for (var i = 0; i < n; i++) {
		this.elts[i] = undefined;
	    }
	}
    };
    plt.types.Vector.makeInstance = function(n, elts) {
	return new plt.types.Vector(n, elts);
    }
    plt.types.Vector.prototype.length = function() {
	return this.elts.length;
    };
    plt.types.Vector.prototype.ref = function(k) {
	return this.elts[k];
    };
    plt.types.Vector.prototype.set = function(k, v) {
	this.elts[k] = v;
    };

    plt.types.Vector.prototype.isEqual = function(other, aUnionFind) {
	if (other != null && other != undefined && other instanceof plt.types.Vector) {
	    if (other.length() != this.length()) {
		return false
	    }
	    for (var i = 0; i <  this.length(); i++) {
		if (! plt.types.isEqual(this.elts[i], other.elts[i], aUnionFind)) {
		    return false;
		}
	    }
	    return true;
	} else {
	    return false;
	}
    };

    plt.types.Vector.prototype.toList = function() {
	var ret = plt.types.Empty.EMPTY;
	for (var i = this.length() - 1; i >= 0; i--) {
	    ret = plt.types.Cons.makeInstance(this.elts[i], ret);	    
	}	
	return ret;
    };

    plt.types.Vector.prototype.toWrittenString = function(cache) {
	cache.put(this, true);
	var texts = [];
	for (var i = 0; i < this.length(); i++) {
	    texts.push(plt.types.toWrittenString(this.ref(i), cache));
	}
	return "#(" + texts.join(" ") + ")";
    };
    plt.types.Vector.prototype.toDisplayedString = function(cache) {
	cache.put(this, true);
	var texts = [];
	for (var i = 0; i < this.length(); i++) {
	    texts.push(plt.types.toDisplayedString(this.ref(i), cache));
	}
	return "#(" + texts.join(" ") + ")";
    };

    plt.types.Vector.prototype.toDomNode = function(cache) {
	cache.put(this, true);
	var node = document.createElement("div");
	node.appendChild(document.createTextNode("#("));
	for (var i = 0; i < this.length(); i++) {
	    appendChild(node,
			plt.types.toDomNode(this.ref(i), cache));
	}
	node.appendChild(document.createTextNode(")"));
	return node;
    };


    //////////////////////////////////////////////////////////////////////


    // _gcd: fixnum fixnum -> fixnum
    var _gcd = function(a, b) {
	while (b != 0) {
	    var t = a;
	    a = b;
	    b = t % b;
	}
	return Math.abs(a);
    }

    // _lcm: fixnum fixnum -> integer
    var _lcm = function(a, b) {
	return Math.abs(a * b / _gcd(a, b));
    }

    // FIXME: there are two definitions of gcd floating around: which one is right?


    //////////////////////////////////////////////////////////////////////



    
    // Rationals
    
    var gcd = function(a, b) {
	var t;
	if (isNaN(a) || !isFinite(a)) {
	    throw new MobyRuntimeError("not a number: " + a);
	}
	if (isNaN(b) || !isFinite(b)) {
	    throw new MobyRuntimeError("not a number: " + b);
	}
	while (b != 0) {
	    t = a;
	    a = b;
	    b = t % b;
	}
	return a;
    }
    
    plt.types.Rational = function(n, d) {
	if (d == undefined) { d = 1; }
	if (d == 0) {
	    throw new MobyRuntimeError("cannot have zero denominator.");
	}
	var divisor = gcd(Math.abs(n), Math.abs(d));
	this.n = n / divisor;
	this.d = d / divisor;
    };

    
    plt.types.Rational.prototype.toWrittenString = function(cache) {
	if (this.d == 1) {
	    return this.n + "";
	} else {
	    return this.n + "/" + this.d;
	}
    };

    plt.types.Rational.prototype.toDisplayedString = plt.types.Rational.prototype.toWrittenString;

    
    plt.types.Rational.prototype.level = function() {
	return 0;
    };
    
    
    plt.types.Rational.prototype.lift = function(target) {
	if (target.level() == 1)
	    return FloatPoint.makeInstance(this.n / this.d);
	if (target.level() == 2)	
	    return plt.types.Complex.makeInstance(this, 
						  plt.types.Rational.ZERO);
	throw new MobyRuntimeError("invalid level of Number");
    };
    
    plt.types.Rational.prototype.isFinite = function() {
	return true;
    };

    plt.types.Rational.prototype.isEqual = function(other, aUnionFind) {
	return this.equals(other);
    };

    plt.types.Rational.prototype.equals = function(other) {
	return other instanceof plt.types.Rational &&
	    this.n == other.n &&
	    this.d == other.d;
    };


    plt.types.Rational.prototype.isInteger = function() { 
	return this.d == 1;
    }
    
    plt.types.Rational.prototype.isRational = function() {
        return true;
    };
    
    plt.types.Rational.prototype.isReal = function() {
	return true;
    };

    
    plt.types.Rational.prototype.add = function(other) {
	return plt.types.Rational.makeInstance(this.n * other.d + 
					       this.d * other.n,
					       this.d * other.d);
    };
    
    plt.types.Rational.prototype.subtract = function(other) {
	return plt.types.Rational.makeInstance((this.n * other.d) - 
					       (this.d * other.n),
					       (this.d * other.d));
    };
    
    plt.types.Rational.prototype.multiply = function(other) {
	return plt.types.Rational.makeInstance(this.n * other.n,
					       this.d * other.d);
    };
    
    plt.types.Rational.prototype.divide = function(other) {
	if (this.d * other.n == 0) {
	    throw new MobyRuntimeError("division by zero");
	}
	return plt.types.Rational.makeInstance(this.n * other.d,
					       this.d * other.n);
    };
    

    plt.types.Rational.prototype.toExact = function() { 
	return this;
    };

    plt.types.Rational.prototype.isExact = function() {
        return true;
    };
    
    plt.types.Rational.prototype.toFixnum = function() {
	return Math.floor(this.n / this.d);  
    };

    plt.types.Rational.prototype.numerator = function() {
	return plt.types.Rational.makeInstance(this.n);
    };

    plt.types.Rational.prototype.denominator = function() {
	return plt.types.Rational.makeInstance(this.d);
    };
    
    plt.types.Rational.prototype.toFloat = function() {
	return this.n / this.d;
    };
    
    plt.types.Rational.prototype.toComplex = function(){
	return plt.types.Complex.makeInstance(this, plt.types.Rational.ZERO);
    };
    
    plt.types.Rational.prototype.greaterThan = function(other) {
	return this.n*other.d > this.d*other.n;
    };

    plt.types.Rational.prototype.greaterThanOrEqual = function(other) {
	return this.n*other.d >= this.d*other.n;
    };
    
    plt.types.Rational.prototype.lessThan = function(other) {
	return this.n*other.d < this.d*other.n;
    };

    plt.types.Rational.prototype.lessThanOrEqual = function(other) {
	return this.n*other.d <= this.d*other.n;
    };

    
    plt.types.Rational.prototype.sqrt = function() {
	if (this.n >= 0) {
	    var newN = Math.sqrt(this.n);
	    var newD = Math.sqrt(this.d);
	    if (Math.floor(newN) == newN &&
		Math.floor(newD) == newD) {
		return plt.types.Rational.makeInstance(newN, newD);
	    } else {
		return FloatPoint.makeInstance(newN / newD);
	    }
	} else {
	    var newN = Math.sqrt(- this.n);
	    var newD = Math.sqrt(this.d);
	    if (Math.floor(newN) == newN &&
		Math.floor(newD) == newD) {
		return plt.types.Complex.makeInstance(
		    plt.types.Rational.ZERO,
		    plt.types.Rational.makeInstance(newN, newD));
	    } else {
		return plt.types.Complex.makeInstance(
		    plt.types.Rational.ZERO,
		    FloatPoint.makeInstance(newN / newD));
	    }
	}
    };
    
    plt.types.Rational.prototype.abs = function() {
	return plt.types.Rational.makeInstance(Math.abs(this.n),
					       this.d);
    };
    
    plt.types.Rational.prototype.floor = function() {
	return plt.types.Rational.makeInstance(Math.floor(this.n / this.d), 1);
    };
    
    
    plt.types.Rational.prototype.ceiling = function() {
	return plt.types.Rational.makeInstance(Math.ceil(this.n / this.d), 1);
    };
    
    plt.types.Rational.prototype.conjugate = plt.types.Rational.prototype.abs;
    
    plt.types.Rational.prototype.magnitude = plt.types.Rational.prototype.abs;
    
    plt.types.Rational.prototype.log = function(){
	return FloatPoint.makeInstance(Math.log(this.n / this.d));
    };
    
    plt.types.Rational.prototype.angle = function(){
	if (0 == this.n)
	    return plt.types.Rational.ZERO;
	if (this.n > 0)
	    return plt.types.Rational.ZERO;
	else
	    return FloatPoint.pi;
    };
    
    plt.types.Rational.prototype.atan = function(){
	return FloatPoint.makeInstance(Math.atan(this.n / this.d));
    };
    
    plt.types.Rational.prototype.cos = function(){
	return FloatPoint.makeInstance(Math.cos(this.n / this.d));
    };
    
    plt.types.Rational.prototype.sin = function(){
	return FloatPoint.makeInstance(Math.sin(this.n / this.d));
    };
    
    plt.types.Rational.prototype.expt = function(a){
	return FloatPoint.makeInstance(Math.pow(this.n / this.d, a.n / a.d));
    };
    
    plt.types.Rational.prototype.exp = function(){
	return FloatPoint.makeInstance(Math.exp(this.n / this.d));
    };
    
    plt.types.Rational.prototype.acos = function(){
	return FloatPoint.makeInstance(Math.acos(this.n / this.d));
    };
    
    plt.types.Rational.prototype.asin = function(){
	return FloatPoint.makeInstance(Math.asin(this.n / this.d));
    };
    
    plt.types.Rational.prototype.imag_dash_part = function(){
	return plt.types.Rational.ZERO;
    };
    
    plt.types.Rational.prototype.real_dash_part = function(){
	return this;
    };


    plt.types.Rational.prototype.timesI = function() {
	return plt.types.Complex.makeInstance(plt.types.Rational.ZERO, this);
    };
    
    plt.types.Rational.prototype.round = function() {
	if (this.d == 2) {
	    // Round to even if it's a n/2
	    var v = this.n / this.d;
	    var fl = Math.floor(v);
	    var ce = Math.ceil(v);
	    if (fl % 2 == 0) { 
		return plt.types.Rational.makeInstance(fl); 
	    }
	    else { 
		return plt.types.Rational.makeInstance(ce); 
	    }
	} else {
	    return plt.types.Rational.makeInstance(Math.round(this.n / this.d));
	}
    };
    
    
    plt.types.Rational.prototype.half = function(){
	return plt.types.Rational.makeInstance(this.n, this.d * 2);
    };
    
    plt.types.Rational.prototype.minus = function(){
	return plt.types.Rational.makeInstance(0 - this.n, this.d);
    };
    
    
    var _rationalCache = {};
    plt.types.Rational.makeInstance = function(n, d) {
	if (n == undefined)
	    throw new MobyRuntimeError("n undefined");

	if (d == undefined) { d = 1; }
	
	if (d < 0) {
	    n = -n;
	    d = -d;
	}

	// Defensive edge cases.  We should never hit these
	// cases, but since we don't yet have bignum arithmetic,
	// it's possible that we may pass bad arguments to
	// Integer.makeInstance.
	if (isNaN (n) || isNaN(d)) {
	    return FloatPoint.nan;
	}
	if (! isFinite(d)) {
	    return Rational.ZERO;
	}
	if (! isFinite(n)) {
	    return FloatPoint.makeInstance(n);
	}


	if (d == 1 && n in _rationalCache) {
	    return _rationalCache[n];
	}
	else {
	    return new plt.types.Rational(n, d);
	}
    };
    
    _rationalCache = {};
    (function() {
	var i;
	for(i = -500; i < 500; i++) {
	    _rationalCache[i] = new plt.types.Rational(i, 1);
	}
    })();
    plt.types.Rational.NEGATIVE_ONE = _rationalCache[-1];
    plt.types.Rational.ZERO = _rationalCache[0];
    plt.types.Rational.ONE = _rationalCache[1];
    plt.types.Rational.TWO = _rationalCache[2];
    
    
    
    
    
    
    var FloatPoint = function(n) {
	this.n = n;
    };
    plt.types.FloatPoint = FloatPoint;


    var NaN = new FloatPoint(Number.NaN);
    var inf = new FloatPoint(Number.POSITIVE_INFINITY);
    var neginf = new FloatPoint(Number.NEGATIVE_INFINITY);

    FloatPoint.pi = new FloatPoint(Math.PI);
    FloatPoint.e = new FloatPoint(Math.E);
    FloatPoint.nan = NaN;
    FloatPoint.inf = inf;
    FloatPoint.neginf = neginf;

    FloatPoint.makeInstance = function(n) {
	if (isNaN(n)) {
	    return FloatPoint.nan;
	} else if (n === Number.POSITIVE_INFINITY) {
	    return FloatPoint.inf;
	} else if (n === Number.NEGATIVE_INFINITY) {
	    return FloatPoint.neginf;
	}
	return new FloatPoint(n);
    };



    FloatPoint.prototype.isFinite = function() {
	return isFinite(this.n);
    };


    FloatPoint.prototype.toExact = function() {
	return plt.types.Rational.makeInstance(Math.floor(this.n), 1);
    };

    FloatPoint.prototype.isExact = function() {
	return false;
    };


    FloatPoint.prototype.level = function() {
	return 1;
    };
    
    FloatPoint.prototype.lift = function(target) {
	return plt.types.Complex.makeInstance(this, plt.types.Rational.ZERO);
    };
    
    FloatPoint.prototype.toWrittenString = function(cache) {
	if (this.n == Number.POSITIVE_INFINITY) {
	    return "+inf.0";
	} else if (this.n == Number.NEGATIVE_INFINITY) {
	    return "-inf.0";
	} else if (this.n == Number.NaN) {
	    return "+nan.0";
	} else {
	    return this.n.toString();
	}
    };
    
    FloatPoint.prototype.toDisplayedString = FloatPoint.prototype.toWrittenString;


    FloatPoint.prototype.isEqual = function(other, aUnionFind) {
	return ((other instanceof FloatPoint) &&
		((this.n == other.n) ||
		 (isNaN(this.n) && isNaN(other.n))));
    };

    FloatPoint.prototype.equals = function(other) {
	return ((other instanceof FloatPoint) &&
		((this.n == other.n)));
    };


    FloatPoint.prototype.isRational = function() {
        return this.isFinite() && this.n == Math.floor(this.n);
    };

    FloatPoint.prototype.isInteger = function() {
	return this.isFinite() && this.n == Math.floor(this.n);
    };

    FloatPoint.prototype.isReal = function() {
	return true;
    };
    

    // sign: plt.types.Number -> {-1, 0, 1}
    var sign = function(n) {
	if (NumberTower.lessThan(n, plt.types.Rational.ZERO)) {
	    return -1;
	} else if (NumberTower.greaterThan(n, plt.types.Rational.ZERO)) {
	    return 1;
	} else {
	    return 0;
	}
    };


    FloatPoint.prototype.add = function(other) {
	if (this.isFinite() && other.isFinite()) {
	    return FloatPoint.makeInstance(this.n + other.n);
	} else {
	    if (isNaN(this.n) || isNaN(other.n)) {
		return NaN;
	    } else if (this.isFinite() && ! other.isFinite()) {
		return other;
	    } else if (!this.isFinite() && other.isFinite()) {
		return this;
	    } else {
		return ((sign(this) * sign(other) == 1) ?
			this : NaN);
	    };
	}
    };
    
    FloatPoint.prototype.subtract = function(other) {
	if (this.isFinite() && other.isFinite()) {
	    return FloatPoint.makeInstance(this.n - other.n);
	} else if (isNaN(this.n) || isNaN(other.n)) {
	    return NaN;
	} else if (! this.isFinite() && ! other.isFinite()) {
	    if (sign(this) == sign(other)) {
		return NaN;
	    } else {
		return this;
	    }
	} else if (this.isFinite()) {
	    return NumberTower.multiply(other, plt.types.Rational.NEGATIVE_ONE);
	} else {  // other.isFinite()
	    return this;
	}

    };
    
    FloatPoint.prototype.multiply = function(other) {
	if (this.n == 0 || other.n == 0) { return plt.types.Rational.ZERO; }

	if (this.isFinite() && other.isFinite()) {
	    return FloatPoint.makeInstance(this.n * other.n);
	} else if (isNaN(this.n) || isNaN(other.n)) {
	    return NaN;
	} else {
	    return ((sign(this) * sign(other) == 1) ? inf : neginf);
	}
    };
    
    FloatPoint.prototype.divide = function(other) {
	if (this.isFinite() && other.isFinite()) {
	    if (other.n == 0) {
		throw new MobyRuntimeError("division by zero");
	    }
            return FloatPoint.makeInstance(this.n / other.n);
	} else if (isNaN(this.n) || isNaN(other.n)) {
	    return NaN;
	} else if (! this.isFinite() && !other.isFinite()) {
	    return NaN;
	} else if (this.isFinite() && !other.isFinite()) {
	    return FloatPoint.makeInstance(0.0);
	} else if (! this.isFinite() && other.isFinite()) {
	    return ((sign(this) * sign(other) == 1) ? inf : neginf);
	}

    };
    
    
    FloatPoint.prototype.toFixnum = function() {
	return Math.floor(this.n);  
    };
    
    FloatPoint.prototype.numerator = function() {
	var stringRep = this.n.toString();
	var match = stringRep.match(/^(.*)\.(.*)$/);
	if (match) {
	    return FloatPoint.makeInstance(parseFloat(match[1] + match[2]));
	} else {
	    return this;
	}
    };

    FloatPoint.prototype.denominator = function() {
	var stringRep = this.n.toString();
	var match = stringRep.match(/^(.*)\.(.*)$/);
	if (match) {
	    return FloatPoint.makeInstance(Math.pow(10, match[2].length));
	} else {
	    return FloatPoint.makeInstance(1.0);
	}
    };


    FloatPoint.prototype.toFloat = function() {
	return this.n;
    };
    
    FloatPoint.prototype.toComplex = function(){
	return plt.types.Complex.makeInstance(this, plt.types.Rational.ZERO);
    };
    
    FloatPoint.prototype.floor = function() {
	if (! isFinite(this.n)) {
	    return this;
	}
	return plt.types.Rational.makeInstance(Math.floor(this.n), 1);
    };
    
    FloatPoint.prototype.ceiling = function() {
	if (! isFinite(this.n)) {
	    return this;
	}
	return plt.types.Rational.makeInstance(Math.ceil(this.n), 1);
    };
    


    FloatPoint.prototype.greaterThan = function(other) {
	return this.n > other.n;
    };
    
    FloatPoint.prototype.greaterThanOrEqual = function(other) {
	return this.n >= other.n;
    };
    
    FloatPoint.prototype.lessThan = function(other) {
	return this.n < other.n;
    };
    
    FloatPoint.prototype.lessThanOrEqual = function(other) {
	return this.n <= other.n;
    };

    
    FloatPoint.prototype.sqrt = function() {
	if (this.n < 0) {
	    var result = plt.types.Complex.makeInstance(
		plt.types.Rational.ZERO,
		FloatPoint.makeInstance(Math.sqrt(-this.n)));
	    return result;
	} else {
	    return FloatPoint.makeInstance(Math.sqrt(this.n));
	}
    };
    
    FloatPoint.prototype.abs = function() {
	return FloatPoint.makeInstance(Math.abs(this.n));
    };
    

    
    FloatPoint.prototype.log = function(){
	if (this.n < 0)
	    return this.toComplex().log();
	else
	    return FloatPoint.makeInstance(Math.log(this.n));
    };
    
    FloatPoint.prototype.angle = function(){
	if (0 == this.n)
	    return plt.types.Rational.ZERO;
	if (this.n > 0)
	    return plt.types.Rational.ZERO;
	else
	    return FloatPoint.pi;
    };
    
    FloatPoint.prototype.atan = function(){
	return FloatPoint.makeInstance(Math.atan(this.n));
    };
    
    FloatPoint.prototype.cos = function(){
	return FloatPoint.makeInstance(Math.cos(this.n));
    };
    
    FloatPoint.prototype.sin = function(){
	return FloatPoint.makeInstance(Math.sin(this.n));
    };
    
    FloatPoint.prototype.expt = function(a){
	if (this.n == 1) {
	    if (a.isFinite()) {
		return this;
	    } else if (isNaN(a.n)){
		return this;
	    } else {
		return this;
	    }
	} else {
	    return FloatPoint.makeInstance(Math.pow(this.n, a.n));
	}
    };
    
    FloatPoint.prototype.exp = function(){
	return FloatPoint.makeInstance(Math.exp(this.n));
    };
    
    FloatPoint.prototype.acos = function(){
	return FloatPoint.makeInstance(Math.acos(this.n));
    };
    
    FloatPoint.prototype.asin = function(){
	return FloatPoint.makeInstance(Math.asin(this.n));
    };
    
    FloatPoint.prototype.imag_dash_part = function(){
	return plt.types.Rational.ZERO;
    };
    
    FloatPoint.prototype.real_dash_part = function(){
	return this;
    };
    
    
    FloatPoint.prototype.round = function(){
	if (isFinite(this.n)) {
	    if (Math.abs(Math.floor(this.n) - this.n) == 0.5) {
		if (Math.floor(this.n) % 2 == 0)
		    return plt.types.Rational.makeInstance(Math.floor(this.n));
		return plt.types.Rational.makeInstance(Math.ceil(this.n));
	    } else {
		return plt.types.Rational.makeInstance(Math.round(this.n));
	    }
	} else {
	    return this;
	}	
    };
    
    
    FloatPoint.prototype.conjugate = FloatPoint.prototype.abs;
    
    FloatPoint.prototype.magnitude = FloatPoint.prototype.abs;
    
    FloatPoint.prototype.minus = function(){
	return FloatPoint.makeInstance(0 - this.n);
    };
    
    FloatPoint.prototype.half = function(){
	return FloatPoint.makeInstance(this.n / 2);
    };	
    
    FloatPoint.prototype.timesI = function(){
	return plt.types.Complex.makeInstance(plt.types.Rational.ZERO, this);
    };
    

    plt.types.Complex = function(r, i){
	this.r = r;
	this.i = i;
    };
    
    // Constructs a complex number from two basic number r and i.  r and i can
    // either be plt.type.Rational or plt.type.FloatPoint.
    plt.types.Complex.makeInstance = function(r, i){
	if (typeof(r) == 'number') {
	    r = (r == Math.floor(r) ? plt.types.Rational.makeInstance(r) :
		 FloatPoint.makeInstance(r));
	}
	if (typeof(i) == 'number') {
	    i = (i == Math.floor(i) ? plt.types.Rational.makeInstance(i) :
		 FloatPoint.makeInstance(i));
	}

	var result = new plt.types.Complex(r, i);
	return result;
    };
    
    plt.types.Complex.prototype.toWrittenString = function(cache) {
	if (NumberTower.greaterThanOrEqual(
	    this.i,
	    plt.types.Rational.ZERO)) {
        return plt.types.toWrittenString(this.r) + "+" + plt.types.toWrittenString(this.i)+"i";
	} else {
            return plt.types.toWrittenString(this.r) + plt.types.toWrittenString(this.i)+"i";
	}
    };

    plt.types.Complex.prototype.toDisplayedString = plt.types.Complex.prototype.toWrittenString;



    plt.types.Complex.prototype.isFinite = function() {
	return this.r.isFinite() && this.i.isFinite();
    }


    plt.types.Complex.prototype.isRational = function() {
	return this.r.isRational() && NumberTower.equal(this.i, plt.types.Rational.ZERO);
    };

    plt.types.Complex.prototype.isInteger = function() {
	return this.r.isInteger() && NumberTower.equal(this.i, plt.types.Rational.ZERO);
    };

    plt.types.Complex.prototype.toExact = function() { 
	if (! this.isReal()) {
	    throw new MobyRuntimeError("inexact->exact: expects argument of type real number");
	}
	return this.r.toExact();
    };

    plt.types.Complex.prototype.isExact = function() { 
        return this.r.isExact() && this.i.isExact();
    };



    plt.types.Complex.prototype.level = function(){
	return 2;
    };
    
    plt.types.Complex.prototype.lift = function(target){
	throw new MobyRuntimeError("Don't know how to lift Complex number");
    };
    
    plt.types.Complex.prototype.isEqual = function(other, aUnionFind){
	return this.equals(other);
    };

    plt.types.Complex.prototype.equals = function(other) {
	var result = ((other instanceof plt.types.Complex) && 
		      (NumberTower.equal(this.r, other.r)) &&
		      (NumberTower.equal(this.i, other.i)));
	return result;
    };


    plt.types.Complex.prototype.greaterThan = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new MobyRuntimeError(">: expects argument of type real number");
	}
	return NumberTower.greaterThan(this.r, other.r);
    };

    plt.types.Complex.prototype.greaterThanOrEqual = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new MobyRuntimeError(">: expects argument of type real number");
	}
	return NumberTower.greaterThanOrEqual(this.r, other.r);
    };

    plt.types.Complex.prototype.lessThan = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new MobyRuntimeError(">: expects argument of type real number");
	}
	return NumberTower.lessThan(this.r, other.r);
    };

    plt.types.Complex.prototype.lessThanOrEqual = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new MobyRuntimeError(">: expects argument of type real number");
	}
	return NumberTower.lessThanOrEqual(this.r, other.r);
    };


    plt.types.Complex.prototype.abs = function(){
	if (!NumberTower.equal(this.i, plt.types.Rational.ZERO).valueOf())
	    throw new MobyRuntimeError("abs: expects argument of type real number");
	return this.r.abs();
    };
    
    plt.types.Complex.prototype.toFixnum = function(){
	if (!NumberTower.equal(this.i, plt.types.Rational.ZERO).valueOf())
	    throw new MobyRuntimeError("toFixnum: expects argument of type real number");
	return this.r.toFixnum();
    };

    plt.types.Complex.prototype.numerator = function() {
	if (!this.isReal())
	    throw new MobyRuntimeError("numerator: can only be applied to real number");
	return this.n.numerator();
    };
    

    plt.types.Complex.prototype.denominator = function() {
	if (!this.isReal())
	    throw new MobyRuntimeError("floor: can only be applied to real number");
	return this.n.denominator();
    };

    
    plt.types.Complex.prototype.toFloat = function(){
	if (!NumberTower.equal(this.i, plt.types.Rational.ZERO).valueOf())
	    throw new MobyRuntimeError("toFloat: expects argument of type real number");
	return this.r.toFloat();
    };
    
    plt.types.Complex.prototype.toComplex = function(){
	return this;
    };
    
    plt.types.Complex.prototype.add = function(other){
	return plt.types.Complex.makeInstance(
	    NumberTower.add(this.r, other.r),
	    NumberTower.add(this.i, other.i));
    };
    
    plt.types.Complex.prototype.subtract = function(other){
	return plt.types.Complex.makeInstance(
	    NumberTower.subtract(this.r, other.r),
	    NumberTower.subtract(this.i, other.i));
    };
    
    plt.types.Complex.prototype.multiply = function(other){

	// If the other value is real, just do primitive division
	if (other.isReal()) {
	    return plt.types.Complex.makeInstance(
		NumberTower.multiply(this.r, other.r),
		NumberTower.multiply(this.i, other.r));
	}

	var r = NumberTower.subtract(
	    NumberTower.multiply(this.r, other.r),
	    NumberTower.multiply(this.i, other.i));
	var i = NumberTower.add(
	    NumberTower.multiply(this.r, other.i),
	    NumberTower.multiply(this.i, other.r));
	if (NumberTower.equal(i, plt.types.Rational.ZERO)) {
	    return r;
	}
	return plt.types.Complex.makeInstance(r, i);
    };
    
    plt.types.Complex.prototype.divide = function(other){
	// If the other value is real, just do primitive division
	if (other.isReal()) {
	    return plt.types.Complex.makeInstance(
		NumberTower.divide(this.r, other.r),
		NumberTower.divide(this.i, other.r));
	}


	var con = other.conjugate();
	var up =  NumberTower.multiply(this, con).toComplex();

	// Down is guaranteed to be real by this point.
	var down = NumberTower.multiply(other, con);

	var result = plt.types.Complex.makeInstance(
	    NumberTower.divide(up.r, down),
	    NumberTower.divide(up.i, down));
	return result;
    };
    
    plt.types.Complex.prototype.conjugate = function(){
	var result = plt.types.Complex.makeInstance(
	    this.r, 
	    NumberTower.subtract(plt.types.Rational.ZERO, 
					   this.i));

	return result;
    };
    
    plt.types.Complex.prototype.magnitude = function(){
	var sum = NumberTower.add(
	    NumberTower.multiply(this.r, this.r),
	    NumberTower.multiply(this.i, this.i));
	return sum.sqrt();
    };
    
    plt.types.Complex.prototype.isReal = function(){
	return NumberTower.equal(this.i, plt.types.Rational.ZERO);
    };
    
    plt.types.Complex.prototype.sqrt = function(){
	if (this.isReal())
	    return this.r.sqrt();
	// http://en.wikipedia.org/wiki/Square_root#Square_roots_of_negative_and_complex_numbers	
	var r_plus_x = NumberTower.add(this.magnitude(), this.r);

	var r = r_plus_x.half().sqrt();

	var i = NumberTower.divide(this.i, NumberTower.multiply(r_plus_x, FloatPoint.makeInstance(2)).sqrt());
	

	return plt.types.Complex.makeInstance(r, i);
    };
    
    plt.types.Complex.prototype.log = function(){
	var m = this.magnitude();
	var theta = this.angle();
	var result = NumberTower.add(
	    m.log(),
	    theta.timesI());
	return result;
    };
    
    plt.types.Complex.prototype.angle = function(){
	if (this.isReal()) {
	    return this.r.angle();
	}
	if (NumberTower.equal(plt.types.Rational.ZERO, this.r)) {
	    var tmp = FloatPoint.pi.half();
	    return NumberTower.greaterThan(this.i, plt.types.Rational.ZERO) ? tmp : tmp.minus();
	} else {
	    var tmp = NumberTower.divide(this.i.abs(), this.r.abs()).atan();
	    if (NumberTower.greaterThan(this.r, plt.types.Rational.ZERO)) {
		return NumberTower.greaterThan(this.i, plt.types.Rational.ZERO) ? tmp : tmp.minus();
	    } else {
		return NumberTower.greaterThan(this.i, plt.types.Rational.ZERO) ? FloatPoint.pi.subtract(tmp) : tmp.subtract(FloatPoint.pi);
	    }
	}
    };
    
    var plusI = plt.types.Complex.makeInstance(plt.types.Rational.ZERO,
					       plt.types.Rational.ONE);
    var minusI = plt.types.Complex.makeInstance(plt.types.Rational.ZERO,
						plt.types.Rational.NEGATIVE_ONE);
    
    plt.types.Complex.prototype.atan = function(){
	if (NumberTower.equal(this, plusI) ||
	    NumberTower.equal(this, minusI)) {
	    return FloatPoint.makeInstance(Number.NEGATIVE_INFINITY);
	}
	return NumberTower.multiply(
	    plusI,
	    NumberTower.multiply(
		FloatPoint.makeInstance(0.5),
		(NumberTower.divide(
		    NumberTower.add(plusI, this),
		    NumberTower.add(
			plusI,
			NumberTower.subtract(plt.types.Rational.ZERO, this)))).log()));
    };
    
    plt.types.Complex.prototype.cos = function(){
	if (this.isReal())
	    return this.r.cos();
	var iz = this.timesI();
	var iz_minus = iz.minus();
	
	return NumberTower.add(iz.exp(), iz_minus.exp()).half();
    };
    
    plt.types.Complex.prototype.sin = function(){
	if (this.isReal())
	    return this.r.sin();
	var iz = this.timesI();
	var iz_minus = iz.minus();
	var z2 = plt.types.Complex.makeInstance(plt.types.Rational.ZERO,
						plt.types.Rational.TWO);
	var exp_minus = NumberTower.subtract(iz.exp(), iz_minus.exp());
	var result = NumberTower.divide(exp_minus, z2);
	return result;
    };
    
    plt.types.Complex.prototype.expt= function(y){
	var expo = NumberTower.multiply(y, this.log());
	return expo.exp();
    };
    
    plt.types.Complex.prototype.exp = function(){
	var r = this.r.exp();
	var cos_a = this.i.cos();
	var sin_a = this.i.sin();

	return NumberTower.multiply(
	    r,
	    NumberTower.add(cos_a, sin_a.timesI()));
    };
    
    plt.types.Complex.prototype.acos = function(){
	if (this.isReal())
	    return this.r.acos();
	var pi_half = FloatPoint.pi.half();
	var iz = this.timesI();
	var root = NumberTower.subtract(plt.types.Rational.ONE, this.multiply(this)).sqrt();
	var l = NumberTower.add(iz, root).log().timesI();
	return NumberTower.add(pi_half, l);
    };
    
    plt.types.Complex.prototype.asin = function(){
	if (this.isReal())
	    return this.r.asin();

	var oneMinusThisSq = 
	    NumberTower.subtract(
		plt.types.Rational.ONE, 
		this.multiply(this));
	var sqrtOneMinusThisSq = oneMinusThisSq.sqrt();
	return NumberTower.multiply(
	    plt.types.Rational.TWO,
	    (NumberTower.divide(
		this, 
		NumberTower.add(
		    plt.types.Rational.ONE,
		    sqrtOneMinusThisSq))).atan());
    };
    
    plt.types.Complex.prototype.ceiling = function(){
	if (!this.isReal())
	    throw new MobyRuntimeError("ceiling: can only be applied to real number");
	return this.r.ceiling();
    };
    
    plt.types.Complex.prototype.floor = function(){
	if (!this.isReal())
	    throw new MobyRuntimeError("floor: can only be applied to real number");
	return this.r.floor();
    };
    
    plt.types.Complex.prototype.imag_dash_part = function(){
	return this.i;
    };
    
    plt.types.Complex.prototype.real_dash_part = function(){
	return this.r;
    };
    
    plt.types.Complex.prototype.round = function(){
	return this.r.round();
    };
    
    
    plt.types.Complex.prototype.timesI = function(){
	return this.multiply(plt.types.Complex.makeInstance(plt.types.Rational.ZERO, plt.types.Rational.ONE));
    };
    
    plt.types.Complex.prototype.minus = function(){
	return plt.types.Complex.makeInstance(NumberTower.subtract(plt.types.Rational.ZERO, this.r),
					      NumberTower.subtract(plt.types.Rational.ZERO, this.i));
    };
    
    plt.types.Complex.prototype.half = function(){
	return plt.types.Complex.makeInstance(this.r.half(), 
					      this.i.half());
    };
    
    //////////////////////////////////////////////////////////////////////
    // NumberTower.
    // 
    var NumberTower = {};
    plt.types.NumberTower = NumberTower;

    
    NumberTower.toFixnum = function(num) {
	return num.toFixnum();
    };
    
    NumberTower.toFloat = function(num) {
	return num.toFloat();
    };
    
    NumberTower.abs = function(n) {
	return n.abs();
    };
    
    NumberTower.isFinite = function(n) {
	return n.isFinite();
    }

    NumberTower.toExact = function(x) {
	return x.toExact();
    };

    NumberTower.add = function(x, y) {
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	return x.add(y);
    };
    
    NumberTower.subtract = function(x, y) {
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	return x.subtract(y);
    };
    
    NumberTower.multiply = function(x, y) {
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	return x.multiply(y);
    };
    
    NumberTower.divide = function(x, y) {
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	return x.divide(y);
    };
    
    NumberTower.equal = function(x, y) {
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	
	return x.equals(y);
    };

    NumberTower.eqv = function(x, y) {
	return ((x === y) ||
		(x.level() === y.level() && x.equals(y)));
    };
    
    NumberTower.approxEqual = function(x, y, delta) {
	return NumberTower.lessThan(NumberTower.abs(NumberTower.subtract(x, y)),
                                              delta);
    };
    
    NumberTower.greaterThanOrEqual = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);

	if (!(x.isReal() && y.isReal()))
	    throw new MobyRuntimeError("greaterThanOrEqual: couldn't be applied to complex number");
	return x.greaterThanOrEqual(y);
    };
    
    NumberTower.lessThanOrEqual = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	if (!(x.isReal() && y.isReal()))
	    throw new MobyRuntimeError("lessThanOrEqual: couldn't be applied to complex number");
	return x.lessThanOrEqual(y);    	
    };
    
    NumberTower.greaterThan = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	
	if (!(x.isReal() && y.isReal()))
	    throw new MobyRuntimeError("greaterThan: couldn't be applied to complex number");
	return x.greaterThan(y);
	
    };
    
    NumberTower.lessThan = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);

	if (!(x.isReal() && y.isReal()))
	    throw new MobyRuntimeError("lessThan: couldn't be applied to complex number");
	return x.lessThan(y);
    };
    
    NumberTower.modulo = function(m, n) {
	var result = 
	    plt.types.Rational.makeInstance(m.toFixnum() % n.toFixnum(),
					    1);

	// The sign of the result should match the sign of n.
	if (NumberTower.lessThan(n, plt.types.Rational.ZERO)) {
	    if (NumberTower.lessThanOrEqual(result, plt.types.Rational.ZERO)) {
		return result;
	    }
	    return NumberTower.add(result, n);

	} else {
	    if (NumberTower.lessThan(result, plt.types.Rational.ZERO)) {
		return NumberTower.add(result, n);
	    }
	    return result;
	}
    };
    
    NumberTower.sqr = function(x) {
	return NumberTower.multiply(x, x);
    };
    
    NumberTower.expt = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	return x.expt(y);
    };
    

    // gcd: number [number ...] -> number
    NumberTower.gcd = function(first, rest) {
	var result = Math.abs(first.toFixnum());
	for (var i = 0; i < rest.length; i++) {
	    result = _gcd(result, rest[i].toFixnum());
	}
	return plt.types.Rational.makeInstance(result);	
    };

    // lcm: number [number ...] -> number
    NumberTower.lcm = function(first, rest) {
	var result = Math.abs(first.toFixnum());
	if (result == 0) { return plt.types.Rational.ZERO; }
	for (var i = 0; i < rest.length; i++) {
	    if (rest[i].toFixnum() == 0) {
		return plt.types.Rational.ZERO;
	    }
	    result = _lcm(result, rest[i].toFixnum());
	}
	return plt.types.Rational.makeInstance(result);
    };



    // Strings
    // For the moment, we just reuse Javascript strings.
    plt.types.String = String;
    plt.types.String.makeInstance = function(s) {
	return s.valueOf();
    };
    
    
    // WARNING
    // WARNING: we are extending the built-in Javascript string class here!
    // WARNING
    plt.types.String.prototype.isEqual = function(other, aUnionFind){
	return this == other;
    };
    
    var _quoteReplacingRegexp = new RegExp("[\"\\\\]", "g");
    plt.types.String.prototype.toWrittenString = function(cache) {
    	return '"' + this.replace(_quoteReplacingRegexp,
    	                       function(match, submatch, index) {
                                       return "\\" + match;
                                   }) + '"';
    }

    plt.types.String.prototype.toDisplayedString = function(cache) {
        return this;
    }



    //////////////////////////////////////////////////////////////////////

    // makeLowLevelEqHash: -> hashtable
    // Constructs an eq hashtable that uses Moby's getEqHashCode function.
    var makeLowLevelEqHash = function() {
	return new plt._Hashtable(
	    function(x) { return plt.types.getEqHashCode(x); },
	    function(x, y) { return x === y; });
    };

    plt.types.makeLowLevelEqHash = makeLowLevelEqHash;









    //////////////////////////////////////////////////////////////////////
    // Hashtables
    var EqHashTable = function(inputHash) {
	this.hash = makeLowLevelEqHash();

    };
    plt.types.EqHashTable = EqHashTable;

    EqHashTable.prototype.toWrittenString = function(cache) {
	return "<hash>";
    };

    EqHashTable.prototype.toDisplayedString = function(cache) {
	return "<hash>";
    };

    EqHashTable.prototype.isEqual = function(other, aUnionFind) {
	if (other == undefined || other == null || (! (other instanceof EqHashTable))) {
	    return false; 
	}

	if (this.hash.keys().length != other.hash.keys().length) { 
	    return false;
	}

	var keys = this.hash.keys();
	for (var i = 0; i < keys.length; i++){
	    if (! (this.hash.get(keys[i]) === other.hash.get(keys[i]))) {
		return false;
	    }
	}
	return true;
    };



    var EqualHashTable = function(inputHash) {
	this.hash = new plt._Hashtable(function(x) { 
                                           return plt.types.toWrittenString(x); 
                                       },
				       function(x, y) {
					   return plt.Kernel.equal_question_(x, y); 
				       });
    };

    plt.types.EqualHashTable = EqualHashTable;

    EqualHashTable.prototype.toWrittenString = function(cache) {
	return "<hash>";
    };
    EqualHashTable.prototype.toDisplayedString = function(cache) {
	return "<hash>";
    };

    EqualHashTable.prototype.isEqual = function(other, aUnionFind) {
	if (other == undefined || other == null || (! (other instanceof EqualHashTable))) {
	    return false; 
	}

	if (this.hash.keys().length != other.hash.keys().length) { 
	    return false;
	}

	var keys = this.hash.keys();
	for (var i = 0; i < keys.length; i++){
	    if (! (plt.Kernel.isEqual(this.hash.get(keys[i]),
				      other.hash.get(keys[i]),
				      aUnionFind))) {
		return false;
	    }
	}
	return true;
    };











    //////////////////////////////////////////////////////////////////////







    plt.types.toWrittenString = function(x, cache) {
	if (! cache) { 
	    cache = makeLowLevelEqHash();
	}

	if (x && cache.containsKey(x)) {
	    return "...";
	}

	if (x == undefined || x == null) {
	    return "<undefined>";
	}
	if (typeof(x) == 'string') {
	    return x.toWrittenString();
	}
	if (typeof(x) != 'object' && typeof(x) != 'function') {
	    return x.toString();
	}
	if (typeof(x.toWrittenString) !== 'undefined') {
	    return x.toWrittenString(cache);
	}
	if (typeof(x.toDisplayedString) !== 'undefined') {
	    return x.toDisplayedString(cache);
	} else {
	    return x.toString();
	}
    };



    plt.types.toDisplayedString = function(x, cache) {
	if (! cache) {
	    cache = makeLowLevelEqHash();
	}
	if (x && cache.containsKey(x)) {
	    return "...";
	}

	if (x == undefined || x == null) {
	    return "<undefined>";
	}
	if (typeof(x) == 'string') {
	    return x.toDisplayedString();
	}
	if (typeof(x) != 'object' && typeof(x) != 'function') {
	    return x.toString();
	}
	if (typeof(x.toWrittenString) !== 'undefined') {
	    return x.toWrittenString(cache);
	}
	if (typeof(x.toDisplayedString) !== 'undefined') {
	    return x.toDisplayedString(cache);
	} else {
	    return x.toString();
	}
    };



    // toDomNode: scheme-value -> dom-node
    plt.types.toDomNode = function(x, cache) {
	if (! cache) {
	    cache = makeLowLevelEqHash();
	}
	if (x && cache.containsKey(x)) {
	    return document.createTextNode("...");
	}

	if (x == undefined || x == null) {
	    var node = document.createTextNode("<undefined>");
	    return node;
	}
	if (typeof(x) == 'string') {
	    var node = document.createTextNode(x.toWrittenString());
	    return node;
	}
	if (typeof(x) != 'object' && typeof(x) != 'function') {
	    var node = document.createTextNode(x.toString());
	    return node;
	}
	if (x.nodeType) {
	    return x;
	}
	if (typeof(x.toDomNode) !== 'undefined') {
	    return x.toDomNode(cache);
	}
	if (typeof(x.toWrittenString) !== 'undefined') {
	    var node = document.createTextNode(plt.types.toWrittenString(x, cache));
	    return node;
	}
	if (typeof(x.toDisplayedString) !== 'undefined') {
	    var node = document.createTextNode(plt.types.toDisplayedString(x, cache));
	    return node;
	} else {
	    var node = document.createTextNode(x.toString());
	    return node;
	}
    };





    var isNumber = function(x) {
	return (x != null && x != undefined && (x instanceof plt.types.Rational || 
						x instanceof plt.types.FloatPoint ||
						x instanceof plt.types.Complex));
    }
    plt.types.isNumber = isNumber;



    // isEqual: X Y -> boolean
    // Returns true if the objects are equivalent; otherwise, returns false.
    plt.types.isEqual = function(x, y, aUnionFind) {
	if (x === y) { return true; }

	if (isNumber(x) && isNumber(y)) {
	    return NumberTower.equal(x, y);
	}

	if (x == undefined || x == null) {
	    return (y == undefined || y == null);
	}

	if (typeof(x) == 'object' && typeof(y) == 'object' && 
	    aUnionFind.find(x) === aUnionFind.find(y)) {
	    return true;
	} else {
	    if (typeof(x) == 'object' && typeof(y) == 'object') { 
		aUnionFind.merge(x, y); 
	    }
	    return x.isEqual(y, aUnionFind);
	}
    }





    // liftToplevelToFunctionValue: primitive-function string fixnum scheme-value -> scheme-value
    // Lifts a primitive toplevel or module-bound value to a scheme value.
    plt.types.liftToplevelToFunctionValue = function(primitiveF,
						     name,
						     minArity, 
						     procedureArityDescription) {
	if (! primitiveF._mobyLiftedFunction) {
	    var lifted = function(args) {
		return primitiveF.apply(null, args.slice(0, minArity).concat([args.slice(minArity)]));
	    };
	    lifted.isEqual = function(other, cache) { 
		return this === other; 
	    }
	    lifted.toWrittenString = function(cache) { 
		return "<function:" + name + ">";
	    };
	    lifted.toDisplayedString = lifted.toWrittenString;
	    lifted.procedureArity = procedureArityDescription;
	    primitiveF._mobyLiftedFunction = lifted;
	    
	} 
	return primitiveF._mobyLiftedFunction;
    };






    //////////////////////////////////////////////////////////////////////
    var MobyError = function(msg) {
	this.msg = msg;
    }
    MobyError.prototype.name= 'MobyError';
    MobyError.prototype.toString = function () { return this.name + ": " + this.msg }


    var MobyParserError = function(msg, loc) {
	MobyError.call(this, msg);
	this.loc = loc;
    }
    MobyParserError.prototype = heir(MobyError.prototype);
    MobyParserError.prototype.name= 'MobyParserError';

    
    var MobySyntaxError = function(msg, stx) {
	MobyError.call(this, msg);
	this.stx = stx;
    }
    MobySyntaxError.prototype = heir(MobyError.prototype);
    MobySyntaxError.prototype.name= 'MobySyntaxError';


    var MobyTypeError = function(msg) {
	MobyError.call(this, msg);
    }
    MobyTypeError.prototype = heir(MobyError.prototype);
    MobyTypeError.prototype.name= 'MobyTypeError';



    var MobyRuntimeError = function(msg) {
	MobyError.call(this, msg);
    }
    MobyRuntimeError.prototype = heir(MobyError.prototype);
    MobyRuntimeError.prototype.name= 'MobyRuntimeError';


    
    var MobyTestingError = function(msg) {
	MobyError.call(this, msg);
    }
    MobyTestingError.prototype = heir(MobyRuntimeError.prototype);
    MobyTestingError.prototype.name= 'MobyTestingError';




    plt.types.MobyError = MobyError;
    plt.types.MobyParserError = MobyParserError;
    plt.types.MobySyntaxError = MobySyntaxError;
    plt.types.MobyTypeError = MobyTypeError;
    plt.types.MobyRuntimeError = MobyRuntimeError;
    plt.types.MobyTestingError = MobyTestingError;




    plt.types.Box = Box;
    

})();
goog.provide("plt._Hashtable");


/**
 * Copyright 2009 Tim Down.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//     *
//       void put(Object key, Object value)

//       Sets the value associated with the key supplied. If the hash table already contains the key then the old value is overwritten.
//     *
//       void get(Object key)

//       Returns the value associated with the key supplied, or null if no value is found for that key.
//     *
//       Boolean containsKey(Object key)

//       Returns whether the hash table contains the specified key.
//     *
//       Boolean containsValue(Object value)

//       Returns whether the hash table contains the specified value.
//     *
//       void clear()

//       Removes all entries from the hash table.
//     *
//       Boolean isEmpty()

//       Returns true if the hash table contains no key/value pairs.
//     *
//       Array keys()

//       Returns an array containing all the keys contained in the hash table.
//     *
//       Array values()

//       Returns an array containing all the values contained in the hash table.
//     *
//       void remove(Object key)

//       Removes the key and its corresponding value from the hash table.
//     *
//       Number size()

//       Returns the number of key/value pairs contained in the hash table.


plt._Hashtable=(function(){function _1(_2){return(typeof _2==="undefined");};function _3(_4){return(typeof _4==="function");};function _5(_6){return(typeof _6==="string");};function _7(_8,_9){return _3(_8[_9]);};function _a(_b){return _7(_b,"equals");};function _c(_d){return _7(_d,"hashCode");};function _e(_f){if(_5(_f)){return _f;}else{if(_c(_f)){var _10=_f.hashCode();if(!_5(_10)){return _e(_10);}
return _10;}else{if(_7(_f,"toString")){return _f.toString();}else{return String(_f);}}}};function _11(_12,_13){return _12.equals(_13);};function _14(_15,_16){if(_a(_16)){return _16.equals(_15);}else{return _15===_16;}};function _17(o1,o2){return o1===o2;};function _1a(arr,_1c,_1d,_1e,_1f){var _20;for(var i=0,len=arr.length;i<len;i++){_20=arr[i];if(_1f(_1c,_1d(_20))){return _1e?[i,_20]:true;}}
return false;};function _23(arr,idx){if(_7(arr,"splice")){arr.splice(idx,1);}else{if(idx===arr.length-1){arr.length=idx;}else{var _26=arr.slice(idx+1);arr.length=idx;for(var i=0,len=_26.length;i<len;i++){arr[idx+i]=_26[i];}}}};function _29(kv,_2b){if(kv===null){throw new Error("null is not a valid "+_2b);}else{if(_1(kv)){throw new Error(_2b+" must not be undefined");}}};var _2c="key",_2d="value";function _2e(key){_29(key,_2c);};function _30(_31){_29(_31,_2d);};function _32(_33,_34,_35){this.entries=[];this.addEntry(_33,_34);if(_35!==null){this.getEqualityFunction=function(){return _35;};}};function _36(_37){return _37[0];};function _38(_39){return _39[1];};_32.prototype={getEqualityFunction:function(_3a){if(_a(_3a)){return _11;}else{return _14;}},searchForEntry:function(key){return _1a(this.entries,key,_36,true,this.getEqualityFunction(key));},getEntryForKey:function(key){return this.searchForEntry(key)[1];},getEntryIndexForKey:function(key){return this.searchForEntry(key)[0];},removeEntryForKey:function(key){var _3f=this.searchForEntry(key);if(_3f){_23(this.entries,_3f[0]);return true;}
return false;},addEntry:function(key,_41){this.entries[this.entries.length]=[key,_41];},size:function(){return this.entries.length;},keys:function(_42){var _43=_42.length;for(var i=0,len=this.entries.length;i<len;i++){_42[_43+i]=this.entries[i][0];}},values:function(_46){var _47=_46.length;for(var i=0,len=this.entries.length;i<len;i++){_46[_47+i]=this.entries[i][1];}},containsKey:function(key){return _1a(this.entries,key,_36,false,this.getEqualityFunction(key));},containsValue:function(_4b){return _1a(this.entries,_4b,_38,false,_17);}};function _4c(){};_4c.prototype=[];function _4d(_4e){return _4e[0];};function _4f(_50,_51,_52){return _1a(_50,_51,_4d,true,_52);};function _53(_54,_55){var _56=_54[_55];if(_56&&(_56 instanceof _4c)){return _56[1];}
return null;};function _57(_58,_59){var _5a=[];var _5b={};_58=_3(_58)?_58:_e;_59=_3(_59)?_59:null;this.put=function(key,_5d){_2e(key);_30(_5d);var _5e=_58(key);var _5f=_53(_5b,_5e);if(_5f){var _60=_5f.getEntryForKey(key);if(_60){_60[1]=_5d;}else{_5f.addEntry(key,_5d);}}else{var _61=new _4c();_61[0]=_5e;_61[1]=new _32(key,_5d,_59);_5a[_5a.length]=_61;_5b[_5e]=_61;}};this.get=function(key){_2e(key);var _63=_58(key);var _64=_53(_5b,_63);if(_64){var _65=_64.getEntryForKey(key);if(_65){return _65[1];}}
return null;};this.containsKey=function(key){_2e(key);var _67=_58(key);var _68=_53(_5b,_67);if(_68){return _68.containsKey(key);}
return false;};this.containsValue=function(_69){_30(_69);for(var i=0,len=_5a.length;i<len;i++){if(_5a[i][1].containsValue(_69)){return true;}}
return false;};this.clear=function(){_5a.length=0;_5b={};};this.isEmpty=function(){return _5a.length===0;};this.keys=function(){var _6c=[];for(var i=0,len=_5a.length;i<len;i++){_5a[i][1].keys(_6c);}
return _6c;};this.values=function(){var _6f=[];for(var i=0,len=_5a.length;i<len;i++){_5a[i][1].values(_6f);}
return _6f;};this.remove=function(key){_2e(key);var _73=_58(key);var _74=_53(_5b,_73);if(_74){if(_74.removeEntryForKey(key)){if(_74.size()===0){var _75=_4f(_5a,_73,_74.getEqualityFunction(key));_23(_5a,_75[0]);delete _5b[_73];}}}};this.size=function(){var _76=0;for(var i=0,len=_5a.length;i<len;i++){_76+=_5a[i][1].size();}
return _76;};};return _57;})();
// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/runtime-modules"]) == 'undefined') {
    plt._MODULES["moby/runtime/runtime-modules"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var MOBY_dash_RUNTIME_dash_MODULE_dash_BINDINGS; 
        plt._MODULES["moby/runtime/runtime-modules"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 
MOBY_dash_RUNTIME_dash_MODULE_dash_BINDINGS = plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/runtime-modules")),(plt.types.String.makeInstance("collects/runtime/runtime-modules.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("MOBY-RUNTIME-MODULE-BINDINGS")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/runtime-modules\"].EXPORTS[\"MOBY_dash_RUNTIME_dash_MODULE_dash_BINDINGS\"]")),plt.types.Empty.EMPTY]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/stx")),(plt.types.String.makeInstance("collects/runtime/stx.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx-e")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_dash_e\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("stx:list")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("elts")),(plt.types.Symbol.makeInstance("loc"))])),(plt.types.Symbol.makeInstance("make-stx:list")),(plt.types.Symbol.makeInstance("stx:list?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("stx:list-elts")),(plt.types.Symbol.makeInstance("stx:list-loc"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-stx:list-elts!")),(plt.types.Symbol.makeInstance("set-stx:list-loc!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-stx:list")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"make_dash_stx_colon_list\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx:list?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_colon_list_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx:list-elts")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_colon_list_dash_elts\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx:list-loc")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_colon_list_dash_loc\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-stx:list-elts!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_stx_colon_list_dash_elts_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-stx:list-loc!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_stx_colon_list_dash_loc_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("stx:atom")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("datum")),(plt.types.Symbol.makeInstance("loc"))])),(plt.types.Symbol.makeInstance("make-stx:atom")),(plt.types.Symbol.makeInstance("stx:atom?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("stx:atom-datum")),(plt.types.Symbol.makeInstance("stx:atom-loc"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-stx:atom-datum!")),(plt.types.Symbol.makeInstance("set-stx:atom-loc!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-stx:atom")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"make_dash_stx_colon_atom\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx:atom?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_colon_atom_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx:atom-datum")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_colon_atom_dash_datum\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx:atom-loc")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_colon_atom_dash_loc\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-stx:atom-datum!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_stx_colon_atom_dash_datum_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-stx:atom-loc!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_stx_colon_atom_dash_loc_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx-loc")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_dash_loc\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("datum->stx")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"datum_dash__greaterthan_stx\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx-begins-with?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_dash_begins_dash_with_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("stx->datum")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"stx_dash__greaterthan_datum\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("Loc")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("offset")),(plt.types.Symbol.makeInstance("line")),(plt.types.Symbol.makeInstance("column")),(plt.types.Symbol.makeInstance("span")),(plt.types.Symbol.makeInstance("id"))])),(plt.types.Symbol.makeInstance("make-Loc")),(plt.types.Symbol.makeInstance("Loc?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("Loc-offset")),(plt.types.Symbol.makeInstance("Loc-line")),(plt.types.Symbol.makeInstance("Loc-column")),(plt.types.Symbol.makeInstance("Loc-span")),(plt.types.Symbol.makeInstance("Loc-id"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-Loc-offset!")),(plt.types.Symbol.makeInstance("set-Loc-line!")),(plt.types.Symbol.makeInstance("set-Loc-column!")),(plt.types.Symbol.makeInstance("set-Loc-span!")),(plt.types.Symbol.makeInstance("set-Loc-id!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-Loc")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(5, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"make_dash_Loc\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("Loc?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"Loc_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("Loc-offset")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"Loc_dash_offset\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("Loc-line")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"Loc_dash_line\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("Loc-column")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"Loc_dash_column\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("Loc-span")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"Loc_dash_span\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("Loc-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"Loc_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-Loc-offset!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_Loc_dash_offset_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-Loc-line!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_Loc_dash_line_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-Loc-column!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_Loc_dash_column_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-Loc-span!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_Loc_dash_span_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-Loc-id!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/stx\"].EXPORTS[\"set_dash_Loc_dash_id_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/binding")),(plt.types.String.makeInstance("collects/runtime/binding.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("module-binding")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("name")),(plt.types.Symbol.makeInstance("source")),(plt.types.Symbol.makeInstance("bindings"))])),(plt.types.Symbol.makeInstance("make-module-binding")),(plt.types.Symbol.makeInstance("module-binding?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("module-binding-name")),(plt.types.Symbol.makeInstance("module-binding-source")),(plt.types.Symbol.makeInstance("module-binding-bindings"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-module-binding-name!")),(plt.types.Symbol.makeInstance("set-module-binding-source!")),(plt.types.Symbol.makeInstance("set-module-binding-bindings!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-module-binding")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(3, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"make_dash_module_dash_binding\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-binding?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_binding_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-binding-name")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_binding_dash_name\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-binding-source")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_binding_dash_source\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-binding-bindings")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_binding_dash_bindings\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-module-binding-name!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_module_dash_binding_dash_name_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-module-binding-source!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_module_dash_binding_dash_source_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-module-binding-bindings!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_module_dash_binding_dash_bindings_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-path?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_path_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("sexp->binding")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"sexp_dash__greaterthan_binding\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-name?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_name_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("module-path=?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"module_dash_path_equal__question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("localize-binding-to-module")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"localize_dash_binding_dash_to_dash_module\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("binding:function")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("name")),(plt.types.Symbol.makeInstance("module-source")),(plt.types.Symbol.makeInstance("min-arity")),(plt.types.Symbol.makeInstance("var-arity?")),(plt.types.Symbol.makeInstance("java-string")),(plt.types.Symbol.makeInstance("permissions")),(plt.types.Symbol.makeInstance("cps?"))])),(plt.types.Symbol.makeInstance("make-binding:function")),(plt.types.Symbol.makeInstance("binding:function?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function-name")),(plt.types.Symbol.makeInstance("binding:function-module-source")),(plt.types.Symbol.makeInstance("binding:function-min-arity")),(plt.types.Symbol.makeInstance("binding:function-var-arity?")),(plt.types.Symbol.makeInstance("binding:function-java-string")),(plt.types.Symbol.makeInstance("binding:function-permissions")),(plt.types.Symbol.makeInstance("binding:function-cps?"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-binding:function-name!")),(plt.types.Symbol.makeInstance("set-binding:function-module-source!")),(plt.types.Symbol.makeInstance("set-binding:function-min-arity!")),(plt.types.Symbol.makeInstance("set-binding:function-var-arity?!")),(plt.types.Symbol.makeInstance("set-binding:function-java-string!")),(plt.types.Symbol.makeInstance("set-binding:function-permissions!")),(plt.types.Symbol.makeInstance("set-binding:function-cps?!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-binding:function")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(7, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"make_dash_binding_colon_function\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-name")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_name\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-module-source")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_module_dash_source\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-min-arity")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_min_dash_arity\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-var-arity?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_var_dash_arity_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-java-string")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_java_dash_string\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-permissions")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_permissions\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:function-cps?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_function_dash_cps_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-name!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_name_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-module-source!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_module_dash_source_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-min-arity!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_min_dash_arity_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-var-arity?!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_var_dash_arity_question__bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-java-string!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_java_dash_string_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-permissions!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_permissions_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:function-cps?!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_function_dash_cps_question__bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("binding:structure")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("name")),(plt.types.Symbol.makeInstance("fields")),(plt.types.Symbol.makeInstance("constructor")),(plt.types.Symbol.makeInstance("predicate")),(plt.types.Symbol.makeInstance("accessors")),(plt.types.Symbol.makeInstance("mutators"))])),(plt.types.Symbol.makeInstance("make-binding:structure")),(plt.types.Symbol.makeInstance("binding:structure?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure-name")),(plt.types.Symbol.makeInstance("binding:structure-fields")),(plt.types.Symbol.makeInstance("binding:structure-constructor")),(plt.types.Symbol.makeInstance("binding:structure-predicate")),(plt.types.Symbol.makeInstance("binding:structure-accessors")),(plt.types.Symbol.makeInstance("binding:structure-mutators"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-binding:structure-name!")),(plt.types.Symbol.makeInstance("set-binding:structure-fields!")),(plt.types.Symbol.makeInstance("set-binding:structure-constructor!")),(plt.types.Symbol.makeInstance("set-binding:structure-predicate!")),(plt.types.Symbol.makeInstance("set-binding:structure-accessors!")),(plt.types.Symbol.makeInstance("set-binding:structure-mutators!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-binding:structure")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(6, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"make_dash_binding_colon_structure\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure-name")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_dash_name\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure-fields")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_dash_fields\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure-constructor")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_dash_constructor\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure-predicate")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_dash_predicate\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure-accessors")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_dash_accessors\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:structure-mutators")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_structure_dash_mutators\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:structure-name!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_structure_dash_name_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:structure-fields!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_structure_dash_fields_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:structure-constructor!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_structure_dash_constructor_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:structure-predicate!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_structure_dash_predicate_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:structure-accessors!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_structure_dash_accessors_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:structure-mutators!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_structure_dash_mutators_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("binding:constant")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("name")),(plt.types.Symbol.makeInstance("java-string")),(plt.types.Symbol.makeInstance("permissions"))])),(plt.types.Symbol.makeInstance("make-binding:constant")),(plt.types.Symbol.makeInstance("binding:constant?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant-name")),(plt.types.Symbol.makeInstance("binding:constant-java-string")),(plt.types.Symbol.makeInstance("binding:constant-permissions"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-binding:constant-name!")),(plt.types.Symbol.makeInstance("set-binding:constant-java-string!")),(plt.types.Symbol.makeInstance("set-binding:constant-permissions!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-binding:constant")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(3, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"make_dash_binding_colon_constant\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:constant?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_constant_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:constant-name")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_constant_dash_name\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:constant-java-string")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_constant_dash_java_dash_string\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding:constant-permissions")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_colon_constant_dash_permissions\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:constant-name!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_constant_dash_name_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:constant-java-string!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_constant_dash_java_dash_string_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-binding:constant-permissions!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"set_dash_binding_colon_constant_dash_permissions_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("binding->sexp")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/binding\"].EXPORTS[\"binding_dash__greaterthan_sexp\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/permission-struct")),(plt.types.String.makeInstance("collects/runtime/permission-struct.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:open-image-url")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("url"))])),(plt.types.Symbol.makeInstance("make-permission:open-image-url")),(plt.types.Symbol.makeInstance("permission:open-image-url?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("permission:open-image-url-url"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-permission:open-image-url-url!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:open-image-url")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_open_dash_image_dash_url\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:open-image-url?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_open_dash_image_dash_url_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:open-image-url-url")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_open_dash_image_dash_url_dash_url\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-permission:open-image-url-url!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:tilt")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:tilt")),(plt.types.Symbol.makeInstance("permission:tilt?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:tilt")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_tilt\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:tilt?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_tilt_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:wake-lock")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:wake-lock")),(plt.types.Symbol.makeInstance("permission:wake-lock?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:wake-lock")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_wake_dash_lock\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:wake-lock?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_wake_dash_lock_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("string->permission")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"string_dash__greaterthan_permission\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:universe")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("url"))])),(plt.types.Symbol.makeInstance("make-permission:universe")),(plt.types.Symbol.makeInstance("permission:universe?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("permission:universe-url"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-permission:universe-url!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:universe")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_universe\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:universe?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_universe_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:universe-url")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_universe_dash_url\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-permission:universe-url!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"set_dash_permission_colon_universe_dash_url_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:send-sms")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:send-sms")),(plt.types.Symbol.makeInstance("permission:send-sms?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:send-sms")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_send_dash_sms\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:send-sms?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_send_dash_sms_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:shake")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:shake")),(plt.types.Symbol.makeInstance("permission:shake?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:shake")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_shake\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:shake?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_shake_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:telephony")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:telephony")),(plt.types.Symbol.makeInstance("permission:telephony?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:telephony")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_telephony\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:telephony?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_telephony_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:receive-sms")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:receive-sms")),(plt.types.Symbol.makeInstance("permission:receive-sms?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:receive-sms")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_receive_dash_sms\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:receive-sms?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_receive_dash_sms_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:TILT")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_TILT\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:internet")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:internet")),(plt.types.Symbol.makeInstance("permission:internet?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:internet")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_internet\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:internet?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_internet_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:location")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:location")),(plt.types.Symbol.makeInstance("permission:location?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:location")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_location\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:location?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_location_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission->string")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_dash__greaterthan_string\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("permission:foreign-function-interface")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-permission:foreign-function-interface")),(plt.types.Symbol.makeInstance("permission:foreign-function-interface?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-permission:foreign-function-interface")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"make_dash_permission_colon_foreign_dash_function_dash_interface\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission:foreign-function-interface?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_colon_foreign_dash_function_dash_interface_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:WAKE-LOCK")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_WAKE_dash_LOCK\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("permission->android-permissions")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"permission_dash__greaterthan_android_dash_permissions\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:SEND-SMS")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_SEND_dash_SMS\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:SHAKE")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_SHAKE\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:TELEPHONY")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_TELEPHONY\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:INTERNET")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_INTERNET\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:LOCATION")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_LOCATION\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:RECEIVE-SMS")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_RECEIVE_dash_SMS\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("PERMISSION:FOREIGN-FUNCTION-INTERFACE")),(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/permission-struct\"].EXPORTS[\"PERMISSION_colon_FOREIGN_dash_FUNCTION_dash_INTERFACE\"]")),plt.types.Empty.EMPTY]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/effect-struct")),(plt.types.String.makeInstance("collects/runtime/effect-struct.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:raise-sound-volume")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-effect:raise-sound-volume")),(plt.types.Symbol.makeInstance("effect:raise-sound-volume?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:raise-sound-volume")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_raise_dash_sound_dash_volume\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:raise-sound-volume?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_raise_dash_sound_dash_volume_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:set-sound-volume")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("volume"))])),(plt.types.Symbol.makeInstance("make-effect:set-sound-volume")),(plt.types.Symbol.makeInstance("effect:set-sound-volume?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:set-sound-volume-volume"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:set-sound-volume-volume!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:set-sound-volume")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_set_dash_sound_dash_volume\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:set-sound-volume?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_set_dash_sound_dash_volume_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:set-sound-volume-volume")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_set_dash_sound_dash_volume_dash_volume\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:set-sound-volume-volume!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_set_dash_sound_dash_volume_dash_volume_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:stop-sound")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("sound"))])),(plt.types.Symbol.makeInstance("make-effect:stop-sound")),(plt.types.Symbol.makeInstance("effect:stop-sound?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:stop-sound-sound"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:stop-sound-sound!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:stop-sound")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_stop_dash_sound\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:stop-sound?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_stop_dash_sound_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:stop-sound-sound")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_stop_dash_sound_dash_sound\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:stop-sound-sound!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_stop_dash_sound_dash_sound_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:set-wake-lock")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("locks"))])),(plt.types.Symbol.makeInstance("make-effect:set-wake-lock")),(plt.types.Symbol.makeInstance("effect:set-wake-lock?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:set-wake-lock-locks"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:set-wake-lock-locks!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:set-wake-lock")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_set_dash_wake_dash_lock\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:set-wake-lock?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_set_dash_wake_dash_lock_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:set-wake-lock-locks")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_set_dash_wake_dash_lock_dash_locks\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:set-wake-lock-locks!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_set_dash_wake_dash_lock_dash_locks_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:send-sms")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("address")),(plt.types.Symbol.makeInstance("msg"))])),(plt.types.Symbol.makeInstance("make-effect:send-sms")),(plt.types.Symbol.makeInstance("effect:send-sms?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:send-sms-address")),(plt.types.Symbol.makeInstance("effect:send-sms-msg"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:send-sms-address!")),(plt.types.Symbol.makeInstance("set-effect:send-sms-msg!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:send-sms")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_send_dash_sms\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:send-sms?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_send_dash_sms_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:send-sms-address")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_send_dash_sms_dash_address\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:send-sms-msg")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_send_dash_sms_dash_msg\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:send-sms-address!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_send_dash_sms_dash_address_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:send-sms-msg!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_send_dash_sms_dash_msg_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:release-wake-lock")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-effect:release-wake-lock")),(plt.types.Symbol.makeInstance("effect:release-wake-lock?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:release-wake-lock")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_release_dash_wake_dash_lock\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:release-wake-lock?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_release_dash_wake_dash_lock_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:pause-sound")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("sound"))])),(plt.types.Symbol.makeInstance("make-effect:pause-sound")),(plt.types.Symbol.makeInstance("effect:pause-sound?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:pause-sound-sound"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:pause-sound-sound!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:pause-sound")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_pause_dash_sound\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pause-sound?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pause_dash_sound_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pause-sound-sound")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pause_dash_sound_dash_sound\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:pause-sound-sound!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_pause_dash_sound_dash_sound_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:play-dtmf-tone")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("tone")),(plt.types.Symbol.makeInstance("duration"))])),(plt.types.Symbol.makeInstance("make-effect:play-dtmf-tone")),(plt.types.Symbol.makeInstance("effect:play-dtmf-tone?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:play-dtmf-tone-tone")),(plt.types.Symbol.makeInstance("effect:play-dtmf-tone-duration"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:play-dtmf-tone-tone!")),(plt.types.Symbol.makeInstance("set-effect:play-dtmf-tone-duration!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:play-dtmf-tone")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_play_dash_dtmf_dash_tone\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:play-dtmf-tone?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_play_dash_dtmf_dash_tone_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:play-dtmf-tone-tone")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_play_dash_dtmf_dash_tone_dash_tone\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:play-dtmf-tone-duration")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_play_dash_dtmf_dash_tone_dash_duration\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:play-dtmf-tone-tone!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_tone_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:play-dtmf-tone-duration!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_duration_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:play-sound")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("sound"))])),(plt.types.Symbol.makeInstance("make-effect:play-sound")),(plt.types.Symbol.makeInstance("effect:play-sound?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:play-sound-sound"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:play-sound-sound!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:play-sound")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_play_dash_sound\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:play-sound?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_play_dash_sound_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:play-sound-sound")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_play_dash_sound_dash_sound\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:play-sound-sound!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_play_dash_sound_dash_sound_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:pick-playlist")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("update-f"))])),(plt.types.Symbol.makeInstance("make-effect:pick-playlist")),(plt.types.Symbol.makeInstance("effect:pick-playlist?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:pick-playlist-update-f"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:pick-playlist-update-f!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:pick-playlist")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_pick_dash_playlist\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pick-playlist?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pick_dash_playlist_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pick-playlist-update-f")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pick_dash_playlist_dash_update_dash_f\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:pick-playlist-update-f!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_pick_dash_playlist_dash_update_dash_f_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:pick-random")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("n")),(plt.types.Symbol.makeInstance("update-f"))])),(plt.types.Symbol.makeInstance("make-effect:pick-random")),(plt.types.Symbol.makeInstance("effect:pick-random?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("effect:pick-random-n")),(plt.types.Symbol.makeInstance("effect:pick-random-update-f"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-effect:pick-random-n!")),(plt.types.Symbol.makeInstance("set-effect:pick-random-update-f!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:pick-random")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_pick_dash_random\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pick-random?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pick_dash_random_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pick-random-n")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pick_dash_random_dash_n\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:pick-random-update-f")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_pick_dash_random_dash_update_dash_f\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:pick-random-n!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_pick_dash_random_dash_n_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-effect:pick-random-update-f!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"set_dash_effect_colon_pick_dash_random_dash_update_dash_f_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:lower-sound-volume")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-effect:lower-sound-volume")),(plt.types.Symbol.makeInstance("effect:lower-sound-volume?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:lower-sound-volume")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_lower_dash_sound_dash_volume\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:lower-sound-volume?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_lower_dash_sound_dash_volume_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:none")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-effect:none")),(plt.types.Symbol.makeInstance("effect:none?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:none")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_none\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:none?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_none_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("effect:beep")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-effect:beep")),(plt.types.Symbol.makeInstance("effect:beep?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-effect:beep")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"make_dash_effect_colon_beep\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("effect:beep?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/effect-struct\"].EXPORTS[\"effect_colon_beep_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/arity-struct")),(plt.types.String.makeInstance("collects/runtime/arity-struct.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("arity:mixed")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("arities"))])),(plt.types.Symbol.makeInstance("make-arity:mixed")),(plt.types.Symbol.makeInstance("arity:mixed?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("arity:mixed-arities"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-arity:mixed-arities!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-arity:mixed")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"make_dash_arity_colon_mixed\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:mixed?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_mixed_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:mixed-arities")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_mixed_dash_arities\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-arity:mixed-arities!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"set_dash_arity_colon_mixed_dash_arities_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("arity:variable")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("min")),(plt.types.Symbol.makeInstance("max"))])),(plt.types.Symbol.makeInstance("make-arity:variable")),(plt.types.Symbol.makeInstance("arity:variable?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("arity:variable-min")),(plt.types.Symbol.makeInstance("arity:variable-max"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-arity:variable-min!")),(plt.types.Symbol.makeInstance("set-arity:variable-max!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-arity:variable")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"make_dash_arity_colon_variable\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:variable?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_variable_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:variable-min")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_variable_dash_min\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:variable-max")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_variable_dash_max\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-arity:variable-min!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"set_dash_arity_colon_variable_dash_min_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-arity:variable-max!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"set_dash_arity_colon_variable_dash_max_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("arity:fixed")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("n"))])),(plt.types.Symbol.makeInstance("make-arity:fixed")),(plt.types.Symbol.makeInstance("arity:fixed?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("arity:fixed-n"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-arity:fixed-n!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-arity:fixed")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"make_dash_arity_colon_fixed\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:fixed?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_fixed_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("arity:fixed-n")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"arity_colon_fixed_dash_n\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-arity:fixed-n!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/arity-struct\"].EXPORTS[\"set_dash_arity_colon_fixed_dash_n_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/error-struct")),(plt.types.String.makeInstance("collects/runtime/error-struct.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:provided-name-not-defined")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("id"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:provided-name-not-defined")),(plt.types.Symbol.makeInstance("moby-error-type:provided-name-not-defined?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:provided-name-not-defined-id"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:provided-name-not-defined-id!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:provided-name-not-defined")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:provided-name-not-defined?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:provided-name-not-defined-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:provided-name-not-defined-id!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:boolean")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:boolean")),(plt.types.Symbol.makeInstance("moby-expected:boolean?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:boolean")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_boolean\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:boolean?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_boolean_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:integer")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:integer")),(plt.types.Symbol.makeInstance("moby-expected:integer?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:integer")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_integer\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:integer?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_integer_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:string")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:string")),(plt.types.Symbol.makeInstance("moby-expected:string?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:string")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_string\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:string?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_string_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:vector")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:vector")),(plt.types.Symbol.makeInstance("moby-expected:vector?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:vector")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_vector\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:vector?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_vector_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:symbol")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:symbol")),(plt.types.Symbol.makeInstance("moby-expected:symbol?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:symbol")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_symbol\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:symbol?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_symbol_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:struct")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:struct")),(plt.types.Symbol.makeInstance("moby-expected:struct?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:struct")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_struct\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:struct?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_struct_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:rational")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:rational")),(plt.types.Symbol.makeInstance("moby-expected:rational?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:rational")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_rational\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:rational?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_rational_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:real")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:real")),(plt.types.Symbol.makeInstance("moby-expected:real?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:real")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_real\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:real?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_real_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:something")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:something")),(plt.types.Symbol.makeInstance("moby-expected:something?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:something")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_something\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:something?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_something_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:natural")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:natural")),(plt.types.Symbol.makeInstance("moby-expected:natural?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:natural")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_natural\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:natural?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_natural_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:number")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:number")),(plt.types.Symbol.makeInstance("moby-expected:number?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:number")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_number\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:number?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_number_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:list")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:list")),(plt.types.Symbol.makeInstance("moby-expected:list?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:list")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_list\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:list?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_list_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:char")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:char")),(plt.types.Symbol.makeInstance("moby-expected:char?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:char")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_char\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:char?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_char_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:function")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:function")),(plt.types.Symbol.makeInstance("moby-expected:function?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:function")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_function\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:function?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_function_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:hash")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:hash")),(plt.types.Symbol.makeInstance("moby-expected:hash?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:hash")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_hash\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:hash?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_hash_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:complex")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:complex")),(plt.types.Symbol.makeInstance("moby-expected:complex?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:complex")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_complex\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:complex?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_complex_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-expected:box")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-expected:box")),(plt.types.Symbol.makeInstance("moby-expected:box?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-expected:box")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_expected_colon_box\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-expected:box?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_expected_colon_box_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:undefined-identifier")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("id"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:undefined-identifier")),(plt.types.Symbol.makeInstance("moby-error-type:undefined-identifier?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:undefined-identifier-id"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:undefined-identifier-id!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:undefined-identifier")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:undefined-identifier?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_undefined_dash_identifier_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:undefined-identifier-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:undefined-identifier-id!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-lexical-token")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("token"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:unsupported-lexical-token")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-lexical-token?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unsupported-lexical-token-token"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:unsupported-lexical-token-token!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:unsupported-lexical-token")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-lexical-token?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-lexical-token-token")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unsupported-lexical-token-token!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:unrecognized-lexical-token")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("token"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:unrecognized-lexical-token")),(plt.types.Symbol.makeInstance("moby-error-type:unrecognized-lexical-token?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unrecognized-lexical-token-token"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:unrecognized-lexical-token-token!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:unrecognized-lexical-token")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unrecognized-lexical-token?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unrecognized-lexical-token-token")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unrecognized-lexical-token-token!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-expression-form")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("expr"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:unsupported-expression-form")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-expression-form?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unsupported-expression-form-expr"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:unsupported-expression-form-expr!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:unsupported-expression-form")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-expression-form?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unsupported-expression-form-expr")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unsupported-expression-form-expr!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:unknown-module")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("path"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:unknown-module")),(plt.types.Symbol.makeInstance("moby-error-type:unknown-module?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unknown-module-path"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:unknown-module-path!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:unknown-module")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_unknown_dash_module\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unknown-module?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unknown_dash_module_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unknown-module-path")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unknown_dash_module_dash_path\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unknown-module-path!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unknown_dash_module_dash_path_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("type")),(plt.types.Symbol.makeInstance("opener")),(plt.types.Symbol.makeInstance("closer"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:unclosed-lexical-token")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token-type")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token-opener")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token-closer"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-lexical-token-type!")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-lexical-token-opener!")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-lexical-token-closer!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:unclosed-lexical-token")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(3, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token-type")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token-opener")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-lexical-token-closer")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-lexical-token-type!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-lexical-token-opener!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-lexical-token-closer!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("opener")),(plt.types.Symbol.makeInstance("closer"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:unclosed-parentheses")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses-opener")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses-closer"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-parentheses-opener!")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-parentheses-closer!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:unclosed-parentheses")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses-opener")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses-closer")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-parentheses-opener!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:unclosed-parentheses-closer!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:structure-identifier-not-expression")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("id"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:structure-identifier-not-expression")),(plt.types.Symbol.makeInstance("moby-error-type:structure-identifier-not-expression?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:structure-identifier-not-expression-id"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:structure-identifier-not-expression-id!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:structure-identifier-not-expression")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:structure-identifier-not-expression?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:structure-identifier-not-expression-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:structure-identifier-not-expression-id!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("who")),(plt.types.Symbol.makeInstance("position")),(plt.types.Symbol.makeInstance("expected")),(plt.types.Symbol.makeInstance("observed"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:type-mismatch")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-who")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-position")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-expected")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-observed"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-who!")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-position!")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-expected!")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-observed!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:type-mismatch")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(4, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_type_dash_mismatch\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_type_dash_mismatch_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-who")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-position")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-expected")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:type-mismatch-observed")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-who!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-position!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-expected!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:type-mismatch-observed!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:provided-structure-not-structure")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("id"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:provided-structure-not-structure")),(plt.types.Symbol.makeInstance("moby-error-type:provided-structure-not-structure?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:provided-structure-not-structure-id"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:provided-structure-not-structure-id!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:provided-structure-not-structure")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:provided-structure-not-structure?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:provided-structure-not-structure-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:provided-structure-not-structure-id!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:generic-runtime-error")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("reason"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:generic-runtime-error")),(plt.types.Symbol.makeInstance("moby-error-type:generic-runtime-error?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:generic-runtime-error-reason"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:generic-runtime-error-reason!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:generic-runtime-error")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:generic-runtime-error?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:generic-runtime-error-reason")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:generic-runtime-error-reason!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("minimum")),(plt.types.Symbol.makeInstance("maximum")),(plt.types.Symbol.makeInstance("observed"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:index-out-of-bounds")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds-minimum")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds-maximum")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds-observed"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:index-out-of-bounds-minimum!")),(plt.types.Symbol.makeInstance("set-moby-error-type:index-out-of-bounds-maximum!")),(plt.types.Symbol.makeInstance("set-moby-error-type:index-out-of-bounds-observed!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:index-out-of-bounds")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(3, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds-minimum")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds-maximum")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:index-out-of-bounds-observed")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:index-out-of-bounds-minimum!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:index-out-of-bounds-maximum!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:index-out-of-bounds-observed!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:missing-expression")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("token"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:missing-expression")),(plt.types.Symbol.makeInstance("moby-error-type:missing-expression?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:missing-expression-token"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:missing-expression-token!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:missing-expression")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_missing_dash_expression\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:missing-expression?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_missing_dash_expression_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:missing-expression-token")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_missing_dash_expression_dash_token\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:missing-expression-token!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_missing_dash_expression_dash_token_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("reason")),(plt.types.Symbol.makeInstance("other-locations"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:generic-syntactic-error")),(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error-reason")),(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error-other-locations"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:generic-syntactic-error-reason!")),(plt.types.Symbol.makeInstance("set-moby-error-type:generic-syntactic-error-other-locations!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:generic-syntactic-error")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error-reason")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:generic-syntactic-error-other-locations")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:generic-syntactic-error-reason!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:generic-syntactic-error-other-locations!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("id")),(plt.types.Symbol.makeInstance("second-location"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:duplicate-identifier")),(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier-id")),(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier-second-location"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:duplicate-identifier-id!")),(plt.types.Symbol.makeInstance("set-moby-error-type:duplicate-identifier-second-location!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:duplicate-identifier")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier-id")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:duplicate-identifier-second-location")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:duplicate-identifier-id!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:duplicate-identifier-second-location!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:expected-identifier")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("observed"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:expected-identifier")),(plt.types.Symbol.makeInstance("moby-error-type:expected-identifier?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:expected-identifier-observed"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:expected-identifier-observed!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:expected-identifier")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_expected_dash_identifier\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:expected-identifier?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_expected_dash_identifier_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:expected-identifier-observed")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:expected-identifier-observed!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("who")),(plt.types.Symbol.makeInstance("expected")),(plt.types.Symbol.makeInstance("observed"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:application-arity")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:application-arity-who")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity-expected")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity-observed"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:application-arity-who!")),(plt.types.Symbol.makeInstance("set-moby-error-type:application-arity-expected!")),(plt.types.Symbol.makeInstance("set-moby-error-type:application-arity-observed!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:application-arity")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(3, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_application_dash_arity\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_application_dash_arity_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity-who")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_application_dash_arity_dash_who\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity-expected")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_application_dash_arity_dash_expected\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:application-arity-observed")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_application_dash_arity_dash_observed\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:application-arity-who!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_who_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:application-arity-expected!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_expected_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:application-arity-observed!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_observed_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:application-operator-not-a-function")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("who"))])),(plt.types.Symbol.makeInstance("make-moby-error-type:application-operator-not-a-function")),(plt.types.Symbol.makeInstance("moby-error-type:application-operator-not-a-function?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:application-operator-not-a-function-who"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-type:application-operator-not-a-function-who!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:application-operator-not-a-function")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:application-operator-not-a-function?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:application-operator-not-a-function-who")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-type:application-operator-not-a-function-who!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error-type:conditional-exhausted")),plt.types.Empty.EMPTY,(plt.types.Symbol.makeInstance("make-moby-error-type:conditional-exhausted")),(plt.types.Symbol.makeInstance("moby-error-type:conditional-exhausted?")),plt.types.Empty.EMPTY,plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error-type:conditional-exhausted")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(0, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error_dash_type_colon_conditional_dash_exhausted\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-type:conditional-exhausted?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_type_colon_conditional_dash_exhausted_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),(plt.types.Symbol.makeInstance("moby-error")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("location")),(plt.types.Symbol.makeInstance("error-type"))])),(plt.types.Symbol.makeInstance("make-moby-error")),(plt.types.Symbol.makeInstance("moby-error?")),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-location")),(plt.types.Symbol.makeInstance("moby-error-error-type"))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("set-moby-error-location!")),(plt.types.Symbol.makeInstance("set-moby-error-error-type!"))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("make-moby-error")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"make_dash_moby_dash_error\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error?")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_question_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-location")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_location\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-error-type")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"moby_dash_error_dash_error_dash_type\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-location!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_location_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("set-moby-error-error-type!")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(2, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct\"].EXPORTS[\"set_dash_moby_dash_error_dash_error_dash_type_bang_\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/scheme-value-to-dom")),(plt.types.String.makeInstance("collects/runtime/scheme-value-to-dom.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("scheme-value-to-dom-sexp")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/scheme-value-to-dom\"].EXPORTS[\"scheme_dash_value_dash_to_dash_dom_dash_sexp\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("moby/runtime/error-struct-to-dom")),(plt.types.String.makeInstance("collects/runtime/error-struct-to-dom.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("moby-error-struct-to-dom-sexp")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"moby/runtime/error-struct-to-dom\"].EXPORTS[\"moby_dash_error_dash_struct_dash_to_dash_dom_dash_sexp\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("bootstrap/bootstrap-teachpack")),(plt.types.String.makeInstance("collects/bootstrap/bootstrap-teachpack.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),(plt.types.Symbol.makeInstance("score")),(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"score\"]")),plt.types.Empty.EMPTY])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("sq")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"sq\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("test-frame")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(6, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"test_dash_frame\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("tangent")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"tangent\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("sine")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"sine\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("START")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(14, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"START\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("cosine")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/bootstrap-teachpack\"].EXPORTS[\"cosine\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("bootstrap/cage-teachpack")),(plt.types.String.makeInstance("collects/bootstrap/cage-teachpack.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("start")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/cage-teachpack\"].EXPORTS[\"start\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))])),(plt.Kernel.list([(plt.types.Symbol.makeInstance("bootstrap/function-teachpack")),(plt.types.String.makeInstance("collects/bootstrap/function-teachpack.ss")),(plt.Kernel.list([(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),(plt.types.Symbol.makeInstance("start")),plt.types.Logic.FALSE,(plt.types.Rational.makeInstance(1, 1)),plt.types.Logic.FALSE,(plt.types.String.makeInstance("plt._MODULES[\"bootstrap/function-teachpack\"].EXPORTS[\"start\"]")),plt.types.Empty.EMPTY,plt.types.Logic.FALSE]))]))]))]); }))( function(x){return x;} );
plt._MODULES["moby/runtime/runtime-modules"].EXPORTS["MOBY_dash_RUNTIME_dash_MODULE_dash_BINDINGS"] = MOBY_dash_RUNTIME_dash_MODULE_dash_BINDINGS;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/stx"]) == 'undefined') {
    plt._MODULES["moby/runtime/stx"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var stx_colon_atom = function (datum,loc) { plt.types.Struct.call(this, "make-stx:atom", [datum,loc]);this.datum = datum;
this.loc = loc; };
stx_colon_atom.prototype = new plt.types.Struct();

var make_dash_stx_colon_atom = function (id0,id1) { return new stx_colon_atom(id0,id1); };
var stx_colon_atom_dash_datum = function(obj) {
     if (stx_colon_atom_question_ (obj)) {
        return obj.datum;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx:atom-datum: not a stx:atom: ~s', [obj]));
     }
};

var stx_colon_atom_dash_loc = function(obj) {
     if (stx_colon_atom_question_ (obj)) {
        return obj.loc;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx:atom-loc: not a stx:atom: ~s', [obj]));
     }
};

var set_dash_stx_colon_atom_dash_datum_bang_ = function(obj,newVal) {
	 if (stx_colon_atom_question_ (obj)) {
		obj.datum = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_stx_colon_atom_dash_datum_bang_: not a stx:atom: ~s', [obj]));
     }
};

var set_dash_stx_colon_atom_dash_loc_bang_ = function(obj,newVal) {
	 if (stx_colon_atom_question_ (obj)) {
		obj.loc = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_stx_colon_atom_dash_loc_bang_: not a stx:atom: ~s', [obj]));
     }
};

var stx_colon_atom_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof stx_colon_atom; };

var stx_colon_list = function (elts,loc) { plt.types.Struct.call(this, "make-stx:list", [elts,loc]);this.elts = elts;
this.loc = loc; };
stx_colon_list.prototype = new plt.types.Struct();

var make_dash_stx_colon_list = function (id0,id1) { return new stx_colon_list(id0,id1); };
var stx_colon_list_dash_elts = function(obj) {
     if (stx_colon_list_question_ (obj)) {
        return obj.elts;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx:list-elts: not a stx:list: ~s', [obj]));
     }
};

var stx_colon_list_dash_loc = function(obj) {
     if (stx_colon_list_question_ (obj)) {
        return obj.loc;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx:list-loc: not a stx:list: ~s', [obj]));
     }
};

var set_dash_stx_colon_list_dash_elts_bang_ = function(obj,newVal) {
	 if (stx_colon_list_question_ (obj)) {
		obj.elts = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_stx_colon_list_dash_elts_bang_: not a stx:list: ~s', [obj]));
     }
};

var set_dash_stx_colon_list_dash_loc_bang_ = function(obj,newVal) {
	 if (stx_colon_list_question_ (obj)) {
		obj.loc = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_stx_colon_list_dash_loc_bang_: not a stx:list: ~s', [obj]));
     }
};

var stx_colon_list_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof stx_colon_list; };

var Loc = function (offset,line,column,span,id) { plt.types.Struct.call(this, "make-Loc", [offset,line,column,span,id]);this.offset = offset;
this.line = line;
this.column = column;
this.span = span;
this.id = id; };
Loc.prototype = new plt.types.Struct();

var make_dash_Loc = function (id0,id1,id2,id3,id4) { return new Loc(id0,id1,id2,id3,id4); };
var Loc_dash_offset = function(obj) {
     if (Loc_question_ (obj)) {
        return obj.offset;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('Loc-offset: not a Loc: ~s', [obj]));
     }
};

var Loc_dash_line = function(obj) {
     if (Loc_question_ (obj)) {
        return obj.line;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('Loc-line: not a Loc: ~s', [obj]));
     }
};

var Loc_dash_column = function(obj) {
     if (Loc_question_ (obj)) {
        return obj.column;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('Loc-column: not a Loc: ~s', [obj]));
     }
};

var Loc_dash_span = function(obj) {
     if (Loc_question_ (obj)) {
        return obj.span;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('Loc-span: not a Loc: ~s', [obj]));
     }
};

var Loc_dash_id = function(obj) {
     if (Loc_question_ (obj)) {
        return obj.id;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('Loc-id: not a Loc: ~s', [obj]));
     }
};

var set_dash_Loc_dash_offset_bang_ = function(obj,newVal) {
	 if (Loc_question_ (obj)) {
		obj.offset = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_Loc_dash_offset_bang_: not a Loc: ~s', [obj]));
     }
};

var set_dash_Loc_dash_line_bang_ = function(obj,newVal) {
	 if (Loc_question_ (obj)) {
		obj.line = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_Loc_dash_line_bang_: not a Loc: ~s', [obj]));
     }
};

var set_dash_Loc_dash_column_bang_ = function(obj,newVal) {
	 if (Loc_question_ (obj)) {
		obj.column = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_Loc_dash_column_bang_: not a Loc: ~s', [obj]));
     }
};

var set_dash_Loc_dash_span_bang_ = function(obj,newVal) {
	 if (Loc_question_ (obj)) {
		obj.span = newVal;
           obj._fields[3] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_Loc_dash_span_bang_: not a Loc: ~s', [obj]));
     }
};

var set_dash_Loc_dash_id_bang_ = function(obj,newVal) {
	 if (Loc_question_ (obj)) {
		obj.id = newVal;
           obj._fields[4] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_Loc_dash_id_bang_: not a Loc: ~s', [obj]));
     }
};

var Loc_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof Loc; };

var stx_question_ = function(x) { return (stx_colon_atom_question_(x)||stx_colon_list_question_(x)); };
var stx_dash_e = function(a_dash_stx) { return (stx_colon_atom_question_(a_dash_stx) ?
 stx_colon_atom_dash_datum(a_dash_stx) :
 (stx_colon_list_question_(a_dash_stx) ?
 stx_colon_list_dash_elts(a_dash_stx) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4]))); };
var stx_dash_loc = function(a_dash_stx) { return (stx_colon_atom_question_(a_dash_stx) ?
 stx_colon_atom_dash_loc(a_dash_stx) :
 (stx_colon_list_question_(a_dash_stx) ?
 stx_colon_list_dash_loc(a_dash_stx) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4]))); };
var stx_dash_begins_dash_with_question_ = function(a_dash_stx, a_dash_sym) { return (stx_colon_atom_question_(a_dash_stx) ?
 _SHARED[5] :
 (stx_colon_list_question_(a_dash_stx) ?
 (plt.Kernel.not(plt.Kernel.empty_question_(stx_colon_list_dash_elts(a_dash_stx)))&&plt.Kernel.symbol_question_(stx_dash_e(plt.Kernel.first(stx_colon_list_dash_elts(a_dash_stx))))&&plt.Kernel.symbol_equal__question_(stx_dash_e(plt.Kernel.first(stx_colon_list_dash_elts(a_dash_stx))),a_dash_sym)) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4]))); };
var datum_dash__greaterthan_stx = function(a_dash_datum, a_dash_loc) { return (stx_question_(a_dash_datum) ?
 a_dash_datum :
 ((plt.Kernel.pair_question_(a_dash_datum)||plt.Kernel.empty_question_(a_dash_datum)) ?
 make_dash_stx_colon_list(plt.Kernel.map(((function() {
   var _result_ = (function(args6) {
var x = args6[0];  return datum_dash__greaterthan_stx(x,a_dash_loc); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [a_dash_datum]),a_dash_loc) :
 (plt.types.Logic.TRUE ?
 make_dash_stx_colon_atom(a_dash_datum,a_dash_loc) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4])))); };
var stx_dash__greaterthan_datum = function(a_dash_stx) { return (stx_colon_atom_question_(a_dash_stx) ?
 stx_colon_atom_dash_datum(a_dash_stx) :
 (stx_colon_list_question_(a_dash_stx) ?
 plt.Kernel.map((plt.types.liftToplevelToFunctionValue(stx_dash__greaterthan_datum,(plt.types.String.makeInstance("stx->datum")),1,(plt.types.Rational.makeInstance(1, 1)))), [stx_colon_list_dash_elts(a_dash_stx)]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4]))); };_SHARED[4] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[5] = plt.types.Logic.FALSE;

        plt._MODULES["moby/runtime/stx"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 








 }))( function(x){return x;} );
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_dash_e"] = stx_dash_e;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_list"] = stx_colon_list;
plt._MODULES["moby/runtime/stx"].EXPORTS["make_dash_stx_colon_list"] = make_dash_stx_colon_list;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_list_question_"] = stx_colon_list_question_;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_list_dash_elts"] = stx_colon_list_dash_elts;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_list_dash_loc"] = stx_colon_list_dash_loc;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_stx_colon_list_dash_elts_bang_"] = set_dash_stx_colon_list_dash_elts_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_stx_colon_list_dash_loc_bang_"] = set_dash_stx_colon_list_dash_loc_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_question_"] = stx_question_;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_atom"] = stx_colon_atom;
plt._MODULES["moby/runtime/stx"].EXPORTS["make_dash_stx_colon_atom"] = make_dash_stx_colon_atom;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_atom_question_"] = stx_colon_atom_question_;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_atom_dash_datum"] = stx_colon_atom_dash_datum;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_colon_atom_dash_loc"] = stx_colon_atom_dash_loc;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_stx_colon_atom_dash_datum_bang_"] = set_dash_stx_colon_atom_dash_datum_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_stx_colon_atom_dash_loc_bang_"] = set_dash_stx_colon_atom_dash_loc_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_dash_loc"] = stx_dash_loc;
plt._MODULES["moby/runtime/stx"].EXPORTS["datum_dash__greaterthan_stx"] = datum_dash__greaterthan_stx;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_dash_begins_dash_with_question_"] = stx_dash_begins_dash_with_question_;
plt._MODULES["moby/runtime/stx"].EXPORTS["stx_dash__greaterthan_datum"] = stx_dash__greaterthan_datum;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc"] = Loc;
plt._MODULES["moby/runtime/stx"].EXPORTS["make_dash_Loc"] = make_dash_Loc;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_question_"] = Loc_question_;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_offset"] = Loc_dash_offset;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_line"] = Loc_dash_line;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_column"] = Loc_dash_column;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_span"] = Loc_dash_span;
plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_id"] = Loc_dash_id;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_Loc_dash_offset_bang_"] = set_dash_Loc_dash_offset_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_Loc_dash_line_bang_"] = set_dash_Loc_dash_line_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_Loc_dash_column_bang_"] = set_dash_Loc_dash_column_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_Loc_dash_span_bang_"] = set_dash_Loc_dash_span_bang_;
plt._MODULES["moby/runtime/stx"].EXPORTS["set_dash_Loc_dash_id_bang_"] = set_dash_Loc_dash_id_bang_;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/permission-struct"]) == 'undefined') {
    plt._MODULES["moby/runtime/permission-struct"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var permission_colon_location = function () { plt.types.Struct.call(this, "make-permission:location", []); };
permission_colon_location.prototype = new plt.types.Struct();

var make_dash_permission_colon_location = function () { return new permission_colon_location(); };


var permission_colon_location_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_location; };

var permission_colon_send_dash_sms = function () { plt.types.Struct.call(this, "make-permission:send-sms", []); };
permission_colon_send_dash_sms.prototype = new plt.types.Struct();

var make_dash_permission_colon_send_dash_sms = function () { return new permission_colon_send_dash_sms(); };


var permission_colon_send_dash_sms_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_send_dash_sms; };

var permission_colon_receive_dash_sms = function () { plt.types.Struct.call(this, "make-permission:receive-sms", []); };
permission_colon_receive_dash_sms.prototype = new plt.types.Struct();

var make_dash_permission_colon_receive_dash_sms = function () { return new permission_colon_receive_dash_sms(); };


var permission_colon_receive_dash_sms_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_receive_dash_sms; };

var permission_colon_tilt = function () { plt.types.Struct.call(this, "make-permission:tilt", []); };
permission_colon_tilt.prototype = new plt.types.Struct();

var make_dash_permission_colon_tilt = function () { return new permission_colon_tilt(); };


var permission_colon_tilt_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_tilt; };

var permission_colon_shake = function () { plt.types.Struct.call(this, "make-permission:shake", []); };
permission_colon_shake.prototype = new plt.types.Struct();

var make_dash_permission_colon_shake = function () { return new permission_colon_shake(); };


var permission_colon_shake_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_shake; };

var permission_colon_internet = function () { plt.types.Struct.call(this, "make-permission:internet", []); };
permission_colon_internet.prototype = new plt.types.Struct();

var make_dash_permission_colon_internet = function () { return new permission_colon_internet(); };


var permission_colon_internet_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_internet; };

var permission_colon_telephony = function () { plt.types.Struct.call(this, "make-permission:telephony", []); };
permission_colon_telephony.prototype = new plt.types.Struct();

var make_dash_permission_colon_telephony = function () { return new permission_colon_telephony(); };


var permission_colon_telephony_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_telephony; };

var permission_colon_wake_dash_lock = function () { plt.types.Struct.call(this, "make-permission:wake-lock", []); };
permission_colon_wake_dash_lock.prototype = new plt.types.Struct();

var make_dash_permission_colon_wake_dash_lock = function () { return new permission_colon_wake_dash_lock(); };


var permission_colon_wake_dash_lock_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_wake_dash_lock; };

var permission_colon_foreign_dash_function_dash_interface = function () { plt.types.Struct.call(this, "make-permission:foreign-function-interface", []); };
permission_colon_foreign_dash_function_dash_interface.prototype = new plt.types.Struct();

var make_dash_permission_colon_foreign_dash_function_dash_interface = function () { return new permission_colon_foreign_dash_function_dash_interface(); };


var permission_colon_foreign_dash_function_dash_interface_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_foreign_dash_function_dash_interface; };

var permission_colon_open_dash_image_dash_url = function (url) { plt.types.Struct.call(this, "make-permission:open-image-url", [url]);this.url = url; };
permission_colon_open_dash_image_dash_url.prototype = new plt.types.Struct();

var make_dash_permission_colon_open_dash_image_dash_url = function (id0) { return new permission_colon_open_dash_image_dash_url(id0); };
var permission_colon_open_dash_image_dash_url_dash_url = function(obj) {
     if (permission_colon_open_dash_image_dash_url_question_ (obj)) {
        return obj.url;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('permission:open-image-url-url: not a permission:open-image-url: ~s', [obj]));
     }
};

var set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_ = function(obj,newVal) {
	 if (permission_colon_open_dash_image_dash_url_question_ (obj)) {
		obj.url = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_: not a permission:open-image-url: ~s', [obj]));
     }
};

var permission_colon_open_dash_image_dash_url_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_open_dash_image_dash_url; };

var permission_colon_universe = function (url) { plt.types.Struct.call(this, "make-permission:universe", [url]);this.url = url; };
permission_colon_universe.prototype = new plt.types.Struct();

var make_dash_permission_colon_universe = function (id0) { return new permission_colon_universe(id0); };
var permission_colon_universe_dash_url = function(obj) {
     if (permission_colon_universe_question_ (obj)) {
        return obj.url;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('permission:universe-url: not a permission:universe: ~s', [obj]));
     }
};

var set_dash_permission_colon_universe_dash_url_bang_ = function(obj,newVal) {
	 if (permission_colon_universe_question_ (obj)) {
		obj.url = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_permission_colon_universe_dash_url_bang_: not a permission:universe: ~s', [obj]));
     }
};

var permission_colon_universe_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_universe; };

var permission_question_ = function(datum) { return (permission_colon_location_question_(datum)||permission_colon_send_dash_sms_question_(datum)||permission_colon_receive_dash_sms_question_(datum)||permission_colon_tilt_question_(datum)||permission_colon_shake_question_(datum)||permission_colon_internet_question_(datum)||permission_colon_telephony_question_(datum)||permission_colon_wake_dash_lock_question_(datum)||permission_colon_foreign_dash_function_dash_interface_question_(datum)||permission_colon_open_dash_image_dash_url_question_(datum)||permission_colon_universe_question_(datum)); };
var PERMISSION_colon_LOCATION; 
var PERMISSION_colon_SEND_dash_SMS; 
var PERMISSION_colon_RECEIVE_dash_SMS; 
var PERMISSION_colon_TILT; 
var PERMISSION_colon_SHAKE; 
var PERMISSION_colon_INTERNET; 
var PERMISSION_colon_TELEPHONY; 
var PERMISSION_colon_WAKE_dash_LOCK; 
var PERMISSION_colon_FOREIGN_dash_FUNCTION_dash_INTERFACE; 
var permission_dash__greaterthan_string = function(a_dash_permission) { return (permission_colon_location_question_(a_dash_permission) ?
 _SHARED[12] :
 (permission_colon_send_dash_sms_question_(a_dash_permission) ?
 _SHARED[13] :
 (permission_colon_receive_dash_sms_question_(a_dash_permission) ?
 _SHARED[14] :
 (permission_colon_tilt_question_(a_dash_permission) ?
 _SHARED[15] :
 (permission_colon_shake_question_(a_dash_permission) ?
 _SHARED[16] :
 (permission_colon_internet_question_(a_dash_permission) ?
 _SHARED[17] :
 (permission_colon_telephony_question_(a_dash_permission) ?
 _SHARED[18] :
 (permission_colon_wake_dash_lock_question_(a_dash_permission) ?
 _SHARED[19] :
 (permission_colon_foreign_dash_function_dash_interface_question_(a_dash_permission) ?
 _SHARED[20] :
 (permission_colon_open_dash_image_dash_url_question_(a_dash_permission) ?
 plt.Kernel.format(_SHARED[21], [permission_colon_open_dash_image_dash_url_dash_url(a_dash_permission)]) :
 (permission_colon_universe_question_(a_dash_permission) ?
 plt.Kernel.format(_SHARED[22], [permission_colon_universe_dash_url(a_dash_permission)]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[23])))))))))))); };
var string_dash__greaterthan_permission = function(a_dash_ref) { return ((function() { 

var is_dash_permission_slash_1_question_ = function(permission_dash_name, a_dash_ref) { return (plt.Kernel._greaterthan_(plt.Kernel.string_dash_length(a_dash_ref),plt.Kernel.string_dash_length(permission_dash_name), [])&&plt.Kernel.string_equal__question_(plt.Kernel.substring(a_dash_ref,_SHARED[25],plt.Kernel.string_dash_length(permission_dash_name)),permission_dash_name, [])); };
var construct_dash_permission_slash_1 = function(permission_dash_name, a_dash_ref, make_dash_permission_colon__star_) { return plt.Kernel.apply(make_dash_permission_colon__star_,                     plt.Kernel.list([plt.Kernel.substring(a_dash_ref,plt.Kernel.add1(plt.Kernel.string_dash_length(permission_dash_name)),plt.Kernel.string_dash_length(a_dash_ref))]),                    []); };
(function (toplevel_dash_expression_dash_show24) { 

 })(plt.Kernel.identity)
return (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[12], []) ?
 PERMISSION_colon_LOCATION :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[13], []) ?
 PERMISSION_colon_SEND_dash_SMS :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[14], []) ?
 PERMISSION_colon_RECEIVE_dash_SMS :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[15], []) ?
 PERMISSION_colon_TILT :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[16], []) ?
 PERMISSION_colon_SHAKE :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[17], []) ?
 PERMISSION_colon_INTERNET :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[18], []) ?
 PERMISSION_colon_TELEPHONY :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[19], []) ?
 PERMISSION_colon_WAKE_dash_LOCK :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[20], []) ?
 PERMISSION_colon_FOREIGN_dash_FUNCTION_dash_INTERFACE :
 (is_dash_permission_slash_1_question_(_SHARED[26],a_dash_ref) ?
 construct_dash_permission_slash_1(_SHARED[26],a_dash_ref,(plt.types.liftToplevelToFunctionValue(make_dash_permission_colon_open_dash_image_dash_url,(plt.types.String.makeInstance("make-permission:open-image-url")),1,(plt.types.Rational.makeInstance(1, 1))))) :
 (is_dash_permission_slash_1_question_(_SHARED[27],a_dash_ref) ?
 construct_dash_permission_slash_1(_SHARED[27],a_dash_ref,(plt.types.liftToplevelToFunctionValue(make_dash_permission_colon_universe,(plt.types.String.makeInstance("make-permission:universe")),1,(plt.types.Rational.makeInstance(1, 1))))) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[23]))))))))))));
              })()); };
var permission_dash__greaterthan_android_dash_permissions = function(a_dash_permission) { return (permission_colon_location_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[28],_SHARED[29]]) :
 (permission_colon_send_dash_sms_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[30]]) :
 (permission_colon_receive_dash_sms_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[31]]) :
 (permission_colon_tilt_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_shake_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_internet_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[32]]) :
 (permission_colon_telephony_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[33]]) :
 (permission_colon_wake_dash_lock_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[34]]) :
 (permission_colon_foreign_dash_function_dash_interface_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_open_dash_image_dash_url_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_universe_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[32]]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[23])))))))))))); };_SHARED[16] = (plt.types.String.makeInstance("PERMISSION:SHAKE"));
_SHARED[28] = (plt.types.String.makeInstance("android.permission.ACCESS_COARSE_LOCATION"));
_SHARED[30] = (plt.types.String.makeInstance("android.permission.SEND_SMS"));
_SHARED[23] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[34] = (plt.types.String.makeInstance("android.permission.WAKE_LOCK"));
_SHARED[32] = (plt.types.String.makeInstance("android.permission.INTERNET"));
_SHARED[31] = (plt.types.String.makeInstance("android.permission.RECEIVE_SMS"));
_SHARED[29] = (plt.types.String.makeInstance("android.permission.ACCESS_FINE_LOCATION"));
_SHARED[33] = (plt.types.String.makeInstance("android.permission.ACCESS_COARSE_UPDATES"));
_SHARED[22] = (plt.types.String.makeInstance("PERMISSION:UNIVERSE ~a"));
_SHARED[19] = (plt.types.String.makeInstance("PERMISSION:WAKE-LOCK"));
_SHARED[15] = (plt.types.String.makeInstance("PERMISSION:TILT"));
_SHARED[27] = (plt.types.String.makeInstance("PERMISSION:UNIVERSE"));
_SHARED[18] = (plt.types.String.makeInstance("PERMISSION:TELEPHONY"));
_SHARED[26] = (plt.types.String.makeInstance("PERMISSION:OPEN-IMAGE-URL"));
_SHARED[14] = (plt.types.String.makeInstance("PERMISSION:RECEIVE-SMS"));
_SHARED[13] = (plt.types.String.makeInstance("PERMISSION:SEND-SMS"));
_SHARED[21] = (plt.types.String.makeInstance("PERMISSION:OPEN-IMAGE-URL ~a"));
_SHARED[17] = (plt.types.String.makeInstance("PERMISSION:INTERNET"));
_SHARED[12] = (plt.types.String.makeInstance("PERMISSION:LOCATION"));
_SHARED[20] = (plt.types.String.makeInstance("PERMISSION:FOREIGN-FUNCTION-INTERFACE"));
_SHARED[25] = (plt.types.Rational.makeInstance(0, 1));

        plt._MODULES["moby/runtime/permission-struct"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 












PERMISSION_colon_LOCATION = make_dash_permission_colon_location();
PERMISSION_colon_SEND_dash_SMS = make_dash_permission_colon_send_dash_sms();
PERMISSION_colon_RECEIVE_dash_SMS = make_dash_permission_colon_send_dash_sms();
PERMISSION_colon_TILT = make_dash_permission_colon_tilt();
PERMISSION_colon_SHAKE = make_dash_permission_colon_shake();
PERMISSION_colon_INTERNET = make_dash_permission_colon_internet();
PERMISSION_colon_TELEPHONY = make_dash_permission_colon_telephony();
PERMISSION_colon_WAKE_dash_LOCK = make_dash_permission_colon_wake_dash_lock();
PERMISSION_colon_FOREIGN_dash_FUNCTION_dash_INTERFACE = make_dash_permission_colon_foreign_dash_function_dash_interface();


 }))( function(x){return x;} );
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_open_dash_image_dash_url"] = permission_colon_open_dash_image_dash_url;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_open_dash_image_dash_url"] = make_dash_permission_colon_open_dash_image_dash_url;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_open_dash_image_dash_url_question_"] = permission_colon_open_dash_image_dash_url_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_open_dash_image_dash_url_dash_url"] = permission_colon_open_dash_image_dash_url_dash_url;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_"] = set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_tilt"] = permission_colon_tilt;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_tilt"] = make_dash_permission_colon_tilt;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_tilt_question_"] = permission_colon_tilt_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_wake_dash_lock"] = permission_colon_wake_dash_lock;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_wake_dash_lock"] = make_dash_permission_colon_wake_dash_lock;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_wake_dash_lock_question_"] = permission_colon_wake_dash_lock_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_question_"] = permission_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["string_dash__greaterthan_permission"] = string_dash__greaterthan_permission;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_universe"] = permission_colon_universe;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_universe"] = make_dash_permission_colon_universe;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_universe_question_"] = permission_colon_universe_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_universe_dash_url"] = permission_colon_universe_dash_url;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["set_dash_permission_colon_universe_dash_url_bang_"] = set_dash_permission_colon_universe_dash_url_bang_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_send_dash_sms"] = permission_colon_send_dash_sms;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_send_dash_sms"] = make_dash_permission_colon_send_dash_sms;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_send_dash_sms_question_"] = permission_colon_send_dash_sms_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_shake"] = permission_colon_shake;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_shake"] = make_dash_permission_colon_shake;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_shake_question_"] = permission_colon_shake_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_telephony"] = permission_colon_telephony;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_telephony"] = make_dash_permission_colon_telephony;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_telephony_question_"] = permission_colon_telephony_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_receive_dash_sms"] = permission_colon_receive_dash_sms;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_receive_dash_sms"] = make_dash_permission_colon_receive_dash_sms;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_receive_dash_sms_question_"] = permission_colon_receive_dash_sms_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_TILT"] = PERMISSION_colon_TILT;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_internet"] = permission_colon_internet;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_internet"] = make_dash_permission_colon_internet;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_internet_question_"] = permission_colon_internet_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_location"] = permission_colon_location;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_location"] = make_dash_permission_colon_location;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_location_question_"] = permission_colon_location_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_dash__greaterthan_string"] = permission_dash__greaterthan_string;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_foreign_dash_function_dash_interface"] = permission_colon_foreign_dash_function_dash_interface;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["make_dash_permission_colon_foreign_dash_function_dash_interface"] = make_dash_permission_colon_foreign_dash_function_dash_interface;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_colon_foreign_dash_function_dash_interface_question_"] = permission_colon_foreign_dash_function_dash_interface_question_;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_WAKE_dash_LOCK"] = PERMISSION_colon_WAKE_dash_LOCK;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_dash__greaterthan_android_dash_permissions"] = permission_dash__greaterthan_android_dash_permissions;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_SEND_dash_SMS"] = PERMISSION_colon_SEND_dash_SMS;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_SHAKE"] = PERMISSION_colon_SHAKE;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_TELEPHONY"] = PERMISSION_colon_TELEPHONY;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_INTERNET"] = PERMISSION_colon_INTERNET;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_LOCATION"] = PERMISSION_colon_LOCATION;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_RECEIVE_dash_SMS"] = PERMISSION_colon_RECEIVE_dash_SMS;
plt._MODULES["moby/runtime/permission-struct"].EXPORTS["PERMISSION_colon_FOREIGN_dash_FUNCTION_dash_INTERFACE"] = PERMISSION_colon_FOREIGN_dash_FUNCTION_dash_INTERFACE;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/binding"]) == 'undefined') {
    plt._MODULES["moby/runtime/binding"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var binding_colon_constant = function (name,java_dash_string,permissions) { plt.types.Struct.call(this, "make-binding:constant", [name,java_dash_string,permissions]);this.name = name;
this.java_dash_string = java_dash_string;
this.permissions = permissions; };
binding_colon_constant.prototype = new plt.types.Struct();

var make_dash_binding_colon_constant = function (id0,id1,id2) { return new binding_colon_constant(id0,id1,id2); };
var binding_colon_constant_dash_name = function(obj) {
     if (binding_colon_constant_question_ (obj)) {
        return obj.name;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:constant-name: not a binding:constant: ~s', [obj]));
     }
};

var binding_colon_constant_dash_java_dash_string = function(obj) {
     if (binding_colon_constant_question_ (obj)) {
        return obj.java_dash_string;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:constant-java-string: not a binding:constant: ~s', [obj]));
     }
};

var binding_colon_constant_dash_permissions = function(obj) {
     if (binding_colon_constant_question_ (obj)) {
        return obj.permissions;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:constant-permissions: not a binding:constant: ~s', [obj]));
     }
};

var set_dash_binding_colon_constant_dash_name_bang_ = function(obj,newVal) {
	 if (binding_colon_constant_question_ (obj)) {
		obj.name = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_constant_dash_name_bang_: not a binding:constant: ~s', [obj]));
     }
};

var set_dash_binding_colon_constant_dash_java_dash_string_bang_ = function(obj,newVal) {
	 if (binding_colon_constant_question_ (obj)) {
		obj.java_dash_string = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_constant_dash_java_dash_string_bang_: not a binding:constant: ~s', [obj]));
     }
};

var set_dash_binding_colon_constant_dash_permissions_bang_ = function(obj,newVal) {
	 if (binding_colon_constant_question_ (obj)) {
		obj.permissions = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_constant_dash_permissions_bang_: not a binding:constant: ~s', [obj]));
     }
};

var binding_colon_constant_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof binding_colon_constant; };

var binding_colon_function = function (name,module_dash_source,min_dash_arity,var_dash_arity_question_,java_dash_string,permissions,cps_question_) { plt.types.Struct.call(this, "make-binding:function", [name,module_dash_source,min_dash_arity,var_dash_arity_question_,java_dash_string,permissions,cps_question_]);this.name = name;
this.module_dash_source = module_dash_source;
this.min_dash_arity = min_dash_arity;
this.var_dash_arity_question_ = var_dash_arity_question_;
this.java_dash_string = java_dash_string;
this.permissions = permissions;
this.cps_question_ = cps_question_; };
binding_colon_function.prototype = new plt.types.Struct();

var make_dash_binding_colon_function = function (id0,id1,id2,id3,id4,id5,id6) { return new binding_colon_function(id0,id1,id2,id3,id4,id5,id6); };
var binding_colon_function_dash_name = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.name;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-name: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_dash_module_dash_source = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.module_dash_source;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-module-source: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_dash_min_dash_arity = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.min_dash_arity;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-min-arity: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_dash_var_dash_arity_question_ = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.var_dash_arity_question_;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-var-arity?: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_dash_java_dash_string = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.java_dash_string;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-java-string: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_dash_permissions = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.permissions;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-permissions: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_dash_cps_question_ = function(obj) {
     if (binding_colon_function_question_ (obj)) {
        return obj.cps_question_;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:function-cps?: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_name_bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.name = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_name_bang_: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_module_dash_source_bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.module_dash_source = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_module_dash_source_bang_: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_min_dash_arity_bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.min_dash_arity = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_min_dash_arity_bang_: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_var_dash_arity_question__bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.var_dash_arity_question_ = newVal;
           obj._fields[3] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_var_dash_arity_question__bang_: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_java_dash_string_bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.java_dash_string = newVal;
           obj._fields[4] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_java_dash_string_bang_: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_permissions_bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.permissions = newVal;
           obj._fields[5] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_permissions_bang_: not a binding:function: ~s', [obj]));
     }
};

var set_dash_binding_colon_function_dash_cps_question__bang_ = function(obj,newVal) {
	 if (binding_colon_function_question_ (obj)) {
		obj.cps_question_ = newVal;
           obj._fields[6] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_function_dash_cps_question__bang_: not a binding:function: ~s', [obj]));
     }
};

var binding_colon_function_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof binding_colon_function; };

var binding_colon_structure = function (name,fields,constructor,predicate,accessors,mutators) { plt.types.Struct.call(this, "make-binding:structure", [name,fields,constructor,predicate,accessors,mutators]);this.name = name;
this.fields = fields;
this.constructor = constructor;
this.predicate = predicate;
this.accessors = accessors;
this.mutators = mutators; };
binding_colon_structure.prototype = new plt.types.Struct();

var make_dash_binding_colon_structure = function (id0,id1,id2,id3,id4,id5) { return new binding_colon_structure(id0,id1,id2,id3,id4,id5); };
var binding_colon_structure_dash_name = function(obj) {
     if (binding_colon_structure_question_ (obj)) {
        return obj.name;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:structure-name: not a binding:structure: ~s', [obj]));
     }
};

var binding_colon_structure_dash_fields = function(obj) {
     if (binding_colon_structure_question_ (obj)) {
        return obj.fields;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:structure-fields: not a binding:structure: ~s', [obj]));
     }
};

var binding_colon_structure_dash_constructor = function(obj) {
     if (binding_colon_structure_question_ (obj)) {
        return obj.constructor;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:structure-constructor: not a binding:structure: ~s', [obj]));
     }
};

var binding_colon_structure_dash_predicate = function(obj) {
     if (binding_colon_structure_question_ (obj)) {
        return obj.predicate;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:structure-predicate: not a binding:structure: ~s', [obj]));
     }
};

var binding_colon_structure_dash_accessors = function(obj) {
     if (binding_colon_structure_question_ (obj)) {
        return obj.accessors;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:structure-accessors: not a binding:structure: ~s', [obj]));
     }
};

var binding_colon_structure_dash_mutators = function(obj) {
     if (binding_colon_structure_question_ (obj)) {
        return obj.mutators;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('binding:structure-mutators: not a binding:structure: ~s', [obj]));
     }
};

var set_dash_binding_colon_structure_dash_name_bang_ = function(obj,newVal) {
	 if (binding_colon_structure_question_ (obj)) {
		obj.name = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_structure_dash_name_bang_: not a binding:structure: ~s', [obj]));
     }
};

var set_dash_binding_colon_structure_dash_fields_bang_ = function(obj,newVal) {
	 if (binding_colon_structure_question_ (obj)) {
		obj.fields = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_structure_dash_fields_bang_: not a binding:structure: ~s', [obj]));
     }
};

var set_dash_binding_colon_structure_dash_constructor_bang_ = function(obj,newVal) {
	 if (binding_colon_structure_question_ (obj)) {
		obj.constructor = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_structure_dash_constructor_bang_: not a binding:structure: ~s', [obj]));
     }
};

var set_dash_binding_colon_structure_dash_predicate_bang_ = function(obj,newVal) {
	 if (binding_colon_structure_question_ (obj)) {
		obj.predicate = newVal;
           obj._fields[3] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_structure_dash_predicate_bang_: not a binding:structure: ~s', [obj]));
     }
};

var set_dash_binding_colon_structure_dash_accessors_bang_ = function(obj,newVal) {
	 if (binding_colon_structure_question_ (obj)) {
		obj.accessors = newVal;
           obj._fields[4] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_structure_dash_accessors_bang_: not a binding:structure: ~s', [obj]));
     }
};

var set_dash_binding_colon_structure_dash_mutators_bang_ = function(obj,newVal) {
	 if (binding_colon_structure_question_ (obj)) {
		obj.mutators = newVal;
           obj._fields[5] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_binding_colon_structure_dash_mutators_bang_: not a binding:structure: ~s', [obj]));
     }
};

var binding_colon_structure_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof binding_colon_structure; };

var binding_question_ = function(datum) { return (binding_colon_constant_question_(datum)||binding_colon_function_question_(datum)||binding_colon_structure_question_(datum)); };
var binding_dash_id = function(a_dash_binding) { return (binding_colon_constant_question_(a_dash_binding) ?
 binding_colon_constant_dash_name(a_dash_binding) :
 (binding_colon_function_question_(a_dash_binding) ?
 binding_colon_function_dash_name(a_dash_binding) :
 (binding_colon_structure_question_(a_dash_binding) ?
 binding_colon_structure_dash_name(a_dash_binding) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[6])))); };
var binding_dash__greaterthan_sexp = function(a_dash_binding) { return (binding_colon_constant_question_(a_dash_binding) ?
 plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant")),binding_colon_constant_dash_name(a_dash_binding),binding_colon_constant_dash_java_dash_string(a_dash_binding),plt.Kernel.map((plt.types.liftToplevelToFunctionValue(plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_dash__greaterthan_string"],(plt.types.String.makeInstance("permission->string")),1,(plt.types.Rational.makeInstance(1, 1)))), [binding_colon_constant_dash_permissions(a_dash_binding)])]) :
 (binding_colon_function_question_(a_dash_binding) ?
 plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function")),binding_colon_function_dash_name(a_dash_binding),binding_colon_function_dash_module_dash_source(a_dash_binding),binding_colon_function_dash_min_dash_arity(a_dash_binding),binding_colon_function_dash_var_dash_arity_question_(a_dash_binding),binding_colon_function_dash_java_dash_string(a_dash_binding),plt.Kernel.map((plt.types.liftToplevelToFunctionValue(plt._MODULES["moby/runtime/permission-struct"].EXPORTS["permission_dash__greaterthan_string"],(plt.types.String.makeInstance("permission->string")),1,(plt.types.Rational.makeInstance(1, 1)))), [binding_colon_function_dash_permissions(a_dash_binding)]),binding_colon_function_dash_cps_question_(a_dash_binding)]) :
 (binding_colon_structure_question_(a_dash_binding) ?
 plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure")),binding_colon_structure_dash_name(a_dash_binding),binding_colon_structure_dash_fields(a_dash_binding),binding_colon_structure_dash_constructor(a_dash_binding),binding_colon_structure_dash_predicate(a_dash_binding),binding_colon_structure_dash_accessors(a_dash_binding),binding_colon_structure_dash_mutators(a_dash_binding)]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[6])))); };
var sexp_dash__greaterthan_binding = function(an_dash_sexp) { return plt.Kernel.apply(((function() {
   var _result_ = (function(args7) {
var val1 = args7[0];  return (plt.Kernel.ormap(((function() {
   var _result_ = (function(args8) {
var x2 = args8[0];  return plt.Kernel.equal_question_(x2,val1); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:constant"))]))]) ?
 make_dash_binding_colon_constant(plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[9]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[10]),plt.Kernel.map((plt.types.liftToplevelToFunctionValue(plt._MODULES["moby/runtime/permission-struct"].EXPORTS["string_dash__greaterthan_permission"],(plt.types.String.makeInstance("string->permission")),1,(plt.types.Rational.makeInstance(1, 1)))), [plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[11])])) :
 (plt.Kernel.ormap(((function() {
   var _result_ = (function(args12) {
var x2 = args12[0];  return plt.Kernel.equal_question_(x2,val1); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:function"))]))]) ?
 make_dash_binding_colon_function(plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[9]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[10]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[11]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[13]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[14]),plt.Kernel.map((plt.types.liftToplevelToFunctionValue(plt._MODULES["moby/runtime/permission-struct"].EXPORTS["string_dash__greaterthan_permission"],(plt.types.String.makeInstance("string->permission")),1,(plt.types.Rational.makeInstance(1, 1)))), [plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[15])]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[16])) :
 (plt.Kernel.ormap(((function() {
   var _result_ = (function(args17) {
var x2 = args17[0];  return plt.Kernel.equal_question_(x2,val1); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [(plt.Kernel.list([(plt.types.Symbol.makeInstance("binding:structure"))]))]) ?
 make_dash_binding_colon_structure(plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[9]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[10]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[11]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[13]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[14]),plt.Kernel.list_dash_ref(an_dash_sexp,_SHARED[15])) :
 plt.Kernel._void_([])))); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([plt.Kernel.first(an_dash_sexp)]),                    []); };
var localize_dash_binding_dash_to_dash_module = function(a_dash_binding, a_dash_module_dash_name) { return (binding_colon_constant_question_(a_dash_binding) ?
 make_dash_binding_colon_constant(binding_colon_constant_dash_name(a_dash_binding),plt.Kernel.format(_SHARED[18], [plt.Kernel.symbol_dash__greaterthan_string(a_dash_module_dash_name),binding_colon_constant_dash_java_dash_string(a_dash_binding)]),binding_colon_constant_dash_permissions(a_dash_binding)) :
 (binding_colon_function_question_(a_dash_binding) ?
 make_dash_binding_colon_function(binding_colon_function_dash_name(a_dash_binding),binding_colon_function_dash_module_dash_source(a_dash_binding),binding_colon_function_dash_min_dash_arity(a_dash_binding),binding_colon_function_dash_var_dash_arity_question_(a_dash_binding),plt.Kernel.format(_SHARED[18], [plt.Kernel.symbol_dash__greaterthan_string(a_dash_module_dash_name),binding_colon_function_dash_java_dash_string(a_dash_binding)]),binding_colon_function_dash_permissions(a_dash_binding),binding_colon_function_dash_cps_question_(a_dash_binding)) :
 (binding_colon_structure_question_(a_dash_binding) ?
 make_dash_binding_colon_structure(binding_colon_structure_dash_name(a_dash_binding),binding_colon_structure_dash_fields(a_dash_binding),binding_colon_structure_dash_constructor(a_dash_binding),binding_colon_structure_dash_predicate(a_dash_binding),binding_colon_structure_dash_accessors(a_dash_binding),binding_colon_structure_dash_mutators(a_dash_binding)) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[6])))); };
var module_dash_binding = function (name,source,bindings) { plt.types.Struct.call(this, "make-module-binding", [name,source,bindings]);this.name = name;
this.source = source;
this.bindings = bindings; };
module_dash_binding.prototype = new plt.types.Struct();

var make_dash_module_dash_binding = function (id0,id1,id2) { return new module_dash_binding(id0,id1,id2); };
var module_dash_binding_dash_name = function(obj) {
     if (module_dash_binding_question_ (obj)) {
        return obj.name;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('module-binding-name: not a module-binding: ~s', [obj]));
     }
};

var module_dash_binding_dash_source = function(obj) {
     if (module_dash_binding_question_ (obj)) {
        return obj.source;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('module-binding-source: not a module-binding: ~s', [obj]));
     }
};

var module_dash_binding_dash_bindings = function(obj) {
     if (module_dash_binding_question_ (obj)) {
        return obj.bindings;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('module-binding-bindings: not a module-binding: ~s', [obj]));
     }
};

var set_dash_module_dash_binding_dash_name_bang_ = function(obj,newVal) {
	 if (module_dash_binding_question_ (obj)) {
		obj.name = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_module_dash_binding_dash_name_bang_: not a module-binding: ~s', [obj]));
     }
};

var set_dash_module_dash_binding_dash_source_bang_ = function(obj,newVal) {
	 if (module_dash_binding_question_ (obj)) {
		obj.source = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_module_dash_binding_dash_source_bang_: not a module-binding: ~s', [obj]));
     }
};

var set_dash_module_dash_binding_dash_bindings_bang_ = function(obj,newVal) {
	 if (module_dash_binding_question_ (obj)) {
		obj.bindings = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_module_dash_binding_dash_bindings_bang_: not a module-binding: ~s', [obj]));
     }
};

var module_dash_binding_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof module_dash_binding; };

var module_dash_name_question_ = function(x) { return plt.Kernel.symbol_question_(x); };
var module_dash_path_question_ = function(x) { return (plt.Kernel.symbol_question_(x)||plt.Kernel.string_question_(x)); };
var module_dash_path_equal__question_ = function(p1, p2) { return ((plt.Kernel.symbol_question_(p1)&&plt.Kernel.symbol_question_(p2)) ?
 plt.Kernel.symbol_equal__question_(p1,p2) :
 ((plt.Kernel.string_question_(p1)&&plt.Kernel.string_question_(p2)) ?
 plt.Kernel.string_equal__question_(p1,p2, []) :
 (plt.types.Logic.TRUE ?
 plt.types.Logic.FALSE :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[6])))); };_SHARED[13] = (plt.types.Rational.makeInstance(4, 1));
_SHARED[15] = (plt.types.Rational.makeInstance(6, 1));
_SHARED[6] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[18] = (plt.types.String.makeInstance("plt._MODULES[~s].EXPORTS[~s]"));
_SHARED[16] = (plt.types.Rational.makeInstance(7, 1));
_SHARED[14] = (plt.types.Rational.makeInstance(5, 1));
_SHARED[10] = (plt.types.Rational.makeInstance(2, 1));
_SHARED[11] = (plt.types.Rational.makeInstance(3, 1));
_SHARED[9] = (plt.types.Rational.makeInstance(1, 1));

        plt._MODULES["moby/runtime/binding"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 
plt.Kernel.invokeModule('moby/runtime/permission-struct');;












 }))( function(x){return x;} );
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_question_"] = binding_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_binding"] = module_dash_binding;
plt._MODULES["moby/runtime/binding"].EXPORTS["make_dash_module_dash_binding"] = make_dash_module_dash_binding;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_binding_question_"] = module_dash_binding_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_binding_dash_name"] = module_dash_binding_dash_name;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_binding_dash_source"] = module_dash_binding_dash_source;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_binding_dash_bindings"] = module_dash_binding_dash_bindings;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_module_dash_binding_dash_name_bang_"] = set_dash_module_dash_binding_dash_name_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_module_dash_binding_dash_source_bang_"] = set_dash_module_dash_binding_dash_source_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_module_dash_binding_dash_bindings_bang_"] = set_dash_module_dash_binding_dash_bindings_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_path_question_"] = module_dash_path_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["sexp_dash__greaterthan_binding"] = sexp_dash__greaterthan_binding;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_name_question_"] = module_dash_name_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["module_dash_path_equal__question_"] = module_dash_path_equal__question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["localize_dash_binding_dash_to_dash_module"] = localize_dash_binding_dash_to_dash_module;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function"] = binding_colon_function;
plt._MODULES["moby/runtime/binding"].EXPORTS["make_dash_binding_colon_function"] = make_dash_binding_colon_function;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_question_"] = binding_colon_function_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_name"] = binding_colon_function_dash_name;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_module_dash_source"] = binding_colon_function_dash_module_dash_source;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_min_dash_arity"] = binding_colon_function_dash_min_dash_arity;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_var_dash_arity_question_"] = binding_colon_function_dash_var_dash_arity_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_java_dash_string"] = binding_colon_function_dash_java_dash_string;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_permissions"] = binding_colon_function_dash_permissions;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_function_dash_cps_question_"] = binding_colon_function_dash_cps_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_name_bang_"] = set_dash_binding_colon_function_dash_name_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_module_dash_source_bang_"] = set_dash_binding_colon_function_dash_module_dash_source_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_min_dash_arity_bang_"] = set_dash_binding_colon_function_dash_min_dash_arity_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_var_dash_arity_question__bang_"] = set_dash_binding_colon_function_dash_var_dash_arity_question__bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_java_dash_string_bang_"] = set_dash_binding_colon_function_dash_java_dash_string_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_permissions_bang_"] = set_dash_binding_colon_function_dash_permissions_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_function_dash_cps_question__bang_"] = set_dash_binding_colon_function_dash_cps_question__bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure"] = binding_colon_structure;
plt._MODULES["moby/runtime/binding"].EXPORTS["make_dash_binding_colon_structure"] = make_dash_binding_colon_structure;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_question_"] = binding_colon_structure_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_dash_name"] = binding_colon_structure_dash_name;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_dash_fields"] = binding_colon_structure_dash_fields;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_dash_constructor"] = binding_colon_structure_dash_constructor;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_dash_predicate"] = binding_colon_structure_dash_predicate;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_dash_accessors"] = binding_colon_structure_dash_accessors;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_structure_dash_mutators"] = binding_colon_structure_dash_mutators;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_structure_dash_name_bang_"] = set_dash_binding_colon_structure_dash_name_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_structure_dash_fields_bang_"] = set_dash_binding_colon_structure_dash_fields_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_structure_dash_constructor_bang_"] = set_dash_binding_colon_structure_dash_constructor_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_structure_dash_predicate_bang_"] = set_dash_binding_colon_structure_dash_predicate_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_structure_dash_accessors_bang_"] = set_dash_binding_colon_structure_dash_accessors_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_structure_dash_mutators_bang_"] = set_dash_binding_colon_structure_dash_mutators_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_dash_id"] = binding_dash_id;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_constant"] = binding_colon_constant;
plt._MODULES["moby/runtime/binding"].EXPORTS["make_dash_binding_colon_constant"] = make_dash_binding_colon_constant;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_constant_question_"] = binding_colon_constant_question_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_constant_dash_name"] = binding_colon_constant_dash_name;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_constant_dash_java_dash_string"] = binding_colon_constant_dash_java_dash_string;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_colon_constant_dash_permissions"] = binding_colon_constant_dash_permissions;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_constant_dash_name_bang_"] = set_dash_binding_colon_constant_dash_name_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_constant_dash_java_dash_string_bang_"] = set_dash_binding_colon_constant_dash_java_dash_string_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["set_dash_binding_colon_constant_dash_permissions_bang_"] = set_dash_binding_colon_constant_dash_permissions_bang_;
plt._MODULES["moby/runtime/binding"].EXPORTS["binding_dash__greaterthan_sexp"] = binding_dash__greaterthan_sexp;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/effect-struct"]) == 'undefined') {
    plt._MODULES["moby/runtime/effect-struct"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var effect_colon_none = function () { plt.types.Struct.call(this, "make-effect:none", []); };
effect_colon_none.prototype = new plt.types.Struct();

var make_dash_effect_colon_none = function () { return new effect_colon_none(); };


var effect_colon_none_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_none; };

var effect_colon_beep = function () { plt.types.Struct.call(this, "make-effect:beep", []); };
effect_colon_beep.prototype = new plt.types.Struct();

var make_dash_effect_colon_beep = function () { return new effect_colon_beep(); };


var effect_colon_beep_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_beep; };

var effect_colon_play_dash_dtmf_dash_tone = function (tone,duration) { plt.types.Struct.call(this, "make-effect:play-dtmf-tone", [tone,duration]);this.tone = tone;
this.duration = duration; };
effect_colon_play_dash_dtmf_dash_tone.prototype = new plt.types.Struct();

var make_dash_effect_colon_play_dash_dtmf_dash_tone = function (id0,id1) { return new effect_colon_play_dash_dtmf_dash_tone(id0,id1); };
var effect_colon_play_dash_dtmf_dash_tone_dash_tone = function(obj) {
     if (effect_colon_play_dash_dtmf_dash_tone_question_ (obj)) {
        return obj.tone;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:play-dtmf-tone-tone: not a effect:play-dtmf-tone: ~s', [obj]));
     }
};

var effect_colon_play_dash_dtmf_dash_tone_dash_duration = function(obj) {
     if (effect_colon_play_dash_dtmf_dash_tone_question_ (obj)) {
        return obj.duration;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:play-dtmf-tone-duration: not a effect:play-dtmf-tone: ~s', [obj]));
     }
};

var set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_tone_bang_ = function(obj,newVal) {
	 if (effect_colon_play_dash_dtmf_dash_tone_question_ (obj)) {
		obj.tone = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_tone_bang_: not a effect:play-dtmf-tone: ~s', [obj]));
     }
};

var set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_duration_bang_ = function(obj,newVal) {
	 if (effect_colon_play_dash_dtmf_dash_tone_question_ (obj)) {
		obj.duration = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_duration_bang_: not a effect:play-dtmf-tone: ~s', [obj]));
     }
};

var effect_colon_play_dash_dtmf_dash_tone_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_play_dash_dtmf_dash_tone; };

var effect_colon_send_dash_sms = function (address,msg) { plt.types.Struct.call(this, "make-effect:send-sms", [address,msg]);this.address = address;
this.msg = msg; };
effect_colon_send_dash_sms.prototype = new plt.types.Struct();

var make_dash_effect_colon_send_dash_sms = function (id0,id1) { return new effect_colon_send_dash_sms(id0,id1); };
var effect_colon_send_dash_sms_dash_address = function(obj) {
     if (effect_colon_send_dash_sms_question_ (obj)) {
        return obj.address;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:send-sms-address: not a effect:send-sms: ~s', [obj]));
     }
};

var effect_colon_send_dash_sms_dash_msg = function(obj) {
     if (effect_colon_send_dash_sms_question_ (obj)) {
        return obj.msg;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:send-sms-msg: not a effect:send-sms: ~s', [obj]));
     }
};

var set_dash_effect_colon_send_dash_sms_dash_address_bang_ = function(obj,newVal) {
	 if (effect_colon_send_dash_sms_question_ (obj)) {
		obj.address = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_send_dash_sms_dash_address_bang_: not a effect:send-sms: ~s', [obj]));
     }
};

var set_dash_effect_colon_send_dash_sms_dash_msg_bang_ = function(obj,newVal) {
	 if (effect_colon_send_dash_sms_question_ (obj)) {
		obj.msg = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_send_dash_sms_dash_msg_bang_: not a effect:send-sms: ~s', [obj]));
     }
};

var effect_colon_send_dash_sms_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_send_dash_sms; };

var playlist_dash_sound = function (playlist) { plt.types.Struct.call(this, "make-playlist-sound", [playlist]);this.playlist = playlist; };
playlist_dash_sound.prototype = new plt.types.Struct();

var make_dash_playlist_dash_sound = function (id0) { return new playlist_dash_sound(id0); };
var playlist_dash_sound_dash_playlist = function(obj) {
     if (playlist_dash_sound_question_ (obj)) {
        return obj.playlist;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('playlist-sound-playlist: not a playlist-sound: ~s', [obj]));
     }
};

var set_dash_playlist_dash_sound_dash_playlist_bang_ = function(obj,newVal) {
	 if (playlist_dash_sound_question_ (obj)) {
		obj.playlist = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_playlist_dash_sound_dash_playlist_bang_: not a playlist-sound: ~s', [obj]));
     }
};

var playlist_dash_sound_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof playlist_dash_sound; };

var sound_question_ = function(x) { return (plt.Kernel.string_question_(x)||playlist_dash_sound_question_(x)); };
var effect_colon_play_dash_sound = function (sound) { plt.types.Struct.call(this, "make-effect:play-sound", [sound]);this.sound = sound; };
effect_colon_play_dash_sound.prototype = new plt.types.Struct();

var make_dash_effect_colon_play_dash_sound = function (id0) { return new effect_colon_play_dash_sound(id0); };
var effect_colon_play_dash_sound_dash_sound = function(obj) {
     if (effect_colon_play_dash_sound_question_ (obj)) {
        return obj.sound;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:play-sound-sound: not a effect:play-sound: ~s', [obj]));
     }
};

var set_dash_effect_colon_play_dash_sound_dash_sound_bang_ = function(obj,newVal) {
	 if (effect_colon_play_dash_sound_question_ (obj)) {
		obj.sound = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_play_dash_sound_dash_sound_bang_: not a effect:play-sound: ~s', [obj]));
     }
};

var effect_colon_play_dash_sound_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_play_dash_sound; };

var effect_colon_pause_dash_sound = function (sound) { plt.types.Struct.call(this, "make-effect:pause-sound", [sound]);this.sound = sound; };
effect_colon_pause_dash_sound.prototype = new plt.types.Struct();

var make_dash_effect_colon_pause_dash_sound = function (id0) { return new effect_colon_pause_dash_sound(id0); };
var effect_colon_pause_dash_sound_dash_sound = function(obj) {
     if (effect_colon_pause_dash_sound_question_ (obj)) {
        return obj.sound;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:pause-sound-sound: not a effect:pause-sound: ~s', [obj]));
     }
};

var set_dash_effect_colon_pause_dash_sound_dash_sound_bang_ = function(obj,newVal) {
	 if (effect_colon_pause_dash_sound_question_ (obj)) {
		obj.sound = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_pause_dash_sound_dash_sound_bang_: not a effect:pause-sound: ~s', [obj]));
     }
};

var effect_colon_pause_dash_sound_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_pause_dash_sound; };

var effect_colon_stop_dash_sound = function (sound) { plt.types.Struct.call(this, "make-effect:stop-sound", [sound]);this.sound = sound; };
effect_colon_stop_dash_sound.prototype = new plt.types.Struct();

var make_dash_effect_colon_stop_dash_sound = function (id0) { return new effect_colon_stop_dash_sound(id0); };
var effect_colon_stop_dash_sound_dash_sound = function(obj) {
     if (effect_colon_stop_dash_sound_question_ (obj)) {
        return obj.sound;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:stop-sound-sound: not a effect:stop-sound: ~s', [obj]));
     }
};

var set_dash_effect_colon_stop_dash_sound_dash_sound_bang_ = function(obj,newVal) {
	 if (effect_colon_stop_dash_sound_question_ (obj)) {
		obj.sound = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_stop_dash_sound_dash_sound_bang_: not a effect:stop-sound: ~s', [obj]));
     }
};

var effect_colon_stop_dash_sound_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_stop_dash_sound; };

var effect_colon_set_dash_sound_dash_volume = function (volume) { plt.types.Struct.call(this, "make-effect:set-sound-volume", [volume]);this.volume = volume; };
effect_colon_set_dash_sound_dash_volume.prototype = new plt.types.Struct();

var make_dash_effect_colon_set_dash_sound_dash_volume = function (id0) { return new effect_colon_set_dash_sound_dash_volume(id0); };
var effect_colon_set_dash_sound_dash_volume_dash_volume = function(obj) {
     if (effect_colon_set_dash_sound_dash_volume_question_ (obj)) {
        return obj.volume;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:set-sound-volume-volume: not a effect:set-sound-volume: ~s', [obj]));
     }
};

var set_dash_effect_colon_set_dash_sound_dash_volume_dash_volume_bang_ = function(obj,newVal) {
	 if (effect_colon_set_dash_sound_dash_volume_question_ (obj)) {
		obj.volume = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_set_dash_sound_dash_volume_dash_volume_bang_: not a effect:set-sound-volume: ~s', [obj]));
     }
};

var effect_colon_set_dash_sound_dash_volume_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_set_dash_sound_dash_volume; };

var effect_colon_raise_dash_sound_dash_volume = function () { plt.types.Struct.call(this, "make-effect:raise-sound-volume", []); };
effect_colon_raise_dash_sound_dash_volume.prototype = new plt.types.Struct();

var make_dash_effect_colon_raise_dash_sound_dash_volume = function () { return new effect_colon_raise_dash_sound_dash_volume(); };


var effect_colon_raise_dash_sound_dash_volume_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_raise_dash_sound_dash_volume; };

var effect_colon_lower_dash_sound_dash_volume = function () { plt.types.Struct.call(this, "make-effect:lower-sound-volume", []); };
effect_colon_lower_dash_sound_dash_volume.prototype = new plt.types.Struct();

var make_dash_effect_colon_lower_dash_sound_dash_volume = function () { return new effect_colon_lower_dash_sound_dash_volume(); };


var effect_colon_lower_dash_sound_dash_volume_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_lower_dash_sound_dash_volume; };

var effect_colon_set_dash_wake_dash_lock = function (locks) { plt.types.Struct.call(this, "make-effect:set-wake-lock", [locks]);this.locks = locks; };
effect_colon_set_dash_wake_dash_lock.prototype = new plt.types.Struct();

var make_dash_effect_colon_set_dash_wake_dash_lock = function (id0) { return new effect_colon_set_dash_wake_dash_lock(id0); };
var effect_colon_set_dash_wake_dash_lock_dash_locks = function(obj) {
     if (effect_colon_set_dash_wake_dash_lock_question_ (obj)) {
        return obj.locks;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:set-wake-lock-locks: not a effect:set-wake-lock: ~s', [obj]));
     }
};

var set_dash_effect_colon_set_dash_wake_dash_lock_dash_locks_bang_ = function(obj,newVal) {
	 if (effect_colon_set_dash_wake_dash_lock_question_ (obj)) {
		obj.locks = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_set_dash_wake_dash_lock_dash_locks_bang_: not a effect:set-wake-lock: ~s', [obj]));
     }
};

var effect_colon_set_dash_wake_dash_lock_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_set_dash_wake_dash_lock; };

var effect_colon_release_dash_wake_dash_lock = function () { plt.types.Struct.call(this, "make-effect:release-wake-lock", []); };
effect_colon_release_dash_wake_dash_lock.prototype = new plt.types.Struct();

var make_dash_effect_colon_release_dash_wake_dash_lock = function () { return new effect_colon_release_dash_wake_dash_lock(); };


var effect_colon_release_dash_wake_dash_lock_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_release_dash_wake_dash_lock; };

var effect_colon_pick_dash_playlist = function (update_dash_f) { plt.types.Struct.call(this, "make-effect:pick-playlist", [update_dash_f]);this.update_dash_f = update_dash_f; };
effect_colon_pick_dash_playlist.prototype = new plt.types.Struct();

var make_dash_effect_colon_pick_dash_playlist = function (id0) { return new effect_colon_pick_dash_playlist(id0); };
var effect_colon_pick_dash_playlist_dash_update_dash_f = function(obj) {
     if (effect_colon_pick_dash_playlist_question_ (obj)) {
        return obj.update_dash_f;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:pick-playlist-update-f: not a effect:pick-playlist: ~s', [obj]));
     }
};

var set_dash_effect_colon_pick_dash_playlist_dash_update_dash_f_bang_ = function(obj,newVal) {
	 if (effect_colon_pick_dash_playlist_question_ (obj)) {
		obj.update_dash_f = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_pick_dash_playlist_dash_update_dash_f_bang_: not a effect:pick-playlist: ~s', [obj]));
     }
};

var effect_colon_pick_dash_playlist_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_pick_dash_playlist; };

var effect_colon_pick_dash_random = function (n,update_dash_f) { plt.types.Struct.call(this, "make-effect:pick-random", [n,update_dash_f]);this.n = n;
this.update_dash_f = update_dash_f; };
effect_colon_pick_dash_random.prototype = new plt.types.Struct();

var make_dash_effect_colon_pick_dash_random = function (id0,id1) { return new effect_colon_pick_dash_random(id0,id1); };
var effect_colon_pick_dash_random_dash_n = function(obj) {
     if (effect_colon_pick_dash_random_question_ (obj)) {
        return obj.n;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:pick-random-n: not a effect:pick-random: ~s', [obj]));
     }
};

var effect_colon_pick_dash_random_dash_update_dash_f = function(obj) {
     if (effect_colon_pick_dash_random_question_ (obj)) {
        return obj.update_dash_f;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('effect:pick-random-update-f: not a effect:pick-random: ~s', [obj]));
     }
};

var set_dash_effect_colon_pick_dash_random_dash_n_bang_ = function(obj,newVal) {
	 if (effect_colon_pick_dash_random_question_ (obj)) {
		obj.n = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_pick_dash_random_dash_n_bang_: not a effect:pick-random: ~s', [obj]));
     }
};

var set_dash_effect_colon_pick_dash_random_dash_update_dash_f_bang_ = function(obj,newVal) {
	 if (effect_colon_pick_dash_random_question_ (obj)) {
		obj.update_dash_f = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_effect_colon_pick_dash_random_dash_update_dash_f_bang_: not a effect:pick-random: ~s', [obj]));
     }
};

var effect_colon_pick_dash_random_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof effect_colon_pick_dash_random; };

var effect_question_ = function(thing) { return (effect_colon_none_question_(thing)||effect_colon_beep_question_(thing)||effect_colon_play_dash_dtmf_dash_tone_question_(thing)||effect_colon_send_dash_sms_question_(thing)||effect_colon_play_dash_sound_question_(thing)||effect_colon_pause_dash_sound_question_(thing)||effect_colon_stop_dash_sound_question_(thing)||effect_colon_set_dash_sound_dash_volume_question_(thing)||effect_colon_raise_dash_sound_dash_volume_question_(thing)||effect_colon_lower_dash_sound_dash_volume_question_(thing)||effect_colon_set_dash_wake_dash_lock_question_(thing)||effect_colon_release_dash_wake_dash_lock_question_(thing)||effect_colon_pick_dash_playlist_question_(thing)||effect_colon_pick_dash_random_question_(thing)); };
        plt._MODULES["moby/runtime/effect-struct"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 
















 }))( function(x){return x;} );
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_raise_dash_sound_dash_volume"] = effect_colon_raise_dash_sound_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_raise_dash_sound_dash_volume"] = make_dash_effect_colon_raise_dash_sound_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_raise_dash_sound_dash_volume_question_"] = effect_colon_raise_dash_sound_dash_volume_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_set_dash_sound_dash_volume"] = effect_colon_set_dash_sound_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_set_dash_sound_dash_volume"] = make_dash_effect_colon_set_dash_sound_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_set_dash_sound_dash_volume_question_"] = effect_colon_set_dash_sound_dash_volume_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_set_dash_sound_dash_volume_dash_volume"] = effect_colon_set_dash_sound_dash_volume_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_set_dash_sound_dash_volume_dash_volume_bang_"] = set_dash_effect_colon_set_dash_sound_dash_volume_dash_volume_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_stop_dash_sound"] = effect_colon_stop_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_stop_dash_sound"] = make_dash_effect_colon_stop_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_stop_dash_sound_question_"] = effect_colon_stop_dash_sound_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_stop_dash_sound_dash_sound"] = effect_colon_stop_dash_sound_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_stop_dash_sound_dash_sound_bang_"] = set_dash_effect_colon_stop_dash_sound_dash_sound_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_question_"] = effect_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_set_dash_wake_dash_lock"] = effect_colon_set_dash_wake_dash_lock;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_set_dash_wake_dash_lock"] = make_dash_effect_colon_set_dash_wake_dash_lock;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_set_dash_wake_dash_lock_question_"] = effect_colon_set_dash_wake_dash_lock_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_set_dash_wake_dash_lock_dash_locks"] = effect_colon_set_dash_wake_dash_lock_dash_locks;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_set_dash_wake_dash_lock_dash_locks_bang_"] = set_dash_effect_colon_set_dash_wake_dash_lock_dash_locks_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_send_dash_sms"] = effect_colon_send_dash_sms;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_send_dash_sms"] = make_dash_effect_colon_send_dash_sms;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_send_dash_sms_question_"] = effect_colon_send_dash_sms_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_send_dash_sms_dash_address"] = effect_colon_send_dash_sms_dash_address;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_send_dash_sms_dash_msg"] = effect_colon_send_dash_sms_dash_msg;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_send_dash_sms_dash_address_bang_"] = set_dash_effect_colon_send_dash_sms_dash_address_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_send_dash_sms_dash_msg_bang_"] = set_dash_effect_colon_send_dash_sms_dash_msg_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_release_dash_wake_dash_lock"] = effect_colon_release_dash_wake_dash_lock;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_release_dash_wake_dash_lock"] = make_dash_effect_colon_release_dash_wake_dash_lock;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_release_dash_wake_dash_lock_question_"] = effect_colon_release_dash_wake_dash_lock_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pause_dash_sound"] = effect_colon_pause_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_pause_dash_sound"] = make_dash_effect_colon_pause_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pause_dash_sound_question_"] = effect_colon_pause_dash_sound_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pause_dash_sound_dash_sound"] = effect_colon_pause_dash_sound_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_pause_dash_sound_dash_sound_bang_"] = set_dash_effect_colon_pause_dash_sound_dash_sound_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_dtmf_dash_tone"] = effect_colon_play_dash_dtmf_dash_tone;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_play_dash_dtmf_dash_tone"] = make_dash_effect_colon_play_dash_dtmf_dash_tone;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_dtmf_dash_tone_question_"] = effect_colon_play_dash_dtmf_dash_tone_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_dtmf_dash_tone_dash_tone"] = effect_colon_play_dash_dtmf_dash_tone_dash_tone;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_dtmf_dash_tone_dash_duration"] = effect_colon_play_dash_dtmf_dash_tone_dash_duration;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_tone_bang_"] = set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_tone_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_duration_bang_"] = set_dash_effect_colon_play_dash_dtmf_dash_tone_dash_duration_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_sound"] = effect_colon_play_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_play_dash_sound"] = make_dash_effect_colon_play_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_sound_question_"] = effect_colon_play_dash_sound_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_play_dash_sound_dash_sound"] = effect_colon_play_dash_sound_dash_sound;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_play_dash_sound_dash_sound_bang_"] = set_dash_effect_colon_play_dash_sound_dash_sound_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_playlist"] = effect_colon_pick_dash_playlist;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_pick_dash_playlist"] = make_dash_effect_colon_pick_dash_playlist;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_playlist_question_"] = effect_colon_pick_dash_playlist_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_playlist_dash_update_dash_f"] = effect_colon_pick_dash_playlist_dash_update_dash_f;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_pick_dash_playlist_dash_update_dash_f_bang_"] = set_dash_effect_colon_pick_dash_playlist_dash_update_dash_f_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_random"] = effect_colon_pick_dash_random;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_pick_dash_random"] = make_dash_effect_colon_pick_dash_random;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_random_question_"] = effect_colon_pick_dash_random_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_random_dash_n"] = effect_colon_pick_dash_random_dash_n;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_pick_dash_random_dash_update_dash_f"] = effect_colon_pick_dash_random_dash_update_dash_f;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_pick_dash_random_dash_n_bang_"] = set_dash_effect_colon_pick_dash_random_dash_n_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["set_dash_effect_colon_pick_dash_random_dash_update_dash_f_bang_"] = set_dash_effect_colon_pick_dash_random_dash_update_dash_f_bang_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_lower_dash_sound_dash_volume"] = effect_colon_lower_dash_sound_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_lower_dash_sound_dash_volume"] = make_dash_effect_colon_lower_dash_sound_dash_volume;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_lower_dash_sound_dash_volume_question_"] = effect_colon_lower_dash_sound_dash_volume_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_none"] = effect_colon_none;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_none"] = make_dash_effect_colon_none;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_none_question_"] = effect_colon_none_question_;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_beep"] = effect_colon_beep;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["make_dash_effect_colon_beep"] = make_dash_effect_colon_beep;
plt._MODULES["moby/runtime/effect-struct"].EXPORTS["effect_colon_beep_question_"] = effect_colon_beep_question_;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/arity-struct"]) == 'undefined') {
    plt._MODULES["moby/runtime/arity-struct"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var arity_colon_fixed = function (n) { plt.types.Struct.call(this, "make-arity:fixed", [n]);this.n = n; };
arity_colon_fixed.prototype = new plt.types.Struct();

var make_dash_arity_colon_fixed = function (id0) { return new arity_colon_fixed(id0); };
var arity_colon_fixed_dash_n = function(obj) {
     if (arity_colon_fixed_question_ (obj)) {
        return obj.n;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('arity:fixed-n: not a arity:fixed: ~s', [obj]));
     }
};

var set_dash_arity_colon_fixed_dash_n_bang_ = function(obj,newVal) {
	 if (arity_colon_fixed_question_ (obj)) {
		obj.n = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_arity_colon_fixed_dash_n_bang_: not a arity:fixed: ~s', [obj]));
     }
};

var arity_colon_fixed_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof arity_colon_fixed; };

var arity_colon_variable = function (min,max) { plt.types.Struct.call(this, "make-arity:variable", [min,max]);this.min = min;
this.max = max; };
arity_colon_variable.prototype = new plt.types.Struct();

var make_dash_arity_colon_variable = function (id0,id1) { return new arity_colon_variable(id0,id1); };
var arity_colon_variable_dash_min = function(obj) {
     if (arity_colon_variable_question_ (obj)) {
        return obj.min;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('arity:variable-min: not a arity:variable: ~s', [obj]));
     }
};

var arity_colon_variable_dash_max = function(obj) {
     if (arity_colon_variable_question_ (obj)) {
        return obj.max;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('arity:variable-max: not a arity:variable: ~s', [obj]));
     }
};

var set_dash_arity_colon_variable_dash_min_bang_ = function(obj,newVal) {
	 if (arity_colon_variable_question_ (obj)) {
		obj.min = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_arity_colon_variable_dash_min_bang_: not a arity:variable: ~s', [obj]));
     }
};

var set_dash_arity_colon_variable_dash_max_bang_ = function(obj,newVal) {
	 if (arity_colon_variable_question_ (obj)) {
		obj.max = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_arity_colon_variable_dash_max_bang_: not a arity:variable: ~s', [obj]));
     }
};

var arity_colon_variable_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof arity_colon_variable; };

var arity_colon_mixed = function (arities) { plt.types.Struct.call(this, "make-arity:mixed", [arities]);this.arities = arities; };
arity_colon_mixed.prototype = new plt.types.Struct();

var make_dash_arity_colon_mixed = function (id0) { return new arity_colon_mixed(id0); };
var arity_colon_mixed_dash_arities = function(obj) {
     if (arity_colon_mixed_question_ (obj)) {
        return obj.arities;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('arity:mixed-arities: not a arity:mixed: ~s', [obj]));
     }
};

var set_dash_arity_colon_mixed_dash_arities_bang_ = function(obj,newVal) {
	 if (arity_colon_mixed_question_ (obj)) {
		obj.arities = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_arity_colon_mixed_dash_arities_bang_: not a arity:mixed: ~s', [obj]));
     }
};

var arity_colon_mixed_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof arity_colon_mixed; };

var arity_question_ = function(x) { return (arity_colon_fixed_question_(x)||arity_colon_variable_question_(x)||arity_colon_mixed_question_(x)); };
var arity_dash__greaterthan_sexp = function(an_dash_arity) { return (arity_colon_fixed_question_(an_dash_arity) ?
 plt.Kernel.list([(plt.types.Symbol.makeInstance("arity:fixed")),arity_colon_fixed_dash_n(an_dash_arity)]) :
 (arity_colon_variable_question_(an_dash_arity) ?
 plt.Kernel.list([(plt.types.Symbol.makeInstance("arity:variable")),arity_colon_variable_dash_min(an_dash_arity),arity_colon_variable_dash_max(an_dash_arity)]) :
 (arity_colon_mixed_question_(an_dash_arity) ?
 plt.Kernel.list([(plt.types.Symbol.makeInstance("arity:mixed")),plt.Kernel.map((plt.types.liftToplevelToFunctionValue(arity_dash__greaterthan_sexp,(plt.types.String.makeInstance("arity->sexp")),1,(plt.types.Rational.makeInstance(1, 1)))), [arity_colon_mixed_dash_arities(an_dash_arity)])]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4])))); };
var sexp_dash__greaterthan_arity = function(an_dash_sexp) { return (plt.Kernel.list_question_(an_dash_sexp) ?
 ((plt.Kernel.symbol_equal__question_(plt.Kernel.first(an_dash_sexp),(plt.types.Symbol.makeInstance("arity:fixed?")))&&plt.Kernel._equal_(_SHARED[5],plt.Kernel.length(an_dash_sexp), [])&&plt.Kernel.number_question_(plt.Kernel.second(an_dash_sexp))) ?
 make_dash_arity_colon_fixed(plt.Kernel.second(an_dash_sexp)) :
 ((plt.Kernel.symbol_equal__question_(plt.Kernel.first(an_dash_sexp),(plt.types.Symbol.makeInstance("arity:variable?")))&&plt.Kernel._equal_(_SHARED[6],plt.Kernel.length(an_dash_sexp), [])&&(plt.Kernel.number_question_(plt.Kernel.second(an_dash_sexp))||plt.Kernel.false_question_(plt.Kernel.second(an_dash_sexp)))&&(plt.Kernel.number_question_(plt.Kernel.third(an_dash_sexp))||plt.Kernel.false_question_(plt.Kernel.third(an_dash_sexp)))) ?
 make_dash_arity_colon_variable(plt.Kernel.second(an_dash_sexp),plt.Kernel.third(an_dash_sexp)) :
 ((plt.Kernel.symbol_equal__question_(plt.Kernel.first(an_dash_sexp),(plt.types.Symbol.makeInstance("arity:mixed?")))&&plt.Kernel.list([plt.Kernel.second(an_dash_sexp)])) ?
 ((function() { 

var inner_dash_arities; 
(function (toplevel_dash_expression_dash_show7) { 
inner_dash_arities = plt.Kernel.map((plt.types.liftToplevelToFunctionValue(sexp_dash__greaterthan_arity,(plt.types.String.makeInstance("sexp->arity")),1,(plt.types.Rational.makeInstance(1, 1)))), [plt.Kernel.second(an_dash_sexp)]); })(plt.Kernel.identity)
return (plt.Kernel.andmap(((function() {
   var _result_ = (function(args8) {
var x = args8[0];  return (arity_colon_fixed_question_(x)||arity_colon_variable_question_(x)); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [inner_dash_arities]) ?
 make_dash_arity_colon_mixed(inner_dash_arities) :
 (plt.types.Logic.TRUE ?
 plt.Kernel.error((plt.types.Symbol.makeInstance("sexp->arity")),plt.Kernel.format(_SHARED[9], [an_dash_sexp])) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4])));
              })()) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4])))) :
 (plt.types.Logic.TRUE ?
 plt.Kernel.error((plt.types.Symbol.makeInstance("sexp->arity")),plt.Kernel.format(_SHARED[9], [an_dash_sexp])) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[4]))); };_SHARED[6] = (plt.types.Rational.makeInstance(3, 1));
_SHARED[4] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[9] = (plt.types.String.makeInstance("Does not look like an arity structure: ~s"));
_SHARED[5] = (plt.types.Rational.makeInstance(2, 1));

        plt._MODULES["moby/runtime/arity-struct"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 





 }))( function(x){return x;} );
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_mixed"] = arity_colon_mixed;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["make_dash_arity_colon_mixed"] = make_dash_arity_colon_mixed;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_mixed_question_"] = arity_colon_mixed_question_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_mixed_dash_arities"] = arity_colon_mixed_dash_arities;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["set_dash_arity_colon_mixed_dash_arities_bang_"] = set_dash_arity_colon_mixed_dash_arities_bang_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable"] = arity_colon_variable;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["make_dash_arity_colon_variable"] = make_dash_arity_colon_variable;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable_question_"] = arity_colon_variable_question_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable_dash_min"] = arity_colon_variable_dash_min;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable_dash_max"] = arity_colon_variable_dash_max;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["set_dash_arity_colon_variable_dash_min_bang_"] = set_dash_arity_colon_variable_dash_min_bang_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["set_dash_arity_colon_variable_dash_max_bang_"] = set_dash_arity_colon_variable_dash_max_bang_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_question_"] = arity_question_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_fixed"] = arity_colon_fixed;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["make_dash_arity_colon_fixed"] = make_dash_arity_colon_fixed;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_fixed_question_"] = arity_colon_fixed_question_;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_fixed_dash_n"] = arity_colon_fixed_dash_n;
plt._MODULES["moby/runtime/arity-struct"].EXPORTS["set_dash_arity_colon_fixed_dash_n_bang_"] = set_dash_arity_colon_fixed_dash_n_bang_;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/error-struct"]) == 'undefined') {
    plt._MODULES["moby/runtime/error-struct"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var moby_dash_error = function (location,error_dash_type) { plt.types.Struct.call(this, "make-moby-error", [location,error_dash_type]);this.location = location;
this.error_dash_type = error_dash_type; };
moby_dash_error.prototype = new plt.types.Struct();

var make_dash_moby_dash_error = function (id0,id1) { return new moby_dash_error(id0,id1); };
var moby_dash_error_dash_location = function(obj) {
     if (moby_dash_error_question_ (obj)) {
        return obj.location;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-location: not a moby-error: ~s', [obj]));
     }
};

var moby_dash_error_dash_error_dash_type = function(obj) {
     if (moby_dash_error_question_ (obj)) {
        return obj.error_dash_type;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-error-type: not a moby-error: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_location_bang_ = function(obj,newVal) {
	 if (moby_dash_error_question_ (obj)) {
		obj.location = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_location_bang_: not a moby-error: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_error_dash_type_bang_ = function(obj,newVal) {
	 if (moby_dash_error_question_ (obj)) {
		obj.error_dash_type = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_error_dash_type_bang_: not a moby-error: ~s', [obj]));
     }
};

var moby_dash_error_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error; };

var moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token = function (type,opener,closer) { plt.types.Struct.call(this, "make-moby-error-type:unclosed-lexical-token", [type,opener,closer]);this.type = type;
this.opener = opener;
this.closer = closer; };
moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token = function (id0,id1,id2) { return new moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token(id0,id1,id2); };
var moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type = function(obj) {
     if (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ (obj)) {
        return obj.type;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unclosed-lexical-token-type: not a moby-error-type:unclosed-lexical-token: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener = function(obj) {
     if (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ (obj)) {
        return obj.opener;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unclosed-lexical-token-opener: not a moby-error-type:unclosed-lexical-token: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer = function(obj) {
     if (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ (obj)) {
        return obj.closer;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unclosed-lexical-token-closer: not a moby-error-type:unclosed-lexical-token: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ (obj)) {
		obj.type = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type_bang_: not a moby-error-type:unclosed-lexical-token: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ (obj)) {
		obj.opener = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener_bang_: not a moby-error-type:unclosed-lexical-token: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ (obj)) {
		obj.closer = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer_bang_: not a moby-error-type:unclosed-lexical-token: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token; };

var moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token = function (token) { plt.types.Struct.call(this, "make-moby-error-type:unrecognized-lexical-token", [token]);this.token = token; };
moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token = function (id0) { return new moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token(id0); };
var moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token = function(obj) {
     if (moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_ (obj)) {
        return obj.token;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unrecognized-lexical-token-token: not a moby-error-type:unrecognized-lexical-token: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_ (obj)) {
		obj.token = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token_bang_: not a moby-error-type:unrecognized-lexical-token: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token; };

var moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token = function (token) { plt.types.Struct.call(this, "make-moby-error-type:unsupported-lexical-token", [token]);this.token = token; };
moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token = function (id0) { return new moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token(id0); };
var moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token = function(obj) {
     if (moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_ (obj)) {
        return obj.token;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unsupported-lexical-token-token: not a moby-error-type:unsupported-lexical-token: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_ (obj)) {
		obj.token = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token_bang_: not a moby-error-type:unsupported-lexical-token: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token; };

var moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form = function (expr) { plt.types.Struct.call(this, "make-moby-error-type:unsupported-expression-form", [expr]);this.expr = expr; };
moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form = function (id0) { return new moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form(id0); };
var moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr = function(obj) {
     if (moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_ (obj)) {
        return obj.expr;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unsupported-expression-form-expr: not a moby-error-type:unsupported-expression-form: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_ (obj)) {
		obj.expr = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr_bang_: not a moby-error-type:unsupported-expression-form: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form; };

var moby_dash_error_dash_type_colon_unclosed_dash_parentheses = function (opener,closer) { plt.types.Struct.call(this, "make-moby-error-type:unclosed-parentheses", [opener,closer]);this.opener = opener;
this.closer = closer; };
moby_dash_error_dash_type_colon_unclosed_dash_parentheses.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses = function (id0,id1) { return new moby_dash_error_dash_type_colon_unclosed_dash_parentheses(id0,id1); };
var moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener = function(obj) {
     if (moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_ (obj)) {
        return obj.opener;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unclosed-parentheses-opener: not a moby-error-type:unclosed-parentheses: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer = function(obj) {
     if (moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_ (obj)) {
        return obj.closer;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unclosed-parentheses-closer: not a moby-error-type:unclosed-parentheses: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_ (obj)) {
		obj.opener = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener_bang_: not a moby-error-type:unclosed-parentheses: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_ (obj)) {
		obj.closer = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer_bang_: not a moby-error-type:unclosed-parentheses: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_unclosed_dash_parentheses; };

var moby_dash_error_dash_type_colon_missing_dash_expression = function (token) { plt.types.Struct.call(this, "make-moby-error-type:missing-expression", [token]);this.token = token; };
moby_dash_error_dash_type_colon_missing_dash_expression.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_missing_dash_expression = function (id0) { return new moby_dash_error_dash_type_colon_missing_dash_expression(id0); };
var moby_dash_error_dash_type_colon_missing_dash_expression_dash_token = function(obj) {
     if (moby_dash_error_dash_type_colon_missing_dash_expression_question_ (obj)) {
        return obj.token;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:missing-expression-token: not a moby-error-type:missing-expression: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_missing_dash_expression_dash_token_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_missing_dash_expression_question_ (obj)) {
		obj.token = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_missing_dash_expression_dash_token_bang_: not a moby-error-type:missing-expression: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_missing_dash_expression_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_missing_dash_expression; };

var moby_dash_error_dash_type_colon_duplicate_dash_identifier = function (id,second_dash_location) { plt.types.Struct.call(this, "make-moby-error-type:duplicate-identifier", [id,second_dash_location]);this.id = id;
this.second_dash_location = second_dash_location; };
moby_dash_error_dash_type_colon_duplicate_dash_identifier.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier = function (id0,id1) { return new moby_dash_error_dash_type_colon_duplicate_dash_identifier(id0,id1); };
var moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id = function(obj) {
     if (moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_ (obj)) {
        return obj.id;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:duplicate-identifier-id: not a moby-error-type:duplicate-identifier: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location = function(obj) {
     if (moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_ (obj)) {
        return obj.second_dash_location;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:duplicate-identifier-second-location: not a moby-error-type:duplicate-identifier: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_ (obj)) {
		obj.id = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id_bang_: not a moby-error-type:duplicate-identifier: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_ (obj)) {
		obj.second_dash_location = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location_bang_: not a moby-error-type:duplicate-identifier: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_duplicate_dash_identifier; };

var moby_dash_error_dash_type_colon_expected_dash_identifier = function (observed) { plt.types.Struct.call(this, "make-moby-error-type:expected-identifier", [observed]);this.observed = observed; };
moby_dash_error_dash_type_colon_expected_dash_identifier.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_expected_dash_identifier = function (id0) { return new moby_dash_error_dash_type_colon_expected_dash_identifier(id0); };
var moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed = function(obj) {
     if (moby_dash_error_dash_type_colon_expected_dash_identifier_question_ (obj)) {
        return obj.observed;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:expected-identifier-observed: not a moby-error-type:expected-identifier: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_expected_dash_identifier_question_ (obj)) {
		obj.observed = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed_bang_: not a moby-error-type:expected-identifier: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_expected_dash_identifier_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_expected_dash_identifier; };

var moby_dash_error_dash_type_colon_undefined_dash_identifier = function (id) { plt.types.Struct.call(this, "make-moby-error-type:undefined-identifier", [id]);this.id = id; };
moby_dash_error_dash_type_colon_undefined_dash_identifier.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier = function (id0) { return new moby_dash_error_dash_type_colon_undefined_dash_identifier(id0); };
var moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id = function(obj) {
     if (moby_dash_error_dash_type_colon_undefined_dash_identifier_question_ (obj)) {
        return obj.id;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:undefined-identifier-id: not a moby-error-type:undefined-identifier: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_undefined_dash_identifier_question_ (obj)) {
		obj.id = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id_bang_: not a moby-error-type:undefined-identifier: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_undefined_dash_identifier_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_undefined_dash_identifier; };

var moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression = function (id) { plt.types.Struct.call(this, "make-moby-error-type:structure-identifier-not-expression", [id]);this.id = id; };
moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression = function (id0) { return new moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression(id0); };
var moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id = function(obj) {
     if (moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_ (obj)) {
        return obj.id;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:structure-identifier-not-expression-id: not a moby-error-type:structure-identifier-not-expression: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_ (obj)) {
		obj.id = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id_bang_: not a moby-error-type:structure-identifier-not-expression: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression; };

var moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined = function (id) { plt.types.Struct.call(this, "make-moby-error-type:provided-name-not-defined", [id]);this.id = id; };
moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined = function (id0) { return new moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined(id0); };
var moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id = function(obj) {
     if (moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_ (obj)) {
        return obj.id;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:provided-name-not-defined-id: not a moby-error-type:provided-name-not-defined: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_ (obj)) {
		obj.id = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id_bang_: not a moby-error-type:provided-name-not-defined: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined; };

var moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure = function (id) { plt.types.Struct.call(this, "make-moby-error-type:provided-structure-not-structure", [id]);this.id = id; };
moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure = function (id0) { return new moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure(id0); };
var moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id = function(obj) {
     if (moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_ (obj)) {
        return obj.id;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:provided-structure-not-structure-id: not a moby-error-type:provided-structure-not-structure: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_ (obj)) {
		obj.id = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id_bang_: not a moby-error-type:provided-structure-not-structure: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure; };

var moby_dash_error_dash_type_colon_unknown_dash_module = function (path) { plt.types.Struct.call(this, "make-moby-error-type:unknown-module", [path]);this.path = path; };
moby_dash_error_dash_type_colon_unknown_dash_module.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_unknown_dash_module = function (id0) { return new moby_dash_error_dash_type_colon_unknown_dash_module(id0); };
var moby_dash_error_dash_type_colon_unknown_dash_module_dash_path = function(obj) {
     if (moby_dash_error_dash_type_colon_unknown_dash_module_question_ (obj)) {
        return obj.path;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:unknown-module-path: not a moby-error-type:unknown-module: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_unknown_dash_module_dash_path_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_unknown_dash_module_question_ (obj)) {
		obj.path = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_unknown_dash_module_dash_path_bang_: not a moby-error-type:unknown-module: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_unknown_dash_module_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_unknown_dash_module; };

var moby_dash_error_dash_type_colon_application_dash_arity = function (who,expected,observed) { plt.types.Struct.call(this, "make-moby-error-type:application-arity", [who,expected,observed]);this.who = who;
this.expected = expected;
this.observed = observed; };
moby_dash_error_dash_type_colon_application_dash_arity.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_application_dash_arity = function (id0,id1,id2) { return new moby_dash_error_dash_type_colon_application_dash_arity(id0,id1,id2); };
var moby_dash_error_dash_type_colon_application_dash_arity_dash_who = function(obj) {
     if (moby_dash_error_dash_type_colon_application_dash_arity_question_ (obj)) {
        return obj.who;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:application-arity-who: not a moby-error-type:application-arity: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_application_dash_arity_dash_expected = function(obj) {
     if (moby_dash_error_dash_type_colon_application_dash_arity_question_ (obj)) {
        return obj.expected;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:application-arity-expected: not a moby-error-type:application-arity: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_application_dash_arity_dash_observed = function(obj) {
     if (moby_dash_error_dash_type_colon_application_dash_arity_question_ (obj)) {
        return obj.observed;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:application-arity-observed: not a moby-error-type:application-arity: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_who_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_application_dash_arity_question_ (obj)) {
		obj.who = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_who_bang_: not a moby-error-type:application-arity: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_expected_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_application_dash_arity_question_ (obj)) {
		obj.expected = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_expected_bang_: not a moby-error-type:application-arity: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_observed_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_application_dash_arity_question_ (obj)) {
		obj.observed = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_observed_bang_: not a moby-error-type:application-arity: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_application_dash_arity_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_application_dash_arity; };

var moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function = function (who) { plt.types.Struct.call(this, "make-moby-error-type:application-operator-not-a-function", [who]);this.who = who; };
moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function = function (id0) { return new moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function(id0); };
var moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who = function(obj) {
     if (moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_ (obj)) {
        return obj.who;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:application-operator-not-a-function-who: not a moby-error-type:application-operator-not-a-function: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_ (obj)) {
		obj.who = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who_bang_: not a moby-error-type:application-operator-not-a-function: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function; };

var moby_dash_error_dash_type_colon_type_dash_mismatch = function (who,position,expected,observed) { plt.types.Struct.call(this, "make-moby-error-type:type-mismatch", [who,position,expected,observed]);this.who = who;
this.position = position;
this.expected = expected;
this.observed = observed; };
moby_dash_error_dash_type_colon_type_dash_mismatch.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_type_dash_mismatch = function (id0,id1,id2,id3) { return new moby_dash_error_dash_type_colon_type_dash_mismatch(id0,id1,id2,id3); };
var moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who = function(obj) {
     if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
        return obj.who;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:type-mismatch-who: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position = function(obj) {
     if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
        return obj.position;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:type-mismatch-position: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected = function(obj) {
     if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
        return obj.expected;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:type-mismatch-expected: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed = function(obj) {
     if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
        return obj.observed;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:type-mismatch-observed: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
		obj.who = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who_bang_: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
		obj.position = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position_bang_: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
		obj.expected = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected_bang_: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_type_dash_mismatch_question_ (obj)) {
		obj.observed = newVal;
           obj._fields[3] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed_bang_: not a moby-error-type:type-mismatch: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_type_dash_mismatch_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_type_dash_mismatch; };

var moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds = function (minimum,maximum,observed) { plt.types.Struct.call(this, "make-moby-error-type:index-out-of-bounds", [minimum,maximum,observed]);this.minimum = minimum;
this.maximum = maximum;
this.observed = observed; };
moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds = function (id0,id1,id2) { return new moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds(id0,id1,id2); };
var moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum = function(obj) {
     if (moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ (obj)) {
        return obj.minimum;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:index-out-of-bounds-minimum: not a moby-error-type:index-out-of-bounds: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum = function(obj) {
     if (moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ (obj)) {
        return obj.maximum;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:index-out-of-bounds-maximum: not a moby-error-type:index-out-of-bounds: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed = function(obj) {
     if (moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ (obj)) {
        return obj.observed;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:index-out-of-bounds-observed: not a moby-error-type:index-out-of-bounds: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ (obj)) {
		obj.minimum = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum_bang_: not a moby-error-type:index-out-of-bounds: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ (obj)) {
		obj.maximum = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum_bang_: not a moby-error-type:index-out-of-bounds: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ (obj)) {
		obj.observed = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed_bang_: not a moby-error-type:index-out-of-bounds: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds; };

var moby_dash_error_dash_type_colon_conditional_dash_exhausted = function () { plt.types.Struct.call(this, "make-moby-error-type:conditional-exhausted", []); };
moby_dash_error_dash_type_colon_conditional_dash_exhausted.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_conditional_dash_exhausted = function () { return new moby_dash_error_dash_type_colon_conditional_dash_exhausted(); };


var moby_dash_error_dash_type_colon_conditional_dash_exhausted_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_conditional_dash_exhausted; };

var moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error = function (reason) { plt.types.Struct.call(this, "make-moby-error-type:generic-runtime-error", [reason]);this.reason = reason; };
moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error = function (id0) { return new moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error(id0); };
var moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason = function(obj) {
     if (moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_ (obj)) {
        return obj.reason;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:generic-runtime-error-reason: not a moby-error-type:generic-runtime-error: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_ (obj)) {
		obj.reason = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason_bang_: not a moby-error-type:generic-runtime-error: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error; };

var moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error = function (reason,other_dash_locations) { plt.types.Struct.call(this, "make-moby-error-type:generic-syntactic-error", [reason,other_dash_locations]);this.reason = reason;
this.other_dash_locations = other_dash_locations; };
moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error.prototype = new plt.types.Struct();

var make_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error = function (id0,id1) { return new moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error(id0,id1); };
var moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason = function(obj) {
     if (moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_ (obj)) {
        return obj.reason;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:generic-syntactic-error-reason: not a moby-error-type:generic-syntactic-error: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations = function(obj) {
     if (moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_ (obj)) {
        return obj.other_dash_locations;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('moby-error-type:generic-syntactic-error-other-locations: not a moby-error-type:generic-syntactic-error: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_ (obj)) {
		obj.reason = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason_bang_: not a moby-error-type:generic-syntactic-error: ~s', [obj]));
     }
};

var set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations_bang_ = function(obj,newVal) {
	 if (moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_ (obj)) {
		obj.other_dash_locations = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations_bang_: not a moby-error-type:generic-syntactic-error: ~s', [obj]));
     }
};

var moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error; };

var moby_dash_error_dash_type_question_ = function(x) { return (moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_(x)||moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_(x)||moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_(x)||moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_(x)||moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_(x)||moby_dash_error_dash_type_colon_missing_dash_expression_question_(x)||moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_(x)||moby_dash_error_dash_type_colon_expected_dash_identifier_question_(x)||moby_dash_error_dash_type_colon_undefined_dash_identifier_question_(x)||moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_(x)||moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_(x)||moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_(x)||moby_dash_error_dash_type_colon_unknown_dash_module_question_(x)||moby_dash_error_dash_type_colon_application_dash_arity_question_(x)||moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_(x)||moby_dash_error_dash_type_colon_type_dash_mismatch_question_(x)||moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_(x)||moby_dash_error_dash_type_colon_conditional_dash_exhausted_question_(x)||moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_(x)||moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_(x)); };
var moby_dash_expected_colon_string = function () { plt.types.Struct.call(this, "make-moby-expected:string", []); };
moby_dash_expected_colon_string.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_string = function () { return new moby_dash_expected_colon_string(); };


var moby_dash_expected_colon_string_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_string; };

var moby_dash_expected_colon_integer = function () { plt.types.Struct.call(this, "make-moby-expected:integer", []); };
moby_dash_expected_colon_integer.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_integer = function () { return new moby_dash_expected_colon_integer(); };


var moby_dash_expected_colon_integer_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_integer; };

var moby_dash_expected_colon_natural = function () { plt.types.Struct.call(this, "make-moby-expected:natural", []); };
moby_dash_expected_colon_natural.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_natural = function () { return new moby_dash_expected_colon_natural(); };


var moby_dash_expected_colon_natural_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_natural; };

var moby_dash_expected_colon_rational = function () { plt.types.Struct.call(this, "make-moby-expected:rational", []); };
moby_dash_expected_colon_rational.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_rational = function () { return new moby_dash_expected_colon_rational(); };


var moby_dash_expected_colon_rational_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_rational; };

var moby_dash_expected_colon_real = function () { plt.types.Struct.call(this, "make-moby-expected:real", []); };
moby_dash_expected_colon_real.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_real = function () { return new moby_dash_expected_colon_real(); };


var moby_dash_expected_colon_real_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_real; };

var moby_dash_expected_colon_complex = function () { plt.types.Struct.call(this, "make-moby-expected:complex", []); };
moby_dash_expected_colon_complex.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_complex = function () { return new moby_dash_expected_colon_complex(); };


var moby_dash_expected_colon_complex_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_complex; };

var moby_dash_expected_colon_number = function () { plt.types.Struct.call(this, "make-moby-expected:number", []); };
moby_dash_expected_colon_number.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_number = function () { return new moby_dash_expected_colon_number(); };


var moby_dash_expected_colon_number_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_number; };

var moby_dash_expected_colon_boolean = function () { plt.types.Struct.call(this, "make-moby-expected:boolean", []); };
moby_dash_expected_colon_boolean.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_boolean = function () { return new moby_dash_expected_colon_boolean(); };


var moby_dash_expected_colon_boolean_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_boolean; };

var moby_dash_expected_colon_char = function () { plt.types.Struct.call(this, "make-moby-expected:char", []); };
moby_dash_expected_colon_char.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_char = function () { return new moby_dash_expected_colon_char(); };


var moby_dash_expected_colon_char_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_char; };

var moby_dash_expected_colon_symbol = function () { plt.types.Struct.call(this, "make-moby-expected:symbol", []); };
moby_dash_expected_colon_symbol.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_symbol = function () { return new moby_dash_expected_colon_symbol(); };


var moby_dash_expected_colon_symbol_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_symbol; };

var moby_dash_expected_colon_list = function () { plt.types.Struct.call(this, "make-moby-expected:list", []); };
moby_dash_expected_colon_list.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_list = function () { return new moby_dash_expected_colon_list(); };


var moby_dash_expected_colon_list_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_list; };

var moby_dash_expected_colon_vector = function () { plt.types.Struct.call(this, "make-moby-expected:vector", []); };
moby_dash_expected_colon_vector.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_vector = function () { return new moby_dash_expected_colon_vector(); };


var moby_dash_expected_colon_vector_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_vector; };

var moby_dash_expected_colon_struct = function () { plt.types.Struct.call(this, "make-moby-expected:struct", []); };
moby_dash_expected_colon_struct.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_struct = function () { return new moby_dash_expected_colon_struct(); };


var moby_dash_expected_colon_struct_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_struct; };

var moby_dash_expected_colon_box = function () { plt.types.Struct.call(this, "make-moby-expected:box", []); };
moby_dash_expected_colon_box.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_box = function () { return new moby_dash_expected_colon_box(); };


var moby_dash_expected_colon_box_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_box; };

var moby_dash_expected_colon_hash = function () { plt.types.Struct.call(this, "make-moby-expected:hash", []); };
moby_dash_expected_colon_hash.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_hash = function () { return new moby_dash_expected_colon_hash(); };


var moby_dash_expected_colon_hash_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_hash; };

var moby_dash_expected_colon_function = function () { plt.types.Struct.call(this, "make-moby-expected:function", []); };
moby_dash_expected_colon_function.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_function = function () { return new moby_dash_expected_colon_function(); };


var moby_dash_expected_colon_function_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_function; };

var moby_dash_expected_colon_something = function () { plt.types.Struct.call(this, "make-moby-expected:something", []); };
moby_dash_expected_colon_something.prototype = new plt.types.Struct();

var make_dash_moby_dash_expected_colon_something = function () { return new moby_dash_expected_colon_something(); };


var moby_dash_expected_colon_something_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof moby_dash_expected_colon_something; };

var moby_dash_expected_question_ = function(x) { return plt.Kernel.ormap(((function() {
   var _result_ = (function(args39) {
var pred_question_ = args39[0];  return plt.Kernel.apply(pred_question_,                     plt.Kernel.list([x]),                    []); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [plt.Kernel.list([(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_string_question_,(plt.types.String.makeInstance("moby-expected:string?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_integer_question_,(plt.types.String.makeInstance("moby-expected:integer?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_natural_question_,(plt.types.String.makeInstance("moby-expected:natural?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_rational_question_,(plt.types.String.makeInstance("moby-expected:rational?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_real_question_,(plt.types.String.makeInstance("moby-expected:real?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_complex_question_,(plt.types.String.makeInstance("moby-expected:complex?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_number_question_,(plt.types.String.makeInstance("moby-expected:number?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_boolean_question_,(plt.types.String.makeInstance("moby-expected:boolean?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_char_question_,(plt.types.String.makeInstance("moby-expected:char?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_symbol_question_,(plt.types.String.makeInstance("moby-expected:symbol?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_list_question_,(plt.types.String.makeInstance("moby-expected:list?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_vector_question_,(plt.types.String.makeInstance("moby-expected:vector?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_struct_question_,(plt.types.String.makeInstance("moby-expected:struct?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_box_question_,(plt.types.String.makeInstance("moby-expected:box?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_hash_question_,(plt.types.String.makeInstance("moby-expected:hash?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_function_question_,(plt.types.String.makeInstance("moby-expected:function?")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(moby_dash_expected_colon_something_question_,(plt.types.String.makeInstance("moby-expected:something?")),1,(plt.types.Rational.makeInstance(1, 1))))])]); };
        plt._MODULES["moby/runtime/error-struct"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 
plt.Kernel.invokeModule('moby/runtime/stx');;

plt.Kernel.invokeModule('moby/runtime/arity-struct');;








































 }))( function(x){return x;} );
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined"] = moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined"] = make_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_"] = moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id"] = moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id_bang_"] = set_dash_moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_boolean"] = moby_dash_expected_colon_boolean;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_boolean"] = make_dash_moby_dash_expected_colon_boolean;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_boolean_question_"] = moby_dash_expected_colon_boolean_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_integer"] = moby_dash_expected_colon_integer;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_integer"] = make_dash_moby_dash_expected_colon_integer;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_integer_question_"] = moby_dash_expected_colon_integer_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_string"] = moby_dash_expected_colon_string;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_string"] = make_dash_moby_dash_expected_colon_string;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_string_question_"] = moby_dash_expected_colon_string_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_vector"] = moby_dash_expected_colon_vector;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_vector"] = make_dash_moby_dash_expected_colon_vector;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_vector_question_"] = moby_dash_expected_colon_vector_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_question_"] = moby_dash_expected_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_symbol"] = moby_dash_expected_colon_symbol;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_symbol"] = make_dash_moby_dash_expected_colon_symbol;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_symbol_question_"] = moby_dash_expected_colon_symbol_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_struct"] = moby_dash_expected_colon_struct;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_struct"] = make_dash_moby_dash_expected_colon_struct;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_struct_question_"] = moby_dash_expected_colon_struct_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_rational"] = moby_dash_expected_colon_rational;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_rational"] = make_dash_moby_dash_expected_colon_rational;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_rational_question_"] = moby_dash_expected_colon_rational_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_real"] = moby_dash_expected_colon_real;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_real"] = make_dash_moby_dash_expected_colon_real;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_real_question_"] = moby_dash_expected_colon_real_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_something"] = moby_dash_expected_colon_something;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_something"] = make_dash_moby_dash_expected_colon_something;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_something_question_"] = moby_dash_expected_colon_something_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_natural"] = moby_dash_expected_colon_natural;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_natural"] = make_dash_moby_dash_expected_colon_natural;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_natural_question_"] = moby_dash_expected_colon_natural_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_number"] = moby_dash_expected_colon_number;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_number"] = make_dash_moby_dash_expected_colon_number;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_number_question_"] = moby_dash_expected_colon_number_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_list"] = moby_dash_expected_colon_list;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_list"] = make_dash_moby_dash_expected_colon_list;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_list_question_"] = moby_dash_expected_colon_list_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_char"] = moby_dash_expected_colon_char;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_char"] = make_dash_moby_dash_expected_colon_char;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_char_question_"] = moby_dash_expected_colon_char_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_function"] = moby_dash_expected_colon_function;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_function"] = make_dash_moby_dash_expected_colon_function;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_function_question_"] = moby_dash_expected_colon_function_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_hash"] = moby_dash_expected_colon_hash;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_hash"] = make_dash_moby_dash_expected_colon_hash;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_hash_question_"] = moby_dash_expected_colon_hash_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_complex"] = moby_dash_expected_colon_complex;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_complex"] = make_dash_moby_dash_expected_colon_complex;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_complex_question_"] = moby_dash_expected_colon_complex_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_box"] = moby_dash_expected_colon_box;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_expected_colon_box"] = make_dash_moby_dash_expected_colon_box;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_box_question_"] = moby_dash_expected_colon_box_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_undefined_dash_identifier"] = moby_dash_error_dash_type_colon_undefined_dash_identifier;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier"] = make_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_undefined_dash_identifier_question_"] = moby_dash_error_dash_type_colon_undefined_dash_identifier_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id"] = moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id_bang_"] = set_dash_moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token"] = moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token"] = make_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_"] = moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token"] = moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token_bang_"] = set_dash_moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_question_"] = moby_dash_error_dash_type_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token"] = moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token"] = make_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_"] = moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token"] = moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token_bang_"] = set_dash_moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form"] = moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form"] = make_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_"] = moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr"] = moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr_bang_"] = set_dash_moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unknown_dash_module"] = moby_dash_error_dash_type_colon_unknown_dash_module;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_unknown_dash_module"] = make_dash_moby_dash_error_dash_type_colon_unknown_dash_module;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unknown_dash_module_question_"] = moby_dash_error_dash_type_colon_unknown_dash_module_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unknown_dash_module_dash_path"] = moby_dash_error_dash_type_colon_unknown_dash_module_dash_path;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unknown_dash_module_dash_path_bang_"] = set_dash_moby_dash_error_dash_type_colon_unknown_dash_module_dash_path_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token"] = moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token"] = make_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_"] = moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type"] = moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener"] = moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer"] = moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type_bang_"] = set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener_bang_"] = set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer_bang_"] = set_dash_moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_parentheses"] = moby_dash_error_dash_type_colon_unclosed_dash_parentheses;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses"] = make_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_"] = moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener"] = moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer"] = moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener_bang_"] = set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_opener_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer_bang_"] = set_dash_moby_dash_error_dash_type_colon_unclosed_dash_parentheses_dash_closer_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression"] = moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression"] = make_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_"] = moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id"] = moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id_bang_"] = set_dash_moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch"] = moby_dash_error_dash_type_colon_type_dash_mismatch;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_type_dash_mismatch"] = make_dash_moby_dash_error_dash_type_colon_type_dash_mismatch;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_question_"] = moby_dash_error_dash_type_colon_type_dash_mismatch_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who"] = moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position"] = moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected"] = moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed"] = moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who_bang_"] = set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position_bang_"] = set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected_bang_"] = set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed_bang_"] = set_dash_moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure"] = moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure"] = make_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_"] = moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id"] = moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id_bang_"] = set_dash_moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error"] = moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error"] = make_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_"] = moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason"] = moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason_bang_"] = set_dash_moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds"] = moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds"] = make_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_"] = moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum"] = moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum"] = moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed"] = moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum_bang_"] = set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum_bang_"] = set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed_bang_"] = set_dash_moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_missing_dash_expression"] = moby_dash_error_dash_type_colon_missing_dash_expression;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_missing_dash_expression"] = make_dash_moby_dash_error_dash_type_colon_missing_dash_expression;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_missing_dash_expression_question_"] = moby_dash_error_dash_type_colon_missing_dash_expression_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_missing_dash_expression_dash_token"] = moby_dash_error_dash_type_colon_missing_dash_expression_dash_token;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_missing_dash_expression_dash_token_bang_"] = set_dash_moby_dash_error_dash_type_colon_missing_dash_expression_dash_token_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error"] = moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error"] = make_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_"] = moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason"] = moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations"] = moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason_bang_"] = set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations_bang_"] = set_dash_moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier"] = moby_dash_error_dash_type_colon_duplicate_dash_identifier;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier"] = make_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_"] = moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id"] = moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location"] = moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id_bang_"] = set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location_bang_"] = set_dash_moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_expected_dash_identifier"] = moby_dash_error_dash_type_colon_expected_dash_identifier;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_expected_dash_identifier"] = make_dash_moby_dash_error_dash_type_colon_expected_dash_identifier;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_expected_dash_identifier_question_"] = moby_dash_error_dash_type_colon_expected_dash_identifier_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed"] = moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed_bang_"] = set_dash_moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity"] = moby_dash_error_dash_type_colon_application_dash_arity;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_application_dash_arity"] = make_dash_moby_dash_error_dash_type_colon_application_dash_arity;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_question_"] = moby_dash_error_dash_type_colon_application_dash_arity_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_dash_who"] = moby_dash_error_dash_type_colon_application_dash_arity_dash_who;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_dash_expected"] = moby_dash_error_dash_type_colon_application_dash_arity_dash_expected;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_dash_observed"] = moby_dash_error_dash_type_colon_application_dash_arity_dash_observed;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_who_bang_"] = set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_who_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_expected_bang_"] = set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_expected_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_observed_bang_"] = set_dash_moby_dash_error_dash_type_colon_application_dash_arity_dash_observed_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function"] = moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function"] = make_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_"] = moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who"] = moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who_bang_"] = set_dash_moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_conditional_dash_exhausted"] = moby_dash_error_dash_type_colon_conditional_dash_exhausted;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error_dash_type_colon_conditional_dash_exhausted"] = make_dash_moby_dash_error_dash_type_colon_conditional_dash_exhausted;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_conditional_dash_exhausted_question_"] = moby_dash_error_dash_type_colon_conditional_dash_exhausted_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error"] = moby_dash_error;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["make_dash_moby_dash_error"] = make_dash_moby_dash_error;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_question_"] = moby_dash_error_question_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_location"] = moby_dash_error_dash_location;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_error_dash_type"] = moby_dash_error_dash_error_dash_type;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_location_bang_"] = set_dash_moby_dash_error_dash_location_bang_;
plt._MODULES["moby/runtime/error-struct"].EXPORTS["set_dash_moby_dash_error_dash_error_dash_type_bang_"] = set_dash_moby_dash_error_dash_error_dash_type_bang_;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/scheme-value-to-dom"]) == 'undefined') {
    plt._MODULES["moby/runtime/scheme-value-to-dom"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var _label_ = function (n) { plt.types.Struct.call(this, "make-label", [n]);this.n = n; };
_label_.prototype = new plt.types.Struct();

var make_dash_label = function (id0) { return new _label_(id0); };
var label_dash_n = function(obj) {
     if (label_question_ (obj)) {
        return obj.n;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('label-n: not a label: ~s', [obj]));
     }
};

var set_dash_label_dash_n_bang_ = function(obj,newVal) {
	 if (label_question_ (obj)) {
		obj.n = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_label_dash_n_bang_: not a label: ~s', [obj]));
     }
};

var label_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof _label_; };

var scheme_dash_value_dash_to_dash_dom_dash_sexp = function(val) { return ((function() { 

var labeled_dash_vals; 
var shared; 
var counter; 
var initialize_dash_shared_dash_hash_bang_ = function(x) { return ((function() { 

var h; 
var loop = function(x) { return (plt.Kernel.hash_dash_ref(h,x,plt.types.Logic.FALSE) ?
 (function(){plt.Kernel.hash_dash_set_bang_(shared,x,plt.types.Logic.TRUE);
return plt.Kernel._void_([]);})() :
 (plt.Kernel.string_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.number_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.boolean_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.char_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.symbol_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.list_question_(x) ?
 (function(){plt.Kernel.hash_dash_set_bang_(h,x,plt.types.Logic.TRUE);
return plt.Kernel.for_dash_each((plt.types.liftToplevelToFunctionValue(loop,(plt.types.String.makeInstance("loop")),1,(plt.types.Rational.makeInstance(1, 1)))), [x]);})() :
 (plt.Kernel.vector_question_(x) ?
 (function(){plt.Kernel.hash_dash_set_bang_(h,x,plt.types.Logic.TRUE);
return plt.Kernel.for_dash_each((plt.types.liftToplevelToFunctionValue(loop,(plt.types.String.makeInstance("loop")),1,(plt.types.Rational.makeInstance(1, 1)))), [plt.Kernel.vector_dash__greaterthan_list(x)]);})() :
 (plt.Kernel.struct_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.box_question_(x) ?
 (function(){plt.Kernel.hash_dash_set_bang_(h,x,plt.types.Logic.TRUE);
return loop(plt.Kernel.unbox(x));})() :
 (plt.Kernel.hash_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.Kernel.procedure_question_(x) ?
 plt.Kernel._void_([]) :
 (plt.types.Logic.TRUE ?
 plt.Kernel._void_([]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[5])))))))))))))); };
(function (toplevel_dash_expression_dash_show4) { 
h = plt.Kernel.make_dash_hasheq();
 })(plt.Kernel.identity)
return loop(x);
              })()); };
var _dash__greaterthan_dom = function(val) { return ((plt.Kernel.hash_dash_ref(shared,val,plt.types.Logic.FALSE)&&plt.Kernel.not(label_question_(plt.Kernel.hash_dash_ref(labeled_dash_vals,val,plt.types.Logic.FALSE)))) ?
 (function(){(function(){ 
counter = plt.Kernel.add1(counter);})();
plt.Kernel.hash_dash_set_bang_(labeled_dash_vals,val,make_dash_label(counter));
return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:SharedLabel"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:SharedLabel.label"))])])])])]),plt.Kernel.list([plt.Kernel.string_dash_append([_SHARED[6],plt.Kernel.number_dash__greaterthan_string(counter),_SHARED[7]])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:SharedLabel.item"))])])])])]),plt.Kernel.list([_dash__greaterthan_dom_star_(val,plt.types.Logic.FALSE)])])])]);})() :
 (plt.types.Logic.TRUE ?
 _dash__greaterthan_dom_star_(val,plt.types.Logic.TRUE) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[5]))); };
var _dash__greaterthan_dom_star_ = function(val, allow_dash_labeling_question_) { return ((allow_dash_labeling_question_&&label_question_(plt.Kernel.hash_dash_ref(labeled_dash_vals,val,_SHARED[8]))) ?
 ((function() { 

var a_dash_label; 
(function (toplevel_dash_expression_dash_show9) { 
a_dash_label = plt.Kernel.hash_dash_ref(labeled_dash_vals,val,_SHARED[8]); })(plt.Kernel.identity)
return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:SharedReference"))])])])])]),plt.Kernel.list([plt.Kernel.string_dash_append([_SHARED[6],plt.Kernel.number_dash__greaterthan_string(label_dash_n(a_dash_label))])])]);
              })()) :
 (plt.Kernel.string_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:String"))])])])])]),plt.Kernel.list([val])]) :
 (plt.Kernel.number_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Number"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(val)])]) :
 (plt.Kernel.boolean_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Boolean"))])])])])]),plt.Kernel.list([(val ?
 _SHARED[10] :
 _SHARED[11])])]) :
 (plt.Kernel.char_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Character"))])])])])]),plt.Kernel.list([plt.Kernel.string([val])])]) :
 (plt.Kernel.symbol_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Symbol"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(val)])]) :
 (plt.Kernel.list_question_(val) ?
 (function(){;
return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:List"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:List.lparen"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("("))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:List.keyword"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("list"))])])]),plt.Kernel.map(((function() {
   var _result_ = (function(args12) {
var x = args12[0];  return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:List.item"))])])])])]),plt.Kernel.list([_dash__greaterthan_dom(x)])]); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [val]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:List.rparen"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance(")"))])])])]);})() :
 (plt.Kernel.vector_question_(val) ?
 (function(){;
return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Vector"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Vector.lparen"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("("))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue.Vector.keyword"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("vector"))])])]),plt.Kernel.map(((function() {
   var _result_ = (function(args13) {
var x = args13[0];  return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Vector.item"))])])])])]),plt.Kernel.list([_dash__greaterthan_dom(x)])]); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [plt.Kernel.vector_dash__greaterthan_list(val)]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Vector.rparen"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance(")"))])])])]);})() :
 (plt.Kernel.struct_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Structure"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<struct>"))])]) :
 (plt.Kernel.box_question_(val) ?
 (function(){;
return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Box"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Box.lparen"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("("))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Box.keyword"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("box"))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Box.item"))])])])])]),plt.Kernel.list([_dash__greaterthan_dom(plt.Kernel.unbox(val))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Box.rparen"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance(")"))])])])]);})() :
 (plt.Kernel.hash_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Hash"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<hash>"))])]) :
 (plt.Kernel.procedure_question_(val) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:Function"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<function>"))])]) :
 (plt.types.Logic.TRUE ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("SchemeValue:DisplayedObject"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("format"))]),plt.Kernel.list([(plt.types.String.makeInstance("~a"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("val"))])])])]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[5])))))))))))))); };
(function (toplevel_dash_expression_dash_show2) { 
labeled_dash_vals = plt.Kernel.make_dash_hasheq();
shared = plt.Kernel.make_dash_hasheq();
counter = _SHARED[3];


 })(plt.Kernel.identity)
return (function(){initialize_dash_shared_dash_hash_bang_(val);
return _dash__greaterthan_dom(val);})();
              })()); };_SHARED[6] = (plt.types.String.makeInstance("#"));
_SHARED[10] = (plt.types.String.makeInstance("true"));
_SHARED[8] = plt.types.Logic.FALSE;
_SHARED[5] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[11] = (plt.types.String.makeInstance("false"));
_SHARED[7] = (plt.types.String.makeInstance("="));
_SHARED[3] = (plt.types.Rational.makeInstance(0, 1));

        plt._MODULES["moby/runtime/scheme-value-to-dom"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 

 }))( function(x){return x;} );
plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"] = scheme_dash_value_dash_to_dash_dom_dash_sexp;
  };
     }());
}

// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["moby/runtime/error-struct-to-dom"]) == 'undefined') {
    plt._MODULES["moby/runtime/error-struct-to-dom"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {},
	isInvoked: false};
    (function() {
var _SHARED = {};
var moby_dash_error_dash_struct_dash_to_dash_dom_dash_sexp = function(an_dash_error) { return ((function() { 

var embedded_dash_location; 
var error_dash_type; 
var add_dash_toplevel_dash_dom_dash_error_dash_wrapper = function(a_dash_dom) { return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error"))])])])])]),plt.Kernel.list([a_dash_dom]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.location"))])])])])]),plt.Kernel.list([Loc_dash__greaterthan_dom_dash_sexp(embedded_dash_location)])])])]); };
(function (toplevel_dash_expression_dash_show1) { 
embedded_dash_location = plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_location"](an_dash_error);
error_dash_type = plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_error_dash_type"](an_dash_error);
 })(plt.Kernel.identity)
return add_dash_toplevel_dash_dom_dash_error_dash_wrapper((plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedLexicalToken"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I saw "))]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" to start a "))]),plt.Kernel.list([plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type"](error_dash_type)]),plt.Kernel.list([(plt.types.String.makeInstance(", but no "))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("MobyLexicalToken"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer"](error_dash_type))])])]),plt.Kernel.list([(plt.types.String.makeInstance("to close it."))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedLexicalToken.type"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_type"](error_dash_type))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedLexicalToken.opener"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_opener"](error_dash_type))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedLexicalToken.closer"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_lexical_dash_token_dash_closer"](error_dash_type))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnrecognizedLexicalToken"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I saw "))]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unrecognized_dash_lexical_dash_token_dash_token"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" which I don't recognize as a program element."))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnrecognizedLexicalToken.token"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("symbol->string"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unrecognized-lexical-token-token"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("error-type"))])])])])])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnsupportedLexicalToken"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" is currently not supported."))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnsupportedLexicalToken.token"))])])])])]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_lexical_dash_token_dash_token"](error_dash_type))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnsupportedExpressionForm"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([stx_dash_to_dash_dom_dash_sexp(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" is currently not supported."))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnsupportedExpressionForm.expr"))])])])])]),plt.Kernel.list([stx_dash_to_dash_dom_dash_sexp(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unsupported_dash_expression_dash_form_dash_expr"](error_dash_type))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unclosed_dash_parentheses_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedParentheses"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I saw "))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("symbol->string"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("error-type"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance(" to start an expression, but no "))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("symbol->string"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("error-type"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("to close it."))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedParentheses.opener"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("symbol->string"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses-opener"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("error-type"))])])])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnclosedParentheses.closer"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("symbol->string"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unclosed-parentheses-closer"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("error-type"))])])])])])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_missing_dash_expression_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:MissingExpression"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I expected an expression following "))]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_missing_dash_expression_dash_token"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" but did not find one."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:DuplicateIdentifier"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The identifier "))]),plt.Kernel.list([plt.Kernel.symbol_dash__greaterthan_string(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_id"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" has been duplicated."))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:DuplicateIdentifier.secondLocation"))])])])])]),plt.Kernel.list([Loc_dash__greaterthan_dom_dash_sexp(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_duplicate_dash_identifier_dash_second_dash_location"](error_dash_type))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_expected_dash_identifier_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:ExpectedIdentifier"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I expected an identifier but received "))]),plt.Kernel.list([stx_dash_to_dash_dom_dash_sexp(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_expected_dash_identifier_dash_observed"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" instead."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_undefined_dash_identifier_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UndefinedIdentifier"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I don't know what "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_undefined_dash_identifier_dash_id"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" is; it's not defined as an input or a primitive."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:StructureIdentifierNotExpression"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The structure name "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_structure_dash_identifier_dash_not_dash_expression_dash_id"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" can't be used as an expression."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:ProvidedNameNotDefined"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The provided name "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_name_dash_not_dash_defined_dash_id"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance("is not defined in the program."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:ProvidedStructureNotStructure"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The provided name "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_provided_dash_structure_dash_not_dash_structure_dash_id"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance("is defined in the program, but is not the name of a structure."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_unknown_dash_module_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:UnknownModule"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("I see a require of the module "))]),plt.Kernel.list([plt.Kernel.list([(plt.types.Symbol.makeInstance("quasiquote")),plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("scheme-value-to-dom-sexp"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("moby-error-type:unknown-module-path"))]),plt.Kernel.list([(plt.types.Symbol.makeInstance("error-type"))])])])])])]),plt.Kernel.list([(plt.types.String.makeInstance(", but I don't yet know what this module is."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:ApplicationArity"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The function "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_dash_who"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" expects "))]),plt.Kernel.list([arity_dash_to_dash_dom_dash_sexp(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_dash_expected"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" but instead I see "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_arity_dash_observed"](error_dash_type))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:ApplicationOperatorNotAFunction"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The operator "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_application_dash_operator_dash_not_dash_a_dash_function_dash_who"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" is a value, but it isn't a function."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:TypeMismatch"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The function "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_who"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" expects"))]),plt.Kernel.list([expected_dash_value_dash_to_dash_dom_dash_sexp(plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_expected"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance("as its "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_position"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" argument, but instead I see "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_type_dash_mismatch_dash_observed"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance("."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:IndexOutOfBounds"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("The index "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_observed"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(" is not within the expected boundary ["))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_minimum"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance(", "))]),plt.Kernel.list([plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_index_dash_out_dash_of_dash_bounds_dash_maximum"](error_dash_type))]),plt.Kernel.list([(plt.types.String.makeInstance("]"))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_conditional_dash_exhausted_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:ConditionalExhausted"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("All of the questions inside a cond were false, "))]),plt.Kernel.list([(plt.types.String.makeInstance("and at least one of them has to be true."))])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:GenericRuntimeError"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_runtime_dash_error_dash_reason"](error_dash_type)])])])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_question_"](error_dash_type) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:GenericSyntacticError"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error.reason"))])])])])]),plt.Kernel.list([plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_reason"](error_dash_type)])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Error:GenericSyntacticError.otherLocations"))])])])])]),plt.Kernel.map((plt.types.liftToplevelToFunctionValue(Loc_dash__greaterthan_dom_dash_sexp,(plt.types.String.makeInstance("Loc->dom-sexp")),1,(plt.types.Rational.makeInstance(1, 1)))), [plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_error_dash_type_colon_generic_dash_syntactic_dash_error_dash_other_dash_locations"](error_dash_type)])])])]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[2]))))))))))))))))))))));
              })()); };
var Loc_dash__greaterthan_dom_dash_sexp = function(a_dash_loc) { return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Location"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Location.offset"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_offset"](a_dash_loc))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Location.line"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_line"](a_dash_loc))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Location.column"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_column"](a_dash_loc))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Location.span"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_span"](a_dash_loc))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Location.id"))])])])])]),plt.Kernel.list([plt._MODULES["moby/runtime/stx"].EXPORTS["Loc_dash_id"](a_dash_loc)])])])]); };
var stx_dash_to_dash_dom_dash_sexp = function(a_dash_stx) { return plt._MODULES["moby/runtime/scheme-value-to-dom"].EXPORTS["scheme_dash_value_dash_to_dash_dom_dash_sexp"](plt._MODULES["moby/runtime/stx"].EXPORTS["stx_dash__greaterthan_datum"](a_dash_stx)); };
var expected_dash_value_dash_to_dash_dom_dash_sexp = function(expected) { return (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_string_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:String"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<string>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_integer_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Integer"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<integer>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_natural_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Natural"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<natural>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_rational_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Rational"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<rational>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_real_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Real"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<real>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_complex_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Complex"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<complex>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_number_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Number"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<number>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_boolean_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Boolean"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<boolean>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_char_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Char"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<char>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_symbol_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Symbol"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<symbol>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_list_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:List"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<list>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_vector_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Vector"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<vector>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_struct_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Struct"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<struct>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_box_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Box"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<box>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_hash_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Hash"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<hash>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_function_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Function"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<function>"))])]) :
 (plt._MODULES["moby/runtime/error-struct"].EXPORTS["moby_dash_expected_colon_something_question_"](expected) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Expected:Something"))])])])])]),plt.Kernel.list([(plt.types.String.makeInstance("<something>"))])]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[2])))))))))))))))))); };
var arity_dash_to_dash_dom_dash_sexp = function(an_dash_arity) { return (plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_fixed_question_"](an_dash_arity) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Arity:Fixed"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_fixed_dash_n"](an_dash_arity))])]) :
 (plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable_question_"](an_dash_arity) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Arity:Variable"))])])])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Arity.Variable.minimum"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable_dash_min"](an_dash_arity))])])]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Arity.Variable.maximum"))])])])])]),plt.Kernel.list([plt.Kernel.number_dash__greaterthan_string(plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_variable_dash_max"](an_dash_arity))])])])]) :
 (plt._MODULES["moby/runtime/arity-struct"].EXPORTS["arity_colon_mixed_question_"](an_dash_arity) ?
 plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Arity:Mixed"))])])])])]),plt.Kernel.map(((function() {
   var _result_ = (function(args3) {
var a = args3[0];  return plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("span"))]),plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([plt.Kernel.append([plt.Kernel.list([(plt.types.Symbol.makeInstance("class"))]),plt.Kernel.list([(plt.types.String.makeInstance("Arity:Mixed.item"))])])])])]),plt.Kernel.list([arity_dash_to_dash_dom_dash_sexp(a)])]); });_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [])]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[2])))); };_SHARED[2] = (plt.types.String.makeInstance("cond: fell out of cond"));

        plt._MODULES["moby/runtime/error-struct-to-dom"].invoke = function() {             ((function (toplevel_dash_expression_dash_show0) { 
plt.Kernel.invokeModule('moby/runtime/arity-struct');;

plt.Kernel.invokeModule('moby/runtime/error-struct');;

plt.Kernel.invokeModule('moby/runtime/stx');;

plt.Kernel.invokeModule('moby/runtime/scheme-value-to-dom');;





 }))( function(x){return x;} );
plt._MODULES["moby/runtime/error-struct-to-dom"].EXPORTS["moby_dash_error_dash_struct_dash_to_dash_dom_dash_sexp"] = moby_dash_error_dash_struct_dash_to_dash_dom_dash_sexp;
  };
     }());
}

goog.provide('plt.Kernel');



//////////////////////////////////////////////////////////////////////
// Kernel
// Depends on types.js.
//
// FIXME: there's a circular dependency between types.js and
// kernel.js.  It hasn't bitten us yet only because the circular
// references are in functions, rather than toplevel expressions, but
// we need to be careful.


(function() {

    var NumberTower = plt.types.NumberTower;

    var MobyError = plt.types.MobyError;
    var MobyParserError = plt.types.MobyParserError;
    var MobySyntaxError = plt.types.MobySyntaxError;
    var MobyTypeError = plt.types.MobyTypeError;
    var MobyRuntimeError = plt.types.MobyRuntimeError;
    var MobyTestingError = plt.types.MobyTestingError;



    // Compatibility hack: add Array.indexOf if it doesn't exist.
    if(!Array.indexOf){
	Array.prototype.indexOf = function(obj){
	    for(var i=0; i<this.length; i++){
		if(this[i]==obj){
		    return i;
		}
	    }
	    return -1;
	}
    }
    

    // Compatibility for attaching events to nodes.
    var attachEvent = function(node, eventName, fn) {
	if (node.addEventListener) {
	    // Mozilla
	    node.addEventListener(eventName, fn, false);
	} else {
	    // IE
	    node.attachEvent('on' + eventName, fn, false);
	}
    };

    var detachEvent = function(node, eventName, fn) {
	if (node.addEventListener) {
	    // Mozilla
	    node.removeEventListener(eventName, fn, false);
	} else {
	    // IE
	    node.detachEvent('on' + eventName, fn, false);
	}
    }



    // Inheritance from pg 168: Javascript, the Definitive Guide.
    var heir = function(p) {
	var f = function() {}
	f.prototype = p;
	return new f();
    }



    //////////////////////////////////////////////////////////////////////
    // Union/find for circular equality testing.

    var UnionFind = function() {
	// this.parenMap holds the arrows from an arbitrary pointer
	// to its parent.
	this.parentMap = plt.types.makeLowLevelEqHash();
    }

    // find: ptr -> UnionFindNode
    // Returns the representative for this ptr.
    UnionFind.prototype.find = function(ptr) {
	var parent = (this.parentMap.containsKey(ptr) ? 
		      this.parentMap.get(ptr) : ptr);
	if (parent === ptr) {
	    return parent;
	} else {
	    var rep = this.find(parent);
	    // Path compression:
	    this.parentMap.put(ptr, rep);
	    return rep;
	}
    };

    // merge: ptr ptr -> void
    // Merge the representative nodes for ptr1 and ptr2.
    UnionFind.prototype.merge = function(ptr1, ptr2) {
	this.parentMap.put(this.find(ptr1), this.find(ptr2));
    };


    
    //////////////////////////////////////////////////////////////////////




    // Returns true if x is a number.
    var isNumber = plt.types.isNumber;

    var isSymbol = function(x) {
	return (x != null && x != undefined && x instanceof plt.types.Symbol);
    }

    var isChar = function(x) {
	return x != null && x != undefined && x instanceof plt.types.Char;
    }


    var isString = function(x) {
	return typeof(x) == 'string';
	//return x != null && x != undefined && x instanceof plt.types.String;
    }

    var isBoolean = function(x) {
	return (x == plt.types.Logic.TRUE || x == plt.types.Logic.FALSE);
    }

    var isPair = function(x) {
	return x != null && x != undefined && x instanceof plt.types.Cons;
    }

    var isEmpty = function(x) {
	return x != null && x != undefined && x instanceof plt.types.Empty;
    }

    var isReal = function(x) {
	return (isNumber(x) && x.isReal());

    }

    var isRational = function(x) {
	return isNumber(x) && x.isRational();
    }


    var isComplex = function(x) {
	return isNumber(x);}

    var isFunction = function(x) {
	return typeof(x) == 'function';
    }

    // Returns true if x is an integer.
    var isInteger = function(x) {
	return (isNumber(x) && x.isInteger());
    }

    var isNatural = function(x) {
	return isNumber(x) && x.isInteger() && x.toFixnum() >= 0;
    }


    // isAlphabeticString: string -> boolean
    var isAlphabeticString = function(s) {
	for(var i = 0; i < s.length; i++) {
	    if (! ((s[i] >= "a" && s[i] <= "z") ||
		   (s[i] >= "A" && s[i] <= "Z"))) {
		return false;
	    }
	}
	return true;
    }

    // isWhitespaceString: string -> boolean
    var isWhitespaceString = (function() {
	var pat = new RegExp("^\\s*$");
	return function(s) {
	    return (s.match(pat) ? true : false);
	}
    }());




    // Returns true if x is a vector
    var isVector = function(x) {
	return x != null && x != undefined && (x instanceof plt.types.Vector);
    }



    // arrayEach: (arrayof X) (X -> void) -> void
    // Apply some function on each element of the array.
    var arrayEach = function(arr, f) {
	for (var i = 0; i < arr.length; i++) {
	    f.apply(arr[i], [arr[i], i]);
	}
    }


    // Apply a chaining test on pairs of elements of the list [first, second, rest ...].
    var chainTest = function(test, first, second, rest) {
	if (! test(first, second).valueOf())
	    return false;
	if (rest.length == 0)
	    return true;
	if (! test(second, rest[0]).valueOf())
	    return false;
	for(var i = 0; i < rest.length - 1; i++) {
	    if (! test(rest[i], rest[i+1]).valueOf())
		return false;
	}
	return true;
    }
    

    // Apply a search on pairs of elements of the list [first, rest ...].
    var chainFind = function(comparator, first, rest) {
	var i;
	var best = first;
	for(i = 0; i < rest.length; i++) {
	    if (! (comparator(best, rest[i])).valueOf()) {
		best = rest[i];
	    }
	}
	return best;
    }
    

    // Returns true if x is a list.
    var isList = function(x) {
	return x != null && x != undefined && ((x instanceof plt.types.Cons) || (x instanceof plt.types.Empty));
    }


    // ordinalize: fixnum -> string
    // Adds the ordinal suffix to an fixnum, according to the rules in
    // http://en.wikipedia.org/wiki/Names_of_numbers_in_English#Ordinal_numbers
    var ordinalize = function(n) {
	var suffixes = ["th", "st", "nd", "rd", "th",
			"th", "th", "th", "th", "th"];
	if ((Math.floor(n / 10) % 10) == 1) {
	    return n + "th";
	} else {
	    return n + suffixes[n % 10];
	}
    };


    var makeTypeErrorMessage = function(functionName, typeName, position, value) {
	return plt.Kernel.format(
	    "~a: expects type <~a> as ~a argument, given: ~s",
	    [functionName, 
	     typeName,
	     ordinalize(position),
	     value]);
    }


    // Checks if x satisfies f.  If not, a MobyTypeError of msg is thrown.
    var check = function(x, f, functionName, typeName, position) {
	if (! f(x)) {
	    throw new MobyTypeError(
		makeTypeErrorMessage(functionName, typeName, position, x));
	}
    }

    // Throws exception if x is not a list.
    var checkList = function(x, functionName, position) {
	if (! isList(x)) {
	    throw new MobyTypeError(
		makeTypeErrorMessage(functionName, "list", position, x));
	}
    }

    // Checks if x is a list of f.  If not, throws a MobyTypeError of msg.
    var checkListof = function(x, f, functionName, typeName, position) {
	if (! isList(x)) {
	    throw new MobyTypeError(
		makeTypeErrorMessage(functionName, "listof " + typeName, position, x));
	}
	while (! x.isEmpty()) {
	    if (! f(x.first())) {
		throw new MobyTypeError(makeTypeErrorMessage(functionName, "listof " + typeName, position, x));
	    }
	    x = x.rest();
	}
    }


    // makeChainingComparator: (X -> boolean) string (X X (arrayof X) -> boolean) -> (X X (arrayof X) -> boolean) 
    var makeChainingComparator = function(typeCheckF, typeName, comparisonF, comparatorName) {
	return function(first, second, rest) {
	    check(first, typeCheckF, comparatorName, typeName, 1);
	    check(second, typeCheckF, comparatorName, typeName, 2);
	    arrayEach(rest, 
		      function(x, i) { check(x, typeCheckF, comparatorName, typeName, i+3) });
	    return comparisonF(first, second, rest);
	}
    }



    var makeNumericChainingComparator = function(test, comparatorName) {
	return makeChainingComparator(isNumber, "number",
				      function(first, second, rest) {
					  return chainTest(test, first, second, rest);
				      },
				      comparatorName);
    }

    var makeCharChainingComparator = function(test, comparatorName) {
	return makeChainingComparator(isChar, "char",
				      function(first, second, rest) {
					  return chainTest(test, first, second, rest);
				      },
				      comparatorName);
    }


    var makeStringChainingComparator = function(test, comparatorName) {
	return makeChainingComparator(isString, "string",
				      function(first, second, rest) {
					  return chainTest(test, first, second, rest);
				      },
				      comparatorName);
    }




    plt.Kernel = {
	
	_heir : heir,

	pi : plt.types.FloatPoint.pi,
	e : plt.types.FloatPoint.e,
	
	struct_question_: function(thing) {
	    return (thing != null && 
		    thing != undefined && 
		    thing instanceof plt.types.Struct);
	},
	
	number_question_ : function(x){
	    return isNumber(x);
	},
	
	equal_question_ : function(x, y) {
	    return plt.types.isEqual(x, y, new UnionFind());
	},


	equal_tilde__question_ : function(x, y, delta) {
	    check(delta, isNumber, "equal~?", "number", 3);
	    if (isNumber(x) && isNumber(y)) {
		return NumberTower.approxEqual(x, y, delta);
	    } else {
		return plt.types.isEqual(x, y, new UnionFind());
	    }
	},

	
	eq_question_ : function(x, y){
	    return (x == y);
	}, 
	

	eqv_question_ : function(x, y){
	    if (isNumber(x) && isNumber(y)) {
		return NumberTower.eqv(x, y);
	    } else if (isChar(x) && isChar(y)) {
		return x.getValue() == y.getValue();
	    }
	    return x === y;
	},
	

	identity : function (x){
	    return x;
	},
	
	
	cons: function(x, y) {
	    checkList(y, "cons", 2);
	    return plt.types.Cons.makeInstance(x, y);
	},
	
	first: function(thing) {
	    checkList(thing, "first", 1);
	    return thing.first();
	},
	
	rest: function(thing) {
	    checkList(thing, "rest", 1);
	    return thing.rest();
	},
	
	
	second: function(thing) {
	    checkList(thing, "second", 1);
	    return thing.rest().first();
	},
	
	third: function(thing) {
	    checkList(thing, "third", 1);
	    return thing.rest().rest().first();
	},
	
	fourth: function(thing) {
	    checkList(thing, "fourth", 1);
	    return thing.rest().rest().rest().first();
	},
	
	fifth: function(thing) {
	    checkList(thing, "fifth", 1);
	    return thing.rest().rest().rest().rest().first();
	},
	
	
	random: function(x) {
	    check(x, isInteger, "random", "integer", 1);
	    return plt.types.Rational.makeInstance(Math.floor(NumberTower.toFixnum(x) * 
							      Math.random()),
						   1);
	},
	
	current_dash_seconds: function () {
	    return plt.types.Rational.makeInstance(
		Math.floor(new Date().getTime() / 1000));
	},


	floor: function(x) {
	    check(x, isNumber, "floor", "number", 1);
	    return x.floor();
	},
	
	ceiling: function(x) {
	    check(x, isNumber, "ceiling", "number", 1);
	    return x.ceiling();
	},
	
	sqrt: function(x) {
	    check(x, isNumber, "sqrt", "number", 1);
	    return x.sqrt();
	},

	integer_dash_sqrt: function(x) {
	    check(x, isInteger, "integer-sqrt", "integer", 1);
	    var result = x.sqrt();
	    if (isRational(result)) {
		return plt.types.Rational.makeInstance(result.toFixnum());
	    } else if (isReal(result)) {
		return plt.types.Rational.makeInstance(result.toFixnum());
	    } else {

		// it must be complex.
		return plt.types.Complex.makeInstance(
		    plt.types.Rational.makeInstance
		    (plt.Kernel.real_dash_part(result).toFixnum()),
		    plt.types.Rational.makeInstance
		    (plt.Kernel.imag_dash_part(result).toFixnum()));
	    }
	},
	
	sqr: function(x) {
	    check(x, isNumber, "sqr", "number", 1);
	    return NumberTower.sqr(x);
	},
	
	sin: function(x) {
	    check(x, isNumber, "sin", "number", 1);
	    return x.sin();
	},
	
	cos: function(x) {
	    check(x, isNumber, "cos", "number", 1);
	    return x.cos();
	},
	
	modulo: function(m, n) {
	    check(m, isNumber, "modulo", "number", 1);
	    check(n, isNumber, "modulo", "number", 2);
	    return NumberTower.modulo(m, n);
	},
	
	zero_question_: function(m) {
	    check(m, isNumber, "zero?", "number", 1);
	    return NumberTower.equal(m, plt.types.Rational.ZERO);
	},
	
	
	_equal__tilde_ : function(x, y, delta) {
	    check(x, isNumber, "=~", "number", 1);
	    check(y, isNumber, "=~", "number", 2);
	    check(delta, isNumber, "=~", "number", 3);
	    return NumberTower.approxEqual(x, y, delta);
	},
	
	abs: function(x) {
	    check(x, isNumber, "abs", "number", 1);
	    return NumberTower.abs(x);
	},
	
	add1 : function(x) {
	    check(x, isNumber, "add1", "number", 1);
	    return NumberTower.add(x, plt.types.Rational.ONE);
	},
	
	
	sub1 : function(x) {
	    check(x, isNumber, "sub1", "number", 1);
	    return NumberTower.subtract(x, plt.types.Rational.ONE);
	},
	
	
	_plus_ : function(args) {
	    arrayEach(args, function(x, i) { check(x, isNumber, "+", "number", i+1) });
	    var i, sum = plt.types.Rational.ZERO;
	    for(i = 0; i < args.length; i++) {
		sum = NumberTower.add(sum, args[i]);
	    }
	    return sum;
	},
	

	_dash_ : function(first, args) {
	    check(first, isNumber, "-", "number", 1);
	    arrayEach(args, function(x, i) { check(x, isNumber, "-", "number", i+2) });
	    if (args.length == 0) {
		return NumberTower.subtract
		(plt.types.Rational.ZERO, first);
	    }
	    
	    var i, diff = first;
	    for(i = 0; i < args.length; i++) {
		diff = NumberTower.subtract(diff, args[i]);
	    }
	    return diff;
	},
	
	
	_star_ : function(args) {
	    arrayEach(args, function(x, i) { check(x, isNumber, "*", "number", i+1) });
	    var i, prod = plt.types.Rational.ONE;
	    for(i = 0; i < args.length; i++) {
		prod = NumberTower.multiply(prod, args[i]);
	    }
	    return prod;    
	},
	
	
	_slash_ : function(first, args) {
	    check(first, isNumber, "/", "number", 1);
	    arrayEach(args, function(x, i) { check(x, isNumber, "/", "number", i+2) });
	    var i, div = first;
	    if (args.length == 0) {
		return NumberTower.divide(plt.types.Rational.ONE, div);
	    } else {
		for(i = 0; i < args.length; i++) {
		    div = NumberTower.divide(div, args[i]);
		}
		return div;    
	    }
	},
	

	_equal_ : makeNumericChainingComparator(NumberTower.equal, "="),
	_greaterthan__equal_: makeNumericChainingComparator(NumberTower.greaterThanOrEqual, ">="),
	_lessthan__equal_: makeNumericChainingComparator(NumberTower.lessThanOrEqual, "<="),
	_greaterthan_: makeNumericChainingComparator(NumberTower.greaterThan, ">"),
	_lessthan_: makeNumericChainingComparator(NumberTower.lessThan, "<"),

	
	min : function(first, rest) {
	    check(first, isNumber, "min", "number", 1);
	    arrayEach(rest, function(x, i) { check(this, isNumber, "min", "number", i+2); });
	    return chainFind(NumberTower.lessThanOrEqual,
			     first, 
			     rest);
	},
	
	max : function(first, rest) {
	    check(first, isNumber, "max", "number", 1);
	    arrayEach(rest, function(x, i) { check(this, isNumber, "max", "number", i+2); });
	    return chainFind(NumberTower.greaterThanOrEqual,
			     first, 
			     rest);
	},
	

	lcm : function(first, rest) {
	    check(first, isInteger, "lcm", "number", 1);
	    arrayEach(rest, function(x, i) { check(this, isInteger, "lcm", "number", i+2); });
	    return NumberTower.lcm(first, rest);
	},

	
	gcd : function(first, rest) {
	    check(first, isInteger, "gcd", "number", 1);
	    arrayEach(rest, function(x, i) {
		check(this, isInteger, "gcd", "number", i+2); 
	    });
	    return NumberTower.gcd(first, rest);
	},

	exact_dash__greaterthan_inexact: function(x) {
	    check(x, isNumber, "exact->inexact", "number", 1);
	    return plt.types.FloatPoint.makeInstance(x.toFloat());
	},
	
	inexact_dash__greaterthan_exact: function(x) {
	    check(x, isNumber, "inexact->exact", "number", 1);
	    return NumberTower.toExact(x);
	},

	exact_question_ : function(x) {
	    check(x, isNumber, "exact?", "number", 1);
	    return x.isExact();
	},

	inexact_question_ : function(x) {
	    check(x, isNumber, "inexact?", "number", 1);
	    return ! x.isExact();
	},
	
	rational_question_ : function(x) {
	    return (isNumber(x) && x.isRational());
	},

	number_dash__greaterthan_string: function(x) {
	    check(x, isNumber, "number->string", "number", 1);
	    return plt.types.String.makeInstance(plt.types.toWrittenString(x));
	},
	
	conjugate: function(x){
	    check(x, isNumber, "conjugate", "number", 1);
	    return x.conjugate();
	},
	
	magnitude: function(x){
	    check(x, isNumber, "magnitude", "number", 1);
	    return x.magnitude();
	},
	
	log : function(x) {
	    check(x, isNumber, "log", "number", 1);
	    return x.log();
	},
	
	angle : function(x) {
	    check(x, isNumber, "angle", "number", 1);
	    return x.angle();
	},
	
	atan : function(x, args) {
	    if (args.length == 0) {
		check(x, isNumber, "atan", "number", 1);
		return x.atan();
	    } else if (args.length == 1) {
		check(x, isReal, "atan", "number", 1);
		check(args[0], isReal, "atan", "number", 2);
		return plt.types.FloatPoint.makeInstance(
		    Math.atan2(NumberTower.toFloat(x),
			       NumberTower.toFloat(args[0])));
	    } else {
		// FIXME: this should really be an error at compile time.
		throw new MobyRuntimeError(plt.Kernel.format("atan: expects 1 to 2 arguments, given ~a.", [plt.types.Rational.makeInstance(args.length)]));
	    }
	},
	
	expt : function(x, y){
	    check(x, isNumber, "expt", "number", 1);
	    check(y, isNumber, "expt", "number", 2);
	    return NumberTower.expt(x, y);
	},
	
	exp : function(x){
	    check(x, isNumber, "exp", "number", 1);
	    return x.exp();
	},
	
	acos : function(x){
	    check(x, isNumber, "acos", "number", 1);
	    return x.acos();
	},
	
	asin : function(x){
	    check(x, isNumber, "asin", "number", 1);
	    return x.asin();
	},
	
	tan : function(x){
	    check(x, isNumber, "tan", "number", 1);
	    return NumberTower.divide(x.sin(), x.cos());
	},
	
	complex_question_ : function(x){
	    return isComplex(x);
	},
	
	cosh : function(x) {
	    check(x, isNumber, "cosh", "number", 1);
	    return this._plus_([this.exp(x), this.exp(x.minus())]).half();
	},
	
	sinh : function(x) {
	    check(x, isNumber, "sinh", "number", 1);
	    return NumberTower.subtract(this.exp(x), this.exp(x.minus())).half();
	},
	
	denominator : function(x) {
	    check(x, isRational, "denominator", "rational", 1);
	    return x.denominator();
	},
	
	numerator : function(x){
	    check(x, isRational, "numerator", "rational", 1);
	    return x.numerator();
	},
	
	odd_question_ : function(x){
	    check(x, isNumber, "odd?", "number", 1);
	    return (Math.abs((x.toFixnum() % 2)) == 1);
	},
	
	even_question_ : function(x) {
	    check(x, isNumber, "even?", "number", 1);
	    return (Math.abs((x.toFixnum() % 2)) == 0);
	},
	
	positive_question_ : function(x){
	    check(x, isNumber, "positive?", "number", 1);
	    return this._greaterthan_(x, plt.types.Rational.ZERO, []);
	},
	
	negative_question_ : function(x){
	    check(x, isNumber, "negative?", "number", 1);
	    return this._lessthan_(x, plt.types.Rational.ZERO, []);
	},
	
	imag_dash_part : function(x){
	    check(x, isNumber, "imag-part", "number", 1);
	    return x.imag_dash_part();
	},
	
	real_dash_part : function(x){
	    check(x, isNumber, "real-part", "number", 1);
	    return x.real_dash_part();
	},
	

	make_dash_polar: function(r, theta) {
	    // special case: if theta is zero, just return
	    // the scalar.
	    if (NumberTower.equal(theta, plt.types.Rational.ZERO)) {
		return r;
	    }
	    var x = NumberTower.multiply(r, theta.cos());
	    var y = NumberTower.multiply(r, theta.sin());
	    return plt.types.Complex.makeInstance(x, y);
	},

	integer_question_ : function(x){
	    return (isInteger(x));
	},
	
	make_dash_rectangular : function(x, y){
	    return plt.types.Complex.makeInstance(x, y);
	},
	
	quotient : function(x, y){
	    check(x, isInteger, "quotient", "integer", 1);
	    check(y, isInteger, "quotient", "integer", 2);
	    var div = NumberTower.divide(x,y);
	    if (plt.Kernel.positive_question_(div)) {
		return plt.types.Rational.makeInstance(div.floor().toFixnum(),
						       1);
	    } else {
		return plt.types.Rational.makeInstance(div.ceiling().toFixnum(),
						       1);
	    }
	},
	
	remainder : function(x, y) {
	    check(x, isNumber, "remainder", "number", 1);
	    check(y, isNumber, "remainder", "number", 2);
	    return plt.types.Rational.makeInstance(x.toFixnum() % y.toFixnum(), 1);
	},
	

	real_question_ : function(x){
	    return isReal(x);
	},
	
	
	round : function(x){
	    check(x, isNumber, "round", "number", 1);
	    return x.round();
	},
	
	sgn : function(x){
	    check(x, isNumber, "sgn", "number", 1);
	    if (this.positive_question_(x).valueOf())
		return plt.types.Rational.ONE;
	    if (this.negative_question_(x).valueOf())
		return plt.types.Rational.NEGATIVE_ONE;
	    else
		return plt.types.Rational.ZERO;
	},
	


	boolean_equal__question_ : function(x, y){
	    check(x, isBoolean, "boolean=?", "boolean", 1);
	    check(y, isBoolean, "boolean=?", "boolean", 2);
	    return x == y;
	},
	
	boolean_question_ : function(x){
	    return isBoolean(x);
	},
	
	false_question_ : function(x){
	    return (x == plt.types.Logic.FALSE);
	},
	
	not : function(x){
	    // Restriction on x being a boolean has been weakened.
	    //check(x, isBoolean, "not", "boolean", 1);

	    if (!x || x === plt.types.Logic.FALSE)
		return plt.types.Logic.TRUE;
	    return plt.types.Logic.FALSE;

	    //return (!( x && x.valueOf() )) ? plt.types.Logic.TRUE : plt.types.Logic.FALSE;
	},
	
	symbol_dash__greaterthan_string : function(x){
	    check(x, isSymbol, "symbol->string", "symbol", 1);
	    return plt.types.String.makeInstance(x.val);
	},
	
	symbol_equal__question_ : function(x, y){
	    check(x, isSymbol, "symbol=?", "symbol", 1);
	    check(y, isSymbol, "symbol=?", "symbol", 2);
	    return (x.val == y.val);
	},
	
	symbol_question_ : function(x){
	    return isSymbol(x);
	},
	
	
	append : function(args){
	    var i;
	    for (i = 0; i < args.length; i++) {
		checkList(args[i], "append", i+1);
	    }

	    if (args.length == 0) { 
		return plt.types.Empty.EMPTY;
	    }
            var ret = args[0];
	    for (i = 1; i < args.length; i++) {
		ret = ret.append(args[i]);
	    }
	    return ret;
	},
	
	reverse : function(lst){
	    checkList(lst, "reverse", 1);
	    return plt.types.Cons.reverse(lst);
	}, 
	
	assq : function(x, lst){
	    checkList(lst, "assq", 2);
	    while (!lst.isEmpty() && !plt.Kernel.eq_question_(x, lst.first().first()))
		lst = lst.rest();
	    if (lst.isEmpty())
		return plt.types.Logic.FALSE;
	    else return lst.first();
	},
	
	caaar : function(lst){
	    checkList(lst, "caaar", 1);
	    return lst.first().first().first();
	},
	
	caadr : function(lst){
	    checkList(lst, "caadr", 1);
	    return lst.first().first().rest();
	},
	
	caar : function(lst){
	    checkList(lst, "caar", 1);
	    return lst.first().first();
	},
	
	cadar : function(lst){
	    checkList(lst, "cadar", 1);
	    return lst.first().rest().first();
	},
	
	cadddr : function(lst){
	    checkList(lst, "cadddr", 1);
	    return lst.rest().rest().rest().first();
	},
	
	caddr : function(lst){
	    checkList(lst, "caddr", 1);
	    return lst.rest().rest().first();
	},
	
	cadr : function(lst){
	    checkList(lst, "cadr", 1);
	    return lst.rest().first();
	},
	
	car : function(lst){
	    checkList(lst, "car", 1);
	    return lst.first();
	},
	
	cdaar : function(lst){
	    checkList(lst, "cdaar", 1);
	    return lst.first().first().rest();
	},
	
	cdadr : function(lst){
	    checkList(lst, "cdadr", 1);
	    return lst.rest().first().rest();
	},
	
	cdar : function(lst){
	    checkList(lst, "cdar", 1);
	    return lst.first().rest();
	},
	
	cddar : function(lst){
	    checkList(lst, "cddar", 1);
	    return lst.first().rest().rest();
	},
	
	cdddr : function(lst){
	    checkList(lst, "cdddr", 1);
	    return lst.rest().rest().rest();
	},
	
	cddr : function(lst){
	    checkList(lst, "cddr", 1);
	    return lst.rest().rest();
	},
	
	cdr : function(lst){
	    checkList(lst, "cdr", 1);
	    return lst.rest();
	},

	null_question_ : function(x){
	    return isEmpty(x);
	},
	
	empty_question_: function(x) {
	    return isEmpty(x);
	},
	
	pair_question_ : function(x){
	    return isPair(x);
	},
	
	cons_question_: function(x){
	    return isPair(x);
	},

	list_question_: function(x) {
	    return isList(x);
	},

	
	sixth : function(lst){
	    checkList(lst, "sixth", 1);
	    return lst.rest().rest().rest().rest().rest().first();
	},
	
	seventh: function(lst){
	    checkList(lst, "seventh", 1);
	    return lst.rest().rest().rest().rest().rest().rest().first();
	},
	
	eighth : function(lst){
	    checkList(lst, "eighth", 1);
	    return lst.rest().rest().rest().rest().rest().rest().rest().first();
	},

	set_dash_car_bang_ : function(lst, newVal){
	    checkList(lst, "set-car!", 1);
	    lst.f = newVal;
	    return undefined;
	},

	set_dash_cdr_bang_ : function(lst, newListVal){
	    checkList(lst, "set-cdr!", 1);
	    checkList(newListVal, "set-cdr!", 2);
	    lst.r = newListVal;
	    return undefined;
	},
	
	length : function(lst){
	    checkList(lst, "length", 1);
	    var ret = plt.types.Rational.ZERO;
	    for (; !lst.isEmpty(); lst = lst.rest()) {
		ret = plt.Kernel.add1(ret);
	    }
	    return ret;
	},
	
	list : function(items){
	    var ret = plt.types.Empty.EMPTY;
	    for (var i = items.length - 1; i >=0; i--) {
		ret = plt.types.Cons.makeInstance(items[i], ret);
	    }
	    return ret;
	},
	
	list_star_ : function(items, otherItems){
	    var lastListItem = otherItems.pop();
	    if (lastListItem == undefined || ! lastListItem instanceof plt.types.Cons) {
		throw new MobyTypeError("list*: " + lastListItem + " not a list");
	    }
	    otherItems.unshift(items);
	    return plt.Kernel.append([plt.Kernel.list(otherItems), lastListItem]);
	},
	
	list_dash_ref : function(lst, x){
	    checkList(lst, "list-ref", 1);
	    check(x, isNatural, "list-ref", "natural", 2);
	    var i = plt.types.Rational.ZERO;
	    for (; plt.Kernel._lessthan_(i, x,[]); i = plt.Kernel.add1(i)) {
		if (lst.isEmpty()) {
		    throw new MobyRuntimeError("list-ref: index too small");
		}
		else {
		    lst = lst.rest();
		}
	    }
	    return lst.first();
	},
	
	remove : function(item, lst){
	    checkList(lst, "member", 2);
	    var originalLst = lst;
	    var aUnionFind = new UnionFind();
	    var result = plt.types.Empty.EMPTY;
	    while (!lst.isEmpty()){
		if (plt.types.isEqual(item, lst.first(), aUnionFind).valueOf()) {
		    return plt.Kernel.append([plt.Kernel.reverse(result),
					     lst.rest()]);
		} else {
		    result = plt.types.Cons.makeInstance(lst.first(),
							 result);
		    lst = lst.rest();
		}
	    }
	    return originalLst;
	},

	member : function(item, lst){
	    checkList(lst, "member", 2);
	    var aUnionFind = new UnionFind();
	    while (!lst.isEmpty()){
		if (plt.types.isEqual(item, lst.first(), aUnionFind).valueOf())
		    return plt.types.Logic.TRUE;
		lst = lst.rest();
	    }
	    
	    return plt.types.Logic.FALSE;
	},

	
	memq : function(item, lst){
	    checkList(lst, "memq", 2);
	    while (!lst.isEmpty()){
		if (plt.Kernel.eq_question_(item, lst.first()).valueOf())
		    return lst;
		lst = lst.rest();
	    }
	    
	    return plt.types.Logic.FALSE;
	},
	

	memv : function(item, lst){
	    checkList(lst, "memv", 2);
	    while (!lst.isEmpty()){
		if (plt.Kernel.eqv_question_(item, lst.first()).valueOf())
		    return lst;
		lst = lst.rest();
	    }
	    
	    return plt.types.Logic.FALSE;
	},


	memf : function(testF, lst) {
	    check(testF, isFunction, "memf", "function", 1);
	    checkList(lst, "memf", 2);
	    // TODO: add contract on higher order argument testF.    
	    while (!lst.isEmpty()){
		if (testF([lst.first()])) {
		    return lst;
		}
		lst = lst.rest();
	    }
	    return plt.types.Logic.FALSE;
	},


	compose: function(functions) {
	    // TODO: add contract on higher order argument testF.
	    return plt.types.liftToplevelToFunctionValue(
		function(v) {
		    for (var i = functions.length - 1; i >= 0; i--) {
			v = plt.Kernel.apply(functions[i], 
					     plt.types.Cons.makeInstance(
						 v, plt.types.Empty.EMPTY),
					     []);
		    }
		    return v;
		},
		plt.types.String.makeInstance("composed"),
		1,
		plt.types.Rational.makeInstance(1));
	},
	

	string_dash__greaterthan_number : function(str){
	    var stxModule = plt.Kernel.invokeModule("moby/runtime/stx");
	    check(str, isString, "string->number", "string", 1);
	    try {
		var stxList = plt.reader.readSchemeExpressions(str, "");
		if (NumberTower.equal(plt.Kernel.length(stxList),
						plt.types.Rational.ONE)) {
		    var result = stxModule.EXPORTS.stx_dash_e(stxList.first());
		    if (isNumber(result)) {
			return result;
		    } else {
			return plt.types.Logic.FALSE;
		    }
		} else {
		    return plt.types.Logic.FALSE;
		}
	    } catch (e) {
		return plt.types.Logic.FALSE;
	    }
	},
	

	string_dash__greaterthan_symbol : function(str){
	    check(str, isString, "string->symbol", "string", 1);
	    return plt.types.Symbol.makeInstance(str);
	},


	string_dash__greaterthan_int: function(str) {
	    check(str, isString, "string->int", "string", 1);
	    return plt.types.Rational.makeInstance(str.toString().charCodeAt(0), 1);
	},

	
	string_dash_append : function(arr){
	    arrayEach(arr, function(x, i) { check(x, isString, "string-append", "string", i+1) });
            return plt.types.String.makeInstance(arr.join(""));
	},


	replicate: function(n, s) {
	    check(n, isNatural, "replicate", "natural", 1);
	    check(s, isString, "replicate", "string", 2);
	    var buffer = [];
	    for (var i = 0; i < n.toFixnum(); i++) {
		buffer.push(s);
	    }
	    return plt.types.String.makeInstance(buffer.join(""));
	},

	
	string_equal__question_ : makeStringChainingComparator(
	    function(x, y){return x == y;}, "string=?"),
	

	string_lessthan__equal__question_: makeStringChainingComparator(
	    function(x, y){return x <= y;}, "string<=?"),


	string_lessthan__question_: makeStringChainingComparator(
	    function(x, y){return x < y;}, "string<?"),
	

	string_greaterthan__equal__question_: makeStringChainingComparator(
	    function(x, y){return x >= y;}, "string>=?"),
	

	string_greaterthan__question_: makeStringChainingComparator(
	    function(x, y){return x > y;}, "string>?"),
	

	string_dash_ci_equal__question_ : makeStringChainingComparator(
	    function(x, y){return x.toUpperCase() == y.toUpperCase();}, "string-ci=?"),
	

	string_dash_ci_lessthan__equal__question_ : makeStringChainingComparator(
	    function(x, y){return x.toUpperCase() <= y.toUpperCase();}, "string-ci<=?"),
	

	string_dash_ci_lessthan__question_ : makeStringChainingComparator(
	    function(x, y){return x.toUpperCase() < y.toUpperCase();}, "string-ci<?"),
	

	string_dash_ci_greaterthan__question_ : makeStringChainingComparator(
	    function(x, y){return x.toUpperCase() > y.toUpperCase();}, "string-ci>?"),
	

	string_dash_ci_greaterthan__equal__question_ : makeStringChainingComparator(
	    function(x, y){return x.toUpperCase() >= y.toUpperCase();}, "string-ci>=?"),
	

	string_dash_copy : function(str){
	    check(str, isString, "string-copy", "string", 1);
	    return str.substring(0, str.length);
	},
	
	string_dash_length : function(str){
	    check(str, isString, "string-length", "string", 1);
	    return plt.types.Rational.makeInstance(str.length, 1);
	},
	
	string_dash_ref : function(str, i){
	    check(str, isString, "string-ref", "string", 1);
	    check(i, isNatural, "string-ref", "natural", 2);
	    if (i.toFixnum() >= str.length) {
		throw new MobyRuntimeError("string-ref: index >= length");
	    }
	    return plt.types.Char.makeInstance(str.charAt(i.toFixnum()));
	},

	string_dash_ith : function (str, i) {
	    check(str, isString, "string-ith", "string", 1);
	    check(i, isNatural, "string-ith", "natural", 2);
	    if (i.toFixnum() >= str.length) {
		throw new MobyRuntimeError("string-ith: index >= string length");
	    }
	    return plt.types.String.makeInstance(str.substring(i.toFixnum(), i.toFixnum()+1));
	},

	int_dash__greaterthan_string: function (i) {
	    check(i, isInteger, "int->string", "integer", 1);
	    return plt.types.String.makeInstance(String.fromCharCode(i.toFixnum()));
	},

	
	string_question_ : function(str){
	    return isString(str);
	},
	

	substring : function(str, begin, end){
	    check(str, isString, "substring", "string", 1);
	    check(begin, isNatural, "substring", "natural", 2);
	    check(end, isNatural, "substring", "natural", 3);
	    if (begin.toFixnum() > end.toFixnum()) {
		throw new MobyRuntimeError("substring: begin > end");
	    }
	    if (end.toFixnum() > str.length) {
		throw new MobyRuntimeError("substring: end > length");
	    }
	    return String.makeInstance(str.substring(begin.toFixnum(), end.toFixnum()));
	},

	char_question_: function(x) {
	    return isChar(x);
	},
	
	char_dash__greaterthan_integer : function(ch){
	    check(ch, isChar, "char->integer", "char", 1);
	    var str = new String(ch.val);
	    return plt.types.Rational.makeInstance(str.charCodeAt(0), 1);
	},
	
	integer_dash__greaterthan_char : function(n){
	    check(n, isInteger, "integer->char", "integer", 1);
	    var str = String.fromCharCode(n.toFixnum());
	    return plt.types.Char.makeInstance(str);
	},
	
	
	char_equal__question_ : makeCharChainingComparator(
	    function(x, y) { return x.val == y.val; }, "char=?"),
	
	char_lessthan__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val < y.val; }, "char<?"),
	
	
	char_lessthan__equal__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val <= y.val; }, "char<=?"),

	
	char_greaterthan__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val > y.val; }, "char>?"),
	
	char_greaterthan__equal__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val >= y.val; }, "char>=?"),
	
	char_dash_ci_equal__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val.toUpperCase() == y.val.toUpperCase(); }, "char-ci=?"),

	char_dash_ci_lessthan__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val.toUpperCase() < y.val.toUpperCase(); }, "char-ci<?"),


	char_dash_ci_lessthan__equal__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val.toUpperCase() <= y.val.toUpperCase(); }, "char-ci<=?"),
	
	char_dash_ci_greaterthan__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val.toUpperCase() > y.val.toUpperCase(); }, "char-ci>?"),

	
	char_dash_ci_greaterthan__equal__question_ : makeCharChainingComparator(
	    function(x, y){ return x.val.toUpperCase() >= y.val.toUpperCase(); }, "char-ci>=?"),
	
	
	char_dash_numeric_question_ : function(ch){
	    check(ch, isChar, "char-numeric?", "char", 1);
	    var str = ch.val;
	    return (str >= "0" && str <= "9");
	},

	char_dash_alphabetic_question_ : function(ch){
	    check(ch, isChar, "char-alphabetic?", "char", 1);
	    var str = ch.val;
	    return isAlphabeticString(str);
	},

	char_dash_whitespace_question_ : function(ch){
	    check(ch, isChar, "char-whitespace?", "char", 1);
	    var str = ch.val;
	    return isWhitespaceString(str);
	},

	char_dash_upper_dash_case_question_ : function(ch){
	    check(ch, isChar, "char-upper-case?", "char", 1);
	    return isAlphabeticString(ch.val) && ch.val.toUpperCase() == ch.val;
	},
	
	char_dash_lower_dash_case_question_ : function(ch){
	    check(ch, isChar, "char-lower-case?", "char", 1);
	    return isAlphabeticString(ch.val) && ch.val.toLowerCase() == ch.val;
	},


	char_dash_upcase : function(ch){
	    check(ch, isChar, "char-upcase", "char", 1);
	    return plt.types.Char.makeInstance(ch.val.toUpperCase());
	},

	
	char_dash_downcase : function(ch){
	    check(ch, isChar, "char-downcase", "char", 1);
	    return plt.types.Char.makeInstance(ch.val.toLowerCase());
	},
	

	
	// list->string: (listof char) -> string
	list_dash__greaterthan_string : function(lst){
	    checkListof(lst, isChar, "list->string", "char", 1);
	    var ret = "";
	    while (!lst.isEmpty()){
		ret += lst.first().val;
		lst = lst.rest();
	    }
	    return plt.types.String.makeInstance(ret);
	},

	implode: function(lst) {
	    checkListof(lst, isString, "implode", "string", 1);
	    var ret = [];
	    while (!lst.isEmpty()){
		ret.push(lst.first().toString());
		lst = lst.rest();
	    }
	    return plt.types.String.makeInstance(ret.join(""));
	},
	



	string_dash_numeric_question_: function(s) {
	    check(s, isString, "string-numeric?", "string", 1);
	    for (var i = 0 ; i < s.length; i++) {
		if (s[i] < '0' || s[i] > '9') {
		    return plt.types.Logic.FALSE;
		}
	    }
	    return plt.types.Logic.TRUE;
	},


	string_dash_alphabetic_question_: function(s) {
	    check(s, isString, "string-alphabetic?", "string", 1);
	    return isAlphabeticString(s) ? plt.types.Logic.TRUE : plt.types.Logic.FALSE;
	},


	string_dash_whitespace_question_: function(s) {
	    check(s, isString, "string-whitespace?", "string", 1);
	    return isWhitespaceString(s) ? plt.types.Logic.TRUE : plt.types.Logic.FALSE;
	},


	string_dash_upper_dash_case_question_: function(s) {
	    check(s, isString, "string-upper-case?", "string", 1);
	    return isAlphabeticString(s) && s.toUpperCase() == s;
	},


	string_dash_lower_dash_case_question_: function(s) {
	    check(s, isString, "string-lower-case?", "string", 1);
	    return isAlphabeticString(s) && s.toLowerCase() == s;
	},


	string : function(chars) {
	    arrayEach(chars, function(x, i) { check(this, isChar, "string", "char", i+1); });
	    var buffer = [];
	    for(var i = 0; i < chars.length; i++) {
		buffer.push(chars[i].val);
	    }
	    return String.makeInstance(buffer.join(""));
	},


	make_dash_string : function(n, ch){
	    check(n, isNatural, "make-string", "natural", 1);
	    check(ch, isChar, "make-string", "char", 2);
	    var ret = "";
	    var c = ch.val;
	    var i = plt.types.Rational.ZERO;
	    for (;  plt.Kernel._lessthan_(i, n, []); i = plt.Kernel.add1(i)) {
		ret += c;
	    }
	    return plt.types.String.makeInstance(ret);
	},
	
	string_dash__greaterthan_list : function(str){
	    check(str, isString, "string->list", "string", 1);
	    var s = str;
	    var ret = plt.types.Empty.EMPTY;
	    for (var i = s.length - 1; i >= 0; i--) {
		ret = plt.types.Cons.makeInstance
		(plt.types.Char.makeInstance(s.charAt(i)),
		 ret);
	    }
	    return ret;
	},


	explode: function (str) {
	    check(str, isString, "explode", "string", 1);
	    var s = str;
	    var ret = plt.types.Empty.EMPTY;
	    for (var i = s.length - 1; i >= 0; i--) {
		ret = plt.types.Cons.makeInstance
		(plt.types.String.makeInstance(s.charAt(i)),
		 ret);
	    }
	    return ret;	    
	}



	
    };
    

    plt.Kernel.isEqual = plt.types.isEqual;

    // DEBUGGING: get out all the functions defined in the kernel.
    plt.Kernel._dumpKernelSymbols = function() {
	var result = plt.types.Empty.EMPTY;
	for (var sym in plt.Kernel) {
	    if (plt.Kernel.hasOwnProperty(sym)) {
		result = plt.types.Cons.makeInstance(plt.types.Symbol.makeInstance(sym),
						     result);
	    }
	}
	return result;
    };




    //////////////////////////////////////////////////////////////////////
    // Hashtable functions


    // make-hasheq: -> hash
    plt.Kernel.make_dash_hasheq = function() {
	return new plt.types.EqHashTable();
    };


    // make-hash: -> hash
    plt.Kernel.make_dash_hash = function() {
	return new plt.types.EqualHashTable();
    };


    // plt.Kernel.hashSet: hash object value -> undefined
    // Mutates the hash with a new key/value binding.
    plt.Kernel.hash_dash_set_bang_ = function(obj, key, val) {
	check(obj, isHash, "hash-set!", "hash", 1);
	obj.hash.put(key, val);
	return undefined;
    };

    plt.Kernel.hash_dash_ref = function(obj, key, defaultVal) {
	check(obj, isHash, "hash-ref", "hash", 1);
	if (obj.hash.containsKey(key)) {
	    return obj.hash.get(key);
	} else {
	    if (isFunction(defaultVal)) {
		return defaultVal([]);
	    }
	    return defaultVal;
	}
    };
    
    plt.Kernel.hash_dash_remove_bang_ = function(obj, key) {
	check(obj, isHash, "hash-remove!", "hash", 1);
	obj.hash.remove(key);
	return undefined;
    };

    plt.Kernel.hash_dash_map = function(ht, f) {
	check(ht, isHash, "hash-map", "hash", 1);
	var result = plt.types.Empty.EMPTY;
	var keys = ht.hash.keys();
	for (var i = 0; i < keys.length; i++){
	    var val = ht.hash.get(keys[i]);
	    result = plt.Kernel.cons(f([keys[i], val]),
				     result);
	}
	return result;
    };


    plt.Kernel.hash_dash_for_dash_each = function(ht, f) {
	check(ht, isHash, "hash-for-each", "hash", 1);
	var result = plt.types.Empty.EMPTY;
	var keys = ht.hash.keys();
	for (var i = 0; i < keys.length; i++){
	    var val = ht.hash.get(keys[i]);
	    f([keys[i], val]);
	}
	return undefined;
    };

    var isHash = function(x) {
	return ((x !== null) && 
		(x !== undefined) && 
		((x instanceof plt.types.EqHashTable) || 
		 (x instanceof plt.types.EqualHashTable)));
    }
    plt.Kernel.hash_question_ = isHash;



    //////////////////////////////////////////////////////////////////////

    

    plt.Kernel.apply = function(f, secondArg, restArgs) {
	var argList;
	var argArray = [];

	check(f, isFunction, "apply", "function", 1);
	if (restArgs.length == 0) {
	    argList = secondArg;
	    checkList(argList, "apply", 2);
	    while (! argList.isEmpty()) {
		var elt = argList.first()
		argArray.push(elt);
		argList = argList.rest();
	    }	
	} else {
	    argList = restArgs.pop();
	    checkList(argList, "apply", 3);
	    while (! argList.isEmpty()) {
		var elt = argList.first()
		argArray.push(elt);
		argList = argList.rest();
	    }	
	    while(restArgs.length > 0) {
		argArray.unshift(restArgs.pop());
	    }
	    argArray.unshift(secondArg);

	}
	if (procedureArityIncludes(f, argArray.length)) {
	    return f(argArray);
	} else {
	    throw new MobyRuntimeError(
		plt.Kernel.format(
		    "~a: expects ~a, given ~a: ~s", 
		    [f,
		     procedureArityDescription(f),
		     argArray.length,
		     plt.Kernel.list(argArray)]));
	}
    };


    plt.Kernel.map = function(f, arglists) {
	check(f, isFunction, "map", "function", 1);
	arrayEach(arglists, function(x, i) { 
	    checkList(x, "map", i+2); });
	// TODO: add contract on higher order argument f.
	var results = plt.types.Empty.EMPTY;
	while (!arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    results = plt.Kernel.cons(f(args), results);
	}
	return plt.Kernel.reverse(results);
    };


    plt.Kernel.for_dash_each = function(f, arglists) {
	check(f, isFunction, "for-each", "function", 1);
	arrayEach(arglists, function(x, i) { 
	    checkList(x, "for-each", i+2); });
	// TODO: add contract on higher order argument f.
	while (!arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    f(args);
	}
	return undefined;
    };



    plt.Kernel.andmap = function(f, arglists) {
	check(f, isFunction, "andmap", "function", 1);
	arrayEach(arglists, function(x, i) { 
	    checkList(x, "andmap", i+2); });

	// TODO: add contract on higher order argument f.
	while (!arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    if (! f(args)) {
		return plt.types.Logic.FALSE;
	    }
	}

	return plt.types.Logic.TRUE;
    };



    plt.Kernel.ormap = function(f, arglists) {
	check(f, isFunction, "ormap", "function", 1);
	arrayEach(arglists, function(x, i) { 
	    checkList(x, "ormap", i+2);});
	// TODO: add contract on higher order argument f.
	while (! arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    if (f(args)) {
		return plt.types.Logic.TRUE;
	    }
	}
	return plt.types.Logic.FALSE;
    };





    plt.Kernel.filter = function(f, elts) {
	check(f, isFunction, "filter", "function", 1);
	check(elts, isList, "filter", "list", 2);
	// TODO: add contract on higher order argument f.
	var results = plt.types.Empty.EMPTY;
	while (! elts.isEmpty()) {
	    if (f([elts.first()])) {
		results = plt.types.Cons.makeInstance(elts.first(), results);
	    }
	    elts = elts.rest();
	}
	return plt.Kernel.reverse(results);
    };


    plt.Kernel.foldl = function(f, acc, arglists) {
	check(f, isFunction, "foldl", "function", 1);
	arrayEach(arglists, function(x, i) { check(x, isList, "foldl", "list", i+3)});
	// TODO: add contract on higher order argument f.
	var result = acc;
	while (!arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    args.push(result);
	    result = f(args);
	}
	return result;
    };


    plt.Kernel.foldr = function(f, acc, arglists) {
	check(f, isFunction, "foldr", "function", 1);
	arrayEach(arglists, function(x, i) { check(x, isList, "foldr", "list", i+3)});
	// TODO: add contract on higher order argument f.
	var result = acc;
	for (var i = 0; i < arglists.length; i++) {
	    arglists[i] = plt.Kernel.reverse(arglists[i]);
	}
	while (!arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    args.push(result);
	    result = f(args);
	}
	return result;
    };



    plt.Kernel.argmin = function(f, elts) {
	check(f, isFunction, "argmin", "function", 1);
	check(elts, isPair, "argmin", "nonempty list", 2);
	// TODO: add contract on higher order argument f.
	var bestSoFar = elts.first();
	var bestMetric = f([elts.first()]).toFloat();
	elts = elts.rest();

	while (! elts.isEmpty()) {
	    var nextMetric = f([elts.first()]).toFloat();
	    if (nextMetric < bestMetric) {
		bestSoFar = elts.first();
		bestMetric = nextMetric;
	    }
	    elts = elts.rest();
	}
	return bestSoFar;
    };


    plt.Kernel.argmax = function(f, elts) {
	check(f, isFunction, "argmax", "function", 1);
	check(elts, isPair, "argmax", "nonempty list", 2);
	// TODO: add contract on higher order argument f.
	var bestSoFar = elts.first();
	var bestMetric = f([elts.first()]).toFloat();
	elts = elts.rest();

	while (! elts.isEmpty()) {
	    var nextMetric = f([elts.first()]).toFloat();
	    if (nextMetric > bestMetric) {
		bestSoFar = elts.first();
		bestMetric = nextMetric;
	    }
	    elts = elts.rest();
	}
	return bestSoFar;
    };






    plt.Kernel.sort = function(l, cmpF) {
	check(l, isList, "sort", "list", 1);
	check(cmpF, isFunction, "sort", "function", 2);

	// TODO: add contract on higher order argument cmpF.
	var arr = [];
	while(!l.isEmpty()) {
	    arr.push(l.first());
	    l = l.rest();
	}
	arr.sort(function(x, y) { return cmpF([x, y]) ? -1 : 1; });
	return plt.Kernel.list(arr);
    };

    plt.Kernel.quicksort = plt.Kernel.sort;



    plt.Kernel.build_dash_list = function(n, f) {
	check(n, isNatural, "build-list", "natural", 1);
	check(f, isFunction, "build-list", "function", 2);

	// TODO: add contract on higher order argument f.
	var result = plt.types.Empty.EMPTY;
	for(var i = 0; i < n.toFixnum(); i++) {
	    result = plt.Kernel.cons(f([plt.types.Rational.makeInstance(i, 1)]),
				     result);
	}
	return plt.Kernel.reverse(result);
    };


    plt.Kernel.build_dash_string = function(n, f) {
	check(n, isNatural, "build-string", "natural", 1);
	check(f, isFunction, "build-string", "function", 2);

	// TODO: add contract on higher order argument f.
	var chars = [];
	for(var i = 0; i < n.toFixnum(); i++) {
	    var ch = f([plt.types.Rational.makeInstance(i, 1)]);
	    //	    check(ch, isChar, "char");
	    chars.push(ch.val);
	}
	return plt.types.String.makeInstance(chars.join(""));
    };




    plt.Kernel.format = function(formatStr, args) {
	check(formatStr, isString, "format", "string", 1);
	var pattern = new RegExp("~[sSaAn%~]", "g");
	var buffer = args;
	function f(s) {
	    if (s == "~~") {
		return "~";
	    } else if (s == '~n' || s == '~%') {
		return "\n";
	    } else if (s == '~s' || s == "~S") {
		if (buffer.length == 0) {
		    throw new MobyRuntimeError(
			"format: fewer arguments passed than expected");
		}
		return plt.types.toWrittenString(buffer.shift());
	    } else if (s == '~a' || s == "~A") {
		if (buffer.length == 0) {
		    throw new MobyRuntimeError(
			"format: fewer arguments passed than expected");
		}
		return plt.types.toDisplayedString(buffer.shift());
	    } else {
		throw new MobyRuntimeError("Unimplemented format " + s);
	    }
	}
	var result = plt.types.String.makeInstance(formatStr.replace(pattern, f));
	if (buffer.length > 0) {
	    throw new MobyRuntimeError("format: More arguments passed than expected");
	}
	return result;
    }


    // args: arrayof plt.types.Char
    plt.Kernel.string = function(args) {
	arrayEach(args, function(x, i) { check(x, isChar, "string", "char", i+1)});
	var vals = [];
	for(var i = 0; i < args.length; i++) {
	    vals.push(args[i].getValue());
	}
	return plt.types.String.makeInstance(vals.join(""));
    };

    


    plt.Kernel.procedure_question_ = function(f) {
	return isFunction(f);
    };
    

    plt.Kernel.procedure_dash_arity = function(f) {
	check(f, isFunction, "procedure-arity", "function", 1);
	return f.procedureArity;
    };


    // procedureArityIncludes: function fixnum -> boolean
    // Returns true if the procedure arity of f includes n; false otherwise.
    var procedureArityIncludes = function(f, n) {
	if (isPair(f.procedureArity)) {
	    return n >= f.procedureArity.rest().first().toFixnum();
	} else {
	    return n == f.procedureArity.toFixnum();
	}
    };
    
    // procedureArityDescription: function -> string
    var procedureArityDescription = function(f) {
	if (isPair(f.procedureArity)) {
	    return ("at least " + 
		    (f.procedureArity.rest().first().toFixnum() == 1) ? 
		    "one argument" : 
		    f.procedureArity.rest().first().toFixnum() + " arguments");
	} else {
	    return ((f.procedureArity.toFixnum() == 1) ? 
		    "one argument" : f.procedureArity.toFixnum() + " arguments");
	}
    };


    plt.Kernel.xml_dash__greaterthan_s_dash_exp  = function(s) {
	check(s, isString, "xml->s-exp", "string", 1);
	if (s.length == 0) { 
	    return plt.types.String.makeInstance(""); 
	}
	var xmlDoc;
	try {
	    //Internet Explorer
	    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	    xmlDoc.async="false";
	    xmlDoc.loadXML(s);
	    // FIXME: check parse errors
	}
	catch(e) {
	    var parser=new DOMParser();
	    xmlDoc=parser.parseFromString(s, "text/xml");
	    // FIXME: check parse errors
	}

	var parseAttributes = function(attrs) {
	    var result = plt.types.Empty.EMPTY;
	    for (var i = 0; i < attrs.length; i++) {
		var keyValue= plt.types.Cons.makeInstance(
		    plt.types.Symbol.makeInstance(attrs.item(i).nodeName),
		    plt.types.Cons.makeInstance(
			attrs.item(i).nodeValue,
			plt.types.Empty.EMPTY));
		result = plt.types.Cons.makeInstance(keyValue, result);
	    }
	    return plt.types.Cons.makeInstance(
		plt.types.Symbol.makeInstance("@"),
		plt.Kernel.reverse(result));
	};

	var parse = function(node) {
	    if (node.nodeType == Node.ELEMENT_NODE) {
		var result = plt.types.Empty.EMPTY;
		var child = node.firstChild;
		while (child != null) {
		    var nextResult = parse(child);
		    if (isString(nextResult) && 
			!result.isEmpty() &&
			isString(result.first())) {
			result = plt.types.Cons.makeInstance(result.first() + nextResult,
							     result.rest());
		    } else {
			result = plt.types.Cons.makeInstance(nextResult, result);
		    }
		    child = child.nextSibling;
		}
		result = plt.Kernel.reverse(result);
		result = plt.types.Cons.makeInstance(
		    parseAttributes(node.attributes),
		    result);
		result = plt.types.Cons.makeInstance(
		    plt.types.Symbol.makeInstance(node.nodeName),
		    result);
		return result;
	    } else if (node.nodeType == Node.TEXT_NODE) {
		return node.textContent;
	    } else if (node.nodeType == Node.CDATA_SECTION_NODE) {
		return node.data;
	    } else {
		return plt.types.Empty.EMPTY;
	    }
	};
	var result = parse(xmlDoc.firstChild);
	return result;
    };

    plt.Kernel.split_dash_whitespace = function(s) {
	s = s.replace(/^\s+/, "");
	s = s.replace(/\s+$/, "");
	return plt.Kernel.list(s.split(/\s+/));
    };
    


    //////////////////////////////////////////////////////////////////////
    // Boxes

    plt.Kernel.box = function(any) {
	return new plt.types.Box(any);
    };
    
    plt.Kernel.unbox = function(obj) {
	check(obj, plt.Kernel.box_question_, "unbox", "box", 1);
	return obj.unbox();
    };
    
    plt.Kernel.box_question_ = function(obj) {
	return obj != null && obj != undefined && obj instanceof plt.types.Box ;
    };

    plt.Kernel.set_dash_box_bang_ = function(obj, newVal) {
	check(obj, plt.Kernel.box_question_, "set-box!", "box", 1);
	obj.set(newVal);
	return undefined;
    };
    
    //////////////////////////////////////////////////////////////////////

    
    // Posns
    
    var posn = function(x,y) { 
	plt.types.Struct.call(this, "make-posn", [x, y]);
    }

    posn.prototype = heir(plt.types.Struct.prototype);

    var make_dash_posn = function(id0,id1) { 
	return new posn(id0,id1); 
    }

    var posn_dash_x = function(obj) { 
	check(obj, posn_question_, "posn-x", "posn", 1);
	return obj._fields[0]; 
    }

    var posn_dash_y = function(obj) { 
	check(obj, posn_question_, "posn-y", "posn", 1);
	return obj._fields[1]; 
    }

    var posn_question_ = function(obj) { 
        return obj != null && obj != undefined && obj instanceof posn ; 
    }
    
    plt.Kernel.make_dash_posn = make_dash_posn;
    plt.Kernel.posn_question_ = posn_question_;
    plt.Kernel.posn_dash_x = posn_dash_x;
    plt.Kernel.posn_dash_y = posn_dash_y;
    
    

    plt.Kernel.error = function(name, msg) {
	check(name, isSymbol, "error", "symbol", 1);
	check(msg, isString, "error", "string", 2);
	throw new MobyRuntimeError(plt.Kernel.format("~a: ~a", [name, msg]).toString());
    };





    // reportError: (or exception string) -> void
    // Reports an error to the user, either at the console
    // if the console exists, or as alerts otherwise.
    plt.Kernel.reportError = function(e) {
	var reporter;
	if (typeof(console) != 'undefined' && 
	    typeof(console.log) != 'undefined') {
	    reporter = (function(x) { console.log(x); });
	} else {
	    reporter = (function(x) { alert(x); });
	}
	if (typeof e == 'string') {
	    reporter(e);
	} else if (e.msg) {
	    reporter(e.msg);
	} else {
	    reporter(e.toString());
	}
	if (plt.Kernel.lastLoc) {
	    var loc = plt.Kernel.lastLoc;
	    if (typeof(loc) === 'string') {
		reporter("Error was raised around " + loc);
	    } else if (typeof(loc) !== 'undefined' &&
		       typeof(loc.line) !== 'undefined') {
		reporter("Error was raised around: "
			 + plt.Kernel.locToString(loc));
	    }
	}
    };



    plt.Kernel._void_ = function(args) {
	return undefined;
    };





    plt.Kernel.build_dash_vector = function(n, f) {
	check(n, isNatural, "build-vector", "natural", 1);
	check(f, isFunction, "build-vector", "function", 2);
	var elts = [];
	for(var i = 0; i < n.toFixnum(); i++) {
	    elts[i] = f([plt.types.Rational.makeInstance(i, 1)])
	}
	return plt.types.Vector.makeInstance(n.toFixnum(),
					     elts);
    };

    plt.Kernel.make_dash_vector = function(n, args) {
	check(n, isNatural, "make-vector", "natural", 1);
	// FIXME: not quite right.  We need mixed arity function definition.
	check(args, function(x) { return x.length == 0 || x.length == 1}, "make-vector", "at most two", 2);
	var len = n.toFixnum();
	var i;
	var result = plt.types.Vector.makeInstance(len);
	if (args.length == 1) {
	    for (i = 0; i < len; i++) {
		result.set(i, args[0]);
	    }
	}
	return result;
    };

    plt.Kernel.vector = function(args) {
	return plt.types.Vector.makeInstance(args.length, args);
    };

    plt.Kernel.vector_dash_length = function(vec) {
	check(vec, isVector, "vector-length", "vector", 1);
	return plt.types.Rational.makeInstance(vec.length());
    };

    plt.Kernel.vector_dash__greaterthan_list = function(vec) {
	check(vec, isVector, "vector->list", "vector", 1);
	return vec.toList();
    };


    plt.Kernel.vector_dash_ref = function(vec, k) {
	check(vec, isVector, "vector-ref", "vector", 1);
	check(k, function(x) { return isNatural(x) && x.toFixnum() < vec.length()}, "vector-ref", "natural < vector length", 2);
	return vec.ref(k.toFixnum());
    };

    plt.Kernel.vector_dash_set_bang_ = function(vec, k, v) {
	check(vec, isVector, "vector-set!", "vector", 1);
	check(k, function(x) { return isNatural(x) && x.toFixnum() < vec.length()}, "vector-set!", "natural < vector length", 2);
	return vec.set(k.toFixnum(), v);
    };

    plt.Kernel.vector_question_ = function(x) {
	return isVector(x) ? plt.types.Logic.TRUE : plt.types.Logic.FALSE;
    }



    plt.Kernel.check_dash_expect = function(testThunk, expectedThunk) {
	var val = testThunk([]);
	var expectedVal = expectedThunk([]);
	if (! plt.Kernel.equal_question_(val, expectedVal)) {
	    throw new MobyTestingError(
		plt.Kernel.format("~s doesn't match the expected value ~s",
				  [val, expectedVal]));
	}
    };

    plt.Kernel.EXAMPLE = plt.Kernel.check_dash_expect;


    plt.Kernel.check_dash_within = function(testThunk, expectedThunk, boundsThunk) {
	var val = testThunk([]);
	var expectedVal = expectedThunk([]);
	var boundsVal = boundsThunk([]);
	if (! plt.Kernel._equal__tilde_(val, expectedVal, boundsVal)) {
	    throw new MobyTestingError(
		plt.Kernel.format("~s doesn't match the expected value ~s within ~s",
				  [val, expectedVal, boundsVal]));
	}
    };

    plt.Kernel.check_dash_error = function(testThunk, msgThunk) {
	var msg = msgThunk([]);
	var val;
	try {
	    val = testThunk([]);
	} catch (e) {
	    if (! plt.Kernel.equal_question_(e.msg, msg)) {
		throw new MobyTestingError(
		    plt.Kernel.format(
			"check-error encountered the error ~s instead of the expected error ~s.",
			[e.msg, msg]));
	    } else {
		return;
	    }
	}
	throw new MobyTestingError(
	    plt.Kernel.format(
		"check-error expected the error ~s, but instead received the value ~s.",
		[msg, val]))
    };




    plt.Kernel.undefined_question_ = function(x) {
	return x === undefined;
    };



    // As a program runs, the lastLoc will be assigned to the last location
    // we've evaluated in the program.
    plt.Kernel.lastLoc = undefined;
    plt.Kernel.setLastLoc = function(locHash) {
	if (locHash === undefined) {
	    plt.Kernel.lastLoc = undefined;
	    return true;
	}
	plt.Kernel.lastLoc = locHash;
	return true;
    }

    plt.Kernel.locToString = function(lastLoc) {
	if (typeof(lastLoc) === 'string') {
	    return lastLoc;
	} else if (typeof(lastLoc) === 'undefined') {
	    return "undefined";
	} else {
	    return ("offset=" + lastLoc.offset
		    + ", line=" + lastLoc.line
		    + ", column=" + lastLoc.column
		    + ", span=" + lastLoc.span
		    + ", id=" + lastLoc.id);
	}
    };
    


    plt.Kernel.printf = function(formatStr, args) {
	var msg = plt.Kernel.format(formatStr, args);
	plt.Kernel.printHook(msg);
	return undefined;
    }

    plt.Kernel.printHook = function(str) {
    };



    // Throws an exception upward.
    plt.Kernel.raise = function(thing) {
	throw thing;
    }




    // invokeModule: module-name -> module
    // Make sure a module has been invoked.
    // Modules live in plt._MODULES[name].
    // Returns the invoked module.
    plt.Kernel.invokeModule = function(moduleName) {
	// FIXME!  Do something here to load the module, if it hasn't
	// already been loaded.  (Look at how goog.require and
	// goog.writeScriptTags work.)
	var aModule = plt._MODULES[moduleName];
	if (! aModule.isInvoked) {
	    aModule.isInvoked = true;
	    aModule.invoke();
	}
	return aModule;
    }



    //////////////////////////////////////////////////////////////////////



    // Expose the predicates.
    plt.Kernel.isSymbol = isSymbol;
    plt.Kernel.isChar = isChar;
    plt.Kernel.isString = isString;
    plt.Kernel.isBoolean = isBoolean;
    plt.Kernel.isPair = isPair;
    plt.Kernel.isEmpty = isEmpty;
    plt.Kernel.isReal = isReal;
    plt.Kernel.isRational = isRational;
    plt.Kernel.isComplex = isComplex;
    plt.Kernel.isInteger = isInteger;
    plt.Kernel.isNatural = isNatural;
    plt.Kernel.isNumber = isNumber;
    plt.Kernel.isAlphabeticString = isAlphabeticString;
    plt.Kernel.isWhitespaceString = isWhitespaceString;
    plt.Kernel.isList = isList;
    plt.Kernel.isVector = isVector;
    plt.Kernel.isFunction = isFunction;
    

    plt.Kernel.arrayEach = arrayEach;

    // Expose the runtime type checkers.
    plt.Kernel.check = check;
    plt.Kernel.checkList = checkList;
    plt.Kernel.checkListof = checkListof;


    // Expose the error classes.
    plt.Kernel.MobyError = plt.types.MobyError;
    plt.Kernel.MobyParserError = plt.types.MobyParserError;
    plt.Kernel.MobySyntaxError = plt.types.MobySyntaxError;
    plt.Kernel.MobyTypeError = plt.types.MobyTypeError;
    plt.Kernel.MobyRuntimeError = plt.types.MobyRuntimeError;
    plt.Kernel.MobyTestingError = plt.types.MobyTestingError;



    plt.Kernel.attachEvent = attachEvent;
    plt.Kernel.detachEvent = detachEvent;


    plt.Kernel.ordinalize = ordinalize;

    
})();

// Depends on types.js, stx.js
goog.provide('plt.reader');


(function(){

    var stxModule = plt.Kernel.invokeModule("moby/runtime/stx");
    var Loc = stxModule.EXPORTS.Loc;
    var make_dash_stx_colon_list = stxModule.EXPORTS.make_dash_stx_colon_list;
    var make_dash_stx_colon_atom = stxModule.EXPORTS.make_dash_stx_colon_atom;
    var stx_dash_loc = stxModule.EXPORTS.stx_dash_loc;

    var Loc_dash_offset = stxModule.EXPORTS.Loc_dash_offset;
    var Loc_dash_line = stxModule.EXPORTS.Loc_dash_line;
    var Loc_dash_column = stxModule.EXPORTS.Loc_dash_column;
    var Loc_dash_offset = stxModule.EXPORTS.Loc_dash_offset;
    var Loc_dash_span = stxModule.EXPORTS.Loc_dash_span;


    var num = plt.types.Rational.makeInstance;


    // replaceEscapes: string -> string
    var replaceEscapes = function(s) {
	return s.replace(/\\./g, function(match, submatch, index) {
	    switch(match) {
	    case '\\b': return "\b";
	    case '\\f': return "\f";
	    case '\\n': return "\n";
	    case '\\r': return "\r";
	    case '\\t': return "\t";
	    case '\\v': return "\v";
	    default:
		return match.substring(1);
	    }
	    // FIXME: add more escape sequences.
	});
    }

    var countLines = function(s) {
	var i;
	var c = 0;
	for(i = 0; i < s.length; i++) {
	    if (s[i] == '\n') { 
		c++; 
	    }
	}
	return c;
    }


    var computeColumn = function(s, col) {
	var i;
	for(i = 0; i < s.length; i++) {
	    if (s[i] == '\n') { 
		col = 0; 
	    } else {
		col++;
	    }
	}
	return col;
    }


    var delimiter = "[\\s\\\(\\\)\\\[\\\]\\\{\\\}\\\"\\\,\\\'\\\`\\\;]";
    var nondelimiter = "[^\\s\\\(\\\)\\\[\\\]\\\{\\\}\\\"\\\,\\\'\\\`\\\;]";


    var numberHeader = ("(?:(?:\\d+\\/\\d+)|"+
			(  "(?:(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+)(?:[eE][+\\-]?\\d+)?)|")+
			(  "(?:\\d+(?:[eE][+\\-]?\\d+)?))"));


    var PATTERNS = [['whitespace' , /^(\s+)/],
		    ['#;', /^([#][;])/],
		    ['comment' , // piped comments
		     new RegExp("^([#][|]"+
				"(?:(?:\\|[^\\#])|[^\\|])*"+
				"[|][#])")],
		    ['comment' , /(^;[^\n]*)/],
		    ['(' , /^(\(|\[|\{)/],
		    [')' , /^(\)|\]|\})/],
		    ['\'' , /^(\')/],
		    ['`' , /^(`)/],
		    [',@' , /^(,@)/],
		    [',' , /^(,)/],
		    ['char', /^\#\\(newline|backspace)/],
		    ['char', /^\#\\(.)/],
		    ['string' , new RegExp("^\"((?:([^\\\\\"]|(\\\\.)))*)\"")],
		    ['symbol-or-number', new RegExp("^(" + nondelimiter + "+)")]
		    ];


    var numberPatterns = [['complex' , new RegExp("^((?:(?:\\#[ei])?[+\\-]?" + numberHeader +")?"
						  + "(?:[+\\-]" + numberHeader + ")i$)")],
			  ['number' , /^((?:\#[ei])?[+-]inf.0)$/],
			  ['number' , /^((?:\#[ei])?[+-]nan.0)$/],
			  ['number' , new RegExp("^((?:\\#[ei])?[+\\-]?" + numberHeader + "$)")]];
	

    var tokenize = function(s, source) {

	var offset = 0;
	var line = 1;
	var column = 0;
	var tokens = [];

	if (! source) { source = ""; }
	
	while (true) {
	    var shouldContinue = false;
	    for (var i = 0; i < PATTERNS.length; i++) {
		var patternName = PATTERNS[i][0];
		var pattern = PATTERNS[i][1]
		var result = s.match(pattern);
		if (result != null) {
		    var wholeMatch = result[0];
		    var tokenText = result[1];
		    if (patternName == 'string') {
			tokenText = replaceEscapes(tokenText);
		    } 
		    if (patternName == "symbol-or-number") {
			var isNumber = false;
			for (var j = 0; j < numberPatterns.length; j++) {
			    var numberMatch = tokenText.match(numberPatterns[j][1]);
			    if (numberMatch) {
				tokens.push([numberPatterns[j][0], 
					     tokenText,
					     new Loc(num(offset),
						     num(line),
						     num(column),
						     num(wholeMatch.length), 
						     source)]);
				isNumber = true;
				break;
			    }
			}
			if (! isNumber) {
			    tokens.push(["symbol", 
					 tokenText,
					 new Loc(num(offset),
						 num(line),
						 num(column),
						 num(wholeMatch.length), 
						 source)]);
			}
		    } else if (patternName != 'whitespace' && patternName != 'comment') {
			tokens.push([patternName, 
				     tokenText,
				     new Loc(num(offset),
					     num(line),
					     num(column),
					     num(wholeMatch.length), 
					     source)]);
		    }

		    offset = offset + wholeMatch.length;
		    column = computeColumn(wholeMatch, column);
		    line = line + countLines(wholeMatch);
		    s = s.substring(wholeMatch.length);
		    shouldContinue = true;
		    break;
		}
	    }
	    if (! shouldContinue) {
		break;
	    }
	}
	return [tokens, s];
    }


    // readSchemeExpressions: string string -> (listof stx)
    var readSchemeExpressions = function(s, source) {
	var makeList = make_dash_stx_colon_list;
	var makeAtom = make_dash_stx_colon_atom;
	var stxLoc = stx_dash_loc;

	var tokensAndError = tokenize(s, source);
	var tokens = tokensAndError[0];

	var lastToken = undefined;

	if (tokensAndError[1].length > 0) {
	    throw new plt.types.MobyParserError(
		"Error while tokenizing: the rest of the stream is: " +
		    tokensAndError[1],
		new Loc(num(s.length - tokensAndError[1].length),
			num(countLines(s.substring(0, s.length - tokensAndError[1].length))),
			num(computeColumn(s.substring(0, s.length - tokensAndError[1].length), 0)),
			num(tokensAndError[1].length),
			source));
	}
	
	var quoteSymbol = plt.types.Symbol.makeInstance("quote");
	var quasiquoteSymbol = plt.types.Symbol.makeInstance("quasiquote");
	var unquoteSymbol = plt.types.Symbol.makeInstance("unquote");
	var unquoteSplicingSymbol = plt.types.Symbol.makeInstance("unquote-splicing");
	var empty = plt.types.Empty.EMPTY;

	var isType = function(type) {
	    return (tokens.length > 0 && tokens[0][0] == type);
	}
	
	var eat = function(expectedType) {
	    if (tokens.length == 0) {
		if (lastToken) { 
		    throw new plt.types.MobyParserError(
			"token stream exhausted while trying to eat " +
			    expectedType,
			lastToken[2]);
		} else {
		    throw new plt.types.MobyParserError(
			"token stream exhausted while trying to eat " +
			    expectedType,
			new Loc(num(0), 
				num(0), 
				num(0),
				num(s.length), 
				source));
		}
	    }
	    var t = tokens.shift();
	    lastToken = t;
	    if (t[0] == expectedType) {
		return t;
	    } else {
		throw new plt.types.MobyParserError(
		    "Unexpected token " + t,
		    t[2]);
	    }
	}


	// NOTE: we define things in this funny way because of a bug in 
	// Firefox 3.5.1 that says the error "can't access optimized closure"
	var readExpr;
	var readExprs;
	var readQuoted;

	readQuoted = function(quoteChar, quoteSymbol) {
	    var leadingQuote = eat(quoteChar);
	    var quoted = readExpr();
	    return makeList(plt.types.Cons.makeInstance(
		makeAtom(quoteSymbol, leadingQuote[2]),
		plt.types.Cons.makeInstance(quoted, empty)),
			    new Loc(Loc_dash_offset(leadingQuote[2]),
				    Loc_dash_line(leadingQuote[2]),
				    Loc_dash_column(leadingQuote[2]),
				    (plt.types.NumberTower.add(plt.types.NumberTower.subtract(Loc_dash_offset(stxLoc(quoted)),
											      Loc_dash_offset(leadingQuote[2])),
							       Loc_dash_span(stxLoc(quoted)))),
				    source));
	};

	var getParenRShape = function(lparen) {
	    switch(lparen) {
	    case '(': return ')';
	    case '[' : return ']';
	    case '{' : return '}';
	    default: throw new Error();
	    }
	}



	// parseBasicNumber: string -> plt.types.Number
	// Reads a non-complex number.
	var parseBasicNumber = function(text, isExact) {
	    var rationalMatch = text.match(/([+\-]?\d+)\/(\d+)/);
	    if (text == '+inf.0') {
		return plt.types.FloatPoint.makeInstance(Number.POSITIVE_INFINITY);
	    } else if (text == '-inf.0') {
		return plt.types.FloatPoint.makeInstance(Number.NEGATIVE_INFINITY);
	    } else if (text == "+nan.0" || text == '-nan.0') {
		return plt.types.FloatPoint.makeInstance(Number.NaN);
	    } else if (text.match(/[eE]/)) {
		return plt.types.FloatPoint.makeInstance(parseFloat(text));
	    } else if (text.match(/\./)) {
		if (isExact) {
		    var decimalMatch = text.match("^(.*)[.](.*)$");
		    var whole = plt.types.Rational.makeInstance(parseInt(decimalMatch[1] || "0") || 0);
		    if (decimalMatch[1].match(/-/)) {
			return plt.types.NumberTower.subtract(whole,
			  plt.types.Rational.makeInstance(
			      parseInt(decimalMatch[2]), 
			      Math.pow(10, decimalMatch[2].length)));
		    } else {
			return plt.types.NumberTower.add(whole,
			  plt.types.Rational.makeInstance(
			      parseInt(decimalMatch[2]), 
			      Math.pow(10, decimalMatch[2].length)));
		    }
		} else {
		    return plt.types.FloatPoint.makeInstance(parseFloat(text));
		}
	    } else if (rationalMatch) {
		if (isExact) {
		    return plt.types.Rational.makeInstance(parseInt(rationalMatch[1]),
							   parseInt(rationalMatch[2]));
		} else {
		    return plt.types.FloatPoint.makeInstance(parseInt(rationalMatch[1])/
							     parseInt(rationalMatch[2]));
		}
	    } else {
		if (isExact) {
		    return plt.types.Rational.makeInstance(parseInt(text), 1);
		} else {
		    return plt.types.FloatPoint.makeInstance(parseInt(text));
		}
	    }
	};


	// readExpr: -> stx
	readExpr = function() {
	    if (tokens.length == 0) {
		if (lastToken) { 
		    throw new plt.types.MobyParserError(
			"Parse broke with empty token stream",
			lastToken[2]);
		} else {
		    throw new plt.types.MobyParserError(
			"Parse broke with empty token stream",
			new Loc(num(0), num(0), num(0), num(s.length), source));
		}
	    }

	    switch(tokens[0][0]) {

	    case '(': 
		var lparen = eat('(');
		var lshape = lparen[1];
		var rshape = getParenRShape(lparen[1]);
		var result = readExprs();
		if (tokens.length == 0) {
		    throw new plt.types.MobyParserError(
			"Expected a " + rshape + " to close " + lshape,
			lparen[2]);
		} else if (tokens[0][1] != rshape) {
		    throw new plt.types.MobyParserError(
			"Expected a " + rshape + " to close " + lshape,
			tokens[0][2]);
		}
		var rparen = eat(')');
		return makeList(
		    result,
		    new Loc(Loc_dash_offset(lparen[2]),
			    Loc_dash_line(lparen[2]),
			    Loc_dash_column(lparen[2]),
			    plt.types.NumberTower.add(plt.types.NumberTower.subtract(Loc_dash_offset(rparen[2]), Loc_dash_offset(lparen[2])), plt.types.Rational.ONE),
			    source));

	    case '#;':
		var hashcomment = eat('#;');
		var skippingExpr = readExpr();
		return readExpr();
		
	    case '\'':
		return readQuoted("'", quoteSymbol);

	    case '`':
		return readQuoted("`", quasiquoteSymbol);

	    case ',':
		return readQuoted(",", unquoteSymbol);

	    case ',@':
		return readQuoted(",@", unquoteSplicingSymbol);


	    case 'number':
		var t = eat('number');
		var exactnessMatch = t[1].match(/^(\#[ie])(.+)$/);
		if (exactnessMatch) {
		    if (exactnessMatch[1] == "#i") {
			return makeAtom(parseBasicNumber(exactnessMatch[2], false),
					t[2]);
		    } else {
			return makeAtom(parseBasicNumber(exactnessMatch[2], true),
					t[2]);
		    }
		} else {
		    return makeAtom(parseBasicNumber(t[1], true),
				    t[2]);
		}

	    case 'complex':
		var t = eat('complex');
		var complexMatch = t[1].match(/^((?:\#[ei])?)([+\-]?(?:\d+\/\d+|\d+\.\d+|\d+\.|\.\d+|\d+)?)([+\-](?:\d+\/\d+|\d+\.\d+|\d+\.|\.\d+|\d+))i/);
		var exactness = (complexMatch[1] == "#i" ? false : true);
		var a = (complexMatch[2] != "" ?
			 parseBasicNumber(complexMatch[2], exactness) :
			 plt.types.Rational.ZERO);
		var b = parseBasicNumber(complexMatch[3], exactness);
		// FIXME: Complex needs to be changed so it takes in either
		// exact or inexact basic values.
	        var newAtom = makeAtom(plt.types.Complex.makeInstance(a, b));
  	        return newAtom;

	    case 'string':
		var t = eat('string');
		return makeAtom(plt.types.String.makeInstance(t[1]),
				t[2]);
	    case 'char':
		var t = eat('char');
		if (t[1] == 'newline') {
		    return makeAtom(plt.types.Char.makeInstance('\n'), t[2]);
		} else if (t[1] == 'backspace') {
		    // FIXME: add more character constants.
		    // See: http://docs.plt-scheme.org/reference/reader.html#%28idx._%28gentag._172._%28lib._scribblings/reference/reference..scrbl%29%29%29
		    return makeAtom(plt.types.Char.makeInstance(String.fromCharCode(8)), t[2]);
		} else {
		    return makeAtom(plt.types.Char.makeInstance(t[1]), t[2]);
		}

	    case 'symbol':
		var t = eat('symbol');
		if (t[1] == '.') {
		    throw new plt.types.MobyParserError
		    ("Dotted pairs are not currently accepted by Moby", t[2]);
		}
		return makeAtom(plt.types.Symbol.makeInstance(t[1]), t[2]);

	    default:
		throw new plt.types.MobyParserError
		("Parse broke with token stream " + tokens, 
		 tokens[0][2]);
	    }
	};



	// readExprs: (listof stx)
	readExprs = function() {
	    var result = plt.types.Empty.EMPTY;
	    while (true) {
		if (tokens.length == 0 || isType(')')) {
		    break;
		} else if (isType('#;')){
		    eat('#;');
		    var skippingExpr = readExpr();
		} else {
		    var nextElt = readExpr();
		    result = plt.types.Cons.makeInstance(nextElt, result);
		}
	    }
	    return plt.types.Cons.reverse(result);
	};
	

	var result = readExprs();
	if (tokens.length > 0) {
	    throw new plt.types.MobyParserError
	    ("More elements in the program's token stream than expected: "+
	     "the next unconsumed token is: "  + tokens[0][1],
	     tokens[0][2])
	}
	return result;
    }
    



    // provides:
    plt.reader.tokenize = tokenize;
    plt.reader.readSchemeExpressions = readSchemeExpressions;
}());

goog.provide('plt.world.effects');


// Hooks to define each of the side-effects of each Effect defined by
// moby/runtime/effect-struct.


(function() {

    var E = plt.Kernel.invokeModule("moby/runtime/effect-struct").EXPORTS;

    var effect_colon_none =
	E['effect_colon_none'];

    var effect_colon_beep =
	E['effect_colon_beep'];

    var effect_colon_play_dash_dtmf_dash_tone =
	E['effect_colon_play_dash_dtmf_dash_tone'];

    var effect_colon_send_dash_sms = 
	E['effect_colon_send_dash_sms'];

    var effect_colon_play_dash_sound = 
	E['effect_colon_play_dash_sound'];

    var effect_colon_pause_dash_sound = 
	E['effect_colon_pause_dash_sound'];

    var effect_colon_stop_dash_sound = 
	E['effect_colon_stop_dash_sound'];

    var effect_colon_set_dash_sound_dash_volume = 
	E['effect_colon_set_dash_sound_dash_volume'];

    var effect_colon_raise_dash_sound_dash_volume = 
	E['effect_colon_raise_dash_sound_dash_volume'];

    var effect_colon_lower_dash_sound_dash_volume = 
	E['effect_colon_lower_dash_sound_dash_volume'];

    var effect_colon_set_dash_wake_dash_lock = 
	E['effect_colon_set_dash_wake_dash_lock'];

    var effect_colon_release_dash_wake_dash_lock = 
	E['effect_colon_release_dash_wake_dash_lock'];

    var effect_colon_pick_dash_playlist = 
	E['effect_colon_pick_dash_playlist'];

    var effect_colon_pick_dash_random = 
	E['effect_colon_pick_dash_random'];



    // The rest of the code here extends the structure type of each
    // effect with a run() method.  This is used in plt.world.Kernel.applyEffect.

    effect_colon_none.prototype.run = function() {
	// Do nothing.
    };

    effect_colon_beep.prototype.run = function() {
	plt.platform.Platform.getInstance().getSoundService().beep();
    };

    effect_colon_play_dash_dtmf_dash_tone.prototype.run = function() {
	plt.platform.Platform.getInstance().getSoundService().playDtmfTone(
	    plt.types.NumberTower.toFixnum(this._fields[0]),
	    plt.types.NumberTower.toFixnum(this._fields[1]));
    };

    effect_colon_send_dash_sms.prototype.run = function() {
	plt.platform.Platform.getInstance().getSmsService().send(
	    this._fields[0], this._fields[1]);
    };

    effect_colon_play_dash_sound.prototype.run = function() {
	if (plt.Kernel.isString(this._fields[0])) {
	    plt.platform.Platform.getInstance().getSoundService().playSoundUrl(
		this._fields[0]);
	} else if (playlist_dash_sound_question_(this._fields[0])) {
	    plt.platform.Platform.getInstance().getSoundService().playPlaylist(
		this._fields[0]._fields[0]);
	}
    };

    effect_colon_pause_dash_sound.prototype.run = function() {
	if (plt.Kernel.isString(this._fields[0])) {
	    plt.platform.Platform.getInstance().getSoundService().pauseSoundUrl(
		this._fields[0]);
	} else if (playlist_dash_sound_question_(this._fields[0])) {
	    plt.platform.Platform.getInstance().getSoundService().pausePlaylist(
		this._fields[0]._fields[0]);
	}
    };

    effect_colon_stop_dash_sound.prototype.run = function() {
	if (plt.Kernel.isString(this._fields[0])) {
	    plt.platform.Platform.getInstance().getSoundService().stopSoundUrl(
		this._fields[0]);
	} else if (playlist_dash_sound_question_(this._fields[0])) {
	    plt.platform.Platform.getInstance().getSoundService().stopPlaylist(
		this._fields[0]._fields[0]);
	}
    };

    effect_colon_set_dash_sound_dash_volume.prototype.run = function() {
	plt.platform.Platform.getInstance().getSoundService().setVolume(
	    plt.types.NumberTower.toFixnum(this._fields[0]));
    };

    effect_colon_raise_dash_sound_dash_volume.prototype.run = function() {
	plt.platform.Platform.getInstance().getSoundService.raiseVolume();
    };

    effect_colon_lower_dash_sound_dash_volume.prototype.run = function() {
	plt.platform.Platform.getInstance().getSoundService.lowerVolume();
    };

    effect_colon_set_dash_wake_dash_lock.prototype.run = function() {
	plt.platform.Platform.getInstance().getPowerService().setWakeLock(
	    plt.types.NumberTower.toFixnum(this._fields[0]));
    };

    effect_colon_release_dash_wake_dash_lock.prototype.run = function() {
	plt.platform.Platform.getInstance().getPowerService().releaseWakeLock();
    };

    effect_colon_pick_dash_playlist.prototype.run = function() {
	var updater = this._fields[0];
	var callback = function(playlist) {
	    var playlistSound = make_dash_playlist_dash_sound(playlist);
	    setTimeout(function() {
		var changeWorld = plt.world.config.CONFIG.lookup("changeWorld");
		changeWorld(function(w) {
		    return updater([w, playlistSound]);
		});
	    }, 0);
	}
	plt.platform.Platform.getInstance().getPickPlaylistService().pickPlaylist(callback);
    };

    effect_colon_pick_dash_random.prototype.run = function() {
	var aRandomNumber =
	    plt.types.Rational.makeInstance(
		Math.floor(plt.types.NumberTower.toFixnum(this._fields[0]) * 
			   Math.random()),
		1);
	var callback = this._fields[1];
	return function(w) { return callback([w, aRandomNumber]) }
    };

}());
// depends on kernel.js

goog.provide('plt.world.config');
goog.require('plt.Kernel');


(function() {

    var make_dash_effect_colon_none =
	(plt.Kernel.invokeModule("moby/runtime/effect-struct")
	 .EXPORTS.make_dash_effect_colon_none);




    // augment: hash hash -> hash
    // Functionally extend a hashtable with another one.
    var augment = function(o, a) {
	var oo = {};
	for (var e in o) {
	    if (o.hasOwnProperty(e)) {
		oo[e] = o[e];
	    }
	}
	for (var e in a) {
	    if (a.hasOwnProperty(e)) {
		oo[e] = a[e];
	    }
	}
	return oo;
    }



    var WorldConfig = function() {
	// The following handler values are initially false until they're updated
	// by configuration.
      
	// A handler is a function:
	//     handler: world X Y ... -> Z


	this.vals = {
	    // changeWorld: (world -> world) -> void
	    // When called, this will update the world based on the
	    // updater passed to it.
	    changeWorld: false,

	    // shutdownWorld: -> void
	    // When called, this will shut down the world computation.
	    shutdownWorld: false,

	    // initialEffect: effect
	    // The initial effect to invoke when the world computation
	    // begins.
	    initialEffect: false,


	    // onRedraw: world -> scene
	    onRedraw: false,

	    // onDraw: world -> (sexpof dom)
	    onDraw: false,

	    // onDrawCss: world -> (sexpof css-style)
	    onDrawCss: false,


	    // tickDelay: number
	    tickDelay: false,
	    // onTick: world -> world
	    onTick: false,
	    // onTickEffect: world -> effect
	    onTickEffect: false,

	    // onKey: world key -> world
	    onKey: false,
	    // onKeyEffect: world key -> effect
	    onKeyEffect : false,

	    // onTilt: world number number number -> world
	    onTilt: false,
	    // onTiltEffect: world number number number -> effect
	    onTiltEffect: false,

	    // onAcceleration: world number number number -> world
	    onAcceleration: false,
	    // onAccelerationEffect: world number number number -> effect
	    onAccelerationEffect: false,

	    // onShake: world -> world
	    onShake: false,
	    // onShakeEffect: world -> effect
	    onShakeEffect: false,

	    // onLocationChange: world number number -> world
	    onLocationChange : false,
	    // onLocationChangeEffect: world number number -> effect
	    onLocationChangeEffect: false,


	    // onAnnounce: world string X ... -> world
	    onAnnounce: false,
	    // onAnnounce: world string X ... -> effect
	    onAnnounceEffect: false,

	    // stopWhen: world -> boolean
	    stopWhen: false,
	    // stopWhenEffect: world -> effect
	    stopWhenEffect: false,



	    //////////////////////////////////////////////////////////////////////
	    // For universe game playing

	    // connectToGame: string
	    // Registers with some universe, given an identifier
	    // which is a URL to a Universe server.
	    connectToGame: false,
	    onGameStart: false,
	    onOpponentTurn: false,
	    onMyTurn: false,
	    afterMyTurn: false,
	    onGameFinish: false
	};
    }

  
    // WorldConfig.lookup: string -> handler
    // Looks up a value in the configuration.
    WorldConfig.prototype.lookup = function(key) {
	plt.Kernel.check(key, plt.Kernel.isString, "WorldConfig.lookup", "string", 1);
	if (key in this.vals) {
	    return this.vals[key];
	} else {
	    throw Error("Can't find " + key + " in the configuration");
	}
    }
  


    // WorldConfig.updateAll: (hashof string handler) -> WorldConfig
    WorldConfig.prototype.updateAll = function(aHash) {
	var result = new WorldConfig();
	result.vals = augment(this.vals, aHash);
	return result;
    }

  
    plt.world.config.WorldConfig = WorldConfig;

    // The following global variable CONFIG is mutated by either
    // big-bang from the regular world or the one in jsworld.
    plt.world.config.CONFIG = new WorldConfig();


    // A handler is a function that consumes a config and produces a
    // config.


    //////////////////////////////////////////////////////////////////////

    var getNoneEffect = function() {
	return make_dash_effect_colon_none();
    }



    //////////////////////////////////////////////////////////////////////


    var addStringMethods = function(f, name) {
	f.toWrittenString = function(cache) { return "(" + name + " ...)"; }
	f.toDisplayedString = f.toWrittenString;
	return f;
    }


    plt.world.config.Kernel = plt.world.config.Kernel || {};
    plt.world.config.Kernel.onRedraw = function(f) {
	plt.Kernel.check(f, plt.Kernel.isFunction, "on-redraw", "function", 1);
	return addStringMethods(
	    function(config) {
		return config.updateAll({'onRedraw': f});
	    }, "on-redraw");
    };



    plt.world.config.Kernel.initialEffect = function(effect) {
	// FIXME: add check for effect type.
	return addStringMethods(
	    function(config) {
		return config.updateAll({'initialEffect': effect});
	    }, "initial-effect");
    }


    plt.world.config.Kernel.onDraw = function(domHandler, styleHandler) {
	plt.Kernel.check(domHandler, plt.Kernel.isFunction, "on-draw", "function", 1);
	plt.Kernel.check(styleHandler, plt.Kernel.isFunction, "on-draw", "function", 2);
	return addStringMethods(
	    function(config) {
		return config.updateAll({onDraw: domHandler,
					 onDrawCss : styleHandler});
	    }, "on-draw");
    };


    plt.world.config.Kernel.onTick = function(aDelay, f) {
	plt.Kernel.check(aDelay, plt.Kernel.isNumber, "on-tick", "number", 1);
	plt.Kernel.check(f, plt.Kernel.isFunction, "on-tick", "function", 2);
	return plt.world.config.Kernel.onTick_star_(aDelay, 
						    f,
						    function(w) { 
							return getNoneEffect(); });
    };

    plt.world.config.Kernel.onTick_star_ = function(aDelay, handler, effectHandler) {
	plt.Kernel.check(aDelay, plt.Kernel.isNumber, "on-tick!", "number", 1);
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-tick!", "function", 2);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-tick!","function", 3);
	return addStringMethods(
	    function(config) {
		var newVals = { onTick: handler,
				onTickEffect: effectHandler,
				tickDelay: (plt.types.NumberTower.toFixnum(
				    plt.types.NumberTower.multiply(
					plt.types.Rational.makeInstance(1000, 1), 
					aDelay)))
			      };
		return config.updateAll(newVals);
	    }, "on-tick");
    };

  
    plt.world.config.Kernel.onTilt = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-tilt", "function", 1);
	return plt.world.config.Kernel.onTilt_star_(handler, 
						    function(w, a, p, r) { 
							return getNoneEffect(); });
    };

    plt.world.config.Kernel.onTilt_star_ = function(handler, effectHandler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-tilt!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-tilt!", "function", 2);
	return addStringMethods(
	    function(config) {
		return config.updateAll({onTilt : handler,
					 onTiltEffect : effectHandler});
	    }, "on-tilt");
    };



    plt.world.config.Kernel.onAnnounce = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-announce", "function", 1);
	return plt.world.config.Kernel.onAnnounce_star_(handler, 
							function(w, eventName, vals) { 
							    return getNoneEffect(); });
    };

    plt.world.config.Kernel.onAnnounce_star_ = function(handler, effectHandler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-announce!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-announce!", "function", 2);
	return addStringMethods(
	    function(config) {
		return config.updateAll({onAnnounce : handler,
					 onAnnounceEffect : effectHandler});
	    }, "on-announce");
    };



    plt.world.config.Kernel.onAcceleration = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-acceleration", "function", 1);
	return plt.world.config.Kernel.onAcceleration_star_(handler, 
							    function(w, a, p, r) { 
								return getNoneEffect(); });
    };

    plt.world.config.Kernel.onAcceleration_star_ = function(handler, effectHandler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-acceleration!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-acceleration!", "function", 2);
	return addStringMethods(
	    function(config) {
		return config.updateAll({onAcceleration : handler,
					 onAccelerationEffect : effectHandler});
	    }, "on-acceleration");
    };


    plt.world.config.Kernel.onShake = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-shake", "function", 1);
	return plt.world.config.Kernel.onShake_star_(handler, 
						     function(w, a, p, r) { 
							 return getNoneEffect(); });
    };

    plt.world.config.Kernel.onShake_star_ = function(handler, effectHandler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-shake!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-shake!", "function", 2);
	return addStringMethods(
	    function(config) {
		return config.updateAll({onShake : handler,
					 onShakeEffect : effectHandler});
	    }, "on-shake");
    };



    plt.world.config.Kernel.onKey = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-key", "function", 1);
	return plt.world.config.Kernel.onKey_star_(handler,
						   function(w, k) {
						       return getNoneEffect(); });
    };

    plt.world.config.Kernel.onKey_star_ = function(handler, effectHandler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-key!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-key!", "function", 2);
	return addStringMethods(
	    function(config) {
		return config.updateAll({onKey : handler,
					 onKeyEffect: effectHandler});
	    }, "on-key");
    };


    plt.world.config.Kernel.onLocationChange = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-location-change", "function", 1);
	return plt.world.config.Kernel.onLocationChange_star_(handler,
							      function(w, latitude, longitude) {
								  return getNoneEffect(); });
    }

    plt.world.config.Kernel.onLocationChange_star_ = function(handler, effectHandler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "on-location-change!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "on-location-change!", "function", 2);

	return addStringMethods(
	    function(config) {
		return config.updateAll({onLocationChange: handler,
					 onLocationChangeEffect: effectHandler});
	    }, "on-location-change");
    }



    plt.world.config.Kernel.stopWhen = function(handler) {
	plt.Kernel.check(handler, plt.Kernel.isFunction, "stop-when", "function", 1);
	return plt.world.config.Kernel.stopWhen_star_(handler,
						      function(w) {
							  return getNoneEffect(); });
    };


    plt.world.config.Kernel.stopWhen_star_ = function(stopHandler, effectHandler) {
	plt.Kernel.check(stopHandler, plt.Kernel.isFunction, "stop-when!", "function", 1);
	plt.Kernel.check(effectHandler, plt.Kernel.isFunction, "stop-when!", "function", 2);

	return addStringMethods(
	    function(config) {
		return config.updateAll({'stopWhen': stopHandler,
					 'stopWhenEffect' : effectHandler});
	    }, "stop-when");
    };


    // makeSimplePropertyUpdater: (string (X -> boolean) string string) -> (X -> handler)
    var makeSimplePropertyUpdater = function(propertyName,
					     propertyPredicate,
					     propertyTypeName,
					     updaterName) {
	return function(val) {
	    plt.Kernel.check(val, propertyPredicate, updaterName, propertyTypeName, 1);
	    return addStringMethods(
		function(config) {
		    return config.updateAll({propertyName: val });
		}, updaterName);
	}
    };

    // connects to the game
    plt.world.config.Kernel.connect_dash_to_dash_game = 
	makeSimplePropertyUpdater('connectToGame',
				  plt.Kernel.isString,
				  "string",
				  "connect-to-game");


    // Registers a handler for game-start events.
    plt.world.config.Kernel.on_dash_game_dash_start = 
	makeSimplePropertyUpdater('onGameStart',
				  plt.Kernel.isFunction,
				  "function",
				  "on-game-start");


    // Registers a handler for opponent-turn events.
    plt.world.config.Kernel.on_dash_opponent_dash_turn = 
	makeSimplePropertyUpdater('onOpponentTurn',
				  plt.Kernel.isFunction,
				  "function",
				  "on-opponent-turn");


    // Registers a handler for my turn.
    plt.world.config.Kernel.on_dash_my_dash_turn = 
	makeSimplePropertyUpdater('onMyTurn',
				  plt.Kernel.isFunction,
				  "function",
				  "on-my-turn");

    // Register a handler after I make a move.
    plt.world.config.Kernel.after_dash_my_dash_turn = 
	makeSimplePropertyUpdater('afterMyTurn',
				  plt.Kernel.isFunction,
				  "function",
				  "after-my-turn");

    plt.world.config.Kernel.on_dash_game_dash_finish = 
	makeSimplePropertyUpdater('onGameFinish',
				  plt.Kernel.isFunction,
				  "function",
				  "on-game-finish");




})();

// Feeds stimuli inputs into the world.
goog.provide('plt.world.stimuli');

(function() {
    var stimuli = {}
    plt.world.stimuli = stimuli;


    // doStimuli: (world -> effect) (world -> world) -> void
    //
    // Processes a stimuli by compute the effect and applying it, and
    // computing a new world to replace the old.
    var doStimuli = function(computeEffectF, computeWorldF, restArgs) {
	var effectUpdaters = [];
	try {
	    change(function(w) {
		var args = [w].concat(restArgs);
		if (computeEffectF) {
		    var effect = computeEffectF(args);
		    effectUpdaters = applyEffect(effect);
		}    
		if (computeWorldF) {
		    return computeWorldF(args);
		} else {
		    return w;
		}
	    });
	    
	    for (var i = 0; i < effectUpdaters.length; i++) {
		change(effectUpdaters[i]);
	    }
	} catch (e) { 
	    stimuli.onShutdown();
	}
    }


    // Orientation change
    stimuli.onTilt = function(azimuth, pitch, roll) {
	var onTilt = lookup("onTilt");
	var onTiltEffect = lookup("onTiltEffect");
	doStimuli(onTiltEffect, 
		  onTilt,
		  [flt(azimuth), flt(pitch), flt(roll)]);
    };


    // Accelerations
    stimuli.onAcceleration = function(x, y, z) {
	var onAcceleration = lookup('onAcceleration');
	var onAccelerationEffect = lookup('onAccelerationEffect');
	doStimuli(onAccelerationEffect, onAcceleration, [flt(x), flt(y), flt(z)]);
    };


    // Shakes
    stimuli.onShake = function() {
	var onShake = lookup('onShake');
	var onShakeEffect = lookup('onShakeEffect');
	doStimuli(onShakeEffect, onShake, []);
    };



    // Locations
    stimuli.onLocation = function(lat, lng) {
	var onLocationChange = lookup('onLocationChange');
	var onLocationChangeEffect = lookup('onLocationChangeEffect');
	doStimuli(onLocationChangeEffect, onLocationChange, [flt(lat), flt(lng)]);
    };



    // Keystrokes
    stimuli.onKey = function(e) {
	// getKeyCodeName: keyEvent -> String
	// Given an event, try to get the name of the key.
	var getKeyCodeName = function(e) {
	    var code = e.charCode || e.keyCode;
	    var keyname;
	    if (code == 37) {
		keyname = "left";
	    } else if (code == 38) {
		keyname = "up";
	    } else if (code == 39) {
		keyname = "right";
	    } else if (code == 40) {
		keyname = "down";
	    } else if (code == 32) {
		keyname = "space";
	    } else if (code == 13) {
		keyname = "enter";
	    } else {
		keyname = String.fromCharCode(code); 
	    }
	    return keyname;
	}
	var keyname = getKeyCodeName(e);
	var onKey = lookup('onKey');
	var onKeyEffect = lookup('onKeyEffect');
	doStimuli(onKeyEffect, onKey, [keyname]);
    };



    // Time ticks
    stimuli.onTick = function() {
	var onTick = lookup('onTick');
	var onTickEffect = lookup('onTickEffect');
	doStimuli(onTickEffect, onTick, []);
    };



    // Announcements
    stimuli.onAnnounce = function(eventName, vals) {
	var valsList = plt.types.Empty.EMPTY;
	for (var i = 0; i < vals.length; i++) {
	    valsList = plt.types.Cons.makeInstance(vals[vals.length - i - 1], valsList);
	}

	var onAnnounce = lookup('onAnnounce');
	var onAnnounceEffect = lookup('onAnnounceEffect');	
	doStimuli(onAnnounce, onAnnounceEffect, [eventName, valsList]);
    };



    // The shutdown stimuli: special case that forces a world computation to quit.
    stimuli.onShutdown = function() {	
	var shutdownWorld = lookup('shutdownWorld');
	if (shutdownWorld) {
	    shutdownWorld();
	}
    }




    //////////////////////////////////////////////////////////////////////
    // Helpers
    var flt = plt.types.FloatPoint.makeInstance;
    
    var lookup = function(k) {
	return plt.world.config.CONFIG.lookup(k);
    }

    var change = function(f) {
	if (lookup('changeWorld')) {
	    lookup('changeWorld')(f);
	}
    }

    // applyEffect: compound-effect: (arrayof (world -> world))
    var applyEffect = function(e) {
	return plt.world.Kernel.applyEffect(e);
    }

    //////////////////////////////////////////////////////////////////////

})();
goog.provide('plt.platform');


(function() { 
    plt.platform.Platform = {};
    
    var _platformSingleton = false;
    plt.platform.Platform.getInstance = function() {
	if(! _platformSingleton) {
	    _platformSingleton = new JavascriptPlatform();
	}
	
    	return _platformSingleton;
    };
    
    var JavascriptPlatform = function() {
    	this.tiltService = JavascriptTiltService;
	this.shakeService = chooseShakeService();
    	this.locationService = chooseLocationService();
	this.telephonyService = chooseTelephonyService();
	this.networkService = chooseNetworkService();
	this.soundService = chooseSoundService();
	this.powerService = choosePowerService();
	this.smsService = chooseSmsService();
	this.pickPlaylistService = choosePickPlaylistService();
    };
    
    JavascriptPlatform.prototype.getTiltService = function() {
	return this.tiltService;
    };

    JavascriptPlatform.prototype.getShakeService = function() {
	return this.shakeService;
    };

    JavascriptPlatform.prototype.getLocationService = function() {
	return this.locationService;
    };

    JavascriptPlatform.prototype.getTelephonyService = function() {
	return this.telephonyService;
    };

    JavascriptPlatform.prototype.getNetworkService = function() {
	return this.networkService;
    };

    JavascriptPlatform.prototype.getSoundService = function() {
	return this.soundService;
    };
    
    JavascriptPlatform.prototype.getPowerService = function() {
	return this.powerService;
    };

    JavascriptPlatform.prototype.getSmsService = function() {
	return this.smsService;
    };

    JavascriptPlatform.prototype.getPickPlaylistService = function() {
	return this.pickPlaylistService;
    };



    // Dynamically choose which location service we grab
    var chooseLocationService = function() {
	if (isPhonegapAvailable()) {
    	    return new PhonegapLocationService();
	} else if (isGoogleGearsAvailable()) {
	    return new GoogleGearsLocationService();
	} else if (isW3CLocationAvailable()) {
   	    return new W3CLocationService();
	} else {
	    return new NoOpLocationService();
	}
    };
 

    // isPhonegapAvailable: -> boolean
    // Returns true if the Phonegap library exists.
    var isPhonegapAvailable = function() {
	return (typeof Device != 'undefined');
    }


    // isGoogleGearsAvailable: -> boolean
    // Returns true if Google Gears exists.
    var isGoogleGearsAvailable = function() {
	return (window.google && window.google.gears && true);
    }



    // isW3CLocationAvailable: -> boolean
    // Returns true if the W3C Location API is available.
    var isW3CLocationAvailable = function() {
	return (typeof(navigator) != 'undefined' &&
		typeof(navigator.geolocation) != 'undefined');
		     
    }

    //////////////////////////////////////////////////////////////////////

    

    // Given two places on a globe, return the shortest distance between them in meters (uses spherical geometry)
    var roughDistanceBetween = function(lat1, long1, lat2, long2) {
	var toRad = function(deg) {
	    return deg * Math.PI / 180; 
	}
	var subExpr = function(x, y) {
	    return Math.pow(Math.sin((toRad(x) - toRad(y))/ 2),
			    2);
	};
	return 6378000 * 2 * Math.asin(
	    Math.min(1,
		     Math.sqrt(subExpr(lat1, lat2) +
			       (Math.cos(toRad(lat1)) *
				Math.cos(toRad(lat2)) *
				subExpr(long1, long2)))));
    }




    var GoogleGearsLocationService = function() {
	this.geo = google.gears.factory.create("beta.geolocation");
	this.listeners = [];
	this.currentPosition = {latitude: 0, 
				longitude: 0,
				altitude: 0,
				bearing: 0,
				speed: 0};
	this.watchId = false;
    };
    
    GoogleGearsLocationService.prototype.startService = function() {
	var that = this;
	function success(position) {
	    that.currentPosition.latitude = position.latitude;
	    that.currentPosition.longitude = position.longitude;
	    that.currentPosition.altitude = position.altitude;
	    for(var i = 0; i < that.listeners.length; i++) {
		that.listeners[i](position.latitude,
				  position.longitude);
	    }
	}
	this.watchId = this.geo.watchPosition(success);
    };

    GoogleGearsLocationService.prototype.shutdownService = function() {
	this.geo.clearWatch(this.watchId);
    };
    
    GoogleGearsLocationService.prototype.addLocationChangeListener = function(listener) {
	this.listeners.push(listener);
    };

    GoogleGearsLocationService.prototype.getLatitude = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.latitude);
    };

    GoogleGearsLocationService.prototype.getLongitude = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.longitude);
    };

    GoogleGearsLocationService.prototype.getAltitude = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.altitude);
    };

    GoogleGearsLocationService.prototype.getBearing = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.bearing);
    };

    GoogleGearsLocationService.prototype.getSpeed = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.speed);
    };

    GoogleGearsLocationService.prototype.getDistanceBetween = function (lat1, long1, lat2, long2) {

	return plt.types.FloatPoint.makeInstance(
	    roughDistanceBetween(lat1.toFloat(), 
				 long1.toFloat(), 
				 lat2.toFloat(),
				 long2.toFloat()));
    };






    //////////////////////////////////////////////////////////////////////
    // NoOpLocationService does nothing.

    var NoOpLocationService = function() {
    };
    
    NoOpLocationService.prototype.startService = function() {
    };

    NoOpLocationService.prototype.shutdownService = function() {
    };
    
    NoOpLocationService.prototype.addLocationChangeListener = function(listener) {
    };

    NoOpLocationService.prototype.getLatitude = function () {
	return plt.types.Rational.ZERO;
    };

    NoOpLocationService.prototype.getLongitude = function () {
	return plt.types.Rational.ZERO;
    };

    NoOpLocationService.prototype.getAltitude = function () {
	return plt.types.Rational.ZERO;
    };

    NoOpLocationService.prototype.getBearing = function () {
	return plt.types.Rational.ZERO;
    };

    NoOpLocationService.prototype.getSpeed = function () {
	return plt.types.Rational.ZERO;
    };

    NoOpLocationService.prototype.getDistanceBetween = function (lat1, long1, lat2, long2) {
	return plt.types.FloatPoint.makeInstance(
	    roughDistanceBetween(lat1.toFloat(), 
				 long1.toFloat(), 
				 lat2.toFloat(),
				 long2.toFloat()));
    };


    //////////////////////////////////////////////////////////////////////

    var PhonegapLocationService = function() {
	this.locationListeners = [];
	this.currentPosition = {latitude: 0, 
				longitude: 0,
				atttitude: 0,
				bearing: 0,
				speed: 0};
	this.watchId = false;
    };
    
    PhonegapLocationService.prototype.startService = function() {
	var that = this;
	var locSuccessCallback = function(pos) {
	    that.currentPosition.latitude = parseFloat(pos.latitude);
	    that.currentPosition.longitude = parseFloat(pos.longitude);

    	    for ( var i = 0; i < that.locationListeners.length; i++ ) {
    		var listener = that.locationListeners[i];
    		listener(that.currentPosition.latitude,
			 that.currentPosition.longitude);
    	    }
	}; 
    	this.watchId = navigator.geolocation.watchPosition(locSuccessCallback, function() {}, {});
    };

    PhonegapLocationService.prototype.shutdownService = function() {
    	navigator.geolocation.clearWatch(this.watchId);
    };
    
    PhonegapLocationService.prototype.addLocationChangeListener = function(listener) {
    	this.locationListeners.push(listener);
    };

    PhonegapLocationService.prototype.getLatitude = function () {
	return plt.types.FloatPoint.makeInstance(navigator.geolocation.lastPosition.latitude);
    };

    PhonegapLocationService.prototype.getLongitude = function () {
	return plt.types.FloatPoint.makeInstance(navigator.geolocation.lastPosition.longitude);
    };

    PhonegapLocationService.prototype.getAltitude = function () {
	return plt.types.Rational.ZERO;
    };

    PhonegapLocationService.prototype.getBearing = function () {
	return plt.types.Rational.ZERO;
    };

    PhonegapLocationService.prototype.getSpeed = function () {
	return plt.types.Rational.ZERO;
    };

    PhonegapLocationService.prototype.getDistanceBetween = function (lat1, long1, lat2, long2) {
	return plt.types.FloatPoint.makeInstance(
	    navigator.geolocation.getDistanceBetween(lat1.toFloat(),
						     long1.toFloat(),
						     lat2.toFloat(),
						     long2.toFloat()));
    };










    //////////////////////////////////////////////////////////////////////

    // This version of the location service uses the W3C location api
    // if it's available.

    var W3CLocationService = function() {
	this.locationListeners = [];
	this.currentPosition = {latitude: 0, 
				longitude: 0,
				atttitude: 0,
				bearing: 0,
				speed: 0};
	this.watchId = false;
    };
    
    W3CLocationService.prototype.startService = function() {
	var that = this;
	var monitor = function(pos) {
	    that.currentPosition.latitude = pos.coords.latitude;
	    that.currentPosition.longitude = pos.coords.longitude;
    	    for ( var i = 0; i < that.locationListeners.length; i++ ) {
    		var listener = that.locationListeners[i];
    		listener(pos.coords.latitude, pos.coords.longitude);
    	    }
	};

	var onError = function() {};
 
	if (typeof navigator.geolocation != 'undefined' &&
	    typeof navigator.geolocation.getCurrentPosition != 'undefined') {
	    navigator.geolocation.watchPosition(monitor);
	}

	setTimeout(function() {navigator.geolocation.getCurrentPosition(monitor)}, 10000);
    };

    W3CLocationService.prototype.shutdownService = function() {
	if (this.watchId) {
    	    navigator.geolocation.clearWatch(this.watchId);
	    this.watchId = false;
	}
    };
    
    W3CLocationService.prototype.addLocationChangeListener = function(listener) {
    	this.locationListeners.push(listener);
    };


    W3CLocationService.prototype.getLatitude = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.latitude);
    };

    W3CLocationService.prototype.getLongitude = function () {
	return plt.types.FloatPOint.makeInstance(this.currentPosition.longitude);
    };

    W3CLocationService.prototype.getAltitude = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.altitude);
    };

    W3CLocationService.prototype.getBearing = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.bearing);
    };

    W3CLocationService.prototype.getSpeed = function () {
	return plt.types.FloatPoint.makeInstance(this.currentPosition.speed);
    };

    W3CLocationService.prototype.getDistanceBetween = function (lat1, long1, lat2, long2) {
	return plt.types.FloatPoint.makeInstance(
	    roughDistanceBetween(lat1.toFloat(), 
				 long1.toFloat(), 
				 lat2.toFloat(),
				 long2.toFloat()));
    };




    ////////////////////////////////////////////////////////////////////// 

    // FIXME: cleanup tilt so it's matching the other services.

    var accelListeners = [];
    var orientListeners = [];
    var accelId;
    var orientId;
    var shakeId;

    var accelSuccessCallback = function(accel) {
    	for ( var i = 0; i < accelListeners.length; i++ ) {
    	    accelListeners[i](parseFloat(accel.x), parseFloat(accel.y), parseFloat(accel.z));
    	}
    };
    
    var orientSuccessCallback = function(orient) {
	for ( var i = 0; i < orientListeners.length; i++ ) {
	    orientListeners[i](parseFloat(orient.azimuth), parseFloat(orient.pitch), parseFloat(orient.roll));
	}
    };



    var JavascriptTiltService = {
    	startService : function() {
    	    if (typeof Accelerometer != "undefined") {
    	    	accelId = navigator.accelerometer.watchAcceleration(accelSuccessCallback, function() {});
    	    	orientId = navigator.accelerometer.watchOrientation(orientSuccessCallback, function() {});
    	    }
    	},

    	shutdownService : function() {
    	    if (typeof Accelerometer != "undefined") {
    	    	navigator.accelerometer.clearWatch(accelId);
    	    	navigator.accelerometer.clearWatch(orientId);
		navigator.accelerometer.stopAllShakeWatches();
    	    }
    	},
 
    	addOrientationChangeListener : function(listener) {
    	    // push a listener onto the orientation listeners
    	    orientListeners.push(listener);
    	},

    	addAccelerationChangeListener : function(listener) {
    	    // push a listener onto the acceleration listeners
    	    accelListeners.push(listener);
    	}
    };



    //////////////////////////////////////////////////////////////////////

    var chooseTelephonyService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapTelephonyService();
	} else {
	    return new NoOpTelephonyService();
	}
    }

    //////////////////////////////////////////////////////////////////////
    var NoOpTelephonyService = function() {
    }

    NoOpTelephonyService.prototype.getSignalStrengths = function() {
	return plt.types.Empty.EMPTY;
    };


    //////////////////////////////////////////////////////////////////////
    var PhonegapTelephonyService = function() {
    }

    PhonegapTelephonyService.prototype.getSignalStrengths = function() {
	var result = plt.types.Empty.EMPTY;
	var infos = Device.getSignalStrengths();
	for (var i = 0; i < infos.length; i++) {
	    var info = infos.get(i);
	    result = plt.types.Cons.makeInstance(
		plt.Kernel.list([toNum(info.getId()),
				 toNum(info.getStrength())]),
		result);
	}
	return result;
    };





    //////////////////////////////////////////////////////////////////////

    var chooseShakeService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapShakeService();
	} else {
	    return new NoOpShakeService();
	}
    }

    //////////////////////////////////////////////////////////////////////

    var PhonegapShakeService = function() {
	this.listeners = [];
    }

    PhonegapShakeService.prototype.startService = function() {
	var that = this;
	var success = function() {
	    for (var i = 0; i < that.listeners.length; i++) {
		that.listeners[i]();
	    }
	}
	var fail = function() {}
	this.shakeId = navigator.accelerometer.watchShake(success, fail);
    };

    PhonegapShakeService.prototype.shutdownService = function() {
	navigator.accelerometer.stopAllShakeWatches();
    };

    PhonegapShakeService.prototype.addListener = function(l) {
	this.listeners.push(l);
    };




    //////////////////////////////////////////////////////////////////////

    var NoOpShakeService = function() {
    }

    NoOpShakeService.prototype.startService = function() {
    };

    NoOpShakeService.prototype.shutdownService = function() {
    };

    NoOpShakeService.prototype.addListener = function(l) {
    };





    //////////////////////////////////////////////////////////////////////

    var chooseNetworkService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapNetworkService();
	} else {
	    return new WeSchemeNetworkService();
	}
    }


    var PhonegapNetworkService = function() {}
    PhonegapNetworkService.prototype.getUrl = function(aUrl) {
	var result = Device.getUrl(aUrl);
	return plt.types.String.makeInstance("" + result);
    };



    var WeSchemeNetworkService = function() {}
    WeSchemeNetworkService.prototype.getUrl = function(aUrl) {
	var req = new XMLHttpRequest();
	var url = "/networkProxy?url=" + encodeURIComponent(aUrl);
	req.open("GET", url, false);
	req.send(null);
	return plt.types.String.makeInstance(req.responseText);
    };

    //////////////////////////////////////////////////////////////////////



    var chooseSoundService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapSoundService();
	} else if (supportsHtml5()) {
	    return new Html5SoundService();
	} else {
	    return new GenericSoundService();
	}
    }

    var supportsHtml5 = function() {
	return !!(document.createElement('audio').canPlayType);

    }


    var PhonegapSoundService = function() {
    };
    PhonegapSoundService.prototype.beep = function() {
	navigator.notification.beep(1);
    };

    PhonegapSoundService.prototype.playPlaylist = function(rawPlaylist) {
	Device.playPlaylistRecord(rawPlaylist);
    };

    PhonegapSoundService.prototype.pausePlaylist = function(rawPlaylist) {
	Device.pausePlaylistRecord(rawPlaylist);
    };

    PhonegapSoundService.prototype.stopPlaylist = function(rawPlaylist) {
	Device.stopPlaylistRecord(rawPlaylist);
    };




    PhonegapSoundService.prototype.playSoundUrl = function(url) {
    	navigator.audio.playMusic(url);
    };
    PhonegapSoundService.prototype.playDtmfTone = function(tone, duration) {
	navigator.audio.playDTMF(tone);
        setTimeout(function() { navigator.audio.stopDTMF() },
                   duration);
    };
    PhonegapSoundService.prototype.stopSoundUrl = function(url) {
    	navigator.audio.stopMusic(url);
    };
    PhonegapSoundService.prototype.pauseSoundUrl = function(url) {
    	navigator.audio.pauseMusic(url);
    };
    PhonegapSoundService.prototype.setVolume = function(volume) {
    	navigator.audio.setMusicVolume(volume);
    }
    PhonegapSoundService.prototype.raiseVolume = function() {
    	navigator.audio.increaseMusicVolume();
    };
    PhonegapSoundService.prototype.lowerVolume = function() {
    	navigator.audio.decreaseMusicVolume();
    };




    var Html5SoundService = function() {
	this.cachedUrls = {};
	this.baseVolume = 100;
    }
    Html5SoundService.prototype.beep = function() {
	alert("Beep");
    };


    Html5SoundService.prototype.playPlaylistSound = function(playlistSound) {

    };

    Html5SoundService.prototype.pausePlaylistSound = function(playlistSound) {

    };
    Html5SoundService.prototype.stopPlaylistSound = function(playlistSound) {

    };

    Html5SoundService.prototype.playSoundUrl = function(url) {
	if (! this.cachedUrls[url]) {
	    this.cachedUrls[url] = new Audio(url);
	}
	var audio = this.cachedUrls[url];
	if (audio.ended || audio.paused) {
	    this.cachedUrls[url].play();
	}
    };
    
    Html5SoundService.prototype.playDtmfTone = function(tone, duration) {
	// Can't do anything here.
	alert("dtmf tone");
    };
    Html5SoundService.prototype.stopSoundUrl = function(url) {
	if (this.cachedUrls[url]) {
	    this.cachedUrls[url].pause();
	    this.cachedUrls[url].currentTime = 0;
	}
    };

    Html5SoundService.prototype.pauseSoundUrl = function(url) {
	if (this.cachedUrls[url]) {
	    this.cachedUrls[url].pause();
	}
    };
    
    Html5SoundService.prototype.setVolume = function(volume) {
	for (var url in this.cachedUrls) {
	    this.cachedUrls[url].volume = volume / 100.0;
	}
	this.baseVolume = volume;
    };

    Html5SoundService.prototype.raiseVolume = function() {
	this.setVolume(Math.min(this.baseVolume + 5, 100));
    };

    Html5SoundService.prototype.lowerVolume = function() {
	this.setVolume(Math.max(this.baseVolume - 5, 0));
    };





    var GenericSoundService = function() {
    }
    GenericSoundService.prototype.beep = function() {
	alert("Beep");
    };

    
    GenericSoundService.prototype.playPlaylistSound = function(playlistSound) {

    };

    GenericSoundService.prototype.pausePlaylistSound = function(playlistSound) {

    };

    GenericSoundService.prototype.stopPlaylistSound = function(playlistSound) {

    };


    GenericSoundService.prototype.playSoundUrl = function(url) {
	// Can't do anything here.
	plt.Kernel.reportError("sound url " + url + " should play, but I don't have sound support.");
    };


    GenericSoundService.prototype.playDtmfTone = function(tone, duration) {
	// Can't do anything here.
	plt.Kernel.reportError("DTMF tone should play, but I don't have DTMF support");
    };

    GenericSoundService.prototype.stopSoundUrl = function(url) {
    };
    GenericSoundService.prototype.pauseSoundUrl = function(url) {
    };
    GenericSoundService.prototype.setVolume = function(volume) {
    };
    GenericSoundService.prototype.raiseVolume = function() {
    };
    GenericSoundService.prototype.lowerVolume = function() {
    };


    //////////////////////////////////////////////////////////////////////
    var choosePowerService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapPowerService();
	} else {
	    return new GenericPowerService();
	}
    }

    var PhonegapPowerService = function() {
	this.currentLockFlags = -1;
    }

    PhonegapPowerService.prototype.setWakeLock = function(flags) {
    	if (flags != this.currentLockFlags) {
    	    navigator.power.setWakeLock(flags);
    	    this.currentLockFlags = flags;
    	}
    };

    PhonegapPowerService.prototype.releaseWakeLock = function() {
    	if (this.currentLockFlags != -1) {
    	    navigator.power.releaseWakeLock();
    	    this.currentLockFlags = -1;
    	}
    };


    var GenericPowerService = function() {
    }
    GenericPowerService.prototype.setWakeLock = function(flags) {
    };
    GenericPowerService.prototype.releaseWakeLock = function() {
    };
 

    //////////////////////////////////////////////////////////////////////

    var chooseSmsService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapSmsService();
	} else {
	    return new GenericSmsService();
	}
    }
    var PhonegapSmsService = function() {
    }
    PhonegapSmsService.prototype.send = function(address, msg) {
	navigator.sms.send(address, msg);
    };
    var GenericSmsService = function() {
    }
    GenericSmsService.prototype.send = function(address, msg) {
	alert("SMS should be sent to " + address + " with the content: " + msg);
    };



    //////////////////////////////////////////////////////////////////////
    var choosePickPlaylistService = function() {
	if (isPhonegapAvailable()) {
	    return new PhonegapPickPlaylistService();
	} else {
	    return new GenericPickPlaylistService();
	}
    }
    var PhonegapPickPlaylistService = function() {
    }
    PhonegapPickPlaylistService.prototype.pickPlaylist = function(callback) {
	// playlist: plt.playlist.PlaylistRecord
	var wrappedCallback = function(playlist) {
	    callback(playlist);
	}

	navigator.dialogPickers.pickPlaylist(wrappedCallback);
    }
    
    var GenericPickPlaylistService = function() {
    }

    GenericPickPlaylistService.prototype.pickPlaylist = function(callback) {
	// FIXME
	alert("pick playlist currently unavailable");
    }

    



})();
goog.provide('plt.lib');


(function () {

    plt.lib.Telephony = {};
    plt.lib.Telephony.getSignalStrengths = function() {
	return plt.platform.Platform.getInstance().getTelephonyService().getSignalStrengths();
    };
    //////////////////////////////////////////////////////////////////////
    
    plt.lib.Location = {};
    plt.lib.Location.getLatitude = function () {
	return plt.platform.Platform.getInstance().getLocationService().getLatitude();
    };

    plt.lib.Location.getLongitude = function () {
	return plt.platform.Platform.getInstance().getLocationService().getLongitude();
    };

    plt.lib.Location.getAttitude = function () {
	return plt.platform.Platform.getInstance().getLocationService().getAttitude();
    };

    plt.lib.Location.getBearing = function () {
	return plt.platform.Platform.getInstance().getLocationService().getBearing();
    };

    plt.lib.Location.getSpeed = function () {
	return plt.platform.Platform.getInstance().getLocationService().getSpeed();
    };

    plt.lib.Location.getDistanceBetween = function (lat1, long1, lat2, long2) {
	return plt.platform.Platform.getInstance().getLocationService().getDistanceBetween(lat1, long1, lat2, long2);
    };



    //////////////////////////////////////////////////////////////////////

    plt.lib.Net = {};
    plt.lib.Net.getUrl = function(url) {
	return plt.platform.Platform.getInstance().getNetworkService().getUrl(url);
    }


}());
goog.provide('plt.world.Kernel');


// Depends on kernel.js, world-config.js, effect-struct.js
(function() {
    
    var world;
    var worldListeners = [];
    var stopped;
    var timerInterval = false;


    // Inheritance from pg 168: Javascript, the Definitive Guide.
    var heir = function(p) {
	var f = function() {}
	f.prototype = p;
	return new f();
    }


    // clone: object -> object
    // Copies an object.  The new object should respond like the old
    // object, including to things like instanceof
    var clone = function(obj) {
	var C = function() {}
	C.prototype = obj;
	var c = new C();
	for (property in obj) {
	    if (obj.hasOwnProperty(property)) {
		c[property] = obj[property];
	    }
	}
	return c;
    };




    var announceListeners = [];
    plt.world.Kernel.addAnnounceListener = function(listener) {
	announceListeners.push(listener);
    };
    plt.world.Kernel.removeAnnounceListener = function(listener) {
	var idx = announceListeners.indexOf(listener);
	if (idx != -1) {
	    announceListeners.splice(idx, 1);
	}
    };
    plt.world.Kernel.announce = function(eventName, vals) {
	for (var i = 0; i < announceListeners.length; i++) {
	    try {
		announceListeners[i](eventName, vals);
	    } catch (e) {}
	}
    };










    // changeWorld: world -> void
    // Changes the current world to newWorld.
    var changeWorld = function(newWorld) {
	world = newWorld;
	notifyWorldListeners();
    }


    // updateWorld: (world -> world) -> void
    // Public function: update the world, given the old state of the
    // world.
    plt.world.Kernel.updateWorld = function(updater) {
	var newWorld = updater(world);
	changeWorld(newWorld);
    }


    plt.world.Kernel.shutdownWorld = function() {
	stopped = true;
    };


    // notifyWorldListeners: -> void
    // Tells all of the world listeners that the world has changed.
    var notifyWorldListeners = function() {
	var i;
	for (i = 0; i < worldListeners.length; i++) {
	    worldListeners[i](world);
	}
    }

    // addWorldListener: (world -> void) -> void
    // Adds a new world listener: whenever the world is changed, the aListener
    // will be called with that new world.
    var addWorldListener = function(aListener) {
	worldListeners.push(aListener);
    }
    

    // getKeyCodeName: keyEvent -> String
    // Given an event, try to get the name of the key.
    var getKeyCodeName = function(e) {
	var code = e.charCode || e.keyCode;
	var keyname;
	if (code == 37) {
	    keyname = "left";
	} else if (code == 38) {
	    keyname = "up";
	} else if (code == 39) {
	    keyname = "right";
	} else if (code == 40) {
	    keyname = "down";
	} else {
	    keyname = String.fromCharCode(code); 
	}
	return keyname;
    }


    // resetWorld: -> void
    // Resets all of the world global values.
    var resetWorld = function() {
	if (timerInterval) {
	    clearInterval(timerInterval);
	    timerInterval = false;
	}
	stopped = false;
	worldListeners = [];
    }


    var getBigBangWindow = function(width, height) {
        if (window.document.getElementById("canvas") != undefined) {
	    return window;
	}

        var newWindow = window.open(
	    "big-bang.html",
	    "big-bang");
	//"toolbar=false,location=false,directories=false,status=false,menubar=false,width="+width+",height="+height);
	if (newWindow == null) { 
            throw new Error("Error: Not allowed to create a new window."); }

	return newWindow;
    }


    // bigBang: number number world (arrayof (-> void)) -> void
    // Begins a world computation.  The initial world is aWorld, and handlers
    // register other reactive functions (timer tick, key press, etc.) which
    // will change the world.
    plt.world.Kernel.bigBang = function(width, height, aWorld, handlers) {
	plt.Kernel.check(width, plt.Kernel.isNumber, "big-bang", "number", 1);
	plt.Kernel.check(height, plt.Kernel.isNumber, "big-bang", "number", 2);
	plt.Kernel.arrayEach(args, function(x, i) { 
	    plt.Kernel.check(x, plt.Kernel.isFunction, "big-bang", "handler", i+4) });
	

	var i;
	var newWindow = getBigBangWindow(width, height);
	var canvas = 
	    newWindow.document.getElementById("canvas");
	canvas.width = plt.types.NumberTower.toFixnum(width);
	canvas.height = plt.types.NumberTower.toFixnum(height);

	resetWorld();

	var config = new plt.world.config.WorldConfig();
	for (i = 0; i < handlers.length; i++) {
	    config = handlers[i](config);
	}
	config = config.updateAll({'changeWorld': plt.world.Kernel.updateWorld,
				   'shutdownWorld': plt.world.Kernel.shutdownWorld});
	plt.world.config.CONFIG = config;


	if (config.lookup('onKey')) {
	    newWindow.onkeydown = function(e) {
		plt.world.stimuli.onKey(e);
	    }
	}

	if (config.lookup('onRedraw')) {
	    addWorldListener(function (w) {
		var context = 
		    canvas.getContext("2d");
		var aScene = 
		    config.lookup('onRedraw')([w]);
		aScene.render(context,
			      0,
			      0);
	    });
	}

	addWorldListener(function (w) {
	    if (config.lookup('stopWhen')) {
		if (config.lookup('stopWhen')([w])) {
		    stopped = true;
		}
	    }
	});


 	if(config.lookup('onTick')) {
	    scheduleTimerTick(newWindow, config);
	}


 	changeWorld(aWorld);

	if (config.lookup('initialEffect')) {
	    var updaters = plt.world.Kernel.applyEffect(
		config.lookup('initialEffect'));
	    for (var i = 0; i < updaters.length; i++) {
		if (! stopped) {
		    updateWorld(updaters);
		}
	    }
	}

    };

    // scheduleTimerTick: -> void
    // Repeatedly schedules an evaluation of the onTick until the program has stopped.
    var scheduleTimerTick = function(window, config) {
	timerInterval = window.setInterval(
	    function() {
		if (stopped) {
		    window.clearTimeout(timerInterval);
		    timerInterval = false;
		}
		else {
		    plt.world.stimuli.onTick();
		}
	    },
	    config.lookup('tickDelay'));
    }



    plt.world.Kernel.isKeyEqual = function(key1, key2) {
	var result = (key1.toString().toLowerCase() == key2.toString().toLowerCase());
	return result;
    };




    plt.world.Kernel.imageWidth = function(thing) {
	plt.Kernel.check(thing, isImage, "image-width", "image", 1);
	return plt.types.Rational.makeInstance(thing.getWidth(), 1);
    };


    plt.world.Kernel.imageHeight = function(thing) {
	plt.Kernel.check(thing, isImage, "image-height", "image", 1);
	return plt.types.Rational.makeInstance(thing.getHeight(), 1);
    };


    // placeImage: image number number image -> scene
    plt.world.Kernel.placeImage = function(picture, x, y, background) {
	plt.Kernel.check(picture, 
			 isImage,
			 "place-image",
			 "image",
			 1);
	plt.Kernel.check(x, plt.Kernel.isNumber, "place-image", "number", 2);
	plt.Kernel.check(y, plt.Kernel.isNumber, "place-image", "number", 3);
	plt.Kernel.check(background,
			 function(x) { return isScene(x) || isImage(x) },
			 "place-image", "image", 4);
	if (isScene(background)) {
	    return background.add(picture,
				  plt.types.NumberTower.toFixnum(x),
				  plt.types.NumberTower.toFixnum(y));
	} else {
	    var newScene = new SceneImage(background.getWidth(),
					  background.getHeight(),
					  []);
	    newScene = newScene.add(background, 0, 0);
	    newScene = newScene.add(picture, 
				    plt.types.NumberTower.toFixnum(x),
				    plt.types.NumberTower.toFixnum(y));
	    return newScene;
	}
    };

    
    // emptyScene: number number -> scene
    plt.world.Kernel.emptyScene = function(width, height) {
	plt.Kernel.check(width, plt.Kernel.isNumber, "empty-scene", "number", 1);
	plt.Kernel.check(height, plt.Kernel.isNumber, "empty-scene", "number", 2);
	return new SceneImage(
	    plt.types.NumberTower.toFixnum(width), 
	    plt.types.NumberTower.toFixnum(height),
	    []);
    };



    // isColor: any -> boolean

    // Produces true if the thing is considered a color object.
    var isColor = function(thing) {
	return (thing !== undefined &&
		thing !== null &&
		(thing instanceof ColorRecord ||
		 typeof(colorDb.get(thing)) != 'undefined'));
    };
    


    // text: string number color -> TextImage
    plt.world.Kernel.text = function(aString, aSize, aColor) {
	plt.Kernel.check(aString, plt.Kernel.isString, "text", "string", 1);
	plt.Kernel.check(aSize, plt.Kernel.isNumber, "text", "number", 2);
	plt.Kernel.check(aColor, isColor, "text", "color", 3);

	if (colorDb.get(aColor)) {
	    aColor = colorDb.get(aColor);
	}
	return new TextImage
	(aString, 
	 plt.types.NumberTower.toFixnum(aSize), 
	 aColor);
    };


    var isStyle = function(x) {
	return ((plt.Kernel.isString(x) || plt.Kernel.isSymbol(x)) &&
		(x.toString().toLowerCase() == "solid" ||
		 x.toString().toLowerCase() == "outline"));
    }


    // circle: number style color -> TextImage
    plt.world.Kernel.circle = function(aRadius, aStyle, aColor) {
	plt.Kernel.check(aRadius, plt.Kernel.isNumber, "circle", "number", 1);
	plt.Kernel.check(aStyle, isStyle, "circle", "style", 2);
	plt.Kernel.check(aColor, isColor, "circle", "color", 3);


	if (colorDb.get(aColor)) {
	    aColor = colorDb.get(aColor);
	}
	return new CircleImage
	(plt.types.NumberTower.toFixnum(aRadius), 
	 aStyle,
	 aColor);
    };



    plt.world.Kernel.star = function(aPoints, anOuter, anInner, aStyle, aColor) {
	plt.Kernel.check(aPoints, plt.Kernel.isNumber, "star", "number", 1);
	plt.Kernel.check(anOuter, plt.Kernel.isNumber, "star", "number", 2);
	plt.Kernel.check(anInner, plt.Kernel.isNumber, "star", "number", 3);
	plt.Kernel.check(aStyle, isStyle, "star", "style", 4);
	plt.Kernel.check(aColor, isColor, "star", "color", 5);

	if (colorDb.get(aColor)) {
	    aColor = colorDb.get(aColor);
	}
	return new StarImage(plt.types.NumberTower.toFixnum(aPoints), 
			     plt.types.NumberTower.toFixnum(anOuter),
			     plt.types.NumberTower.toFixnum(anInner),
			     aStyle,
			     aColor);
    };






    plt.world.Kernel.openImageUrl = function(path) {
	plt.Kernel.check(path, plt.Kernel.isString, "open-image-url", "string", 1);
	return FileImage.makeInstance(path.toString());
    };


    plt.world.Kernel.nwRectangle = function(w, h, s, c) {
	plt.Kernel.check(w, plt.Kernel.isNumber, "nw:rectangle", "number", 1);
	plt.Kernel.check(h, plt.Kernel.isNumber, "nw:rectangle", "number", 2);
	plt.Kernel.check(s, isStyle, "nw:rectangle", "style", 3);
	plt.Kernel.check(c, isColor, "nw:rectangle", "color", 4);

	if (colorDb.get(c)) {
	    c = colorDb.get(c);
	}
	var aRect = new RectangleImage
	(plt.types.NumberTower.toFixnum(w),
	 plt.types.NumberTower.toFixnum(h),
	 s,
	 c);
	return aRect.updatePinhole(0, 0);
    };

    plt.world.Kernel.rectangle = function(w, h, s, c) {
	plt.Kernel.check(w, plt.Kernel.isNumber, "rectangle", "number", 1);
	plt.Kernel.check(h, plt.Kernel.isNumber, "rectangle", "number", 2);
	plt.Kernel.check(s, isStyle, "rectangle", "style", 3);
	plt.Kernel.check(c, isColor, "rectangle", "color", 4);

	if (colorDb.get(c)) {
	    c = colorDb.get(c);
	}
	// Fixme: get the pinholes!
	return new RectangleImage(
	    plt.types.NumberTower.toFixnum(w),
	    plt.types.NumberTower.toFixnum(h),
	    s,
	    c);
    };


    //Triangle number style color --> TextImage
    plt.world.Kernel.triangle = function(r, s, c) {
	plt.Kernel.check(r, plt.Kernel.isNumber, "triangle", "number", 1);
	plt.Kernel.check(s, isStyle, "triangle", "string", 2);
	plt.Kernel.check(c, isColor, "triangle", "color", 3);
	if (colorDb.get(c)) {
	    c = colorDb.get(c);
	}
	return new TriangleImage(plt.types.NumberTower.toFixnum(r),
				 s,
				 c);
    };

    
    //Ellipse number number style color --> TextImage
    plt.world.Kernel.ellipse = function(w, h, s, c) {
	plt.Kernel.check(w, plt.Kernel.isNumber, "ellipse", "number", 1);
	plt.Kernel.check(h, plt.Kernel.isNumber, "ellipse", "number", 2);
	plt.Kernel.check(s, isStyle, "ellipse", "string", 3);
	plt.Kernel.check(c, isColor, "ellipse", "color", 4);
	
	if (colorDb.get(c)) {
	    c = colorDb.get(c);
	}
	return new EllipseImage(plt.types.NumberTower.toFixnum(w),
				plt.types.NumberTower.toFixnum(h),
				s,
				c);
    };
    

    //Line number number color
    plt.world.Kernel.line = function(x, y, c) {
	plt.Kernel.check(x, plt.Kernel.isNumber, "line", "number", 1);
	plt.Kernel.check(y, plt.Kernel.isNumber, "line", "number", 2);
	plt.Kernel.check(c, isColor, "line", "color", 3);
	if (colorDb.get(c)) {
	    c = colorDb.get(c);
	}
	var line =  new LineImage(plt.types.NumberTower.toFixnum(x),
				  plt.types.NumberTower.toFixnum(y),
				  c);
	return line.updatePinhole(0, 0);
    };
    


    // Base class for all images.
    var BaseImage = function(pinholeX, pinholeY) {
	this.pinholeX = pinholeX;
	this.pinholeY = pinholeY;
    }
    plt.world.Kernel.BaseImage = BaseImage;


    var isImage = function(thing) {
	return ((thing != null) && (thing != undefined)
		&& (thing instanceof BaseImage));
    }
    plt.world.Kernel.isImage = isImage;


    plt.world.Kernel.put_dash_pinhole = function(img, x, y) {
	plt.Kernel.check(img, isImage, "put-pinhole", "image", 1);
	plt.Kernel.check(x, plt.Kernel.isNumber, "put-pinhole", "number", 2);
	plt.Kernel.check(y, plt.Kernel.isNumber, "put-pinhole", "number", 3);
	return img.updatePinhole(plt.types.NumberTower.toFixnum(x),
				 plt.types.NumberTower.toFixnum(y));
    };



    BaseImage.prototype.updatePinhole = function(x, y) {
	var aCopy = clone(this);
	aCopy.pinholeX = x;
	aCopy.pinholeY = y;
	return aCopy;
    };



    // render: context fixnum fixnum: -> void
    // Render the image, where the upper-left corner of the image is drawn at
    // (x, y).
    BaseImage.prototype.render = function(ctx, x, y) {
	throw new MobyRuntimeError("Unimplemented method render");
    };


    // makeCanvas: number number -> canvas
    // Constructs a canvas object of a particular width and height.
    plt.world.Kernel.makeCanvas = function(width, height) {
	var canvas = document.createElement("canvas");
 	canvas.width = width;
 	canvas.height = height;
 	canvas.style.width = canvas.width + "px";
 	canvas.style.height = canvas.height + "px";
	
	// KLUDGE: IE compatibility uses /js/excanvas.js, and dynamic
	// elements must be marked this way.
	if (window && typeof window.G_vmlCanvasManager != 'undefined') {
	    canvas.style.display = 'none';
	    document.body.appendChild(canvas);
	    canvas = window.G_vmlCanvasManager.initElement(canvas);
	    document.body.removeChild(canvas);
	    canvas.style.display = '';
	}
	return canvas;
    };


    BaseImage.prototype.toDomNode = function(cache) {
	var that = this;
	var width = plt.types.NumberTower.toFixnum(plt.world.Kernel.imageWidth(that));
	var height = plt.types.NumberTower.toFixnum(plt.world.Kernel.imageHeight(that));
	var canvas = plt.world.Kernel.makeCanvas(width, height);

	// KLUDGE: some of the rendering functions depend on a context
	// where the canvas is attached to the DOM tree.  So we temporarily
	// make it invisible, attach it to the tree, render, and then rip it out
	// again.
	var oldDisplay = canvas.style.display;
	canvas.style.display = 'none';
	document.body.appendChild(canvas);
 	var ctx = canvas.getContext("2d");
	that.render(ctx, 0, 0) 
	document.body.removeChild(canvas);
	canvas.style.display = '';

	return canvas;
    };
    BaseImage.prototype.toWrittenString = function(cache) { return "<image>"; }
    BaseImage.prototype.toDisplayedString = function(cache) { return "<image>"; }



    plt.world.Kernel.image_question_ = function(thing) {
	return isImage(thing);
    };


    plt.world.Kernel.image_equal__question_ = function(thing, other) {
	check(thing, isImage, "image=?", "image", 1);
	check(other, isImage, "image=?", "image", 2);
	return thing == other ? plt.types.Logic.TRUE : plt.types.Logic.FALSE;
    };


    
    // isScene: any -> boolean
    // Produces true when x is a scene.
    var isScene = function(x) {
	return ((x != undefined) && (x != null) && (x instanceof SceneImage));
    };

    // SceneImage: primitive-number primitive-number (listof image) -> Scene
    var SceneImage = function(width, height, children) {
	BaseImage.call(this, 0, 0);
	this.width = width;
	this.height = height;
	this.children = children;
    }
    SceneImage.prototype = heir(BaseImage.prototype);


    // add: image primitive-number primitive-number -> Scene
    SceneImage.prototype.add = function(anImage, x, y) {
	return new SceneImage(this.width, 
			      this.height,
			      this.children.concat([[anImage, 
						     x - anImage.pinholeX, 
						     y - anImage.pinholeY]]));
    };

    // render: 2d-context primitive-number primitive-number -> void
    SceneImage.prototype.render = function(ctx, x, y) {
	var i;
	var childImage, childX, childY;
	// Clear the scene.
	ctx.clearRect(x, y, this.width, this.height);
	// Then ask every object to render itself.
	for(i = 0; i < this.children.length; i++) {
	    childImage = this.children[i][0];
	    childX = this.children[i][1];
	    childY = this.children[i][2];
	    ctx.save();
	    childImage.render(ctx, childX + x, childY + y);
	    ctx.restore();
	}
    };

    SceneImage.prototype.getWidth = function() {
	return this.width;
    };

    SceneImage.prototype.getHeight = function() {
	return this.height;
    };


    //////////////////////////////////////////////////////////////////////

    
    var FileImage = function(src, rawImage) {
	BaseImage.call(this, 0, 0);
	var self = this;
	this.isLoaded = false;
	if (rawImage && rawImage.complete) { 
	    this.img = rawImage;
	    this.isLoaded = true;
	    this.pinholeX = self.img.width / 2;
	    this.pinholeY = self.img.height / 2;
	} else {
	    // fixme: we may want to do something blocking here for
	    // onload, since we don't know at this time what the file size
	    // should be, nor will drawImage do the right thing until the
	    // file is loaded.
	    this.img = new Image();
	    this.img.onload = function() {
		self.isLoaded = true;
		self.pinholeX = self.img.width / 2;
		self.pinholeY = self.img.height / 2;
	    };
	    this.img.onerror = function(e) {
		self.img.onerror = "";
		self.img.src = "http://www.wescheme.org/images/broken.png";
	    }
	    this.img.src = src;
	}
    }
    FileImage.prototype = heir(BaseImage.prototype);
    plt.world.Kernel.FileImage = FileImage;

    
    var imageCache = {};
    FileImage.makeInstance = function(path) {
	if (! (path in imageCache)) {
	    imageCache[path] = new FileImage(path);
	} 
	return imageCache[path];
    };
    
    FileImage.installInstance = function(path, rawImage) {
	imageCache[path] = new FileImage(path, rawImage);
    };
    
    FileImage.installBrokenImage = function(path) {
	imageCache[path] = new TextImage("Unable to load " + path, 10, 
					 colorDb.get("red"));
    };



    FileImage.prototype.render = function(ctx, x, y) {
	ctx.drawImage(this.img, x, y);
    };


    FileImage.prototype.getWidth = function() {
	return this.img.width;
    };


    FileImage.prototype.getHeight = function() {
	return this.img.height;
    };

    // Override toDomNode: we don't need a full-fledged canvas here.
    FileImage.prototype.toDomNode = function(cache) {
	return this.img.cloneNode(true);
    };


    //////////////////////////////////////////////////////////////////////


    // OverlayImage: image image -> image
    // Creates an image that overlays img1 on top of the
    // other image.
    var OverlayImage = function(img1, img2) {
	var deltaX = img1.pinholeX - img2.pinholeX;
	var deltaY = img1.pinholeY - img2.pinholeY;
	var left = Math.min(0, deltaX);
	var top = Math.min(0, deltaY);
	var right = Math.max(deltaX + img2.getWidth(), 
			     img1.getWidth());
	var bottom = Math.max(deltaY + img2.getHeight(),
			      img1.getHeight());

	BaseImage.call(this,
		       img1.pinholeX - left,
		       img1.pinholeY - top);
	this.img1 = img1;
	this.img2 = img2;
	this.width = right - left;
	this.height = bottom - top;

	this.img1Dx = -left;
	this.img1Dy = -top;
	this.img2Dx = deltaX - left;	
	this.img2Dy = deltaY - top;
    };

    OverlayImage.prototype = heir(BaseImage.prototype);
    
    
    OverlayImage.prototype.render = function(ctx, x, y) {
	this.img1.render(ctx, x + this.img1Dx, y + this.img1Dy);
	this.img2.render(ctx, x + this.img2Dx, y + this.img2Dy);
    };

    
    OverlayImage.prototype.getWidth = function() {
	return this.width;
    };
    
    OverlayImage.prototype.getHeight = function() {
	return this.height;
    };
    


    plt.world.Kernel.overlay = function(img1, img2, restImages) {
	plt.Kernel.check(img1, isImage, "overlay", "image", 1);
	plt.Kernel.check(img2, isImage, "overlay", "image", 2);	
	plt.Kernel.arrayEach(restImages, function(x, i) { 
	    plt.Kernel.check(x, isImage, "overlay", "image", i+3) });
	var img = new OverlayImage(img1, img2);
	for (var i = 0; i < restImages.length; i++) {
	    img = new OverlayImage(img, restImages[i]);
	}
	return img;
    };
    

    plt.world.Kernel.overlay_slash_xy = function(img, deltaX, deltaY, other) {
	plt.Kernel.check(img, isImage, "overlay/xy", "image", 1);
	plt.Kernel.check(deltaX, plt.Kernel.isNumber, "overlay/xy", "number", 2);
	plt.Kernel.check(deltaY, plt.Kernel.isNumber, "overlay/xy", "number", 3);
	plt.Kernel.check(other, isImage, "overlay/xy", "image", 4);

	return new OverlayImage(img,
				other.updatePinhole(plt.types.NumberTower.toFixnum(deltaX),
						    plt.types.NumberTower.toFixnum(deltaY)));
    };


    //////////////////////////////////////////////////////////////////////


    var RectangleImage = function(width, height, style, color) {
	BaseImage.call(this, width/2, height/2);
	this.width = width;
	this.height = height;
	this.style = style;
	this.color = color;
    };
    RectangleImage.prototype = heir(BaseImage.prototype);


    RectangleImage.prototype.render = function(ctx, x, y) {
	if (this.style.toString().toLowerCase() == "outline") {
	    ctx.strokeStyle = this.color.toString();
	    ctx.strokeRect(x, y, this.width, this.height);
	} else {
	    ctx.fillStyle = this.color.toString();
	    ctx.fillRect(x, y, this.width, this.height);
	}
    };

    RectangleImage.prototype.getWidth = function() {
	return this.width;
    };


    RectangleImage.prototype.getHeight = function() {
	return this.height;
    };


    //////////////////////////////////////////////////////////////////////
    
    var TextImage = function(msg, size, color) {
	BaseImage.call(this, 0, 0);
	this.msg = msg;
	this.size = size;
	this.color = color;
	this.font = this.size + "px Optimer";

	
	var canvas = plt.world.Kernel.makeCanvas(0, 0);
 	var ctx = canvas.getContext("2d");
	ctx.font = this.font;
	var metrics = ctx.measureText(msg);

	this.width = metrics.width;
	// KLUDGE: I don't know how to get at the height.
	this.height = ctx.measureText("m").width + 20;

    }

    TextImage.prototype = heir(BaseImage.prototype);

    TextImage.prototype.render = function(ctx, x, y) {
	ctx.save();
	ctx.font = this.font;
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillStyle = this.color.toString();
	ctx.fillText(this.msg, x, y);
	ctx.restore();
    };
    
    TextImage.prototype.getWidth = function() {
	return this.width;
    };


    TextImage.prototype.getHeight = function() {
	return this.height;
    };


    //////////////////////////////////////////////////////////////////////

    var CircleImage = function(radius, style, color) {
	BaseImage.call(this, radius, radius);
	this.radius = radius;
	this.style = style;
	this.color = color;
    }
    CircleImage.prototype = heir(BaseImage.prototype);

    CircleImage.prototype.render = function(ctx, x, y) {
	ctx.save();
	ctx.beginPath();
	ctx.arc(x + this.radius,
		y + this.radius,
		this.radius, 0, 2*Math.PI, false);
	if (this.style.toString().toLowerCase() == "outline") {
	    ctx.strokeStyle = this.color.toString();
	    ctx.stroke();
	} else {
	    ctx.fillStyle = this.color.toString();
	    ctx.fill();
	}
	ctx.closePath();
	ctx.restore();
    };
    
    CircleImage.prototype.getWidth = function() {
	return this.radius * 2;
    };

    CircleImage.prototype.getHeight = function() {
	return this.radius * 2;
    };



    //////////////////////////////////////////////////////////////////////


    // StarImage: fixnum fixnum fixnum color -> image
    var StarImage = function(points, outer, inner, style, color) {
	BaseImage.call(this,
		       Math.max(outer, inner),
		       Math.max(outer, inner));
	this.points = points;
	this.outer = outer;
	this.inner = inner;
	this.style = style;
	this.color = color;

	this.radius = Math.max(this.inner, this.outer);
    };

    StarImage.prototype = heir(BaseImage.prototype);

    var oneDegreeAsRadian = Math.PI / 180;

    // render: context fixnum fixnum -> void
    // Draws a star on the given context.
    // Most of this code here adapted from the Canvas tutorial at:
    // http://developer.apple.com/safari/articles/makinggraphicswithcanvas.html
    StarImage.prototype.render = function(ctx, x, y) {
	ctx.save();
	ctx.beginPath();
	for( var pt = 0; pt < (this.points * 2) + 1; pt++ ) {
	    var rads = ( ( 360 / (2 * this.points) ) * pt ) * oneDegreeAsRadian - 0.5;
	    var radius = ( pt % 2 == 1 ) ? this.outer : this.inner;
	    ctx.lineTo(x + this.radius + ( Math.sin( rads ) * radius ), 
		       y + this.radius + ( Math.cos( rads ) * radius ) );
	}
	if (this.style.toString().toLowerCase() == "outline") {
	    ctx.strokeStyle = this.color.toString();
	    ctx.stroke();
	} else {
	    ctx.fillStyle = this.color.toString();
	    ctx.fill();
	}
	ctx.closePath();
	ctx.restore();
    };
    
    // getWidth: -> fixnum
    StarImage.prototype.getWidth = function() {
	return this.radius * 2;
    };


    // getHeight: -> fixnum
    StarImage.prototype.getHeight = function() {
	return this.radius * 2;
    };




    //////////////////////////////////////////////////////////////////////
    //Triangle
    ///////
    var TriangleImage = function(side, style, color) {
	BaseImage.call(this, side, side);
	this.side = side;
	this.style = style;
	this.color = color;
    }
    TriangleImage.prototype = heir(BaseImage.prototype);


    TriangleImage.prototype.render = function(ctx, x, y) {
	var width = this.getWidth();
	var height = this.getHeight();

	ctx.beginPath();
	ctx.moveTo(x + this.side/2, y);
	ctx.lineTo(x + width, y + height);
	ctx.lineTo(x, y + height);
	ctx.closePath();

	if (this.style.toString().toLowerCase() == "outline") {
	    ctx.strokeStyle = this.color.toString();
	    ctx.stroke();
	}
	else {
	    ctx.fillStyle = this.color.toString();
	    ctx.fill();
	}
    };
    


    TriangleImage.prototype.getWidth = function() {
	return this.side;
    };

    TriangleImage.prototype.getHeight = function() {
	return Math.ceil(this.side * Math.sqrt(3) / 2);
    };




    //////////////////////////////////////////////////////////////////////
    //Ellipse 
    var EllipseImage = function(width, height, style, color) {
	BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
	this.width = width;
	this.height = height;
	this.style = style;
	this.color = color;
    }

    EllipseImage.prototype = heir(BaseImage.prototype);

    
    EllipseImage.prototype.render = function(ctx, aX, aY) {
	ctx.save();
	// Most of this code is taken from:
	// http://webreflection.blogspot.com/2009/01/ellipse-and-circle-for-canvas-2d.html
        var hB = (this.width / 2) * .5522848,
            vB = (this.height / 2) * .5522848,
            eX = aX + this.width,
            eY = aY + this.height,
            mX = aX + this.width / 2,
            mY = aY + this.height / 2;
        ctx.moveTo(aX, mY);
        ctx.bezierCurveTo(aX, mY - vB, mX - hB, aY, mX, aY);
        ctx.bezierCurveTo(mX + hB, aY, eX, mY - vB, eX, mY);
        ctx.bezierCurveTo(eX, mY + vB, mX + hB, eY, mX, eY);
        ctx.bezierCurveTo(mX - hB, eY, aX, mY + vB, aX, mY);
        ctx.closePath();
	if (this.style.toString().toLowerCase() == "outline") {
 	    ctx.strokeStyle = this.color.toString();
	    ctx.stroke();
	}
	else {
 	    ctx.fillStyle = this.color.toString();
	    ctx.fill();
	}
	ctx.restore();
    };
    
    EllipseImage.prototype.getWidth = function() {
	return this.width;
    };

    EllipseImage.prototype.getHeight = function() {
	return this.height;
    };


    //////////////////////////////////////////////////////////////////////
    //Line
    var LineImage = function(x, y, color) {
	BaseImage.call(this, 0, 0);
	this.x = x;
	this.y = y;
	this.color = color;
    }

    LineImage.prototype = heir(BaseImage.prototype);

    
    LineImage.prototype.render = function(ctx, xstart, ystart) {
	ctx.save();
	ctx.moveTo(0, 0);
	ctx.lineTo((this.x + xstart),
		   (this.y + ystart));
	ctx.strokeStyle = this.color.toString();
	ctx.stroke();
	ctx.restore();
    };
    

    LineImage.prototype.getWidth = function() {
	return (this.x + 1);
    };
    

    LineImage.prototype.getHeight = function() {
	return (this.y + 1);
    };





    //////////////////////////////////////////////////////////////////////
    // Effects

    /**
     * applyEffect: compound-effect -> (arrayof (world -> world))

     applyEffect applies all of the effects

     @param aCompEffect a compound effect is either a scheme list of
     compound effects or a single primitive effect */

    plt.world.Kernel.applyEffect = function(aCompEffect) {
	var results = [];
	if (plt.Kernel.empty_question_(aCompEffect)) {
    	    // Do Nothing
	} else if (plt.Kernel.pair_question_(aCompEffect)) {
    	    results = results.concat(
		plt.world.Kernel.applyEffect(aCompEffect.first()));
    	    results = results.concat(
		plt.world.Kernel.applyEffect(aCompEffect.rest()));
	} else {
	    var newResult = aCompEffect.run();
	    if (newResult) {
		results = results.concat(newResult);
	    }
	}
	return results;
    }


    //////////////////////////////////////////////////////////////////////////




    // Color database
    var ColorDb = function() {
	this.colors = {};
    }
    ColorDb.prototype.put = function(name, color) {
	this.colors[name] = color;
    };

    ColorDb.prototype.get = function(name) {
	return this.colors[name.toString().toUpperCase()];
    };


    plt.world.Kernel.make_dash_color = function(r, g, b) {
	var isColorNumber = function(x) {
	    return (plt.types.NumberTower.lessThanOrEqual
		    (plt.types.Rational.ZERO, x) &&
		    plt.types.NumberTower.lessThanOrEqual
		    (x, plt.types.Rational.makeInstance(255, 1)));
	}
	plt.Kernel.check(r, isColorNumber, "make-color", "number between 0 and 255", 1);
	plt.Kernel.check(g, isColorNumber, "make-color", "number between 0 and 255", 2);
	plt.Kernel.check(b, isColorNumber, "make-color", "number between 0 and 255", 3);

	return new ColorRecord(plt.types.NumberTower.toFixnum(r),
			       plt.types.NumberTower.toFixnum(g),
			       plt.types.NumberTower.toFixnum(b));
    };

    // FIXME: add accessors
    // FIXME: update toString to handle the primitive field values.

    var ColorRecord = function(r, g, b) {
	plt.types.Struct.call(this, "make-color", [r, g, b]);
    };
    ColorRecord.prototype = heir(plt.types.Struct.prototype);

    ColorRecord.prototype.toString = function() {
	return "rgb(" + this._fields[0] + "," + this._fields[1] + "," + this._fields[2] + ")";
    };

    ColorRecord.prototype.toRGBAString = function() {
	return "rgba(" + this._fields[0] + "," + this._fields[1] + "," + this._fields[2] + ", 1)";
    }

    var colorDb = new ColorDb();
    colorDb.put("ORANGE", new ColorRecord(255, 165, 0));
    colorDb.put("RED", new ColorRecord(255, 0, 0));
    colorDb.put("ORANGERED", new ColorRecord(255, 69, 0));
    colorDb.put("TOMATO", new ColorRecord(255, 99, 71));
    colorDb.put("DARKRED", new ColorRecord(139, 0, 0));
    colorDb.put("RED", new ColorRecord(255, 0, 0));
    colorDb.put("FIREBRICK", new ColorRecord(178, 34, 34));
    colorDb.put("CRIMSON", new ColorRecord(220, 20, 60));
    colorDb.put("DEEPPINK", new ColorRecord(255, 20, 147));
    colorDb.put("MAROON", new ColorRecord(176, 48, 96));
    colorDb.put("INDIAN RED", new ColorRecord(205, 92, 92));
    colorDb.put("INDIANRED", new ColorRecord(205, 92, 92));
    colorDb.put("MEDIUM VIOLET RED", new ColorRecord(199, 21, 133));
    colorDb.put("MEDIUMVIOLETRED", new ColorRecord(199, 21, 133));
    colorDb.put("VIOLET RED", new ColorRecord(208, 32, 144));
    colorDb.put("VIOLETRED", new ColorRecord(208, 32, 144));
    colorDb.put("LIGHTCORAL", new ColorRecord(240, 128, 128));
    colorDb.put("HOTPINK", new ColorRecord(255, 105, 180));
    colorDb.put("PALEVIOLETRED", new ColorRecord(219, 112, 147));
    colorDb.put("LIGHTPINK", new ColorRecord(255, 182, 193));
    colorDb.put("ROSYBROWN", new ColorRecord(188, 143, 143));
    colorDb.put("PINK", new ColorRecord(255, 192, 203));
    colorDb.put("ORCHID", new ColorRecord(218, 112, 214));
    colorDb.put("LAVENDERBLUSH", new ColorRecord(255, 240, 245));
    colorDb.put("SNOW", new ColorRecord(255, 250, 250));
    colorDb.put("CHOCOLATE", new ColorRecord(210, 105, 30));
    colorDb.put("SADDLEBROWN", new ColorRecord(139, 69, 19));
    colorDb.put("BROWN", new ColorRecord(132, 60, 36));
    colorDb.put("DARKORANGE", new ColorRecord(255, 140, 0));
    colorDb.put("CORAL", new ColorRecord(255, 127, 80));
    colorDb.put("SIENNA", new ColorRecord(160, 82, 45));
    colorDb.put("ORANGE", new ColorRecord(255, 165, 0));
    colorDb.put("SALMON", new ColorRecord(250, 128, 114));
    colorDb.put("PERU", new ColorRecord(205, 133, 63));
    colorDb.put("DARKGOLDENROD", new ColorRecord(184, 134, 11));
    colorDb.put("GOLDENROD", new ColorRecord(218, 165, 32));
    colorDb.put("SANDYBROWN", new ColorRecord(244, 164, 96));
    colorDb.put("LIGHTSALMON", new ColorRecord(255, 160, 122));
    colorDb.put("DARKSALMON", new ColorRecord(233, 150, 122));
    colorDb.put("GOLD", new ColorRecord(255, 215, 0));
    colorDb.put("YELLOW", new ColorRecord(255, 255, 0));
    colorDb.put("OLIVE", new ColorRecord(128, 128, 0));
    colorDb.put("BURLYWOOD", new ColorRecord(222, 184, 135));
    colorDb.put("TAN", new ColorRecord(210, 180, 140));
    colorDb.put("NAVAJOWHITE", new ColorRecord(255, 222, 173));
    colorDb.put("PEACHPUFF", new ColorRecord(255, 218, 185));
    colorDb.put("KHAKI", new ColorRecord(240, 230, 140));
    colorDb.put("DARKKHAKI", new ColorRecord(189, 183, 107));
    colorDb.put("MOCCASIN", new ColorRecord(255, 228, 181));
    colorDb.put("WHEAT", new ColorRecord(245, 222, 179));
    colorDb.put("BISQUE", new ColorRecord(255, 228, 196));
    colorDb.put("PALEGOLDENROD", new ColorRecord(238, 232, 170));
    colorDb.put("BLANCHEDALMOND", new ColorRecord(255, 235, 205));
    colorDb.put("MEDIUM GOLDENROD", new ColorRecord(234, 234, 173));
    colorDb.put("MEDIUMGOLDENROD", new ColorRecord(234, 234, 173));
    colorDb.put("PAPAYAWHIP", new ColorRecord(255, 239, 213));
    colorDb.put("MISTYROSE", new ColorRecord(255, 228, 225));
    colorDb.put("LEMONCHIFFON", new ColorRecord(255, 250, 205));
    colorDb.put("ANTIQUEWHITE", new ColorRecord(250, 235, 215));
    colorDb.put("CORNSILK", new ColorRecord(255, 248, 220));
    colorDb.put("LIGHTGOLDENRODYELLOW", new ColorRecord(250, 250, 210));
    colorDb.put("OLDLACE", new ColorRecord(253, 245, 230));
    colorDb.put("LINEN", new ColorRecord(250, 240, 230));
    colorDb.put("LIGHTYELLOW", new ColorRecord(255, 255, 224));
    colorDb.put("SEASHELL", new ColorRecord(255, 245, 238));
    colorDb.put("BEIGE", new ColorRecord(245, 245, 220));
    colorDb.put("FLORALWHITE", new ColorRecord(255, 250, 240));
    colorDb.put("IVORY", new ColorRecord(255, 255, 240));
    colorDb.put("GREEN", new ColorRecord(0, 255, 0));
    colorDb.put("LAWNGREEN", new ColorRecord(124, 252, 0));
    colorDb.put("CHARTREUSE", new ColorRecord(127, 255, 0));
    colorDb.put("GREEN YELLOW", new ColorRecord(173, 255, 47));
    colorDb.put("GREENYELLOW", new ColorRecord(173, 255, 47));
    colorDb.put("YELLOW GREEN", new ColorRecord(154, 205, 50));
    colorDb.put("YELLOWGREEN", new ColorRecord(154, 205, 50));
    colorDb.put("MEDIUM FOREST GREEN", new ColorRecord(107, 142, 35));
    colorDb.put("OLIVEDRAB", new ColorRecord(107, 142, 35));
    colorDb.put("MEDIUMFORESTGREEN", new ColorRecord(107, 142, 35));
    colorDb.put("DARK OLIVE GREEN", new ColorRecord(85, 107, 47));
    colorDb.put("DARKOLIVEGREEN", new ColorRecord(85, 107, 47));
    colorDb.put("DARKSEAGREEN", new ColorRecord(143, 188, 139));
    colorDb.put("LIME", new ColorRecord(0, 255, 0));
    colorDb.put("DARK GREEN", new ColorRecord(0, 100, 0));
    colorDb.put("DARKGREEN", new ColorRecord(0, 100, 0));
    colorDb.put("LIME GREEN", new ColorRecord(50, 205, 50));
    colorDb.put("LIMEGREEN", new ColorRecord(50, 205, 50));
    colorDb.put("FOREST GREEN", new ColorRecord(34, 139, 34));
    colorDb.put("FORESTGREEN", new ColorRecord(34, 139, 34));
    colorDb.put("SPRING GREEN", new ColorRecord(0, 255, 127));
    colorDb.put("SPRINGGREEN", new ColorRecord(0, 255, 127));
    colorDb.put("MEDIUM SPRING GREEN", new ColorRecord(0, 250, 154));
    colorDb.put("MEDIUMSPRINGGREEN", new ColorRecord(0, 250, 154));
    colorDb.put("SEA GREEN", new ColorRecord(46, 139, 87));
    colorDb.put("SEAGREEN", new ColorRecord(46, 139, 87));
    colorDb.put("MEDIUM SEA GREEN", new ColorRecord(60, 179, 113));
    colorDb.put("MEDIUMSEAGREEN", new ColorRecord(60, 179, 113));
    colorDb.put("AQUAMARINE", new ColorRecord(112, 216, 144));
    colorDb.put("LIGHTGREEN", new ColorRecord(144, 238, 144));
    colorDb.put("PALE GREEN", new ColorRecord(152, 251, 152));
    colorDb.put("PALEGREEN", new ColorRecord(152, 251, 152));
    colorDb.put("MEDIUM AQUAMARINE", new ColorRecord(102, 205, 170));
    colorDb.put("MEDIUMAQUAMARINE", new ColorRecord(102, 205, 170));
    colorDb.put("TURQUOISE", new ColorRecord(64, 224, 208));
    colorDb.put("LIGHTSEAGREEN", new ColorRecord(32, 178, 170));
    colorDb.put("MEDIUM TURQUOISE", new ColorRecord(72, 209, 204));
    colorDb.put("MEDIUMTURQUOISE", new ColorRecord(72, 209, 204));
    colorDb.put("HONEYDEW", new ColorRecord(240, 255, 240));
    colorDb.put("MINTCREAM", new ColorRecord(245, 255, 250));
    colorDb.put("ROYALBLUE", new ColorRecord(65, 105, 225));
    colorDb.put("DODGERBLUE", new ColorRecord(30, 144, 255));
    colorDb.put("DEEPSKYBLUE", new ColorRecord(0, 191, 255));
    colorDb.put("CORNFLOWERBLUE", new ColorRecord(100, 149, 237));
    colorDb.put("STEEL BLUE", new ColorRecord(70, 130, 180));
    colorDb.put("STEELBLUE", new ColorRecord(70, 130, 180));
    colorDb.put("LIGHTSKYBLUE", new ColorRecord(135, 206, 250));
    colorDb.put("DARK TURQUOISE", new ColorRecord(0, 206, 209));
    colorDb.put("DARKTURQUOISE", new ColorRecord(0, 206, 209));
    colorDb.put("CYAN", new ColorRecord(0, 255, 255));
    colorDb.put("AQUA", new ColorRecord(0, 255, 255));
    colorDb.put("DARKCYAN", new ColorRecord(0, 139, 139));
    colorDb.put("TEAL", new ColorRecord(0, 128, 128));
    colorDb.put("SKY BLUE", new ColorRecord(135, 206, 235));
    colorDb.put("SKYBLUE", new ColorRecord(135, 206, 235));
    colorDb.put("CADET BLUE", new ColorRecord(96, 160, 160));
    colorDb.put("CADETBLUE", new ColorRecord(95, 158, 160));
    colorDb.put("DARK SLATE GRAY", new ColorRecord(47, 79, 79));
    colorDb.put("DARKSLATEGRAY", new ColorRecord(47, 79, 79));
    colorDb.put("LIGHTSLATEGRAY", new ColorRecord(119, 136, 153));
    colorDb.put("SLATEGRAY", new ColorRecord(112, 128, 144));
    colorDb.put("LIGHT STEEL BLUE", new ColorRecord(176, 196, 222));
    colorDb.put("LIGHTSTEELBLUE", new ColorRecord(176, 196, 222));
    colorDb.put("LIGHT BLUE", new ColorRecord(173, 216, 230));
    colorDb.put("LIGHTBLUE", new ColorRecord(173, 216, 230));
    colorDb.put("POWDERBLUE", new ColorRecord(176, 224, 230));
    colorDb.put("PALETURQUOISE", new ColorRecord(175, 238, 238));
    colorDb.put("LIGHTCYAN", new ColorRecord(224, 255, 255));
    colorDb.put("ALICEBLUE", new ColorRecord(240, 248, 255));
    colorDb.put("AZURE", new ColorRecord(240, 255, 255));
    colorDb.put("MEDIUM BLUE", new ColorRecord(0, 0, 205));
    colorDb.put("MEDIUMBLUE", new ColorRecord(0, 0, 205));
    colorDb.put("DARKBLUE", new ColorRecord(0, 0, 139));
    colorDb.put("MIDNIGHT BLUE", new ColorRecord(25, 25, 112));
    colorDb.put("MIDNIGHTBLUE", new ColorRecord(25, 25, 112));
    colorDb.put("NAVY", new ColorRecord(36, 36, 140));
    colorDb.put("BLUE", new ColorRecord(0, 0, 255));
    colorDb.put("INDIGO", new ColorRecord(75, 0, 130));
    colorDb.put("BLUE VIOLET", new ColorRecord(138, 43, 226));
    colorDb.put("BLUEVIOLET", new ColorRecord(138, 43, 226));
    colorDb.put("MEDIUM SLATE BLUE", new ColorRecord(123, 104, 238));
    colorDb.put("MEDIUMSLATEBLUE", new ColorRecord(123, 104, 238));
    colorDb.put("SLATE BLUE", new ColorRecord(106, 90, 205));
    colorDb.put("SLATEBLUE", new ColorRecord(106, 90, 205));
    colorDb.put("PURPLE", new ColorRecord(160, 32, 240));
    colorDb.put("DARK SLATE BLUE", new ColorRecord(72, 61, 139));
    colorDb.put("DARKSLATEBLUE", new ColorRecord(72, 61, 139));
    colorDb.put("DARKVIOLET", new ColorRecord(148, 0, 211));
    colorDb.put("DARK ORCHID", new ColorRecord(153, 50, 204));
    colorDb.put("DARKORCHID", new ColorRecord(153, 50, 204));
    colorDb.put("MEDIUMPURPLE", new ColorRecord(147, 112, 219));
    colorDb.put("CORNFLOWER BLUE", new ColorRecord(68, 64, 108));
    colorDb.put("MEDIUM ORCHID", new ColorRecord(186, 85, 211));
    colorDb.put("MEDIUMORCHID", new ColorRecord(186, 85, 211));
    colorDb.put("MAGENTA", new ColorRecord(255, 0, 255));
    colorDb.put("FUCHSIA", new ColorRecord(255, 0, 255));
    colorDb.put("DARKMAGENTA", new ColorRecord(139, 0, 139));
    colorDb.put("VIOLET", new ColorRecord(238, 130, 238));
    colorDb.put("PLUM", new ColorRecord(221, 160, 221));
    colorDb.put("LAVENDER", new ColorRecord(230, 230, 250));
    colorDb.put("THISTLE", new ColorRecord(216, 191, 216));
    colorDb.put("GHOSTWHITE", new ColorRecord(248, 248, 255));
    colorDb.put("WHITE", new ColorRecord(255, 255, 255));
    colorDb.put("WHITESMOKE", new ColorRecord(245, 245, 245));
    colorDb.put("GAINSBORO", new ColorRecord(220, 220, 220));
    colorDb.put("LIGHT GRAY", new ColorRecord(211, 211, 211));
    colorDb.put("LIGHTGRAY", new ColorRecord(211, 211, 211));
    colorDb.put("SILVER", new ColorRecord(192, 192, 192));
    colorDb.put("GRAY", new ColorRecord(190, 190, 190));
    colorDb.put("DARK GRAY", new ColorRecord(169, 169, 169));
    colorDb.put("DARKGRAY", new ColorRecord(169, 169, 169));
    colorDb.put("DIM GRAY", new ColorRecord(105, 105, 105));
    colorDb.put("DIMGRAY", new ColorRecord(105, 105, 105));
    colorDb.put("BLACK", new ColorRecord(0, 0, 0));









})();

goog.provide('plt.Jsworld');


// Stuff here is copy-and-pasted from Chris's JSWorld.  We
// namespace-protect it, and add the Javascript <-> Moby wrapper
// functions here.

(function() {

    var Jsworld = plt.Jsworld;


    var currentFocusedNode = false;



    //
    // WORLD STUFFS
    //

    function InitialWorld() {}

    var world = new InitialWorld();
    var worldListeners = [];
    var runningBigBangs = [];



    // Close all world computations.
    Jsworld.shutdown = function() {
	while(runningBigBangs.length > 0) {
	    var currentRecord = runningBigBangs.pop();
	    if (currentRecord) { currentRecord.pause(); }
	}
	clear_running_state();
    }



    function add_world_listener(listener) {
	worldListeners.push(listener);
    }


    function remove_world_listener(listener) {
	var index = worldListeners.indexOf(listener);
	if (index != -1) {
	    worldListeners.splice(index, 1);
	}
    }

    function clear_running_state() {
	world = new InitialWorld();
	worldListeners = [];
    }



    // change_world: (world -> world) -> void
    // Adjust the world, and notify all listeners.
    function change_world(updater) {
	var originalWorld = world;
	try {
	    world = updater(world);
	} catch(e) {
	    world = originalWorld;
	    throw e;
	}

	// Originally, we'd optimize away the update if the world
	// hasn't changed, but with mutation, we no longer can
	// make that optimization.
	for(var i = 0; i < worldListeners.length; i++) {
	    try {
		worldListeners[i](world, originalWorld);
	    } catch (e) {
		// Revert the world state
		world = originalWorld;
		throw e;
	    }
	}
    }
    Jsworld.change_world = change_world;




    //
    // STUFF THAT SHOULD REALLY BE IN ECMASCRIPT
    //
    Number.prototype.NaN0=function(){return isNaN(this)?0:this;}
    function getPosition(e){
	var left = 0;
	var top  = 0;
	while (e.offsetParent){
	    left += e.offsetLeft + (e.currentStyle?(parseInt(e.currentStyle.borderLeftWidth)).NaN0():0);
	    top  += e.offsetTop  + (e.currentStyle?(parseInt(e.currentStyle.borderTopWidth)).NaN0():0);
	    e     = e.offsetParent;
	}
	left += e.offsetLeft + (e.currentStyle?(parseInt(e.currentStyle.borderLeftWidth)).NaN0():0);
	top  += e.offsetTop  + (e.currentStyle?(parseInt(e.currentStyle.borderTopWidth)).NaN0():0);
	return {x:left, y:top};	
    }
    Jsworld.getPosition = getPosition;


    var gensym_counter = 0;
    function gensym(){ return gensym_counter++;}
    Jsworld.gensym = gensym;


    function map(a, f) {
	var b = new Array(a.length);
	for (var i = 0; i < a.length; i++) b[i] = f(a[i]);
	return b;
    }
    Jsworld.map = map;



    function concat_map(a, f) {
	var b = [];
	for (var i = 0; i < a.length; i++) b = b.concat(f(a[i]));
	return b;
    }


    function mapi(a, f) {
	var b = new Array(a.length);
	for (var i = 0; i < a.length; i++) b[i] = f(a[i], i);
	return b;
    }
    Jsworld.mapi = mapi;


    function fold(a, x, f) {
	for (var i = 0; i < a.length; i++)
	    x = f(a[i], x);
	return x;
    }
    Jsworld.fold = fold;


    function augment(o, a) {
	var oo = {};
	for (var e in o)
	    oo[e] = o[e];
	for (var e in a)
	    oo[e] = a[e];
	return oo;
    }
    Jsworld.augment = augment;


    function assoc_cons(o, k, v) {
	var oo = {};
	for (var e in o)
	    oo[e] = o[e];
	oo[k] = v;
	return oo;
    }
    Jsworld.assoc_cons = assoc_cons;


    function cons(array, value) {
	return array.concat([value]);
    }
    Jsworld.cons = cons;


    function append(array1, array2){
	return array1.concat(array2);
    }
    Jsworld.append = append;

    function array_join(array1, array2){
	var joined = [];
	for (var i = 0; i < array1.length; i++)
	    joined.push([array1[i], array2[i]]);
	return joined;
    }
    Jsworld.array_join = array_join;


    function removeq(array, value) {
	for (var i = 0; i < array.length; i++)
	    if (array[i] === value){
		return array.slice(0, i).concat(array.slice(i+1));
	    }			
	return array;
    }
    Jsworld.removeq = removeq;

    function removef(array, f) {
	for (var i = 0; i < array.length; i++)
	    if (f(array[i]))
		return array.slice(0, i).concat(array.slice(i+1));
	return array;
    }
    Jsworld.removef = removef;


    function filter(array, f) {
	for (var i = 0; i < array.length; i++)
	    if (f(array[i]))
		return array.slice(0, i).concat(filter(array.slice(i+1), f));
	return array;
    }
    Jsworld.filter = filter;


    function without(obj, attrib) {
	var o = {};
	for (var a in obj)
	    if (a != attrib)
		o[a] = obj[a];
	return o;
    }
    Jsworld.without = without;


    function memberq(a, x) {
	for (var i = 0; i < a.length; i++)
	    if (a[i] === x) return true;
	return false;
    }
    Jsworld.memberq = memberq;


    function member(a, x) {
	for (var i = 0; i < a.length; i++)
	    if (a[i] == x) return true;
	return false;
    }
    Jsworld.member = member;



    function head(a){
	return a[0];
    }
    Jsworld.head = head;


    function tail(a){
	return a.slice(1, a.length);
    }
    Jsworld.tail = tail;

    //
    // DOM UPDATING STUFFS
    //

    // tree(N): { node: N, children: [tree(N)] }
    // relation(N): { relation: 'parent', parent: N, child: N } | { relation: 'neighbor', left: N, right: N }
    // relations(N): [relation(N)]
    // nodes(N): [N]
    // css(N): [css_node(N)]
    // css_node(N): { node: N, attribs: attribs } | { className: string, attribs: attribs }
    // attrib: { attrib: string, values: [string] }
    // attribs: [attrib]

    // treeable(nodes(N), relations(N)) = bool
    /*function treeable(nodes, relations) {
    // for all neighbor relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'neighbor') {
    var x = relations[i].left, y = relations[i].right;
 
    // there does not exist a neighbor relation between x and z!=y or z!=x and y
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation === 'neighbor')
    if (relations[j].left === x && relations[j].right !== y ||
    relations[j].left !== x && relations[j].right === y)
    return false;
    }
 
    // for all parent relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'parent') {
    var x = relations[i].parent, y = relations[i].child;
 
    // there does not exist a parent relation between z!=x and y
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation == 'parent')
    if (relations[j].parent !== x && relations[j].child === y)
    return false;
    }
 
    // for all neighbor relations between x and y
    for (var i = 0; i < relations.length; i++)
    if (relations[i].relation == 'neighbor') {
    var x = relations[i].left, y = relations[i].right;
 
    // all parent relations between z and x or y share the same z
    for (var j = 0; j < relations.length; j++)
    if (relations[j].relation == 'parent')
    for (var k = 0; k < relations.length; k++)
    if (relations[k].relation == 'parent')
    if (relations[j].child === x && relations[k].child === y &&
    relations[j].parent !== relations[k].parent)
    return false;
    }
 
    return true;
    }*/


    // node_to_tree: dom -> dom-tree
    // Given a native dom node, produces the appropriate tree.
    function node_to_tree(domNode) {
	var result = [domNode];
	for (var c = domNode.firstChild; c != null; c = c.nextSibling) {
	    result.push(node_to_tree(c));
	}
	return result;
    }
    Jsworld.node_to_tree = node_to_tree;



    // nodes(tree(N)) = nodes(N)
    function nodes(tree) {
	var ret = [tree.node];
	
	if (tree.node.jsworldOpaque == true) {
	    return ret;
	}

	for (var i = 0; i < tree.children.length; i++)
	    ret = ret.concat(nodes(tree.children[i]));
	
	return ret;
    }

    // nodeEq: node node -> boolean
    // Returns true if the two nodes should be the same.
    function nodeEq(node1, node2) {
	return (node1 && node2 && node1 === node2);
    }

    function nodeNotEq(node1, node2) {
	return ! nodeEq(node1, node2);
    }



    // relations(tree(N)) = relations(N)
    function relations(tree) {
	var ret = [];
	
	if (tree.node.jsworldOpaque == true) { return []; }

	for (var i = 0; i < tree.children.length; i++)
	    ret.push({ relation: 'parent', parent: tree.node, child: tree.children[i].node });
	
	for (var i = 0; i < tree.children.length - 1; i++)
	    ret.push({ relation: 'neighbor', left: tree.children[i].node, right: tree.children[i + 1].node });
	
	for (var i = 0; i < tree.children.length; i++)
	    ret = ret.concat(relations(tree.children[i]));
	
	return ret;
    }


    function appendChild(parent, child) {
	parent.appendChild(child);
    }


    // update_dom(nodes(Node), relations(Node)) = void
    function update_dom(toplevelNode, nodes, relations) {

	// TODO: rewrite this to move stuff all in one go... possible? necessary?
	
	// move all children to their proper parents
	for (var i = 0; i < relations.length; i++) {
	    if (relations[i].relation == 'parent') {
		var parent = relations[i].parent, child = relations[i].child;
		if (nodeNotEq(child.parentNode, parent)) {
		    appendChild(parent, child);
		} else {
		}
	    }
	}
	
	// arrange siblings in proper order
	// truly terrible... BUBBLE SORT
	for (;;) {
	    var unsorted = false;
		
	    for (var i = 0; i < relations.length; i++) {
		if (relations[i].relation == 'neighbor') {
		    var left = relations[i].left, right = relations[i].right;
				
		    if (nodeNotEq(left.nextSibling, right)) {
			left.parentNode.insertBefore(left, right)
			unsorted = true;
		    }
		}
	    }
		
	    if (!unsorted) break;
	}

	
	// remove dead nodes
	var live_nodes;
	
	// it is my hope that by sorting the nodes we get the worse of
	// O(n*log n) or O(m) performance instead of O(n*m)
	// for all I know Node.compareDocumentPosition is O(m)
	// and now we get O(n*m*log n)
	function positionComparator(a, b) {
	    var rel = a.compareDocumentPosition(b);
	    // children first
	    if (rel & a.DOCUMENT_POSITION_CONTAINED_BY) return 1;
	    if (rel & a.DOCUMENT_POSITION_CONTAINS) return -1;
	    // otherwise use precedes/follows
	    if (rel & a.DOCUMENT_POSITION_FOLLOWING) return -1;
	    if (rel & a.DOCUMENT_POSITION_PRECEDING) return 1;
	    // otherwise same node or don't care, we'll skip it anyway
	    return 0;
	}
	
	try {
	    // don't take out concat, it doubles as a shallow copy
	    // (as well as ensuring we keep document.body)
	    live_nodes = nodes.concat(toplevelNode).sort(positionComparator);
	}
	catch (e) {
	    // probably doesn't implement Node.compareDocumentPosition
	    live_nodes = null;
	}
	
	var node = toplevelNode, stop = toplevelNode.parentNode;
	while (node != stop) {
	    for (;;) {
		// process first
		// move down
		if (node.firstChild == null || node.jsworldOpaque == true) break;
		node = node.firstChild;
	    }
		
	    while (node != stop) {
		var next = node.nextSibling, parent = node.parentNode;
		
		// process last
		var found = false;
		var foundNode = undefined;

		if (live_nodes != null)
		    while (live_nodes.length > 0 && positionComparator(node, live_nodes[0]) >= 0) {
			var other_node = live_nodes.shift();
			if (nodeEq(other_node, node)) {
			    found = true;
			    foundNode = other_node;
			    break;
			}
			// need to think about this
			//live_nodes.push(other_node);
		    }
		else
		    for (var i = 0; i < nodes.length; i++)
			if (nodeEq(nodes[i], node)) {
			    found = true;
			    foundNode = nodes[i];
			    break;
			}
			
		if (!found) {
		    if (node.isJsworldOpaque) {
		    } else {
			// reparent children, remove node
			while (node.firstChild != null) {
			    appendChild(node.parentNode, node.firstChild);
			}
		    }
				
		    next = node.nextSibling; // HACKY
		    node.parentNode.removeChild(node);
		} else {
		    mergeNodeValues(node, foundNode);
		}

		// move sideways
		if (next == null) node = parent;
		else { node = next; break; }
	    }
	}

	
	refresh_node_values(nodes);
    }

    function mergeNodeValues(node, foundNode) {
//	for (attr in node) {
//	    foundNode[attr] = node[attr];
//	}
    }



    // camelCase: string -> string
    function camelCase(name) {
	return name.replace(/\-(.)/g, function(m, l){return l.toUpperCase()});
    }


    function set_css_attribs(node, attribs) {
	for (var j = 0; j < attribs.length; j++){
	    node.style[camelCase(attribs[j].attrib)] = attribs[j].values.join(" ");
	}
    }


    // isMatchingCssSelector: node css -> boolean
    // Returns true if the CSS selector matches.
    function isMatchingCssSelector(node, css) {
	if (css.id.match(/^\./)) {
	    // Check to see if we match the class
	    return ('class' in node && member(node['class'].split(/\s+/),
					      css.id.substring(1)));
	} else {
	    return ('id' in node && node.id == css.id);
	}
    }


    function update_css(nodes, css) {
	// clear CSS
	for (var i = 0; i < nodes.length; i++) {
	    clearCss(nodes[i]);
	}
	
	// set CSS
	for (var i = 0; i < css.length; i++)
	    if ('id' in css[i]) {
		for (var j = 0; j < nodes.length; j++)
		    if (isMatchingCssSelector(nodes[j], css[i])) {
			set_css_attribs(nodes[j], css[i].attribs);
		    }
	    }
	    else set_css_attribs(css[i].node, css[i].attribs);
    }


    var clearCss = function(node) {
	if ('style' in node)
	    node.style.cssText = "";
    }



    // If any node cares about the world, send it in.
    function refresh_node_values(nodes) {
	for (var i = 0; i < nodes.length; i++) {
	    if (nodes[i].onWorldChange) {
		nodes[i].onWorldChange(world);
	    }
	}
    }



    function do_redraw(world, oldWorld, toplevelNode, redraw_func, redraw_css_func) {
	if (oldWorld instanceof InitialWorld) {
	    // Simple path
	    var t = sexp2tree(redraw_func(world));
	    var ns = nodes(t);
	    // HACK: css before dom, due to excanvas hack.
	    update_css(ns, sexp2css(redraw_css_func(world)));
	    update_dom(toplevelNode, ns, relations(t));
	    return;
	} else {
	    maintainingSelection(
		function() {
		    // We try to avoid updating the dom if the value
		    // hasn't changed.
 		    var oldRedraw = redraw_func(oldWorld);
 		    var newRedraw = redraw_func(world);	    
 		    var oldRedrawCss = redraw_css_func(oldWorld);
		    var newRedrawCss = redraw_css_func(world);
		    var t = sexp2tree(newRedraw);
 		    var ns = nodes(t);

		    // Try to save the current selection and preserve it across
		    // dom updates.

 		    if(oldRedraw !== newRedraw) {
			// Kludge: update the CSS styles first.
			// This is a workaround an issue with excanvas: any style change
			// clears the content of the canvas, so we do this first before
			// attaching the dom element.
 			update_css(ns, sexp2css(newRedrawCss));
 			update_dom(toplevelNode, ns, relations(t));
 		    } else {
			if(oldRedrawCss !== newRedrawCss) {
 			    update_css(ns, sexp2css(newRedrawCss));
			}
 		    }
		});
	}
    }


    // maintainingSelection: (-> void) -> void
    // Calls the thunk f while trying to maintain the current focused selection.
    function maintainingSelection(f) {
	var currentFocusedSelection;
	if (hasCurrentFocusedSelection()) {
	    currentFocusedSelection = getCurrentFocusedSelection();
	    f();
	    currentFocusedSelection.restore();
	} else {
	    f();
	}
    }



    function FocusedSelection() {
	this.focused = currentFocusedNode;
	this.selectionStart = currentFocusedNode.selectionStart;
	this.selectionEnd = currentFocusedNode.selectionEnd;
    }

    // Try to restore the focus.
    FocusedSelection.prototype.restore = function() {
	// FIXME: if we're scrolling through, what's visible
	// isn't restored yet.
	if (this.focused.parentNode) {
	    this.focused.selectionStart = this.selectionStart;
	    this.focused.selectionEnd = this.selectionEnd;
	    this.focused.focus();
	} else if (this.focused.id) {
	    var matching = document.getElementById(this.focused.id);
	    if (matching) {
		matching.selectionStart = this.selectionStart;
		matching.selectionEnd = this.selectionEnd;
		matching.focus();
	    }
	}
    };

    function hasCurrentFocusedSelection() {
	return currentFocusedNode != undefined;
    }

    function getCurrentFocusedSelection() {
	return new FocusedSelection();
    }



    //////////////////////////////////////////////////////////////////////

    function BigBangRecord(top, world, handlerCreators, handlers, attribs) {    
	this.top = top;
	this.world = world;
	this.handlers = handlers;
	this.handlerCreators = handlerCreators;
	this.attribs = attribs;
    }

    BigBangRecord.prototype.restart = function() {
	big_bang(this.top, this.world, this.handlerCreators, this.attribs);
    }
    
    BigBangRecord.prototype.pause = function() {
	for(var i = 0 ; i < this.handlers.length; i++) {
	    if (this.handlers[i] instanceof StopWhenHandler) {
		// Do nothing for now.
	    } else {
		this.handlers[i].onUnregister(top);
	    }
	}
    };
    //////////////////////////////////////////////////////////////////////

    // Notes: big_bang maintains a stack of activation records; it should be possible
    // to call big_bang re-entrantly.
    function big_bang(top, init_world, handlerCreators, attribs) {
	clear_running_state();

	// Construct a fresh set of the handlers.
	var handlers = map(handlerCreators, function(x) { return x();} );
	if (runningBigBangs.length > 0) { 
	    runningBigBangs[runningBigBangs.length - 1].pause();
	}

	// Create an activation record for this big-bang.
	var activationRecord = 
	    new BigBangRecord(top, init_world, handlerCreators, handlers, attribs);
	runningBigBangs.push(activationRecord);
	function keepRecordUpToDate(w, oldW) {
	    activationRecord.world = w;
	}
	add_world_listener(keepRecordUpToDate);



	// Monitor for termination and register the other handlers.
	var stopWhen = new StopWhenHandler(function(w) { return false; },
					   function(w) {});
	for(var i = 0 ; i < handlers.length; i++) {
	    if (handlers[i] instanceof StopWhenHandler) {
		stopWhen = handlers[i];
	    } else {
		handlers[i].onRegister(top);
	    }
	}
	function watchForTermination(w, oldW) {
	    if (stopWhen.test(w)) {
		stopWhen.receiver(world);		    
		var currentRecord = runningBigBangs.pop();
		if (currentRecord) { currentRecord.pause(); }
		if (runningBigBangs.length > 0) {
		    var restartingBigBang = runningBigBangs.pop();
		    restartingBigBang.restart();
		}
	    }
	};
	add_world_listener(watchForTermination);


	// Finally, begin the big-bang.
	copy_attribs(top, attribs);
	change_world(function(w) { return init_world; });


    }
    Jsworld.big_bang = big_bang;





    // on_tick: number (world -> world) -> handler
    function on_tick(delay, tick) {
	return function() {
	    var ticker = {
		watchId: -1,
		onRegister: function (top) { 
		    ticker.watchId = setInterval(function() { change_world(tick); },
						 delay);
		},

		onUnregister: function (top) {
		    clearInterval(ticker.watchId);
		}
	    };
	    return ticker;
	};
    }
    Jsworld.on_tick = on_tick;


    
    //  on_draw: (world -> (sexpof node)) (world -> (sexpof css-style)) -> handler
    function on_draw(redraw, redraw_css) {
	function wrappedRedraw(w) {
	    var newDomTree = redraw(w);
	    checkDomSexp(newDomTree, newDomTree);
	    return newDomTree;
	}

	return function() {
	    var drawer = {
		_top: null,
		_listener: function(w, oldW) { 
		    do_redraw(w, oldW, drawer._top, wrappedRedraw, redraw_css); 
		},
		onRegister: function (top) { 
		    drawer._top = top;
		    add_world_listener(drawer._listener);
		},

		onUnregister: function (top) {
		    remove_world_listener(drawer._listener);
		}
	    };
	    return drawer;
	};
    }
    Jsworld.on_draw = on_draw;



    function StopWhenHandler(test, receiver) {
	this.test = test;
	this.receiver = receiver;
    }
    // stop_when: (world -> boolean) (world -> boolean) -> handler
    function stop_when(test, receiver) {
	return function() {
	    if (receiver == undefined) {
		receiver = function(world) {};
	    }
	    return new StopWhenHandler(test, receiver);
	};
    }
    Jsworld.stop_when = stop_when;



    function on_world_change(f) {
	var listener = function(world, oldW) { f(world); };
	return function() {
	    return { 
		onRegister: function (top) { 
		    add_world_listener(listener); },
		onUnregister: function (top) {
		    remove_world_listener(listener)}
	    };
	};
    }
    Jsworld.on_world_change = on_world_change;





    // Compatibility for attaching events to nodes.
    function attachEvent(node, eventName, fn) {
	if (node.addEventListener) {
	    // Mozilla
	    node.addEventListener(eventName, fn, false);
	} else {
	    // IE
	    node.attachEvent('on' + eventName, fn, false);
	}
    }

    //
    // DOM CREATION STUFFS
    //

    // add_ev: node string (world event -> world) -> void
    // Attaches a world-updating handler when the world is changed.
    function add_ev(node, event, f) {
	attachEvent(node, event, function (e) { 
				      change_world(function(w) { 
					  return f(w, e); 
				      })});	
    }

    // add_ev_after: node string (world event -> world) -> void
    // Attaches a world-updating handler when the world is changed, but only
    // after the fired event has finished.
    function add_ev_after(node, event, f) {
	attachEvent(node, event, function (e) {
				  setTimeout(
				      function() {
					  change_world(function(w) { 
					      return f(w, e);
					  });

				      }, 0);
	});
    }


    function addFocusTracking(node) {
	attachEvent(node, "focus", function(e) {
	    currentFocusedNode = node; });
	attachEvent(node, "blur", function(e) {
	    currentFocusedNode = undefined;
	});
	return node;
    }





    //
    // WORLD STUFFS
    //


    function sexp2tree(sexp) {
	if(sexp.length == undefined) return { node: sexp, children: [] };
	else return { node: sexp[0], children: map(sexp.slice(1), sexp2tree) };
    }

    function sexp2attrib(sexp) {
	return { attrib: sexp[0], values: sexp.slice(1) };
    }

    function sexp2css_node(sexp) {
	var attribs = map(sexp.slice(1), sexp2attrib);
	if (typeof sexp[0] == 'string'){
	    return [{ id: sexp[0], attribs: attribs }];
	} else if ('length' in sexp[0]){
	    return map(sexp[0], function (id) { return { id: id, attribs: attribs } });
	} else {
	    return [{ node: sexp[0], attribs: attribs }];
	}
    }

    function sexp2css(sexp) {
	return concat_map(sexp, sexp2css_node);
    }



    function isTextNode(n) {
	return (n.nodeType == Node.TEXT_NODE);
    }


    function isElementNode(n) {
	return (n.nodeType == Node.ELEMENT_NODE);
    }


    var throwDomError = function(thing, topThing) {
	throw new JsworldDomError(
	    plt.Kernel.format(
		"Expected a non-empty array, received ~s within ~s",
		[thing, topThing]),
	    thing);
    };

    // checkDomSexp: X X -> boolean
    // Checks to see if thing is a DOM-sexp.  If not,
    // throws an object that explains why not.
    function checkDomSexp(thing, topThing) {
	if (! thing instanceof Array) {
	    throwDomError(thing, topThing);
	}
	if (thing.length == 0) {
	    throwDomError(thing, topThing);
	}

	// Check that the first element is a Text or an element.
	if (isTextNode(thing[0])) {
	    if (thing.length > 1) {
		throw new JsworldDomError(plt.Kernel.format("Text node ~s can not have children",
							    [thing]),
					  thing);
	    }
	} else if (isElementNode(thing[0])) {
	    for (var i = 1; i < thing.length; i++) {
		checkDomSexp(thing[i], thing);
	    }
	} else {
	    throw new JsworldDomError(
		plt.Kernel.format(
		    "expected a Text or an Element, received ~s within ~s",
		    [thing, topThing]),
		thing[0]);
	}
    }

    function JsworldDomError(msg, elt) {
	this.msg = msg;
	this.elt = elt;
    }
    JsworldDomError.prototype.toString = function() {
	return "on-draw: " + this.msg;
    }





    //
    // DOM CREATION STUFFS
    //


    function copy_attribs(node, attribs) {
	if (attribs)
	    for (a in attribs) {
		if (attribs.hasOwnProperty(a)) {
		    if (typeof attribs[a] == 'function')
			add_ev(node, a, attribs[a]);
		    else{
			node[a] = attribs[a];//eval("node."+a+"='"+attribs[a]+"'");
		    }
		}
	    }
	return node;
    }


    //
    // NODE TYPES
    //

    function p(attribs) {
	return addFocusTracking(copy_attribs(document.createElement('p'), attribs));
    }
    Jsworld.p = p;

    function div(attribs) {
	return addFocusTracking(copy_attribs(document.createElement('div'), attribs));
    }
    Jsworld.div = div;

    function button(f, attribs) {
	var n = document.createElement('button');
	add_ev(n, 'click', f);
	return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.button = button;


//     function bidirectional_input(type, toVal, updateVal, attribs) {
// 	var n = document.createElement('input');
// 	n.type = type;
// 	function onKey(w, e) {
// 	    return updateVal(w, n.value);
// 	}
// 	// This established the widget->world direction
// 	add_ev_after(n, 'keypress', onKey);
// 	// and this establishes the world->widget.
// 	n.onWorldChange = function(w) {n.value = toVal(w)};
// 	return addFocusTracking(copy_attribs(n, attribs));
//     }
//     Jsworld.bidirectional_input = bidirectional_input;


    var preventDefault = function(event) {
	if (event.preventDefault) {
	    event.preventDefault();
	} else {
	    event.returnValue = false;
	}
    }

    var stopPropagation = function(event) {
	if (event.stopPropagation) {
	    event.stopPropagation();
	} else {
	    event.cancelBubble = true;
	}
    }


    var stopClickPropagation = function(node) {
	attachEvent(node, "click",
		    function(e) {
			stopPropagation(e);
		    });
	return node;
    }
    

    function input(aType, updateF, attribs) {
	aType = aType.toLowerCase();
	var dispatchTable = { text : text_input,
			      password: text_input,
			      checkbox: checkbox_input
			      //button: button_input,
			      //radio: radio_input 
	};

	if (dispatchTable[aType]) {
	    return (dispatchTable[aType])(aType, updateF, attribs);
	}
	else {
	    throw new plt.Kernel.MobyRuntimeError("js-input: does not currently support type " + aType);
	}
    }
    Jsworld.input = input;


    var text_input = function(type, updateF, attribs) {
	var n = document.createElement('input');
	n.type = type;
	function onKey(w, e) {
	    return updateF(w, n.value);
	}
	// This established the widget->world direction
	add_ev_after(n, 'keypress', onKey);

	// Every second, do a manual polling of the object, just in case.
	var delay = 1000;
	var lastVal = n.value;
	var intervalId = setInterval(function() {
	    if (! n.parentNode) {
		clearInterval(intervalId);
		return;
	    }
	    if (lastVal != n.value) {
		lastVal = n.value;
		change_world(function (w) {
		    return updateF(w, n.value)
		});
	    }
	},
		    delay);
	return stopClickPropagation(
	    addFocusTracking(copy_attribs(n, attribs)));
    };


    var checkbox_input = function(type, updateF, attribs) {
	var n = document.createElement('input');
	n.type = type;

	var onCheck = function(w, e) {
	    return updateF(w, (n.checked ? plt.types.Logic.TRUE : plt.types.Logic.FALSE));
	};
	// This established the widget->world direction
	add_ev_after(n, 'change', onCheck);
	
	attachEvent(n, 'click', function(e) {
		stopPropagation(e);
	    });

	return copy_attribs(n, attribs);
    };


    var button_input = function(type, updateF, attribs) {
	var n = document.createElement('button');
	add_ev(n, 'click', function(w) { return updateF(w, n.value)});
	return addFocusTracking(copy_attribs(n, attribs));
    };



    // worldToValF: world -> string
    // updateF: world string -> world
    function bidirectional_text_input(worldToValF, updateF, attribs) {
	var n = document.createElement('input');
	n.type = "text";
	var lastValue = undefined;
	function monitor(w, e) {
	    return updateF(w, n.value);
	}
	add_ev(n, 'keypress', monitor);
	return stopClickPropagation(
	    addFocusTracking(
		copy_attribs(n, attribs)));
    }
    

    function text(s, attribs) {
	var result = document.createTextNode(s);
	return result;
    }
    Jsworld.text = text;

    function select(attribs, opts, f){
	var n = document.createElement('select');
	for(var i = 0; i < opts.length; i++) {
	    n.add(option({value: opts[i]}), null);
	}
	n.jsworldOpaque = true;
	add_ev(n, 'change', f);
	var result = addFocusTracking(copy_attribs(n, attribs));
	return result;
    }
    Jsworld.select = select;

    function option(attribs){
	var node = document.createElement("option");
        node.text = attribs.value;
	node.value = attribs.value;
 	return node;
    }



    function textarea(attribs){
	return addFocusTracking(copy_attribs(document.createElement('textarea'), attribs));
    }
    Jsworld.textarea = textarea;

    function h1(attribs){
	return addFocusTracking(copy_attribs(document.createElement('h1'), attribs));
    }
    Jsworld.h1 = h1;

    function canvas(attribs){
	return addFocusTracking(copy_attribs(document.createElement('canvas'), attribs));	
    }
    Jsworld.canvas = canvas;


    function img(src, attribs) {
	var n = document.createElement('img');
	n.src = src;
	return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.img = img;



    function raw_node(node, attribs) {
	return addFocusTracking(copy_attribs(node, attribs));
    }
    Jsworld.raw_node = raw_node;


})();
goog.provide('plt.world.MobyJsWorld');

plt.world.MobyJsworld = {};

// Depends on world.js, world-config.js

(function() {

    var Jsworld = plt.world.MobyJsworld;

    // The real low-level jsworld module:
    var _js = plt.Jsworld;



    var MobyTypeError = plt.Kernel.MobyTypeError;





    // isHandler: X -> boolean
    // Right now, a handler is a function that consumes and produces
    // configs.  We should tighten up the type check eventually.
    var isHandler = function(x) {
	return typeof(x) == 'function';
    }




    //////////////////////////////////////////////////////////////////////
    //From this point forward, we define wrappers to integrate jsworld
    //with Moby.


    // deepListToArray: any -> any
    // Converts list structure to array structure.
    var deepListToArray = function(x) {
	var thing = x;
	if (plt.Kernel.empty_question_(thing)) {
	    return [];
	} else if (plt.Kernel.pair_question_(thing)) {
	    var result = [];
	    while (!thing.isEmpty()) {
		result.push(deepListToArray(thing.first()));
		thing = thing.rest();
	    }
	    return result;
	} else {
	    return x;
	}
    }

    // assocListToAssocArray: (listof (list X Y)) -> (hashof X Y)
    var assocListToAssocArray = function(aList) {
	var result = {};
	while (! aList.isEmpty()) {
	    var key = aList.first().first();
	    var val = aList.first().rest().first();
	    result[key] = val;
	    aList = aList.rest();
	}
	return result;
    }


    // getBigBangWindow: -> window
    var getBigBangWindow = function() {
        if (window.document.getElementById("jsworld-div") !== undefined) {
	    return window;
	} else {
	    var newDiv = window.document.createElement("div");
	    newDiv.id = 'jsworld-div';
	    window.document.appendChild(newDiv);
	    return window;
	}
//         var newWindow = window.open(
// 	    "big-bang.html",
// 	    "big-bang");
// 	    //"toolbar=false,location=false,directories=false,status=false,menubar=false,width="+width+",height="+height);
// 	if (newWindow == null) { 
//             throw new Error("Error: Not allowed to create a new window."); }

// 	return newWindow;
    }


    // types are
    // sexp: (cons node (listof sexp))
    // css-style: (node (listof (list string string)))

    // Exports:



    // FIXME: document how we may want to create and destroy toplevel
    // nodes on bigBang.
    Jsworld.makeToplevelNode = function() {
	return getBigBangWindow().document.getElementById("jsworld-div");
    };



    var isList = function(x) {
	return (x instanceof plt.types.Cons) || (x instanceof plt.types.Empty);
    }




    // The default printWorldHook will write the written content of the node.
    // We probably want to invoke the pretty printer here instead!
    Jsworld.printWorldHook = function(world, node) {
	var newNode;
	if(node.lastChild == null) {
	    newNode = plt.types.toDomNode(world);
	    node.appendChild(newNode);
	} else {
	    newNode = plt.types.toDomNode(world);
	    node.replaceChild(newNode, node.lastChild);
	}
    };



    // Figure out the target of an event.
    // http://www.quirksmode.org/js/events_properties.html#target
    var findEventTarget = function(e) {
	var targ;
	if (e.target) 
	    targ = e.target;
	else if (e.srcElement) 
	    targ = e.srcElement;
	if (targ.nodeType == 3) // defeat Safari bug
	    targ = targ.parentNode;
	return targ;
    }

    // isNode: any -> boolean
    // Returns true if the thing has a nodeType.
    var isNode = function(thing) {
	return typeof(thing.nodeType) != 'undefined';
    }


    // checkWellFormedDomTree: X X (or number undefined) -> void
    // Check to see if the tree is well formed.  If it isn't,
    // we need to raise a meaningful error so the user can repair
    // the structure.
    //
    // Invariants:
    // The dom tree must be a pair.
    // The first element must be a node.
    // Each of the rest of the elements must be dom trees.
    // If the first element is a text node, it must NOT have children.
    var checkWellFormedDomTree = function(x, top, index) {
	if (plt.Kernel.pair_question_(x)) {
	    var firstElt = plt.Kernel.first(x)
	    var restElts = plt.Kernel.rest(x)

	    if (! isNode(firstElt)) {
		throw new MobyTypeError(
		    plt.Kernel.format(
		         "on-draw: expected a dom-element, but received ~s instead, the first element within ~s",
			 [firstElt, top]));
	    }

	    if (firstElt.nodeType == Node.TEXT_NODE &&
		! plt.Kernel.empty_question_(restElts)) {
		throw new MobyTypeError(
		    plt.Kernel.format(
			"on-draw: the text node ~s must not have children.  It has ~s", 
			[firstElt, restElts]));
	    }

	    var i = 2;
	    while(! plt.Kernel.empty_question_(restElts)) {
		checkWellFormedDomTree(plt.Kernel.first(restElts),
				       x,
				       i);
		restElts = plt.Kernel.rest(restElts);
		i++;
	    }
	} else {
	    throw new MobyTypeError(
		plt.Kernel.format(
		    "on-draw: expected a dom-s-expression, but received ~s instead~a",
		    [x,
		     (index != undefined ? 
		      plt.Kernel.format(", the ~a element within ~s.", [plt.Kernel.ordinalize(index), top])
		      : 
		      ".")]));
	}
    };

    var attachEvent = function(node, eventName, fn) {
	plt.Kernel.attachEvent(node, eventName, fn);
    }

    var preventDefault = function(event) {
	if (event.preventDefault) {
	    event.preventDefault();
	} else {
	    event.returnValue = false;
	}
    }

    var stopPropagation = function(event) {
	if (event.stopPropagation) {
	    event.stopPropagation();
	} else {
	    event.cancelBubble = true;
	}
    }


    // bigBang: world (listof (list string string)) (listof handler) -> world
    Jsworld.bigBang = function(initWorld, handlers) {
	var attribs = plt.types.Empty.EMPTY;
	plt.Kernel.arrayEach(handlers,
			     function(x, i) {
				 plt.Kernel.check(x, function(x) { 
				     return isHandler(x) || isList(x) },
						  "js-big-bang", 
						  "handler or attribute list",
						  i+2) });
	var toplevelNode = Jsworld.makeToplevelNode();
	
	// Ensure that the toplevelNode can be focused by mouse or keyboard
	toplevelNode.tabIndex = 0;
	// Absorb all click events so they don't bubble up.
	attachEvent(toplevelNode,
		    'click',
		    function(e) {
			preventDefault(e);
			stopPropagation(e);
			return false;
		    },
		    false);
	

	var config = new plt.world.config.WorldConfig();
	for(var i = 0; i < handlers.length; i++) {
	    if (isList(handlers[i])) {
		attribs = handlers[i];
	    } else if (isHandler(handlers[i])) {
		config = handlers[i](config);
	    }
	}
	config = config.updateAll({'changeWorld': Jsworld.updateWorld,
				   'shutdownWorld': Jsworld.shutdownWorld});
	plt.world.config.CONFIG = config;
	
	var wrappedHandlers = [];
	var wrappedRedrawCss;
	

	if (config.lookup('onDraw')) {
	    wrappedRedraw = function(w) {
		try {
		    var newDomTree = config.lookup('onDraw')([w]);
		    plt.Kernel.setLastLoc(undefined);
		    checkWellFormedDomTree(newDomTree, newDomTree, undefined);
		    var result = [toplevelNode, 
				  deepListToArray(newDomTree)];
		    return result;
		} catch (e) {
		    handleError(e);
		    throw e;
		}
	    }

	    wrappedRedrawCss = function(w) {
		try {
		    var result = deepListToArray(config.lookup('onDrawCss')([w]));
		    plt.Kernel.setLastLoc(undefined);
		    return result;
		} catch (e) {
		    handleError(e);
		    throw e;
		}
	    }
	    wrappedHandlers.push(_js.on_draw(wrappedRedraw, wrappedRedrawCss));
	} else if (config.lookup('onRedraw')) {
	    var reusableCanvas = undefined;
	    var reusableCanvasNode = undefined;
	    
	    wrappedRedraw = function(w) {
		try {
		    var aScene = config.lookup('onRedraw')([w]);
		    // Performance hack: if we're using onRedraw, we know
		    // we've got a scene, so we optimize away the repeated
		    // construction of a canvas object.
		    if (aScene != null && aScene != undefined && 
			aScene instanceof plt.world.Kernel.BaseImage) {
			var width = 
			    plt.world.Kernel.imageWidth(aScene).toFixnum();
			var height = 
			    plt.world.Kernel.imageHeight(aScene).toFixnum();

			if (! reusableCanvas) {
			    reusableCanvas = plt.world.Kernel.makeCanvas(width, height);
			    // Note: the canvas object may itself manage objects,
			    // as in the case of an excanvas.  In that case, we must make
			    // sure jsworld doesn't try to disrupt its contents!
			    reusableCanvas.jsworldOpaque = true;
			    reusableCanvasNode = _js.node_to_tree(reusableCanvas);
			}

			reusableCanvas.width = width;
			reusableCanvas.height = height;			
			var ctx = reusableCanvas.getContext("2d");
			aScene.render(ctx, 0, 0);

			return [toplevelNode, reusableCanvasNode];
		    } else {
			return [toplevelNode, 
				_js.node_to_tree(
						 plt.types.toDomNode(
								      aScene))];
		    }
		} catch (e) {
		    handleError(e);
		    throw e;
		}
	    }
	    
	    wrappedRedrawCss = function(w) {
		return [[reusableCanvas, 
			 ["width", reusableCanvas.width + "px"],
			 ["height", reusableCanvas.height + "px"]]];
	    }
	    wrappedHandlers.push(_js.on_draw(wrappedRedraw, wrappedRedrawCss));
	} else {
	    wrappedHandlers.push(_js.on_world_change
				 (function(w) { 
				     Jsworld.printWorldHook(w, toplevelNode); 
				 }));
	}


	if (config.lookup('tickDelay')) {
	    var wrappedTick = function(w) {
		setTimeout(function() {
		    plt.world.stimuli.onTick()
		},
			   0);
		return w;
	    }
	    var wrappedDelay = config.lookup('tickDelay');
	    wrappedHandlers.push(_js.on_tick(wrappedDelay, wrappedTick));
	}

	if (config.lookup('stopWhen')) {
	    wrappedHandlers.push(_js.stop_when(function(w) { 
			return config.lookup('stopWhen')([w]);
		    }));
	}
	

	if (config.lookup('onKey')) {
	    // Add event handlers that listen in on key events that are applied
	    // directly on the toplevelNode.  We pay attention to keydown, and
	    // omit keypress.
	    attachEvent(toplevelNode,
			'keydown',
			function(e) {
			    plt.world.stimuli.onKey(e);
			    preventDefault(e);
			    stopPropagation(e);
			    return false;
			});
	    attachEvent(toplevelNode,
			'keypress',
			function(e) {
			    preventDefault(e);
			    stopPropagation(e);
			    return false;
			});
	    toplevelNode.focus();
	}


	if (config.lookup('initialEffect')) {
	    var updaters =
		plt.world.Kernel.applyEffect(config.lookup('initialEffect'));
	    for (var i = 0 ; i < updaters.length; i++) {
		if (config.lookup('stopWhen') && 
		    config.lookup('stopWhen')([initWorld])) {
		    break;
		} else {
		    initWorld = updaters[i](initWorld);
		}
	    }
	}
	

	
	return _js.big_bang(toplevelNode,
			    initWorld,
			    wrappedHandlers,
			    assocListToAssocArray(attribs));
    }



    var arrayToList = function(anArray) {
	var result = plt.types.Empty.EMPTY;
	for(var i = 0; i < anArray.length; i++) {
	    result = plt.types.Cons.makeInstance(anArray[length-i-1],
						     result);
	}
	return result;
    }


    var handleError = function(e) {
	plt.Kernel.reportError(e);
	// When something bad happens, shut down 
	// the world computation.
	plt.Kernel.reportError("Shutting down jsworld computations");
	plt.world.stimuli.onShutdown(); 
    }
    


    // updateWorld: (world -> world) -> void
    Jsworld.updateWorld = function(updater) {
	var wrappedUpdater = function(world) {
	    try {
		return updater(world);
	    } catch (e) {
		handleError(e);
		return world;
	    }
	}

	_js.change_world(wrappedUpdater);
    }
    


    // shutdownWorld: -> void
    // Shut down all world computations.
    Jsworld.shutdownWorld = function() {
	_js.shutdown();
    };


    var getAttribs = function(args) {
	if (args.length == 0) {
	    return []
	}
	if (args.length == 1) {
	    return assocListToAssocArray(args[0]);
	} else {
	    throw new Error();
	}
    }



    // p: assoc -> node
    Jsworld.p = function(args) {
	var attribs = getAttribs(args);
	var node = _js.p(attribs);
	node.toWrittenString = function(cache) { 
	    return plt.Kernel.format("(js-p)", []);
	};
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };

    // div: assoc -> node
    Jsworld.div = function(args) {
	var attribs = getAttribs(args);
	var node = _js.div(attribs);
	node.toWrittenString = function(cache) { 
	    return plt.Kernel.format("(js-div)", []);
	};
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };

    // button: (world -> world) assoc -> node
    Jsworld.button = function(f, args) {
	var effectModule = plt.Kernel.invokeModule("moby/runtime/effect-struct");
	var noneF = function(world) {
	    return effectModule.EXPORTS.make_dash_effect_colon_none();
	};
	var node = Jsworld.buttonStar(f, 
				      noneF,
				      args);
	node.toWrittenString = function(cache) { return "(js-button ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };


    Jsworld.buttonStar = function(worldUpdateF, effectF, args) {
	var attribs = getAttribs(args);
	var wrappedF = function(world, evt) {
	    try {
		var effect = effectF([world]);
		var newWorld = worldUpdateF([world]);
		plt.world.Kernel.applyEffect(effect);
		return newWorld;
	    } catch (e) {
		handleError(e);
		return world;
	    }
	}
	var node = _js.button(wrappedF, attribs);
	node.toWrittenString = function(cache) { return "(js-button ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };
    

    // input.
    Jsworld.input = function(type, updateF, args) {
	plt.Kernel.check(type, plt.Kernel.isString, "js-input", "string", 1);
	plt.Kernel.check(updateF, plt.Kernel.isFunction, "js-input", "(world string -> world)", 1);
	var attribs = getAttribs(args);
	var node = _js.input(type,
			     function(w, v) { 
				 return updateF([w, v])
			     },
			     attribs);
	node.toWrittenString = function(cache) { return "(js-input ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };


    Jsworld.get_dash_input_dash_value = function(node) {
	plt.Kernel.check(node, 
			 function(x) { return (plt.Kernel.isString(node) ||
					       node.nodeType == 
					       Node.ELEMENT_NODE) }, 
			 "get-input-value",
			 "dom-node",
			 1);
	if (plt.Kernel.isString(node)) {
	    return plt.types.String.makeInstance(document.getElementById(node).value || "");
	} else {
	    return plt.types.String.makeInstance(node.value || "");
	}

    };



    // Images.
    Jsworld.img = function(src, args) {
	plt.Kernel.check(src, plt.Kernel.isString, "js-img", "string", 1);
	var attribs = getAttribs(args);
	var node = _js.img(src, attribs);
	node.toWrittenString = function(cache) { return "(js-img ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };


    // text: string -> node
    Jsworld.text = function(s) {
	plt.Kernel.check(s, plt.Kernel.isString, "js-text", "string", 1);
	var node = _js.text(s, []);
	node.toWrittenString = function(cache) { return "(js-text ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };



    Jsworld.select = function(options, updateF, args) { 
	plt.Kernel.checkListof(options, plt.Kernel.isString, "js-select", "string", 1);
	plt.Kernel.check(updateF, plt.Kernel.isFunction, "js-select", "function", 2);
	var attribs = getAttribs(args);
	// convert options to array
	var optionsArray = deepListToArray(options);
	var node = _js.select(attribs, 
			      optionsArray,
			      function(w, selectEvent) { 
				  return updateF([w, node.value])
			      });
	node.toWrittenString = function(cache) { return "(js-select ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };


    // fixme: add support for textarea, h1, canvas


    // raw_node: scheme-value assoc -> node
    Jsworld.rawNode = function(x, args) {
	var attribs = getAttribs(args);
	var node = _js.raw_node(plt.types.toDomNode(x), attribs);
	node.toWrittenString = function(cache) { return "(js-raw-node ...)"; }
	node.toDisplayedString = node.toWrittenString;
	node.toDomNode = function(cache) { return node; }
	return node;
    };



})();

goog.provide('plt.permission');


(function() {

    plt.permission = {};

    plt.Kernel.invokeModule("moby/runtime/permission-struct");
    var PEXPORTS = plt.Kernel.invokeModule('moby/runtime/permission-struct').EXPORTS;



    var isLocationP = function(p) {
	return PEXPORTS["permission_colon_location_question_"](p);
    };

    var isSendSmsP = function(p) {
	return PEXPORTS["permission_colon_send_dash_sms_question_"](p);
    };

    var isReceiveSmsP = function(p) {
	return PEXPORTS["permission_colon_receive_dash_sms_question_"](p);
    };

    var isTiltP = function(p) {
	return PEXPORTS["permission_colon_tilt_question_"](p);
    };

    var isShakeP = function(p) {
	return PEXPORTS["permission_colon_shake_question_"](p);
    };

    var isInternetP = function(p) {
	return PEXPORTS["permission_colon_internet_question_"](p);
    };

    var isTelephonyP = function(p) {
	return PEXPORTS["permission_colon_telephony_question_"](p);
    };

    var isWakeLockP = function(p) {
	return PEXPORTS["permission_colon_wake_dash_lock_question_"](p);
    };

    var isForeignFunctionInterfaceP = function(p) {
	return PEXPORTS["permission_colon_foreign_dash_function_dash_interface_question_"](p);
    };

    var isOpenImageUrlP = function(p) {
	return PEXPORTS["permission_colon_open_dash_image_dash_url_question_"](p);
    };

    var isUniverseP = function(p) {
	return PEXPORTS["permission_colon_universe_question_"](p);
    };


    // startupAllPermissions: arrayof permission (-> void) -> void
    // Evaluates all of the startup codes, and only after everything's
    // done do we evaluate the thunk.  Asynchronous.
    plt.permission.startupAllPermissions = function(perms, thunk) {
	if (perms.length > 0) {
	    var p = perms.pop();
	    plt.permission._runStartupCode(p, perms, thunk);
	} else {
	    thunk();
	}
    };


    plt.permission._runStartupCode = function(p, otherPerms, thunk) {
	var platform = plt.platform.Platform.getInstance();
	var stimuli = plt.world.stimuli;

	var keepGoing = function() {
	    setTimeout(function() {
		plt.permission.startupAllPermissions(otherPerms, thunk); 
	    },
		       0);
	};
	
	if (isLocationP(p)) {
	    platform.getLocationService().startService();
	    platform.getLocationService().addLocationChangeListener(
		function(lat, lng) {
		    stimuli.onLocation(lat, lng);
		});
	    keepGoing();
	}
	
	else if (isSendSmsP(p)) {
	    // Do nothing
	    keepGoing();
	}
		
	else if (isReceiveSmsP(p)) {
	    // Do nothing
	    keepGoing();
	}

	else if (isTiltP(p)) {
	    platform.getTiltService().startService();
	    platform.getTiltService().addOrientationChangeListener(
		function(azimuth, pitch, roll) {
		    stimuli.onTilt(azimuth, pitch, roll);
		});

	    platform.getTiltService().addAccelerationChangeListener(
		function(x, y, z) {
		    stimuli.onAcceleration(x, y, z);
		});
	    keepGoing();
	}
	
	else if (isShakeP(p)) {
	    platform.getShakeService().startService();
	    platform.getShakeService().addListener(
		function() {
		    stimuli.onShake();
		});
	    keepGoing();
	}
	
	else if (isInternetP(p)) {
	    // Do nothing
	    keepGoing();
	}
	
	else if (isTelephonyP(p)) {
	    // Do nothing
	    keepGoing();
	}
	
	else if (isWakeLockP(p)) {
	    // Do nothing
	    keepGoing();
	}

	else if (isForeignFunctionInterfaceP(p)) {
	    // FIXME:
	    // We should pop up a warning about this, or check
	    // if the user will permit?
	    keepGoing();
	}

	else if (isOpenImageUrlP(p)) {
	    var path = permission_colon_open_dash_image_dash_url_dash_url(p);
	    var img = new Image();
	    var loadHandler = function() {
		// Detach, because looping animated gifs are defined to call onload
		// on every loop
		plt.Kernel.detachEvent(img, 'load', loadHandler);
		plt.world.Kernel.FileImage.installInstance(path, img);
		keepGoing();
	    };
	    plt.Kernel.attachEvent(img, "load", loadHandler);
	    // If something goes wrong, we should show
	    // some default image.
	    plt.Kernel.attachEvent(img, 
				   "error",
				   function() {
				       // Note that the image loading doesn't work, and
				       // keep going.
				       plt.world.Kernel.FileImage.installBrokenImage(path);
				       keepGoing();
				   });
	    img.src = path;

	} else {
	    keepGoing();
	}
    };



    plt.permission.runShutdownCode = function(p) {
	var platform = plt.platform.Platform.getInstance();


	if (isLocationP(p)) {
	    platform.getLocationService().shutdownService();
	}
	if (isSendSmsP(p)) {
	}
		
	if (isReceiveSmsP(p)) {
	}	 
	
	if (isTiltP(p)){
	    platform.getTiltService().shutdownService();
	}
	
	if (isShakeP(p)){
	}
	
	if (isInternetP(p)){
	}
	
	if (isTelephonyP(p)){
	}
	
	if (isWakeLockP(p)){
	}
	
	if (isForeignFunctionInterfaceP(p)) {
	}

	if (isOpenImageUrlP(p)) {
	    // Do nothing
	}
    };

    
})();
goog.require('plt.Kernel');
goog.require('plt.types');


goog.provide('plt.foreign');


// Foreign function interface to Javascript.


(function() {
    plt.foreign.get_dash_js_dash_object = function(thing, name) {
	plt.Kernel.check(name, 
			 plt.Kernel.isString,
			 "get-js-object", "string", "string", 2);
	return coerseToSchemeValue(name, (thing || window)[name.toString()]);
    };


    //////////////////////////////////////////////////////////////////////




    var coerseToSchemeValue = function(name, x) {
	if (typeof(x) == 'function') {
	    return plt.types.liftToplevelToFunctionValue(
		function(args) { 
		    var newArgs = [];
		    for (var i = 0; i < args.length; i++) {
			newArgs.push(coerseToJavascriptValue(args[i]));
		    }
		    return coerseToSchemeValue(
			x.apply(null, newArgs))}, 
		name,
		0,
		plt.types.Cons.makeInstance(
		    plt.types.Symbol.makeInstance("at-least"),
		    plt.types.Cons.makeInstance(plt.types.Rational.ZERO,
						plt.types.Empty.EMPTY)));
	} else if (typeof(x) == 'number') {
	    return plt.types.FloatPoint.makeInstance(x);
	} else if (typeof(x) == 'undefined') {
	    return x;
	} else if (typeof(x) == 'object') {
	    return x;
	} else if (typeof(x) == 'boolean') {
	    return x ? plt.types.Logic.TRUE: plt.types.Logic.FALSE;
	} else if (typeof(x) == 'string') {
	    return plt.types.Rational.makeInstance(x);
	} else {
	    return x;
	}
    };


    var coerseToJavascriptValue = function(x) {
	// Fixme: we need to coerse
	// string
	// number
	// boolean
	// char
	// symbol
	// list
	// vector
	// struct
	// box
	// hash
	// function
	return x;
    };

}());
