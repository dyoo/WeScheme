goog.provide('plt.wescheme.tokenizer');


/**
Warning: this code is a copy-and-paste of the code we're using in codemirror.
I wasn't able to figure out how to reuse that code without breaking abstraction
boundaries.
*/



(function() {

    // The value used to signal the end of a sequence in iterators.
    var StopIteration = {toString: function() {return "StopIteration"}};


    //////////////////////////////////////////////////////////////////////
    function normalizeString(string) {
	var tab = "";
	var indentUnit = 4;
	for (var i = 0; i < indentUnit; i++) tab += " ";

	string = string.replace(/\t/g, tab).replace(/\u00a0/g, " ").replace(/\r\n?/g, "\n");
	var pos = 0, parts = [], lines = string.split("\n");
	for (var line = 0; line < lines.length; line++) {
	    if (line != 0) parts.push("\n");
	    parts.push(lines[line]);
	}

	return {
	    next: function() {
		if (pos < parts.length) return parts[pos++];
		else throw StopIteration;
	    }
	};
    }


    //////////////////////////////////////////////////////////////////////


    // Make a stringstream stream out of an iterator that returns strings.
    // This is applied to the result of traverseDOM (see codemirror.js),
    // and the resulting stream is fed to the parser.
    var stringStream = function(source){
	// String that's currently being iterated over.
	var current = "";
	// Position in that string.
	var pos = 0;
	// Accumulator for strings that have been iterated over but not
	// get()-ed yet.
	var accum = "";
	// Make sure there are more characters ready, or throw
	// StopIteration.
	function ensureChars() {
	    while (pos == current.length) {
		accum += current;
		current = ""; // In case source.next() throws
		pos = 0;
		try {current = source.next();}
		catch (e) {
		    if (e != StopIteration) throw e;
		    else return false;
		}
	    }
	    return true;
	}

	return {
	    // peek: -> character
	    // Return the next character in the stream.
	    peek: function() {
		if (!ensureChars()) return null;
		return current.charAt(pos);
	    },
	    // next: -> character
	    // Get the next character, throw StopIteration if at end, check
	    // for unused content.
	    next: function() {
		if (!ensureChars()) {
		    if (accum.length > 0)
			throw "End of stringstream reached without emptying buffer ('" + accum + "').";
		    else
			throw StopIteration;
		}
		return current.charAt(pos++);
	    },
	    // get(): -> string
	    // Return the characters iterated over since the last call to
	    // .get().
	    get: function() {
		var temp = accum;
		accum = "";
		if (pos > 0){
		    temp += current.slice(0, pos);
		    current = current.slice(pos);
		    pos = 0;
		}
		return temp;
	    },
	    // Push a string back into the stream.
	    push: function(str) {
		current = current.slice(0, pos) + str + current.slice(pos);
	    },
	    lookAhead: function(str, consume, skipSpaces, caseInsensitive) {
		function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}
		str = cased(str);
		var found = false;

		var _accum = accum, _pos = pos;
		if (skipSpaces) this.nextWhileMatches(/[\s\u00a0]/);

		while (true) {
		    var end = pos + str.length, left = current.length - pos;
		    if (end <= current.length) {
			found = str == cased(current.slice(pos, end));
			pos = end;
			break;
		    }
		    else if (str.slice(0, left) == cased(current.slice(pos))) {
			accum += current; current = "";
			try {current = source.next();}
			catch (e) {break;}
			pos = 0;
			str = str.slice(left);
		    }
		    else {
			break;
		    }
		}

		if (!(found && consume)) {
		    current = accum.slice(_accum.length) + current;
		    pos = _pos;
		    accum = _accum;
		}

		return found;
	    },

	    // Utils built on top of the above
	    // more: -> boolean
	    // Produce true if the stream isn't empty.
	    more: function() {
		return this.peek() !== null;
	    },
	    applies: function(test) {
		var next = this.peek();
		return (next !== null && test(next));
	    },
	    nextWhile: function(test) {
		var next;
		while ((next = this.peek()) !== null && test(next))
		    this.next();
	    },
	    matches: function(re) {
		var next = this.peek();
		return (next !== null && re.test(next));
	    },
	    nextWhileMatches: function(re) {
		var next;
		while ((next = this.peek()) !== null && re.test(next))
		    this.next();
	    },
	    equals: function(ch) {
		return ch === this.peek();
	    },
	    endOfLine: function() {
		var next = this.peek();
		return next == null || next == "\n";
	    }
	};
    };



    //////////////////////////////////////////////////////////////////////


    var tokenizeScheme = (function() {
	var isWhiteSpace = function(ch) {
	    // The messy regexp is because IE's regexp matcher is of the
	    // opinion that non-breaking spaces are no whitespace.
	    return ch != "\n" && /^[\s\u00a0]*$/.test(ch);
	};


	// scanUntilUnescaped: string-stream char -> boolean
	// Advances the stream until the given character (not preceded by a
	// backslash) is encountered.
	// Returns true if we hit end of line without closing.
	// Returns false otherwise.
	var scanUntilUnescaped = function(source, end) {
	    var escaped = false;
	    while (true) {
		if (source.endOfLine()) {
		    return true;
		}
		var next = source.next();
		if (next == end && !escaped)
		    return false;
		escaped = !escaped && next == "\\";
	    }
	}
	

	// Advance the stream until endline.
	var scanUntilEndline = function(source, end) {
	    while (!source.endOfLine()) {
		source.next();
	    }
	}

	
	// Some helper regexps
	var isHexDigit = /[0-9A-Fa-f]/;
	

	var whitespaceChar = new RegExp("[\\s\\u00a0]");
	
	var isDelimiterChar = 
	    new RegExp("[\\s\\\(\\\)\\\[\\\]\\\{\\\}\\\"\\\,\\\'\\\`\\\;]");

	var isNotDelimiterChar = 
	    new RegExp("[^\\s\\\(\\\)\\\[\\\]\\\{\\\}\\\"\\\,\\\'\\\`\\\;]");


	var numberHeader = ("(?:(?:\\d+\\/\\d+)|"+
			    (  "(?:(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+)(?:[eE][+\\-]?\\d+)?)|")+
			    (  "(?:\\d+(?:[eE][+\\-]?\\d+)?))"));
	var numberPatterns = [
	    // complex numbers
	    new RegExp("^((?:(?:\\#[ei])?[+\\-]?" + numberHeader +")?"
		       + "(?:[+\\-]" + numberHeader + ")i$)"),
		/^((?:\#[ei])?[+-]inf.0)$/,
		/^((?:\#[ei])?[+-]nan.0)$/,
	    new RegExp("^((?:\\#[ei])?[+\\-]?" + numberHeader + "$)"),
	    new RegExp("^0[xX][0-9A-Fa-f]+$")];
	

	// looksLikeNumber: string -> boolean
	// Returns true if string s looks like a number.
	var looksLikeNumber = function(s) {
	    for (var i = 0; i < numberPatterns.length; i++) {
		if (numberPatterns[i].test(s)) {
		    return true;
		}
	    }
	    return false;
	};



	var UNCLOSED_STRING = function(source, setState) {
	    var readNewline = function() {
		var content = source.get();
		return { type:'whitespace', style:'whitespace', content: content };
	    };

	    var ch = source.peek();
	    if (ch === '\n') {
		source.next();
		return readNewline();
	    } else {
		var isUnclosedString = scanUntilUnescaped(source, '"');
		if (isUnclosedString) {
		    setState(UNCLOSED_STRING);
		} else {
		    setState(START);
		}
		var content = source.get();
		return {type: "string", style: "scheme-string", content: content,
			isUnclosed: isUnclosedString};
	    }
	};



	var START = function(source, setState) {
	    var readHexNumber = function(){
		source.next(); // skip the 'x'
		source.nextWhileMatches(isHexDigit);
		return {type: "number", style: "scheme-number"};
	    };


	    var readNumber = function() {
		scanSimpleNumber();
		if (source.equals("-") || source.equals("+")) {
		    source.next();
		}
		scanSimpleNumber();
		if (source.equals("i")) {
		    source.next();
		}
		return {type: "number", style: "scheme-number"};
	    };


	    // Read a word, look it up in keywords. If not found, it is a
	    // variable, otherwise it is a keyword of the type found.
	    var readWordOrNumber = function() {
		source.nextWhileMatches(isNotDelimiterChar);
		var word = source.get();
		if (looksLikeNumber(word)) {
		    return {type: "number", style: "scheme-number", content: word};
		} else {
		    return {type: "variable", style: "scheme-symbol", content: word};
		}
	    };


	    var readString = function(quote) {
		var isUnclosedString = scanUntilUnescaped(source, quote);
		if (isUnclosedString) {
		    setState(UNCLOSED_STRING);
		}
		var word = source.get();
		return {type: "string", style: "scheme-string", content: word,
			isUnclosed: isUnclosedString};
	    };


	    var readPound = function() {
		var text;
		// FIXME: handle special things here
		if (source.equals(";")) {
		    source.next();
		    text = source.get();
		    return {type: text, 
			    style:"scheme-symbol",
			    content: text};
		} else {
		    text = source.get();

		    return {type : "symbol",
			    style: "scheme-symbol",
			    content: text};
		}

	    };
	    
	    var readLineComment = function() {
		scanUntilEndline(source);
		var text = source.get();
		return { type: "comment", style: "scheme-comment", content: text};	
	    };


	    var readWhitespace = function() {
		source.nextWhile(isWhiteSpace);
		var content = source.get();
		return { type: 'whitespace', style:'whitespace', content: content };
	    };

	    var readNewline = function() {
		var content = source.get();
		return { type:'whitespace', style:'whitespace', content: content };
	    };


	    // Fetch the next token. Dispatches on first character in the
	    // stream, or first two characters when the first is a slash.
	    var ch = source.next();
	    if (ch === '\n') {
		return readNewline();
	    } else if (whitespaceChar.test(ch)) {
		return readWhitespace();
	    } else if (ch === "#") {
		return readPound();
	    } else if (ch ===';') {
		return readLineComment();
	    } else if (ch === "\"") {
		return readString(ch);
	    } else if (isDelimiterChar.test(ch)) {
		return {type: ch, style: "scheme-punctuation"};
	    } else {
		return readWordOrNumber();
	    }
	}



	//////////////////////////////////////////////////////////////////////





	var makeTokenizer = function(source, state) {
	    // Newlines are always a separate token.

	    var tokenizer = {
		state: state,

		take: function(type) {
 		    if (typeof(type) == "string")
 			type = {style: type, type: type};

 		    type.content = (type.content || "") + source.get();
		    type.value = type.content;
		    return type;
		},

		next: function () {
		    if (!source.more()) throw StopIteration;

		    var type;
		    while (!type) {
			type = tokenizer.state(source, function(s) {
			    tokenizer.state = s;
			});
		    }
		    var result = this.take(type);
		    return result;		    
		}
	    };
	    return tokenizer;
	};




	// The external interface to the tokenizer.
	return function(source, startState) {
	    return makeTokenizer(source, startState || START);
	};

    })();



    plt.wescheme.tokenizer.tokenize = function(text) {
	var tokenizer = tokenizeScheme(stringStream(normalizeString(text)));
	var tokens = [];
	try {
	    while (true) {
		var nextToken = tokenizer.next();
		tokens.push(nextToken);
	    }
	} catch (e) {
	    if (e != StopIteration) throw e;
	}
	return tokens;
    };


    // hasCompleteExpression: string -> boolean
    plt.wescheme.tokenizer.hasCompleteExpression = function(text) {
        var tokens = plt.wescheme.tokenizer.tokenize(text);
        var waitingOpenParens = [], i;
        var openParens = { '(' : true,
                           '[' : true,
                           '{' : true };
        var closeParens = { ')' : '(',
                            ']' : '[',
                            '}' : '{' };
        for (i = 0; i < tokens.length; i++) {
            if (openParens[tokens[i].type]) {
                waitingOpenParens.push(tokens[i].type);
            } else if (closeParens[tokens[i].type]) {
                if (waitingOpenParens.length === 0) { 
                    return false; 
                }
                if (waitingOpenParens.pop() !== closeParens[tokens[i].type]) {
                    return false;
                }
            }
        }
        return waitingOpenParens.length === 0;
    };







})();