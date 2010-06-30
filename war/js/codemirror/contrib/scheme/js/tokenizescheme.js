/* Tokenizer for JavaScript code */

var tokenizeScheme = (function() {
    // Advance the stream until the given character (not preceded by a
    // backslash) is encountered, or the end of the line is reached.
    function nextUntilUnescaped(source, end) {
	var escaped = false;
	var next;
	while (!source.endOfLine()) {
	    var next = source.next();
	    if (next == end && !escaped)
		return false;
	    escaped = !escaped && next == "\\";
	}
	return escaped;
    }

    // A map of JavaScript's keywords. The a/b/c keyword distinction is
    // very rough, but it gives the parser enough information to parse
    // correct code correctly (we don't care that much how we parse
    // incorrect code). The style information included in these objects
    // is used by the highlighter to pick the correct CSS style for a
    // token.
    var keywords = function(){
	function result(type, style){
	    return {type: type, style: "scheme-" + style};
	}
	// keywords that take a parenthised expression, and then a
	// statement (if)
	var keywordA = result("keyword a", "keyword");
	// keywords that take just a statement (else)
	var keywordB = result("keyword b", "keyword");
	// keywords that optionally take an expression, and form a
	// statement (return)
	var keywordC = result("keyword c", "keyword");
	var operator = result("operator", "keyword");
	var aBoolean = result("boolean", "boolean");
	var atom = result("atom", "symbol");
	return {
	    "if": keywordA, "while": keywordA, "with": keywordA,
	    "else": keywordB, "do": keywordB, "try": keywordB, "finally": keywordB,
	    "return": keywordC, "break": keywordC, "continue": keywordC, "new": keywordC, "delete": keywordC, "throw": keywordC,
	    "in": operator, "typeof": operator, "instanceof": operator,
	    "var": result("var", "keyword"), "function": result("function", "keyword"), "catch": result("catch", "keyword"),
	    "for": result("for", "keyword"), "switch": result("switch", "keyword"),
	    "case": result("case", "keyword"), "default": result("default", "keyword"),
	    "true": aBoolean, "false": aBoolean, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom
	};
    }();

    // Some helper regexps
    var isOperatorChar = /[+\-*&%=<>!?|]/;
    var isHexDigit = /[0-9A-Fa-f]/;
    var isWordChar = /[\w\-\$_]/;

    // Wrapper around schemeToken that helps maintain parser state (whether
    // we are inside of a multi-line comment and whether the next token
    // could be a regular expression).
    function schemeTokenState() {
	return function(source, setState) {
	    var type = schemeToken(source, 
				   function(c) {newInside = c;});
	    return type;
	};
    }

    // The token reader, inteded to be used by the tokenizer from
    // tokenize.js (through schemeTokenState). Advances the source stream
    // over a token, and returns an object containing the type and style
    // of that token.
    function schemeToken(source, setInside) {
	function readHexNumber(){
	    source.next(); // skip the 'x'
	    source.nextWhileMatches(isHexDigit);
	    return {type: "number", style: "scheme-number"};
	}

	function readNumber() {
	    source.nextWhileMatches(/[0-9]/);
	    if (source.equals(".")){
		source.next();
		source.nextWhileMatches(/[0-9]/);
	    }
	    if (source.equals("e") || source.equals("E")){
		source.next();
		if (source.equals("-"))
		    source.next();
		source.nextWhileMatches(/[0-9]/);
	    }
	    return {type: "number", style: "scheme-number"};
	}
	// Read a word, look it up in keywords. If not found, it is a
	// variable, otherwise it is a keyword of the type found.
	function readWord() {
	    source.nextWhileMatches(isWordChar);
	    var word = source.get();
	    var known = keywords.hasOwnProperty(word) && keywords.propertyIsEnumerable(word) && keywords[word];
	    return known ? {type: known.type, style: known.style, content: word} :
	    {type: "variable", style: "scheme-symbol", content: word};
	}
	function readOperator() {
	    source.nextWhileMatches(isOperatorChar);
	    return {type: "operator", style: "scheme-operator"};
	}
	function readString(quote) {
	    var endBackSlash = nextUntilUnescaped(source, quote);
	    setInside(endBackSlash ? quote : null);
	    return {type: "string", style: "scheme-string"};
	}
	

	// Fetch the next token. Dispatches on first character in the
	// stream, or first two characters when the first is a slash.
	var ch = source.next();
	if (ch == "\"") {
	    return readString(ch);
	}
	// with punctuation, the type of the token is the symbol itself
	else if (/[\[\]{}\(\),\:\.\']/.test(ch)) {
	    return {type: ch, style: "scheme-punctuation"};
	}
	else if (ch == "0" && (source.equals("x") || source.equals("X"))) {
	    return readHexNumber();
	}
	else if (/[0-9]/.test(ch)) {
	    return readNumber();
	}
	else if (ch == ";") {
	    nextUntilUnescaped(source, null);
	    return { type: "comment", style: "scheme-comment"};
	}
	else if (isOperatorChar.test(ch)) {
	    return readOperator();
	}
	else {
	    return readWord();
	}
    }

    // The external interface to the tokenizer.
    return function(source, startState) {
	return tokenizer(source, startState || schemeTokenState());
    };
})();

