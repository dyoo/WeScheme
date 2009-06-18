var org1 = org1 || {};
org1.plt =  org1.plt || {};
 
 
 
//////////////////////////////////////////////////////////////////////
// Kernel
(function() {
 
    function chainTest(test, first, second, rest) {
  if (! test(first, second))
      return false;
  if (rest.length == 0)
      return true;
  if (! test(second, rest[0]))
      return false;
  for(var i = 0; i < rest.length - 1; i++) {
      if (! test(rest[i], rest[i+1]))
    return false;
  }
  return true;
    }
 
 
    function chainFind(comparator, first, rest) {
  var i;
  var best = first;
  for(i = 0; i < rest.length; i++) {
      if (! comparator(best, rest[i])) {
    best = rest[i];
      }
  }
  return best;
    }
 
 
    org1.plt.Kernel = {
  Struct: function () {
  },
  
  struct_question_: function(thing) {
      return thing instanceof this.Struct;
  },
  
  number_question_ : function(x){
      return (x instanceof org1.plt.types.Rational || 
	      x instanceof org1.plt.types.FloatPoint ||
	      x instanceof org1.plt.types.Complex);
  },
 
  equal_question_ : function(x, y) {
    if (org1.plt.Kernel.number_question_(x) && 
	org1.plt.Kernel.number_question_(y)) {
	  if ("isEqual" in x) {
	    return org1.plt.types.NumberTower.equal(x, y);
	  } else if ("isEqual" in y) {
	    return org1.plt.types.NumberTower.equal(y, x);
	  } else {
	    return x == y;
	  }
    } else {
      return x.isEqual(y);
    }
  },
  
  eq_question_ : function(x, y){
	return x == y;
  }, 
 
  
  identity : function (x){
      return x;
  },
 
 
  cons: function(x, y) {
      return org1.plt.types.Cons.makeInstance(x, y);
  },
 
  empty_question_: function(thing) {
      return thing.isEmpty();
  },
 
  first: function(thing) {
      return thing.first();
  },
 
  rest: function(thing) {
      return thing.rest();
  },
 
 
  second: function(thing) {
      return thing.rest().first();
  },
 
  third: function(thing) {
      return thing.rest().rest().first();
  },
 
  fourth: function(thing) {
      return thing.rest().rest().rest().first();
  },
 
  fifth: function(thing) {
      return thing.rest().rest().rest().rest().first();
  },
 
 
  random: function(x) {
      return org1.plt.types.Rational.makeInstance
      (Math.floor(org1.plt.types.NumberTower.toInteger(x) * 
      Math.random()),
       1);
  },
 
  floor: function(x) {
  return x.floor();
  },
 
  ceiling: function(x) {
  return x.ceiling();
  },
 
  sqrt: function(x) {
	return x.sqrt();
  },
 
  sqr: function(x) {
      return org1.plt.types.NumberTower.sqr(x);
  },
 
  sin: function(x) {
	return x.sin();
  },
 
  cos: function(x) {
	return x.cos();
  },
 
  modulo: function(m, n) {
      return org1.plt.types.NumberTower.modulo(m, n);
  },
 
  zero_question_: function(m) {
      return org1.plt.types.NumberTower.equal(m, org1.plt.types.Rational.ZERO);
  },
 
 
  _equal__tilde_ : function(x, y, delta) {
      // FIXME: check against other args too.
      return org1.plt.types.NumberTower.approxEqual(x, y, delta);
  },
 
  abs: function(x) {
      return org1.plt.types.NumberTower.abs(x);
  },
 
  add1 : function(x) {
      return org1.plt.types.NumberTower.add(x, org1.plt.types.Rational.ONE);
  },
 
  
  sub1 : function(x) {
      return org1.plt.types.NumberTower.subtract(x, org1.plt.types.Rational.ONE);
  },
 
 
  _plus_ : function(args) {
      var i, sum = org1.plt.types.Rational.ZERO;
      for(i = 0; i < args.length; i++) {
    sum = org1.plt.types.NumberTower.add(sum, args[i]);
      }
      return sum;
  },
 
  _dash_ : function(first, args) {
      if (args.length == 0) {
    return org1.plt.types.NumberTower.subtract
    (org1.plt.types.Rational.ZERO, first);
      }
 
      var i, diff = first;
      for(i = 0; i < args.length; i++) {
    diff = org1.plt.types.NumberTower.subtract(diff, args[i]);
      }
      return diff;
  },
 
 
  _star_ : function(args) {
      var i, prod = org1.plt.types.Rational.ONE;
      for(i = 0; i < args.length; i++) {
    prod = org1.plt.types.NumberTower.multiply(prod, args[i]);
      }
      return prod;    
  },
 
 
  _slash_ : function(first, args) {
      var i, div = first;
      for(i = 0; i < args.length; i++) {
    div = org1.plt.types.NumberTower.divide(div, args[i]);
      }
      return div;    
  },
 
 
  _equal_ : function(first, second, rest) {
      // FIXME: check against other args too.
      return chainTest(org1.plt.types.NumberTower.equal,
           first,
           second,
           rest);
  },
 
 
  _greaterthan__equal_: function(first, second, rest) {
      return chainTest(org1.plt.types.NumberTower.greaterThanOrEqual,
           first,
           second,
           rest);
  },
 
  _lessthan__equal_: function(first, second, rest) {
      return chainTest(org1.plt.types.NumberTower.lessThanOrEqual,
           first,
           second,
           rest);
  },
 
  _greaterthan_: function(first, second, rest) {
      return chainTest(org1.plt.types.NumberTower.greaterThan,
           first,
           second,
           rest);
  },
 
  _lessthan_: function(first, second, rest) {
      return chainTest(org1.plt.types.NumberTower.lessThan,
           first,
           second,
           rest);
  },
 
  min : function(first, rest) {
      return chainFind(org1.plt.types.NumberTower.lessThanOrEqual,
           first, 
           rest);
  },
 
  max : function(first, rest) {
      return chainFind(org1.plt.types.NumberTower.greaterThanOrEqual,
           first, 
           rest);
  },
 
  symbol_equal__question_: function(x, y) {
      return x.isEqual(y);
  },
 
  not : function(x) {
      return !x;
  },


  inexact_dash__greaterthan_exact: function(x) {
    return org1.plt.types.NumberTower.toExact(x);
  },
 
  number_dash__greaterthan_string: function(x) {
      return org1.plt.types.String.makeInstance(x.toString());
  },
  
  conjugate: function(x){
	return x.conjugate();
  },
  
  magnitude: function(x){
	return x.magnitude();
  },
  
  log : function(x) {
	return x.log();
  },
  
  angle : function(x) {
	return x.angle();
  },
  
  atan : function(x) {
	return x.atan();
  },
  
  expt : function(x, y){
	return org1.plt.types.NumberTower.expt(x, y);
  },
  
  exp : function(x){
	return x.exp();
  },
  
  acos : function(x){
	return x.acos();
  },
  
  asin : function(x){
	return x.asin();
  },
  
  tan : function(x){
	return org1.plt.types.NumberTower.divide(x.sin(), x.cos());
  },
  
  complex_question_ : function(x){
	return x instanceof org1.plt.types.Complex || x instanceof org1.plt.types.Rational || x instanceof org1.plt.types.FloatPoint;
  },
  
  cosh : function(x) {
	return this._plus_([this.exp(x), this.exp(x.minus())]).half();
  },
  
  sinh : function(x) {
	return org1.plt.types.NumberTower.subtract(this.exp(x), this.exp(x.minus())).half();
  },
  
  denominator : function(x) {
	return org1.plt.types.Rational.makeInstance(x.d, 1);
  },
  
  numerator : function(x){
	return org1.plt.types.Rational.makeInstance(x.n, 1);
  },
  
  odd_question_ : function(x){
	return (x.toInteger() % 2 == 1);
  },
  
  even_question_ : function(x) {
	return (x.toInteger() % 2 == 0);
  },
  
  positive_question_ : function(x){
	return this._greaterthan_(x, Rational.ZERO, []);
  },
  
  negative_question_ : function(x){
	return this._lessthan_(x, Rational.ZERO, []);
  },
  
  imag_dash_part : function(x){
	return x.imag_dash_part();
  },
  
  real_dash_part : function(x){
	return x.real_dash_part();
  },
  
  integer_question_ : function(x){
	return this.equal_question_(x, x.floor());
  },
  
  make_dash_rectangular : function(x, y){
	return org1.plt.types.Complex.makeInstance(x.toFloat(), y.toFloat());
  },
 
  max : function(first, rest){
	var i, ret = first;
	for (i = 0; i < rest.length; i++)
		if (org1.plt.types.NumberTower.greaterThan(rest[i], ret))
			ret = rest[i];
	return ret;
  },
  
  min : function(first, rest){
	var i, ret = first;
	for (i = 0; i < rest.length; i++)
		if (org1.plt.types.NumberTower.lessThan(rest[i], ret))
			ret = rest[i];
	return ret;
  },
  
  string_equal__question_ : function(first, second, rest){
	return chainTest(function(x, y){return x.toString() == y.toString();}, first, second, rest);
  },
  
  string_lessthan__equal__question_: function(first, second, rest){
	return chainTest(function(x, y){return x.toString() <= y.toString();}, first, second, rest);
  },
  
  string_lessthan__question_: function(first, second, rest){
	return chainTest(function(x, y){return x.toString() < y.toString();}, first, second, rest);
  },
  
  string_greaterthan__equal__question_: function(first, second, rest){
	return chainTest(function(x, y){return x.toString() >= y.toString();}, first, second, rest);
  },
  
  string_greaterthan__question_: function(first, second, rest){
	return chainTest(function(x, y){return x.toString() > y.toString();}, first, second, rest);
  },
  
  quotient : function(x, y){
	return org1.plt.types.Rational.makeInstance(org1.plt.types.NumberTower.divide(x,y).floor(), 1);
  },
  
  remainder : function(x, y) {
	return org1.plt.types.Rational.makeInstance(x.toInteger() % y.toInteger(), 1);
  },
  
  real_question_ : function(x){
      return (org1.plt.Kernel.number_question_(x) &&
	      x.isReal());
  },
  
  
  round : function(x){
	return x.round();
  },
  
  sgn : function(x){
	if (this.positive_question_(x))
		return org1.plt.types.Rational.ONE;
	if (this.negative_question_(x))
		return org1.plt.types.Rational.NEGATIVE_ONE;
	else
		return org1.plt.types.Rational.ZERO;
  },
  
  zero_question_ : function(x){
		return org1.plt.types.NumberTower.equal(x, org1.plt.types.Rational.ZERO);
  },
  
  boolean_equal__question_ : function(x, y){
	return x == y;
  },
  
  boolean_question_ : function(x){
	return x == org1.plt.types.Logic.TRUE || x == org1.plt.types.Logic.FALSE;
  },
  
  false_question_ : function(x){
	return  x == org1.plt.types.Logic.FALSE;
  },
  
  not : function(x){
	return x == org1.plt.types.Logic.FALSE ? org1.plt.types.Logic.TRUE : org1.plt.types.Logic.FALSE;
  },
  
  symbol_dash__greaterthan_string : function(x){
	return org1.plt.types.String.makeInstance(x);
  },
  
  symbol_equal__question_ : function(x, y){
	return x.val == y.val;
  },
  
  symbol_question_ : function(x){
	return x instanceof org1.plt.types.Symbol;
  },
  
  empty_question_ : function(x){
	return x instanceof org1.plt.types.Empty;
  },
  
  append : function(first, rest){
        var ret = first;
	var i;
	for (i = 0; i < rest.length; i++)
		ret = ret.append(rest[i]);
	return ret;
  },
  
  reverse : function(lst){
	var ret = org1.plt.types.Empty.EMPTY;
	while (!lst.isEmpty()){
		ret = org1.plt.types.Cons.makeInstance(lst.first(), ret);
		lst = lst.rest();
	}
	
	return ret;
  }, 
    
  assq : function(x, lst){
	while (!lst.isEmpty() && !org1.plt.Kernel.eq_question_(x, lst.first().first()))
		lst = lst.rest();
	if (lst.isEmpty())
		return org1.plt.types.Logic.FALSE;
	else return lst.first();
  },
  
  caaar : function(lst){
	return lst.first().first().first();
  },
  
  caadr : function(lst){
	return lst.first().first().rest();
  },
  
  caar : function(lst){
	return lst.first().first();
  },
  
  cadar : function(lst){
	return lst.first().rest().first();
  },
  
  cadddr : function(lst){
	return lst.rest().rest().rest().first();
  },
  
  caddr : function(lst){
	return lst.rest().rest().first();
  },
  
  cadr : function(lst){
	return lst.rest().first();
  },
  
  car : function(lst){
	return lst.first();
  },
  
  cdaar : function(lst){
	return lst.first().first().rest();
  },
  
  cdadr : function(lst){
	return lst.rest().first().rest();
  },
  
  cdar : function(lst){
	return lst.first().rest();
  },
  
  cddar : function(lst){
	return lst.first().rest().rest();
  },
  
  cdddr : function(lst){
	return lst.rest().rest().rest();
  },
  
  cddr : function(lst){
	return lst.rest().rest();
  },
  
  cdr : function(lst){
	return lst.rest();
  },
  
  cons_question_: function(lst){
	return lst instanceof org1.plt.types.Cons;
  },
  
  sixth : function(lst){
	return lst.rest().rest().rest().rest().rest().first();
  },
  
  seventh: function(lst){
	return lst.rest().rest().rest().rest().rest().rest().first();
  },
  
  eighth : function(lst){
	return lst.rest().rest().rest().rest().rest().rest().rest().first();
  },
  
  length : function(lst){
	var ret = org1.plt.types.Rational.ZERO;
	for (; !lst.isEmpty(); lst = lst.rest())
		ret = org1.plt.Kernel.add1(ret);
	return ret;
  },
  
  list : function(items){
	var ret = org1.plt.types.Empty.EMPTY;
	for (var i = items.length - 1; i >=0; i--)
		ret = org1.plt.types.Cons.makeInstance(items[i], ret);
	return ret;
  },
  
  list_star_ : function(items, otherItems){
      var lastListItem = otherItems.pop();
      otherItems.unshift(items);
      return org1.plt.Kernel.append(org1.plt.Kernel.list(otherItems), [lastListItem]);
  },
  
  list_dash_ref : function(lst, x){
	var i = org1.plt.types.Rational.ZERO;
	for (; org1.plt.Kernel._lessthan_(i, x,[]); i = org1.plt.Kernel.add1(i))
		lst = lst.rest();
	return lst.first();
  },
  
  member : function(item, lst){
	while (!lst.isEmpty()){
		if (org1.plt.Kernel.equal_question_(item, lst.first()))
			return true;
		lst = lst.rest();
	}
	
	return false;
  },
  
  memq : function(item, lst){
	while (!lst.isEmpty()){
		if (org1.plt.Kernel.eq_question_(item, lst.first()))
			return lst;
		lst = lst.rest();
	}
	
	return false;
  },
  
  eqv_question_ : function(x, y){
	return x == y;
  },
  
  memv : function(item, lst){
	while (!lst.isEmpty()){
		if (org1.plt.Kernel.eqv_question_(item, lst.first()))
			return lst;
		lst = lst.rest();
	}
	
	return false;
  },
  
  null_question_ : function(x){
	return x instanceof org1.plt.types.Empty;
  },
  
  pair_question_ : function(x){
	return x instanceof org1.plt.types.Cons;
  },
  
  string_dash__greaterthan_number : function(str){
	var val = str * 1;
	if (isNaN(val))
		return false;
	return org1.plt.types.FloatPoint.makeInstance(val);
  },
  
  string_dash__greaterthan_symbol : function(str){
	return org1.plt.types.Symbol.makeInstance(str);
  },
  
  string_dash_append : function(arr){
        return org1.plt.types.String.makeInstance(arr.join(""));
  },
  
  string_dash_ci_equal__question_ : function(first, second, rest){
	first = first.toUpperCase();
	second = second.toUpperCase();
	for (var i = 0; i < rest.length; i++)
		rest[i] = rest[i].toUpperCase();
	return org1.plt.Kernel.string_equal__question_(first, second, rest);
  },
  
  string_dash_ci_lessthan__equal__question_ : function(first, second, rest){
	first = first.toUpperCase();
	second = second.toUpperCase();
	for (var i = 0; i < rest.length; i++)
		rest[i] = rest[i].toUpperCase();
	return org1.plt.Kernel.string_lessthan__equal__question_(first, second, rest);
  },
  
  string_dash_ci_lessthan__question_ : function(first, second, rest){
	first = first.toUpperCase();
	second = second.toUpperCase();
	for (var i = 0; i < rest.length; i++)
		rest[i] = rest[i].toUpperCase();
	return org1.plt.Kernel.string_lessthan__question_(first, second, rest);
  },
  
  string_dash_ci_greaterthan__question_ : function(first, second, rest){
	return !org1.plt.Kernel.string_dash_ci_lessthan__equal__question_(first, second, rest);
  },
  
  string_dash_ci_greaterthan__equal__question_ : function(first, second, rest){
	return !org1.plt.Kernel.string_dash_ci_lessthan__question_(first, second, rest);
  },
  
  string_dash_copy : function(str){
	return org1.plt.types.String.makeInstance(str);
  },
  
  string_dash_length : function(str){
	return org1.plt.types.Rational.makeInstance(str.length, 1);
  },
  
  string_dash_ref : function(str, i){
	return str.charAt(i.toInteger());
  },
  
  string_question_ : function(str){
      return typeof(str) == 'string';
  },
  
  substring : function(str, begin, end){
	return str.toString().substring(begin.toInteger(), end.toInteger());
  },

  char_question_: function(x) {
    return x instanceof org1.plt.types.Char;
  },
  
  char_dash__greaterthan_integer : function(ch){
	var str = new String(ch.val);
	return org1.plt.types.Rational.makeInstance(str.charCodeAt(0), 1);
  },
  
  integer_dash__greaterthan_char : function(n){
	var str = String.fromCharCode(n.toInteger());
	return org1.plt.types.Char.makeInstance(str);
  },
  
  char_dash_alphabetic_question_ : function(c){
	var str = c.val.toString();
	return (str >= "a" && str <= "z") || (str >= "A" && str <= "Z");
  },
  
  char_equal__question_ : function(first, second, rest){
	return chainTest(function(x, y){return x.isEqual(y);}, first, second, rest);
  },
  
  char_lessthan__question_ : function(first, second, rest){
	return chainTest(function(x, y){return x.val.toString() < y.val.toString()}, first, second, rest);
  },
  
  char_lessthan__equal__question_ : function(first, second, rest){
	return chainTest(function(x, y){return x.val.toString() <= y.val.toString()}, first, second, rest);
  },
  
  char_greaterthan__question_ : function(first, second, rest){
	return !char_lessthan__equal__question_(first, second, rest);
  },
  
  char_greaterthan__equal__question_ : function(first, second, rest){
	return !char_lessthan__question_(first, second, rest);
  },
  
  char_dash_ci_equal__question_ : function(first, second, rest){
	first = org1.plt.types.Char.makeInstance(first.val.toUpperCase());
	second = org1.plt.types.Char.makeInstance(second.val.toUpperCase());
	for (var i = 0; i < rest.length; i++)
		rest[i] = org1.plt.types.Char.makeInstance(rest[i].val.toUpperCase());
	return org1.plt.Kernel.char_equal__question_(first, second, rest);
  },
  
  char_dash_ci_lessthan__question_ : function(first, second, rest){
	first = org1.plt.types.Char.makeInstance(first.val.toUpperCase());
	second = org1.plt.types.Char.makeInstance(second.val.toUpperCase());
	for (var i = 0; i < rest.length; i++)
		rest[i] = org1.plt.types.Char.makeInstance(rest[i].val.toUpperCase());
	return org1.plt.Kernel.char_lessthan__question_(first, second, rest);
  },

  char_dash_ci_lessthan__equal__question_ : function(first, second, rest){
	first = org1.plt.types.Char.makeInstance(first.val.toUpperCase());
	second = org1.plt.types.Char.makeInstance(second.val.toUpperCase());
	for (var i = 0; i < rest.length; i++)
		rest[i] = org1.plt.types.Char.makeInstance(rest[i].val.toUpperCase());
	return org1.plt.Kernel.char_lessthan__equal__question_(first, second, rest);
  },
  
  char_dash_ci_greaterthan__question_ : function(first, second, rest){
	return !org1.plt.Kernel.char_dash_ci_lessthan__equal__question_(first,second,rest);
  },
  
  char_dash_ci_greaterthan__equal__question_ : function(first, second, rest){
	return !org1.plt.Kernel.char_dash_ci_lessthan__question_(first,second,rest);
  },
  
  char_dash_downcase : function(ch){
	var down = ch.val.toString().toLowerCase();
	return org1.plt.types.Char.makeInstance(down);
  },
  
  char_dash_lower_dash_case_question_ : function(ch){
	return org1.plt.Kernel.char_dash_alphabetic_question_(ch) && org1.plt.Kernel.equal_question_(ch, org1.plt.Kernel.char_dash_downcase(ch));
  },
  
  char_dash_numeric_question_ : function(ch){
	var str = ch.val.toString();
	return (str >= "0" && str <= "9");
  },
  
  char_dash_upcase : function(ch){
	var up = ch.val.toString().toUpperCase();
	return org1.plt.types.Char.makeInstance(up);
  },
  
  char_dash_upper_dash_case_question_ : function(ch){
	return org1.plt.Kernel.char_dash_alphabetic_question_(ch) && org1.plt.Kernel.equal_question_(ch, org1.plt.Kernel.char_dash_upcase(ch));
  },
  
  char_dash_whitespace_question_ : function(ch){
	return org1.plt.Kernel.equal_question_(ch, org1.plt.types.Char.makeInstance(" "));
  },
  
  list_dash__greaterthan_string : function(lst){
	var ret = "";
	while (!lst.isEmpty()){
		ret += lst.first().val.toString();
		lst = lst.rest();
	}
	return org1.plt.types.String.makeInstance(ret);
  },
  
  make_dash_string : function(n, ch){
	var ret = "";
	var c = ch.val.toString();
	var i = org1.plt.types.Rational.ZERO;
	for (;  org1.plt.Kernel._lessthan_(i, n, []); i = org1.plt.Kernel.add1(i))
		ret += c;
	return org1.plt.types.String.makeInstance(ret);
  },
  
  string_dash__greaterthan_list : function(str){
	var s = str.toString();
	var ret = org1.plt.types.Empty.EMPTY;
	for (var i = s.length - 1; i >= 0; i--){
	    ret = org1.plt.types.Cons.makeInstance
		(org1.plt.types.Char.makeInstance(s.charAt(i)),
		 ret);
	}
	return ret;
  },
  
  HEREEEEEEEEEEEEEEEEE : function(){}


	
  };
 
    function HashTable(inputHash) {
	this.hash = inputHash;
    }


    // kernelMakeImmutableHashEq: list -> hash
    org1.plt.Kernel._kernelMakeImmutableHashEq = function(pairs) {
	var myhash = {};
	while (! pairs.isEmpty()) {
	    var nextPair = pairs.first();
	    var aKey = nextPair.first(); 
	    var aVal = nextPair.rest(); 
	    myhash[aKey] = aVal;
	    pairs = pairs.rest();
	}
	return new HashTable(myhash);
    };

    // org1.plt.Kernel._kernelHashSet: hash object value -> hash
    org1.plt.Kernel._kernelHashSet = function(obj, key, val) {
	var newHash = {};
	var hash = obj.hash;
	for (var k in hash) {
	    newHash[k] = hash[k];
	}
	newHash[key] = val;
	return new HashTable(newHash);
    };

    org1.plt.Kernel._kernelHashRef = function(obj, key, defaultVal) {
	if (key in obj.hash) {
	    return obj.hash[key];
	} else {
	    return defaultVal;
	}
    };

    org1.plt.Kernel._resolveModulePath = function(path) {
	return path;
    };

    var gensymCounter = 0;
    org1.plt.Kernel._gensym = function(label) {
	gensymCounter++;
	return org1.plt.types.Symbol.makeInstance(label.toString() + gensymCounter);
    };

    org1.plt.Kernel.map = function(f, arglists) {
	var results = org1.plt.types.Empty.EMPTY;
	while (!arglists[0].isEmpty()) {
	    var args = [];
	    for (var i = 0; i < arglists.length; i++) {
		args.push(arglists[i].first());
		arglists[i] = arglists[i].rest();
	    }
	    results = org1.plt.Kernel.cons(f.apply(null, [args]),
					  results);
	}
	return org1.plt.Kernel.reverse(results);
    };

    org1.plt.Kernel.foldl = function(f, acc, arglists) {
      var result = acc;
      while (!arglists[0].isEmpty()) {
	var args = [];
	for (var i = 0; i < arglists.length; i++) {
	  args.push(arglists[i].first());
	  arglists[i] = arglists[i].rest();
	}
	args.push(result);
	result = f.apply(null, [args]);
      }
      return result;
    };

    org1.plt.Kernel.build_dash_list = function(n, f) {
	var result = org1.plt.types.Empty.EMPTY;
	for(var i = 0; i < n.toInteger(); i++) {
	    result = org1.plt.Kernel.cons(f.apply(null, [[org1.plt.types.Rational.makeInstance(i, 1)]]),
					 result);
	}
	return org1.plt.Kernel.reverse(result);
    };

    org1.plt.Kernel.format = function(formatStr, args) {
	// not right yet, but let's see how well this works.
	return org1.plt.types.String.makeInstance(formatStr + args.join(" "));
    }


    // args: arrayof org1.plt.types.Char
    org1.plt.Kernel.string = function(args) {
	var vals = [];
	for(var i = 0; i < args.length; i++) {
	    vals.push(args[i].getValue());
	}
	return org1.plt.types.String.makeInstance(vals.join(""));
    };

 
 
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    // Types
 
    org1.plt.types =  {};
 
 
 
    // Posns
 
    function posn(x,y) { this.x = x;
       this.y = y; }
    posn.prototype = new org1.plt.Kernel.Struct();
    posn.prototype.isEqual = function(other) {
        if (other instanceof posn) {
            return (((org1.plt.Kernel.equal_question_((posn_dash_y(this)),(posn_dash_y(other)))))&&((((org1.plt.Kernel.equal_question_((posn_dash_x(this)),(posn_dash_x(other)))))&&(org1.plt.types.Logic.TRUE))));
        } else {
            return false;
        }
    } 
    function make_dash_posn(id0,id1) { return new posn(id0,id1); }
    function posn_dash_x(obj) { return obj.x; }
    function posn_dash_y(obj) { return obj.y; }
    function posn_question_(obj) { 
        return obj instanceof posn ; 
    }
 
    org1.plt.Kernel.make_dash_posn = make_dash_posn;
    org1.plt.Kernel.posn_question_ = posn_question_;
    org1.plt.Kernel.posn_dash_x = posn_dash_x;
    org1.plt.Kernel.posn_dash_y = posn_dash_y;
 
 
    org1.plt.Kernel.error = function(msg, args) {
	die(msg + ": " + args);
    }
 
 
    org1.plt.types.Logic = {
  TRUE : true,
  FALSE : false
    };
 
 
    function die(msg) {
  // We're trying to error out so that we get a stack track from firebug.
    console.log(msg);
  	console.trace();
  throw new TypeError(msg.toString());
    }
 
 
 
    // Strings
    // For the moment, we just reuse Javascript strings.
    org1.plt.types.String = String;
    org1.plt.types.String.makeInstance = function(s) {
	return s;
    };
	
	org1.plt.types.String.prototype.isEqual = function(other){
		return this.toString() == other.toString();
	};
	
	// Chars
	org1.plt.types.Char = function(val){
		this.val = val;
	};
	
	org1.plt.types.Char.makeInstance = function(val){
		return new org1.plt.types.Char(val);
	};

	org1.plt.types.Char.prototype.toString = function() {
	    return "#\\" + this.val;
	};

	org1.plt.types.Char.prototype.getValue = function() {
	    return this.val;
	};

	org1.plt.types.Char.prototype.isEqual = function(other){
		return other instanceof org1.plt.types.Char && this.val.toString() == other.val.toString();
	};
	
    // Symbols
    org1.plt.types.Symbol = function(val) {
  this.val = val;
    };
 
    // makeInstance: string -> Symbol.
    org1.plt.types.Symbol.makeInstance = function(val) {
  return new org1.plt.types.Symbol(val);
    };
 
    org1.plt.types.Symbol.prototype.isEqual = function(other) {
  return other instanceof org1.plt.types.Symbol &&
      this.val == other.val;
    };
 
    org1.plt.types.Symbol.prototype.toString = function() {
  return this.val;
    };
 
 
 
    org1.plt.types.Empty = function() {};
    org1.plt.types.Empty.EMPTY = new org1.plt.types.Empty();


    org1.plt.types.Empty.prototype.isEqual = function(other) {
      return other instanceof org1.plt.types.Empty;
    };

    org1.plt.types.Empty.prototype.first = function() {
  die("first can't be applied on empty.");
    };
    org1.plt.types.Empty.prototype.rest = function() {
  die("rest can't be applied on empty.");
    };
    org1.plt.types.Empty.prototype.isEmpty = function() {
  return true;
    };
    org1.plt.types.Empty.prototype.toString = function() { return "empty"; };

 
    org1.plt.types.Empty.prototype.append = function(b){
      return b;
    }
 
    org1.plt.types.Cons = function(f, r) {
  this.f = f;
  this.r = r;
    };
 
    org1.plt.types.Cons.makeInstance = function(f, r) {
  return new org1.plt.types.Cons(f, r);
    };


    org1.plt.types.Cons.prototype.isEqual = function(other) {
      if (! (other instanceof org1.plt.types.Cons)) {
	return false;
      }
      return (org1.plt.Kernel.equal_question_(this.first(), other.first()) &&
	      org1.plt.Kernel.equal_question_(this.rest(), other.rest()));
    };
 
    org1.plt.types.Cons.prototype.first = function() {
  return this.f;
    };
 
    org1.plt.types.Cons.prototype.rest = function() {
  return this.r;
    };
 
    org1.plt.types.Cons.prototype.isEmpty = function() {
  return false;
    };
    
    org1.plt.types.Cons.prototype.append = function(b){
	if (this.isEmpty())
	    return b;
	if (b.isEmpty())
	    return this;
	var ret = b;
	var lst = org1.plt.Kernel.reverse(this);
	while (!lst.isEmpty()){
	    ret = org1.plt.types.Cons.makeInstance(lst.first(), ret);
	    lst = lst.rest();
	}
	
	return ret;
    };
 
    // Rationals
 
    function gcd(a, b) {
  var t;
  if (isNaN(a) || !isFinite(a)) {
      die("not a number: " + a);
  }
  if (isNaN(b) || !isFinite(b)) {
      die("not a number: " + b);
  }
  while (b != 0) {
      t = a;
      a = b;
      b = t % b;
  }
  return a;
    }
 
    org1.plt.types.Rational = function(n, d) {
  var divisor = gcd(Math.abs(n), Math.abs(d));
  this.n = n / divisor;
  this.d = d / divisor;
    };
 
    org1.plt.types.Rational.prototype.toString = function() {
  if (this.d == 1) {
      return this.n + "";
  } else {
      return this.n + "/" + this.d;
  }
    };
 
    org1.plt.types.Rational.prototype.level = function() {
  return 0;
    };
 
 
    org1.plt.types.Rational.prototype.lift = function(target) {
		if (target.level() == 1)
			return org1.plt.types.FloatPoint.makeInstance(this.n / this.d);
		if (target.level() == 2)	
			return org1.plt.types.Complex.makeInstance(this.n / this.d, 0);
		throw new Error("invalid level of Number");
    };
 
    org1.plt.types.Rational.prototype.isEqual = function(other) {
  return other instanceof org1.plt.types.Rational &&
      this.n == other.n &&
      this.d == other.d;
    };
 
    org1.plt.types.Rational.prototype.isReal = function() {
	return true;
    };

 
    org1.plt.types.Rational.prototype.add = function(other) {
  return org1.plt.types.Rational.makeInstance(this.n * other.d + 
               this.d * other.n,
               this.d * other.d);
    };
 
    org1.plt.types.Rational.prototype.subtract = function(other) {
  return org1.plt.types.Rational.makeInstance((this.n * other.d) - 
               (this.d * other.n),
               (this.d * other.d));
    };
 
    org1.plt.types.Rational.prototype.multiply = function(other) {
  return org1.plt.types.Rational.makeInstance(this.n * other.n,
               this.d * other.d);
    };
 
    org1.plt.types.Rational.prototype.divide = function(other) {
  return org1.plt.types.Rational.makeInstance(this.n * other.d,
               this.d * other.n);
    };
 

    org1.plt.types.Rational.prototype.toExact = function() { 
      return this;
    };
 
    org1.plt.types.Rational.prototype.toInteger = function() {
  return Math.floor(this.n / this.d);  
    };
 
    org1.plt.types.Rational.prototype.toFloat = function() {
  return this.n / this.d;
    };
 
	org1.plt.types.Rational.prototype.toComplex = function(){
		return org1.plt.types.Complex.makeInstance(this.n / this.d, 0);
	};
 
    org1.plt.types.Rational.prototype.greaterThan = function(other) {
	return this.n*other.d > this.d*other.n;
    };

    org1.plt.types.Rational.prototype.greaterThanOrEqual = function(other) {
  return this.n*other.d >= this.d*other.n;
    };
 
    org1.plt.types.Rational.prototype.lessThan = function(other) {
  return this.n*other.d < this.d*other.n;
    };

    org1.plt.types.Rational.prototype.lessThanOrEqual = function(other) {
  return this.n*other.d <= this.d*other.n;
    };

 
    org1.plt.types.Rational.prototype.sqrt = function() {
	var result = Math.sqrt(this.n / this.d);
	if (result == Math.floor(result)) {
	    return org1.plt.types.Rational.makeInstance(result, 1);
	} else {
	    return org1.plt.types.FloatPoint.makeInstance(result);
	}
    };
 
    org1.plt.types.Rational.prototype.abs = function() {
  return org1.plt.types.Rational.makeInstance(Math.abs(this.n),
               this.d);
    };
 
    org1.plt.types.Rational.prototype.floor = function() {
  return org1.plt.types.Rational.makeInstance(Math.floor(this.n / this.d), 1);
    };
 
 
    org1.plt.types.Rational.prototype.ceiling = function() {
  return org1.plt.types.Rational.makeInstance(Math.ceil(this.n / this.d), 1);
    };
	
	org1.plt.types.Rational.prototype.conjugate = org1.plt.types.Rational.prototype.abs;
	
	org1.plt.types.Rational.prototype.magnitude = org1.plt.types.Rational.prototype.abs;
	
	org1.plt.types.Rational.prototype.log = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.log(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.angle = function(){
		if (0 == this.n)
			throw new Error("angle: undefined for 0");
		if (this.n > 0)
			return org1.plt.types.Rational.ZERO;
		else
			return org1.plt.Kernel.pi;
	};
	
	org1.plt.types.Rational.prototype.atan = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.atan(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.cos = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.cos(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.sin = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.sin(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.expt = function(a){
		return org1.plt.types.FloatPoint.makeInstance(Math.pow(this.n / this.d, a.n / a.d));
	};
	
	org1.plt.types.Rational.prototype.exp = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.exp(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.acos = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.acos(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.asin = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.asin(this.n / this.d));
	};
	
	org1.plt.types.Rational.prototype.imag_dash_part = function(){
		return Rational.ZERO;
	};
	
	org1.plt.types.Rational.prototype.real_dash_part = function(){
		return this;
	};
	
	org1.plt.types.Rational.prototype.round = function(){
		return this;
	};
	
	org1.plt.types.Rational.prototype.HEREEEEEEEEEEEEEEEEE = function(){};
	
	org1.plt.types.Rational.prototype.half = function(){
		return org1.plt.types.Rational.makeInstance(this.n, this.d * 2);
	};
	
	org1.plt.types.Rational.prototype.minus = function(){
		return org1.plt.types.Rational.makeInstance(0 - this.n, this.d);
	};
 
 
    var _rationalCache = {};
    org1.plt.types.Rational.makeInstance = function(n, d) {
  if (n == undefined)
      die("n undefined");
  if (d == undefined)
      die("d undefined");
 
  if (d < 0) {
      n = -n;
      d = -d;
  }
 
  if (d == 1 && n in _rationalCache) {
      return _rationalCache[n];
  }
  else {
      return new org1.plt.types.Rational(n, d);
  }
    };
 
    _rationalCache = {};
    (function() {
  var i;
  for(i = -500; i < 500; i++)
      _rationalCache[i] = new org1.plt.types.Rational(i, 1);
    })();
    org1.plt.types.Rational.NEGATIVE_ONE = _rationalCache[-1];
    org1.plt.types.Rational.ZERO = _rationalCache[0];
    org1.plt.types.Rational.ONE = _rationalCache[1];
 
 
 
 
 
 
    org1.plt.types.FloatPoint = function(n) {
  this.n = n;
    };
 
    org1.plt.types.FloatPoint.prototype.toExact = function() {
      return org1.plt.types.Rational.makeInstance(Math.floor(this.n), 1);
    };


    org1.plt.types.FloatPoint.prototype.level = function() {
  return 1;
    };
 
    org1.plt.types.FloatPoint.prototype.lift = function(target) {
		return org1.plt.types.Complex.makeInstance(this.n, 0);
    };
 
    org1.plt.types.FloatPoint.prototype.toString = function() {
  return this.n.toString();
    };
 
    org1.plt.types.FloatPoint.prototype.isEqual = function(other) {
  return other instanceof org1.plt.types.FloatPoint &&
      this.n == other.n;
    };

    org1.plt.types.FloatPoint.prototype.isReal = function() {
	return true;
    };
 
    org1.plt.types.FloatPoint.prototype.add = function(other) {
  return org1.plt.types.FloatPoint.makeInstance(this.n + other.n);
    };
 
    org1.plt.types.FloatPoint.prototype.subtract = function(other) {
  return org1.plt.types.FloatPoint.makeInstance(this.n - other.n);
    };
 
    org1.plt.types.FloatPoint.prototype.multiply = function(other) {
  return org1.plt.types.FloatPoint.makeInstance(this.n * other.n);
    };
 
    org1.plt.types.FloatPoint.prototype.divide = function(other) {
  return org1.plt.types.FloatPoint.makeInstance(this.n / other.n);
    };
 
 
    org1.plt.types.FloatPoint.prototype.toInteger = function() {
  return Math.floor(this.n);  
    };
 
    org1.plt.types.FloatPoint.prototype.toFloat = function() {
  return this.n;
    };
	
	org1.plt.types.FloatPoint.prototype.toComplex = function(){
		return org1.plt.types.Complex.makeInstance(this.n, 0);
	};
 
    org1.plt.types.FloatPoint.prototype.floor = function() {
  return org1.plt.types.Rational.makeInstance(Math.floor(this.n), 1);
    };
 
    org1.plt.types.FloatPoint.prototype.ceiling = function() {
  return org1.plt.types.Rational.makeInstance(Math.ceil(this.n), 1);
    };
 


    org1.plt.types.FloatPoint.prototype.greaterThan = function(other) {
	return this.n > other.n;
    };
 
    org1.plt.types.FloatPoint.prototype.greaterThanOrEqual = function(other) {
  return this.n >= other.n;
    };
 
    org1.plt.types.FloatPoint.prototype.lessThan = function(other) {
  return this.n < other.n;
    };
 
    org1.plt.types.FloatPoint.prototype.lessThanOrEqual = function(other) {
	return this.n <= other.n;
    };

 
    org1.plt.types.FloatPoint.prototype.sqrt = function() {
	if (this.n < 0)
		return org1.plt.types.Complex.makeInstance(0, Math.sqrt(0 - this.n));
	else
		return org1.plt.types.FloatPoint.makeInstance(Math.sqrt(this.n));
    };
 
    org1.plt.types.FloatPoint.prototype.abs = function() {
  return org1.plt.types.FloatPoint.makeInstance(Math.abs(this.n));
    };
 
    org1.plt.types.FloatPoint.makeInstance = function(n) {
  return new org1.plt.types.FloatPoint(n);
    };
	
	org1.plt.types.FloatPoint.prototype.log = function(){
		if (this.n < 0)
			return this.toComplex().log();
		else
			return org1.plt.types.FloatPoint.makeInstance(Math.log(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.angle = function(){
		if (0 == this.n)
			throw new Error("angle: undefined for 0");
		if (this.n > 0)
			return org1.plt.types.Rational.ZERO;
		else
			return org1.plt.Kernel.pi;
	};
	
	org1.plt.types.FloatPoint.prototype.atan = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.atan(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.cos = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.cos(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.sin = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.sin(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.expt = function(a){
		return org1.plt.types.FloatPoint.makeInstance(Math.pow(this.n, a.n));
	};
	
	org1.plt.types.FloatPoint.prototype.exp = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.exp(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.acos = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.acos(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.asin = function(){
		return org1.plt.types.FloatPoint.makeInstance(Math.asin(this.n));
	};
	
	org1.plt.types.FloatPoint.prototype.imag_dash_part = function(){
		return org1.plt.types.Rational.ZERO;
	};
	
	org1.plt.types.FloatPoint.prototype.real_dash_part = function(){
		return this;
	};
	
	
	org1.plt.types.FloatPoint.prototype.round = function(){
		if (org1.plt.types.NumberTower.lessThan(this.subtract(FloatPoint.makeInstance(0.5)).floor(), this.floor()))
			return this.floor();
		else 
			return this.ceiling();
			
	};
	
	org1.plt.types.FloatPoint.prototype.HEREEEEEEEEEEEEEEEEE = function(){};
	
	org1.plt.types.FloatPoint.prototype.conjugate = org1.plt.types.FloatPoint.prototype.abs;
	
	org1.plt.types.FloatPoint.prototype.magnitude = org1.plt.types.FloatPoint.prototype.abs;
	
	org1.plt.types.FloatPoint.prototype.minus = function(){
		return org1.plt.types.FloatPoint.makeInstance(0 - this.n);
	};
	
	org1.plt.types.FloatPoint.prototype.half = function(){
		return org1.plt.types.FloatPoint.makeInstance(this.n / 2);
	};	
	
	org1.plt.types.FloatPoint.prototype.timesI = function(){
		return org1.plt.types.Complex.makeInstance(0, this.n);
	};
 
    org1.plt.Kernel.pi = org1.plt.types.FloatPoint.makeInstance(Math.PI);
    org1.plt.Kernel.e = org1.plt.types.FloatPoint.makeInstance(Math.E);
 
	org1.plt.types.Complex = function(r, i){
		this.r = org1.plt.types.FloatPoint.makeInstance(r);
		this.i = org1.plt.types.FloatPoint.makeInstance(i);
	};
 
	org1.plt.types.Complex.makeInstance = function(r, i){
		return new org1.plt.types.Complex(r, i);
	};
	
	org1.plt.types.Complex.prototype.toExact = function() { 
	  if (! this.isReal()) {
	    throw new Error("inexact->exact: expects argument of type real number");
	  }
	  return this.r.toExact();
	};

	org1.plt.types.Complex.prototype.level = function(){
		return 2;
	};
 
	org1.plt.types.Complex.prototype.lift = function(target){
		throw new Error("Don't know how to lift Complex number");
	};
 
	org1.plt.types.Complex.prototype.isEqual = function(other){
		return other instanceof org1.plt.types.Complex  && this.r.isEqual(other.r) && this.i.isEqual(other.i);
    };

    org1.plt.types.Complex.prototype.greaterThan = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new Error(">: expects argument of type real number");
	}
	return this.r.greaterThan(other.r);
    };

    org1.plt.types.Complex.prototype.greaterThanOrEqual = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new Error(">: expects argument of type real number");
	}
	return this.r.greaterThanOrEqual(other.r);
    };

    org1.plt.types.Complex.prototype.lessThan = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new Error(">: expects argument of type real number");
	}
	return this.r.lessThan(other.r);
    };

    org1.plt.types.Complex.prototype.lessThanOrEqual = function(other) {
	if (! this.isReal() || ! other.isReal()) {
	    throw new Error(">: expects argument of type real number");
	}
	return this.r.lessThanOrEqual(other.r);
    };


	
	org1.plt.types.Complex.prototype.abs = function(){
		if (!org1.plt.types.NumberTower.equal(this.i, org1.plt.types.Rational.ZERO))
			throw new Error("abs: expects argument of type real number");
		return this.r.abs();
	};
	
	org1.plt.types.Complex.prototype.toInteger = function(){
		if (!org1.plt.types.NumberTower.equal(this.i, org1.plt.types.Rational.ZERO))
			throw new Error("toInteger: expects argument of type real number");
		return this.r.toInteger();
	};
	
	org1.plt.types.Complex.prototype.toFloat = function(){
		if (!org1.plt.types.NumberTower.equal(this.i, org1.plt.types.Rational.ZERO))
			throw new Error("toFloat: expects argument of type real number");
		return this.r.toFloat();
	};
	
	org1.plt.types.Complex.prototype.toComplex = function(){
		return org1.plt.types.Complex.makeInstance(this.r.n, this.i.n);
	};
	
	org1.plt.types.Complex.prototype.add = function(other){
		return org1.plt.types.Complex.makeInstance(this.r.n + other.r.n, this.i.n + other.i.n);
	};
	
	org1.plt.types.Complex.prototype.subtract = function(other){
		return org1.plt.types.Complex.makeInstance(this.r.n - other.r.n, this.i.n - other.i.n);
	};
	
	org1.plt.types.Complex.prototype.multiply = function(other){
		var r = this.r.n * other.r.n - this.i.n * other.i.n;
		var i = this.r.n * other.i.n + this.i.n * other.r.n;
		return org1.plt.types.Complex.makeInstance(r, i);
	};
	
	org1.plt.types.Complex.prototype.divide = function(other){
		var con = other.conjugate();
		var up =  org1.plt.types.NumberTower.multiply(this, con);
		var down = org1.plt.types.NumberTower.multiply(other, con);
		return org1.plt.types.Complex.makeInstance(up.r.n / down.r.n, up.i.n / down.r.n);
	};
	
	org1.plt.types.Complex.prototype.conjugate = function(){
		return org1.plt.types.Complex.makeInstance(this.r.n, 0 - this.i.n);
	};
	
	org1.plt.types.Complex.prototype.magnitude = function(){
		var sum = org1.plt.types.FloatPoint.makeInstance(this.r.n*this.r.n + this.i.n * this.i.n);
		return org1.plt.types.FloatPoint.makeInstance(sum.sqrt().n);
	};
	
	org1.plt.types.Complex.prototype.isReal = function(){
		return this.i.n == 0;
	};
	
	org1.plt.types.Complex.prototype.sqrt = function(){
		if (this.isReal())
			return this.r.sqrt();
			
		// http://en.wikipedia.org/wiki/Square_root#Square_roots_of_negative_and_complex_numbers	
		var r_plus_x = org1.plt.types.NumberTower.add(this.magnitude(), this.r);

		var r = r_plus_x.half().sqrt();
		var i = org1.plt.types.NumberTower.divide(this.i, org1.plt.types.NumberTower.multiply(r_plus_x, org1.plt.types.FloatPoint.makeInstance(2)).sqrt());
		
		return org1.plt.types.Complex.makeInstance(r.toFloat(), i.toFloat());
	};
	
	org1.plt.types.Complex.prototype.log = function(){
		return org1.plt.types.Complex.makeInstance(this.magnitude().log().toFloat(), this.angle().toFloat());
	};
	
	org1.plt.types.Complex.prototype.angle = function(){
		if (this.isReal())
			return this.r.angle();
		if (0 == this.r.n){
			var tmp = org1.plt.Kernel.pi.half();
			return this.i.n > 0 ? tmp : tmp.minus();
		} else {
			var tmp = org1.plt.types.NumberTower.divide(this.i.abs(), this.r.abs()).atan();
			if (this.r.n > 0)
				return this.i.n > 0 ? tmp : tmp.minus();
			else
				return this.i.n > 0 ? org1.plt.Kernel.pi.subtract(tmp) : tmp.subtract(org1.plt.Kernel.pi);
		}
	};
	
	org1.plt.types.Complex.prototype.atan = function(){
		if (this.isReal())
			return this.r.atan();
		var iz = this.timesI();
		var part1 = org1.plt.types.Complex.makeInstance(1, iz.minus()).log();
		var part2 = org1.plt.types.Complex.makeInstance(1, iz).log();
		return part1.subtract(part2).timesI().half();
	};
	
	org1.plt.types.Complex.prototype.cos = function(){
		if (this.isReal())
			return this.r.cos();
		var iz = this.timesI();
		var iz_minus = iz.minus();
		
		return org1.plt.types.NumberTower.add(iz.exp(), iz_minus.exp()).half();
	};
	
	org1.plt.types.Complex.prototype.sin = function(){
		if (this.isReal())
			return this.r.sin();
		var iz = this.timesI();
		var iz_minus = iz.minus();
		var z2 = org1.plt.types.Complex.makeInstance(0, 2);
		
		var exp_minus = org1.plt.types.NumberTower.subtract(iz.exp(), iz_minus.exp());
		
		return org1.plt.types.NumberTower.divide(exp_minus, z2);
	};
	
	org1.plt.types.Complex.prototype.expt= function(y){
		var expo = y.multiply(this.log());
		return expo.exp();
	};
	
	org1.plt.types.Complex.prototype.exp = function(){
		var part1 = this.r.exp();
		var part2 = org1.plt.types.Complex.makeInstance(this.i.cos(), this.i.sin().timesI());
		
		return org1.plt.types.NumberTower.multiply(part1, part2);
	};
	
	org1.plt.types.Complex.prototype.acos = function(){
		if (this.isReal())
			return this.r.acos();
		var pi_half = org1.plt.Kernel.pi.half();
		var iz = this.timesI();
		var root = org1.plt.types.NumberTower.subtract(org1.plt.types.Rational.ONE, this.multiply(this)).sqrt();
		var l = org1.plt.types.NumberTower.add(iz, root).log().timesI();
		return org1.plt.types.NumberTower.add(pi_half, l);
	};
	
	org1.plt.types.Complex.prototype.asin = function(){
		if (this.isReal())
			return this.r.asin();
		var iz = this.timesI();
		var root = org1.plt.types.NumberTower.subtract(org1.plt.types.Rational.ONE, this.multiply(this)).sqrt();
		var ret = org1.plt.types.NumberTower.add(iz, root).log().timesI().minus();
		// FIXME: missing return value!
		throw new Error("");
	};
	
	org1.plt.types.Complex.prototype.ceiling = function(){
		if (!this.isReal())
			throw new Error("ceiling: can only be applied to real number");
		return this.r.ceiling();
	};
	
	org1.plt.types.Complex.prototype.floor = function(){
		if (!this.isReal())
			throw new Error("floor: can only be applied to real number");
		return this.r.floor();
	};
	
	org1.plt.types.Complex.prototype.imag_dash_part = function(){
		return this.i;
	};
	
	org1.plt.types.Complex.prototype.real_dash_part = function(){
		return this.r;
	};
	
	org1.plt.types.Complex.prototype.round = function(){
		return this.r.round();
	};
	
	org1.plt.types.Complex.prototype.HEREEEEEEEEEEEEEEEEE = function(){};
	
	org1.plt.types.Complex.prototype.timesI = function(){
		return this.multiply(org1.plt.types.Complex.makeInstance(0, 1));
	};
	
	org1.plt.types.Complex.prototype.minus = function(){
		return org1.plt.types.Complex.makeInstance(0 - this.r.n, 0 - this.i.n);
	};
	
	org1.plt.types.Complex.prototype.half = function(){
		return org1.plt.types.Complex.makeInstance(this.r.n/2, this.i.n/2);
	};
 
    //////////////////////////////////////////////////////////////////////
    // NumberTower.
    // 
    // Currently only support Rational and Floating.
    org1.plt.types.NumberTower = {};
 
 
    org1.plt.types.NumberTower.toInteger = function(num) {
  return num.toInteger();
    };
 
    org1.plt.types.NumberTower.toFloat = function(num) {
  return num.toFloat();
    };
 
    org1.plt.types.NumberTower.abs = function(n) {
  return n.abs();
    };
 
    org1.plt.types.NumberTower.toExact = function(x) {
      return x.toExact();
    };

    org1.plt.types.NumberTower.add = function(x, y) {
  if (x.level() < y.level()) x = x.lift(y);
  if (y.level() < x.level()) y = y.lift(x);
  return x.add(y);
    };
 
    org1.plt.types.NumberTower.subtract = function(x, y) {
  if (x.level() < y.level()) x = x.lift(y);
  if (y.level() < x.level()) y = y.lift(x);
  return x.subtract(y);
    };
 
    org1.plt.types.NumberTower.multiply = function(x, y) {
  if (x.level() < y.level()) x = x.lift(y);
  if (y.level() < x.level()) y = y.lift(x);
  return x.multiply(y);
    };
 
    org1.plt.types.NumberTower.divide = function(x, y) {
  if (x.level() < y.level()) x = x.lift(y);
  if (y.level() < x.level()) y = y.lift(x);
  return x.divide(y);
    };
 
    org1.plt.types.NumberTower.equal = function(x, y) {
	if (x.level() < y.level()) x = x.lift(y);
  if (y.level() < x.level()) y = y.lift(x);
	
  return x.isEqual(y);
    };
 
    org1.plt.types.NumberTower.approxEqual = function(x, y, delta) {
  // fixme: use delta
  return x.isEqual(y);
    };
	
    org1.plt.types.NumberTower.greaterThanOrEqual = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);

	if (!(x.isReal() && y.isReal()))
	    throw new Error("greaterThanOrEqual: couldn't be applied to complex number");
	return x.greaterThanOrEqual(y);
    };
    
    org1.plt.types.NumberTower.lessThanOrEqual = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	if (!(x.isReal() && y.isReal()))
	    throw new Error("lessThanOrEqual: couldn't be applied to complex number");
	return x.lessThanOrEqual(y);
    };
    
    org1.plt.types.NumberTower.greaterThan = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);
	
	if (!(x.isReal() && y.isReal()))
	    throw new Error("greaterThan: couldn't be applied to complex number");
	return x.greaterThan(y);
	
    };
    
    org1.plt.types.NumberTower.lessThan = function(x, y){
	if (x.level() < y.level()) x = x.lift(y);
	if (y.level() < x.level()) y = y.lift(x);

	if (!(x.isReal() && y.isReal()))
	    throw new Error("lessThan: couldn't be applied to complex number");
	return x.lessThan(y);
    };
 
    org1.plt.types.NumberTower.modulo = function(m, n) {
  var result = 
      org1.plt.types.Rational.makeInstance(m.toInteger() % n.toInteger(),
            1);
  if (org1.plt.types.NumberTower.lessThan(result, org1.plt.types.Rational.ZERO)) {
      return org1.plt.types.NumberTower.add(result, n);
  }
  return result;
    };
 
    org1.plt.types.NumberTower.sqr = function(x) {
  return org1.plt.types.NumberTower.multiply(x, x);
    };
	
	org1.plt.types.NumberTower.expt = function(x, y){
		if (x.level() < y.level()) x = x.lift(y);
		if (y.level() < x.level()) y = y.lift(x);
		return x.expt(y);
	};
 
 
 
    //////////////////////////////////////////////////////////////////////
    // Platform-specific stuff.
    org1.plt.platform = {};
 
 
    org1.plt.platform.getInstance = function() {
  return JavascriptPlatform;
    };
 
    var JavascriptPlatform = {};
 
    JavascriptPlatform.getLocationService = function() {
  return JavascriptLocationService;
    };
 
    JavascriptPlatform.getTiltService = function() {
  return JavascriptTiltService;
    };
 
    var JavascriptLocationService = { 
  startService : function() {
      // fill me in.
  },
  shutdownService : function() {
      // fill me in.
  },
 
  addLocationListener : function(listener) {
      // fill me in.
 
  }
    };
 
    var JavascriptTiltService = { 
  startService : function() {
      // fill me in.
  },
  shutdownService : function() {
      // fill me in.
  },
 
  addOrientationChangeListener : function(listener) {
      // fill me in.
 
  },
  addAccelerationChangeListener : function(listener) {
      // fill me in.
  }
    };
 
 
})();
var readSchemeExpressions;


function tokenize(s) {

  function replaceEscapes(s) {
    return s.replace(/\\./g, function(match, submatch, index) {
      // FIXME: add more escape sequences.
      if (match == '\\n') {
	return "\n";
      }
      else {
	return match.substring(1);
      }
      });
    }



  var tokens = [];

  var PATTERNS = [['whitespace' , /^(\s+)/],
		  ['comment' , /(^;[^\n]*)/],
		  ['(' , /^(\(|\[)/],
		  [')' , /^(\)|\])/],
	          ['\'' , /^(\')/],
		  ['`' , /^(`)/],
		  [',' , /^(,)/],
		  ['char', /^\#\\(newline)/],
                  ['char', /^\#\\(.)/],
		  ['number' , /^([+\-]?(?:\d+\.\d+|\d+\.|\.\d+|\d+))/],
		  ['string' , /^"((?:([^\\"]|(\\.)))*)"/],      // comment (emacs getting confused with quote): " 
		  ['symbol' ,/^([a-zA-Z\:\+\=\~\_\?\!\@\#\$\%\^\&\*\-\/\.\>\<][\w\:\+\=\~\_\?\!\@\#\$\%\^\&\*\-\/\.\>\<]*)/]
		 ];

  while (true) {
    var shouldContinue = false;
    for (var i = 0; i < PATTERNS.length; i++) {
      var patternName = PATTERNS[i][0];
      var pattern = PATTERNS[i][1]
      var result = s.match(pattern);
      if (result != null) {
	if (patternName == 'string') {
	  result[1] = replaceEscapes(result[1]);
        }
	if (patternName != 'whitespace' && patternName != 'comment') {
	  tokens.push([patternName, result[1]]);
	}
	s = s.substring(result[0].length);
	shouldContinue = true;
      }
    }
    if (! shouldContinue) {
      break;
    }
  }
  return [tokens, s];
}




(function(){


  readSchemeExpressions = function(s) {
    var tokensAndError = tokenize(s);
    var tokens = tokensAndError[0];
    if (tokensAndError[1].length > 0) {
	throw new Error("Error while tokenizing: the rest of the stream is: " + tokensAndError[1]);
    }

    var quoteSymbol = org1.plt.types.Symbol.makeInstance("quote");
    var quasiquoteSymbol = org1.plt.types.Symbol.makeInstance("quasiquote");
    var unquoteSymbol = org1.plt.types.Symbol.makeInstance("unquote");
    var empty = org1.plt.types.Empty.EMPTY;

    function isType(type) {
      return (tokens.length > 0 && tokens[0][0] == type);
    }
    
    function eat(expectedType) {
      if (tokens.length == 0)
	throw new Error("token stream exhausted while trying to eat " +
			expectedType);
      var t = tokens.shift();
      if (t[0] == expectedType) {
	return t;
      } else {
	throw new Error("Unexpected token " + t);
      }
    }



    function readExpr() {
      var t;
      if (isType('(')) {
	eat('(');
	var result = readExprs();
	eat(')');
	return result;
      } else if (isType("'")) {
	eat("'");
	var quoted = readExpr();
	return org1.plt.Kernel.cons(quoteSymbol,
				   org1.plt.Kernel.cons(quoted, empty));
      } else if (isType('`')) {
	eat("`");
	return org1.plt.Kernel.cons(quasiquoteSymbol,
				   org1.plt.kernel.cons(quoted, empty));
      } else if (isType(',')) {
	eat(",");
	return org1.plt.Kernel.cons(unquoteSymbol,
				   org1.plt.kernel.cons(quoted, empty));
      } else if (isType('number')) {
	t = eat('number');
	if (t[1].match(/\./)) {
	  return org1.plt.types.FloatPoint.makeInstance(parseFloat(t[1]));
	} else {
	  return org1.plt.types.Rational.makeInstance(parseInt(t[1]), 1);
	}
      } else if (isType('string')) {
	t = eat('string');
	return org1.plt.types.String.makeInstance(t[1]);
      } else if (isType('char')) {
        t = eat('char');
	  if (t[1] == 'newline') {
	      return org1.plt.types.Char.makeInstance('\n');
	  }
          else {
	      return org1.plt.types.Char.makeInstance(t[1]);
	  }
      } else if (isType('symbol')) {
	t = eat('symbol');
	return org1.plt.types.Symbol.makeInstance(t[1]);
      } else {
	throw new Error("Parse broke with token stream " + tokens);
      }
    }


    function readExprs() {
      var result = org1.plt.types.Empty.EMPTY;
      while (true) {
	if (tokens.length == 0 || isType(')')) {
	  break;
	} else {
	  var nextElt = readExpr();
	  result = org1.plt.types.Cons.makeInstance(nextElt, result);
	}
      }
      return org1.plt.Kernel.reverse(result);
    }
    


    return readExprs();
  }
  
}());


// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.

function permission_colon_location() {  }
                    permission_colon_location.prototype = new org1.plt.Kernel.Struct();
permission_colon_location.prototype.isEqual = function(other) {
              if (other instanceof permission_colon_location) {
                return org1.plt.types.Logic.TRUE;
              } else {
                return false;
              }
           } 
function make_dash_permission_colon_location() { return new permission_colon_location(); }

function permission_colon_location_question_(obj) { 
              return obj instanceof permission_colon_location; }
function permission_colon_sms() {  }
                    permission_colon_sms.prototype = new org1.plt.Kernel.Struct();
permission_colon_sms.prototype.isEqual = function(other) {
              if (other instanceof permission_colon_sms) {
                return org1.plt.types.Logic.TRUE;
              } else {
                return false;
              }
           } 
function make_dash_permission_colon_sms() { return new permission_colon_sms(); }

function permission_colon_sms_question_(obj) { 
              return obj instanceof permission_colon_sms; }
function permission_colon_tilt() {  }
                    permission_colon_tilt.prototype = new org1.plt.Kernel.Struct();
permission_colon_tilt.prototype.isEqual = function(other) {
              if (other instanceof permission_colon_tilt) {
                return org1.plt.types.Logic.TRUE;
              } else {
                return false;
              }
           } 
function make_dash_permission_colon_tilt() { return new permission_colon_tilt(); }

function permission_colon_tilt_question_(obj) { 
              return obj instanceof permission_colon_tilt; }
function permission_colon_internet() {  }
                    permission_colon_internet.prototype = new org1.plt.Kernel.Struct();
permission_colon_internet.prototype.isEqual = function(other) {
              if (other instanceof permission_colon_internet) {
                return org1.plt.types.Logic.TRUE;
              } else {
                return false;
              }
           } 
function make_dash_permission_colon_internet() { return new permission_colon_internet(); }

function permission_colon_internet_question_(obj) { 
              return obj instanceof permission_colon_internet; }
function permission_question_(datum) { return (((permission_colon_location_question_(datum)))||((permission_colon_sms_question_(datum)))||((permission_colon_tilt_question_(datum)))||((permission_colon_internet_question_(datum)))); }
var PERMISSION_colon_LOCATION; 
var PERMISSION_colon_SMS; 
var PERMISSION_colon_TILT; 
var PERMISSION_colon_INTERNET; 
function permission_dash__greaterthan_android_dash_permissions(a_dash_permission) { return (((permission_colon_location_question_(a_dash_permission))) ? (org1.plt.Kernel.list([(org1.plt.types.String.makeInstance("android.permission.ACCESS_LOCATION")),(org1.plt.types.String.makeInstance("android.permission.ACCESS_GPS")),(org1.plt.types.String.makeInstance("android.permission.ACCESS_FINE_LOCATION"))])) : ((((permission_colon_sms_question_(a_dash_permission))) ? (org1.plt.Kernel.list([(org1.plt.types.String.makeInstance("android.permission.SEND_SMS"))])) : ((((permission_colon_tilt_question_(a_dash_permission))) ? (org1.plt.Kernel.list([])) : ((((permission_colon_internet_question_(a_dash_permission))) ? (org1.plt.Kernel.list([(org1.plt.types.String.makeInstance("android.permission.INTERNET"))])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }
function permission_dash__greaterthan_on_dash_start_dash_code(a_dash_permission) { return (((permission_colon_location_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance("org1.plt.platform.Platform.getInstance().getLocationService().startService();\n      org1.plt.platform.Platform.getInstance().getLocationService().addLocationChangeListener(listener);"))) : ((((permission_colon_sms_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance(""))) : ((((permission_colon_tilt_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance("org1.plt.platform.Platform.getInstance().getTiltService().startService();\n      org1.plt.platform.Platform.getInstance().getTiltService().addOrientationChangeListener(listener);\n      org1.plt.platform.Platform.getInstance().getTiltService().addAccelerationChangeListener(listener);"))) : ((((permission_colon_internet_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance(""))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }
function permission_dash__greaterthan_on_dash_pause_dash_code(a_dash_permission) { return (((permission_colon_location_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance("org1.plt.platform.Platform.getInstance().getLocationService().shutdownService();"))) : ((((permission_colon_sms_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance(""))) : ((((permission_colon_tilt_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance("org1.plt.platform.Platform.getInstance().getTiltService().shutdownService();"))) : ((((permission_colon_internet_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance(""))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }
function permission_dash__greaterthan_on_dash_destroy_dash_code(a_dash_permission) { return (((permission_colon_location_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance("org1.plt.platform.Platform.getInstance().getLocationService().shutdownService();"))) : ((((permission_colon_sms_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance(""))) : ((((permission_colon_tilt_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance("org1.plt.platform.Platform.getInstance().getTiltService().shutdownService();"))) : ((((permission_colon_internet_question_(a_dash_permission))) ? ((org1.plt.types.String.makeInstance(""))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }
function env(bindings) { this.bindings = bindings; }
                    env.prototype = new org1.plt.Kernel.Struct();
env.prototype.isEqual = function(other) {
              if (other instanceof env) {
                return (((org1.plt.Kernel.equal_question_((env_dash_bindings(this)),(env_dash_bindings(other)))))&&(org1.plt.types.Logic.TRUE));
              } else {
                return false;
              }
           } 
function make_dash_env(id0) { return new env(id0); }
function env_dash_bindings(obj) { return obj.bindings; }
function env_question_(obj) { 
              return obj instanceof env; }
var empty_dash_env; 
function binding_question_(datum) { return (((binding_colon_constant_question_(datum)))||((binding_colon_function_question_(datum)))); }
function binding_colon_constant(name,java_dash_string,permissions) { this.name = name;
this.java_dash_string = java_dash_string;
this.permissions = permissions; }
                    binding_colon_constant.prototype = new org1.plt.Kernel.Struct();
binding_colon_constant.prototype.isEqual = function(other) {
              if (other instanceof binding_colon_constant) {
                return (((org1.plt.Kernel.equal_question_((binding_colon_constant_dash_permissions(this)),(binding_colon_constant_dash_permissions(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_constant_dash_java_dash_string(this)),(binding_colon_constant_dash_java_dash_string(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_constant_dash_name(this)),(binding_colon_constant_dash_name(other)))))&&(org1.plt.types.Logic.TRUE))))));
              } else {
                return false;
              }
           } 
function make_dash_binding_colon_constant(id0,id1,id2) { return new binding_colon_constant(id0,id1,id2); }
function binding_colon_constant_dash_name(obj) { return obj.name; }
function binding_colon_constant_dash_java_dash_string(obj) { return obj.java_dash_string; }
function binding_colon_constant_dash_permissions(obj) { return obj.permissions; }
function binding_colon_constant_question_(obj) { 
              return obj instanceof binding_colon_constant; }
function binding_colon_function(name,module_dash_path,min_dash_arity,var_dash_arity_question_,java_dash_string,permissions,cps_question_) { this.name = name;
this.module_dash_path = module_dash_path;
this.min_dash_arity = min_dash_arity;
this.var_dash_arity_question_ = var_dash_arity_question_;
this.java_dash_string = java_dash_string;
this.permissions = permissions;
this.cps_question_ = cps_question_; }
                    binding_colon_function.prototype = new org1.plt.Kernel.Struct();
binding_colon_function.prototype.isEqual = function(other) {
              if (other instanceof binding_colon_function) {
                return (((org1.plt.Kernel.equal_question_((binding_colon_function_dash_cps_question_(this)),(binding_colon_function_dash_cps_question_(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_function_dash_permissions(this)),(binding_colon_function_dash_permissions(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_function_dash_java_dash_string(this)),(binding_colon_function_dash_java_dash_string(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_function_dash_var_dash_arity_question_(this)),(binding_colon_function_dash_var_dash_arity_question_(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_function_dash_min_dash_arity(this)),(binding_colon_function_dash_min_dash_arity(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_function_dash_module_dash_path(this)),(binding_colon_function_dash_module_dash_path(other)))))&&((((org1.plt.Kernel.equal_question_((binding_colon_function_dash_name(this)),(binding_colon_function_dash_name(other)))))&&(org1.plt.types.Logic.TRUE))))))))))))));
              } else {
                return false;
              }
           } 
function make_dash_binding_colon_function(id0,id1,id2,id3,id4,id5,id6) { return new binding_colon_function(id0,id1,id2,id3,id4,id5,id6); }
function binding_colon_function_dash_name(obj) { return obj.name; }
function binding_colon_function_dash_module_dash_path(obj) { return obj.module_dash_path; }
function binding_colon_function_dash_min_dash_arity(obj) { return obj.min_dash_arity; }
function binding_colon_function_dash_var_dash_arity_question_(obj) { return obj.var_dash_arity_question_; }
function binding_colon_function_dash_java_dash_string(obj) { return obj.java_dash_string; }
function binding_colon_function_dash_permissions(obj) { return obj.permissions; }
function binding_colon_function_dash_cps_question_(obj) { return obj.cps_question_; }
function binding_colon_function_question_(obj) { 
              return obj instanceof binding_colon_function; }
function binding_dash_id(a_dash_binding) { return (((binding_colon_constant_question_(a_dash_binding))) ? ((binding_colon_constant_dash_name(a_dash_binding))) : ((((binding_colon_function_question_(a_dash_binding))) ? ((binding_colon_function_dash_name(a_dash_binding))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function env_dash_extend(an_dash_env, new_dash_binding) { return (make_dash_env((org1.plt.Kernel._kernelHashSet((env_dash_bindings(an_dash_env)),(binding_dash_id(new_dash_binding)),new_dash_binding)))); }
function env_dash_lookup(an_dash_env, name) { return (org1.plt.Kernel._kernelHashRef((env_dash_bindings(an_dash_env)),name,org1.plt.types.Logic.FALSE)); }
function env_dash_contains_question_(an_dash_env, name) { return (binding_question_((org1.plt.Kernel._kernelHashRef((env_dash_bindings(an_dash_env)),name,org1.plt.types.Logic.FALSE)))); }
function env_dash_keys(an_dash_env) { return (org1.plt.Kernel._kernelHashMap((env_dash_bindings(an_dash_env)),(function(args2) { var k = args2[0];
var v = args2[1];
                             return k; }))); }
function env_dash_extend_dash_constant(an_dash_env, id, java_dash_string) { return (env_dash_extend(an_dash_env,(make_dash_binding_colon_constant(id,java_dash_string,org1.plt.types.Empty.EMPTY)))); }
function env_dash_extend_dash_function(an_dash_env, id, module_dash_path, min_dash_arity, var_dash_arity_question_, java_dash_string) { return (env_dash_extend(an_dash_env,(make_dash_binding_colon_function(id,module_dash_path,min_dash_arity,var_dash_arity_question_,java_dash_string,org1.plt.types.Empty.EMPTY,org1.plt.types.Logic.FALSE)))); }
function list_question_(datum) { return (((org1.plt.Kernel.empty_question_(datum)))||((((org1.plt.Kernel.pair_question_(datum)))&&((list_question_((org1.plt.Kernel.rest(datum)))))))); }
function program_question_(datum) { return (((list_question_(datum)))&&((org1.plt.Kernel.andmap((function(args3) { var x = args3[0];
                             return (((defn_question_(x)))||((expression_question_(x)))||((test_dash_case_question_(x)))||((library_dash_require_question_(x)))); }),datum)))); }
function expression_question_(an_dash_expr) { return (((org1.plt.Kernel.not((defn_question_(an_dash_expr)))))&&((org1.plt.Kernel.not((test_dash_case_question_(an_dash_expr)))))&&((org1.plt.Kernel.not((library_dash_require_question_(an_dash_expr)))))); }
function defn_question_(an_dash_sexp) { return (((list_dash_begins_dash_with_question_(an_dash_sexp,(org1.plt.types.Symbol.makeInstance("define"))))) ? (org1.plt.types.Logic.TRUE) : ((((list_dash_begins_dash_with_question_(an_dash_sexp,(org1.plt.types.Symbol.makeInstance("define-struct"))))) ? (org1.plt.types.Logic.TRUE) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.types.Logic.FALSE) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
function string_dash_join(strs, delim) { return (((org1.plt.Kernel.empty_question_(strs))) ? ((org1.plt.types.String.makeInstance(""))) : ((((org1.plt.Kernel.empty_question_((org1.plt.Kernel.rest(strs))))) ? ((org1.plt.Kernel.first(strs))) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.first(strs)),delim,(string_dash_join((org1.plt.Kernel.rest(strs)),delim))])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
function list_dash_begins_dash_with_question_(an_dash_sexp, a_dash_label) { return (((list_question_(an_dash_sexp)))&&((org1.plt.Kernel.not((org1.plt.Kernel.empty_question_(an_dash_sexp)))))&&((org1.plt.Kernel.symbol_question_((org1.plt.Kernel.first(an_dash_sexp)))))&&((org1.plt.Kernel.symbol_equal__question_((org1.plt.Kernel.first(an_dash_sexp)),a_dash_label)))); }
function test_dash_case_question_(an_dash_sexp) { return (((list_dash_begins_dash_with_question_(an_dash_sexp,(org1.plt.types.Symbol.makeInstance("check-expect")))))||((list_dash_begins_dash_with_question_(an_dash_sexp,(org1.plt.types.Symbol.makeInstance("check-within")))))||((list_dash_begins_dash_with_question_(an_dash_sexp,(org1.plt.types.Symbol.makeInstance("check-error")))))); }
function library_dash_require_question_(an_dash_sexp) { return (list_dash_begins_dash_with_question_(an_dash_sexp,(org1.plt.types.Symbol.makeInstance("require")))); }
function identifier_dash__greaterthan_munged_dash_java_dash_identifier(an_dash_id) { return (function() { 

function member_question_(an_dash_id, elts) { return (((org1.plt.Kernel.empty_question_(elts))) ? (org1.plt.types.Logic.FALSE) : ((((org1.plt.Kernel.equal_question_((org1.plt.Kernel.first(elts)),an_dash_id))) ? (org1.plt.types.Logic.TRUE) : (((org1.plt.types.Logic.TRUE) ? ((member_question_(an_dash_id,(org1.plt.Kernel.rest(elts))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
var java_dash_identifiers; 
function trans(ch) { return ((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(45))), [])) ? ((org1.plt.types.String.makeInstance("_dash_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(95))), [])) ? ((org1.plt.types.String.makeInstance("_underline_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(63))), [])) ? ((org1.plt.types.String.makeInstance("_question_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(33))), [])) ? ((org1.plt.types.String.makeInstance("_bang_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(46))), [])) ? ((org1.plt.types.String.makeInstance("_dot_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(58))), [])) ? ((org1.plt.types.String.makeInstance("_colon_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(61))), [])) ? ((org1.plt.types.String.makeInstance("_equal_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(35))), [])) ? ((org1.plt.types.String.makeInstance("_pound_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(36))), [])) ? ((org1.plt.types.String.makeInstance("_dollar_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(37))), [])) ? ((org1.plt.types.String.makeInstance("_percent_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(94))), [])) ? ((org1.plt.types.String.makeInstance("_tilde_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(38))), [])) ? ((org1.plt.types.String.makeInstance("_and_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(42))), [])) ? ((org1.plt.types.String.makeInstance("_star_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(43))), [])) ? ((org1.plt.types.String.makeInstance("_plus_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(42))), [])) ? ((org1.plt.types.String.makeInstance("_star_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(47))), [])) ? ((org1.plt.types.String.makeInstance("_slash_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(60))), [])) ? ((org1.plt.types.String.makeInstance("_lessthan_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(62))), [])) ? ((org1.plt.types.String.makeInstance("_greaterthan_"))) : (((org1.plt.Kernel.char_equal__question_(ch,(org1.plt.types.Char.makeInstance(String.fromCharCode(126))), [])) ? ((org1.plt.types.String.makeInstance("_tilde_"))) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.string([ch])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))))))))))))))))))))))))))))))))))); }
((function (toplevel_dash_expression_dash_show4) { 

java_dash_identifiers = (org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("abstract")),(org1.plt.types.Symbol.makeInstance("continue")),(org1.plt.types.Symbol.makeInstance("for")),(org1.plt.types.Symbol.makeInstance("new")),(org1.plt.types.Symbol.makeInstance("switch")),(org1.plt.types.Symbol.makeInstance("assert")),(org1.plt.types.Symbol.makeInstance("default")),(org1.plt.types.Symbol.makeInstance("goto")),(org1.plt.types.Symbol.makeInstance("package")),(org1.plt.types.Symbol.makeInstance("synchronized")),(org1.plt.types.Symbol.makeInstance("boolean")),(org1.plt.types.Symbol.makeInstance("do")),(org1.plt.types.Symbol.makeInstance("if")),(org1.plt.types.Symbol.makeInstance("private")),(org1.plt.types.Symbol.makeInstance("break")),(org1.plt.types.Symbol.makeInstance("double")),(org1.plt.types.Symbol.makeInstance("implements")),(org1.plt.types.Symbol.makeInstance("protected")),(org1.plt.types.Symbol.makeInstance("throw")),(org1.plt.types.Symbol.makeInstance("byte")),(org1.plt.types.Symbol.makeInstance("else")),(org1.plt.types.Symbol.makeInstance("import")),(org1.plt.types.Symbol.makeInstance("public")),(org1.plt.types.Symbol.makeInstance("throws")),(org1.plt.types.Symbol.makeInstance("case")),(org1.plt.types.Symbol.makeInstance("enum")),(org1.plt.types.Symbol.makeInstance("instanceof")),(org1.plt.types.Symbol.makeInstance("return")),(org1.plt.types.Symbol.makeInstance("transient")),(org1.plt.types.Symbol.makeInstance("catch")),(org1.plt.types.Symbol.makeInstance("extends")),(org1.plt.types.Symbol.makeInstance("int")),(org1.plt.types.Symbol.makeInstance("short")),(org1.plt.types.Symbol.makeInstance("try")),(org1.plt.types.Symbol.makeInstance("char")),(org1.plt.types.Symbol.makeInstance("final")),(org1.plt.types.Symbol.makeInstance("interface")),(org1.plt.types.Symbol.makeInstance("static")),(org1.plt.types.Symbol.makeInstance("void")),(org1.plt.types.Symbol.makeInstance("class")),(org1.plt.types.Symbol.makeInstance("finally")),(org1.plt.types.Symbol.makeInstance("long")),(org1.plt.types.Symbol.makeInstance("strictfp")),(org1.plt.types.Symbol.makeInstance("volatile")),(org1.plt.types.Symbol.makeInstance("const")),(org1.plt.types.Symbol.makeInstance("float")),(org1.plt.types.Symbol.makeInstance("native")),(org1.plt.types.Symbol.makeInstance("super")),(org1.plt.types.Symbol.makeInstance("while")),(org1.plt.types.Symbol.makeInstance("null"))]));
 }))(org1.plt.Kernel.identity)
return (((member_question_(an_dash_id,java_dash_identifiers))) ? ((org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("_")),(org1.plt.Kernel.symbol_dash__greaterthan_string(an_dash_id)),(org1.plt.types.String.makeInstance("_"))])))) : (((org1.plt.types.Logic.TRUE) ? ((function() { 

var chars; 
var translated_dash_chunks; 
var translated_dash_id; 
((function (toplevel_dash_expression_dash_show5) { 
chars = (org1.plt.Kernel.string_dash__greaterthan_list((org1.plt.Kernel.symbol_dash__greaterthan_string(an_dash_id))));
translated_dash_chunks = org1.plt.Kernel.map((function(args) {
                    return trans(args[0]);
                 }), [chars]);
translated_dash_id = (org1.plt.Kernel.string_dash__greaterthan_symbol((string_dash_join(translated_dash_chunks,(org1.plt.types.String.makeInstance("")))))); }))(org1.plt.Kernel.identity)
return translated_dash_id;
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))));
              })(); }
function desugar_dash_cond(an_dash_expr) { return (function() { 

function loop(questions, answers, question_dash_last, answer_dash_last) { return (((org1.plt.Kernel.empty_question_(questions))) ? (org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("if")),question_dash_last,answer_dash_last,(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("error")),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("quote")),(org1.plt.types.Symbol.makeInstance("cond"))])),(org1.plt.types.String.makeInstance("Fell out of cond"))]))])) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("if")),(org1.plt.Kernel.first(questions)),(org1.plt.Kernel.first(answers)),(loop((org1.plt.Kernel.rest(questions)),(org1.plt.Kernel.rest(answers)),question_dash_last,answer_dash_last))])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function process_dash_clauses(clauses, questions_slash_rev, answers_slash_rev) { return (((list_dash_begins_dash_with_question_((org1.plt.Kernel.first(clauses)),(org1.plt.types.Symbol.makeInstance("else"))))) ? ((loop((org1.plt.Kernel.reverse(questions_slash_rev)),(org1.plt.Kernel.reverse(answers_slash_rev)),(org1.plt.types.Symbol.makeInstance("true")),(org1.plt.Kernel.second((org1.plt.Kernel.first(clauses))))))) : ((((org1.plt.Kernel.empty_question_((org1.plt.Kernel.rest(clauses))))) ? ((loop((org1.plt.Kernel.reverse(questions_slash_rev)),(org1.plt.Kernel.reverse(answers_slash_rev)),(org1.plt.Kernel.first((org1.plt.Kernel.first(clauses)))),(org1.plt.Kernel.second((org1.plt.Kernel.first(clauses))))))) : (((org1.plt.types.Logic.TRUE) ? ((process_dash_clauses((org1.plt.Kernel.rest(clauses)),(org1.plt.Kernel.cons((org1.plt.Kernel.first((org1.plt.Kernel.first(clauses)))),questions_slash_rev)),(org1.plt.Kernel.cons((org1.plt.Kernel.second((org1.plt.Kernel.first(clauses)))),answers_slash_rev))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
((function (toplevel_dash_expression_dash_show6) { 

 }))(org1.plt.Kernel.identity)
return (((list_dash_begins_dash_with_question_(an_dash_expr,(org1.plt.types.Symbol.makeInstance("cond"))))) ? ((process_dash_clauses((org1.plt.Kernel.rest(an_dash_expr)),org1.plt.types.Empty.EMPTY,org1.plt.types.Empty.EMPTY))) : (((org1.plt.types.Logic.TRUE) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("desugar-cond")),org1.plt.Kernel.format((org1.plt.types.String.makeInstance("Not a cond clause: ~s")), [an_dash_expr])))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))));
              })(); }
function remove_dash_leading_dash_whitespace(a_dash_str) { return (function() { 

function remove_dash_leading_dash_whitespace_slash_list(chars) { return (((org1.plt.Kernel.empty_question_(chars))) ? (org1.plt.types.Empty.EMPTY) : ((((org1.plt.Kernel.char_dash_whitespace_question_((org1.plt.Kernel.first(chars))))) ? ((remove_dash_leading_dash_whitespace_slash_list((org1.plt.Kernel.rest(chars))))) : (((org1.plt.types.Logic.TRUE) ? ((org1.plt.Kernel.list_dash__greaterthan_string(chars))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
((function (toplevel_dash_expression_dash_show7) { 
 }))(org1.plt.Kernel.identity)
return (remove_dash_leading_dash_whitespace_slash_list((org1.plt.Kernel.string_dash__greaterthan_list(a_dash_str))));
              })(); }
function take(a_dash_list, n) { return ((org1.plt.Kernel._equal_(n,(org1.plt.types.Rational.makeInstance(0, 1)), [])) ? (org1.plt.types.Empty.EMPTY) : (((org1.plt.types.Logic.TRUE) ? ((org1.plt.Kernel.cons((org1.plt.Kernel.first(a_dash_list)),(take((org1.plt.Kernel.rest(a_dash_list)),(org1.plt.Kernel.sub1(n))))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function list_dash_tail(a_dash_list, n) { return ((org1.plt.Kernel._equal_(n,(org1.plt.types.Rational.makeInstance(0, 1)), [])) ? (a_dash_list) : (((org1.plt.types.Logic.TRUE) ? ((list_dash_tail((org1.plt.Kernel.rest(a_dash_list)),(org1.plt.Kernel.sub1(n))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function range(n) { return ((org1.plt.Kernel._equal_(n,(org1.plt.types.Rational.makeInstance(0, 1)), [])) ? (org1.plt.types.Empty.EMPTY) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.append((range((org1.plt.Kernel.sub1(n)))), [org1.plt.Kernel.list([(org1.plt.Kernel.sub1(n))])])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function case_dash_analyze_dash_definition(a_dash_definition, f_dash_function, f_dash_regular_dash_definition, f_dash_define_dash_struct) { return (((((list_dash_begins_dash_with_question_(a_dash_definition,(org1.plt.types.Symbol.makeInstance("define")))))&&(org1.plt.Kernel._equal_((org1.plt.Kernel.length(a_dash_definition)),(org1.plt.types.Rational.makeInstance(3, 1)), []))&&((org1.plt.Kernel.pair_question_((org1.plt.Kernel.second(a_dash_definition))))))) ? ((function() { 

var id; 
var args; 
var body; 
((function (toplevel_dash_expression_dash_show8) { 
id = (org1.plt.Kernel.first((org1.plt.Kernel.second(a_dash_definition))));
args = (org1.plt.Kernel.rest((org1.plt.Kernel.second(a_dash_definition))));
body = (org1.plt.Kernel.third(a_dash_definition)); }))(org1.plt.Kernel.identity)
return ((f_dash_function).apply(null, [[id, args, body]]));
              })()) : ((((((list_dash_begins_dash_with_question_(a_dash_definition,(org1.plt.types.Symbol.makeInstance("define")))))&&(org1.plt.Kernel._equal_((org1.plt.Kernel.length(a_dash_definition)),(org1.plt.types.Rational.makeInstance(3, 1)), []))&&((org1.plt.Kernel.symbol_question_((org1.plt.Kernel.second(a_dash_definition)))))&&((list_dash_begins_dash_with_question_((org1.plt.Kernel.third(a_dash_definition)),(org1.plt.types.Symbol.makeInstance("lambda"))))))) ? ((function() { 

var id; 
var args; 
var body; 
((function (toplevel_dash_expression_dash_show9) { 
id = (org1.plt.Kernel.second(a_dash_definition));
args = (org1.plt.Kernel.second((org1.plt.Kernel.third(a_dash_definition))));
body = (org1.plt.Kernel.third((org1.plt.Kernel.third(a_dash_definition)))); }))(org1.plt.Kernel.identity)
return ((f_dash_function).apply(null, [[id, args, body]]));
              })()) : ((((((list_dash_begins_dash_with_question_(a_dash_definition,(org1.plt.types.Symbol.makeInstance("define")))))&&(org1.plt.Kernel._equal_((org1.plt.Kernel.length(a_dash_definition)),(org1.plt.types.Rational.makeInstance(3, 1)), []))&&((org1.plt.Kernel.symbol_question_((org1.plt.Kernel.second(a_dash_definition)))))&&((org1.plt.Kernel.not((list_dash_begins_dash_with_question_((org1.plt.Kernel.third(a_dash_definition)),(org1.plt.types.Symbol.makeInstance("lambda"))))))))) ? ((function() { 

var id; 
var body; 
((function (toplevel_dash_expression_dash_show10) { 
id = (org1.plt.Kernel.second(a_dash_definition));
body = (org1.plt.Kernel.third(a_dash_definition)); }))(org1.plt.Kernel.identity)
return ((f_dash_regular_dash_definition).apply(null, [[id, body]]));
              })()) : ((((list_dash_begins_dash_with_question_(a_dash_definition,(org1.plt.types.Symbol.makeInstance("define-struct"))))) ? ((function() { 

var id; 
var fields; 
((function (toplevel_dash_expression_dash_show11) { 
id = (org1.plt.Kernel.second(a_dash_definition));
fields = (org1.plt.Kernel.third(a_dash_definition)); }))(org1.plt.Kernel.identity)
return ((f_dash_define_dash_struct).apply(null, [[id, fields]]));
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }
function path_equal__question_(path_dash_1, path_dash_2) { return org1.plt.Kernel.string_equal__question_((org1.plt.Kernel._pathToString((org1.plt.Kernel._normalizePath(path_dash_1)))),(org1.plt.Kernel._pathToString((org1.plt.Kernel._normalizePath(path_dash_2)))), []); }
var toplevel_dash_env; 
function pinfo(env,modules,used_dash_bindings_dash_hash) { this.env = env;
this.modules = modules;
this.used_dash_bindings_dash_hash = used_dash_bindings_dash_hash; }
                    pinfo.prototype = new org1.plt.Kernel.Struct();
pinfo.prototype.isEqual = function(other) {
              if (other instanceof pinfo) {
                return (((org1.plt.Kernel.equal_question_((pinfo_dash_used_dash_bindings_dash_hash(this)),(pinfo_dash_used_dash_bindings_dash_hash(other)))))&&((((org1.plt.Kernel.equal_question_((pinfo_dash_modules(this)),(pinfo_dash_modules(other)))))&&((((org1.plt.Kernel.equal_question_((pinfo_dash_env(this)),(pinfo_dash_env(other)))))&&(org1.plt.types.Logic.TRUE))))));
              } else {
                return false;
              }
           } 
function make_dash_pinfo(id0,id1,id2) { return new pinfo(id0,id1,id2); }
function pinfo_dash_env(obj) { return obj.env; }
function pinfo_dash_modules(obj) { return obj.modules; }
function pinfo_dash_used_dash_bindings_dash_hash(obj) { return obj.used_dash_bindings_dash_hash; }
function pinfo_question_(obj) { 
              return obj instanceof pinfo; }
var empty_dash_pinfo; 
function get_dash_base_dash_pinfo(_underline_) { return (make_dash_pinfo(toplevel_dash_env,org1.plt.types.Empty.EMPTY,(org1.plt.Kernel._kernelMakeImmutableHashEq(org1.plt.types.Empty.EMPTY)))); }
function pinfo_dash_used_dash_bindings(a_dash_pinfo) { return (org1.plt.Kernel._kernelHashMap((pinfo_dash_used_dash_bindings_dash_hash(a_dash_pinfo)),(function(args16) { var k = args16[0];
var v = args16[1];
                             return v; }))); }
function pinfo_dash_update_dash_env(a_dash_pinfo, an_dash_env) { return (make_dash_pinfo(an_dash_env,(pinfo_dash_modules(a_dash_pinfo)),(pinfo_dash_used_dash_bindings_dash_hash(a_dash_pinfo)))); }
function pinfo_dash_accumulate_dash_binding(a_dash_binding, a_dash_pinfo) { return (make_dash_pinfo((env_dash_extend((pinfo_dash_env(a_dash_pinfo)),a_dash_binding)),(pinfo_dash_modules(a_dash_pinfo)),(pinfo_dash_used_dash_bindings_dash_hash(a_dash_pinfo)))); }
function pinfo_dash_accumulate_dash_bindings(bindings, a_dash_pinfo) { return org1.plt.Kernel.foldl((function(args) {
                    return pinfo_dash_accumulate_dash_binding(args[0], args[1]);
                 }),a_dash_pinfo, [bindings]); }
function pinfo_dash_accumulate_dash_module(a_dash_module, a_dash_pinfo) { return (make_dash_pinfo((pinfo_dash_env(a_dash_pinfo)),(org1.plt.Kernel.cons(a_dash_module,(pinfo_dash_modules(a_dash_pinfo)))),(pinfo_dash_used_dash_bindings_dash_hash(a_dash_pinfo)))); }
function pinfo_dash_accumulate_dash_binding_dash_use(a_dash_binding, a_dash_pinfo) { return (make_dash_pinfo((pinfo_dash_env(a_dash_pinfo)),(pinfo_dash_modules(a_dash_pinfo)),(org1.plt.Kernel._kernelHashSet((pinfo_dash_used_dash_bindings_dash_hash(a_dash_pinfo)),(binding_dash_id(a_dash_binding)),a_dash_binding)))); }
function program_dash_analyze(a_dash_program) { return (program_dash_analyze_slash_pinfo(a_dash_program,(get_dash_base_dash_pinfo((org1.plt.types.Symbol.makeInstance("_")))))); }
function program_dash_analyze_slash_pinfo(a_dash_program, pinfo) { return (function() { 

var pinfo_dash_1; 
((function (toplevel_dash_expression_dash_show17) { 
pinfo_dash_1 = (program_dash_analyze_dash_collect_dash_definitions(a_dash_program,pinfo)); }))(org1.plt.Kernel.identity)
return (program_dash_analyze_dash_uses(a_dash_program,pinfo_dash_1));
              })(); }
function program_dash_analyze_dash_collect_dash_definitions(a_dash_program, pinfo) { return (((org1.plt.Kernel.empty_question_(a_dash_program))) ? (pinfo) : (((org1.plt.types.Logic.TRUE) ? ((function() { 

var updated_dash_pinfo; 
((function (toplevel_dash_expression_dash_show18) { 
updated_dash_pinfo = (((defn_question_((org1.plt.Kernel.first(a_dash_program))))) ? ((definition_dash_analyze_dash_collect_dash_definitions((org1.plt.Kernel.first(a_dash_program)),pinfo))) : ((((test_dash_case_question_((org1.plt.Kernel.first(a_dash_program))))) ? (pinfo) : ((((library_dash_require_question_((org1.plt.Kernel.first(a_dash_program))))) ? ((require_dash_analyze((org1.plt.Kernel.second((org1.plt.Kernel.first(a_dash_program)))),pinfo))) : ((((expression_question_((org1.plt.Kernel.first(a_dash_program))))) ? (pinfo) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }))(org1.plt.Kernel.identity)
return (program_dash_analyze_dash_collect_dash_definitions((org1.plt.Kernel.rest(a_dash_program)),updated_dash_pinfo));
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function program_dash_analyze_dash_uses(a_dash_program, pinfo) { return (((org1.plt.Kernel.empty_question_(a_dash_program))) ? (pinfo) : (((org1.plt.types.Logic.TRUE) ? ((function() { 

var updated_dash_pinfo; 
((function (toplevel_dash_expression_dash_show19) { 
updated_dash_pinfo = (((defn_question_((org1.plt.Kernel.first(a_dash_program))))) ? ((definition_dash_analyze_dash_uses((org1.plt.Kernel.first(a_dash_program)),pinfo))) : ((((test_dash_case_question_((org1.plt.Kernel.first(a_dash_program))))) ? (pinfo) : ((((library_dash_require_question_((org1.plt.Kernel.first(a_dash_program))))) ? (pinfo) : ((((expression_question_((org1.plt.Kernel.first(a_dash_program))))) ? ((expression_dash_analyze_dash_uses((org1.plt.Kernel.first(a_dash_program)),pinfo,(pinfo_dash_env(pinfo))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }))(org1.plt.Kernel.identity)
return (program_dash_analyze_dash_uses((org1.plt.Kernel.rest(a_dash_program)),updated_dash_pinfo));
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function bf(name, module_dash_path, arity, vararity_question_, java_dash_string) { return (make_dash_binding_colon_function(name,module_dash_path,arity,vararity_question_,java_dash_string,org1.plt.types.Empty.EMPTY,org1.plt.types.Logic.FALSE)); }
function definition_dash_analyze_dash_collect_dash_definitions(a_dash_definition, pinfo) { return (case_dash_analyze_dash_definition(a_dash_definition,(function(args20) { var id = args20[0];
var args = args20[1];
var body = args20[2];
                             return (pinfo_dash_accumulate_dash_binding((bf(id,org1.plt.types.Logic.FALSE,(org1.plt.Kernel.length(args)),org1.plt.types.Logic.FALSE,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))))),pinfo)); }),(function(args21) { var id = args21[0];
var expr = args21[1];
                             return (pinfo_dash_accumulate_dash_binding((make_dash_binding_colon_constant(id,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),org1.plt.types.Empty.EMPTY)),pinfo)); }),(function(args22) { var id = args22[0];
var fields = args22[1];
                             return (pinfo_dash_update_dash_env(pinfo,(extend_dash_env_slash_struct_dash_defns((pinfo_dash_env(pinfo)),id,fields)))); }))); }
function extend_dash_env_slash_struct_dash_defns(an_dash_env, id, fields) { return (function() { 

var constructor_dash_id; 
var constructor_dash_binding; 
var predicate_dash_id; 
var predicate_dash_binding; 
var selector_dash_ids; 
var selector_dash_bindings; 
((function (toplevel_dash_expression_dash_show23) { 
constructor_dash_id = (org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("make-")),(org1.plt.Kernel.symbol_dash__greaterthan_string(id))])));
constructor_dash_binding = (bf(constructor_dash_id,org1.plt.types.Logic.FALSE,(org1.plt.Kernel.length(fields)),org1.plt.types.Logic.FALSE,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(constructor_dash_id))))));
predicate_dash_id = (org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string(id)),(org1.plt.types.String.makeInstance("?"))])));
predicate_dash_binding = (bf(predicate_dash_id,org1.plt.types.Logic.FALSE,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(predicate_dash_id))))));
selector_dash_ids = org1.plt.Kernel.map((function(args24) { var f = args24[0];
                             return (org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string(id)),(org1.plt.types.String.makeInstance("-")),(org1.plt.Kernel.symbol_dash__greaterthan_string(f))]))); }), [fields]);
selector_dash_bindings = org1.plt.Kernel.map((function(args25) { var sel_dash_id = args25[0];
                             return (bf(sel_dash_id,org1.plt.types.Logic.FALSE,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(sel_dash_id)))))); }), [selector_dash_ids]); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.foldl((function(args26) { var a_dash_binding = args26[0];
var an_dash_env = args26[1];
                             return (env_dash_extend(an_dash_env,a_dash_binding)); }),an_dash_env, [org1.plt.Kernel.list_star_(constructor_dash_binding, [predicate_dash_binding,selector_dash_bindings])]);
              })(); }
function definition_dash_analyze_dash_uses(a_dash_definition, pinfo) { return (case_dash_analyze_dash_definition(a_dash_definition,(function(args27) { var id = args27[0];
var args = args27[1];
var body = args27[2];
                             return (function_dash_definition_dash_analyze_dash_uses(id,args,body,pinfo)); }),(function(args28) { var id = args28[0];
var expr = args28[1];
                             return (expression_dash_analyze_dash_uses(expr,pinfo,(pinfo_dash_env(pinfo)))); }),(function(args29) { var id = args29[0];
var fields = args29[1];
                             return pinfo; }))); }
function function_dash_definition_dash_analyze_dash_uses(fun, args, body, pinfo) { return (function() { 

var env_dash_1; 
var env_dash_2; 
((function (toplevel_dash_expression_dash_show30) { 
env_dash_1 = (pinfo_dash_env(pinfo));
env_dash_2 = (env_dash_extend(env_dash_1,(bf(fun,org1.plt.types.Logic.FALSE,(org1.plt.Kernel.length(args)),org1.plt.types.Logic.FALSE,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(fun)))))))); }))(org1.plt.Kernel.identity)
return (lambda_dash_expression_dash_analyze_dash_uses(args,body,(pinfo_dash_update_dash_env(pinfo,env_dash_2))));
              })(); }
function lambda_dash_expression_dash_analyze_dash_uses(args, body, pinfo) { return (function() { 

var env_dash_1; 
var env_dash_2; 
((function (toplevel_dash_expression_dash_show31) { 
env_dash_1 = (pinfo_dash_env(pinfo));
env_dash_2 = org1.plt.Kernel.foldl((function(args32) { var arg_dash_id = args32[0];
var env = args32[1];
                             return (env_dash_extend(env,(make_dash_binding_colon_constant(arg_dash_id,(org1.plt.Kernel.symbol_dash__greaterthan_string(arg_dash_id)),org1.plt.types.Empty.EMPTY)))); }),env_dash_1, [args]); }))(org1.plt.Kernel.identity)
return (expression_dash_analyze_dash_uses(body,pinfo,env_dash_2));
              })(); }
function expression_dash_analyze_dash_uses(an_dash_expression, pinfo, env) { return (((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("local"))))) ? ((local_dash_expression_dash_analyze_dash_uses(an_dash_expression,pinfo,env))) : ((((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("cond"))))) ? ((expression_dash_analyze_dash_uses((desugar_dash_cond(an_dash_expression)),pinfo,env))) : ((((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("if"))))) ? ((if_dash_expression_dash_analyze_dash_uses(an_dash_expression,pinfo,env))) : ((((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("and"))))) ? ((function() { 

var exprs; 
((function (toplevel_dash_expression_dash_show33) { 
exprs = (org1.plt.Kernel.rest(an_dash_expression)); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.foldl((function(args34) { var e = args34[0];
var p = args34[1];
                             return (expression_dash_analyze_dash_uses(e,p,env)); }),pinfo, [exprs]);
              })()) : ((((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("or"))))) ? ((function() { 

var exprs; 
((function (toplevel_dash_expression_dash_show35) { 
exprs = (org1.plt.Kernel.rest(an_dash_expression)); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.foldl((function(args36) { var e = args36[0];
var p = args36[1];
                             return (expression_dash_analyze_dash_uses(e,p,env)); }),pinfo, [exprs]);
              })()) : ((((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("lambda"))))) ? ((function() { 

var args; 
var body; 
((function (toplevel_dash_expression_dash_show37) { 
args = (org1.plt.Kernel.second(an_dash_expression));
body = (org1.plt.Kernel.third(an_dash_expression)); }))(org1.plt.Kernel.identity)
return (lambda_dash_expression_dash_analyze_dash_uses(args,body,pinfo));
              })()) : ((((org1.plt.Kernel.number_question_(an_dash_expression))) ? (pinfo) : ((((org1.plt.Kernel.string_question_(an_dash_expression))) ? (pinfo) : ((((org1.plt.Kernel.char_question_(an_dash_expression))) ? (pinfo) : ((((org1.plt.Kernel.symbol_question_(an_dash_expression))) ? ((((env_dash_contains_question_(env,an_dash_expression))) ? ((pinfo_dash_accumulate_dash_binding_dash_use((env_dash_lookup(env,an_dash_expression)),pinfo))) : (((org1.plt.types.Logic.TRUE) ? (pinfo) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))))) : ((((list_dash_begins_dash_with_question_(an_dash_expression,(org1.plt.types.Symbol.makeInstance("quote"))))) ? (pinfo) : ((((org1.plt.Kernel.pair_question_(an_dash_expression))) ? ((application_dash_expression_dash_analyze_dash_uses(an_dash_expression,pinfo,env))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))))))))))))))))))); }
function local_dash_expression_dash_analyze_dash_uses(an_dash_expression, pinfo, env) { return (function() { 

var defns; 
var body; 
var nested_dash_pinfo; 
((function (toplevel_dash_expression_dash_show38) { 
defns = (org1.plt.Kernel.second(an_dash_expression));
body = (org1.plt.Kernel.third(an_dash_expression));
nested_dash_pinfo = org1.plt.Kernel.foldl((function(args39) { var a_dash_defn = args39[0];
var a_dash_pinfo = args39[1];
                             return (definition_dash_analyze_dash_uses(a_dash_defn,a_dash_pinfo)); }),pinfo, [defns]); }))(org1.plt.Kernel.identity)
return (pinfo_dash_update_dash_env((expression_dash_analyze_dash_uses(body,nested_dash_pinfo,(pinfo_dash_env(nested_dash_pinfo)))),(pinfo_dash_env(pinfo))));
              })(); }
function if_dash_expression_dash_analyze_dash_uses(an_dash_expression, pinfo, env) { return (function() { 

var test; 
var consequent; 
var alternative; 
((function (toplevel_dash_expression_dash_show40) { 
test = (org1.plt.Kernel.second(an_dash_expression));
consequent = (org1.plt.Kernel.third(an_dash_expression));
alternative = (org1.plt.Kernel.fourth(an_dash_expression)); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.foldl((function(args41) { var e = args41[0];
var p = args41[1];
                             return (expression_dash_analyze_dash_uses(e,p,env)); }),pinfo, [org1.plt.Kernel.list([test,consequent,alternative])]);
              })(); }
function application_dash_expression_dash_analyze_dash_uses(an_dash_expression, pinfo, env) { return (function() { 

var updated_dash_pinfo; 
((function (toplevel_dash_expression_dash_show42) { 
updated_dash_pinfo = org1.plt.Kernel.foldl((function(args43) { var e = args43[0];
var p = args43[1];
                             return (expression_dash_analyze_dash_uses(e,p,env)); }),pinfo, [an_dash_expression]); }))(org1.plt.Kernel.identity)
return updated_dash_pinfo;
              })(); }
function module_dash_binding(name,path,bindings) { this.name = name;
this.path = path;
this.bindings = bindings; }
                    module_dash_binding.prototype = new org1.plt.Kernel.Struct();
module_dash_binding.prototype.isEqual = function(other) {
              if (other instanceof module_dash_binding) {
                return (((org1.plt.Kernel.equal_question_((module_dash_binding_dash_bindings(this)),(module_dash_binding_dash_bindings(other)))))&&((((org1.plt.Kernel.equal_question_((module_dash_binding_dash_path(this)),(module_dash_binding_dash_path(other)))))&&((((org1.plt.Kernel.equal_question_((module_dash_binding_dash_name(this)),(module_dash_binding_dash_name(other)))))&&(org1.plt.types.Logic.TRUE))))));
              } else {
                return false;
              }
           } 
function make_dash_module_dash_binding(id0,id1,id2) { return new module_dash_binding(id0,id1,id2); }
function module_dash_binding_dash_name(obj) { return obj.name; }
function module_dash_binding_dash_path(obj) { return obj.path; }
function module_dash_binding_dash_bindings(obj) { return obj.bindings; }
function module_dash_binding_question_(obj) { 
              return obj instanceof module_dash_binding; }
var world_dash_config_dash_module; 
function make_dash_world_dash_module(module_dash_path) { return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("world")),module_dash_path,org1.plt.Kernel.append((module_dash_binding_dash_bindings(world_dash_config_dash_module)), [org1.plt.Kernel.list([(bf((org1.plt.types.Symbol.makeInstance("big-bang")),module_dash_path,(org1.plt.types.Rational.makeInstance(3, 1)),org1.plt.types.Logic.TRUE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.bigBang")))),(bf((org1.plt.types.Symbol.makeInstance("empty-scene")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.emptyScene")))),(bf((org1.plt.types.Symbol.makeInstance("place-image")),module_dash_path,(org1.plt.types.Rational.makeInstance(4, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.placeImage")))),(bf((org1.plt.types.Symbol.makeInstance("circle")),module_dash_path,(org1.plt.types.Rational.makeInstance(3, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.circle")))),(bf((org1.plt.types.Symbol.makeInstance("nw:rectangle")),module_dash_path,(org1.plt.types.Rational.makeInstance(4, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.nwRectangle")))),(bf((org1.plt.types.Symbol.makeInstance("rectangle")),module_dash_path,(org1.plt.types.Rational.makeInstance(4, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.rectangle")))),(bf((org1.plt.types.Symbol.makeInstance("key=?")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.isKeyEqual")))),(bf((org1.plt.types.Symbol.makeInstance("text")),module_dash_path,(org1.plt.types.Rational.makeInstance(3, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.text")))),(bf((org1.plt.types.Symbol.makeInstance("-kernel-create-image")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel._kernelCreateImage")))),(bf((org1.plt.types.Symbol.makeInstance("image-width")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.imageWidth")))),(bf((org1.plt.types.Symbol.makeInstance("image-height")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.imageHeight")))),(bf((org1.plt.types.Symbol.makeInstance("image?")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.isImage")))),(bf((org1.plt.types.Symbol.makeInstance("image=?")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.isImageEqual")))),(bf((org1.plt.types.Symbol.makeInstance("image-rotate")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.WorldKernel.imageRotate"))))])]))); }
var world_dash_module; 
var world_dash_stub_dash_module; 
var bootstrap_dash_module; 
var location_dash_module; 
var tilt_dash_module; 
var gui_dash_world_dash_module; 
var sms_dash_module; 
var net_dash_module; 
var parser_dash_module; 
function extend_dash_env_slash_module_dash_binding(an_dash_env, a_dash_module_dash_binding) { return (function() { 

function loop(an_dash_env, contents) { return (((org1.plt.Kernel.empty_question_(contents))) ? (an_dash_env) : (((org1.plt.types.Logic.TRUE) ? ((loop((env_dash_extend(an_dash_env,(org1.plt.Kernel.first(contents)))),(org1.plt.Kernel.rest(contents))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
((function (toplevel_dash_expression_dash_show54) { 
 }))(org1.plt.Kernel.identity)
return (loop(an_dash_env,(module_dash_binding_dash_bindings(a_dash_module_dash_binding))));
              })(); }
var known_dash_modules; 
function require_dash_analyze(require_dash_path, pinfo) { return (function() { 

function loop(modules) { return (((org1.plt.Kernel.empty_question_(modules))) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("require-analyze")),org1.plt.Kernel.format((org1.plt.types.String.makeInstance("Moby doesn't know about module ~s yet")), [require_dash_path])))) : ((((path_equal__question_((org1.plt.Kernel._resolveModulePath(require_dash_path,org1.plt.types.Logic.FALSE)),(module_dash_binding_dash_path((org1.plt.Kernel.first(modules))))))) ? ((pinfo_dash_accumulate_dash_module((org1.plt.Kernel.first(modules)),(pinfo_dash_accumulate_dash_bindings((module_dash_binding_dash_bindings((org1.plt.Kernel.first(modules)))),pinfo))))) : (((org1.plt.types.Logic.TRUE) ? ((loop((org1.plt.Kernel.rest(modules))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
((function (toplevel_dash_expression_dash_show55) { 
 }))(org1.plt.Kernel.identity)
return (loop(known_dash_modules));
              })(); }
function compiled_dash_program(defns,toplevel_dash_exprs,pinfo) { this.defns = defns;
this.toplevel_dash_exprs = toplevel_dash_exprs;
this.pinfo = pinfo; }
                    compiled_dash_program.prototype = new org1.plt.Kernel.Struct();
compiled_dash_program.prototype.isEqual = function(other) {
              if (other instanceof compiled_dash_program) {
                return (((org1.plt.Kernel.equal_question_((compiled_dash_program_dash_pinfo(this)),(compiled_dash_program_dash_pinfo(other)))))&&((((org1.plt.Kernel.equal_question_((compiled_dash_program_dash_toplevel_dash_exprs(this)),(compiled_dash_program_dash_toplevel_dash_exprs(other)))))&&((((org1.plt.Kernel.equal_question_((compiled_dash_program_dash_defns(this)),(compiled_dash_program_dash_defns(other)))))&&(org1.plt.types.Logic.TRUE))))));
              } else {
                return false;
              }
           } 
function make_dash_compiled_dash_program(id0,id1,id2) { return new compiled_dash_program(id0,id1,id2); }
function compiled_dash_program_dash_defns(obj) { return obj.defns; }
function compiled_dash_program_dash_toplevel_dash_exprs(obj) { return obj.toplevel_dash_exprs; }
function compiled_dash_program_dash_pinfo(obj) { return obj.pinfo; }
function compiled_dash_program_question_(obj) { 
              return obj instanceof compiled_dash_program; }
function compiled_dash_program_dash_main(a_dash_compiled_dash_program) { return org1.plt.Kernel.string_dash_append([(compiled_dash_program_dash_defns(a_dash_compiled_dash_program)),(org1.plt.types.String.makeInstance("\n")),(org1.plt.types.String.makeInstance("(function() { \n")),(org1.plt.types.String.makeInstance("(")),(compiled_dash_program_dash_toplevel_dash_exprs(a_dash_compiled_dash_program)),(org1.plt.types.String.makeInstance(")")),(org1.plt.types.String.makeInstance("(org1.plt.Kernel.identity)")),(org1.plt.types.String.makeInstance("\n})();"))]); }
function program_dash__greaterthan_compiled_dash_program(program) { return (program_dash__greaterthan_compiled_dash_program_slash_pinfo(program,(get_dash_base_dash_pinfo((org1.plt.types.Symbol.makeInstance("js")))))); }
function program_dash__greaterthan_compiled_dash_program_slash_pinfo(program, input_dash_pinfo) { return (function() { 

var a_dash_pinfo; 
var toplevel_dash_env; 
var toplevel_dash_expression_dash_show; 
function loop(program, defns, tops) { return (((org1.plt.Kernel.empty_question_(program))) ? ((make_dash_compiled_dash_program(defns,org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(function (")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(toplevel_dash_expression_dash_show)))),(org1.plt.types.String.makeInstance(") { ")),tops,(org1.plt.types.String.makeInstance(" })"))]),a_dash_pinfo))) : (((org1.plt.types.Logic.TRUE) ? ((((defn_question_((org1.plt.Kernel.first(program))))) ? ((function() { 

var defn_dash_string_plus_expr_dash_string; 
((function (toplevel_dash_expression_dash_show57) { 
defn_dash_string_plus_expr_dash_string = (definition_dash__greaterthan_javascript_dash_strings((org1.plt.Kernel.first(program)),toplevel_dash_env,a_dash_pinfo)); }))(org1.plt.Kernel.identity)
return (loop((org1.plt.Kernel.rest(program)),org1.plt.Kernel.string_dash_append([defns,(org1.plt.types.String.makeInstance("\n")),(org1.plt.Kernel.first(defn_dash_string_plus_expr_dash_string))]),org1.plt.Kernel.string_dash_append([tops,(org1.plt.types.String.makeInstance("\n")),(org1.plt.Kernel.second(defn_dash_string_plus_expr_dash_string))])));
              })()) : ((((test_dash_case_question_((org1.plt.Kernel.first(program))))) ? ((loop((org1.plt.Kernel.rest(program)),org1.plt.Kernel.string_dash_append([defns,(org1.plt.types.String.makeInstance("\n")),(org1.plt.types.String.makeInstance("// Test case erased\n"))]),tops))) : ((((library_dash_require_question_((org1.plt.Kernel.first(program))))) ? ((loop((org1.plt.Kernel.rest(program)),org1.plt.Kernel.string_dash_append([defns,(org1.plt.types.String.makeInstance("\n")),(org1.plt.types.String.makeInstance("// Module require erased\n"))]),tops))) : ((((expression_question_((org1.plt.Kernel.first(program))))) ? ((loop((org1.plt.Kernel.rest(program)),defns,org1.plt.Kernel.string_dash_append([tops,(org1.plt.types.String.makeInstance("\n")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(toplevel_dash_expression_dash_show)))),(org1.plt.types.String.makeInstance("(")),(expression_dash__greaterthan_javascript_dash_string((org1.plt.Kernel.first(program)),toplevel_dash_env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(");"))])))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))))))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
((function (toplevel_dash_expression_dash_show56) { 
a_dash_pinfo = (program_dash_analyze_slash_pinfo(program,input_dash_pinfo));
toplevel_dash_env = (pinfo_dash_env(a_dash_pinfo));
toplevel_dash_expression_dash_show = (org1.plt.Kernel._gensym((org1.plt.types.Symbol.makeInstance("toplevel-expression-show"))));
 }))(org1.plt.Kernel.identity)
return (loop(program,(org1.plt.types.String.makeInstance("")),(org1.plt.types.String.makeInstance(""))));
              })(); }
function definition_dash__greaterthan_javascript_dash_strings(defn, env, a_dash_pinfo) { return (case_dash_analyze_dash_definition(defn,(function(args58) { var fun = args58[0];
var args = args58[1];
var body = args58[2];
                             return org1.plt.Kernel.list([(function_dash_definition_dash__greaterthan_java_dash_string(fun,args,body,env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(""))]); }),(function(args59) { var id = args59[0];
var body = args59[1];
                             return (variable_dash_definition_dash__greaterthan_javascript_dash_strings(id,body,env,a_dash_pinfo)); }),(function(args60) { var id = args60[0];
var fields = args60[1];
                             return org1.plt.Kernel.list([(struct_dash_definition_dash__greaterthan_javascript_dash_string(id,fields,env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(""))]); }))); }
function function_dash_definition_dash__greaterthan_java_dash_string(fun, args, body, env, a_dash_pinfo) { return (function() { 

var munged_dash_fun_dash_id; 
var munged_dash_arg_dash_ids; 
var new_dash_env; 
var env_dash_with_dash_arg_dash_bindings; 
((function (toplevel_dash_expression_dash_show61) { 
munged_dash_fun_dash_id = (identifier_dash__greaterthan_munged_dash_java_dash_identifier(fun));
munged_dash_arg_dash_ids = org1.plt.Kernel.map((function(args) {
                    return identifier_dash__greaterthan_munged_dash_java_dash_identifier(args[0]);
                 }), [args]);
new_dash_env = (env_dash_extend_dash_function(env,fun,org1.plt.types.Logic.FALSE,(org1.plt.Kernel.length(args)),org1.plt.types.Logic.FALSE,(org1.plt.Kernel.symbol_dash__greaterthan_string(munged_dash_fun_dash_id))));
env_dash_with_dash_arg_dash_bindings = org1.plt.Kernel.foldl((function(args62) { var arg_dash_id = args62[0];
var env = args62[1];
                             return (env_dash_extend(env,(make_dash_binding_colon_constant(arg_dash_id,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(arg_dash_id)))),org1.plt.types.Empty.EMPTY)))); }),new_dash_env, [args]); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("function ")),(org1.plt.Kernel.symbol_dash__greaterthan_string(munged_dash_fun_dash_id)),(org1.plt.types.String.makeInstance("(")),(string_dash_join(org1.plt.Kernel.map((function(args63) { var arg_dash_id = args63[0];
                             return (org1.plt.Kernel.symbol_dash__greaterthan_string(arg_dash_id)); }), [munged_dash_arg_dash_ids]),(org1.plt.types.String.makeInstance(", ")))),(org1.plt.types.String.makeInstance(") { return ")),(expression_dash__greaterthan_javascript_dash_string(body,env_dash_with_dash_arg_dash_bindings,a_dash_pinfo)),(org1.plt.types.String.makeInstance("; }"))]);
              })(); }
function variable_dash_definition_dash__greaterthan_javascript_dash_strings(id, body, env, a_dash_pinfo) { return (function() { 

var munged_dash_id; 
var new_dash_env; 
((function (toplevel_dash_expression_dash_show64) { 
munged_dash_id = (identifier_dash__greaterthan_munged_dash_java_dash_identifier(id));
new_dash_env = (env_dash_extend(env,(make_dash_binding_colon_constant(id,(org1.plt.Kernel.symbol_dash__greaterthan_string(munged_dash_id)),org1.plt.types.Empty.EMPTY)))); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.list([org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("var ")),(org1.plt.Kernel.symbol_dash__greaterthan_string(munged_dash_id)),(org1.plt.types.String.makeInstance("; "))]),org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string(munged_dash_id)),(org1.plt.types.String.makeInstance(" = ")),(expression_dash__greaterthan_javascript_dash_string(body,new_dash_env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(";"))])]);
              })(); }
function struct_dash_definition_dash__greaterthan_javascript_dash_string(id, fields, env, a_dash_pinfo) { return (function() { 

function field_dash__greaterthan_accessor_dash_name(struct_dash_name, field_dash_name) { return (org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string(struct_dash_name)),(org1.plt.types.String.makeInstance("-")),(org1.plt.Kernel.symbol_dash__greaterthan_string(field_dash_name))]))); }
((function (toplevel_dash_expression_dash_show65) { 
 }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.string_dash_append([org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("function ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),(org1.plt.types.String.makeInstance("(")),(string_dash_join(org1.plt.Kernel.map((function(args66) { var i = args66[0];
                             return (org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(i)))); }), [fields]),(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance(") { ")),(string_dash_join(org1.plt.Kernel.map((function(args67) { var i = args67[0];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("this.")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(i)))),(org1.plt.types.String.makeInstance(" = ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(i)))),(org1.plt.types.String.makeInstance(";"))]); }), [fields]),(org1.plt.types.String.makeInstance("\n")))),(org1.plt.types.String.makeInstance(" }\n                    ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),(org1.plt.types.String.makeInstance(".prototype = new org1.plt.Kernel.Struct();"))]),(org1.plt.types.String.makeInstance("\n")),org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),(org1.plt.types.String.makeInstance(".prototype.isEqual = function(other) {\n              if (other instanceof ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),(org1.plt.types.String.makeInstance(") {\n                return ")),(expression_dash__greaterthan_javascript_dash_string(org1.plt.Kernel.foldl((function(args68) { var a_dash_field = args68[0];
var acc = args68[1];
                             return (function() { 

var acc_dash_id; 
((function (toplevel_dash_expression_dash_show69) { 
acc_dash_id = (field_dash__greaterthan_accessor_dash_name(id,a_dash_field)); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("and")),org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("equal?")),org1.plt.Kernel.list([acc_dash_id,(org1.plt.types.Symbol.makeInstance("this"))]),org1.plt.Kernel.list([acc_dash_id,(org1.plt.types.Symbol.makeInstance("other"))])]),acc]);
              })(); }),(org1.plt.types.Symbol.makeInstance("true")), [fields]),(function() { 

var new_dash_env_dash_1; 
var new_dash_env_dash_2; 
((function (toplevel_dash_expression_dash_show70) { 
new_dash_env_dash_1 = (env_dash_extend(env,(make_dash_binding_colon_constant((org1.plt.types.Symbol.makeInstance("this")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier((org1.plt.types.Symbol.makeInstance("this")))))),org1.plt.types.Empty.EMPTY))));
new_dash_env_dash_2 = (env_dash_extend(new_dash_env_dash_1,(make_dash_binding_colon_constant((org1.plt.types.Symbol.makeInstance("other")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier((org1.plt.types.Symbol.makeInstance("other")))))),org1.plt.types.Empty.EMPTY)))); }))(org1.plt.Kernel.identity)
return new_dash_env_dash_2;
              })(),a_dash_pinfo)),(org1.plt.types.String.makeInstance(";\n              } else {\n                return false;\n              }\n           } "))]),(org1.plt.types.String.makeInstance("\n")),org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("function ")),(function() { 

var make_dash_id; 
((function (toplevel_dash_expression_dash_show71) { 
make_dash_id = (org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("make-")),(org1.plt.Kernel.symbol_dash__greaterthan_string(id))]))); }))(org1.plt.Kernel.identity)
return (org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(make_dash_id))));
              })(),(org1.plt.types.String.makeInstance("(")),(string_dash_join((org1.plt.Kernel.build_dash_list((org1.plt.Kernel.length(fields)),(function(args72) { var i = args72[0];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("id")),(org1.plt.Kernel.number_dash__greaterthan_string(i))]); }))),(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance(") { return new ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),(org1.plt.types.String.makeInstance("(")),(string_dash_join((org1.plt.Kernel.build_dash_list((org1.plt.Kernel.length(fields)),(function(args73) { var i = args73[0];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("id")),(org1.plt.Kernel.number_dash__greaterthan_string(i))]); }))),(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance("); }"))]),(org1.plt.types.String.makeInstance("\n")),(string_dash_join(org1.plt.Kernel.map((function(args74) { var a_dash_field = args74[0];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("function ")),(function() { 

var acc_dash_id; 
((function (toplevel_dash_expression_dash_show75) { 
acc_dash_id = (org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string(id)),(org1.plt.types.String.makeInstance("-")),(org1.plt.Kernel.symbol_dash__greaterthan_string(a_dash_field))]))); }))(org1.plt.Kernel.identity)
return (org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(acc_dash_id))));
              })(),(org1.plt.types.String.makeInstance("(obj) { return obj.")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(a_dash_field)))),(org1.plt.types.String.makeInstance("; }"))]); }), [fields]),(org1.plt.types.String.makeInstance("\n")))),(org1.plt.types.String.makeInstance("\n")),org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("function ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier((org1.plt.Kernel.string_dash__greaterthan_symbol(org1.plt.Kernel.string_dash_append([(org1.plt.Kernel.symbol_dash__greaterthan_string(id)),(org1.plt.types.String.makeInstance("?"))]))))))),(org1.plt.types.String.makeInstance("(obj) { \n              return obj instanceof ")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(id)))),(org1.plt.types.String.makeInstance("; }"))])]);
              })(); }
function expression_dash__greaterthan_javascript_dash_string(expr, env, a_dash_pinfo) { return (((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("local"))))) ? ((function() { 

var defns; 
var body; 
((function (toplevel_dash_expression_dash_show76) { 
defns = (org1.plt.Kernel.second(expr));
body = (org1.plt.Kernel.third(expr)); }))(org1.plt.Kernel.identity)
return (local_dash_expression_dash__greaterthan_javascript_dash_string(defns,body,env,a_dash_pinfo));
              })()) : ((((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("cond"))))) ? ((expression_dash__greaterthan_javascript_dash_string((desugar_dash_cond(expr)),env,a_dash_pinfo))) : ((((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("if"))))) ? ((function() { 

var test; 
var consequent; 
var alternative; 
((function (toplevel_dash_expression_dash_show77) { 
test = (org1.plt.Kernel.second(expr));
consequent = (org1.plt.Kernel.third(expr));
alternative = (org1.plt.Kernel.fourth(expr)); }))(org1.plt.Kernel.identity)
return (if_dash_expression_dash__greaterthan_javascript_dash_string(test,consequent,alternative,env,a_dash_pinfo));
              })()) : ((((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("and"))))) ? ((function() { 

var exprs; 
((function (toplevel_dash_expression_dash_show78) { 
exprs = (org1.plt.Kernel.rest(expr)); }))(org1.plt.Kernel.identity)
return (boolean_dash_chain_dash__greaterthan_javascript_dash_string((org1.plt.types.String.makeInstance("&&")),exprs,env,a_dash_pinfo));
              })()) : ((((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("or"))))) ? ((function() { 

var exprs; 
((function (toplevel_dash_expression_dash_show79) { 
exprs = (org1.plt.Kernel.rest(expr)); }))(org1.plt.Kernel.identity)
return (boolean_dash_chain_dash__greaterthan_javascript_dash_string((org1.plt.types.String.makeInstance("||")),exprs,env,a_dash_pinfo));
              })()) : ((((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("lambda"))))) ? ((function() { 

var args; 
var body; 
((function (toplevel_dash_expression_dash_show80) { 
args = (org1.plt.Kernel.second(expr));
body = (org1.plt.Kernel.third(expr)); }))(org1.plt.Kernel.identity)
return (lambda_dash_expression_dash__greaterthan_javascript_dash_string(args,body,env,a_dash_pinfo));
              })()) : ((((org1.plt.Kernel.number_question_(expr))) ? ((number_dash__greaterthan_javascript_dash_string(expr))) : ((((org1.plt.Kernel.string_question_(expr))) ? ((string_dash__greaterthan_javascript_dash_string(expr))) : ((((org1.plt.Kernel.char_question_(expr))) ? ((char_dash__greaterthan_javascript_dash_string(expr))) : ((((org1.plt.Kernel.symbol_question_(expr))) ? ((identifier_dash_expression_dash__greaterthan_javascript_dash_string(expr,env,a_dash_pinfo))) : ((((list_dash_begins_dash_with_question_(expr,(org1.plt.types.Symbol.makeInstance("quote"))))) ? ((quote_dash_expression_dash__greaterthan_javascript_dash_string((org1.plt.Kernel.second(expr))))) : ((((org1.plt.Kernel.pair_question_(expr))) ? ((function() { 

var operator; 
var operands; 
((function (toplevel_dash_expression_dash_show81) { 
operator = (org1.plt.Kernel.first(expr));
operands = (org1.plt.Kernel.rest(expr)); }))(org1.plt.Kernel.identity)
return (application_dash_expression_dash__greaterthan_javascript_dash_string(operator,operands,env,a_dash_pinfo));
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))))))))))))))))))); }
function if_dash_expression_dash__greaterthan_javascript_dash_string(test, consequent, alternative, env, a_dash_pinfo) { return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("((")),(expression_dash__greaterthan_javascript_dash_string(test,env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(") ? (")),(expression_dash__greaterthan_javascript_dash_string(consequent,env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(") : (")),(expression_dash__greaterthan_javascript_dash_string(alternative,env,a_dash_pinfo)),(org1.plt.types.String.makeInstance("))"))]); }
function quote_dash_expression_dash__greaterthan_javascript_dash_string(expr) { return (((org1.plt.Kernel.empty_question_(expr))) ? ((org1.plt.types.String.makeInstance("org1.plt.types.Empty.EMPTY"))) : ((((org1.plt.Kernel.pair_question_(expr))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.Kernel.list([")),(string_dash_join(org1.plt.Kernel.map((function(args) {
                    return quote_dash_expression_dash__greaterthan_javascript_dash_string(args[0]);
                 }), [expr]),(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance("]))"))])) : ((((org1.plt.Kernel.symbol_question_(expr))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.Symbol.makeInstance(\"")),(org1.plt.Kernel.symbol_dash__greaterthan_string(expr)),(org1.plt.types.String.makeInstance("\"))"))])) : ((((org1.plt.Kernel.number_question_(expr))) ? ((number_dash__greaterthan_javascript_dash_string(expr))) : ((((org1.plt.Kernel.string_question_(expr))) ? ((string_dash__greaterthan_javascript_dash_string(expr))) : ((((org1.plt.Kernel.char_question_(expr))) ? ((char_dash__greaterthan_javascript_dash_string(expr))) : (((org1.plt.types.Logic.TRUE) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("quote-expression->javascript-string")),org1.plt.Kernel.format((org1.plt.types.String.makeInstance("I don't know how to deal with ~s")), [expr])))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))))))))); }
function boolean_dash_chain_dash__greaterthan_javascript_dash_string(joiner, exprs, env, a_dash_pinfo) { return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(")),(string_dash_join(org1.plt.Kernel.map((function(args82) { var e = args82[0];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(")),(expression_dash__greaterthan_javascript_dash_string(e,env,a_dash_pinfo)),(org1.plt.types.String.makeInstance(")"))]); }), [exprs]),joiner)),(org1.plt.types.String.makeInstance(")"))]); }
function local_dash_expression_dash__greaterthan_javascript_dash_string(defns, body, env, a_dash_pinfo) { return (function() { 

var inner_dash_compiled_dash_program; 
var inner_dash_body_dash_string; 
((function (toplevel_dash_expression_dash_show83) { 
inner_dash_compiled_dash_program = (program_dash__greaterthan_compiled_dash_program_slash_pinfo(defns,(pinfo_dash_update_dash_env(a_dash_pinfo,env))));
inner_dash_body_dash_string = (expression_dash__greaterthan_javascript_dash_string(body,(pinfo_dash_env((compiled_dash_program_dash_pinfo(inner_dash_compiled_dash_program)))),(compiled_dash_program_dash_pinfo(inner_dash_compiled_dash_program)))); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(function() { \n")),(compiled_dash_program_dash_defns(inner_dash_compiled_dash_program)),(org1.plt.types.String.makeInstance("\n")),(org1.plt.types.String.makeInstance("(")),(compiled_dash_program_dash_toplevel_dash_exprs(inner_dash_compiled_dash_program)),(org1.plt.types.String.makeInstance(")(org1.plt.Kernel.identity)")),(org1.plt.types.String.makeInstance("\n")),(org1.plt.types.String.makeInstance("return ")),inner_dash_body_dash_string,(org1.plt.types.String.makeInstance(";\n              })()"))]);
              })(); }
function application_dash_expression_dash__greaterthan_javascript_dash_string(operator, operands, env, a_dash_pinfo) { return (((((org1.plt.Kernel.symbol_question_(operator)))&&((org1.plt.Kernel.not((env_dash_contains_question_(env,operator))))))) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("application-expression->java-string")),org1.plt.Kernel.format((org1.plt.types.String.makeInstance("Moby doesn't know about ~s")), [operator])))) : ((((org1.plt.Kernel.symbol_question_(operator))) ? ((function() { 

var operator_dash_binding; 
var operand_dash_strings; 
((function (toplevel_dash_expression_dash_show84) { 
operator_dash_binding = (env_dash_lookup(env,operator));
operand_dash_strings = org1.plt.Kernel.map((function(args85) { var e = args85[0];
                             return (expression_dash__greaterthan_javascript_dash_string(e,env,a_dash_pinfo)); }), [operands]); }))(org1.plt.Kernel.identity)
return (((binding_colon_constant_question_(operator_dash_binding))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("((")),(binding_colon_constant_dash_java_dash_string(operator_dash_binding)),(org1.plt.types.String.makeInstance(").apply(null, [[")),(string_dash_join(operand_dash_strings,(org1.plt.types.String.makeInstance(", ")))),(org1.plt.types.String.makeInstance("]]))"))])) : ((((binding_colon_function_question_(operator_dash_binding))) ? (((org1.plt.Kernel._lessthan_((org1.plt.Kernel.length(operands)),(binding_colon_function_dash_min_dash_arity(operator_dash_binding)), [])) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("application-expression->java-string")),org1.plt.Kernel.format((org1.plt.types.String.makeInstance("Minimal arity of ~s not met.  Operands were ~s")), [operator,operands])))) : ((((binding_colon_function_dash_var_dash_arity_question_(operator_dash_binding))) ? (((org1.plt.Kernel._greaterthan_((binding_colon_function_dash_min_dash_arity(operator_dash_binding)),(org1.plt.types.Rational.makeInstance(0, 1)), [])) ? (org1.plt.Kernel.string_dash_append([(binding_colon_function_dash_java_dash_string(operator_dash_binding)),(org1.plt.types.String.makeInstance("(")),(string_dash_join((take(operand_dash_strings,(binding_colon_function_dash_min_dash_arity(operator_dash_binding)))),(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance(", [")),(string_dash_join((list_dash_tail(operand_dash_strings,(binding_colon_function_dash_min_dash_arity(operator_dash_binding)))),(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance("])"))])) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.string_dash_append([(binding_colon_function_dash_java_dash_string(operator_dash_binding)),(org1.plt.types.String.makeInstance("([")),(string_dash_join(operand_dash_strings,(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance("])"))])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))))) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(")),(binding_colon_function_dash_java_dash_string(operator_dash_binding)),(org1.plt.types.String.makeInstance("(")),(string_dash_join(operand_dash_strings,(org1.plt.types.String.makeInstance(",")))),(org1.plt.types.String.makeInstance("))"))])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))));
              })()) : (((org1.plt.types.Logic.TRUE) ? ((function() { 

var operator_dash_string; 
var operand_dash_strings; 
((function (toplevel_dash_expression_dash_show86) { 
operator_dash_string = (expression_dash__greaterthan_javascript_dash_string(operator,env,a_dash_pinfo));
operand_dash_strings = org1.plt.Kernel.map((function(args87) { var e = args87[0];
                             return (expression_dash__greaterthan_javascript_dash_string(e,env,a_dash_pinfo)); }), [operands]); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("((")),operator_dash_string,(org1.plt.types.String.makeInstance(").apply(null, [[")),(string_dash_join(operand_dash_strings,(org1.plt.types.String.makeInstance(", ")))),(org1.plt.types.String.makeInstance("]]))"))]);
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))); }
function identifier_dash_expression_dash__greaterthan_javascript_dash_string(an_dash_id, an_dash_env, a_dash_pinfo) { return (((org1.plt.Kernel.not((env_dash_contains_question_(an_dash_env,an_dash_id))))) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("translate-toplevel-id")),org1.plt.Kernel.format((org1.plt.types.String.makeInstance("Moby doesn't know about ~s.")), [an_dash_id])))) : (((org1.plt.types.Logic.TRUE) ? ((function() { 

var binding; 
((function (toplevel_dash_expression_dash_show88) { 
binding = (env_dash_lookup(an_dash_env,an_dash_id)); }))(org1.plt.Kernel.identity)
return (((binding_colon_constant_question_(binding))) ? ((binding_colon_constant_dash_java_dash_string(binding))) : ((((binding_colon_function_question_(binding))) ? ((((binding_colon_function_dash_var_dash_arity_question_(binding))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(function(args) {\n                    return ")),(binding_colon_function_dash_java_dash_string(binding)),(org1.plt.types.String.makeInstance(".apply(null, args);\n                  })"))])) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(function(args) {\n                    return ")),(binding_colon_function_dash_java_dash_string(binding)),(org1.plt.types.String.makeInstance("(")),(string_dash_join(org1.plt.Kernel.map((function(args89) { var i = args89[0];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("args[")),(org1.plt.Kernel.number_dash__greaterthan_string(i)),(org1.plt.types.String.makeInstance("]"))]); }), [(range((binding_colon_function_dash_min_dash_arity(binding))))]),(org1.plt.types.String.makeInstance(", ")))),(org1.plt.types.String.makeInstance(");\n                 })"))])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond"))))))));
              })()) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
function mapi(f, elts) { return (function() { 

function loop(i, elts) { return (((org1.plt.Kernel.empty_question_(elts))) ? (org1.plt.types.Empty.EMPTY) : (((org1.plt.types.Logic.TRUE) ? ((org1.plt.Kernel.cons(((f).apply(null, [[(org1.plt.Kernel.first(elts)), i]])),(loop((org1.plt.Kernel.add1(i)),(org1.plt.Kernel.rest(elts))))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }
((function (toplevel_dash_expression_dash_show90) { 
 }))(org1.plt.Kernel.identity)
return (loop((org1.plt.types.Rational.makeInstance(0, 1)),elts));
              })(); }
function make_dash_args_dash_symbol(context) { return (org1.plt.Kernel._gensym((org1.plt.types.Symbol.makeInstance("args")))); }
function lambda_dash_expression_dash__greaterthan_javascript_dash_string(args, body, env, a_dash_pinfo) { return (function() { 

var munged_dash_arg_dash_ids; 
var new_dash_env; 
var args_dash_sym; 
((function (toplevel_dash_expression_dash_show91) { 
munged_dash_arg_dash_ids = org1.plt.Kernel.map((function(args) {
                    return identifier_dash__greaterthan_munged_dash_java_dash_identifier(args[0]);
                 }), [args]);
new_dash_env = org1.plt.Kernel.foldl((function(args92) { var arg_dash_id = args92[0];
var env = args92[1];
                             return (env_dash_extend(env,(make_dash_binding_colon_constant(arg_dash_id,(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(arg_dash_id)))),org1.plt.types.Empty.EMPTY)))); }),env, [args]);
args_dash_sym = (make_dash_args_dash_symbol((org1.plt.types.Symbol.makeInstance("lambda-expression->javascript-string")))); }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(function(")),(org1.plt.Kernel.symbol_dash__greaterthan_string(args_dash_sym)),(org1.plt.types.String.makeInstance(") { ")),(string_dash_join((mapi((function(args93) { var arg_dash_id = args93[0];
var i = args93[1];
                             return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("var ")),(org1.plt.Kernel.symbol_dash__greaterthan_string(arg_dash_id)),(org1.plt.types.String.makeInstance(" = ")),(org1.plt.Kernel.symbol_dash__greaterthan_string(args_dash_sym)),(org1.plt.types.String.makeInstance("[")),(org1.plt.Kernel.number_dash__greaterthan_string(i)),(org1.plt.types.String.makeInstance("];"))]); }),munged_dash_arg_dash_ids)),(org1.plt.types.String.makeInstance("\n")))),(org1.plt.types.String.makeInstance("\n                             return ")),(expression_dash__greaterthan_javascript_dash_string(body,new_dash_env,a_dash_pinfo)),(org1.plt.types.String.makeInstance("; })"))]);
              })(); }
function number_dash__greaterthan_javascript_dash_string(a_dash_num) { return (((org1.plt.Kernel.integer_question_(a_dash_num))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.Rational.makeInstance(")),(org1.plt.Kernel.number_dash__greaterthan_string((org1.plt.Kernel.inexact_dash__greaterthan_exact(a_dash_num)))),(org1.plt.types.String.makeInstance(", 1))"))])) : ((((((org1.plt.Kernel.inexact_question_(a_dash_num)))&&((org1.plt.Kernel.real_question_(a_dash_num))))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.FloatPoint.makeInstance(\"")),(org1.plt.Kernel.number_dash__greaterthan_string(a_dash_num)),(org1.plt.types.String.makeInstance("\"))"))])) : ((((org1.plt.Kernel.rational_question_(a_dash_num))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.Rational.makeInstance(")),(org1.plt.Kernel.number_dash__greaterthan_string((org1.plt.Kernel.numerator(a_dash_num)))),(org1.plt.types.String.makeInstance(", ")),(org1.plt.Kernel.number_dash__greaterthan_string((org1.plt.Kernel.denominator(a_dash_num)))),(org1.plt.types.String.makeInstance("))"))])) : ((((org1.plt.Kernel.complex_question_(a_dash_num))) ? (org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.Complex.makeInstance(")),(org1.plt.Kernel.number_dash__greaterthan_string((org1.plt.Kernel.real_dash_part(a_dash_num)))),(org1.plt.types.String.makeInstance(", ")),(org1.plt.Kernel.number_dash__greaterthan_string((org1.plt.Kernel.imag_dash_part(a_dash_num)))),(org1.plt.types.String.makeInstance("))"))])) : (((org1.plt.types.Logic.TRUE) ? ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("number->java-string")),(org1.plt.types.String.makeInstance("Don't know how to handle ~s yet")),a_dash_num))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))))); }
function char_dash__greaterthan_javascript_dash_string(a_dash_char) { return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.Char.makeInstance(String.fromCharCode(")),(org1.plt.Kernel.number_dash__greaterthan_string((org1.plt.Kernel.char_dash__greaterthan_integer(a_dash_char)))),(org1.plt.types.String.makeInstance(")))"))]); }
function string_dash__greaterthan_javascript_dash_string(a_dash_str) { return (function() { 

function escape_dash_char_dash_code(a_dash_char) { return ((org1.plt.Kernel.char_equal__question_(a_dash_char,(org1.plt.types.Char.makeInstance(String.fromCharCode(34))), [])) ? (org1.plt.Kernel.string([(org1.plt.types.Char.makeInstance(String.fromCharCode(92))),(org1.plt.types.Char.makeInstance(String.fromCharCode(34)))])) : (((org1.plt.Kernel.char_equal__question_(a_dash_char,(org1.plt.types.Char.makeInstance(String.fromCharCode(92))), [])) ? (org1.plt.Kernel.string([(org1.plt.types.Char.makeInstance(String.fromCharCode(92))),(org1.plt.types.Char.makeInstance(String.fromCharCode(92)))])) : (((org1.plt.Kernel.char_equal__question_(a_dash_char,(org1.plt.types.Char.makeInstance(String.fromCharCode(10))), [])) ? (org1.plt.Kernel.string([(org1.plt.types.Char.makeInstance(String.fromCharCode(92))),(org1.plt.types.Char.makeInstance(String.fromCharCode(110)))])) : (((org1.plt.types.Logic.TRUE) ? (org1.plt.Kernel.string([a_dash_char])) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))))))); }
((function (toplevel_dash_expression_dash_show94) { 
 }))(org1.plt.Kernel.identity)
return org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("(org1.plt.types.String.makeInstance(\"")),(string_dash_join(org1.plt.Kernel.map((function(args) {
                    return escape_dash_char_dash_code(args[0]);
                 }), [(org1.plt.Kernel.string_dash__greaterthan_list(a_dash_str))]),(org1.plt.types.String.makeInstance("")))),(org1.plt.types.String.makeInstance("\"))"))]);
              })(); }
