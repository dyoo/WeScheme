var beginLike =  ["begin", "case-lambda", "compound-unit", "compound-unit/sig", "cond", "delay", "inherit", "match-lambda", "match-lambda*", "override", "private", "public", "sequence", "unit"];
var defineLike = ["local", "define"];
var lambdaLike = ["call-with-input-file", "call-with-input-file*", "call-with-output-file", "case", "cases", "catch", "class", "class*", "class*/names", "class-asi", "class-asi*", "class100", "class100*", "class100*/names", "class100-asi", "class100-asi*", "define-record", "define-some", "do", "fluid-let", "fluid-let-syntax", "for", "for*", "for*/and", "for*/first", "for*/fold", "for*/hash", "for*/hasheq", "for*/last", "for*/list", "for*/lists", "for*/or", "for/and", "for/first", "for/fold", "for/hash", "for/hasheq", "for/last", "for/list", "for/lists", "for/or", "instantiate", "interface", "kernel-syntax-case", "lambda", "lambda/kw", "let", "let*", "let*-values", "let-enumerate", "let-macro", "let-signature", "let-struct", "let-syntax", "let-values", "let/cc", "let/ec", "letcc", "letrec", "letrec-syntax", "letrec-syntax+values", "letrec-values", "make-object", "match", "match-let", "match-let*", "match-letrec", "mixin", "module", "opt-lambda", "parameterize", "quasisyntax/loc", "rec", "recur", "send*", "shared", "super-instantiate", "syntax-case", "syntax-case*", "syntax-id-rules", "syntax-rules", "syntax/loc", "unit/lang", "unit/sig", "unless", "when", "with-continuation-mark", "with-handlers", "with-input-from-file", "with-input-from-port", "with-method", "with-output-to-file", "with-output-to-port", "with-syntax"];
  
function getType(jqo){

  if( jqo.hasClass(".sexpr") ){
  	return "lambda-like";
  }
  
  if( jqo.hasClass(".string") ){
    return "string-node";
  }

 
  if( testAgainst(beginLike)(jqo) ){
    return "begin-like";
  }
  
  if( testAgainst(defineLike)(jqo) ){
    return "define-like";
  }
  
  if( testAgainst(lambdaLike)(jqo) ){
    return "lambda-like";
  }
  
  return "function-node";

}

function testAgainst(arr){

  return function(e){
    var ii;
    for( ii = 0; ii < arr.length; ++ii ){    
      if( e.text() == arr[ii] ){
        return true;
      }
    }
    return false;
  }

}
