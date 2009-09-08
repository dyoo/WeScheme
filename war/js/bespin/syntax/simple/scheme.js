/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * See the License for the specific language governing rights and
 * limitations under the License.
 *
 * The Original Code is Bespin.
 *
 * The Initial Developer of the Original Code is Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Bespin Team (bespin@mozilla.com)
 *
 * ***** END LICENSE BLOCK ***** */

// = JavaScript Syntax Highlighting Implementation =
//
// Module for syntax highlighting JavaScript.


dojo.provide("bespin.syntax.simple.scheme");

// ** {{{ bespin.syntax.simple.Scheme }}} **
//
// Tracks syntax highlighting data on a per-line basis. This is a quick-and-dirty implementation that
// supports five basic highlights: keywords, punctuation, strings, comments, and "everything else", all
// lumped into one last bucket.

bespin.syntax.SchemeConstants = {
    C_STYLE_COMMENT: "c-comment",
    LINE_COMMENT: "comment",
    STRING: "string",
    KEYWORD: "keyword",
    PUNCTUATION: "punctuation",
    OTHER: "plain",



};

dojo.declare("bespin.syntax.simple.Scheme", null, {

    keywords: ' define define-struct lambda cond if local and or ',

    punctuation: '{ } ( ) \' " ; \''.split(" "),

    toString: function() { "Scheme syntax highlighting object" },

    startsWithKeyword: function (buffer) {
	return this.keywords.indexOf(" " + buffer + " ") > -1;
    },


    // isParen: string -> boolean
    isParen : function(ch) {
	switch(ch) {
	case '(':
	case ')':
	case '[':
	case ']':
	case '{':
	case '}': return true;
	default: return false;
	}
    },


    // isOpenParen: string -> (or string false)
    isOpenParen : function(ch) {
	switch(ch) {
	case '(': return ')';
	case '[': return ']';
	case '{': return '}';
	default: return false;
	}
    },


    // isCloseParen: string -> (or string false)
    isCloseParen : function(ch) {
	switch(ch) {
	case ')': return '(';
	case ']': return '[';
	case '}': return '{';
	default: return false;
	}
    },


    _lastSeenTokenized : undefined,
    _lastTokenization: undefined,

    // tokenize: string -> (arrayof [number, number])
    tokenize : function(s) {
	if (this._lastSeenTokenized == s) { 
	    return this._lastTokenization.slice(); 
	}
	this._lastSeenTokenized = s;


	var offset = 0;
	var tokens = [];
	var PATTERNS = [['whitespace' , /^(\s+)/],
			['#;', /^[#][;]/],
			['comment' , // piped comments
			 new RegExp("^[#][|]"+
				    "(?:(?:\\|[^\\#])|[^\\|])*"+
				    "[|][#]")],
			['comment' , /(^;[^\n]*)/],
			['(' , /^(\(|\[|\{)/],
			[')' , /^(\)|\]|\})/],
			['\'' , /^(\')/],
			['`' , /^(`)/],
			[',' , /^(,)/],
			['char', /^\#\\(newline|backspace)/],
			['char', /^\#\\(.)/],
			['number' , /^([+\-]?(?:\d+\.\d+|\d+\.|\.\d+|\d+))/],
			['string' , new RegExp("^\"((?:([^\\\\\"]|(\\\\.)))*)\"")],      
			['symbol' ,/^([a-zA-Z\:\+\=\~\_\?\!\@\#\$\%\^\&\*\-\/\.\>\<][\w\:\+\=\~\_\?\!\@\#\$\%\^\&\*\-\/\.\>\<]*)/],
			// If the lexer just can't match anything, just keep marching.
			['any' ,/^(.)/]
		       ];
	while (s != '') {
	    for (var i = 0; i < PATTERNS.length; i++) {
		var patternName = PATTERNS[i][0];
		var pattern = PATTERNS[i][1]
		var result = s.match(pattern);
		if (result != null) {
		    tokens.push( { type: patternName, 
				   text: result[0],
				   offset: offset,
				   span: result[0].length } );
		    offset = offset + result[0].length;
		    s = s.substring(result[0].length);
		    break;
		}
	    }
	}


	this._lastTokenization = tokens;
	return tokens.slice();
    },



    // computeIndentationLevel: model number -> (or number undefined).
    // Figures out at what column this row should be indented.
    // If it turns out that we shouldn't indent, we return undefined.
    computeIndentationLevel: function(model, row) {
	var baseOffset = model.getOffset({row: row, col:0});

	var tokens = this.tokenize(model.getDocument());
	var stack = undefined;

	// Scan backwards across the tokens till we hit the offset.
	// If we've hit the offset, start recording tokens and paren
	// structure, until we hit the beginning of the enclosing
	// s-expression.
	for (var i = tokens.length - 1; i >= 0; i--) {
	    if (tokens[i].offset < baseOffset) {
		stack = [];
		// If the beginning of the line is actually right in
		// the middle of a token, (i.e. multi-line comment),
		// then don't indent!
		if (tokens[i].offset + tokens[i].span >= baseOffset) {
		    return undefined;		    
		}
	    }
	    if (stack != undefined && tokens[i].type == '(') {
		if (stack.length == 0) {
		    break;
		} else if (this.isCloseParen(stack[stack.length-1].text)
			   != tokens[i].text) {
		    // Wrong type of the paren should trigger
		    // an indentation back to col 0.
		    return 0;
		} else {
		    stack.pop();
		}
	    } else if (tokens[i].type == ')') {
		stack.push(tokens[i]);
	    }
	}

	// Boundary case: we didn't find an enclosing s-expression.
	if (i < 0) {
	    return 0;
	}
	// Boundary case: there's no token in front of the open-paren.
	if (i == tokens.length - 1) {
	    return (model.getModelPos(tokens[i].offset).col + 1);
	} 

	// Otherwise, i is the index into the beginning of the
	// enclosing s-expression.
	if (this.isBeginLike(tokens[i+1].text)) {
	    return model.getModelPos(tokens[i+1].offset).col;
	} else if (this.isDefineLike(tokens[i+1].text)) {
	    return model.getModelPos(lastToken.offset).col;
	} else if (this.isLambdaLike(tokens[i+1].text)) {
	    return model.getModelPos(tokens[i+1].offset).col;
	} else {
	    return model.getModelPos(tokens[i+1].offset).col;
	}
    },


    isBeginLike: function(s) {
	var keywords = "begin case-lambda compound-unit compound-unit/sig cond delay inherit match-lambda match-lambda* override private public sequence unit".split(" ");
	for (i = 0; i < keywords.length; i++) {
	    if (keywords[i] == s) { 
		return true; 
	    }
	}
	return false;
    },

    isDefineLike: function(s) {
	var keywords = ["local"];
	if (s.match("^define")) { return true; }
	for (i = 0; i < keywords.length; i++) {
	    if (keywords[i] == s) { 
		return true; 
	    }
	}
	return false;
    },


    isLambdaLike: function(s) {
	var keywords = ["lambda"]; // fill me in
	for (i = 0; i < keywords.length; i++) {
	    if (keywords[i] == s) { 
		return true; 
	    }
	}
	return false;
    },



    // findMatchingParenPos: model modelPos -> [selection, ...]
    // Return selections corresponding to the matching parens at cursor position.
    findMatchingParenPos: function(model, modelPos) {
	var posAdd1 = function(pos) {
	    return {row: pos.row, col: pos.col + 1};
	}
	var posSub1 = function(pos) {
	    return {row: pos.row, col: Math.max(0, pos.col - 1)};
	}
	var beforeOpenParen = this.isOpenParen(
	    model.getChunk({ startModelPos: modelPos,
			     endModelPos: posAdd1(modelPos)}));
	var afterCloseParen = this.isCloseParen(model.getChunk({ startModelPos: posSub1(modelPos),
								 endModelPos: modelPos }));
	// Fast path: if we're nowhere near parens, don't even try to run the lexer.
	if (! beforeOpenParen && !afterCloseParen) {
	    return [];
	}
	
	var results = [];
	var tokens = this.tokenize(model.getDocument());
	var startOffset = model.getOffset(modelPos);
	var i;


	if (beforeOpenParen) {
	    var stack = undefined;
	    for (i = 0; i < tokens.length; i++) {
		if (tokens[i].offset == startOffset) {
		    stack = [tokens[i]];
		} else if (stack && tokens[i].type == '(') {
		    stack.push(tokens[i]);
		} else if (stack && tokens[i].type == ')') {
		    if (this.isOpenParen(stack[stack.length-1].text) == tokens[i].text) {
			stack.pop();
		    } else {
			// mismatching parens: something screwed up,
			// so abort.
			break;
		    }
		}
		// If we see the closer, report it
		if (stack && stack.length == 0) {
		    results.push({ startPos: modelPos,
				   endPos: posAdd1(model.getModelPos(tokens[i].offset)) });
		    break;
		}
	    }	    
	}



	if (afterCloseParen) {
	    var stack = undefined;
	    for (i = tokens.length-1; i >= 0; i--) {
		if (tokens[i].offset == startOffset - 1) {
		    stack = [tokens[i]];
		} else if (stack && tokens[i].type == ')') {
		    stack.push(tokens[i]);
		} else if (stack && tokens[i].type == '(') {
		    if (this.isCloseParen(stack[stack.length-1].text) == tokens[i].text) {
			stack.pop();
		    } else {
			// mismatching parens: something screwed up,
			// so abort.
			break;
		    }
		}
		// If we see the closer, report it
		if (stack && stack.length == 0) {
		    results.push({ startPos: model.getModelPos(tokens[i].offset),
				   endPos: modelPos });
		    break;
		}
	    }	    
	}

	return results;
    },



    // highlight: number line-meta-info -> { meta:???, regions: {type : [data, ...]}}
    highlight: function(line, meta) {
        if (!meta) meta = {};

        var K = bespin.syntax.SchemeConstants;    // aliasing the constants for shorter reference ;-)

        var regions = {};                               // contains the individual style types as keys, with array of start/stop positions as value

        // current state, maintained as we parse through each character in the line; values at any time should be consistent
        var currentStyle = (meta.inMultilineComment) ? K.C_STYLE_COMMENT : undefined;
        var currentRegion = {}; // should always have a start property for a non-blank buffer
        var buffer = "";

        // these properties are related to the parser state above but are special cases
        var stringChar = "";    // the character used to start the current string
        var multiline = meta.inMultilineComment;

        for (var i = 0; i < line.length; i++) {
            var c = line.charAt(i);

            if (this.isWhiteSpaceOrPunctuation(c)) {
                // check if we're in a string
                if (currentStyle == K.STRING) {
                    // if this is not an unescaped end quote (either a single quote or double quote to match how the string started) then keep going
                    if ( ! (c == stringChar && !/\\$/.test(buffer))) {
                        if (buffer == "") currentRegion = { start: i };
                        buffer += c;
                        continue;
                    }
                }

                // if the buffer is full, add it to the regions
                if (buffer != "") {
                    currentRegion.stop = i;

                    if (currentStyle != K.STRING) {   // if this is a string, we're all set to add it; if not, figure out if its a keyword
                        if (this.startsWithKeyword(buffer)) {
                            // the buffer contains a keyword
                            currentStyle = K.KEYWORD;
                        } else {
                            currentStyle = K.OTHER;
                        }
                    }
                    this.addRegion(regions, currentStyle, currentRegion);
                    currentRegion = {};
                    stringChar = "";
                    buffer = "";
                    // i don't clear the current style here so I can check if it was a string below
                }

                if (this.isPunctuation(c)) {
                    // check for a line comment; this ends the parsing for the rest of the line
                    if (c == ';' && i >= 0) {

                        currentRegion = { start: i, stop: line.length };
                        currentStyle = K.LINE_COMMENT;
                        this.addRegion(regions, currentStyle, currentRegion);
                        buffer = "";
                        currentStyle = undefined;
                        currentRegion = {};
                        break;      // once we get a line comment, we're done!
                    }

                    // add an ad-hoc region for just this one punctuation character
                    this.addRegion(regions, K.PUNCTUATION, { start: i, stop: i + 1 });
                }

                // find out if the current quote is the end or the beginning of the string
                if (c == '"' && (currentStyle != K.STRING)) {
                    currentStyle = K.STRING;
                    stringChar = c;
                } else {
                    currentStyle = undefined;
                }

                continue;
            }

            if (buffer == "") currentRegion = { start: i };
            buffer += c;
        }

        // check for a trailing character inside of a string or a comment
        if (buffer != "") {
            if (!currentStyle) { 
		if (this.startsWithKeyword(buffer)) {
		    currentStyle = K.KEYWORD;
		} else {
		    currentStyle = K.OTHER; 
		}
	    }
            currentRegion.stop = line.length;
            this.addRegion(regions, currentStyle, currentRegion);
        }

        var newMeta = { inMultilineComment: multiline };

        return { regions: regions, meta: newMeta };
    },

    addRegion: function(regions, type, data) {
        if (!regions[type]) regions[type] = [];
        regions[type].push(data);
    },

    isWhiteSpaceOrPunctuation: function(ch) {
        return this.isPunctuation(ch) || this.isWhiteSpace(ch);
    },

    isPunctuation: function(ch) {
        return this.punctuation.indexOf(ch) != -1;
    },

    isWhiteSpace: function(ch) {
        return ch == " " || ch == '\n';
    }
});