(function() { 
((function (toplevel_dash_expression_dash_show1) { 





PERMISSION_colon_LOCATION = (make_dash_permission_colon_location());
PERMISSION_colon_SMS = (make_dash_permission_colon_sms());
PERMISSION_colon_TILT = (make_dash_permission_colon_tilt());
PERMISSION_colon_INTERNET = (make_dash_permission_colon_internet());





empty_dash_env = (make_dash_env((org1.plt.Kernel._kernelMakeImmutableHashEq(org1.plt.types.Empty.EMPTY))));


























toplevel_dash_env = (function() { 

var top_dash_env_dash_1; 
function r(env, a_dash_name, arity, vararity_question_) { return (env_dash_extend_dash_function(env,a_dash_name,(org1.plt.Kernel._resolveModulePath((org1.plt.types.Symbol.makeInstance("lang/htdp-beginner")),org1.plt.types.Logic.FALSE)),arity,vararity_question_,org1.plt.Kernel.string_dash_append([(org1.plt.types.String.makeInstance("org1.plt.Kernel.")),(org1.plt.Kernel.symbol_dash__greaterthan_string((identifier_dash__greaterthan_munged_dash_java_dash_identifier(a_dash_name))))]))); }
function r_star_(env, a_dash_name, arity, java_dash_string) { return (env_dash_extend_dash_function(env,a_dash_name,(org1.plt.Kernel._resolveModulePath((org1.plt.types.Symbol.makeInstance("lang/htdp-beginner")),org1.plt.types.Logic.FALSE)),arity,org1.plt.types.Logic.FALSE,java_dash_string)); }
var top_dash_env_dash_2; 
var top_dash_env_dash_3; 
((function (toplevel_dash_expression_dash_show12) { 
top_dash_env_dash_1 = org1.plt.Kernel.foldl((function(args13) { var id_plus_name = args13[0];
var env = args13[1];
                             return (env_dash_extend_dash_constant(env,(org1.plt.Kernel.first(id_plus_name)),(org1.plt.Kernel.second(id_plus_name)))); }),empty_dash_env, [(org1.plt.Kernel.list([(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("null")),(org1.plt.types.String.makeInstance("org1.plt.types.Empty.EMPTY"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("empty")),(org1.plt.types.String.makeInstance("org1.plt.types.Empty.EMPTY"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("true")),(org1.plt.types.String.makeInstance("org1.plt.types.Logic.TRUE"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("false")),(org1.plt.types.String.makeInstance("org1.plt.types.Logic.FALSE"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("eof")),(org1.plt.types.String.makeInstance("org1.plt.types.EofObject.EOF"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("pi")),(org1.plt.types.String.makeInstance("org1.plt.Kernel.pi"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("e")),(org1.plt.types.String.makeInstance("org1.plt.Kernel.pi"))]))]))]);


top_dash_env_dash_2 = org1.plt.Kernel.foldl((function(args14) { var name_plus_arity = args14[0];
var env = args14[1];
                             return ((org1.plt.Kernel._equal_((org1.plt.Kernel.length(name_plus_arity)),(org1.plt.types.Rational.makeInstance(2, 1)), [])) ? ((r(env,(org1.plt.Kernel.first(name_plus_arity)),(org1.plt.Kernel.second(name_plus_arity)),org1.plt.types.Logic.FALSE))) : (((org1.plt.Kernel._equal_((org1.plt.Kernel.length(name_plus_arity)),(org1.plt.types.Rational.makeInstance(3, 1)), [])) ? ((r(env,(org1.plt.Kernel.first(name_plus_arity)),(org1.plt.Kernel.second(name_plus_arity)),(((org1.plt.Kernel.symbol_equal__question_((org1.plt.Kernel.third(name_plus_arity)),(org1.plt.types.Symbol.makeInstance("true"))))) ? (org1.plt.types.Logic.TRUE) : (org1.plt.types.Logic.FALSE))))) : ((org1.plt.Kernel.error((org1.plt.types.Symbol.makeInstance("cond")),(org1.plt.types.String.makeInstance("Fell out of cond")))))))); }),top_dash_env_dash_1, [(org1.plt.Kernel.list([(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("+")),(org1.plt.types.Rational.makeInstance(0, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("-")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("*")),(org1.plt.types.Rational.makeInstance(0, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("/")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance(">=")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance(">")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("<=")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("<")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("=")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("=~")),(org1.plt.types.Rational.makeInstance(3, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("number->string")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("even?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("odd?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("positive?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("negative?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("number?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("rational?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("quotient")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("remainder")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("numerator")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("denominator")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("integer?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("real?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("abs")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("acos")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("asin")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("atan")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("random")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("max")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("min")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sqr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sqrt")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("modulo")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("add1")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sub1")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("zero?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("exp")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("expt")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sgn")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("log")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("gcd")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lcm")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("round")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("floor")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("ceiling")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sin")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cos")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("tan")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sinh")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cosh")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("angle")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("conjugate")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("magnitude")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("exact->inexact")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("inexact->exact")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("inexact?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("complex?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("real-part")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("imag-part")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("not")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("false?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("boolean?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("boolean=?")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char<?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char<=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char>?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char>=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-ci<=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-ci<?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-ci=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-ci>=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-ci>?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-downcase")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-lower-case?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-numeric?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-upcase")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-upper-case?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-whitespace?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char-alphabetic?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("char->integer")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("integer->char")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("symbol=?")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("symbol->string")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("symbol?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string>?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string>=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string<?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string<=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-ci<=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-ci<?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-ci=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-ci>=?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-ci>?")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("substring")),(org1.plt.types.Rational.makeInstance(3, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-length")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-ref")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-copy")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string->number")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string->list")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string->symbol")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string-append")),(org1.plt.types.Rational.makeInstance(0, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("list->string")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("make-string")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("string")),(org1.plt.types.Rational.makeInstance(0, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("empty?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("first")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("second")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("third")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("fourth")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("fifth")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("sixth")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("seventh")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("eighth")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("rest")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cons")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("pair?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cons?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("null?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("length")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("list")),(org1.plt.types.Rational.makeInstance(0, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("list*")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("list-ref")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("append")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("member")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("memq")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("memv")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("reverse")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("caaar")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("caadr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("caar")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cadar")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cadddr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("caddr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cadr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("car")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cdaar")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cdadr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cdar")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cddar")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cdddr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cddr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("cdr")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("make-posn")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("posn-x")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("posn-y")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("posn?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("eof-object?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("equal?")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("eq?")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("eqv?")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("equal~?")),(org1.plt.types.Rational.makeInstance(3, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("error")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("struct?")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("identity")),(org1.plt.types.Rational.makeInstance(1, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("current-seconds")),(org1.plt.types.Rational.makeInstance(0, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("andmap")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("foldl")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("build-list")),(org1.plt.types.Rational.makeInstance(2, 1))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("map")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("format")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.Symbol.makeInstance("true"))]))]))]);
top_dash_env_dash_3 = org1.plt.Kernel.foldl((function(args15) { var id_plus_arity_plus_name = args15[0];
var env = args15[1];
                             return (r_star_(env,(org1.plt.Kernel.first(id_plus_arity_plus_name)),(org1.plt.Kernel.second(id_plus_arity_plus_name)),(org1.plt.Kernel.third(id_plus_arity_plus_name)))); }),top_dash_env_dash_2, [(org1.plt.Kernel.list([(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("hash-set")),(org1.plt.types.Rational.makeInstance(3, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._kernelHashSet"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("hash-ref")),(org1.plt.types.Rational.makeInstance(3, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._kernelHashRef"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("make-immutable-hasheq")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._kernelMakeImmutableHashEq"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("hash-map")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._kernelHashMap"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("hash?")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._isHash"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("gensym")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._gensym"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("path->string")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._pathToString"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("normalize-path")),(org1.plt.types.Rational.makeInstance(1, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._normalizePath"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("resolve-module-path")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._resolveModulePath"))])),(org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("build-path")),(org1.plt.types.Rational.makeInstance(2, 1)),(org1.plt.types.String.makeInstance("org1.plt.Kernel._buildPath"))]))]))]); }))(org1.plt.Kernel.identity)
return top_dash_env_dash_3;
              })();

empty_dash_pinfo = (make_dash_pinfo(empty_dash_env,org1.plt.types.Empty.EMPTY,(org1.plt.Kernel._kernelMakeImmutableHashEq(org1.plt.types.Empty.EMPTY))));






















world_dash_config_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show44) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("world-config.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("world-config")),module_dash_path,org1.plt.Kernel.list([(bf((org1.plt.types.Symbol.makeInstance("on-tick")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onTick")))),(bf((org1.plt.types.Symbol.makeInstance("on-mouse")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onMouse")))),(bf((org1.plt.types.Symbol.makeInstance("on-key")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onKey")))),(bf((org1.plt.types.Symbol.makeInstance("on-message")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onMessage")))),(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("on-location-change")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onLocationChange")),org1.plt.Kernel.list([PERMISSION_colon_LOCATION]),org1.plt.types.Logic.FALSE)),(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("on-tilt")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onTilt")),org1.plt.Kernel.list([PERMISSION_colon_TILT]),org1.plt.types.Logic.FALSE)),(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("on-acceleration")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onAcceleration")),org1.plt.Kernel.list([PERMISSION_colon_TILT]),org1.plt.types.Logic.FALSE)),(bf((org1.plt.types.Symbol.makeInstance("on-redraw")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.onRedraw")))),(bf((org1.plt.types.Symbol.makeInstance("stop-when")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.config.Kernel.stopWhen"))))])));
              })();

world_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show45) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("world.ss")),(org1.plt.types.String.makeInstance("teachpack")),(org1.plt.types.String.makeInstance("htdp"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_world_dash_module(module_dash_path));
              })();
world_dash_stub_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show46) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("world.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_world_dash_module(module_dash_path));
              })();
bootstrap_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show47) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("bootstrap.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("world")),module_dash_path,org1.plt.Kernel.append(org1.plt.Kernel.list([(bf((org1.plt.types.Symbol.makeInstance("start")),module_dash_path,(org1.plt.types.Rational.makeInstance(10, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.world.Bootstrap.start"))))]), [(module_dash_binding_dash_bindings(world_dash_stub_dash_module))])));
              })();
location_dash_module = (function() { 

var module_dash_path; 
function bf(name, module_dash_path, arity, vararity_question_, java_dash_string) { return (make_dash_binding_colon_function(name,module_dash_path,arity,vararity_question_,java_dash_string,org1.plt.Kernel.list([PERMISSION_colon_LOCATION]),org1.plt.types.Logic.FALSE)); }
((function (toplevel_dash_expression_dash_show48) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("location.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE));
 }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("location")),module_dash_path,org1.plt.Kernel.list([(bf((org1.plt.types.Symbol.makeInstance("get-latitude")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getLatitude")))),(bf((org1.plt.types.Symbol.makeInstance("get-longitude")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getLongitude")))),(bf((org1.plt.types.Symbol.makeInstance("get-attitude")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getAttitude")))),(bf((org1.plt.types.Symbol.makeInstance("get-bearing")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getBearing")))),(bf((org1.plt.types.Symbol.makeInstance("get-speed")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getSpeed")))),(bf((org1.plt.types.Symbol.makeInstance("location-distance")),module_dash_path,(org1.plt.types.Rational.makeInstance(4, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getDistanceBetween"))))])));
              })();
tilt_dash_module = (function() { 

var module_dash_path; 
function bf(name, module_dash_path, arity, vararity_question_, java_dash_string) { return (make_dash_binding_colon_function(name,module_dash_path,arity,vararity_question_,java_dash_string,org1.plt.Kernel.list([PERMISSION_colon_TILT]),org1.plt.types.Logic.TRUE)); }
((function (toplevel_dash_expression_dash_show49) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("tilt.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE));
 }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("tilt")),module_dash_path,org1.plt.Kernel.list([(bf((org1.plt.types.Symbol.makeInstance("get-x-acceleration")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Tilt.getXAcceleration")))),(bf((org1.plt.types.Symbol.makeInstance("get-y-acceleration")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Tilt.getYAcceleration")))),(bf((org1.plt.types.Symbol.makeInstance("get-z-acceleration")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Location.getZAcceleration")))),(bf((org1.plt.types.Symbol.makeInstance("get-azimuth")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Tilt.getAzimuth")))),(bf((org1.plt.types.Symbol.makeInstance("get-pitch")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Tilt.getPitch")))),(bf((org1.plt.types.Symbol.makeInstance("get-roll")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Tilt.getRoll"))))])));
              })();
gui_dash_world_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show50) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("gui-world.ss")),(org1.plt.types.String.makeInstance("gui-world"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("gui-world")),module_dash_path,org1.plt.Kernel.append((module_dash_binding_dash_bindings(world_dash_config_dash_module)), [org1.plt.Kernel.list([(bf((org1.plt.types.Symbol.makeInstance("big-bang")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.TRUE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.bigBang")))),(bf((org1.plt.types.Symbol.makeInstance("row")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.TRUE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.row")))),(bf((org1.plt.types.Symbol.makeInstance("col")),module_dash_path,(org1.plt.types.Rational.makeInstance(0, 1)),org1.plt.types.Logic.TRUE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.col")))),(bf((org1.plt.types.Symbol.makeInstance("message")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.message")))),(bf((org1.plt.types.Symbol.makeInstance("button")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.button")))),(bf((org1.plt.types.Symbol.makeInstance("drop-down")),module_dash_path,(org1.plt.types.Rational.makeInstance(3, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.dropDown")))),(bf((org1.plt.types.Symbol.makeInstance("text-field")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.textField")))),(bf((org1.plt.types.Symbol.makeInstance("box-group")),module_dash_path,(org1.plt.types.Rational.makeInstance(2, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.boxGroup")))),(bf((org1.plt.types.Symbol.makeInstance("checkbox")),module_dash_path,(org1.plt.types.Rational.makeInstance(3, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.guiworld.GuiWorld.checkBox"))))])])));
              })();
sms_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show51) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("sms.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("sms")),module_dash_path,org1.plt.Kernel.list([(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("send-text-message")),module_dash_path,(org1.plt.types.Rational.makeInstance(3, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Sms.sendTextMessage")),org1.plt.Kernel.list([PERMISSION_colon_SMS]),org1.plt.types.Logic.FALSE))])));
              })();
net_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show52) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("net.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("net")),module_dash_path,org1.plt.Kernel.list([(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("get-url")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Net.getUrl")),org1.plt.Kernel.list([PERMISSION_colon_INTERNET]),org1.plt.types.Logic.FALSE))])));
              })();
parser_dash_module = (function() { 

var module_dash_path; 
((function (toplevel_dash_expression_dash_show53) { 
module_dash_path = (org1.plt.Kernel._resolveModulePath((org1.plt.Kernel.list([(org1.plt.types.Symbol.makeInstance("lib")),(org1.plt.types.String.makeInstance("parser.ss")),(org1.plt.types.String.makeInstance("moby")),(org1.plt.types.String.makeInstance("stub"))])),org1.plt.types.Logic.FALSE)); }))(org1.plt.Kernel.identity)
return (make_dash_module_dash_binding((org1.plt.types.Symbol.makeInstance("parser")),module_dash_path,org1.plt.Kernel.list([(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("parse-xml")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Parser.parseXml")),org1.plt.types.Empty.EMPTY,org1.plt.types.Logic.FALSE)),(make_dash_binding_colon_function((org1.plt.types.Symbol.makeInstance("split-whitespace")),module_dash_path,(org1.plt.types.Rational.makeInstance(1, 1)),org1.plt.types.Logic.FALSE,(org1.plt.types.String.makeInstance("org1.plt.lib.Parser.splitWhitespace")),org1.plt.types.Empty.EMPTY,org1.plt.types.Logic.FALSE))])));
              })();

known_dash_modules = org1.plt.Kernel.list([world_dash_module,world_dash_stub_dash_module,location_dash_module,tilt_dash_module,gui_dash_world_dash_module,sms_dash_module,net_dash_module,parser_dash_module,bootstrap_dash_module]);





















 }))(org1.plt.Kernel.identity)
})();

///
function compile(s) {
   var exprs = readSchemeExpressions(s);
   var compiledProgram =
       program_dash__greaterthan_compiled_dash_program(exprs);
   return compiled_dash_program_dash_main(compiledProgram);
}
////