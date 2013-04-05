
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/wescheme/lang/semantics.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _409=function(M){if(--M.cbt<0){throw _409;}
M.e.push([[M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix,M.modules["whalesong/lang/check-expect/check-expect.rkt"].getPrefixOffset("run-tests"),{moduleName:"whalesong/lang/check-expect/check-expect.rkt",name:"run-tests"}],[M.modules["collects/racket/private/modbeg.rkt"].prefix,M.modules["collects/racket/private/modbeg.rkt"].getPrefixOffset("print-values"),{moduleName:"collects/racket/private/modbeg.rkt",name:"print-values"}]]);M.e[M.e.length-1].names=["run-tests","print-values"];
M.modules["whalesong/wescheme/lang/semantics.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_411,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1][1][0][M.e[M.e.length-1][1][1]];
M.p=M.e[M.e.length-1][0][0][M.e[M.e.length-1][0][1]];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_415,M.p));
return((M.p).label)(M);};

var _415=function(M){if(--M.cbt<0){throw _415;}
M.a=1;
return(_416)(M);};

var _410=function(M){if(--M.cbt<0){throw _410;}
M.e.length-=(M.a-1);
return(_411)(M);};

var _406=function(M){if(--M.cbt<0){throw _406;}
if((M.installedModules["whalesong/lang/whalesong.rkt"]!==void(0)&&M.modules["whalesong/lang/whalesong.rkt"]!==undefined)!==false){return(_407)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/whalesong.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_407);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_407)(M);}};

var _404=function(M){if(M.modules["whalesong/world.rkt"].isInvoked!==false){return(_406)(M);}else{M.c.push(new RT.CallFrame(_406,M.p));
return(M.modules["whalesong/world.rkt"].label)(M);}};

var _413=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
return((M.p).label)(M);};

var _416=function(M){if(--M.cbt<0){throw _416;}
if(M.a===0){return(_413)(M);}else{M.e.push(M.v);
return(_413)(M);}};

var _401=function(M){if(M.modules["whalesong/image.rkt"].isInvoked!==false){return(_403)(M);}else{M.c.push(new RT.CallFrame(_403,M.p));
return(M.modules["whalesong/image.rkt"].label)(M);}};

var _396=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _407=function(M){if(M.modules["whalesong/lang/whalesong.rkt"].isInvoked!==false){return(_409)(M);}else{M.c.push(new RT.CallFrame(_409,M.p));
return(M.modules["whalesong/lang/whalesong.rkt"].label)(M);}};

var _398=function(M){if(M.modules["whalesong/lang/whalesong.rkt"].isInvoked!==false){return(_400)(M);}else{M.c.push(new RT.CallFrame(_400,M.p));
return(M.modules["whalesong/lang/whalesong.rkt"].label)(M);}};

var _393=function(M){M.c.push(new RT.PromptFrame(_395,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/wescheme/lang/semantics.rkt"]=function(){return new RT.ModuleRecord("semantics",_397);}
return(_396)(M);};

var _419=function(M){return(_393)(M);};

var _408=function(M){if(--M.cbt<0){throw _408;}
M.e.length-=(M.a-1);
return(_409)(M);};

var _405=function(M){if(--M.cbt<0){throw _405;}
M.e.length-=(M.a-1);
return(_406)(M);};

var _403=function(M){if(--M.cbt<0){throw _403;}
if((M.installedModules["whalesong/world.rkt"]!==void(0)&&M.modules["whalesong/world.rkt"]!==undefined)!==false){return(_404)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_404);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_404)(M);}};

var _399=function(M){if(--M.cbt<0){throw _399;}
M.e.length-=(M.a-1);
return(_400)(M);};

var _397=function(M){M.modules["whalesong/wescheme/lang/semantics.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/whalesong.rkt"]!==void(0)&&M.modules["whalesong/lang/whalesong.rkt"]!==undefined)!==false){return(_398)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/whalesong.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_398);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_398)(M);}};

var _402=function(M){if(--M.cbt<0){throw _402;}
M.e.length-=(M.a-1);
return(_403)(M);};

var _400=function(M){if(--M.cbt<0){throw _400;}
if((M.installedModules["whalesong/image.rkt"]!==void(0)&&M.modules["whalesong/image.rkt"]!==undefined)!==false){return(_401)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_401);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_401)(M);}};

var _394=function(M){if(--M.cbt<0){throw _394;}
M.e.length-=(M.a-1);
return(_395)(M);};

var _411=function(M){if(--M.cbt<0){throw _411;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("big-bang", M.modules["whalesong/world/main.rkt"].getExports().get("big-bang1.1"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("boolean=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("boolean=?"));ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("false", M.modules["whalesong/lang/bool.rkt"].getExports().get("false"));ns.set("false?", M.modules["whalesong/lang/bool.rkt"].getExports().get("false?"));ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("key=?", M.modules["whalesong/world/main.rkt"].getExports().get("key=?5.9"));ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("make-posn"));ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("modulo", M.primitives["modulo"]);ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("on-key", M.modules["whalesong/world/main.rkt"].getExports().get("on-key3.5"));ns.set("on-mouse", M.modules["whalesong/world/main.rkt"].getExports().get("on-mouse4.7"));ns.set("on-tick", M.modules["whalesong/world/main.rkt"].getExports().get("on-tick2.3"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("posn-x", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-x"));ns.set("posn-y", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-y"));ns.set("posn?", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn?"));ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("round", M.primitives["round"]);ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("set-posn-x!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-x!"));ns.set("set-posn-y!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-y!"));ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("stop-when", M.modules["whalesong/world/main.rkt"].getExports().get("stop-when7.13"));ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct:posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("struct:posn"));ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("symbol=?"));ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("to-draw", M.modules["whalesong/world/main.rkt"].getExports().get("to-draw6.11"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("true", M.modules["whalesong/lang/bool.rkt"].getExports().get("true"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/wescheme/lang/semantics.rkt"],M.modules["whalesong/wescheme/lang/semantics.rkt"].getExports(),M.modules["whalesong/wescheme/lang/semantics.rkt"].getExternalExports(),M.modules["whalesong/wescheme/lang/semantics.rkt"].prefix));
return(M.p)(M);};

var _395=function(M){if(--M.cbt<0){throw _395;}
};

_400.mvr=_399;
_403.mvr=_402;
_406.mvr=_405;
_409.mvr=_408;
_415.mvr=_416;
_411.mvr=_410;
_395.mvr=_394;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_419(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/wescheme/lang/semantics.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/wescheme/lang/semantics.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/world.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _422=function(M){if(--M.cbt<0){throw _422;}
};

var _427=function(M){if(--M.cbt<0){throw _427;}
if((M.installedModules["whalesong/world/main.rkt"]!==void(0)&&M.modules["whalesong/world/main.rkt"]!==undefined)!==false){return(_428)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/world/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_428);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_428)(M);}};

var _421=function(M){if(--M.cbt<0){throw _421;}
M.e.length-=(M.a-1);
return(_422)(M);};

var _431=function(M){return(_420)(M);};

var _426=function(M){if(--M.cbt<0){throw _426;}
M.e.length-=(M.a-1);
return(_427)(M);};

var _424=function(M){M.modules["whalesong/world.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_425)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_425);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_425)(M);}};

var _429=function(M){if(--M.cbt<0){throw _429;}
M.e.length-=(M.a-1);
return(_430)(M);};

var _430=function(M){if(--M.cbt<0){throw _430;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/world.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("big-bang", M.modules["whalesong/world/main.rkt"].getExports().get("big-bang1.1"));ns.set("key=?", M.modules["whalesong/world/main.rkt"].getExports().get("key=?5.9"));ns.set("on-key", M.modules["whalesong/world/main.rkt"].getExports().get("on-key3.5"));ns.set("on-mouse", M.modules["whalesong/world/main.rkt"].getExports().get("on-mouse4.7"));ns.set("on-tick", M.modules["whalesong/world/main.rkt"].getExports().get("on-tick2.3"));ns.set("stop-when", M.modules["whalesong/world/main.rkt"].getExports().get("stop-when7.13"));ns.set("to-draw", M.modules["whalesong/world/main.rkt"].getExports().get("to-draw6.11"));}(M.modules["whalesong/world.rkt"],M.modules["whalesong/world.rkt"].getExports(),M.modules["whalesong/world.rkt"].getExternalExports(),M.modules["whalesong/world.rkt"].prefix));
return(M.p)(M);};

var _423=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _420=function(M){M.c.push(new RT.PromptFrame(_422,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/world.rkt"]=function(){return new RT.ModuleRecord("world",_424);}
return(_423)(M);};

var _428=function(M){if(M.modules["whalesong/world/main.rkt"].isInvoked!==false){return(_430)(M);}else{M.c.push(new RT.CallFrame(_430,M.p));
return(M.modules["whalesong/world/main.rkt"].label)(M);}};

var _425=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_427)(M);}else{M.c.push(new RT.CallFrame(_427,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

_427.mvr=_426;
_430.mvr=_429;
_422.mvr=_421;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_431(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/world.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/world.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/dyoo/work/whalesong/whalesong/world/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/world/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/world/main.rkt",
        function(M) {
            
        var afterName3028 = function() { 
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/world/main.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0),void(0),void(0),void(0),void(0),void(0)];modrec.prefix.names=["big-bang1.1","key=?5.9","on-key3.5","on-mouse4.7","on-tick2.3","stop-when7.13","to-draw6.11"];modrec.prefix.internalNames=["big-bang","key=?","on-key","on-mouse","on-tick","stop-when","to-draw"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){/*global $,plt*/
var rawJsworld = {};

// Stuff here is copy-and-pasted from Chris King's JSWorld.
//
// dyoo: as I remember, most of this code had been revised from
// Chris's original code by Ethan Cechetti, who rewrote it to
// continuation passing style during summer 2010.

(function() {

    'use strict';

    /* Type signature notation
     * CPS(a b ... -> c) is used to denote
     *    a b ... (c -> void) -> void
     */

    var Jsworld = rawJsworld;

    var currentFocusedNode = false;

    var doNothing = function() {};





    // forEachK: CPS( array CPS(array -> void) (error -> void) -> void )
    // Iterates through an array and applies f to each element using CPS
    // If an error is thrown, it catches the error and calls f_error on it
    var forEachK = function(a, f, f_error, k) {
        var forEachHelp = function(i) {
            if( i >= a.length ) {
                if (k) {
                    return k();
                } else {
                    return;
                }
            }
            try {
                return f(a[i], function() { return forEachHelp(i+1); });
            } catch (e) {
                return Jsworld.shutdown({errorShutdown: e});
            }
        };
        return forEachHelp(0);
    };







    //
    // WORLD STUFFS
    //

    function InitialWorld() {}

    var world = new InitialWorld();
    var worldListeners = [];
    var eventDetachers = [];
    var runningBigBangs = [];

    var changingWorld = false;



    function clear_running_state() {
        var i;
        world = new InitialWorld();
        worldListeners = [];

        for (i = 0; i < eventDetachers.length; i++) {
                eventDetachers[i]();
        }
        eventDetachers = [];
        changingWorld = false;
    }



    // Close all world computations.
    Jsworld.shutdown = function(options) {
        while(runningBigBangs.length > 0) {
            var currentRecord = runningBigBangs.pop();
            if (currentRecord) { currentRecord.pause(); }
            if (options.cleanShutdown) {
                currentRecord.success(world);
            }
            if (options.errorShutdown) {
                currentRecord.fail(options.errorShutdown);
            }
        }
        clear_running_state();
    };



    function add_world_listener(listener) {
        worldListeners.push(listener);
    }


    function remove_world_listener(listener) {
        var i, index = -1;
        for (i = 0; i < worldListeners.length; i++) {
            if (worldListeners[i] === listener) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            worldListeners.splice(index, 1);
        }
    }


    // If we're in the middle of a change_world, delay.
    var DELAY_BEFORE_RETRY = 10;


    // change_world: CPS( CPS(world -> world) -> void )
    // Adjust the world, and notify all listeners.
    var change_world = function(updater, k) {

        // Check to see if we're in the middle of changing
        // the world already.  If so, put on the queue
        // and exit quickly.
        if (changingWorld) {
            setTimeout(
                function() {
                    change_world(updater, k);
                },
                DELAY_BEFORE_RETRY);
            return;
        }


        changingWorld = true;
        var originalWorld = world;

        var changeWorldHelp;
        changeWorldHelp = function() {
            forEachK(worldListeners,
                     function(listener, k2) {
                         listener(world, originalWorld, k2);
                     },
                     function(e) {
                         changingWorld = false;
                         world = originalWorld;
                         throw e; 
                     },
                     function() {
                         changingWorld = false;
                         k();
                     });
        };

        try {
            updater(world, function(newWorld) {
                world = newWorld;
                changeWorldHelp();
            });
        } catch(e) {
            changingWorld = false;
            world = originalWorld;
            return Jsworld.shutdown({errorShutdown: e});
        }
    };
    Jsworld.change_world = change_world;



    var map = function(a1, f) {
        var b = new Array(a1.length), i;
        for (i = 0; i < a1.length; i++) {
                b[i] = f(a1[i]);
        }
        return b;
    };

    var concat_map = function(a, f) {
        var b = [], i;
        for (i = 0; i < a.length; i++) {
                b = b.concat(f(a[i]));
        }
        return b;
    };


    function member(a, x) {
        var i;
        for (i = 0; i < a.length; i++) {
            if (a[i] === x) {
                return true;
            }
        }
        return false;
    }


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
        var result = [domNode], c;
        for (c = domNode.firstChild; c !== null; c = c.nextSibling) {
            result.push(node_to_tree(c));
        }
        return result;
    }
    Jsworld.node_to_tree = node_to_tree;



    // nodes(tree(N)) = nodes(N)
    function nodes(tree) {
        var ret, i;
        if (tree.node.jsworldOpaque === true) {
            return [tree.node];
        }

        ret = [tree.node];
        for (i = 0; i < tree.children.length; i++) {
            ret = ret.concat(nodes(tree.children[i]));
        }
        return ret;
    }


    // relations(tree(N)) = relations(N)
    function relations(tree) {
        var ret = [];
        var i;
        for (i = 0; i < tree.children.length; i++) {
            ret.push({ relation: 'parent',
                       parent: tree.node,
                       child: tree.children[i].node });
        }

        for (i = 0; i < tree.children.length - 1; i++) {
            ret.push({ relation: 'neighbor',
                       left: tree.children[i].node,
                       right: tree.children[i + 1].node });
        }

        if (! tree.node.jsworldOpaque) {
            for (i = 0; i < tree.children.length; i++) {
                ret = ret.concat(relations(tree.children[i]));
            }
        }

        return ret;
    }





    // Preorder traversal.
    var preorder = function(node, f) {
        f(node, function() {
            var child = node.firstChild;
            var nextSibling;
            while (child) {
                nextSibling = child.nextSibling;
                preorder(child, f);
                child = nextSibling;
            }
        });
    };


    // nodeEq: node node -> boolean
    // Returns true if the two nodes should be the same.
    var nodeEq = function(node1, node2) {
        return (node1 && node2 && node1 === node2);
    };


    // isMemq: X (arrayof X) -> boolean
    // Produces true if any of the elements of L are nodeEq to x.
    var isMemq = function(x, L) {
        var i;
        for (i = 0 ; i < L.length; i++) {
            if (nodeEq(x, L[i])) {
                return true;
            }
        }
        return false;
    };



    // If any node cares about the world, send it in.
    function refresh_node_values(nodes) {
        var i;
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].onWorldChange) {
                nodes[i].onWorldChange(world);
            }
        }
    }



    // update_dom(nodes(Node), relations(Node)) = void
    function update_dom(toplevelNode, nodes, relations) {
        var i, parent, child;
        // TODO: rewrite this to move stuff all in one go... possible? necessary?

        // move all children to their proper parents
        for (i = 0; i < relations.length; i++) {
            if (relations[i].relation === 'parent') {
                parent = relations[i].parent;
                child = relations[i].child;
                if (child.parentNode !== parent) {
                    parent.appendChild(child);
                }
            }
        }

        // arrange siblings in proper order
        // truly terrible... BUBBLE SORT
        var unsorted = true;
        while (unsorted) {
            unsorted = false;
            for (i = 0; i < relations.length; i++) {
                if (relations[i].relation === 'neighbor') {
                    var left = relations[i].left, right = relations[i].right;

                    if (! nodeEq(left.nextSibling, right)) {
                        left.parentNode.insertBefore(left, right);
                        unsorted = true;
                    }
                }
            }
        }

        // Finally, remove nodes that shouldn't be attached anymore.
        var nodesPlus = nodes.concat([toplevelNode]);
        preorder(toplevelNode, function(aNode, continueTraversalDown) {
            if (aNode.jsworldOpaque) {
                if (! isMemq(aNode, nodesPlus)) {
                    aNode.parentNode.removeChild(aNode);
                }
            } else {
                if (! isMemq(aNode, nodesPlus)) {
                    aNode.parentNode.removeChild(aNode);
                } else {
                    continueTraversalDown();
                }
            }
        });

        refresh_node_values(nodes);
    }



    // camelCase: string -> string
    function camelCase(name) {
        return name.replace(/\-(.)/g, function(m, l){return l.toUpperCase();});
    }


    function set_css_attribs(node, attribs) {
        var j;
        for (j = 0; j < attribs.length; j++){
            node.style[camelCase(attribs[j].attrib)] = attribs[j].values.join(" ");
        }
    }


    // isMatchingCssSelector: node css -> boolean
    // Returns true if the CSS selector matches.
    function isMatchingCssSelector(node, css) {
        if (css.id.match(/^\./)) {
            // Check to see if we match the class
            return (node.className && member(node.className.split(/\s+/),
                                             css.id.substring(1)));
        } else {
            return (node.id && node.id === css.id);
        }
    }


    var clearCss = function(node) {
        // FIXME: we should not be clearing the css
//      if ('style' in node)
//          node.style.cssText = "";
    };



    function update_css(nodes, css) {
        // clear CSS
        var i, j;
        for (i = 0; i < nodes.length; i++) {
            if ( !nodes[i].jsworldOpaque ) {
                    clearCss(nodes[i]);
            }
        }

        // set CSS
        for (i = 0; i < css.length; i++) {
            if (css[i].id) {
                for (j = 0; j < nodes.length; j++) {
                    if (isMatchingCssSelector(nodes[j], css[i])) {
                        set_css_attribs(nodes[j], css[i].attribs);
                    }
                }
            } else {
                set_css_attribs(css[i].node, css[i].attribs);
            }
        }
    }



    var sexp2tree;
    var sexp2css;
    var maintainingSelection;



    function do_redraw(world, oldWorld, toplevelNode, redraw_func, redraw_css_func, k) {
        if (oldWorld instanceof InitialWorld) {
            // Simple path
            redraw_func(world,
                function(drawn) {
                        var t = sexp2tree(drawn);
                        var ns = nodes(t);
                        // HACK: css before dom, due to excanvas hack.
                        redraw_css_func(world,
                                function(css) {
                                        update_css(ns, sexp2css(css));
                                        update_dom(toplevelNode, ns, relations(t));
                                        k();
                                });
                });
        } else {
            maintainingSelection(
                function(k2) {
                    redraw_func(
                        world,
                        function(newRedraw) {

                            redraw_css_func(
                                world,
                                function(newRedrawCss) {
                                    var t = sexp2tree(newRedraw);
                                    var ns = nodes(t);
                                    // Try to save the current selection and preserve it across
                                    // dom updates.

                                    // Kludge: update the CSS styles first.
                                    // This is a workaround an issue with excanvas: any style change
                                    // clears the content of the canvas, so we do this first before
                                    // attaching the dom element.
                                    update_css(ns, sexp2css(newRedrawCss));
                                    update_dom(toplevelNode, ns, relations(t));

                                    k2();
                                });
                        });
                }, k);
        }
    }



    var FocusedSelection;

    function hasCurrentFocusedSelection() {
        return currentFocusedNode !== undefined;
    }

    function getCurrentFocusedSelection() {
        return new FocusedSelection();
    }


    // maintainingSelection: (-> void) -> void
    // Calls the thunk f while trying to maintain the current focused selection.
    maintainingSelection = function(f, k) {
        var currentFocusedSelection;
        if (hasCurrentFocusedSelection()) {
            currentFocusedSelection = getCurrentFocusedSelection();
            f(function() {
                currentFocusedSelection.restore();
                k();
            });
        } else {
            f(function() { k(); });
        }
    };



    FocusedSelection = function() {
        this.focused = currentFocusedNode;
        this.selectionStart = currentFocusedNode.selectionStart;
        this.selectionEnd = currentFocusedNode.selectionEnd;
    };

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





    //////////////////////////////////////////////////////////////////////

    var bigBang, StopWhenHandler;

    function BigBangRecord(top, world, handlerCreators, handlers, attribs,
                           success, fail) {
        this.top = top;
        this.world = world;
        this.handlers = handlers;
        this.handlerCreators = handlerCreators;
        this.attribs = attribs;
        this.success = success;
        this.fail = fail;
    }

    BigBangRecord.prototype.restart = function() {
        bigBang(this.top, this.world, this.handlerCreators, this.attribs);
    };

    BigBangRecord.prototype.pause = function() {
        var i;
        for(i = 0 ; i < this.handlers.length; i++) {
            if (! (this.handlers[i] instanceof StopWhenHandler)) {
                this.handlers[i].onUnregister(this.top);
            }
        }
    };
    //////////////////////////////////////////////////////////////////////


    var copy_attribs;


    // Notes: bigBang maintains a stack of activation records; it should be possible
    // to call bigBang re-entrantly.
    // top: dom
    // init_world: any
    // handlerCreators: (Arrayof (-> handler))
    // k: any -> void
    bigBang = function(top, init_world, handlerCreators, attribs, succ, fail) {
        var i;
        // clear_running_state();

        // Construct a fresh set of the handlers.
        var handlers = map(handlerCreators, function(x) { return x();} );
        if (runningBigBangs.length > 0) {
            runningBigBangs[runningBigBangs.length - 1].pause();
        }

        // Create an activation record for this big-bang.
        var activationRecord =
            new BigBangRecord(top, init_world, handlerCreators, handlers, attribs, 
                              succ, fail);
        runningBigBangs.push(activationRecord);
        function keepRecordUpToDate(w, oldW, k2) {
            activationRecord.world = w;
            k2();
        }
        add_world_listener(keepRecordUpToDate);



        // Monitor for termination and register the other handlers.
        var stopWhen = new StopWhenHandler(function(w, k2) { k2(false); },
                                           function(w, k2) { k2(w); });
        for(i = 0 ; i < handlers.length; i++) {
            if (handlers[i] instanceof StopWhenHandler) {
                stopWhen = handlers[i];
            } else {
                handlers[i].onRegister(top);
            }
        }
        var watchForTermination = function(w, oldW, k2) {
            stopWhen.test(w,
                          function(stop) {
                              if (stop) {
                                  Jsworld.shutdown({cleanShutdown: true});
                              }
                              else { k2(); }
                          });
        };
        add_world_listener(watchForTermination);


        // Finally, begin the big-bang.
        copy_attribs(top, attribs);
        change_world(function(w, k2) { k2(init_world); }, doNothing);
    };
    Jsworld.bigBang = bigBang;





    // on_tick: number CPS(world -> world) -> handler
    var on_tick = function(delay, tick) {
        return function() {
            var scheduleTick, ticker;
            scheduleTick = function(t) {
                ticker.watchId = setTimeout(
                    function() {
                        ticker.watchId = undefined;
                        var startTime = (new Date()).valueOf();
                        change_world(tick,
                                     function() {
                                         var endTime = (new Date()).valueOf();
                                         scheduleTick(Math.max(delay - (endTime - startTime),
                                                               0));
                                     });
                    },
                    t);
            };

            ticker = {
                watchId: -1,
                onRegister: function (top) {
                    scheduleTick(delay);
                },

                onUnregister: function (top) {
                    if (ticker.watchId) {
                        clearTimeout(ticker.watchId);
                    }
                }
            };
            return ticker;
        };
    };
    Jsworld.on_tick = on_tick;

    var preventDefault, stopPropagation;
    var attachEvent, detachEvent;


    function on_key(press) {
        return function() {
            var wrappedPress = function(e) {
                preventDefault(e);
                stopPropagation(e);
                change_world(function(w, k) { press(w, e, k); }, doNothing);
            };
            return {
                onRegister: function(top) {
                    //http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribue
                    jQuery(top).attr('tabindex', 1);
                    jQuery(top).focus();
                    attachEvent(top, 'keydown', wrappedPress);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'keydown', wrappedPress);
                }
            };
        };
    }
    Jsworld.on_key = on_key;




    // http://www.quirksmode.org/js/events_mouse.html
    // http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
    function on_mouse(mouse) {
        return function() {
            var isButtonDown = false;
            var makeWrapped = function(type) {
                return function(e) {
                    preventDefault(e);
                    stopPropagation(e);
                    var x = e.pageX, y = e.pageY;
                    var currentElement = e.target;
                    do {
                        x -= currentElement.offsetLeft;
                        y -= currentElement.offsetTop;
                        currentElement = currentElement.offsetParent;
                    } while(currentElement);

                    if (type === 'button-down') {
                        isButtonDown = true;
                    } else if (type === 'button-up') {
                        isButtonDown = false;
                    }
                    if (type === 'move' && isButtonDown) {
                        change_world(function(w, k) {
                            mouse(w, x, y, 'drag', k);
                        }, doNothing);
                    } else {
                        change_world(function(w, k) {
                            mouse(w, x, y, type, k);
                        }, doNothing);
                    }
                };
            };
            var wrappedDown = makeWrapped('button-down');
            var wrappedUp = makeWrapped('button-up');
            // How do we do drag?
            var wrappedMove = makeWrapped('move');
            var wrappedEnter = makeWrapped('enter');
            var wrappedLeave = makeWrapped('leave');
            return {
                onRegister: function(top) {
                    attachEvent(top, 'mousedown', wrappedDown);
                    attachEvent(top, 'mouseup', wrappedUp);
                    attachEvent(top, 'mousemove', wrappedMove);
                    attachEvent(top, 'mouseenter', wrappedEnter);
                    attachEvent(top, 'mouseleave', wrappedLeave);
                },
                onUnregister: function(top) {
                    detachEvent(top, 'mousedown', wrappedDown);
                    detachEvent(top, 'mouseup', wrappedUp);
                    detachEvent(top, 'mousemove', wrappedMove);
                    detachEvent(top, 'mouseenter', wrappedEnter);
                    detachEvent(top, 'mouseleave', wrappedLeave);
                }
            };
        };
    }
    Jsworld.on_mouse = on_mouse;





    var checkDomSexp;


    //  on_draw: CPS(world -> (sexpof node)) CPS(world -> (sexpof css-style)) -> handler
    function on_draw(redraw, redraw_css) {
        var wrappedRedraw = function(w, k) {
            redraw(w, function(newDomTree) {
                checkDomSexp(newDomTree, newDomTree);
                k(newDomTree);
            });
        };

        return function() {
            var drawer = {
                _top: null,
                _listener: function(w, oldW, k2) {
                    do_redraw(w, oldW, drawer._top, wrappedRedraw, redraw_css, k2);
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



    StopWhenHandler = function(test, receiver) {
        this.test = test;
        this.receiver = receiver;
    };
    // stop_when: CPS(world -> boolean) CPS(world -> boolean) -> handler
    function stop_when(test, receiver) {
        return function() {
            if (receiver === undefined) {
                receiver = function(w, k) { k(w); };
            }
            return new StopWhenHandler(test, receiver);
        };
    }
    Jsworld.stop_when = stop_when;



    function on_world_change(f) {
        var listener = function(world, oldW, k) { f(world, k); };
        return function() {
            return {
                onRegister: function (top) {
                    add_world_listener(listener); },
                onUnregister: function (top) {
                    remove_world_listener(listener); }
            };
        };
    }
    Jsworld.on_world_change = on_world_change;





    // Compatibility for attaching events to nodes.
    attachEvent = function(node, eventName, fn) {
        if (node.addEventListener) {
            // Mozilla
            node.addEventListener(eventName, fn, false);
        } else {
            // IE
            node.attachEvent('on' + eventName, fn, false);
        }
    };

    detachEvent = function(node, eventName, fn) {
        if (node.addEventListener) {
            // Mozilla
            node.removeEventListener(eventName, fn, false);
        } else {
            // IE
            node.detachEvent('on' + eventName, fn, false);
        }
    };

    //
    // DOM CREATION STUFFS
    //

    // add_ev: node string CPS(world event -> world) -> void
    // Attaches a world-updating handler when the world is changed.
    function add_ev(node, event, f) {
        var eventHandler = function(e) { change_world(function(w, k) { f(w, e, k); },
                                                       doNothing); };
        attachEvent(node, event, eventHandler);
        eventDetachers.push(function() { detachEvent(node, event, eventHandler); });
    }

    // add_ev_after: node string CPS(world event -> world) -> void
    // Attaches a world-updating handler when the world is changed, but only
    // after the fired event has finished.
    function add_ev_after(node, event, f) {
        var eventHandler = function(e) {
                setTimeout(function() { change_world(function(w, k) { f(w, e, k); },
                                                     doNothing); },
                           0);
        };

        attachEvent(node, event, eventHandler);
        eventDetachers.push(function() { detachEvent(node, event, eventHandler); });
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


    sexp2tree = function(sexp) {
        if(sexp.length === undefined) { return { node: sexp, children: [] }; }
        else { return { node: sexp[0], children: map(sexp.slice(1), sexp2tree) }; }
    };

    function sexp2attrib(sexp) {
        return { attrib: sexp[0], values: sexp.slice(1) };
    }

    function sexp2css_node(sexp) {
        var attribs = map(sexp.slice(1), sexp2attrib);
        if (typeof sexp[0] === 'string'){
            return [{ id: sexp[0], attribs: attribs }];
        } else if (sexp[0].length !== undefined){
            return map(sexp[0], function (id) { return { id: id, attribs: attribs }; });
        } else {
            return [{ node: sexp[0], attribs: attribs }];
        }
    }

    sexp2css = function(sexp) {
        return concat_map(sexp, sexp2css_node);
    };



    function isTextNode(n) {
        return (n.nodeType === 3);
    }


    function isElementNode(n) {
        return (n.nodeType === 1);
    }

    var JsworldDomError;

    var throwDomError = function(thing, topThing) {
        throw new JsworldDomError(
            plt.baselib.format.format(
                "Expected a non-empty array, received ~s within ~s",
                [thing, topThing]),
            thing);
    };

    // checkDomSexp: X X -> boolean
    // Checks to see if thing is a DOM-sexp.  If not,
    // throws an object that explains why not.
    checkDomSexp = function(thing, topThing) {
        var i;
        if (! thing instanceof Array) {
            throwDomError(thing, topThing);
        }
        if (thing.length === 0) {
            throwDomError(thing, topThing);
        }


        // Check that the first element is a Text or an element.
        if (isTextNode(thing[0])) {
            if (thing.length > 1) {
                throw new JsworldDomError(plt.baselib.format.format("Text node ~s can not have children",
                                                         [thing]),
                                          thing);
            }
        } else if (isElementNode(thing[0])) {
            for (i = 1; i < thing.length; i++) {
                checkDomSexp(thing[i], thing);
            }
        } else {
            if (window.console && window.console.log) { window.console.log(thing[0]); }

            throw new JsworldDomError(
                plt.baselib.format.format(
                    "expected a Text or an Element, received ~s within ~s",
                    [thing, topThing]),
                thing[0]);
        }
    };

    JsworldDomError = function(msg, elt) {
        this.msg = msg;
        this.elt = elt;
    };
    JsworldDomError.prototype.toString = function() {
        return "JsworldDomError: " + this.msg;
    };





    //
    // DOM CREATION STUFFS
    //


    copy_attribs = function(node, attribs) {
        var a;
        if (attribs) {
            for (a in attribs) {
                if (hasOwnProperty.call(attribs, a)) {
                    if (typeof attribs[a] === 'function') {
                        add_ev(node, a, attribs[a]);
                    } else {
                        node[a] = attribs[a];
                    }
                }
            }
        }
        return node;
    };


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

    // Used To Be: (world event -> world) (hashof X Y) -> domElement
    // Now: CPS(world event -> world) (hashof X Y) -> domElement
    function button(f, attribs) {
        var n = document.createElement('button');
        n.onclick = function(e) {return false;};
        add_ev(n, 'click', f);
        return addFocusTracking(copy_attribs(n, attribs));
    }
    Jsworld.button = button;




    preventDefault = function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    };

    stopPropagation = function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    };


    var stopClickPropagation = function(node) {
        attachEvent(node, "click",
                    function(e) {
                        stopPropagation(e);
                    });
        return node;
    };


    var text_input, checkbox_input;

    // input: string CPS(world -> world) 
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
            throw new Error("js-input: does not currently support type " + aType);
        }
    }
    Jsworld.input = input;




    text_input = function(type, updateF, attribs) {
        var n = document.createElement('input');
        n.type = type;

        var lastVal = n.value;
        var onEvent = function() {
            if (! n.parentNode) { return; }
            setTimeout(
                function() {
                    if (lastVal !== n.value) {
                        lastVal = n.value;
                        change_world(function (w, k) {
                            updateF(w, n.value, k);
                        }, doNothing);
                    }
                },
                0);
        };

        attachEvent(n, "keydown", onEvent);
        eventDetachers.push(function() {
            detachEvent(n, "keydown", onEvent); });

        attachEvent(n, "change", onEvent);
        eventDetachers.push(function() {
            detachEvent(n, "change", onEvent); });

        return stopClickPropagation(
            addFocusTracking(copy_attribs(n, attribs)));
    };


    checkbox_input = function(type, updateF, attribs) {
        var n = document.createElement('input');
        n.type = type;
        var onCheck = function(w, e, k) {
            updateF(w, n.checked, k);
        };
        // This established the widget->world direction
        add_ev_after(n, 'change', onCheck);

        attachEvent(n, 'click', function(e) {
            stopPropagation(e);
        });

        return copy_attribs(n, attribs);
    };


    // var button_input = function(type, updateF, attribs) {
    //     var n = document.createElement('button');
    //     add_ev(n, 'click', function(w, e, k) { updateF(w, n.value, k); });
    //     return addFocusTracking(copy_attribs(n, attribs));
    // };




    function text(s, attribs) {
        var result = document.createElement("div");
        result.appendChild(document.createTextNode(String(s)));
        result.jsworldOpaque = true;
        return result;
    }
    Jsworld.text = text;

    var option;

    function select(attribs, opts, f){
        var n = document.createElement('select'), i;
        for(i = 0; i < opts.length; i++) {
            n.add(option({value: opts[i]}), null);
        }
        n.jsworldOpaque = true;
        add_ev(n, 'change', f);
        var result = addFocusTracking(copy_attribs(n, attribs));
        return result;
    }
    Jsworld.select = select;

    option = function(attribs){
        var node = document.createElement("option");
        node.text = attribs.value;
        node.value = attribs.value;
        return node;
    };



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



}());

var imageLibrary = MACHINE.modules['whalesong/image/private/main.rkt'].privateExports;
var isImage = imageLibrary.isImage;




var PAUSE = plt.runtime.PAUSE;
var EMPTY = plt.baselib.lists.EMPTY;
var isString = plt.baselib.strings.isString;
var isBoolean = function(x) { return x === true || x === false; }
var isSymbol = plt.baselib.symbols.isSymbol;
var makePair = plt.baselib.lists.makePair;
var makeList = plt.baselib.lists.makeList;
var makeRational = plt.baselib.numbers.makeRational;



var finalizeClosureCall = plt.baselib.functions.finalizeClosureCall;





//////////////////////////////////////////////////////////////////////

var bigBang = function(MACHINE, initW, handlers) {
    var outerToplevelNode = jQuery('<span/>').css('padding', '0px').get(0);
    MACHINE.params.currentOutputPort.writeDomNode(MACHINE, outerToplevelNode);
    var toplevelNode = jQuery('<span/>').css('padding', '0px').appendTo(outerToplevelNode).get(0);

    var configs = [];
    var isOutputConfigSeen = false;

    for (var i = 0 ; i < handlers.length; i++) {
        if (isWorldConfigOption(handlers[i])) {
            configs.push(handlers[i].toRawHandler(MACHINE, toplevelNode));
        }
        else {
            configs.push(handlers[i]);
        }
        if (isOutputConfig(handlers[i])) { isOutputConfigSeen = true; }
    }
    
    // If we haven't seen an onDraw function, use the default one.
    if (! isOutputConfigSeen) { 
        configs.push(new DefaultDrawingOutput().toRawHandler(MACHINE, toplevelNode));
    }


    PAUSE(function(restart) {
	var bigBangController = rawJsworld.bigBang(
	    toplevelNode,
	    initW,
	    configs,
	    {},
	    function(finalWorldValue) {
		restart(function(MACHINE) {
		    finalizeClosureCall(
			MACHINE, 
			finalWorldValue);
		});

	    },
            function(err) {
                restart(function(MACHINE) {
                    plt.baselib.exceptions.raise(MACHINE, err);
                });
            });

    });
};





//////////////////////////////////////////////////////////////////////

// Every world configuration function (on-tick, stop-when, ...)
// produces a WorldConfigOption instance.
var WorldConfigOption = function(name) {
    this.name = name;	    
};

WorldConfigOption.prototype.configure = function(config) {
    throw new Error('unimplemented WorldConfigOption');
};


WorldConfigOption.prototype.toDomNode = function(params) {  
    var span = document.createElement('span');
    span.appendChild(document.createTextNode("(" + this.name + " ...)"));
    return span;
};

WorldConfigOption.prototype.toWrittenString = function(cache) {
    return "(" + this.name + " ...)";
};

WorldConfigOption.prototype.toDisplayedString = function(cache) {
    return "(" + this.name + " ...)";
};

var isWorldConfigOption = plt.baselib.makeClassPredicate(WorldConfigOption);

//////////////////////////////////////////////////////////////////////




// adaptWorldFunction: Racket-function -> World-CPS
// Takes a racket function and converts it to the CPS-style function
// that our world implementation expects.
var adaptWorldFunction = function(worldFunction) {
    return function() {
        // Consumes any number of arguments.
        var success = arguments[arguments.length - 1];
        plt.baselib.functions.internalCallDuringPause.apply(
            null,
            [MACHINE,
             worldFunction,
             function(v) {
                 success(v);
             },
             function(err) {
                return rawJsworld.shutdown({errorShutdown: err});
             }].concat([].slice.call(arguments, 0, arguments.length - 1)));
    };
};






//////////////////////////////////////////////////////////////////////

// OnTick: racket-function javascript-float -> handler
var OnTick = function(handler, aDelay) {
    WorldConfigOption.call(this, 'on-tick');
    this.handler = handler;
    this.delay = aDelay;
};

OnTick.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnTick.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_tick(this.delay, worldFunction);
};


//////////////////////////////////////////////////////////////////////
var OnKey = function(handler) {
    WorldConfigOption.call(this, 'on-key');
    this.handler = handler;
}

OnKey.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnKey.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_key(
        function(w, e, success) {
            worldFunction(w, getKeyCodeName(e), success);
        });
};


var getKeyCodeName = function(e) {
    var code = e.charCode || e.keyCode;
    var keyname;
    switch(code) {
    case 16: keyname = "shift"; break;
    case 17: keyname = "control"; break;
    case 19: keyname = "pause"; break;
    case 27: keyname = "escape"; break;
    case 33: keyname = "prior"; break;
    case 34: keyname = "next"; break;
    case 35: keyname = "end"; break;
    case 36: keyname = "home"; break;
    case 37: keyname = "left"; break;
    case 38: keyname = "up"; break;
    case 39: keyname = "right"; break;
    case 40: keyname = "down"; break;
    case 42: keyname = "print"; break;
    case 45: keyname = "insert"; break;
    case 46: keyname = String.fromCharCode(127); break;
    case 106: keyname = "*"; break;
    case 107: keyname = "+"; break;
    case 109: keyname = "-"; break;
    case 110: keyname = "."; break;
    case 111: keyname = "/"; break;
    case 144: keyname = "numlock"; break;
    case 145: keyname = "scroll"; break;
    case 186: keyname = ";"; break;
    case 187: keyname = "="; break;
    case 188: keyname = ","; break;
    case 189: keyname = "-"; break;
    case 190: keyname = "."; break;
    case 191: keyname = "/"; break;
    case 192: keyname = "`"; break;
    case 219: keyname = "["; break;
    case 220: keyname = "\\"; break;
    case 221: keyname = "]"; break;
    case 222: keyname = "'"; break;
    default: 
        if (code >= 96 && code <= 105) {
	    keyname = (code - 96).toString();
        } else if (code >= 112 && code <= 123) {
	    keyname = "f" + (code - 111);
	} else {
	    keyname = String.fromCharCode(code).toLowerCase();
	}
	break;
    }
    return keyname;
}
//////////////////////////////////////////////////////////////////////





var OnMouse = function(handler) {
    WorldConfigOption.call(this, 'on-mouse');
    this.handler = handler;
}

OnMouse.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
OnMouse.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.on_mouse(
        function(w, x, y, type, success) {
            worldFunction(w, x, y, type, success);
        });
};








var OutputConfig = function() {}
OutputConfig.prototype = plt.baselib.heir(WorldConfigOption.prototype);
var isOutputConfig = plt.baselib.makeClassPredicate(OutputConfig);





// // ToDraw

var ToDraw = function(handler) {
    WorldConfigOption.call(this, 'to-draw');
    this.handler = handler;
};

ToDraw.prototype = plt.baselib.heir(OutputConfig.prototype);
 
ToDraw.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var reusableCanvas;
    var reusableCanvasNode;
    var adaptedWorldFunction = adaptWorldFunction(this.handler);

    var worldFunction = function(world, success) {

        adaptedWorldFunction(
            world,
            function(v) {
                // fixme: once jsworld supports fail continuations, use them
                // to check the status of the scene object and make sure it's an
                // image.

                
                if (isImage(v) ) {
		    var width = v.getWidth();
		    var height = v.getHeight();

		    if (! reusableCanvas) {
			reusableCanvas = imageLibrary.makeCanvas(width, height);
			// Note: the canvas object may itself manage objects,
			// as in the case of an excanvas.  In that case, we must make
			// sure jsworld doesn't try to disrupt its contents!
			reusableCanvas.jsworldOpaque = true;
			reusableCanvasNode = rawJsworld.node_to_tree(reusableCanvas);
		    }
		    if (reusableCanvas.width !== width) { 
                        reusableCanvas.width = width; 
                    }
		    if (reusableCanvas.height !== height) { 
                        reusableCanvas.height = height;
                    }
		    var ctx = reusableCanvas.getContext("2d");
		    v.render(ctx, 0, 0);
		    success([toplevelNode, reusableCanvasNode]);
		} else {
		    success([toplevelNode, rawJsworld.node_to_tree(plt.baselib.format.toDomNode(v, MACHINE.params['print-mode']))]);
		}
            });
    };

    var cssFunction = function(w, k) { 
        if (reusableCanvas) {
 	    k([[reusableCanvas, 
                ["padding", "0px"],
 		["width", reusableCanvas.width + "px"],
 		["height", reusableCanvas.height + "px"]]]);
        } else {
            k([]); 
        }
    }

    return rawJsworld.on_draw(worldFunction, cssFunction);
};







var DefaultDrawingOutput = function() {
    WorldConfigOption.call(this, 'to-draw');
};

DefaultDrawingOutput.prototype = plt.baselib.heir(WorldConfigOption.prototype);
 
DefaultDrawingOutput.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = function(world, success) {
        success([toplevelNode,
                 rawJsworld.node_to_tree(plt.baselib.format.toDomNode(world,
                                                                      MACHINE.params['print-mode']))]);
        //k(rawJsworld.node_to_tree(plt.baselib.format.toDomNode(world)));
    };
    var cssFunction = function(w, success) { success([]); }
    return rawJsworld.on_draw(worldFunction, cssFunction);
};




//////////////////////////////////////////////////////////////////////



var StopWhen = function(handler) {
    WorldConfigOption.call(this, 'stop-when');
    this.handler = handler;
};

StopWhen.prototype = plt.baselib.heir(WorldConfigOption.prototype);

StopWhen.prototype.toRawHandler = function(MACHINE, toplevelNode) {
    var that = this;
    var worldFunction = adaptWorldFunction(that.handler);
    return rawJsworld.stop_when(worldFunction);
};

var PAUSE = plt.runtime.PAUSE;
var makeClosure = plt.baselib.functions.makeClosure;
var makeRational = plt.baselib.numbers.makeRational;
var makePrimitiveProcedure = plt.baselib.functions.makePrimitiveProcedure;


var checkNonNegativeReal = plt.baselib.check.checkNonNegativeReal;
var checkString = plt.baselib.check.checkString;

var checkProcedure = plt.baselib.check.checkProcedure;

// More specific function checkers, based on arity.
var checkProcedure1 = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 1)); },
    'procedure that consumes a world argument');


var checkProcedureWithKey = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 2)); },
    'procedure that consumes a world argument and a key');

var checkProcedureWithMouse = plt.baselib.check.makeCheckArgumentType(
    function(x) { return (plt.baselib.functions.isProcedure(x) &&
                          plt.baselib.arity.isArityMatching(x.racketArity, 4)); },
    'procedure that consumes a world argument, an x and y coordinate, and a mouse event');



var checkHandler = plt.baselib.check.makeCheckArgumentType(
    isWorldConfigOption,
    "world configuration handler");




// The default tick delay is 28 times a second.
var DEFAULT_TICK_DELAY = 1/28;



EXPORTS['big-bang'] = 
    makeClosure(
        'big-bang',
        plt.baselib.arity.makeArityAtLeast(1),
        function(MACHINE) {
            var initialWorldValue = MACHINE.e[MACHINE.e.length - 1];
	    var handlers = [];
	    for (var i = 1; i < MACHINE.a; i++) {
		handlers.push(checkHandler(MACHINE, 'big-bang', i));
	    }
	    bigBang(MACHINE, initialWorldValue, handlers);
        });



EXPORTS['on-tick'] = 
    makePrimitiveProcedure(
        'on-tick',
        plt.baselib.lists.makeList(1, 2),
        function(MACHINE) {
	    if (MACHINE.a === 1) {
		var f = checkProcedure1(MACHINE, "on-tick", 0);
		return new OnTick(f, Math.floor(DEFAULT_TICK_DELAY * 1000));
	    } else if (MACHINE.a === 2) {
		var f = checkProcedure1(MACHINE, "on-tick", 0);
		var delay = checkNonNegativeReal(MACHINE, "on-tick", 1);
		return new OnTick(f, Math.floor(jsnums.toFixnum(delay) * 1000));
	    }
        });



EXPORTS['to-draw'] =
    makePrimitiveProcedure(
        'to-draw',
        1,
        function(MACHINE) {
            var f = checkProcedure1(MACHINE, "on-tick", 0);
            return new ToDraw(f);
        });




EXPORTS['stop-when'] =
    makePrimitiveProcedure(
        'stop-when',
        1,
        function(MACHINE) {
            var f = checkProcedure1(MACHINE, "on-tick", 0);
            return new StopWhen(f);
        });


EXPORTS['on-key'] =
    makePrimitiveProcedure(
        'on-key',
        1,
        function(MACHINE) {
            var f = checkProcedureWithKey(MACHINE, "on-key", 0);
            return new OnKey(f);
        });

EXPORTS['on-mouse'] =
    makePrimitiveProcedure(
        'on-mouse',
        1,
        function(MACHINE) {
            var f = checkProcedureWithMouse(MACHINE, "on-key", 0);
            return new OnMouse(f);
        });



EXPORTS['key=?'] =
    makePrimitiveProcedure(
        'on-key',
        2,
        function(MACHINE) {
            var k1 = checkString(MACHINE, "key=?", 0);
            var k2 = checkString(MACHINE, "key=?", 1);
            return k1.toString().toLowerCase() === k2.toString().toLowerCase();
        });

})(M, exports);
             ns.set("big-bang1.1",exports["big-bang"]);
extNs.set("big-bang",exports["big-bang"]);
modrec.prefix[0]=exports["big-bang"];
ns.set("key=?5.9",exports["key=?"]);
extNs.set("key=?",exports["key=?"]);
modrec.prefix[1]=exports["key=?"];
ns.set("on-key3.5",exports["on-key"]);
extNs.set("on-key",exports["on-key"]);
modrec.prefix[2]=exports["on-key"];
ns.set("on-mouse4.7",exports["on-mouse"]);
extNs.set("on-mouse",exports["on-mouse"]);
modrec.prefix[3]=exports["on-mouse"];
ns.set("on-tick2.3",exports["on-tick"]);
extNs.set("on-tick",exports["on-tick"]);
modrec.prefix[4]=exports["on-tick"];
ns.set("stop-when7.13",exports["stop-when"]);
extNs.set("stop-when",exports["stop-when"]);
modrec.prefix[5]=exports["stop-when"];
ns.set("to-draw6.11",exports["to-draw"]);
extNs.set("to-draw",exports["to-draw"]);
modrec.prefix[6]=exports["to-draw"];

             modrec.privateExports = exports;
             return M.c.pop().label(M); };
        plt.runtime.PAUSE(function(restart) {
             var modName = "whalesong/image.rkt";
             plt.runtime.currentModuleLoader(M,
                                             modName,
                                             function() {
                                                restart(function(M) {
                                                    M.modules[modName] = M.installedModules[modName]();
                                                    if (! M.modules[modName].isInvoked) {
                                                        M.modules[modName].internalInvoke(M,
                                                                                     afterName3028,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName3028();
                                                    }
                                                })
                                             },
                                             function() {
                                                alert('Could not load ' + modName);
                                             })
       });     
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/image.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _441=function(M){if(--M.cbt<0){throw _441;}
};

var _445=function(M){if(--M.cbt<0){throw _445;}
M.e.length-=(M.a-1);
return(_446)(M);};

var _440=function(M){if(--M.cbt<0){throw _440;}
M.e.length-=(M.a-1);
return(_441)(M);};

var _450=function(M){return(_439)(M);};

var _446=function(M){if(--M.cbt<0){throw _446;}
if((M.installedModules["whalesong/image/main.rkt"]!==void(0)&&M.modules["whalesong/image/main.rkt"]!==undefined)!==false){return(_447)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_447);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_447)(M);}};

var _443=function(M){M.modules["whalesong/image.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_444)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_444);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_444)(M);}};

var _448=function(M){if(--M.cbt<0){throw _448;}
M.e.length-=(M.a-1);
return(_449)(M);};

var _447=function(M){if(M.modules["whalesong/image/main.rkt"].isInvoked!==false){return(_449)(M);}else{M.c.push(new RT.CallFrame(_449,M.p));
return(M.modules["whalesong/image/main.rkt"].label)(M);}};

var _439=function(M){M.c.push(new RT.PromptFrame(_441,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image.rkt"]=function(){return new RT.ModuleRecord("image",_443);}
return(_442)(M);};

var _449=function(M){if(--M.cbt<0){throw _449;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image.rkt"],M.modules["whalesong/image.rkt"].getExports(),M.modules["whalesong/image.rkt"].getExternalExports(),M.modules["whalesong/image.rkt"].prefix));
return(M.p)(M);};

var _444=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_446)(M);}else{M.c.push(new RT.CallFrame(_446,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _442=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_446.mvr=_445;
_449.mvr=_448;
_441.mvr=_440;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_450(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/image/main.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _451=function(M){M.c.push(new RT.PromptFrame(_453,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/main.rkt"]=function(){return new RT.ModuleRecord("main",_455);}
return(_454)(M);};

var _465=function(M){return(_451)(M);};

var _462=function(M){if(M.modules["whalesong/image/private/color.rkt"].isInvoked!==false){return(_464)(M);}else{M.c.push(new RT.CallFrame(_464,M.p));
return(M.modules["whalesong/image/private/color.rkt"].label)(M);}};

var _457=function(M){if(--M.cbt<0){throw _457;}
M.e.length-=(M.a-1);
return(_458)(M);};

var _464=function(M){if(--M.cbt<0){throw _464;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/image/main.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("above", M.modules["whalesong/image/private/main.rkt"].getExports().get("above14.27"));ns.set("above/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("above/align15.29"));ns.set("add-line", M.modules["whalesong/image/private/main.rkt"].getExports().get("add-line27.53"));ns.set("angle?", M.modules["whalesong/image/private/main.rkt"].getExports().get("angle?51.101"));ns.set("beside", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside12.23"));ns.set("beside/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("beside/align13.25"));ns.set("bitmap/url", M.modules["whalesong/image/private/main.rkt"].getExports().get("bitmap/url3.5"));ns.set("circle", M.modules["whalesong/image/private/main.rkt"].getExports().get("circle29.57"));ns.set("color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("color-alpha", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-alpha"));ns.set("color-blue", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-blue"));ns.set("color-green", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-green"));ns.set("color-list->bitmap", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->bitmap43.85"));ns.set("color-list->image", M.modules["whalesong/image/private/main.rkt"].getExports().get("color-list->image42.83"));ns.set("color-red", M.modules["whalesong/image/private/color.rkt"].getExports().get("color-red"));ns.set("color?", M.modules["whalesong/image/private/color.rkt"].getExports().get("color?"));ns.set("crop", M.modules["whalesong/image/private/main.rkt"].getExports().get("crop25.49"));ns.set("ellipse", M.modules["whalesong/image/private/main.rkt"].getExports().get("ellipse33.65"));ns.set("empty-scene", M.modules["whalesong/image/private/main.rkt"].getExports().get("empty-scene16.31"));ns.set("flip-horizontal", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-horizontal22.43"));ns.set("flip-vertical", M.modules["whalesong/image/private/main.rkt"].getExports().get("flip-vertical23.45"));ns.set("frame", M.modules["whalesong/image/private/main.rkt"].getExports().get("frame24.47"));ns.set("image->color-list", M.modules["whalesong/image/private/main.rkt"].getExports().get("image->color-list41.81"));ns.set("image-baseline", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-baseline46.91"));ns.set("image-color?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-color?47.93"));ns.set("image-height", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-height45.89"));ns.set("image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-url4.7"));ns.set("image-width", M.modules["whalesong/image/private/main.rkt"].getExports().get("image-width44.87"));ns.set("image?", M.modules["whalesong/image/private/main.rkt"].getExports().get("image?54.107"));ns.set("isosceles-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("isosceles-triangle36.71"));ns.set("line", M.modules["whalesong/image/private/main.rkt"].getExports().get("line26.51"));ns.set("make-color", M.modules["whalesong/image/private/color.rkt"].getExports().get("-color"));ns.set("mode?", M.modules["whalesong/image/private/main.rkt"].getExports().get("mode?48.95"));ns.set("name->color", M.modules["whalesong/image/private/main.rkt"].getExports().get("name->color55.109"));ns.set("open-image-url", M.modules["whalesong/image/private/main.rkt"].getExports().get("open-image-url5.9"));ns.set("overlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay6.11"));ns.set("overlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/align8.15"));ns.set("overlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("overlay/xy7.13"));ns.set("place-image", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image17.33"));ns.set("place-image/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("place-image/align18.35"));ns.set("radial-star", M.modules["whalesong/image/private/main.rkt"].getExports().get("radial-star38.75"));ns.set("rectangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("rectangle31.61"));ns.set("regular-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("regular-polygon32.63"));ns.set("rhombus", M.modules["whalesong/image/private/main.rkt"].getExports().get("rhombus40.79"));ns.set("right-triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("right-triangle35.69"));ns.set("rotate", M.modules["whalesong/image/private/main.rkt"].getExports().get("rotate19.37"));ns.set("scale", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale20.39"));ns.set("scale/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("scale/xy21.41"));ns.set("scene+line", M.modules["whalesong/image/private/main.rkt"].getExports().get("scene+line28.55"));ns.set("side-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("side-count?52.103"));ns.set("square", M.modules["whalesong/image/private/main.rkt"].getExports().get("square30.59"));ns.set("star", M.modules["whalesong/image/private/main.rkt"].getExports().get("star37.73"));ns.set("star-polygon", M.modules["whalesong/image/private/main.rkt"].getExports().get("star-polygon39.77"));ns.set("step-count?", M.modules["whalesong/image/private/main.rkt"].getExports().get("step-count?53.105"));ns.set("struct:color", M.modules["whalesong/image/private/color.rkt"].getExports().get("struct:color"));ns.set("text", M.modules["whalesong/image/private/main.rkt"].getExports().get("text1.1"));ns.set("text/font", M.modules["whalesong/image/private/main.rkt"].getExports().get("text/font2.3"));ns.set("triangle", M.modules["whalesong/image/private/main.rkt"].getExports().get("triangle34.67"));ns.set("underlay", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay9.17"));ns.set("underlay/align", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/align11.21"));ns.set("underlay/xy", M.modules["whalesong/image/private/main.rkt"].getExports().get("underlay/xy10.19"));ns.set("x-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("x-place?49.97"));ns.set("y-place?", M.modules["whalesong/image/private/main.rkt"].getExports().get("y-place?50.99"));}(M.modules["whalesong/image/main.rkt"],M.modules["whalesong/image/main.rkt"].getExports(),M.modules["whalesong/image/main.rkt"].getExternalExports(),M.modules["whalesong/image/main.rkt"].prefix));
return(M.p)(M);};

var _459=function(M){if(M.modules["whalesong/image/private/main.rkt"].isInvoked!==false){return(_461)(M);}else{M.c.push(new RT.CallFrame(_461,M.p));
return(M.modules["whalesong/image/private/main.rkt"].label)(M);}};

var _458=function(M){if(--M.cbt<0){throw _458;}
if((M.installedModules["whalesong/image/private/main.rkt"]!==void(0)&&M.modules["whalesong/image/private/main.rkt"]!==undefined)!==false){return(_459)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/main.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_459);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_459)(M);}};

var _463=function(M){if(--M.cbt<0){throw _463;}
M.e.length-=(M.a-1);
return(_464)(M);};

var _461=function(M){if(--M.cbt<0){throw _461;}
if((M.installedModules["whalesong/image/private/color.rkt"]!==void(0)&&M.modules["whalesong/image/private/color.rkt"]!==undefined)!==false){return(_462)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/image/private/color.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_462);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_462)(M);}};

var _456=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_458)(M);}else{M.c.push(new RT.CallFrame(_458,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _455=function(M){M.modules["whalesong/image/main.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_456)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_456);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_456)(M);}};

var _460=function(M){if(--M.cbt<0){throw _460;}
M.e.length-=(M.a-1);
return(_461)(M);};

var _454=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _452=function(M){if(--M.cbt<0){throw _452;}
M.e.length-=(M.a-1);
return(_453)(M);};

var _453=function(M){if(--M.cbt<0){throw _453;}
};

_458.mvr=_457;
_461.mvr=_460;
_464.mvr=_463;
_453.mvr=_452;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_465(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/main.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/main.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/dyoo/work/whalesong/whalesong/image/private/main.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/image/private/main.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/image/private/main.rkt",
        function(M) {
            
        var afterName3145 = function() { 
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/image/private/main.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0)];modrec.prefix.names=["above14.27","above/align15.29","add-line27.53","angle?51.101","beside12.23","beside/align13.25","bitmap/url3.5","circle29.57","color-list->bitmap43.85","color-list->image42.83","crop25.49","ellipse33.65","empty-scene16.31","flip-horizontal22.43","flip-vertical23.45","frame24.47","image->color-list41.81","image-baseline46.91","image-color?47.93","image-height45.89","image-url4.7","image-width44.87","image?54.107","isosceles-triangle36.71","line26.51","mode?48.95","name->color55.109","open-image-url5.9","overlay6.11","overlay/align8.15","overlay/xy7.13","place-image17.33","place-image/align18.35","radial-star38.75","rectangle31.61","regular-polygon32.63","rhombus40.79","right-triangle35.69","rotate19.37","scale20.39","scale/xy21.41","scene+line28.55","side-count?52.103","square30.59","star37.73","star-polygon39.77","step-count?53.105","text1.1","text/font2.3","triangle34.67","underlay9.17","underlay/align11.21","underlay/xy10.19","x-place?49.97","y-place?50.99"];modrec.prefix.internalNames=["above","above/align","add-line","angle?","beside","beside/align","bitmap/url","circle","color-list->bitmap","color-list->image","crop","ellipse","empty-scene","flip-horizontal","flip-vertical","frame","image->color-list","image-baseline","image-color?","image-height","image-url","image-width","image?","isosceles-triangle","line","mode?","name->color","open-image-url","overlay","overlay/align","overlay/xy","place-image","place-image/align","radial-star","rectangle","regular-polygon","rhombus","right-triangle","rotate","scale","scale/xy","scene+line","side-count?","square","star","star-polygon","step-count?","text","text/font","triangle","underlay","underlay/align","underlay/xy","x-place?","y-place?"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){// This might want to live in the Racket world rather than in
// JavaScript land...


var colorNamespace = MACHINE.modules['whalesong/image/private/color.rkt'].getExternalExports();
var colorStruct = colorNamespace.get('struct:color');
var makeColor = function(r,g,b,a) { return colorStruct.constructor([r,g,b,a]); };



// Color database
var ColorDb = function() {
    this.colors = {};
};


ColorDb.prototype.put = function(name, color) {
    this.colors[name] = color;
};

ColorDb.prototype.get = function(name) {
    return this.colors[name.toString().toUpperCase()];
};


// FIXME: update toString to handle the primitive field values.

var colorDb = new ColorDb();
colorDb.put("ORANGE", makeColor(255, 165, 0));
colorDb.put("RED", makeColor(255, 0, 0));
colorDb.put("ORANGERED", makeColor(255, 69, 0));
colorDb.put("TOMATO", makeColor(255, 99, 71));
colorDb.put("DARKRED", makeColor(139, 0, 0));
colorDb.put("RED", makeColor(255, 0, 0));
colorDb.put("FIREBRICK", makeColor(178, 34, 34));
colorDb.put("CRIMSON", makeColor(220, 20, 60));
colorDb.put("DEEPPINK", makeColor(255, 20, 147));
colorDb.put("MAROON", makeColor(176, 48, 96));
colorDb.put("INDIAN RED", makeColor(205, 92, 92));
colorDb.put("INDIANRED", makeColor(205, 92, 92));
colorDb.put("MEDIUM VIOLET RED", makeColor(199, 21, 133));
colorDb.put("MEDIUMVIOLETRED", makeColor(199, 21, 133));
colorDb.put("VIOLET RED", makeColor(208, 32, 144));
colorDb.put("VIOLETRED", makeColor(208, 32, 144));
colorDb.put("LIGHTCORAL", makeColor(240, 128, 128));
colorDb.put("HOTPINK", makeColor(255, 105, 180));
colorDb.put("PALEVIOLETRED", makeColor(219, 112, 147));
colorDb.put("LIGHTPINK", makeColor(255, 182, 193));
colorDb.put("ROSYBROWN", makeColor(188, 143, 143));
colorDb.put("PINK", makeColor(255, 192, 203));
colorDb.put("ORCHID", makeColor(218, 112, 214));
colorDb.put("LAVENDERBLUSH", makeColor(255, 240, 245));
colorDb.put("SNOW", makeColor(255, 250, 250));
colorDb.put("CHOCOLATE", makeColor(210, 105, 30));
colorDb.put("SADDLEBROWN", makeColor(139, 69, 19));
colorDb.put("BROWN", makeColor(132, 60, 36));
colorDb.put("DARKORANGE", makeColor(255, 140, 0));
colorDb.put("CORAL", makeColor(255, 127, 80));
colorDb.put("SIENNA", makeColor(160, 82, 45));
colorDb.put("ORANGE", makeColor(255, 165, 0));
colorDb.put("SALMON", makeColor(250, 128, 114));
colorDb.put("PERU", makeColor(205, 133, 63));
colorDb.put("DARKGOLDENROD", makeColor(184, 134, 11));
colorDb.put("GOLDENROD", makeColor(218, 165, 32));
colorDb.put("SANDYBROWN", makeColor(244, 164, 96));
colorDb.put("LIGHTSALMON", makeColor(255, 160, 122));
colorDb.put("DARKSALMON", makeColor(233, 150, 122));
colorDb.put("GOLD", makeColor(255, 215, 0));
colorDb.put("YELLOW", makeColor(255, 255, 0));
colorDb.put("OLIVE", makeColor(128, 128, 0));
colorDb.put("BURLYWOOD", makeColor(222, 184, 135));
colorDb.put("TAN", makeColor(210, 180, 140));
colorDb.put("NAVAJOWHITE", makeColor(255, 222, 173));
colorDb.put("PEACHPUFF", makeColor(255, 218, 185));
colorDb.put("KHAKI", makeColor(240, 230, 140));
colorDb.put("DARKKHAKI", makeColor(189, 183, 107));
colorDb.put("MOCCASIN", makeColor(255, 228, 181));
colorDb.put("WHEAT", makeColor(245, 222, 179));
colorDb.put("BISQUE", makeColor(255, 228, 196));
colorDb.put("PALEGOLDENROD", makeColor(238, 232, 170));
colorDb.put("BLANCHEDALMOND", makeColor(255, 235, 205));
colorDb.put("MEDIUM GOLDENROD", makeColor(234, 234, 173));
colorDb.put("MEDIUMGOLDENROD", makeColor(234, 234, 173));
colorDb.put("PAPAYAWHIP", makeColor(255, 239, 213));
colorDb.put("MISTYROSE", makeColor(255, 228, 225));
colorDb.put("LEMONCHIFFON", makeColor(255, 250, 205));
colorDb.put("ANTIQUEWHITE", makeColor(250, 235, 215));
colorDb.put("CORNSILK", makeColor(255, 248, 220));
colorDb.put("LIGHTGOLDENRODYELLOW", makeColor(250, 250, 210));
colorDb.put("OLDLACE", makeColor(253, 245, 230));
colorDb.put("LINEN", makeColor(250, 240, 230));
colorDb.put("LIGHTYELLOW", makeColor(255, 255, 224));
colorDb.put("SEASHELL", makeColor(255, 245, 238));
colorDb.put("BEIGE", makeColor(245, 245, 220));
colorDb.put("FLORALWHITE", makeColor(255, 250, 240));
colorDb.put("IVORY", makeColor(255, 255, 240));
colorDb.put("GREEN", makeColor(0, 255, 0));
colorDb.put("LAWNGREEN", makeColor(124, 252, 0));
colorDb.put("CHARTREUSE", makeColor(127, 255, 0));
colorDb.put("GREEN YELLOW", makeColor(173, 255, 47));
colorDb.put("GREENYELLOW", makeColor(173, 255, 47));
colorDb.put("YELLOW GREEN", makeColor(154, 205, 50));
colorDb.put("YELLOWGREEN", makeColor(154, 205, 50));
colorDb.put("MEDIUM FOREST GREEN", makeColor(107, 142, 35));
colorDb.put("OLIVEDRAB", makeColor(107, 142, 35));
colorDb.put("MEDIUMFORESTGREEN", makeColor(107, 142, 35));
colorDb.put("DARK OLIVE GREEN", makeColor(85, 107, 47));
colorDb.put("DARKOLIVEGREEN", makeColor(85, 107, 47));
colorDb.put("DARKSEAGREEN", makeColor(143, 188, 139));
colorDb.put("LIME", makeColor(0, 255, 0));
colorDb.put("DARK GREEN", makeColor(0, 100, 0));
colorDb.put("DARKGREEN", makeColor(0, 100, 0));
colorDb.put("LIME GREEN", makeColor(50, 205, 50));
colorDb.put("LIMEGREEN", makeColor(50, 205, 50));
colorDb.put("FOREST GREEN", makeColor(34, 139, 34));
colorDb.put("FORESTGREEN", makeColor(34, 139, 34));
colorDb.put("SPRING GREEN", makeColor(0, 255, 127));
colorDb.put("SPRINGGREEN", makeColor(0, 255, 127));
colorDb.put("MEDIUM SPRING GREEN", makeColor(0, 250, 154));
colorDb.put("MEDIUMSPRINGGREEN", makeColor(0, 250, 154));
colorDb.put("SEA GREEN", makeColor(46, 139, 87));
colorDb.put("SEAGREEN", makeColor(46, 139, 87));
colorDb.put("MEDIUM SEA GREEN", makeColor(60, 179, 113));
colorDb.put("MEDIUMSEAGREEN", makeColor(60, 179, 113));
colorDb.put("AQUAMARINE", makeColor(112, 216, 144));
colorDb.put("LIGHTGREEN", makeColor(144, 238, 144));
colorDb.put("PALE GREEN", makeColor(152, 251, 152));
colorDb.put("PALEGREEN", makeColor(152, 251, 152));
colorDb.put("MEDIUM AQUAMARINE", makeColor(102, 205, 170));
colorDb.put("MEDIUMAQUAMARINE", makeColor(102, 205, 170));
colorDb.put("TURQUOISE", makeColor(64, 224, 208));
colorDb.put("LIGHTSEAGREEN", makeColor(32, 178, 170));
colorDb.put("MEDIUM TURQUOISE", makeColor(72, 209, 204));
colorDb.put("MEDIUMTURQUOISE", makeColor(72, 209, 204));
colorDb.put("HONEYDEW", makeColor(240, 255, 240));
colorDb.put("MINTCREAM", makeColor(245, 255, 250));
colorDb.put("ROYALBLUE", makeColor(65, 105, 225));
colorDb.put("DODGERBLUE", makeColor(30, 144, 255));
colorDb.put("DEEPSKYBLUE", makeColor(0, 191, 255));
colorDb.put("CORNFLOWERBLUE", makeColor(100, 149, 237));
colorDb.put("STEEL BLUE", makeColor(70, 130, 180));
colorDb.put("STEELBLUE", makeColor(70, 130, 180));
colorDb.put("LIGHTSKYBLUE", makeColor(135, 206, 250));
colorDb.put("DARK TURQUOISE", makeColor(0, 206, 209));
colorDb.put("DARKTURQUOISE", makeColor(0, 206, 209));
colorDb.put("CYAN", makeColor(0, 255, 255));
colorDb.put("AQUA", makeColor(0, 255, 255));
colorDb.put("DARKCYAN", makeColor(0, 139, 139));
colorDb.put("TEAL", makeColor(0, 128, 128));
colorDb.put("SKY BLUE", makeColor(135, 206, 235));
colorDb.put("SKYBLUE", makeColor(135, 206, 235));
colorDb.put("CADET BLUE", makeColor(96, 160, 160));
colorDb.put("CADETBLUE", makeColor(95, 158, 160));
colorDb.put("DARK SLATE GRAY", makeColor(47, 79, 79));
colorDb.put("DARKSLATEGRAY", makeColor(47, 79, 79));
colorDb.put("LIGHTSLATEGRAY", makeColor(119, 136, 153));
colorDb.put("SLATEGRAY", makeColor(112, 128, 144));
colorDb.put("LIGHT STEEL BLUE", makeColor(176, 196, 222));
colorDb.put("LIGHTSTEELBLUE", makeColor(176, 196, 222));
colorDb.put("LIGHT BLUE", makeColor(173, 216, 230));
colorDb.put("LIGHTBLUE", makeColor(173, 216, 230));
colorDb.put("POWDERBLUE", makeColor(176, 224, 230));
colorDb.put("PALETURQUOISE", makeColor(175, 238, 238));
colorDb.put("LIGHTCYAN", makeColor(224, 255, 255));
colorDb.put("ALICEBLUE", makeColor(240, 248, 255));
colorDb.put("AZURE", makeColor(240, 255, 255));
colorDb.put("MEDIUM BLUE", makeColor(0, 0, 205));
colorDb.put("MEDIUMBLUE", makeColor(0, 0, 205));
colorDb.put("DARKBLUE", makeColor(0, 0, 139));
colorDb.put("MIDNIGHT BLUE", makeColor(25, 25, 112));
colorDb.put("MIDNIGHTBLUE", makeColor(25, 25, 112));
colorDb.put("NAVY", makeColor(36, 36, 140));
colorDb.put("BLUE", makeColor(0, 0, 255));
colorDb.put("INDIGO", makeColor(75, 0, 130));
colorDb.put("BLUE VIOLET", makeColor(138, 43, 226));
colorDb.put("BLUEVIOLET", makeColor(138, 43, 226));
colorDb.put("MEDIUM SLATE BLUE", makeColor(123, 104, 238));
colorDb.put("MEDIUMSLATEBLUE", makeColor(123, 104, 238));
colorDb.put("SLATE BLUE", makeColor(106, 90, 205));
colorDb.put("SLATEBLUE", makeColor(106, 90, 205));
colorDb.put("PURPLE", makeColor(160, 32, 240));
colorDb.put("DARK SLATE BLUE", makeColor(72, 61, 139));
colorDb.put("DARKSLATEBLUE", makeColor(72, 61, 139));
colorDb.put("DARKVIOLET", makeColor(148, 0, 211));
colorDb.put("DARK ORCHID", makeColor(153, 50, 204));
colorDb.put("DARKORCHID", makeColor(153, 50, 204));
colorDb.put("MEDIUMPURPLE", makeColor(147, 112, 219));
colorDb.put("CORNFLOWER BLUE", makeColor(68, 64, 108));
colorDb.put("MEDIUM ORCHID", makeColor(186, 85, 211));
colorDb.put("MEDIUMORCHID", makeColor(186, 85, 211));
colorDb.put("MAGENTA", makeColor(255, 0, 255));
colorDb.put("FUCHSIA", makeColor(255, 0, 255));
colorDb.put("DARKMAGENTA", makeColor(139, 0, 139));
colorDb.put("VIOLET", makeColor(238, 130, 238));
colorDb.put("PLUM", makeColor(221, 160, 221));
colorDb.put("LAVENDER", makeColor(230, 230, 250));
colorDb.put("THISTLE", makeColor(216, 191, 216));
colorDb.put("GHOSTWHITE", makeColor(248, 248, 255));
colorDb.put("WHITE", makeColor(255, 255, 255));
colorDb.put("WHITESMOKE", makeColor(245, 245, 245));
colorDb.put("GAINSBORO", makeColor(220, 220, 220));
colorDb.put("LIGHT GRAY", makeColor(211, 211, 211));
colorDb.put("LIGHTGRAY", makeColor(211, 211, 211));
colorDb.put("SILVER", makeColor(192, 192, 192));
colorDb.put("GRAY", makeColor(190, 190, 190));
colorDb.put("DARK GRAY", makeColor(169, 169, 169));
colorDb.put("DARKGRAY", makeColor(169, 169, 169));
colorDb.put("DIM GRAY", makeColor(105, 105, 105));
colorDb.put("DIMGRAY", makeColor(105, 105, 105));
colorDb.put("BLACK", makeColor(0, 0, 0));



EXPORTS['_colorDb'] = colorDb;

// Basic implementation of the image library.
//
// This should mimic the implementation of 2htdp/image.


//////////////////////////////////////////////////////////////////////
var colorNamespace = MACHINE.modules['whalesong/image/private/color.rkt'].getExternalExports();
var colorStruct = colorNamespace.get('struct:color');
var makeColor = function(r,g,b,a) { return colorStruct.constructor([r,g,b,a]); };
var isColor = colorStruct.predicate;
var colorRed = function(c) { return colorStruct.accessor(c, 0); };
var colorGreen = function(c) { return colorStruct.accessor(c, 1); };
var colorBlue = function(c) { return colorStruct.accessor(c, 2); };
var colorAlpha = function(c) { return colorStruct.accessor(c, 3); };
//////////////////////////////////////////////////////////////////////

var heir = plt.baselib.heir;
var clone = plt.baselib.clone;




var isAngle = function(x) {
    return plt.baselib.numbers.isReal(x) &&
        jsnums.greaterThanOrEqual(x, 0) &&
        jsnums.lessThan(x, 360);
};




// Produces true if the value is a color or a color string.
// On the Racket side of things, this is exposed as image-color?.
var isColorOrColorString = function(thing) {
    return (isColor(thing) ||
	    ((plt.baselib.strings.isString(thing) ||
              plt.baselib.symbols.isSymbol(thing)) &&
	     typeof(colorDb.get(thing)) != 'undefined'));
}






var colorString = function(aColor) {
    return ("rgb(" + 
	    colorRed(aColor) + "," +
	    colorGreen(aColor) + ", " + 
	    colorBlue(aColor) + ")");
};






var isSideCount = function(x) {
    return plt.baselib.numbers.isInteger(x) && jsnums.greaterThanOrEqual(x, 3);
};

var isStepCount = function(x) {
    return plt.baselib.numbers.isInteger(x) && jsnums.greaterThanOrEqual(x, 1);
};


var isPointsCount = function(x) {
    return plt.baselib.numbers.isNatural(x) && jsnums.greaterThanOrEqual(x, 2); 
};





// Produces true if thing is an image-like object.
var isImage = function(thing) {
    if (typeof(thing.getHeight) !== 'function')
        return false;
    if (typeof(thing.getWidth) !== 'function')
        return false;
    if (typeof(thing.getBaseline) !== 'function')
        return false;
    if (typeof(thing.updatePinhole) !== 'function')
        return false;
    if (typeof(thing.render) !== 'function')
        return false;
    return true;
};



// Base class for all images.
var BaseImage = function(pinholeX, pinholeY) {
    this.pinholeX = pinholeX;
    this.pinholeY = pinholeY;
};



BaseImage.prototype.updatePinhole = function(x, y) {
    var aCopy = clone(this);
    aCopy.pinholeX = x;
    aCopy.pinholeY = y;
    return aCopy;
};

BaseImage.prototype.getHeight = function(){
    return this.height;
};

BaseImage.prototype.getWidth = function(){
    return this.width;
};

BaseImage.prototype.getBaseline = function(){
    return this.height;
};


// render: context fixnum fixnum: -> void
// Render the image, where the upper-left corner of the image is drawn at
// (x, y).
// NOTE: the rendering should be oblivous to the pinhole.
BaseImage.prototype.render = function(ctx, x, y) {
    throw new Error('BaseImage.render unimplemented!');
};


// makeCanvas: number number -> canvas
// Constructs a canvas object of a particular width and height.
var makeCanvas = function(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    jQuery(canvas).css('width', canvas.width + "px");
    jQuery(canvas).css('height', canvas.height + "px");
    jQuery(canvas).css('padding', '0px');

    // KLUDGE: IE compatibility uses /js/excanvas.js, and dynamic
    // elements must be marked this way.
    if (window.G_vmlCanvasManager) {
	canvas = window.G_vmlCanvasManager.initElement(canvas);
    }
    return canvas;
};



var withIeHack = function(canvas, f) {
    // 	canvas.style.display = 'none';
    // 	document.body.appendChild(canvas);
    // 	try {
    var result = f(canvas);
    // 	} catch(e) {
    // 	    document.body.removeChild(canvas);
    // 	    canvas.style.display = '';
    // 	    throw e;
    // 	}
    // 	document.body.removeChild(canvas);
    // 	canvas.style.display = '';
    return result;
};



// Images are expected to define a render() method, which is used
// here to draw to the canvas.
BaseImage.prototype.toDomNode = function(params) {
    var that = this;
    var width = that.getWidth();
    var height = that.getHeight();
    var canvas = makeCanvas(width, height);
    var ctx;

    // // Try best effort to render to screen at this point.
    // try {
    //     ctx = canvas.getContext("2d");
    //     that.render(ctx, 0, 0);
    // } catch (e) {
    // }
    // KLUDGE: on IE, the canvas rendering functions depend on a
    // context where the canvas is attached to the DOM tree.
    // We initialize an afterAttach hook; the client's responsible
    // for calling this after the dom node is attached to the
    // document.
    var onAfterAttach = function(event) {
        // jQuery(canvas).unbind('afterAttach', onAfterAttach);
	var ctx = this.getContext("2d");
	that.render(ctx, 0, 0);
    };
    jQuery(canvas).bind('afterAttach', onAfterAttach);

    // Canvases lose their drawn content on cloning.  data may help us to preserve it.
    jQuery(canvas).data('toRender', onAfterAttach);

    return canvas;
};




BaseImage.prototype.toWrittenString = function(cache) { return "<image>"; }
BaseImage.prototype.toDisplayedString = function(cache) { return "<image>"; }

BaseImage.prototype.equals = function(other, aUnionFind) {
    return (this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY);
};




// isScene: any -> boolean
// Produces true when x is a scene.
var isScene = function(x) {
    return ((x != undefined) && (x != null) && (x instanceof SceneImage));
};


//////////////////////////////////////////////////////////////////////
// SceneImage: primitive-number primitive-number (listof image) -> Scene
var SceneImage = function(width, height, children, withBorder) {
    BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
    this.width = width;
    this.height = height;
    this.children = children; // arrayof [image, number, number]
    this.withBorder = withBorder;
}
SceneImage.prototype = heir(BaseImage.prototype);


// add: image primitive-number primitive-number -> Scene
SceneImage.prototype.add = function(anImage, x, y) {
    return new SceneImage(this.width, 
			  this.height,
			  this.children.concat([[anImage, 
						 x - anImage.pinholeX, 
						 y - anImage.pinholeY]]),
			  this.withBorder);
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
    // Finally, draw the black border if withBorder is true
    if (this.withBorder) {
	ctx.strokeStyle = 'black';
	ctx.strokeRect(x, y, this.width, this.height);
    }
};

SceneImage.prototype.equals = function(other, aUnionFind) {
    if (!(other instanceof SceneImage)) {
	return false;
    } 

    if (this.pinholeX != other.pinholeX ||
	this.pinholeY != other.pinholeY ||
	this.width != other.width ||
	this.height != other.height ||
	this.children.length != other.children.length) {
	return false;
    }

    for (var i = 0; i < this.children.length; i++) {
	var rec1 = this.children[i];
	var rec2 = other.children[i];
	if (rec1[1] !== rec2[1] ||
	    rec1[2] !== rec2[2] ||
	    !plt.baselib.equality.equals(rec1[0], 
			                 rec2[0],
			                 aUnionFind)) {
	    return false;
 	}
    }
    return true;
};


//////////////////////////////////////////////////////////////////////
// FileImage: string node -> Image
var FileImage = function(src, rawImage) {
    BaseImage.call(this, 0, 0);
    var self = this;
    this.src = src;
    this.isLoaded = false;

    // animationHack: see installHackToSupportAnimatedGifs() for details.
    this.animationHackImg = undefined;

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


var imageCache = {};
FileImage.makeInstance = function(path, rawImage) {
    if (! (path in imageCache)) {
	imageCache[path] = new FileImage(path, rawImage);
    } 
    return imageCache[path];
};

FileImage.installInstance = function(path, rawImage) {
    imageCache[path] = new FileImage(path, rawImage);
};

FileImage.installBrokenImage = function(path) {
    imageCache[path] = new TextImage("Unable to load " + path, 10, colorDb.get("red"),
				     "normal", "Optimer","","",false);
};



FileImage.prototype.render = function(ctx, x, y) {
    this.installHackToSupportAnimatedGifs();
    ctx.drawImage(this.animationHackImg, x, y);
};


// The following is a hack that we use to allow animated gifs to show
// as animating on the canvas.
FileImage.prototype.installHackToSupportAnimatedGifs = function() {
    if (this.animationHackImg) { return; }
    this.animationHackImg = this.img.cloneNode(true);
    document.body.appendChild(this.animationHackImg);
    this.animationHackImg.width = 0;
    this.animationHackImg.height = 0;
};


FileImage.prototype.getWidth = function() {
    return this.img.width;
};


FileImage.prototype.getHeight = function() {
    return this.img.height;
};

// Override toDomNode: we don't need a full-fledged canvas here.
FileImage.prototype.toDomNode = function(params) {
    return this.img.cloneNode(true);
};

FileImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof FileImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.src == other.src);
};

//////////////////////////////////////////////////////////////////////
// VideoImage: String Node -> Video
var VideoImage = function(src, rawVideo) {
    BaseImage.call(this, 0, 0);
    var self = this;
    this.src = src;
    if (rawVideo) { 
	this.video			= rawVideo;
	this.width			= self.video.videoWidth;
	this.height			= self.video.videoHeight;
	this.pinholeX		= self.width / 2;
	this.pinholeY		= self.height / 2;
	this.video.volume	= 1;
	this.video.poster	= "http://www.wescheme.org/images/broken.png";
	this.video.autoplay	= true;
	this.video.autobuffer=true;
	this.video.loop		= true;
	this.video.play();
    } else {
	// fixme: we may want to do something blocking here for
	// onload, since we don't know at this time what the file size
	// should be, nor will drawImage do the right thing until the
	// file is loaded.
	this.video = document.createElement('video');
	this.video.src = src;
	this.video.addEventListener('canplay', function() {
	    this.width			= self.video.videoWidth;
	    this.height			= self.video.videoHeight;
	    this.pinholeX		= self.width / 2;
	    this.pinholeY		= self.height / 2;
	    this.video.poster	= "http://www.wescheme.org/images/broken.png";
	    this.video.autoplay	= true;
	    this.video.autobuffer=true;
	    this.video.loop		= true;
	    this.video.play();
	});
	this.video.addEventListener('error', function(e) {
	    self.video.onerror = "";
	    self.video.poster = "http://www.wescheme.org/images/broken.png";
	});
    }
}
VideoImage.prototype = heir(BaseImage.prototype);


var videos = {};
VideoImage.makeInstance = function(path, rawVideo) {
    if (! (path in VideoImage)) {
	videos[path] = new VideoImage(path, rawVideo);
    } 
    return videos[path];
};

VideoImage.prototype.render = function(ctx, x, y) {
    ctx.drawImage(this.video, x, y);
};

VideoImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof VideoImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.src == other.src);
};


//////////////////////////////////////////////////////////////////////
// OverlayImage: image image placeX placeY -> image
// Creates an image that overlays img1 on top of the
// other image. 
var OverlayImage = function(img1, img2, placeX, placeY) {
    // calculate centers using width/height, so we are scene/image agnostic
    var c1x = img1.getWidth()/2;
    var c1y = img1.getHeight()/2;
    var c2x = img2.getWidth()/2;
    var c2y = img2.getHeight()/2;

    // calculate absolute offset of 2nd image's *CENTER*
    // convert relative X,Y to center offsets, 
    // if placeX and placeY are UL corner offsets, convert to center offsets
    if	(placeX == "left"  )	var xOffset = img2.getWidth()-(c1x+c2x);
    else if (placeX == "right" )	var xOffset = img1.getWidth()-(c1x+c2x);
    else if (placeX == "beside")	var xOffset = c1x+c2x;
    else if (placeX == "middle")	var xOffset = 0;
    else if (placeX == "center")	var xOffset = 0;
    else				var xOffset = placeX - (c1x-c2x);

    if	(placeY == "bottom")	var yOffset = img1.getHeight()-(c1y+c2y);
    else if (placeY == "top")	var yOffset = img2.getHeight()-(c1y+c2y); 
    else if (placeY == "above" )	var yOffset = c1y+c2y;
    else if (placeY == "middle")	var yOffset = 0;
    else if	(placeY == "center")	var yOffset = 0;
    else if (placeY == "baseline")	var yOffset= img1.getBaseline()-img2.getBaseline();
    else				var yOffset = placeY - (c1y-c2y);

    // Correct offsets when dealing with Scenes instead of images,
    // by adding the center values
    if(isScene(img1)){xOffset =+c1x; yOffset =+c1y;}
    if(isScene(img2)){xOffset =+c2x; yOffset =+c2y;}
    
    // The *center* of the 2nd image, once overlaid, changes by the original difference in centers, 
    // plus the size of the offsets. Calculate this delta for X and Y.
    var deltaX	= c1x - c2x + xOffset; 
    var deltaY	= c1y - c2y + yOffset;

    // Each edge of the new, combined image may be grown or shrunk, depending on deltaX or deltaY
    var left	= Math.min(0, deltaX);
    var top		= Math.min(0, deltaY);
    var right	= Math.max(deltaX + img2.getWidth(),  img1.getWidth());
    var bottom	= Math.max(deltaY + img2.getHeight(), img1.getHeight());
    
    // Calculate the new width, height and center based on edge lengths
    this.width = right - left;
    this.height = bottom - top;
    BaseImage.call(this, 
		   Math.floor((right-left) / 2),
		   Math.floor((bottom-top) / 2));

    // store the overlaid images, and the offsets for each
    this.img1 = img1;
    this.img2 = img2;
    this.img1Dx = -left;
    this.img1Dy = -top;
    this.img2Dx = deltaX - left;	
    this.img2Dy = deltaY - top;
};


OverlayImage.prototype = heir(BaseImage.prototype);


OverlayImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    this.img2.render(ctx, x + this.img2Dx, y + this.img2Dy);
    this.img1.render(ctx, x + this.img1Dx, y + this.img1Dy);
    ctx.restore();
};

OverlayImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof OverlayImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.img1Dx == other.img1Dx &&
	     this.img1Dy == other.img1Dy &&
	     this.img2Dx == other.img2Dx &&
	     this.img2Dy == other.img2Dy &&
	     plt.baselib.equality.equals(this.img1, other.img1, aUnionFind) &&
	     plt.baselib.equality.equals(this.img2, other.img2, aUnionFind) );
};


//////////////////////////////////////////////////////////////////////
// rotate: angle image -> image
// Rotates image by angle degrees in a counter-clockwise direction.
// based on http://stackoverflow.com/questions/3276467/adjusting-div-width-and-height-after-rotated
var RotateImage = function(angle, img) {
    var sin   = Math.sin(angle * Math.PI / 180),
        cos = Math.cos(angle * Math.PI / 180);
    var width = img.getWidth();
    var height = img.getHeight();

    // (w,0) rotation
    var x1 = (cos * width),
        y1 = (sin * width);
    
    // (0,h) rotation
    var x2 = (-sin * height),
        y2 = ( cos * height);
    
    // (w,h) rotation
    var x3 = (cos * width - sin * height),
        y3 = (sin * width + cos * height);
    
    var minX = Math.min(0, x1, x2, x3),
        maxX = Math.max(0, x1, x2, x3),
        minY = Math.min(0, y1, y2, y3),
        maxY = Math.max(0, y1, y2, y3);
    
    var rotatedWidth  = maxX - minX,
        rotatedHeight = maxY - minY;
    
    // resize the image
    BaseImage.call(this, 
		   Math.floor(rotatedWidth / 2),
		   Math.floor(rotatedHeight / 2));
    this.img	= img;
    this.width	= Math.floor(rotatedWidth);
    this.height = Math.floor(rotatedHeight);
    this.angle	= angle;
    this.translateX = Math.floor(-minX);
    this.translateY = Math.floor(-minY);
};

RotateImage.prototype = heir(BaseImage.prototype);


// translate the canvas using the calculated values, then draw at the rotated (x,y) offset.
RotateImage.prototype.render = function(ctx, x, y) {
    // calculate the new x and y offsets, by rotating the radius formed by the hypoteneuse
    var sin	= Math.sin(this.angle * Math.PI / 180),
    cos	= Math.cos(this.angle * Math.PI / 180),
    r	= Math.sqrt(x*x + y*y);
    ctx.save();
    ctx.translate(x + this.translateX, y + this.translateY);
    ctx.rotate(this.angle * Math.PI / 180);
    this.img.render(ctx, 0, 0);
    ctx.restore();
};


RotateImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof RotateImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.angle == other.angle &&
	     this.translateX == other.translateX &&
	     this.translateY == other.translateY &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// ScaleImage: factor factor image -> image
// Scale an image
var ScaleImage = function(xFactor, yFactor, img) {
    
    // resize the image
    BaseImage.call(this, 
		   Math.floor((img.getWidth() * xFactor) / 2),
		   Math.floor((img.getHeight() * yFactor) / 2));
    
    this.img	= img;
    this.width	= Math.floor(img.getWidth() * xFactor);
    this.height = Math.floor(img.getHeight() * yFactor);
    this.xFactor = xFactor;
    this.yFactor = yFactor;
};

ScaleImage.prototype = heir(BaseImage.prototype);


// scale the context, and pass it to the image's render function
ScaleImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.scale(this.xFactor, this.yFactor);
    this.img.render(ctx, x / this.xFactor, y / this.yFactor);
    ctx.restore();
};


ScaleImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof ScaleImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.xFactor == other.xFactor &&
	     this.yFactor == other.yFactor &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// CropImage: startX startY width height image -> image
// Crop an image
var CropImage = function(x, y, width, height, img) {
    
    BaseImage.call(this, 
		   Math.floor(width / 2),
		   Math.floor(height / 2));
    
    this.x		= x;
    this.y		= y;
    this.width	= width;
    this.height = height;
    this.img	= img;
};

CropImage.prototype = heir(BaseImage.prototype);


CropImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.translate(-this.x, -this.y);
    this.img.render(ctx, x, y);
    ctx.restore();
};

CropImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof CropImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.x == other.x &&
	     this.y == other.y &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// FrameImage: factor factor image -> image
// Stick a frame around the image
var FrameImage = function(img) {
    
    BaseImage.call(this, 
		   Math.floor(img.getWidth()/ 2),
		   Math.floor(img.getHeight()/ 2));
    
    this.img	= img;
    this.width	= img.getWidth();
    this.height = img.getHeight();
};

FrameImage.prototype = heir(BaseImage.prototype);


// scale the context, and pass it to the image's render function
FrameImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    this.img.render(ctx, x, y);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, this.width, this.height);
    ctx.closePath();
    ctx.restore();
};

FrameImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof FrameImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};

//////////////////////////////////////////////////////////////////////
// FlipImage: image string -> image
// Flip an image either horizontally or vertically
var FlipImage = function(img, direction) {
    this.img	= img;
    this.width	= img.getWidth();
    this.height = img.getHeight();
    this.direction = direction;
    BaseImage.call(this, 
		   img.pinholeX,
		   img.pinholeY);
};

FlipImage.prototype = heir(BaseImage.prototype);


FlipImage.prototype.render = function(ctx, x, y) {
    // when flipping an image of dimension M and offset by N across an axis, 
    // we need to translate the canvas by M+2N in the opposite direction
    ctx.save();
    if(this.direction == "horizontal"){
	ctx.scale(-1, 1);
	ctx.translate(-(this.width+2*x), 0);
	this.img.render(ctx, x, y);
    }
    if (this.direction == "vertical"){
	ctx.scale(1, -1);
	ctx.translate(0, -(this.height+2*y));
	this.img.render(ctx, x, y);
    }
    ctx.restore();
};


FlipImage.prototype.getWidth = function() {
    return this.width;
};

FlipImage.prototype.getHeight = function() {
    return this.height;
};

FlipImage.prototype.equals = function(other, aUnionFind) {
    return ( other instanceof FlipImage &&
	     this.pinholeX == other.pinholeX &&
	     this.pinholeY == other.pinholeY &&
	     this.width == other.width &&
	     this.height == other.height &&
	     this.direction == other.direction &&
	     plt.baselib.equality.equals(this.img, other.img, aUnionFind) );
};





//////////////////////////////////////////////////////////////////////
// RectangleImage: Number Number Mode Color -> Image
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
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = colorString(this.color);
	ctx.strokeRect(x, y, this.width, this.height);
	ctx.closePath();
	ctx.restore();
    } else {
	ctx.save();
	ctx.beginPath();

	ctx.fillStyle = colorString(this.color);
	ctx.fillRect(x, y, this.width, this.height);

	ctx.closePath();
	ctx.restore();
    }
};

RectangleImage.prototype.getWidth = function() {
    return this.width;
};


RectangleImage.prototype.getHeight = function() {
    return this.height;
};

RectangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RectangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.width == other.width &&
	    this.height == other.height &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////
// RhombusImage: Number Number Mode Color -> Image
var RhombusImage = function(side, angle, style, color) {
    // sin(angle/2-in-radians) * side = half of base
    this.width = Math.sin(angle/2 * Math.PI / 180) * side * 2;
    // cos(angle/2-in-radians) * side = half of height
    this.height = Math.abs(Math.cos(angle/2 * Math.PI / 180)) * side * 2;
    BaseImage.call(this, this.width/2, this.height/2);
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
};
RhombusImage.prototype = heir(BaseImage.prototype);


RhombusImage.prototype.render = function(ctx, x, y) {
    ctx.save();
    ctx.beginPath();
    // if angle < 180 start at the top of the canvas, otherwise start at the bottom
    ctx.moveTo(x+this.getWidth()/2, y);
    ctx.lineTo(x+this.getWidth(), y+this.getHeight()/2);
    ctx.lineTo(x+this.getWidth()/2, y+this.getHeight());
    ctx.lineTo(x, y+this.getHeight()/2);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

RhombusImage.prototype.getWidth = function() {
    return this.width;
};


RhombusImage.prototype.getHeight = function() {
    return this.height;
};

RhombusImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RhombusImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side == other.side &&
	    this.angle == other.angle &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////


var ImageDataImage = function(imageData) {
    BaseImage.call(this, 0, 0);
    this.imageData = imageData;
    this.width = imageData.width;
    this.height = imageData.height;
};

ImageDataImage.prototype = heir(BaseImage.prototype);

ImageDataImage.prototype.render = function(ctx, x, y) {
    ctx.putImageData(this.imageData, x, y);
};

ImageDataImage.prototype.getWidth = function() {
    return this.width;
};


ImageDataImage.prototype.getHeight = function() {
    return this.height;
};

ImageDataImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof ImageDataImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY);
};




//////////////////////////////////////////////////////////////////////
// PolygonImage: Number Count Step Mode Color -> Image
//
// See http://www.algebra.com/algebra/homework/Polygons/Inscribed-and-circumscribed-polygons.lesson
// the polygon is inscribed in a circle, whose radius is length/2sin(pi/count)
// another circle is inscribed in the polygon, whose radius is length/2tan(pi/count)
// rotate a 3/4 quarter turn plus half the angle length to keep bottom base level
var PolygonImage = function(length, count, step, style, color) {
    this.aVertices = [];
    var xMax = 0;
    var yMax = 0;
    var xMin = 0;
    var yMin = 0;
    
    this.outerRadius = Math.floor(length/(2*Math.sin(Math.PI/count)));
    this.innerRadius = Math.floor(length/(2*Math.tan(Math.PI/count)));
    var adjust = (3*Math.PI/2)+Math.PI/count;
    
    // rotate around outer circle, storing x,y pairs as vertices
    // keep track of mins and maxs
    var radians = 0;
    for(var i = 0; i < count; i++) {
	// rotate to the next vertex (skipping by this.step)
	radians = radians + (step*2*Math.PI/count);
	
	var v = {	x: this.outerRadius*Math.cos(radians-adjust),
			y: this.outerRadius*Math.sin(radians-adjust) };
	if(v.x < xMin) xMin = v.x;
	if(v.x > xMax) xMax = v.y;
	if(v.y < yMin) yMin = v.x;
	if(v.y > yMax) yMax = v.y;
	this.aVertices.push(v);		
    }
    // HACK: try to work around handling of non-integer coordinates in CANVAS
    // by ensuring that the boundaries of the canvas are outside of the vertices
    for(var i=0; i<this.aVertices.length; i++){
	if(this.aVertices[i].x < xMin) xMin = this.aVertices[i].x-1;
	if(this.aVertices[i].x > xMax) xMax = this.aVertices[i].x+1;
	if(this.aVertices[i].y < yMin) yMin = this.aVertices[i].y-1;
	if(this.aVertices[i].y > yMax) yMax = this.aVertices[i].y+1;
    }
    
    this.width	= Math.floor(xMax-xMin);
    this.height	= Math.floor(yMax-yMin);
    this.length	= length;
    this.count	= count;
    this.step	= step;
    this.style	= style;
    this.color	= color;
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
};
PolygonImage.prototype = heir(BaseImage.prototype);


// shift all vertices by an offset to put the center of the polygon at the 
// center of the canvas. Even-sided polygons highest points are in line with
// the innerRadius. Odd-sides polygons highest vertex is on the outerRadius
PolygonImage.prototype.render = function(ctx, x, y) {
    var xOffset = x+Math.round(this.width/2);
    var yOffset = y+((this.count % 2)? this.outerRadius : this.innerRadius);
    
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(xOffset+this.aVertices[0].x, yOffset+this.aVertices[0].y);
    for(var i=1; i<this.aVertices.length; i++){
	ctx.lineTo(xOffset+this.aVertices[i].x, yOffset+this.aVertices[i].y);
    }
    ctx.lineTo(xOffset+this.aVertices[0].x, yOffset+this.aVertices[0].y);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

PolygonImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof PolygonImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.length == other.length &&
	    this.step == other.step &&
	    this.count == other.count &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


var maybeQuote = function(s) {
    if (/ /.test(s)) {
	return "\"" + s + "\"";
    }
    return s;
}

//////////////////////////////////////////////////////////////////////
// TextImage: String Number Color String String String String any/c -> Image
//////////////////////////////////////////////////////////////////////
// TextImage: String Number Color String String String String any/c -> Image
var TextImage = function(msg, size, color, face, family, style, weight, underline) {	
    var metrics;
    this.msg	= msg;
    this.size	= size;
    this.color	= color;
    this.face	= face;
    this.family = family;
    this.style	= (style == "slant")? "oblique" : style;  // Racket's "slant" -> CSS's "oblique"
    this.weight	= (weight== "light")? "lighter" : weight; // Racket's "light" -> CSS's "lighter"
    this.underline	= underline;
    // example: "bold italic 20px 'Times', sans-serif". 
    // Default weight is "normal", face is "Optimer"
    var canvas	= makeCanvas(0, 0);
    var ctx		= canvas.getContext("2d");
    
    this.font = (this.weight + " " +
		 this.style + " " +
		 this.size + "px " +
		 maybeQuote(this.face) + " " +
		 maybeQuote(this.family));
    try {
	ctx.font	= this.font;
    } catch (e) {
	this.fallbackOnFont();
	ctx.font	= this.font;
    }
    
    // Defensive: on IE, this can break.
    try {
	metrics	= ctx.measureText(msg);
	this.width	= metrics.width;
	this.height	= Number(this.size); 
    } catch(e) {
	this.fallbackOnFont();
    }
    BaseImage.call(this, Math.round(this.width/2), 0);// weird pinhole settings needed for "baseline" alignment
}


TextImage.prototype = heir(BaseImage.prototype);

TextImage.prototype.fallbackOnFont = function() {
    // Defensive: if the browser doesn't support certain features, we
    // reduce to a smaller feature set and try again.
    this.font	= this.size + "px " + maybeQuote(this.family);    
    var canvas	= makeCanvas(0, 0);
    var ctx	= canvas.getContext("2d");
    ctx.font	= this.font;
    var metrics	= ctx.measureText(this.msg);
    this.width	= metrics.width;
    // KLUDGE: I don't know how to get at the height.
    this.height	= Number(this.size);//ctx.measureText("m").width + 20;
};


TextImage.prototype.render = function(ctx, x, y) {
    ctx.save();

    ctx.textAlign	= 'left';
    ctx.textBaseline= 'top';
    ctx.fillStyle	= colorString(this.color);
    ctx.font		= this.font;
    try { 
	ctx.fillText(this.msg, x, y); 
    } catch (e) {
	this.fallbackOnFont();
	ctx.font		= this.font;	
	ctx.fillText(this.msg, x, y); 
    }
    if(this.underline){
	ctx.beginPath();
	ctx.moveTo(x, y+this.size);
	// we use this.size, as it is more accurate for underlining than this.height
	ctx.lineTo(x+this.width, y+this.size);
	ctx.closePath();
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    ctx.restore();
};


TextImage.prototype.getBaseline = function() {
    return this.size;
};

TextImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof TextImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.msg	== other.msg &&
	    this.size	== other.size &&
	    this.face	== other.face &&
	    this.family == other.family &&
	    this.style	== other.style &&
	    this.weight == other.weight &&
	    this.underline == other.underline &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind) &&
	    this.font == other.font);
};


//////////////////////////////////////////////////////////////////////
// StarImage: fixnum fixnum fixnum color -> image
var StarImage = function(points, outer, inner, style, color) {
    BaseImage.call(this,
		   Math.max(outer, inner),
		   Math.max(outer, inner));
    this.points	= points;
    this.outer	= outer;
    this.inner	= inner;
    this.style	= style;
    this.color	= color;
    this.radius	= Math.max(this.inner, this.outer);
    this.width	= this.radius*2;
    this.height	= this.radius*2;
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
    ctx.closePath();
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    } else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

StarImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof StarImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.points == other.points &&
	    this.outer == other.outer &&
	    this.inner == other.inner &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};



/////////////////////////////////////////////////////////////////////
//TriangleImage: Number Number Mode Color -> Image
var TriangleImage = function(side, angle, style, color) {
    // sin(angle/2-in-radians) * side = half of base
    this.width = Math.sin(angle/2 * Math.PI / 180) * side * 2;
    // cos(angle/2-in-radians) * side = height of altitude
    this.height = Math.floor(Math.abs(Math.cos(angle/2 * Math.PI / 180)) * side);
    
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
    this.side = side;
    this.angle = angle;
    this.style = style;
    this.color = color;
}
TriangleImage.prototype = heir(BaseImage.prototype);


TriangleImage.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    // if angle < 180 start at the top of the canvas, otherwise start at the bottom
    if(this.angle < 180){
	ctx.moveTo(x+width/2, y);
	ctx.lineTo(x, y+height);
	ctx.lineTo(x+width, y+height);		
    } else {
	ctx.moveTo(x+width/2, y+height);
	ctx.lineTo(x, y);
	ctx.lineTo(x+width, y);				
    }
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

TriangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof TriangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side == other.side &&
	    this.angle == other.angle &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};

/////////////////////////////////////////////////////////////////////
//RightTriangleImage: Number Number Mode Color -> Image
var RightTriangleImage = function(side1, side2, style, color) {
    this.width = side1;
    this.height = side2;
    
    BaseImage.call(this, Math.floor(this.width/2), Math.floor(this.height/2));
    this.side1 = side1;
    this.side2 = side2;
    this.style = style;
    this.color = color;
}
RightTriangleImage.prototype = heir(BaseImage.prototype);


RightTriangleImage.prototype.render = function(ctx, x, y) {
    var width = this.getWidth();
    var height = this.getHeight();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y+this.side2);
    ctx.lineTo(x+this.side1, y+this.side2);
    ctx.lineTo(x, y);
    ctx.closePath();
    
    if (this.style.toString().toLowerCase() == "outline") {
	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }
    ctx.restore();
};

RightTriangleImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof RightTriangleImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.side1 == other.side1 &&
	    this.side2 == other.side2 &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};

//////////////////////////////////////////////////////////////////////
//Ellipse : Number Number Mode Color -> Image
var EllipseImage = function(width, height, style, color) {
    BaseImage.call(this, Math.floor(width/2), Math.floor(height/2));
    this.width = width;
    this.height = height;
    this.style = style;
    this.color = color;
};

EllipseImage.prototype = heir(BaseImage.prototype);


EllipseImage.prototype.render = function(ctx, aX, aY) {
    ctx.save();
    ctx.beginPath();

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
 	ctx.strokeStyle = colorString(this.color);
	ctx.stroke();
    }
    else {
 	ctx.fillStyle = colorString(this.color);
	ctx.fill();
    }


    ctx.restore();
};

EllipseImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof EllipseImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.width == other.width &&
	    this.height == other.height &&
	    this.style == other.style &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};


//////////////////////////////////////////////////////////////////////
//Line: Number Number Color Boolean -> Image
var LineImage = function(x, y, color, normalPinhole) {
    if (x >= 0) {
	if (y >= 0) {
	    BaseImage.call(this, 0, 0);
	} else {
	    BaseImage.call(this, 0, -y);
	}
    } else {
	if (y >= 0) {
	    BaseImage.call(this, -x, 0);
	} else {
	    BaseImage.call(this, -x, -y);
	}
    }
    
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = Math.abs(x) + 1;
    this.height = Math.abs(y) + 1;
    
    // put the pinhle in the center of the image
    if(normalPinhole){
 	this.pinholeX = this.width/2;
 	this.pinholeY = this.height/2;
    }
}

LineImage.prototype = heir(BaseImage.prototype);


LineImage.prototype.render = function(ctx, xstart, ystart) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = colorString(this.color);
    if (this.x >= 0) {
	if (this.y >= 0) {
	    ctx.moveTo(xstart, ystart);
	    ctx.lineTo((xstart + this.x),
		       (ystart + this.y));
	} else {
	    ctx.moveTo(xstart, ystart + (-this.y));
	    ctx.lineTo(xstart + this.x, ystart);
	}
    } else {
	if (this.y >= 0) {
	    ctx.moveTo(xstart + (-this.x), ystart);
	    ctx.lineTo(xstart,
		       (ystart + this.y));		
	} else {
	    ctx.moveTo(xstart + (-this.x), ystart + (-this.y));
	    ctx.lineTo(xstart, ystart);
	}
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
};


LineImage.prototype.equals = function(other, aUnionFind) {
    return (other instanceof LineImage &&
	    this.pinholeX == other.pinholeX &&
	    this.pinholeY == other.pinholeY &&
	    this.x == other.x &&
	    this.y == other.y &&
	    plt.baselib.equality.equals(this.color, other.color, aUnionFind));
};








var imageToColorList = function(img) {
    var width = img.getWidth(),
    height = img.getHeight(),
    canvas = makeCanvas(width, height),
    ctx = canvas.getContext("2d"),
    imageData,
    data,
    i,
    r, g, b, a;
    img.render(ctx, 0, 0);
    imageData = ctx.getImageData(0, 0, width, height);
    data = imageData.data;
    var colors = [];
    for (i = 0 ; i < data.length; i += 4) {
	r = data[i];
	g = data[i+1];
	b = data[i+2];
	a = data[i+3];
	colors.push(makeColor(r, g, b, a));
    }
    return plt.baselib.lists.arrayToList(colors);
}


var colorListToImage = function(listOfColors,
                                width,
                                height,
                                pinholeX,
                                pinholeY) {
    var canvas = makeCanvas(jsnums.toFixnum(width),
			    jsnums.toFixnum(height)),
    ctx = canvas.getContext("2d"),
    imageData = ctx.createImageData(jsnums.toFixnum(width),
				    jsnums.toFixnum(height)),
    data = imageData.data,
    aColor, i = 0;
    while (listOfColors !== plt.baselib.lists.EMPTY) {
	aColor = listOfColors.first;
	data[i] = jsnums.toFixnum(colorRed(aColor));
	data[i+1] = jsnums.toFixnum(colorGreen(aColor));
	data[i+2] = jsnums.toFixnum(colorBlue(aColor));
	data[i+3] = jsnums.toFixnum(colorAlpha(aColor));

	i += 4;
	listOfColors = listOfColors.rest;
    };

    return makeImageDataImage(imageData);
};













var makeSceneImage = function(width, height, children, withBorder) {
    return new SceneImage(width, height, children, withBorder);
};
var makeCircleImage = function(radius, style, color) {
    return new EllipseImage(2*radius, 2*radius, style, color);
};
var makeStarImage = function(points, outer, inner, style, color) {
    return new StarImage(points, outer, inner, style, color);
};
var makeRectangleImage = function(width, height, style, color) {
    return new RectangleImage(width, height, style, color);
};
var makeRhombusImage = function(side, angle, style, color) {
    return new RhombusImage(side, angle, style, color);
};
var makePolygonImage = function(length, count, step, style, color) {
    return new PolygonImage(length, count, step, style, color);
};
var makeSquareImage = function(length, style, color) {
    return new RectangleImage(length, length, style, color);
};
var makeRightTriangleImage = function(side1, side2, style, color) {
    return new RightTriangleImage(side1, side2, style, color);
};
var makeTriangleImage = function(side, angle, style, color) {
    return new TriangleImage(side, angle, style, color);
};
var makeEllipseImage = function(width, height, style, color) {
    return new EllipseImage(width, height, style, color);
};
var makeLineImage = function(x, y, color, normalPinhole) {
    return new LineImage(x, y, color, normalPinhole);
};
var makeOverlayImage = function(img1, img2, X, Y) {
    return new OverlayImage(img1, img2, X, Y);
};
var makeRotateImage = function(angle, img) {
    return new RotateImage(angle, img);
};
var makeScaleImage = function(xFactor, yFactor, img) {
    return new ScaleImage(xFactor, yFactor, img);
};
var makeCropImage = function(x, y, width, height, img) {
    return new CropImage(x, y, width, height, img);
};
var makeFrameImage = function(img) {
    return new FrameImage(img);
};
var makeFlipImage = function(img, direction) {
    return new FlipImage(img, direction);
};
var makeTextImage = function(msg, size, color, face, family, style, weight, underline) {
    return new TextImage(msg, size, color, face, family, style, weight, underline);
};
var makeImageDataImage = function(imageData) {
    return new ImageDataImage(imageData);
};
var makeFileImage = function(path, rawImage) {
    return FileImage.makeInstance(path, rawImage);
};
var makeVideoImage = function(path, rawVideo) {
    return VideoImage.makeInstance(path, rawVideo);
};


var isSceneImage = function(x) { return x instanceof SceneImage; };
var isCircleImage = function(x) { return x instanceof EllipseImage && 
                                  x.width === x.height; };
var isStarImage	= function(x) { return x instanceof StarImage; };
var isRectangleImage=function(x) { return x instanceof RectangleImage; };
var isPolygonImage = function(x) { return x instanceof PolygonImage; };
var isRhombusImage = function(x) { return x instanceof RhombusImage; };
var isSquareImage	= function(x) { return x instanceof SquareImage; };
var isTriangleImage= function(x) { return x instanceof TriangleImage; };
var isRightTriangleImage = function(x) { return x instanceof RightTriangleImage; };
var isEllipseImage = function(x) { return x instanceof EllipseImage; };
var isLineImage	= function(x) { return x instanceof LineImage; };
var isOverlayImage = function(x) { return x instanceof OverlayImage; };
var isRotateImage	= function(x) { return x instanceof RotateImage; };
var isScaleImage	= function(x) { return x instanceof ScaleImage; };
var isCropImage	= function(x) { return x instanceof CropImage; };
var isFrameImage	= function(x) { return x instanceof FrameImage; };
var isFlipImage	= function(x) { return x instanceof FlipImage; };
var isTextImage	= function(x) { return x instanceof TextImage; };
var isFileImage	= function(x) { return x instanceof FileImage; };
var isFileVideo	= function(x) { return x instanceof FileVideo; };




///////////////////////////////////////////////////////////////
// Exports

// These functions are available for direct access without the typechecks
// of the Racket-exposed functions.


EXPORTS.makeCanvas = makeCanvas;



EXPORTS.BaseImage = BaseImage;
EXPORTS.SceneImage = SceneImage;
EXPORTS.FileImage = FileImage;
EXPORTS.VideoImage = VideoImage;
EXPORTS.OverlayImage = OverlayImage;
EXPORTS.RotateImage = RotateImage;
EXPORTS.ScaleImage = ScaleImage;
EXPORTS.CropImage = CropImage;
EXPORTS.FrameImage = FrameImage;
EXPORTS.FlipImage = FlipImage;
EXPORTS.RectangleImage = RectangleImage;
EXPORTS.RhombusImage = RhombusImage;
EXPORTS.ImageDataImage = ImageDataImage;
EXPORTS.PolygonImage = PolygonImage;
EXPORTS.TextImage = TextImage;
EXPORTS.StarImage = StarImage;
EXPORTS.TriangleImage = TriangleImage;
EXPORTS.RightTriangleImage = RightTriangleImage;
EXPORTS.EllipseImage = EllipseImage;
EXPORTS.LineImage = LineImage;
EXPORTS.StarImage = StarImage;



EXPORTS.colorDb = colorDb;

EXPORTS.makeSceneImage = makeSceneImage;
EXPORTS.makeCircleImage = makeCircleImage;
EXPORTS.makeStarImage = makeStarImage;
EXPORTS.makeRectangleImage = makeRectangleImage;
EXPORTS.makeRhombusImage = makeRhombusImage;
EXPORTS.makePolygonImage = makePolygonImage;
EXPORTS.makeSquareImage = makeSquareImage;
EXPORTS.makeRightTriangleImage = makeRightTriangleImage;
EXPORTS.makeTriangleImage = makeTriangleImage;
EXPORTS.makeEllipseImage = makeEllipseImage;
EXPORTS.makeLineImage = makeLineImage;
EXPORTS.makeOverlayImage = makeOverlayImage;
EXPORTS.makeRotateImage = makeRotateImage;
EXPORTS.makeScaleImage = makeScaleImage;
EXPORTS.makeCropImage = makeCropImage;
EXPORTS.makeFrameImage = makeFrameImage;
EXPORTS.makeFlipImage = makeFlipImage;
EXPORTS.makeTextImage = makeTextImage;
EXPORTS.makeImageDataImage = makeImageDataImage;
EXPORTS.makeFileImage = makeFileImage;
EXPORTS.makeVideoImage = makeVideoImage;

EXPORTS.imageToColorList = imageToColorList;
EXPORTS.colorListToImage = colorListToImage;


EXPORTS.isImage = isImage;
EXPORTS.isScene = isScene;
EXPORTS.isColorOrColorString = isColorOrColorString;
EXPORTS.isAngle = isAngle;
EXPORTS.isSideCount = isSideCount;
EXPORTS.isStepCount = isStepCount;
EXPORTS.isPointsCount = isPointsCount;


EXPORTS.isSceneImage = isSceneImage;
EXPORTS.isCircleImage = isCircleImage;
EXPORTS.isStarImage = isStarImage;
EXPORTS.isRectangleImage = isRectangleImage;
EXPORTS.isPolygonImage = isPolygonImage;
EXPORTS.isRhombusImage = isRhombusImage;
EXPORTS.isSquareImage = isSquareImage;
EXPORTS.isTriangleImage = isTriangleImage;
EXPORTS.isRightTriangleImage = isRightTriangleImage;
EXPORTS.isEllipseImage = isEllipseImage;
EXPORTS.isLineImage = isLineImage;
EXPORTS.isOverlayImage = isOverlayImage;
EXPORTS.isRotateImage = isRotateImage;
EXPORTS.isScaleImage = isScaleImage;
EXPORTS.isCropImage = isCropImage;
EXPORTS.isFrameImage = isFrameImage;
EXPORTS.isFlipImage = isFlipImage;
EXPORTS.isTextImage = isTextImage;
EXPORTS.isFileImage = isFileImage;
EXPORTS.isFileVideo = isFileVideo;



EXPORTS.makeColor = makeColor;
EXPORTS.isColor = isColor;
EXPORTS.colorRed = colorRed;
EXPORTS.colorGreen = colorGreen;
EXPORTS.colorBlue = colorBlue;
EXPORTS.colorAlpha = colorAlpha;


var makePrimitiveProcedure = plt.baselib.functions.makePrimitiveProcedure;
var makeClosure = plt.baselib.functions.makeClosure;
var finalizeClosureCall = plt.baselib.functions.finalizeClosureCall;
var PAUSE = plt.runtime.PAUSE;

var checkSymbolOrString = plt.baselib.check.checkSymbolOrString;

var isString = plt.baselib.strings.isString;
var isSymbol = plt.baselib.symbols.isSymbol;


var isFontFamily = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "default" ||
	     x.toString().toLowerCase() == "decorative" ||
	     x.toString().toLowerCase() == "roman" ||
	     x.toString().toLowerCase() == "script" ||
	     x.toString().toLowerCase() == "swiss" ||
	     x.toString().toLowerCase() == "modern" ||
	     x.toString().toLowerCase() == "symbol" ||
	     x.toString().toLowerCase() == "system"))
	|| (x === false);		// false is also acceptable
};
var isFontStyle = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "normal" ||
	     x.toString().toLowerCase() == "italic" ||
	     x.toString().toLowerCase() == "slant"))
	|| (x === false);		// false is also acceptable
};
var isFontWeight = function(x){
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "normal" ||
	     x.toString().toLowerCase() == "bold" ||
	     x.toString().toLowerCase() == "light"))
	|| (x === false);		// false is also acceptable
};
var isMode = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "solid" ||
	     x.toString().toLowerCase() == "outline"));
};

var isPlaceX = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "left"  ||
	     x.toString().toLowerCase() == "right" ||
	     x.toString().toLowerCase() == "center" ||
	     x.toString().toLowerCase() == "middle"));
};

var isPlaceY = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "top"	  ||
	     x.toString().toLowerCase() == "bottom"   ||
	     x.toString().toLowerCase() == "baseline" ||
	     x.toString().toLowerCase() == "center"   ||
	     x.toString().toLowerCase() == "middle"));
};

var isStyle = function(x) {
    return ((isString(x) || isSymbol(x)) &&
	    (x.toString().toLowerCase() == "solid" ||
	     x.toString().toLowerCase() == "outline"));
};






var checkString = plt.baselib.check.checkString;
var checkStringOrFalse = plt.baselib.check.makeCheckArgumentType(
    function(x) { return plt.baselib.strings.isString(x) || x === false; },
    "string or false");

var checkByte = plt.baselib.check.checkByte;
var checkReal = plt.baselib.check.checkReal;
var checkBoolean = plt.baselib.check.checkBoolean;

var checkNatural = plt.baselib.check.checkNatural;

var checkPositiveInteger = plt.baselib.check.makeCheckArgumentType(
    function(x) { return plt.baselib.numbers.isInteger(x) &&
		  plt.baselib.numbers.greaterThan(x, 0);},
    "positive integer");

var checkNonNegativeReal = plt.baselib.check.checkNonNegativeReal;


var _checkColor = plt.baselib.check.makeCheckArgumentType(
    isColorOrColorString,
    'color');

var checkColor = function(MACHINE, functionName, position) {
    var aColor = _checkColor(MACHINE, functionName, position);
    if (colorDb.get(aColor)) {
	aColor = colorDb.get(aColor);
    }
    return aColor;
};

var checkImage = plt.baselib.check.makeCheckArgumentType(
    isImage,
    'image');

var checkImageOrScene = plt.baselib.check.makeCheckArgumentType(
    function(x) { return isImage(x) || isScene(x); },
    'image or scene');

var checkFontFamily = plt.baselib.check.makeCheckArgumentType(
    isFontFamily,
    'font family');

var checkFontStyle = plt.baselib.check.makeCheckArgumentType(
    isFontStyle,
    'font style');

var checkFontWeight = plt.baselib.check.makeCheckArgumentType(
    isFontWeight,
    'font weight');

var checkPlaceX = plt.baselib.check.makeCheckArgumentType(
    isPlaceX,
    'x-place');

var checkPlaceY = plt.baselib.check.makeCheckArgumentType(
    isPlaceY,
    'y-place');


var checkAngle = plt.baselib.check.makeCheckArgumentType(
    isAngle,
    "finite real number between 0 and 360");


var checkMode = plt.baselib.check.makeCheckArgumentType(
    isMode,
    'solid or outline');


var checkSideCount = plt.baselib.check.makeCheckArgumentType(
    isSideCount,
    "positive integer greater than or equal to 3");


var checkStepCount = plt.baselib.check.makeCheckArgumentType(
    isStepCount,
    "positive integer greater than or equal to 1");


var checkPointsCount = plt.baselib.check.makeCheckArgumentType(
    isPointsCount,
    "positive integer greater than or equal to 2");


var checkListofColor = plt.baselib.check.makeCheckListofArgumentType(
    isColor,
    'color');





//////////////////////////////////////////////////////////////////////


EXPORTS['image-color?'] =
    makePrimitiveProcedure(
        'image-color?',
        1,
        function(MACHINE) {
            var elt = MACHINE.e[MACHINE.e.length - 1];
            return (isColorOrColorString(elt));
        });



EXPORTS['mode?'] = 
    makePrimitiveProcedure(
        'mode?',
        1,
        function(MACHINE) {
            return isMode(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['x-place?'] = 
    makePrimitiveProcedure(
        'x-place?',
        1,
        function(MACHINE) {
            return isPlaceX(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['y-place?'] = 
    makePrimitiveProcedure(
        'y-place?',
        1,
        function(MACHINE) {
            return isPlaceY(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['angle?'] = 
    makePrimitiveProcedure(
        'angle?',
        1,
        function(MACHINE) {
            return isAngle(MACHINE.e[MACHINE.e.length - 1]);
        });

EXPORTS['side-count?'] = 
    makePrimitiveProcedure(
        'side-count?',
        1,
        function(MACHINE) {
            return isSideCount(MACHINE.e[MACHINE.e.length - 1]);
        });


EXPORTS['step-count?'] = 
    makePrimitiveProcedure(
        'step-count?',
            1,
        function(MACHINE) {
            return isStepCount(MACHINE.e[MACHINE.e.length - 1]);
        });


EXPORTS['image?'] = 
    makePrimitiveProcedure(
        'image?',
            1,
        function(MACHINE) {
            return isImage(MACHINE.e[MACHINE.e.length - 1]);
        });



EXPORTS['text'] =
    makePrimitiveProcedure(
        'text',
        3,
        function(MACHINE) {
	    var aString = checkString(MACHINE,'text', 0);
	    // Unlike 2htdp, we'll allow this to be a positive integer
	    var aSize = checkPositiveInteger(MACHINE, 'text', 1); 
	    var aColor = checkColor(MACHINE, 'text', 2);
	    return makeTextImage(aString.toString(), 
                                 jsnums.toFixnum(aSize),
                                 aColor,
				 "normal",
                                 "Optimer",
                                 "",
                                 "",
                                 false);
        });


EXPORTS['text/font'] = 
    makePrimitiveProcedure(
        'text/font',
        8,
        function(MACHINE) {
            var aString = checkString(MACHINE, "text/font", 0);
	    var aSize = checkByte(MACHINE, "text/font", 1);
	    var aColor = checkColor(MACHINE, "text/font", 2);
	    var aFace = checkStringOrFalse(MACHINE, "text/font", 3);
	    var aFamily = checkFontFamily(MACHINE, "text/font", 4);
	    var aStyle = checkFontStyle(MACHINE, "text/font", 5);
	    var aWeight = checkFontWeight(MACHINE, "text/font", 6);
	    var aUnderline = checkBoolean(MACHINE, "text/font", 7);
	    return makeTextImage(aString.toString(),
                                 jsnums.toFixnum(aSize),
                                 aColor,
				 aFace.toString(),
                                 aFamily.toString(),
                                 aStyle.toString(),
				 aWeight.toString(),
                                 aUnderline);
        });


EXPORTS['bitmap/url'] = 
    makeClosure(
        'bitmap/url',
        1,
        function(MACHINE) {
            var url = checkString(MACHINE, 'bitmap/url', 0);
            PAUSE(
                function(restart) {
                    var rawImage = new Image();
                    rawImage.onload = function() {
                        restart(function(MACHINE) {
                            finalizeClosureCall(
                                MACHINE, 
                                makeFileImage(url.toString(),
                                              rawImage));
                        });
                    };
                    rawImage.onerror = function(e) {
                        restart(function(MACHINE) {
                            plt.baselib.exceptions.raiseFailure(
                                MACHINE, 
                                plt.baselib.format.format(
                                    "unable to load ~a: ~a",
                                    [url,
                                     e.message]));
                        });
                    }
                    rawImage.src = url.toString();
                }
            );
        });

EXPORTS['open-image-url'] = 
    plt.baselib.functions.renameProcedure(EXPORTS['bitmap/url'],
                                          'open-image-url');

EXPORTS['image-url'] = 
    plt.baselib.functions.renameProcedure(EXPORTS['bitmap/url'],
                                          'image-url');




EXPORTS['overlay'] = 
    makePrimitiveProcedure(
        'overlay',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "overlay", 0);
	    var img2 = checkImage(MACHINE, "overlay", 1);
            var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
		restImages.push(checkImage(MACHINE, "overlay", i));
	    }
            
	    var img = makeOverlayImage(img1, img2, "middle", "middle");
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img, restImages[i], "middle", "middle");
	    }
	    return img;
        });



EXPORTS['overlay/xy'] = 
    makePrimitiveProcedure(
        'overlay/xy',
        4,
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "overlay/xy", 0);
	    var deltaX = checkReal(MACHINE, "overlay/xy", 1);
	    var deltaY = checkReal(MACHINE, "overlay/xy", 2);
	    var img2 = checkImage(MACHINE, "overlay/xy", 3);
	    return makeOverlayImage(img1.updatePinhole(0, 0),
				    img2.updatePinhole(0, 0),
				    jsnums.toFixnum(deltaX),
				    jsnums.toFixnum(deltaY));
        });



 EXPORTS['overlay/align'] = 
     makePrimitiveProcedure(
         'overlay/align',
         plt.baselib.arity.makeArityAtLeast(4),
         function(MACHINE) {
	     var placeX = checkPlaceX(MACHINE, "overlay/align", 0);
	     var placeY = checkPlaceY(MACHINE, "overlay/align", 1);
	     var img1 = checkImage(MACHINE, "overlay/align", 2);
	     var img2 = checkImage(MACHINE, "overlay/align", 3);
             var restImages = [];
	     for (var i = 4; i < MACHINE.a; i++) {
                 restImages.push(checkImage(MACHINE, "overlay/align", i));
             }
	     var img = makeOverlayImage(img1,
					img2,
					placeX.toString(),
					placeY.toString());
	     for (var i = 0; i < restImages.length; i++)
		 img = makeOverlayImage(img,
					restImages[i], 
					placeX.toString(), 
					placeY.toString());
	     return img;
         });





EXPORTS['underlay'] = 
    makePrimitiveProcedure(
        'underlay',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "underlay", 0);
	    var img2 = checkImage(MACHINE, "underlay", 1);
	    var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
		restImages.push(checkImage(MACHINE, "underlay", i));
	    }

	    var img = makeOverlayImage(img2, img1, 0, 0);
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(restImages[i], img, 0, 0);
	    }
	    return img;
        });


EXPORTS['underlay/xy'] = 
    makePrimitiveProcedure(
        'underlay/xy',
        4,
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "underlay/xy", 0);
	    var deltaX = checkReal(MACHINE, "underlay/xy", 1);
	    var deltaY = checkReal(MACHINE, "underlay/xy", 2);
	    var img2 = checkImage(MACHINE, "underlay/xy", 3);
	    return makeOverlayImage(img2.updatePinhole(0, 0), 
				    img1.updatePinhole(0, 0),
				    -(jsnums.toFixnum(deltaX)),
				    -(jsnums.toFixnum(deltaY)));
        });

EXPORTS['underlay/align'] = 
    makePrimitiveProcedure(
        'underlay/align',
        plt.baselib.arity.makeArityAtLeast(4),
        function(MACHINE) {
	    var placeX = checkPlaceX(MACHINE, "underlay/align", 0);
	    var placeY = checkPlaceY(MACHINE, "underlay/align", 1);
	    var img1 = checkImage(MACHINE, "underlay/align", 2);
	    var img2 = checkImage(MACHINE, "underlay/align", 3);
            var restImages = [];
            for (var i = 4; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "underlay/align", i));
            }
	    
	    var img = makeOverlayImage(img2,
				       img1,
				       placeX.toString(),
				       placeY.toString());
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(restImages[i], 
				       img,
				       placeX.toString(), 
				       placeY.toString());
            }
	    return img;
        });



EXPORTS['beside'] = 
    makePrimitiveProcedure(
        'beside',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "beside", 0);
	    var img2 = checkImage(MACHINE, "beside", 1);
            var restImages = [];
	    for (var i = 2; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "beside", i));
            }
	    
	    var img = makeOverlayImage(img1,
				       img2,
				       "beside",
				       "middle");
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img, restImages[i], "beside", "middle");
            }

            return img;
	});


EXPORTS['beside/align'] = 
    makePrimitiveProcedure(
        'beside/align',
        plt.baselib.arity.makeArityAtLeast(3),
        function(MACHINE) {
	    var placeY = checkPlaceY(MACHINE, "beside/align", 0);
	    var img1 = checkImage(MACHINE, "beside/align", 1);
	    var img2 = checkImage(MACHINE, "beside/align", 2);
            var restImages = [];
            for (var i = 3; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "beside/align", i));
            }

	    var img = makeOverlayImage(img1,
				       img2,
				       "beside",
				       placeY.toString());
	    
	    for (var i = 0; i < restImages.length; i++) {
		img = makeOverlayImage(img,
				       restImages[i], 
				       "beside",
				       placeY.toString());
            }
	    
	    return img;

        });

EXPORTS['above'] = 
    makePrimitiveProcedure(
        'above',
        plt.baselib.arity.makeArityAtLeast(2),
        function(MACHINE) {
	    var img1 = checkImage(MACHINE, "above", 0);
	    var img2 = checkImage(MACHINE, "above", 1);
	    var restImages = [];
            for (var i = 2; i < MACHINE.a; i++) {
                restImages.push(checkImage(MACHINE, "above", i));
            }
	    
	    var img = makeOverlayImage(img1,
				       img2,
				       "middle",
				       "above");
	    
	    for (var i = 0; i < restImages.length; i++)
		img = makeOverlayImage(img,
				       restImages[i], 
				       "middle",
				       "above");
            return img;
	    
        });

EXPORTS['above/align'] = 
    makePrimitiveProcedure(
        'above/align',
        plt.baselib.arity.makeArityAtLeast(3),
        function(MACHINE) {
	    var placeX = checkPlaceX(MACHINE, "above/align", 0);
	    var img1 = checkImage(MACHINE, "above/align", 1);
	    var img2 = checkImage(MACHINE, "above/align", 2);
            var restImages = [];
            for (var i = 3; i < MACHINE.a; i++) {
	        restImages.push(checkImage(MACHINE, "above/align", i));
            }

	    
	    var img = makeOverlayImage(img1,
				       img2,
				       placeX.toString(),
				       "above");
	    
	    for (var i = 0; i < restImages.length; i++)
		img = makeOverlayImage(img,
				       restImages[i], 
				       placeX.toString(),
				       "above");
	    
	    return img;
        });




EXPORTS['empty-scene'] =
    makePrimitiveProcedure(
        'empty-scene',
	2,
	function(MACHINE) {
	    var width = checkNonNegativeReal(MACHINE, 'empty-scene', 0);
	    var height = checkNonNegativeReal(MACHINE, 'empty-scene', 1);
	    return makeSceneImage(jsnums.toFixnum(width), 
                                  jsnums.toFixnum(height),
                                  [],
                                  true);
	});



EXPORTS['place-image'] = 
    makePrimitiveProcedure(
        'place-image',
        4,
        function(MACHINE) {
	    var picture = checkImage(MACHINE, "place-image", 0);
	    var x = checkReal(MACHINE, "place-image", 1);
	    var y = checkReal(MACHINE, "place-image", 2);
            var background = checkImageOrScene(MACHINE, "place-image", 3);
	    if (isScene(background)) {
		return background.add(picture, jsnums.toFixnum(x), jsnums.toFixnum(y));
	    } else {
		var newScene = makeSceneImage(background.getWidth(),
					      background.getHeight(),
					      [], 
					      false);
		newScene = newScene.add(background.updatePinhole(0, 0), 0, 0);
		newScene = newScene.add(picture, jsnums.toFixnum(x), jsnums.toFixnum(y));
		return newScene;
	    }

        });



EXPORTS['place-image/align'] = 
    makePrimitiveProcedure(
        'place-image/align',
        6,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "place-image/align", 0);
	    var x = checkReal(MACHINE, "place-image/align", 1);
	    var y = checkReal(MACHINE, "place-image/align", 2);
	    var placeX = checkPlaceX(MACHINE, "place-image/align", 3);
	    var placeY = checkPlaceY(MACHINE, "place-image/align", 4);
	    var background = checkImageOrScene(MACHINE, "place-image/align", 5);
	    
	    // calculate x and y based on placeX and placeY
	    if (placeX == "left") x = x + img.pinholeX;
	    else if (placeX == "right") x = x - img.pinholeX;
	    if (placeY == "top") y = y + img.pinholeY;
	    else if (placeY == "bottom") y = y - img.pinholeY;

	    if (isScene(background)) {
		return background.add(img, jsnums.toFixnum(x), jsnums.toFixnum(y));
	    } else {
		var newScene = makeSceneImage(background.getWidth(),
					      background.getHeight(),
					      [], 
					      false);
		newScene = newScene.add(background.updatePinhole(0, 0), 0, 0);
		newScene = newScene.add(img, jsnums.toFixnum(x), jsnums.toFixnum(y));
		return newScene;
            }
        });







EXPORTS['rotate'] = 
    makePrimitiveProcedure(
        'rotate',
        2,
        function(MACHINE) {
	    var angle = checkAngle(MACHINE, "rotate", 0);
	    var img = checkImage(MACHINE, "rotate", 1);
	    return makeRotateImage(jsnums.toFixnum(-angle), img);
        });



EXPORTS['scale'] = 
    makePrimitiveProcedure(
        'scale',
        2,
        function(MACHINE) {
	    var factor = checkReal(MACHINE, "scale", 0);
	    var img = checkImage(MACHINE, "image", 1);
	    
	    return makeScaleImage(jsnums.toFixnum(factor),
				  jsnums.toFixnum(factor),
				  img);
        });


EXPORTS['scale/xy'] = 
    makePrimitiveProcedure(
        'scale/xy',
        3,
        function(MACHINE) {
	    var xFactor = checkReal(MACHINE, "scale/xy", 0);
	    var yFactor = checkReal(MACHINE, "scale/xy", 1);
	    var img = checkImage(MACHINE, "scale/xy", 2);
	    return makeScaleImage(jsnums.toFixnum(xFactor), 
				  jsnums.toFixnum(yFactor),
				  img);
	    
        });


EXPORTS['flip-horizontal'] = 
    makePrimitiveProcedure(
        'flip-horizontal',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "flip-horizontal", 0);
	    return makeFlipImage(img, "horizontal");
        });


EXPORTS['flip-vertical'] = 
    makePrimitiveProcedure(
        'flip-vertical',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "flip-vertical", 0);
	    return makeFlipImage(img, "vertical");
        });


EXPORTS['frame'] = 
    makePrimitiveProcedure(
        'frame',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "frame", 0);
	    return makeFrameImage(img);            
        });


EXPORTS['crop'] = 
    makePrimitiveProcedure(
        'crop',
        5,
        function(MACHINE) {
            var x = checkReal(MACHINE, "crop", 0);
	    var y = checkReal(MACHINE, "crop", 1);
	    var width = checkNonNegativeReal(MACHINE, "crop", 2);
	    var height = checkNonNegativeReal(MACHINE, "crop", 3);
	    var img = checkImage(MACHINE, "crop", 4);
	    return makeCropImage(jsnums.toFixnum(x),
				 jsnums.toFixnum(y),
				 jsnums.toFixnum(width),
				 jsnums.toFixnum(height),
				 img);
        });



EXPORTS['line'] = 
    makePrimitiveProcedure(
        'line',
        3,
        function(MACHINE) {
	    var x = checkReal(MACHINE, 'line', 0);
	    var y = checkReal(MACHINE, 'line', 1);
	    var c = checkColor(MACHINE, 'line', 2);
	    return makeLineImage(jsnums.toFixnum(x),
				 jsnums.toFixnum(y),
				 c,
				 true);
        });




EXPORTS['add-line'] = 
    makePrimitiveProcedure(
        'add-line',
        6,
        function(MACHINE) {
	    var img = checkImage(MACHINE, "add-line", 0);
	    var x1 = checkReal(MACHINE, "add-line", 1);
	    var y1 = checkReal(MACHINE, "add-line", 2);
	    var x2 = checkReal(MACHINE, "add-line", 3);
	    var y2 = checkReal(MACHINE, "add-line", 4);
	    var c = checkColor(MACHINE, "add-line", 5);
	    var line = makeLineImage(jsnums.toFixnum(x2-x1),
				     jsnums.toFixnum(y2-y1),
				     c,
				     true);
	    return makeOverlayImage(line, img, x1, y1);
        });



EXPORTS['scene+line'] = 
    makePrimitiveProcedure(
        'scene+line',
        6,
        function(MACHINE) {
            var img = checkImage(MACHINE, "scene+line", 0);
	    var x1 = checkReal(MACHINE, "scene+line", 1);
	    var y1 = checkReal(MACHINE, "scene+line", 2);
	    var x2 = checkReal(MACHINE, "scene+line", 3);
	    var y2 = checkReal(MACHINE,	"scene+line", 4);
	    var c = checkColor(MACHINE, "scene+line", 5);
	    // make a scene containing the image
	    var newScene = makeSceneImage(jsnums.toFixnum(img.getWidth()), 
					  jsnums.toFixnum(img.getHeight()), 
					  [],
					  true);
	    newScene = newScene.add(img.updatePinhole(0, 0), 0, 0);
	    // make an image containing the line
	    var line = makeLineImage(jsnums.toFixnum(x2-x1),
				     jsnums.toFixnum(y2-y1),
				     c,
				     false);
	    // add the line to scene, offset by the original amount
	    return newScene.add(line, jsnums.toFixnum(x1), jsnums.toFixnum(y1));
        });


EXPORTS['circle'] = 
    makePrimitiveProcedure(
        'circle',
        3,
        function(MACHINE) {
            var aRadius = checkNonNegativeReal(MACHINE, "circle", 0);
	    var aMode = checkMode(MACHINE, "circle", 1);
	    var aColor = checkColor(MACHINE, "circle", 2);
	    return makeCircleImage(jsnums.toFixnum(aRadius), aMode.toString(), aColor);
        });


EXPORTS['square'] = 
    makePrimitiveProcedure(
        'square',
        3,
        function(MACHINE) {
	    var l = checkNonNegativeReal(MACHINE, "square", 0);
	    var s = checkMode(MACHINE, "square", 1);
	    var c = checkColor(MACHINE, "square", 2);
	    return makeSquareImage(jsnums.toFixnum(l), s.toString(), c);
        });


EXPORTS['rectangle'] = 
    makePrimitiveProcedure(
        'rectangle',
        4,
        function(MACHINE) {
	    var w = checkNonNegativeReal(MACHINE, "rectangle", 0);
	    var h = checkNonNegativeReal(MACHINE, "rectangle", 1);
	    var s = checkMode(MACHINE, "rectangle", 2);
	    var c = checkColor(MACHINE, "rectangle", 3);
	    return makeRectangleImage(jsnums.toFixnum(w),
				      jsnums.toFixnum(h),
				      s.toString(), 
                                      c);
        });


EXPORTS['regular-polygon'] = 
    makePrimitiveProcedure(
        'regular-polygon',
        4,
        function(MACHINE) {
	    var length = checkNonNegativeReal(MACHINE, "regular-polygon", 0);
	    var count = checkSideCount(MACHINE, "regular-polygon", 1);
	    var s = checkMode(MACHINE, "regular-polygon", 2);
	    var c = checkColor(MACHINE, "regular-polygon", 3);
	    return makePolygonImage(jsnums.toFixnum(length), 
				    jsnums.toFixnum(count), 
				    jsnums.toFixnum(1), 
				    s.toString(), 
				    c);            
        });


EXPORTS['ellipse'] = 
    makePrimitiveProcedure(
        'ellipse',
        4,
        function(MACHINE) {
            var w = checkNonNegativeReal(MACHINE, "ellipse", 0);
	    var h = checkNonNegativeReal(MACHINE, "ellipse", 1);
	    var s = checkMode(MACHINE, "ellipse", 2);
	    var c = checkColor(MACHINE, MACHINE, 3);
	    return makeEllipseImage(jsnums.toFixnum(w),
				    jsnums.toFixnum(h),
				    s.toString(),
				    c);
        });



EXPORTS['triangle'] = 
    makePrimitiveProcedure(
        'triangle',
        3,
        function(MACHINE) {
	    var s = checkNonNegativeReal(MACHINE, "triangle", 0);
	    var m = checkMode(MACHINE, "triangle", 1);
	    var c = checkColor(MACHINE, "triangle", 2);
	    return makeTriangleImage(jsnums.toFixnum(s), 
				     60, 
				     m.toString(),
				     c);
        });


EXPORTS['right-triangle'] = 
    makePrimitiveProcedure(
        'right-triangle',
        4,
        function(MACHINE) {
	    var side1 = checkNonNegativeReal(MACHINE, "right-triangle", 0);
	    var side2 = checkNonNegativeReal(MACHINE, "right-triangle", 1);
	    var s = checkMode(MACHINE, "right-triangle", 2);
	    var c = checkColor(MACHINE, "right-triangle", 3);
	    return makeRightTriangleImage(jsnums.toFixnum(side1), 
                                          jsnums.toFixnum(side2),
                                          s.toString(),
                                          c);
        });


EXPORTS['isosceles-triangle'] = 
    makePrimitiveProcedure(
        'isosceles-triangle',
        4,
        function(MACHINE) {
	    var side = checkNonNegativeReal(MACHINE, "isosceles-triangle", 0);
	    var angle = checkAngle(MACHINE, "isosceles-triangle", 1);
	    var s = checkMode(MACHINE, "isosceles-triangle", 2);
	    var c = checkColor(MACHINE, "isosceles-triangle", 3);
	    return makeTriangleImage(jsnums.toFixnum(side), 
                                     jsnums.toFixnum(angle), 
                                     s.toString(),
                                     c);
        });


EXPORTS['star'] = 
    makePrimitiveProcedure(
        'star',
        plt.baselib.lists.makeList(3, 5),
        function(MACHINE) {
            if (MACHINE.a === 3) {
                var sideLength = checkNonNegativeReal(MACHINE, "star", 0);
		var mode = checkMode(MACHINE, "star", 1);
		var color = checkColor(MACHINE, "star", 2);
		return makePolygonImage(jsnums.toFixnum(sideLength), 
					jsnums.toFixnum(5), 
					jsnums.toFixnum(2), 
					mode.toString(), 
					color);
            } else if (MACHINE.a === 5) {
		var n = checkSideCount(MACHINE, "star", 0);
		var outer = checkNonNegativeReal(MACHINE, "star", 1);
		var inner = checkNonNegativeReal(MACHINE, "star", 2);
		var m = checkMode(MACHINE, "star", 3);
		var c = checkColor(MACHINE, "star", 4);
		return makeStarImage(jsnums.toFixnum(n),
				     jsnums.toFixnum(outer),
				     jsnums.toFixnum(inner),
				     m.toString(),
				     c);
            }
        });

EXPORTS['radial-star'] = 
    makePrimitiveProcedure(
        'radial-star',
        5,
        function(MACHINE) {
            var aPoints = checkPointsCount(MACHINE, 'radial-star', 0);
	    var anOuter = checkNonNegativeReal(MACHINE, 'radial-star', 1);
	    var anInner = checkNonNegativeReal(MACHINE, 'radial-star', 2);
	    var aStyle = checkMode(MACHINE, "radial-star", 3);
	    var aColor = checkColor(MACHINE, "radial-star", 4);
	    return makeStarImage(jsnums.toFixnum(aPoints),
				 jsnums.toFixnum(anOuter),
				 jsnums.toFixnum(anInner),
				 aStyle.toString(),
				 aColor);
        });



EXPORTS['star-polygon'] = 
    makePrimitiveProcedure(
        'star-polygon',
        5,
        function(MACHINE) {
            var length = checkNonNegativeReal(MACHINE, "star-polygon", 0);
	    var count = checkNonNegativeReal(MACHINE, "star-polygon", 1);
	    var step = checkStepCount(MACHINE, "star-polygon", 2);
	    var s = checkMode(MACHINE, "star-polygon", 3);
	    var c = checkColor(MACHINE, "star-polygon", 4);
	    return makePolygonImage(jsnums.toFixnum(length), 
				    jsnums.toFixnum(count), 
				    jsnums.toFixnum(step), 
				    s.toString(), 
				    c);
        });


EXPORTS['rhombus'] = 
    makePrimitiveProcedure(
        'rhombus',
        4,
        function(MACHINE) {
            var l = checkNonNegativeReal(MACHINE, "rhombus", 0);
	    var a = checkNonNegativeReal(MACHINE, "rhombus", 1);
	    var s = checkMode(MACHINE, "rhombus", 2);
	    var c = checkColor(MACHINE, "rhombus", 3);
	    return makeRhombusImage(jsnums.toFixnum(l),
                                    jsnums.toFixnum(a),
                                    s.toString(),
                                    c);
	    
        });


EXPORTS['image->color-list'] = 
    makePrimitiveProcedure(
        'image->color-list',
        1,
        function(MACHINE) {
            var img = checkImage(MACHINE, 'image->color-list', 0);
            return imageToColorList(img);
        });



EXPORTS['color-list->image'] = 
    makePrimitiveProcedure(
        'color-list->image',
        5,
        function(MACHINE) {
            var listOfColors = checkListofColor(MACHINE, 'color-list->image', 0);
	    var width = checkNatural(MACHINE, 'color-list->image', 1);
	    var height = checkNatural(MACHINE, 'color-list->image', 2);
	    var pinholeX = checkNatural(MACHINE, 'color-list->image', 3);
	    var pinholeY = checkNatural(MACHINE, 'color-list->image', 4);

            return colorListToImage(listOfColors,
                                    width,
                                    height,
                                    pinholeX,
                                    pinholeY);
        });

EXPORTS['color-list->bitmap'] = 
    makePrimitiveProcedure(
        'color-list->image',
        3,
        function(MACHINE) {
            var listOfColors = checkListofColor(MACHINE, 'color-list->image', 0);
	    var width = checkNatural(MACHINE, 'color-list->image', 1);
	    var height = checkNatural(MACHINE, 'color-list->image', 2);
            return colorListToImage(listOfColors,
                                    width,
                                    height,
                                    0,
                                    0);
        });


EXPORTS['image-width'] = 
    makePrimitiveProcedure(
        'image-width',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-width', 0);
	    return img.getWidth();
        });

EXPORTS['image-height'] = 
    makePrimitiveProcedure(
        'image-height',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-height', 0);
	    return img.getHeight();
        });

EXPORTS['image-baseline'] = 
    makePrimitiveProcedure(
        'image-baseline',
        1,
        function(MACHINE) {
	    var img = checkImage(MACHINE, 'image-baseline', 0);
	    return img.getBaseline();
        });


EXPORTS['name->color'] = 
    makePrimitiveProcedure(
        'name->color',
        1,
        function(MACHINE) {
            var name = checkSymbolOrString(MACHINE, 'name->color', 0);
            var result = colorDb.get('' + name) || false;
            return result;
        });})(M, exports);
             ns.set("above14.27",exports["above"]);
extNs.set("above",exports["above"]);
modrec.prefix[0]=exports["above"];
ns.set("above/align15.29",exports["above/align"]);
extNs.set("above/align",exports["above/align"]);
modrec.prefix[1]=exports["above/align"];
ns.set("add-line27.53",exports["add-line"]);
extNs.set("add-line",exports["add-line"]);
modrec.prefix[2]=exports["add-line"];
ns.set("angle?51.101",exports["angle?"]);
extNs.set("angle?",exports["angle?"]);
modrec.prefix[3]=exports["angle?"];
ns.set("beside12.23",exports["beside"]);
extNs.set("beside",exports["beside"]);
modrec.prefix[4]=exports["beside"];
ns.set("beside/align13.25",exports["beside/align"]);
extNs.set("beside/align",exports["beside/align"]);
modrec.prefix[5]=exports["beside/align"];
ns.set("bitmap/url3.5",exports["bitmap/url"]);
extNs.set("bitmap/url",exports["bitmap/url"]);
modrec.prefix[6]=exports["bitmap/url"];
ns.set("circle29.57",exports["circle"]);
extNs.set("circle",exports["circle"]);
modrec.prefix[7]=exports["circle"];
ns.set("color-list->bitmap43.85",exports["color-list->bitmap"]);
extNs.set("color-list->bitmap",exports["color-list->bitmap"]);
modrec.prefix[8]=exports["color-list->bitmap"];
ns.set("color-list->image42.83",exports["color-list->image"]);
extNs.set("color-list->image",exports["color-list->image"]);
modrec.prefix[9]=exports["color-list->image"];
ns.set("crop25.49",exports["crop"]);
extNs.set("crop",exports["crop"]);
modrec.prefix[10]=exports["crop"];
ns.set("ellipse33.65",exports["ellipse"]);
extNs.set("ellipse",exports["ellipse"]);
modrec.prefix[11]=exports["ellipse"];
ns.set("empty-scene16.31",exports["empty-scene"]);
extNs.set("empty-scene",exports["empty-scene"]);
modrec.prefix[12]=exports["empty-scene"];
ns.set("flip-horizontal22.43",exports["flip-horizontal"]);
extNs.set("flip-horizontal",exports["flip-horizontal"]);
modrec.prefix[13]=exports["flip-horizontal"];
ns.set("flip-vertical23.45",exports["flip-vertical"]);
extNs.set("flip-vertical",exports["flip-vertical"]);
modrec.prefix[14]=exports["flip-vertical"];
ns.set("frame24.47",exports["frame"]);
extNs.set("frame",exports["frame"]);
modrec.prefix[15]=exports["frame"];
ns.set("image->color-list41.81",exports["image->color-list"]);
extNs.set("image->color-list",exports["image->color-list"]);
modrec.prefix[16]=exports["image->color-list"];
ns.set("image-baseline46.91",exports["image-baseline"]);
extNs.set("image-baseline",exports["image-baseline"]);
modrec.prefix[17]=exports["image-baseline"];
ns.set("image-color?47.93",exports["image-color?"]);
extNs.set("image-color?",exports["image-color?"]);
modrec.prefix[18]=exports["image-color?"];
ns.set("image-height45.89",exports["image-height"]);
extNs.set("image-height",exports["image-height"]);
modrec.prefix[19]=exports["image-height"];
ns.set("image-url4.7",exports["image-url"]);
extNs.set("image-url",exports["image-url"]);
modrec.prefix[20]=exports["image-url"];
ns.set("image-width44.87",exports["image-width"]);
extNs.set("image-width",exports["image-width"]);
modrec.prefix[21]=exports["image-width"];
ns.set("image?54.107",exports["image?"]);
extNs.set("image?",exports["image?"]);
modrec.prefix[22]=exports["image?"];
ns.set("isosceles-triangle36.71",exports["isosceles-triangle"]);
extNs.set("isosceles-triangle",exports["isosceles-triangle"]);
modrec.prefix[23]=exports["isosceles-triangle"];
ns.set("line26.51",exports["line"]);
extNs.set("line",exports["line"]);
modrec.prefix[24]=exports["line"];
ns.set("mode?48.95",exports["mode?"]);
extNs.set("mode?",exports["mode?"]);
modrec.prefix[25]=exports["mode?"];
ns.set("name->color55.109",exports["name->color"]);
extNs.set("name->color",exports["name->color"]);
modrec.prefix[26]=exports["name->color"];
ns.set("open-image-url5.9",exports["open-image-url"]);
extNs.set("open-image-url",exports["open-image-url"]);
modrec.prefix[27]=exports["open-image-url"];
ns.set("overlay6.11",exports["overlay"]);
extNs.set("overlay",exports["overlay"]);
modrec.prefix[28]=exports["overlay"];
ns.set("overlay/align8.15",exports["overlay/align"]);
extNs.set("overlay/align",exports["overlay/align"]);
modrec.prefix[29]=exports["overlay/align"];
ns.set("overlay/xy7.13",exports["overlay/xy"]);
extNs.set("overlay/xy",exports["overlay/xy"]);
modrec.prefix[30]=exports["overlay/xy"];
ns.set("place-image17.33",exports["place-image"]);
extNs.set("place-image",exports["place-image"]);
modrec.prefix[31]=exports["place-image"];
ns.set("place-image/align18.35",exports["place-image/align"]);
extNs.set("place-image/align",exports["place-image/align"]);
modrec.prefix[32]=exports["place-image/align"];
ns.set("radial-star38.75",exports["radial-star"]);
extNs.set("radial-star",exports["radial-star"]);
modrec.prefix[33]=exports["radial-star"];
ns.set("rectangle31.61",exports["rectangle"]);
extNs.set("rectangle",exports["rectangle"]);
modrec.prefix[34]=exports["rectangle"];
ns.set("regular-polygon32.63",exports["regular-polygon"]);
extNs.set("regular-polygon",exports["regular-polygon"]);
modrec.prefix[35]=exports["regular-polygon"];
ns.set("rhombus40.79",exports["rhombus"]);
extNs.set("rhombus",exports["rhombus"]);
modrec.prefix[36]=exports["rhombus"];
ns.set("right-triangle35.69",exports["right-triangle"]);
extNs.set("right-triangle",exports["right-triangle"]);
modrec.prefix[37]=exports["right-triangle"];
ns.set("rotate19.37",exports["rotate"]);
extNs.set("rotate",exports["rotate"]);
modrec.prefix[38]=exports["rotate"];
ns.set("scale20.39",exports["scale"]);
extNs.set("scale",exports["scale"]);
modrec.prefix[39]=exports["scale"];
ns.set("scale/xy21.41",exports["scale/xy"]);
extNs.set("scale/xy",exports["scale/xy"]);
modrec.prefix[40]=exports["scale/xy"];
ns.set("scene+line28.55",exports["scene+line"]);
extNs.set("scene+line",exports["scene+line"]);
modrec.prefix[41]=exports["scene+line"];
ns.set("side-count?52.103",exports["side-count?"]);
extNs.set("side-count?",exports["side-count?"]);
modrec.prefix[42]=exports["side-count?"];
ns.set("square30.59",exports["square"]);
extNs.set("square",exports["square"]);
modrec.prefix[43]=exports["square"];
ns.set("star37.73",exports["star"]);
extNs.set("star",exports["star"]);
modrec.prefix[44]=exports["star"];
ns.set("star-polygon39.77",exports["star-polygon"]);
extNs.set("star-polygon",exports["star-polygon"]);
modrec.prefix[45]=exports["star-polygon"];
ns.set("step-count?53.105",exports["step-count?"]);
extNs.set("step-count?",exports["step-count?"]);
modrec.prefix[46]=exports["step-count?"];
ns.set("text1.1",exports["text"]);
extNs.set("text",exports["text"]);
modrec.prefix[47]=exports["text"];
ns.set("text/font2.3",exports["text/font"]);
extNs.set("text/font",exports["text/font"]);
modrec.prefix[48]=exports["text/font"];
ns.set("triangle34.67",exports["triangle"]);
extNs.set("triangle",exports["triangle"]);
modrec.prefix[49]=exports["triangle"];
ns.set("underlay9.17",exports["underlay"]);
extNs.set("underlay",exports["underlay"]);
modrec.prefix[50]=exports["underlay"];
ns.set("underlay/align11.21",exports["underlay/align"]);
extNs.set("underlay/align",exports["underlay/align"]);
modrec.prefix[51]=exports["underlay/align"];
ns.set("underlay/xy10.19",exports["underlay/xy"]);
extNs.set("underlay/xy",exports["underlay/xy"]);
modrec.prefix[52]=exports["underlay/xy"];
ns.set("x-place?49.97",exports["x-place?"]);
extNs.set("x-place?",exports["x-place?"]);
modrec.prefix[53]=exports["x-place?"];
ns.set("y-place?50.99",exports["y-place?"]);
extNs.set("y-place?",exports["y-place?"]);
modrec.prefix[54]=exports["y-place?"];

             modrec.privateExports = exports;
             return M.c.pop().label(M); };
        plt.runtime.PAUSE(function(restart) {
             var modName = "whalesong/image/private/color.rkt";
             plt.runtime.currentModuleLoader(M,
                                             modName,
                                             function() {
                                                restart(function(M) {
                                                    M.modules[modName] = M.installedModules[modName]();
                                                    if (! M.modules[modName].isInvoked) {
                                                        M.modules[modName].internalInvoke(M,
                                                                                     afterName3145,
                                                                                      M.params.currentErrorHandler);
                                                    } else {
                                                        afterName3145();
                                                    }
                                                })
                                             },
                                             function() {
                                                alert('Could not load ' + modName);
                                             })
       });     
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/image/private/color.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _545=function(M){if(--M.cbt<0){throw _545;}
if((M.a-7)===0){return(_541)(M);}else{RT.si_context_expected(7)(M);
}};

var _542=function(M){if(--M.cbt<0){throw _542;}
if((M.a-5)===0){return(_544)(M);}else{RT.si_context_expected(5)(M);
}};

var _539=function(M){if(--M.cbt<0){throw _539;}
M.c.push(new RT.PromptFrame(_549,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_522,3,[M.e[M.e.length-3]],"...rivate/color.rkt:12:4");
M.e[M.e.length-2]=new RT.Closure(_523,4,[M.e[M.e.length-3]],"...rivate/color.rkt:14:4");
M.v=new RT.Closure(_521,RT.makePair(3,RT.makePair(4,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"-color");
M.e.length-=2;
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _523=function(M){if(--M.cbt<0){throw _523;}

//"lambda body for #(struct:LamPositionalName ...rivate/color.rkt:14:4 whalesong/image/private/color.rkt 14 4 329 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][1];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _538=function(M){if(--M.cbt<0){throw _538;}
M.e.length-=(M.a-1);
return(_539)(M);};

var _534=function(M){M.modules["whalesong/image/private/color.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_535)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_535);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_535)(M);}};

var _521=function(M){if(--M.cbt<0){throw _521;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_527)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_522)(M);}};

var _537=function(M){if(--M.cbt<0){throw _537;}
M.e.push([M.params.currentNamespace.get("struct:color")||M.primitives["struct:color"],M.params.currentNamespace.get("make-color")||M.primitives["make-color"],M.params.currentNamespace.get("color?")||M.primitives["color?"],M.params.currentNamespace.get("color-red")||M.primitives["color-red"],M.params.currentNamespace.get("color-green")||M.primitives["color-green"],M.params.currentNamespace.get("color-blue")||M.primitives["color-blue"],M.params.currentNamespace.get("color-alpha")||M.primitives["color-alpha"],M.params.currentNamespace.get("-color")||M.primitives["-color"]]);M.e[M.e.length-1].names=["struct:color","make-color","color?","color-red","color-green","color-blue","color-alpha","-color"];
M.modules["whalesong/image/private/color.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_539,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym3242;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=4;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.makePair(0,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.NULL))));
M.e[M.e.length-10]=false;
M.v=sym3242;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_543,M.p));
return((M.p).label)(M);};

var _525=function(M){if(--M.cbt<0){throw _525;}
M.e.length-=(M.a-1);
return(_526)(M);};

var _548=function(M){if(--M.cbt<0){throw _548;}
M.e.length-=(M.a-1);
return(_549)(M);};

var _522=function(M){if(--M.cbt<0){throw _522;}

//"lambda body for #(struct:LamPositionalName ...rivate/color.rkt:12:4 whalesong/image/private/color.rkt 12 4 292 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][1];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=255;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _543=RT.si_context_expected(5);

var _544=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym3243;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym3244;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=2;
M.e[M.e.length-3]=sym3245;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=3;
M.e[M.e.length-3]=sym3246;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_546,M.p));
return((M.p).label)(M);};

var _536=function(M){if(--M.cbt<0){throw _536;}
M.e.length-=(M.a-1);
return(_537)(M);};

var _546=RT.si_context_expected(7);

var _527=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_522)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_523)(M);}};

var _549=function(M){if(--M.cbt<0){throw _549;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);extNs.set("color-alpha", prefix[selfMod.getPrefixOffset("color-alpha")]);ns.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);extNs.set("color-blue", prefix[selfMod.getPrefixOffset("color-blue")]);ns.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);extNs.set("color-green", prefix[selfMod.getPrefixOffset("color-green")]);ns.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);extNs.set("color-red", prefix[selfMod.getPrefixOffset("color-red")]);ns.set("color?", prefix[selfMod.getPrefixOffset("color?")]);extNs.set("color?", prefix[selfMod.getPrefixOffset("color?")]);ns.set("-color", prefix[selfMod.getPrefixOffset("-color")]);extNs.set("make-color", prefix[selfMod.getPrefixOffset("-color")]);ns.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);extNs.set("struct:color", prefix[selfMod.getPrefixOffset("struct:color")]);}(M.modules["whalesong/image/private/color.rkt"],M.modules["whalesong/image/private/color.rkt"].getExports(),M.modules["whalesong/image/private/color.rkt"].getExternalExports(),M.modules["whalesong/image/private/color.rkt"].prefix));
return(M.p)(M);};

var _535=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_537)(M);}else{M.c.push(new RT.CallFrame(_537,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _524=function(M){M.c.push(new RT.PromptFrame(_526,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/image/private/color.rkt"]=function(){return new RT.ModuleRecord("color",_534);}
return(_533)(M);};

var _541=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][0]=M.v;
M.e[M.e.length-7][1]=M.e[M.e.length-1];
M.e[M.e.length-7][2]=M.e[M.e.length-2];
M.e[M.e.length-7][3]=M.e[M.e.length-3];
M.e[M.e.length-7][4]=M.e[M.e.length-4];
M.e[M.e.length-7][5]=M.e[M.e.length-5];
M.e[M.e.length-7][6]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _533=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _550=function(M){return(_524)(M);};

var _526=function(M){if(--M.cbt<0){throw _526;}
};

_537.mvr=_536;
_543.mvr=_542;
_546.mvr=_545;
_539.mvr=_538;
_549.mvr=_548;
_526.mvr=_525;
var sym3243=RT.makeSymbol("red");
var sym3246=RT.makeSymbol("alpha");
var sym3244=RT.makeSymbol("green");
var sym3242=RT.makeSymbol("color");
var sym3245=RT.makeSymbol("blue");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_550(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/private/color.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/image/private/color.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/base.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _553=function(M){if(--M.cbt<0){throw _553;}
};

var _569=function(M){if(--M.cbt<0){throw _569;}
M.e.length-=(M.a-1);
return(_570)(M);};

var _563=function(M){if(--M.cbt<0){throw _563;}
M.e.length-=(M.a-1);
return(_564)(M);};

var _560=function(M){if(--M.cbt<0){throw _560;}
M.e.length-=(M.a-1);
return(_561)(M);};

var _557=function(M){if(--M.cbt<0){throw _557;}
M.e.length-=(M.a-1);
return(_558)(M);};

var _555=function(M){M.modules["whalesong/lang/base.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/list.rkt"]!==void(0)&&M.modules["whalesong/lang/private/list.rkt"]!==undefined)!==false){return(_556)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_556);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_556)(M);}};

var _574=function(M){return(_551)(M);};

var _571=function(M){if(M.modules["collects/racket/private/modbeg.rkt"].isInvoked!==false){return(_573)(M);}else{M.c.push(new RT.CallFrame(_573,M.p));
return(M.modules["collects/racket/private/modbeg.rkt"].label)(M);}};

var _554=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _562=function(M){if(M.modules["whalesong/lang/private/hash.rkt"].isInvoked!==false){return(_564)(M);}else{M.c.push(new RT.CallFrame(_564,M.p));
return(M.modules["whalesong/lang/private/hash.rkt"].label)(M);}};

var _568=function(M){if(M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked!==false){return(_570)(M);}else{M.c.push(new RT.CallFrame(_570,M.p));
return(M.modules["whalesong/lang/private/qq-and-or.rkt"].label)(M);}};

var _551=function(M){M.c.push(new RT.PromptFrame(_553,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/base.rkt"]=function(){return new RT.ModuleRecord("base",_555);}
return(_554)(M);};

var _573=function(M){if(--M.cbt<0){throw _573;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/base.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/base.rkt"],M.modules["whalesong/lang/base.rkt"].getExports(),M.modules["whalesong/lang/base.rkt"].getExternalExports(),M.modules["whalesong/lang/base.rkt"].prefix));
return(M.p)(M);};

var _559=function(M){if(M.modules["whalesong/lang/private/map.rkt"].isInvoked!==false){return(_561)(M);}else{M.c.push(new RT.CallFrame(_561,M.p));
return(M.modules["whalesong/lang/private/map.rkt"].label)(M);}};

var _565=function(M){if(M.modules["whalesong/lang/list.rkt"].isInvoked!==false){return(_567)(M);}else{M.c.push(new RT.CallFrame(_567,M.p));
return(M.modules["whalesong/lang/list.rkt"].label)(M);}};

var _572=function(M){if(--M.cbt<0){throw _572;}
M.e.length-=(M.a-1);
return(_573)(M);};

var _570=function(M){if(--M.cbt<0){throw _570;}
if((M.installedModules["collects/racket/private/modbeg.rkt"]!==void(0)&&M.modules["collects/racket/private/modbeg.rkt"]!==undefined)!==false){return(_571)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "collects/racket/private/modbeg.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_571);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_571)(M);}};

var _552=function(M){if(--M.cbt<0){throw _552;}
M.e.length-=(M.a-1);
return(_553)(M);};

var _561=function(M){if(--M.cbt<0){throw _561;}
if((M.installedModules["whalesong/lang/private/hash.rkt"]!==void(0)&&M.modules["whalesong/lang/private/hash.rkt"]!==undefined)!==false){return(_562)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/hash.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_562);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_562)(M);}};

var _558=function(M){if(--M.cbt<0){throw _558;}
if((M.installedModules["whalesong/lang/private/map.rkt"]!==void(0)&&M.modules["whalesong/lang/private/map.rkt"]!==undefined)!==false){return(_559)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/map.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_559);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_559)(M);}};

var _566=function(M){if(--M.cbt<0){throw _566;}
M.e.length-=(M.a-1);
return(_567)(M);};

var _564=function(M){if(--M.cbt<0){throw _564;}
if((M.installedModules["whalesong/lang/list.rkt"]!==void(0)&&M.modules["whalesong/lang/list.rkt"]!==undefined)!==false){return(_565)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/list.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_565);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_565)(M);}};

var _556=function(M){if(M.modules["whalesong/lang/private/list.rkt"].isInvoked!==false){return(_558)(M);}else{M.c.push(new RT.CallFrame(_558,M.p));
return(M.modules["whalesong/lang/private/list.rkt"].label)(M);}};

var _567=function(M){if(--M.cbt<0){throw _567;}
if((M.installedModules["whalesong/lang/private/qq-and-or.rkt"]!==void(0)&&M.modules["whalesong/lang/private/qq-and-or.rkt"]!==undefined)!==false){return(_568)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/qq-and-or.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_568);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_568)(M);}};

_558.mvr=_557;
_561.mvr=_560;
_564.mvr=_563;
_567.mvr=_566;
_570.mvr=_569;
_573.mvr=_572;
_553.mvr=_552;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_574(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/base.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/base.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _899=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_904,M.p));
return((M.p).label)(M);};

var _1326=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1300=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][63];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=RT.checkedAdd1(M, M.e[M.e.length-12]);
M.v=RT.makePair(M.e[M.e.length-10],M.e[M.e.length-13]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _841=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_866)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1279=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_641)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_643)(M);}};

var _1250=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _783=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_788,M.p));
return((M.p).label)(M);};

var _781=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym3438;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1224=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _770=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3439;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_771)(M);};

var _754=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][45];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _756=function(M){if(M.v===false){return(_753)(M);}else{M.v=RT.VOID;
return(_754)(M);}};

var _734=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym3440;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _729=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_586)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_587)(M);}};

var _714=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_722,M.p));
return((M.p).label)(M);};

var _702=function(M){M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_703)(M);}else{M.v=M.e[M.e.length-2];
M.v=RT.VOID;
return(_704)(M);}};

var _692=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym3441;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _680=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_576_c;
M.a=3;
M.c.push(new RT.CallFrame(_686,M.p));
return(_576)(M);};

var _909=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][49];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _883=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _878=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_923)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1299=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym3443;
M.e[M.e.length-3]="procedure (arity 1)";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1302,M.p));
return((M.p).label)(M);};

var _1294=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_1297)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1299)(M);}else{M.v=RT.VOID;
return(_1300)(M);}}};

var _832=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym3444;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1257=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _790=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_815)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _776=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_821)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _771=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][46];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _773=function(M){if(M.v===false){return(_770)(M);}else{M.v=RT.VOID;
return(_771)(M);}};

var _761=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3439;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _753=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3445;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_754)(M);};

var _755=function(M){M.v=false;
return(_756)(M);};

var _745=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3445;
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _733=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3440;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_734)(M);};

var _736=function(M){if(M.v===false){return(_733)(M);}else{M.v=RT.VOID;
return(_734)(M);}};

var _1178=function(M){M.v=false;
return(_1179)(M);};

var _704=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_583_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_583)(M);};

var _701=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_702)(M);};

var _691=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3441;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_692)(M);};

var _687=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_578)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_579)(M);}};

var _1134=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_618)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_620)(M);}};

var _674=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_576_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_576)(M);};

var _673=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_674)(M);};

var _1330=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _892=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_917)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _885=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_890,M.p));
return((M.p).label)(M);};

var _1325=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_651,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_652,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_653,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_650,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_1326)(M);};

var _1297=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][62];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-11]);
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_645_c;
M.a=2;
M.c.push(new RT.CallFrame(_1307,M.p));
return(_645)(M);};

var _1293=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym3443;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1296,M.p));
return((M.p).label)(M);};

var _834=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_839,M.p));
return((M.p).label)(M);};

var _1278=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1279)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_642)(M);}};

var _1263=function(M){M.e.push(void(0));
M.e.push(void(0));
M.e[M.e.length-1]=RT.makePair(M.e[M.e.length-4],M.e[M.e.length-5]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-4][60];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _635=function(M){if(--M.cbt<0){throw _635;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:387:34 whalesong/lang/private/list.rkt 387 34 14265 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1252,M.p));
return((M.p).label)(M);};

var _1235=function(M){M.e[M.e.length-2]=new RT.Closure(_634,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:385:34");
return(_1232)(M);};

var _1233=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1237)(M);}else{M.e[M.e.length-2]=new RT.Closure(_635,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:387:34");
return(_1232)(M);}};

var _772=function(M){M.v=false;
return(_773)(M);};

var _1212=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][59];
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1215)(M);}else{M.e[M.e.length-2]=new RT.Closure(_630,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:371:28");
return(_1214)(M);}};

var _759=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_761)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_767,M.p));
return((M.p).label)(M);}};

var _1198=function(M){M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1201,M.p));
return((M.p).label)(M);};

var _743=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_745)(M);}else{M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_750,M.p));
return((M.p).label)(M);}};

var _1194=function(M){if(M.v===false){return(_1191)(M);}else{M.v=RT.VOID;
return(_1192)(M);}};

var _735=function(M){M.v=false;
return(_736)(M);};

var _1175=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1178)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1179)(M);}};

var _708=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.p=_584_c;
M.a=5;
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return(_584)(M);};

var _703=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_704)(M);};

var _1162=function(M){M.v=false;
return(_1163)(M);};

var _694=function(M){if(M.v===false){return(_691)(M);}else{M.v=RT.VOID;
return(_692)(M);}};

var _693=function(M){M.v=false;
return(_694)(M);};

var _684=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _678=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_683,M.p));
return((M.p).label)(M);};

var _1124=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1106=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_613)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_615)(M);}};

var _1083=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="given procedure does not accept 2 arguments: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1081=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1086,M.p));
return((M.p).label)(M);};

var _1214=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1063=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e[M.e.length-3]="list";
M.e[M.e.length-4]=M.e[M.e.length-16];
M.e[M.e.length-5]=M.e[M.e.length-12];
M.e[M.e.length-6]=M.e[M.e.length-13];
M.e[M.e.length-7]=M.e[M.e.length-14];
M.e[M.e.length-8]=M.e[M.e.length-15];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1066,M.p));
return((M.p).label)(M);};

var _1058=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _658=function(M){if(--M.cbt<0){throw _658;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1378,M.p));
return((M.p).label)(M);};

var _897=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _653=function(M){if(--M.cbt<0){throw _653;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1348,M.p));
return((M.p).label)(M);};

var _1322=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_1329)(M);}else{M.e[M.e.length-1]=new RT.Closure(_654,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_1330)(M);}};

var _866=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym3444;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1305=function(M){M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _848=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_853,M.p));
return((M.p).label)(M);};

var _846=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym3444;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _821=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym3438;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1272=function(M){M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1271=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_641,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_642,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_643,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_640,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_1272)(M);};

var _795=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym3438;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _1237=function(M){M.e[M.e.length-2]=new RT.Closure(_636,(RT.makeArityAtLeast(0)),[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:388:34");
return(_1232)(M);};

var _1230=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][60];
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1233)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1235)(M);}else{M.e[M.e.length-2]=new RT.Closure(_633,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:384:34");
return(_1232)(M);}}};

var _1215=function(M){M.e[M.e.length-2]=new RT.Closure(_631,1,[M.e[M.e.length-5],M.e[M.e.length-1]],"...private/list.rkt:372:28");
return(_1214)(M);};

var _1207=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1209=function(M){if(M.v===false){return(_1206)(M);}else{M.v=RT.VOID;
return(_1207)(M);}};

var _747=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][45];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1192=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-3]);
M.a=1;
M.v=M.primitives["make-string"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1193=function(M){M.v=false;
return(_1194)(M);};

var _1183=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1186,M.p));
return((M.p).label)(M);};

var _1177=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-3]);
M.a=1;
M.v=M.primitives["make-vector"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1174=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3446;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1175)(M);};

var _1165=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1164=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3447;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1165)(M);};

var _1155=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1152=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1157,M.p));
return((M.p).label)(M);};

var _1141=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_619_c;
M.a=3;
M.c.push(new RT.CallFrame(_1145,M.p));
return(_619)(M);};

var _888=function(M){if(--M.cbt<0){throw _888;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_885)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _851=function(M){if(--M.cbt<0){throw _851;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_848)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _670=function(M){M.c.push(new RT.PromptFrame(_672,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/list.rkt"]=function(){return new RT.ModuleRecord("list",_1425);}
return(_1424)(M);};

var _1113=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1116,M.p));
return((M.p).label)(M);};

var _767=function(M){if(--M.cbt<0){throw _767;}
if(M.v===false){return(_764)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1096=function(M){M.v=M.e[M.e.length-3];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1090=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0),void(0));
M.e[M.e.length-1]="given procedure does not accept ~a arguments: ";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-14];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1095,M.p));
return((M.p).label)(M);};

var _1513=function(M){if(--M.cbt<0){throw _1513;}
M.e.length-=(M.a-1);
return(_1514)(M);};

var _1078=function(M){M.v=(M.e[M.e.length-6]===RT.NULL);
if(M.v===false){return(_1081)(M);}else{M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1083)(M);}else{M.v=RT.VOID;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1074=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_1077)(M);}else{M.v=RT.VOID;
return(_1078)(M);}};

var _1068=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-7]=M.e[M.e.length-8][52];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.e.push(M.e[M.e.length-14]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-6]=M.v;
M.v=RT.checkedAdd1(M, M.e[M.e.length-15]);
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-15,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1061=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-8]);
M.v=RT.isList(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_1063)(M);}else{M.v=RT.VOID;
return(_1064)(M);}};

var _1054=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1057,M.p));
return((M.p).label)(M);};

var _1045=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3448;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1046)(M);};

var _1426=function(M){if(M.modules["whalesong/lang/unsafe/ops.rkt"].isInvoked!==false){return(_1428)(M);}else{M.c.push(new RT.CallFrame(_1428,M.p));
return(M.modules["whalesong/lang/unsafe/ops.rkt"].label)(M);}};

var _1416=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3449;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1417)(M);};

var _985=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][50];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _980=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_603)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_604)(M);}};

var _1395=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1396)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_663)(M);}};

var _1382=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=sym3449;
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.e[M.e.length-6]=M.e[M.e.length-9];
M.a=6;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1385,M.p));
return((M.p).label)(M);};

var _1362=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1352=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _657=function(M){if(--M.cbt<0){throw _657;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1371,M.p));
return((M.p).label)(M);};

var _1329=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_656,1,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:331:18");
M.e[M.e.length-2]=new RT.Closure(_657,2,[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:332:18");
M.e[M.e.length-3]=new RT.Closure(_658,(RT.makeArityAtLeast(0)),[M.e[M.e.length-8],M.e[M.e.length-7]],"...private/list.rkt:333:18");
M.e[M.e.length-4]=new RT.Closure(_655,RT.makePair(1,RT.makePair(2,RT.makePair((RT.makeArityAtLeast(0)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"composed");
M.e.length-=3;
return(_1330)(M);};

var _652=function(M){if(--M.cbt<0){throw _652;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1344,M.p));
return((M.p).label)(M);};


var _1313=function(M){M.e.push(void(0),void(0),void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1318,M.p));
return((M.p).label)(M);};

var _646=function(M){if(--M.cbt<0){throw _646;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:355:6 whalesong/lang/private/list.rkt 355 6 12697 159)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_647_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_647)(M);};



var _1454=function(M){if(--M.cbt<0){throw _1454;}
M.c.push(new RT.PromptFrame(_1456,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_595,3,[M.e[M.e.length-1]],"bad-item");
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _827=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_872)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _643=function(M){if(--M.cbt<0){throw _643;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:333:18 whalesong/lang/private/list.rkt 333 18 11664 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1290,M.p));
return((M.p).label)(M);};

var _807=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][47];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _797=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_802,M.p));
return((M.p).label)(M);};

var _1340=function(M){if(--M.cbt<0){throw _1340;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _632=function(M){if(--M.cbt<0){throw _632;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 378 12 13773 632)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1230)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _631=function(M){if(--M.cbt<0){throw _631;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:372:28 whalesong/lang/private/list.rkt 372 28 13436 29)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1226,M.p));
return((M.p).label)(M);};

var _1206=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3450;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1207)(M);};

var _1208=function(M){M.v=false;
return(_1209)(M);};

var _628=function(M){if(--M.cbt<0){throw _628;}

//"lambda body for #(struct:LamPositionalName build-list whalesong/lang/private/list.rkt 305 0 10431 412)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1204)(M);}else{M.v=RT.VOID;
return(_1205)(M);}};

var _1191=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3451;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1192)(M);};

var _1190=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1193)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1194)(M);}};

var _626=function(M){if(--M.cbt<0){throw _626;}

//"lambda body for #(struct:LamPositionalName build-string whalesong/lang/private/list.rkt 293 0 9995 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1189)(M);}else{M.v=RT.VOID;
return(_1190)(M);}};

var _1176=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3446;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1177)(M);};

var _716=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1168=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-8];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1171,M.p));
return((M.p).label)(M);};

var _1161=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1164)(M);}else{M.v=RT.VOID;
return(_1165)(M);}};

var _1154=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-7];
return(_1155)(M);};

var _941=function(M){if(--M.cbt<0){throw _941;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_943)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_946,M.p));
return((M.p).label)(M);}};

var _1143=function(M){M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _881=function(M){if(--M.cbt<0){throw _881;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_883)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_888,M.p));
return((M.p).label)(M);}};

var _844=function(M){if(--M.cbt<0){throw _844;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_846)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_851,M.p));
return((M.p).label)(M);}};

var _1522=function(M){M.e.splice(M.e.length-2,1);
M.e.splice(M.e.length-2,1);
M.e[M.e.length-2][42]=M.v;
M.e[M.e.length-2][43]=M.e[M.e.length-1];
M.e.pop();
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _800=function(M){if(--M.cbt<0){throw _800;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_797)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _750=function(M){if(--M.cbt<0){throw _750;}
if(M.v===false){return(_747)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _718=function(M){if(--M.cbt<0){throw _718;}
M.e[M.e.length-2]=M.v;
return(_716)(M);};

var _651=function(M){if(--M.cbt<0){throw _651;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1340,M.p));
return((M.p).label)(M);};

var _1511=function(M){if(--M.cbt<0){throw _1511;}
M.e.length-=(M.a-1);
return(_1512)(M);};

var _1077=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]="list";
M.e[M.e.length-4]=2;
M.e[M.e.length-5]=M.e[M.e.length-11];
M.e[M.e.length-6]=M.e[M.e.length-12];
M.e[M.e.length-7]=M.e[M.e.length-13];
M.e[M.e.length-8]=M.e[M.e.length-14];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1080,M.p));
return((M.p).label)(M);};

var _1073=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["raise-type-error"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]="procedure";
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=M.e[M.e.length-11];
M.e[M.e.length-6]=M.e[M.e.length-12];
M.e[M.e.length-7]=M.e[M.e.length-13];
M.e[M.e.length-8]=M.e[M.e.length-14];
M.a=8;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1076,M.p));
return((M.p).label)(M);};

var _1067=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]="given list does not have the same size as the first list: ";
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=3;
return(_1068)(M);};

var _1064=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e[M.e.length-1]=M.primitives["length"];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1070,M.p));
return((M.p).label)(M);};

var _586=function(M){if(--M.cbt<0){throw _586;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:98:4 whalesong/lang/private/list.rkt 98 4 2860 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym3440;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1046=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][51];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1048=function(M){if(M.v===false){return(_1045)(M);}else{M.v=RT.VOID;
return(_1046)(M);}};

var _1014=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1022,M.p));
return((M.p).label)(M);};

var _1424=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1419=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][64];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1414=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3449;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _984=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_985)(M);};

var _987=function(M){if(M.v===false){return(_984)(M);}else{M.v=RT.VOID;
return(_985)(M);}};

var _1394=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1395)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_662)(M);}};

var _948=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,9);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1376=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+3),3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _927=function(M){M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_976)(M);}else{M.v=false;
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _1504=function(M){if(--M.cbt<0){throw _1504;}
M.c.push(new RT.PromptFrame(_1506,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_629,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _648=function(M){if(--M.cbt<0){throw _648;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 415 8 15566 144)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1322)(M);}else{M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_1325)(M);}else{M.e[M.e.length-1]=new RT.Closure(_649,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_1326)(M);}}};

var _647=function(M){if(--M.cbt<0){throw _647;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 356 8 12717 138)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1313)(M);}else{M.v=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _645=function(M){if(--M.cbt<0){throw _645;}

//"lambda body for #(struct:LamPositionalName pipeline1 whalesong/lang/private/list.rkt 349 4 12469 388)"

M.v=new RT.Closure(_646,1,[M.e[M.e.length-2],M.e[M.e.length-1]],"...private/list.rkt:355:6");
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _644=function(M){if(--M.cbt<0){throw _644;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1293)(M);}else{M.v=RT.VOID;
return(_1294)(M);}};


var _598=function(M){if(--M.cbt<0){throw _598;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 183 13 5746 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_827)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_830,M.p));
return((M.p).label)(M);}};

var _642=function(M){if(--M.cbt<0){throw _642;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:332:18 whalesong/lang/private/list.rkt 332 18 11622 23)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1286,M.p));
return((M.p).label)(M);};

var _672=function(M){if(--M.cbt<0){throw _672;}
};


var _1348=function(M){if(--M.cbt<0){throw _1348;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _634=function(M){if(--M.cbt<0){throw _634;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:385:34 whalesong/lang/private/list.rkt 385 34 14134 30)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1246,M.p));
return((M.p).label)(M);};

var _596=function(M){if(--M.cbt<0){throw _596;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 180 13 5663 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_776)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_779,M.p));
return((M.p).label)(M);}};

var _630=function(M){if(--M.cbt<0){throw _630;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:371:28 whalesong/lang/private/list.rkt 371 28 13383 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1220,M.p));
return((M.p).label)(M);};

var _764=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-5][46];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1205=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1208)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1209)(M);}};

var _1145=function(M){if(--M.cbt<0){throw _1145;}
return(_1143)(M);};


var _1189=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3451;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1190)(M);};

var _625=function(M){if(--M.cbt<0){throw _625;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 300 4 10314 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_1183)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1179=function(M){if(M.v===false){return(_1176)(M);}else{M.v=RT.VOID;
return(_1177)(M);}};


var _623=function(M){if(--M.cbt<0){throw _623;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 288 4 9878 113)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedNumEquals(M, M.e[M.e.length-5],M.e[M.e.length-3]);
if(M.v===false){return(_1168)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1160=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3447;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1161)(M);};

var _957=function(M){if(--M.cbt<0){throw _957;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_960,M.p));
return((M.p).label)(M);};

var _939=function(M){if(--M.cbt<0){throw _939;}
if(M.v===false){return(_934)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _907=function(M){if(--M.cbt<0){throw _907;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_909)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _856=function(M){if(--M.cbt<0){throw _856;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_858)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym3444;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _839=function(M){if(--M.cbt<0){throw _839;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_841)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_844,M.p));
return((M.p).label)(M);}};

var _837=function(M){if(--M.cbt<0){throw _837;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_834)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _793=function(M){if(--M.cbt<0){throw _793;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_795)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_800,M.p));
return((M.p).label)(M);}};

var _722=function(M){if(--M.cbt<0){throw _722;}
if(M.v===false){return(_719)(M);}else{M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_583_c;
M.a=3;
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return(_583)(M);}};

var _686=function(M){if(--M.cbt<0){throw _686;}
M.e[M.e.length-2]=M.v;
return(_684)(M);};

var _611=function(M){if(--M.cbt<0){throw _611;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 245 5 8229 199)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_1096)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][24];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1099,M.p));
return((M.p).label)(M);}};

var _1509=function(M){if(--M.cbt<0){throw _1509;}
M.e.length-=(M.a-1);
return(_1510)(M);};

var _1232=function(M){M.e.pop();
M.v=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _610=function(M){if(--M.cbt<0){throw _610;}

//"lambda body for #(struct:LamPositionalName check-fold whalesong/lang/private/list.rkt 213 0 6824 1160)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1073)(M);}else{M.v=RT.VOID;
return(_1074)(M);}};

var _1483=function(M){if(--M.cbt<0){throw _1483;}
M.e.length-=(M.a-1);
return(_1484)(M);};

var _613=function(M){if(--M.cbt<0){throw _613;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:239:4 whalesong/lang/private/list.rkt 239 4 8019 146)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym3452;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1109,M.p));
return((M.p).label)(M);};

var _1467=function(M){if(--M.cbt<0){throw _1467;}
M.e.length-=(M.a-1);
return(_1468)(M);};

var _608=function(M){if(--M.cbt<0){throw _608;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 207 2 6721 99)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1054)(M);}else{M.v=RT.makePair(M.e[M.e.length-2],RT.NULL);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1047=function(M){M.v=false;
return(_1048)(M);};

var _1041=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym3448;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1431=function(M){if(--M.cbt<0){throw _1431;}
M.e.length-=(M.a-1);
return(_1432)(M);};

var _1012=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][17];
M.e[M.e.length-1]=sym3448;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1418=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3449;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1419)(M);};

var _995=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym3448;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _990=function(M){M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1041)(M);}else{M.v=false;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _986=function(M){M.v=false;
return(_987)(M);};

var _1398=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3443;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _962=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-11][50];
M.e[M.e.length-1]=M.e[M.e.length-12];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.e[M.e.length-3]=M.e[M.e.length-14];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.e[M.e.length-5]=M.e[M.e.length-7];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-16,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1386=function(M){M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][64];
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][61];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-11]);
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1391,M.p));
return((M.p).label)(M);};

var _1369=function(M){M.p=M.c[M.c.length-1].pendingApplyValuesProc;
M.c.pop();
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-(M.a+4),4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _932=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][17];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _923=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1520=function(M){if(--M.cbt<0){throw _1520;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("assf", prefix[selfMod.getPrefixOffset("assf")]);extNs.set("assf", prefix[selfMod.getPrefixOffset("assf")]);ns.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);extNs.set("assoc", prefix[selfMod.getPrefixOffset("assoc")]);ns.set("assq", prefix[selfMod.getPrefixOffset("assq")]);extNs.set("assq", prefix[selfMod.getPrefixOffset("assq")]);ns.set("assv", prefix[selfMod.getPrefixOffset("assv")]);extNs.set("assv", prefix[selfMod.getPrefixOffset("assv")]);ns.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);extNs.set("build-list", prefix[selfMod.getPrefixOffset("build-list")]);ns.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);extNs.set("build-string", prefix[selfMod.getPrefixOffset("build-string")]);ns.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);extNs.set("build-vector", prefix[selfMod.getPrefixOffset("build-vector")]);ns.set("compose", prefix[selfMod.getPrefixOffset("compose")]);extNs.set("compose", prefix[selfMod.getPrefixOffset("compose")]);ns.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);extNs.set("compose1", prefix[selfMod.getPrefixOffset("compose1")]);ns.set("filter", prefix[selfMod.getPrefixOffset("filter")]);extNs.set("filter", prefix[selfMod.getPrefixOffset("filter")]);ns.set("findf", prefix[selfMod.getPrefixOffset("findf")]);extNs.set("findf", prefix[selfMod.getPrefixOffset("findf")]);ns.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);extNs.set("foldl", prefix[selfMod.getPrefixOffset("foldl")]);ns.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);extNs.set("foldr", prefix[selfMod.getPrefixOffset("foldr")]);ns.set("memf", prefix[selfMod.getPrefixOffset("memf")]);extNs.set("memf", prefix[selfMod.getPrefixOffset("memf")]);ns.set("remove", prefix[selfMod.getPrefixOffset("remove")]);extNs.set("remove", prefix[selfMod.getPrefixOffset("remove")]);ns.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);extNs.set("remove*", prefix[selfMod.getPrefixOffset("remove*")]);ns.set("remq", prefix[selfMod.getPrefixOffset("remq")]);extNs.set("remq", prefix[selfMod.getPrefixOffset("remq")]);ns.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);extNs.set("remq*", prefix[selfMod.getPrefixOffset("remq*")]);ns.set("remv", prefix[selfMod.getPrefixOffset("remv")]);extNs.set("remv", prefix[selfMod.getPrefixOffset("remv")]);ns.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);extNs.set("remv*", prefix[selfMod.getPrefixOffset("remv*")]);}(M.modules["whalesong/lang/private/list.rkt"],M.modules["whalesong/lang/private/list.rkt"].getExports(),M.modules["whalesong/lang/private/list.rkt"].getExternalExports(),M.modules["whalesong/lang/private/list.rkt"].prefix));
return(M.p)(M);};

var _1512=function(M){if(--M.cbt<0){throw _1512;}
M.c.push(new RT.PromptFrame(_1514,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_644,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1502=function(M){if(--M.cbt<0){throw _1502;}
M.c.push(new RT.PromptFrame(_1504,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_628,2,[M.e[M.e.length-1]],"build-list");
M.e[M.e.length-1][40]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1496=function(M){if(--M.cbt<0){throw _1496;}
M.c.push(new RT.PromptFrame(_1498,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_625,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1484=function(M){if(--M.cbt<0){throw _1484;}
M.c.push(new RT.PromptFrame(_1486,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_616,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1476=function(M){if(--M.cbt<0){throw _1476;}
M.c.push(new RT.PromptFrame(_1478,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_609,7,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1468=function(M){if(--M.cbt<0){throw _1468;}
M.c.push(new RT.PromptFrame(_1470,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_603,2,[M.e[M.e.length-3]],"...private/list.rkt:186:13");
M.e[M.e.length-2]=new RT.Closure(_604,3,[M.e[M.e.length-3]],"...private/list.rkt:187:13");
M.v=new RT.Closure(_602,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"assoc");
M.e.length-=2;
M.e[M.e.length-1][20]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1460=function(M){if(--M.cbt<0){throw _1460;}
M.c.push(new RT.PromptFrame(_1462,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_598,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1444=function(M){if(--M.cbt<0){throw _1444;}
M.c.push(new RT.PromptFrame(_1446,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_590,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1436=function(M){if(--M.cbt<0){throw _1436;}
M.c.push(new RT.PromptFrame(_1438,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_582,4,[M.e[M.e.length-1]],"do-remove*");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _639=function(M){if(--M.cbt<0){throw _639;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1275,M.p));
return((M.p).label)(M);};

var _1371=function(M){if(--M.cbt<0){throw _1371;}
M.a=1;
return(_1372)(M);};


var _1307=function(M){if(--M.cbt<0){throw _1307;}
M.e[M.e.length-1]=M.v;
return(_1305)(M);};

var _1282=function(M){if(--M.cbt<0){throw _1282;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1246=function(M){if(--M.cbt<0){throw _1246;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1203=function(M){if(--M.cbt<0){throw _1203;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1186=function(M){if(--M.cbt<0){throw _1186;}
M.e[M.e.length-3]=M.v;
M.v=M.primitives["string-set!"]._i(M);
M.e.length-=3;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][57];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1131=function(M){if(--M.cbt<0){throw _1131;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1116=function(M){if(--M.cbt<0){throw _1116;}
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_614_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_614)(M);};

var _1109=function(M){if(--M.cbt<0){throw _1109;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_614_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_614)(M);};

var _1086=function(M){if(--M.cbt<0){throw _1086;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-9][52];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.e[M.e.length-6]=M.e[M.e.length-14];
M.e[M.e.length-7]=3;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1089,M.p));
return((M.p).label)(M);};

var _1070=function(M){if(--M.cbt<0){throw _1070;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_1067)(M);}else{M.v=RT.VOID;
return(_1068)(M);}};

var _1022=function(M){if(--M.cbt<0){throw _1022;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1025,M.p));
return((M.p).label)(M);};

var _1010=function(M){if(--M.cbt<0){throw _1010;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1012)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][22][0][M.e[M.e.length-6][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1017,M.p));
return((M.p).label)(M);}};

var _993=function(M){if(--M.cbt<0){throw _993;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_995)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][22][0][M.e[M.e.length-4][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1000,M.p));
return((M.p).label)(M);}};

var _955=function(M){if(--M.cbt<0){throw _955;}
if(M.v===false){return(_950)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=9;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _937=function(M){if(--M.cbt<0){throw _937;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_939,M.p));
return((M.p).label)(M);};

var _904=function(M){if(--M.cbt<0){throw _904;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_907,M.p));
return((M.p).label)(M);};


var _617=function(M){if(--M.cbt<0){throw _617;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1134)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_618)(M);}};

var _830=function(M){if(--M.cbt<0){throw _830;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_832)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_837,M.p));
return((M.p).label)(M);}};

var _788=function(M){if(--M.cbt<0){throw _788;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_790)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_793,M.p));
return((M.p).label)(M);}};

var _615=function(M){if(--M.cbt<0){throw _615;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:243:4 whalesong/lang/private/list.rkt 243 4 8170 259)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym3452;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1121,M.p));
return((M.p).label)(M);};

var _683=function(M){if(--M.cbt<0){throw _683;}
if(M.v===false){return(_680)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1523=function(M){if(--M.cbt<0){throw _1523;}
if((M.a-2)===0){return(_1522)(M);}else{RT.si_context_expected(2)(M);
}};

var _1507=function(M){if(--M.cbt<0){throw _1507;}
M.e.length-=(M.a-1);
return(_1508)(M);};

var _1505=function(M){if(--M.cbt<0){throw _1505;}
M.e.length-=(M.a-1);
return(_1506)(M);};

var _1497=function(M){if(--M.cbt<0){throw _1497;}
M.e.length-=(M.a-1);
return(_1498)(M);};

var _1065=function(M){if(--M.cbt<0){throw _1065;}
M.e.length-=(M.a-1);
return(_1064)(M);};

var _1477=function(M){if(--M.cbt<0){throw _1477;}
M.e.length-=(M.a-1);
return(_1478)(M);};


var _1461=function(M){if(--M.cbt<0){throw _1461;}
M.e.length-=(M.a-1);
return(_1462)(M);};

var _1453=function(M){if(--M.cbt<0){throw _1453;}
M.e.length-=(M.a-1);
return(_1454)(M);};

var _1445=function(M){if(--M.cbt<0){throw _1445;}
M.e.length-=(M.a-1);
return(_1446)(M);};

var _1437=function(M){if(--M.cbt<0){throw _1437;}
M.e.length-=(M.a-1);
return(_1438)(M);};



var _1417=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1418)(M);}else{M.v=RT.VOID;
return(_1419)(M);}};


var _1412=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_666)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_669)(M);}};

var _1405=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][62];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _976=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1396=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_661)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_664)(M);}};

var _950=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-6][23][0][M.e[M.e.length-6][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_957,M.p));
return((M.p).label)(M);};

var _1383=function(M){M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_1386)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-7][65];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.e[M.e.length-5]=RT.checkedAdd1(M, M.e[M.e.length-12]);
M.v=RT.makePair(M.e[M.e.length-10],M.e[M.e.length-13]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _934=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_941,M.p));
return((M.p).label)(M);};

var _1359=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_656)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_658)(M);}};

var _1337=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_651)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_653)(M);}};

var _655=function(M){if(--M.cbt<0){throw _655;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1358)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_656)(M);}};

var _1518=function(M){if(--M.cbt<0){throw _1518;}
M.c.push(new RT.PromptFrame(_1520,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_661,1,[M.e[M.e.length-6]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_662,2,[M.e[M.e.length-6]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_663_c;
M.e[M.e.length-4]=new RT.Closure(_664,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_660,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose1");
M.e.length-=4;
M.e.push(void(0));
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_666,1,[M.e[M.e.length-7]],"...private/list.rkt:394:12");
M.e[M.e.length-2]=new RT.Closure(_667,2,[M.e[M.e.length-7]],"...private/list.rkt:396:12");
M.e[M.e.length-3]=_668_c;
M.e[M.e.length-4]=new RT.Closure(_669,(RT.makeArityAtLeast(1)),[M.e[M.e.length-7]],"...private/list.rkt:404:12");
M.e[M.e.length-5]=new RT.Closure(_665,RT.makePair(1,RT.makePair(2,RT.makePair(0,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL)))),[M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"compose");
M.e.length-=4;
M.e.push(void(0),void(0));
M.p=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1524,M.p));
return((M.p).label)(M);};

var _1510=function(M){if(--M.cbt<0){throw _1510;}
M.c.push(new RT.PromptFrame(_1512,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_638,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1500=function(M){if(--M.cbt<0){throw _1500;}
M.c.push(new RT.PromptFrame(_1502,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_627,3,[M.e[M.e.length-1]],"recr");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1494=function(M){if(--M.cbt<0){throw _1494;}
M.c.push(new RT.PromptFrame(_1496,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_624,2,[M.e[M.e.length-1]],"build-vector");
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1482=function(M){if(--M.cbt<0){throw _1482;}
M.c.push(new RT.PromptFrame(_1484,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_613,3,[M.e[M.e.length-3]],"...private/list.rkt:239:4");
M.e[M.e.length-2]=new RT.Closure(_615,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:243:4");
M.v=new RT.Closure(_612,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldl");
M.e.length-=2;
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1474=function(M){if(--M.cbt<0){throw _1474;}
M.c.push(new RT.PromptFrame(_1476,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_607_c;
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1466=function(M){if(--M.cbt<0){throw _1466;}
M.c.push(new RT.PromptFrame(_1468,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_601,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1458=function(M){if(--M.cbt<0){throw _1458;}
M.c.push(new RT.PromptFrame(_1460,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_597,2,[M.e[M.e.length-1]],"assq");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1452=function(M){if(--M.cbt<0){throw _1452;}
M.c.push(new RT.PromptFrame(_1454,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_594,2,[M.e[M.e.length-1]],"bad-list");
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1442=function(M){if(--M.cbt<0){throw _1442;}
M.c.push(new RT.PromptFrame(_1444,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_589,2,[M.e[M.e.length-1]],"remv*");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1434=function(M){if(--M.cbt<0){throw _1434;}
M.c.push(new RT.PromptFrame(_1436,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_581,2,[M.e[M.e.length-1]],"remv");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1430=function(M){if(--M.cbt<0){throw _1430;}
M.c.push(new RT.PromptFrame(_1432,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_578,2,[M.e[M.e.length-3]],"...private/list.rkt:68:4");
M.e[M.e.length-2]=new RT.Closure(_579,3,[M.e[M.e.length-3]],"...private/list.rkt:69:4");
M.v=new RT.Closure(_577,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove");
M.e.length-=2;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1364=function(M){if(--M.cbt<0){throw _1364;}
M.a=1;
return(_1365)(M);};

var _1344=function(M){if(--M.cbt<0){throw _1344;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1302=function(M){if(--M.cbt<0){throw _1302;}
return(_1300)(M);};

var _1296=function(M){if(--M.cbt<0){throw _1296;}
return(_1294)(M);};

var _1259=function(M){if(--M.cbt<0){throw _1259;}
M.a=1;
return(_1260)(M);};

var _1226=function(M){if(--M.cbt<0){throw _1226;}
M.a=1;
return(_1227)(M);};

var _1157=function(M){if(--M.cbt<0){throw _1157;}
if(M.v===false){return(_1154)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_1155)(M);}};


var _1127=function(M){if(--M.cbt<0){throw _1127;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1129,M.p));
return((M.p).label)(M);};

var _1103=function(M){if(--M.cbt<0){throw _1103;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1095=function(M){if(--M.cbt<0){throw _1095;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-7];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=10;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1066=function(M){if(--M.cbt<0){throw _1066;}
return(_1064)(M);};

var _1025=function(M){if(--M.cbt<0){throw _1025;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_1027)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym3448;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1005=function(M){if(--M.cbt<0){throw _1005;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_1007)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1010,M.p));
return((M.p).label)(M);}};

var _960=function(M){if(--M.cbt<0){throw _960;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_962)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-13,11);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _953=function(M){if(--M.cbt<0){throw _953;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_955,M.p));
return((M.p).label)(M);};

var _930=function(M){if(--M.cbt<0){throw _930;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_932)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_937,M.p));
return((M.p).label)(M);}};

var _902=function(M){if(--M.cbt<0){throw _902;}
M.e[M.e.length-2]=M.v;
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_899)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _620=function(M){if(--M.cbt<0){throw _620;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:258:4 whalesong/lang/private/list.rkt 258 4 8639 242)"

M.unspliceRestFromStack(3,(M.a-3));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym3453;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1149,M.p));
return((M.p).label)(M);};


var _805=function(M){if(--M.cbt<0){throw _805;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
if(M.v===false){return(_807)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][16];
M.e[M.e.length-1]=sym3438;
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _786=function(M){if(--M.cbt<0){throw _786;}
M.e[M.e.length-2]=M.v;
M.v=(M.e[M.e.length-1]===M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_783)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _612=function(M){if(--M.cbt<0){throw _612;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1106)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_613)(M);}};

var _656=function(M){if(--M.cbt<0){throw _656;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1364,M.p));
return((M.p).label)(M);};

var _1519=function(M){if(--M.cbt<0){throw _1519;}
M.e.length-=(M.a-1);
return(_1520)(M);};


var _1503=function(M){if(--M.cbt<0){throw _1503;}
M.e.length-=(M.a-1);
return(_1504)(M);};

var _1495=function(M){if(--M.cbt<0){throw _1495;}
M.e.length-=(M.a-1);
return(_1496)(M);};

var _1489=function(M){if(--M.cbt<0){throw _1489;}
M.e.length-=(M.a-1);
return(_1490)(M);};

var _1475=function(M){if(--M.cbt<0){throw _1475;}
M.e.length-=(M.a-1);
return(_1476)(M);};

var _1473=function(M){if(--M.cbt<0){throw _1473;}
M.e.length-=(M.a-1);
return(_1474)(M);};

var _1465=function(M){if(--M.cbt<0){throw _1465;}
M.e.length-=(M.a-1);
return(_1466)(M);};

var _1451=function(M){if(--M.cbt<0){throw _1451;}
M.e.length-=(M.a-1);
return(_1452)(M);};

var _1443=function(M){if(--M.cbt<0){throw _1443;}
M.e.length-=(M.a-1);
return(_1444)(M);};

var _1435=function(M){if(--M.cbt<0){throw _1435;}
M.e.length-=(M.a-1);
return(_1436)(M);};

var _1429=function(M){if(--M.cbt<0){throw _1429;}
M.e.length-=(M.a-1);
return(_1430)(M);};


var _997=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-4][23][0][M.e[M.e.length-4][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1005,M.p));
return((M.p).label)(M);};


var _1411=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1412)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_668)(M);}};

var _1404=function(M){M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3443;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=4;
return(_1405)(M);};

var _1402=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3443;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1403)(M);};

var _664=function(M){if(--M.cbt<0){throw _664;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:404:12 whalesong/lang/private/list.rkt 404 12 14994 416)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][63];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=0;
M.e[M.e.length-6]=RT.NULL;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};



var _943=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_970)(M);}else{M.v=false;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1358=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1359)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_657)(M);}};

var _1336=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1337)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_652)(M);}};

var _1524=RT.si_context_expected(2);

var _1516=function(M){if(--M.cbt<0){throw _1516;}
M.c.push(new RT.PromptFrame(_1518,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_659,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1508=function(M){if(--M.cbt<0){throw _1508;}
M.c.push(new RT.PromptFrame(_1510,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_637,2,[M.e[M.e.length-1]],"pipeline*");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1498=function(M){if(--M.cbt<0){throw _1498;}
M.c.push(new RT.PromptFrame(_1500,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_626,2,[M.e[M.e.length-1]],"build-string");
M.e[M.e.length-1][37]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1492=function(M){if(--M.cbt<0){throw _1492;}
M.c.push(new RT.PromptFrame(_1494,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_623,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1486=function(M){if(--M.cbt<0){throw _1486;}
M.c.push(new RT.PromptFrame(_1488,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_618,3,[M.e[M.e.length-3]],"...private/list.rkt:252:4");
M.e[M.e.length-2]=new RT.Closure(_620,(RT.makeArityAtLeast(3)),[M.e[M.e.length-3]],"...private/list.rkt:258:4");
M.v=new RT.Closure(_617,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(3)),RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"foldr");
M.e.length-=2;
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1480=function(M){if(--M.cbt<0){throw _1480;}
M.c.push(new RT.PromptFrame(_1482,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_611,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1472=function(M){if(--M.cbt<0){throw _1472;}
M.c.push(new RT.PromptFrame(_1474,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_606,2,[M.e[M.e.length-1]],"assf");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1464=function(M){if(--M.cbt<0){throw _1464;}
M.c.push(new RT.PromptFrame(_1466,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_600,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][49]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1450=function(M){if(--M.cbt<0){throw _1450;}
M.c.push(new RT.PromptFrame(_1452,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_593,2,[M.e[M.e.length-1]],"findf");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1448=function(M){if(--M.cbt<0){throw _1448;}
M.c.push(new RT.PromptFrame(_1450,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_592,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1440=function(M){if(--M.cbt<0){throw _1440;}
M.c.push(new RT.PromptFrame(_1442,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_588,2,[M.e[M.e.length-1]],"remq*");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1391=function(M){if(--M.cbt<0){throw _1391;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1385=function(M){if(--M.cbt<0){throw _1385;}
return(_1383)(M);};

var _1354=function(M){if(--M.cbt<0){throw _1354;}
M.a=1;
return(_1355)(M);};

var _1333=function(M){if(--M.cbt<0){throw _1333;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1286=function(M){if(--M.cbt<0){throw _1286;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1252=function(M){if(--M.cbt<0){throw _1252;}
M.a=1;
return(_1253)(M);};

var _1220=function(M){if(--M.cbt<0){throw _1220;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1201=function(M){if(--M.cbt<0){throw _1201;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][58];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.v=RT.checkedSub1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1203,M.p));
return((M.p).label)(M);};

var _1149=function(M){if(--M.cbt<0){throw _1149;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=RT.makePair(M.e[M.e.length-7],M.e[M.e.length-8]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1121=function(M){if(--M.cbt<0){throw _1121;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.v=RT.makePair(M.e[M.e.length-7],M.e[M.e.length-8]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1099=function(M){if(--M.cbt<0){throw _1099;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1101,M.p));
return((M.p).label)(M);};

var _1089=function(M){if(--M.cbt<0){throw _1089;}
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1093,M.p));
return((M.p).label)(M);};

var _1080=function(M){if(--M.cbt<0){throw _1080;}
return(_1078)(M);};

var _1060=function(M){if(--M.cbt<0){throw _1060;}
M.e[M.e.length-2]=M.v;
return(_1058)(M);};

var _1017=function(M){if(--M.cbt<0){throw _1017;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-7];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1020,M.p));
return((M.p).label)(M);};

var _1000=function(M){if(--M.cbt<0){throw _1000;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-2];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1003,M.p));
return((M.p).label)(M);};

var _946=function(M){if(--M.cbt<0){throw _946;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_948)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_953,M.p));
return((M.p).label)(M);}};

var _621=function(M){if(--M.cbt<0){throw _621;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 273 2 9217 148)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1152)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _895=function(M){if(--M.cbt<0){throw _895;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_897)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(void(0));
M.p=M.e[M.e.length-7][22][0][M.e[M.e.length-7][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_902,M.p));
return((M.p).label)(M);}};

var _619=function(M){if(--M.cbt<0){throw _619;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 254 5 8522 111)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1141)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _802=function(M){if(--M.cbt<0){throw _802;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_805,M.p));
return((M.p).label)(M);};

var _666=function(M){if(--M.cbt<0){throw _666;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1414)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1372=function(M){if(--M.cbt<0){throw _1372;}
if(M.a===0){return(_1369)(M);}else{M.e.push(M.v);
return(_1369)(M);}};


var _1517=function(M){if(--M.cbt<0){throw _1517;}
M.e.length-=(M.a-1);
return(_1518)(M);};

var _1088=function(M){if(--M.cbt<0){throw _1088;}
M.e.length-=(M.a-1);
return(_1089)(M);};

var _1501=function(M){if(--M.cbt<0){throw _1501;}
M.e.length-=(M.a-1);
return(_1502)(M);};

var _1493=function(M){if(--M.cbt<0){throw _1493;}
M.e.length-=(M.a-1);
return(_1494)(M);};

var _1487=function(M){if(--M.cbt<0){throw _1487;}
M.e.length-=(M.a-1);
return(_1488)(M);};

var _1481=function(M){if(--M.cbt<0){throw _1481;}
M.e.length-=(M.a-1);
return(_1482)(M);};

var _1471=function(M){if(--M.cbt<0){throw _1471;}
M.e.length-=(M.a-1);
return(_1472)(M);};

var _1459=function(M){if(--M.cbt<0){throw _1459;}
M.e.length-=(M.a-1);
return(_1460)(M);};

var _1457=function(M){if(--M.cbt<0){throw _1457;}
M.e.length-=(M.a-1);
return(_1458)(M);};

var _1449=function(M){if(--M.cbt<0){throw _1449;}
M.e.length-=(M.a-1);
return(_1450)(M);};

var _1441=function(M){if(--M.cbt<0){throw _1441;}
M.e.length-=(M.a-1);
return(_1442)(M);};

var _1433=function(M){if(--M.cbt<0){throw _1433;}
M.e.length-=(M.a-1);
return(_1434)(M);};

var _1428=function(M){if(--M.cbt<0){throw _1428;}
M.e.push([M.params.currentNamespace.get("do-remove")||M.primitives["do-remove"],M.primitives["raise-type-error"],M.params.currentNamespace.get("remove")||M.primitives["remove"],M.primitives["equal?"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.params.currentNamespace.get("remq")||M.primitives["remq"],M.params.currentNamespace.get("remv")||M.primitives["remv"],M.primitives["eqv?"],M.params.currentNamespace.get("do-remove*")||M.primitives["do-remove*"],M.params.currentNamespace.get("remove*")||M.primitives["remove*"],M.params.currentNamespace.get("remq*")||M.primitives["remq*"],M.params.currentNamespace.get("remv*")||M.primitives["remv*"],M.params.currentNamespace.get("memf")||M.primitives["memf"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("findf")||M.primitives["findf"],M.params.currentNamespace.get("bad-list")||M.primitives["bad-list"],M.params.currentNamespace.get("bad-item")||M.primitives["bad-item"],M.params.currentNamespace.get("assq")||M.primitives["assq"],M.params.currentNamespace.get("assv")||M.primitives["assv"],M.params.currentNamespace.get("assoc")||M.primitives["assoc"],M.params.currentNamespace.get("assf")||M.primitives["assf"],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-car1.1"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-car1.1"}],[M.modules["whalesong/lang/unsafe/ops.rkt"].prefix,M.modules["whalesong/lang/unsafe/ops.rkt"].getPrefixOffset("unsafe-cdr2.3"),{moduleName:"whalesong/lang/unsafe/ops.rkt",name:"unsafe-cdr2.3"}],M.params.currentNamespace.get("mapadd")||M.primitives["mapadd"],M.params.currentNamespace.get("check-fold")||M.primitives["check-fold"],M.primitives["length"],M.primitives["format"],M.params.currentNamespace.get("foldl")||M.primitives["foldl"],M.primitives["map"],M.params.currentNamespace.get("foldr")||M.primitives["foldr"],M.params.currentNamespace.get("filter")||M.primitives["filter"],M.primitives["reverse"],M.params.currentNamespace.get("build-vector")||M.primitives["build-vector"],M.primitives["exact-nonnegative-integer?"],M.primitives["make-vector"],M.primitives["vector-set!"],M.params.currentNamespace.get("build-string")||M.primitives["build-string"],M.primitives["make-string"],M.primitives["string-set!"],M.params.currentNamespace.get("build-list")||M.primitives["build-list"],M.primitives["zero?"],M.params.currentNamespace.get("compose1")||M.primitives["compose1"],M.params.currentNamespace.get("compose")||M.primitives["compose"],M.primitives["procedure-arity"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["do-remove","raise-type-error","remove","equal?","procedure?","procedure-arity-includes?","remq","remv","eqv?","do-remove*","remove*","remq*","remv*","memf","raise-mismatch-error","findf","bad-list","bad-item","assq","assv","assoc","assf","unsafe-car1.1","unsafe-cdr2.3","mapadd","check-fold","length","format","foldl","map","foldr","filter","reverse","build-vector","exact-nonnegative-integer?","make-vector","vector-set!","build-string","make-string","string-set!","build-list","zero?","compose1","compose","procedure-arity",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/private/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_1430,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_575,4,[M.e[M.e.length-1]],"do-remove");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1007=function(M){M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_1035)(M);}else{M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _669=function(M){if(--M.cbt<0){throw _669;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:404:12 whalesong/lang/private/list.rkt 404 12 14994 416)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][65];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=0;
M.e[M.e.length-6]=RT.NULL;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1410=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1411)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_667)(M);}};

var _1403=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1404)(M);}else{M.v=RT.VOID;
return(_1405)(M);}};

var _1401=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1402)(M);}else{M.v=RT.VOID;
return(_1403)(M);}};

var _663=function(M){if(--M.cbt<0){throw _663;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _660=function(M){if(--M.cbt<0){throw _660;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1394)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_661)(M);}};





var _1526=function(M){return(_670)(M);};

var _1514=function(M){if(--M.cbt<0){throw _1514;}
M.c.push(new RT.PromptFrame(_1516,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_648,2,[M.e[M.e.length-1]],"simple-compose");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1506=function(M){if(--M.cbt<0){throw _1506;}
M.c.push(new RT.PromptFrame(_1508,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_632,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _649=function(M){if(--M.cbt<0){throw _649;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1333,M.p));
return((M.p).label)(M);};

var _1490=function(M){if(--M.cbt<0){throw _1490;}
M.c.push(new RT.PromptFrame(_1492,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_622,2,[M.e[M.e.length-1]],"filter");
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1488=function(M){if(--M.cbt<0){throw _1488;}
M.c.push(new RT.PromptFrame(_1490,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_621,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1478=function(M){if(--M.cbt<0){throw _1478;}
M.c.push(new RT.PromptFrame(_1480,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_610,5,[M.e[M.e.length-1]],"check-fold");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1470=function(M){if(--M.cbt<0){throw _1470;}
M.c.push(new RT.PromptFrame(_1472,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_605,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1462=function(M){if(--M.cbt<0){throw _1462;}
M.c.push(new RT.PromptFrame(_1464,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_599,2,[M.e[M.e.length-1]],"assv");
M.e[M.e.length-1][19]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1456=function(M){if(--M.cbt<0){throw _1456;}
M.c.push(new RT.PromptFrame(_1458,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_596,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1446=function(M){if(--M.cbt<0){throw _1446;}
M.c.push(new RT.PromptFrame(_1448,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_591,2,[M.e[M.e.length-1]],"memf");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1438=function(M){if(--M.cbt<0){throw _1438;}
M.c.push(new RT.PromptFrame(_1440,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_586,2,[M.e[M.e.length-3]],"...private/list.rkt:98:4");
M.e[M.e.length-2]=new RT.Closure(_587,3,[M.e[M.e.length-3]],"...private/list.rkt:99:4");
M.v=new RT.Closure(_585,RT.makePair(2,RT.makePair(3,RT.NULL)),[M.e[M.e.length-2],M.e[M.e.length-1]],"remove*");
M.e.length-=2;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1432=function(M){if(--M.cbt<0){throw _1432;}
M.c.push(new RT.PromptFrame(_1434,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_580,2,[M.e[M.e.length-1]],"remq");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1378=function(M){if(--M.cbt<0){throw _1378;}
M.a=1;
return(_1379)(M);};


var _1318=function(M){if(--M.cbt<0){throw _1318;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_647_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_647)(M);};

var _1290=function(M){if(--M.cbt<0){throw _1290;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1275=function(M){if(--M.cbt<0){throw _1275;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1242=function(M){if(--M.cbt<0){throw _1242;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1171=function(M){if(--M.cbt<0){throw _1171;}
M.e[M.e.length-3]=M.v;
M.v=RT.checkedVectorSet(M, M.e[M.e.length-1],M.e[M.e.length-2],M.e[M.e.length-3]);
M.e.length-=3;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][56];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1137=function(M){if(--M.cbt<0){throw _1137;}
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_619_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_619)(M);};

var _1129=function(M){if(--M.cbt<0){throw _1129;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1131,M.p));
return((M.p).label)(M);};

var _1101=function(M){if(--M.cbt<0){throw _1101;}
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1103,M.p));
return((M.p).label)(M);};

var _1093=function(M){if(--M.cbt<0){throw _1093;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd(M, 2,M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1090)(M);}else{M.v=RT.VOID;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1076=function(M){if(--M.cbt<0){throw _1076;}
return(_1074)(M);};

var _1057=function(M){if(--M.cbt<0){throw _1057;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_608_c;
M.a=3;
M.c.push(new RT.CallFrame(_1060,M.p));
return(_608)(M);};

var _1020=function(M){if(--M.cbt<0){throw _1020;}
M.e.pop();
if(M.v===false){return(_1014)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1003=function(M){if(--M.cbt<0){throw _1003;}
M.e.pop();
if(M.v===false){return(_997)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _622=function(M){if(--M.cbt<0){throw _622;}

//"lambda body for #(struct:LamPositionalName filter whalesong/lang/private/list.rkt 265 0 8885 481)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1162)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1163)(M);}};

var _1148=function(M){if(--M.cbt<0){throw _1148;}
M.e.length-=(M.a-1);
return(_1149)(M);};

var _579=function(M){if(--M.cbt<0){throw _579;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:69:4 whalesong/lang/private/list.rkt 69 4 2003 220)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_693)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_694)(M);}};

var _890=function(M){if(--M.cbt<0){throw _890;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_892)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_895,M.p));
return((M.p).label)(M);}};

var _853=function(M){if(--M.cbt<0){throw _853;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-7][23][0][M.e[M.e.length-7][23][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_856,M.p));
return((M.p).label)(M);};

var _616=function(M){if(--M.cbt<0){throw _616;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 260 5 8698 182)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
if(M.v===false){return(_1124)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][24];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-9][54];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.e[M.e.length-2]=M.e[M.e.length-11];
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-14];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1127,M.p));
return((M.p).label)(M);}};

var _614=function(M){if(--M.cbt<0){throw _614;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 241 5 8075 89)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1113)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _779=function(M){if(--M.cbt<0){throw _779;}
M.e[M.e.length-1]=M.v;
M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_781)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.p=M.e[M.e.length-5][22][0][M.e[M.e.length-5][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_786,M.p));
return((M.p).label)(M);}};


var _1515=function(M){if(--M.cbt<0){throw _1515;}
M.e.length-=(M.a-1);
return(_1516)(M);};


var _1499=function(M){if(--M.cbt<0){throw _1499;}
M.e.length-=(M.a-1);
return(_1500)(M);};

var _1491=function(M){if(--M.cbt<0){throw _1491;}
M.e.length-=(M.a-1);
return(_1492)(M);};

var _1485=function(M){if(--M.cbt<0){throw _1485;}
M.e.length-=(M.a-1);
return(_1486)(M);};

var _1479=function(M){if(--M.cbt<0){throw _1479;}
M.e.length-=(M.a-1);
return(_1480)(M);};

var _1469=function(M){if(--M.cbt<0){throw _1469;}
M.e.length-=(M.a-1);
return(_1470)(M);};

var _1463=function(M){if(--M.cbt<0){throw _1463;}
M.e.length-=(M.a-1);
return(_1464)(M);};

var _1455=function(M){if(--M.cbt<0){throw _1455;}
M.e.length-=(M.a-1);
return(_1456)(M);};

var _1447=function(M){if(--M.cbt<0){throw _1447;}
M.e.length-=(M.a-1);
return(_1448)(M);};

var _1439=function(M){if(--M.cbt<0){throw _1439;}
M.e.length-=(M.a-1);
return(_1440)(M);};

var _1427=function(M){if(--M.cbt<0){throw _1427;}
M.e.length-=(M.a-1);
return(_1428)(M);};

var _1425=function(M){M.modules["whalesong/lang/private/list.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/unsafe/ops.rkt"]!==void(0)&&M.modules["whalesong/lang/unsafe/ops.rkt"]!==undefined)!==false){return(_1426)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/unsafe/ops.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_1426);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_1426)(M);}};

var _671=function(M){if(--M.cbt<0){throw _671;}
M.e.length-=(M.a-1);
return(_672)(M);};

var _668=function(M){if(--M.cbt<0){throw _668;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:403:12 whalesong/lang/private/list.rkt 403 12 14970 11)"

M.v=M.primitives["values"];
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _667=function(M){if(--M.cbt<0){throw _667;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1416)(M);}else{M.v=RT.VOID;
return(_1417)(M);}};

var _665=function(M){if(--M.cbt<0){throw _665;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1410)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_666)(M);}};

var _1400=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3443;
M.e[M.e.length-2]="procedure";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_1401)(M);};

var _662=function(M){if(--M.cbt<0){throw _662;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:396:12 whalesong/lang/private/list.rkt 396 12 14684 273)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1400)(M);}else{M.v=RT.VOID;
return(_1401)(M);}};


var _1384=function(M){if(--M.cbt<0){throw _1384;}
M.e.length-=(M.a-1);
return(_1383)(M);};

var _659=function(M){if(--M.cbt<0){throw _659;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 405 13 15019 390)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1382)(M);}else{M.v=RT.VOID;
return(_1383)(M);}};




var _654=function(M){if(--M.cbt<0){throw _654;}

//"lambda body for #(struct:LamPositionalName composed whalesong/lang/private/list.rkt 329 16 11487 26)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-1];
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1354,M.p));
return((M.p).label)(M);};

var _650=function(M){if(--M.cbt<0){throw _650;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1336)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_651)(M);}};


var _600=function(M){if(--M.cbt<0){throw _600;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 186 20 5837 30)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_878)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_881,M.p));
return((M.p).label)(M);}};



var _1301=function(M){if(--M.cbt<0){throw _1301;}
M.e.length-=(M.a-1);
return(_1300)(M);};

var _1295=function(M){if(--M.cbt<0){throw _1295;}
M.e.length-=(M.a-1);
return(_1294)(M);};



var _640=function(M){if(--M.cbt<0){throw _640;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1278)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_641)(M);}};

var _638=function(M){if(--M.cbt<0){throw _638;}

//"lambda body for #(struct:LamPositionalName simple-compose whalesong/lang/private/list.rkt 413 8 15468 43)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.v=(1===M.e[M.e.length-2]);
if(M.v===false){return(_1271)(M);}else{M.e[M.e.length-1]=new RT.Closure(_639,1,[M.e[M.e.length-5],M.e[M.e.length-4]],"composed");
return(_1272)(M);}};

var _637=function(M){if(--M.cbt<0){throw _637;}

//"lambda body for #(struct:LamPositionalName pipeline* whalesong/lang/private/list.rkt 360 4 12862 1546)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=1;
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure-arity"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=M.primitives["eqv?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1263)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][59];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _636=function(M){if(--M.cbt<0){throw _636;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:388:34 whalesong/lang/private/list.rkt 388 34 14329 35)"

M.unspliceRestFromStack(0,M.a);
M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingApplyValuesProc=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1259,M.p));
return((M.p).label)(M);};

var _633=function(M){if(--M.cbt<0){throw _633;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:384:34 whalesong/lang/private/list.rkt 384 34 14075 24)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-2]);
M.e.push(void(0));
M.p=M.e[M.e.length-3];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1242,M.p));
return((M.p).label)(M);};

var _595=function(M){if(--M.cbt<0){throw _595;}

//"lambda body for #(struct:LamPositionalName bad-item whalesong/lang/private/list.rkt 142 0 4192 200)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]="non-pair found in list: ";
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=" in ";
M.e[M.e.length-5]=M.e[M.e.length-9];
M.p=M.primitives["raise-mismatch-error"];
RT.raiseArityMismatchError(M,M.p,5);
return(_596)(M);};


var _629=function(M){if(--M.cbt<0){throw _629;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 366 10 13169 335)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1212)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1204=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3450;
M.e[M.e.length-2]="exact-nonnegative-integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1205)(M);};


var _627=function(M){if(--M.cbt<0){throw _627;}

//"lambda body for #(struct:LamPositionalName recr whalesong/lang/private/list.rkt 311 2 10711 131)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-4]);
if(M.v===false){return(_1198)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _589=function(M){if(--M.cbt<0){throw _589;}

//"lambda body for #(struct:LamPositionalName remv* whalesong/lang/private/list.rkt 108 0 3172 51)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym3454;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _719=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-5]=M.v;
M.p=_584_c;
M.a=5;
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return(_584)(M);};

var _624=function(M){if(--M.cbt<0){throw _624;}

//"lambda body for #(struct:LamPositionalName build-vector whalesong/lang/private/list.rkt 281 0 9559 434)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_1174)(M);}else{M.v=RT.VOID;
return(_1175)(M);}};


var _1163=function(M){if(M.v===false){return(_1160)(M);}else{M.v=RT.VOID;
return(_1161)(M);}};

var _582=function(M){if(--M.cbt<0){throw _582;}

//"lambda body for #(struct:LamPositionalName do-remove* whalesong/lang/private/list.rkt 81 0 2350 473)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_701)(M);}else{M.v=RT.VOID;
return(_702)(M);}};



var _1136=function(M){if(--M.cbt<0){throw _1136;}
M.e.length-=(M.a-1);
return(_1137)(M);};


var _1120=function(M){if(--M.cbt<0){throw _1120;}
M.e.length-=(M.a-1);
return(_1121)(M);};


var _1108=function(M){if(--M.cbt<0){throw _1108;}
M.e.length-=(M.a-1);
return(_1109)(M);};



var _641=function(M){if(--M.cbt<0){throw _641;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:331:18 whalesong/lang/private/list.rkt 331 18 11582 21)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(M.e[M.e.length-1]);
M.e.push(void(0));
M.p=M.e[M.e.length-4];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1282,M.p));
return((M.p).label)(M);};

var _1079=function(M){if(--M.cbt<0){throw _1079;}
M.e.length-=(M.a-1);
return(_1078)(M);};

var _1075=function(M){if(--M.cbt<0){throw _1075;}
M.e.length-=(M.a-1);
return(_1074)(M);};


var _609=function(M){if(--M.cbt<0){throw _609;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 222 8 7238 446)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_1061)(M);}else{M.v=RT.VOID;
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _607=function(M){if(--M.cbt<0){throw _607;}

//"lambda body for #(struct:LamPositionalName mapadd whalesong/lang/private/list.rkt 206 0 6693 128)"

M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.p=_608_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_608)(M);};

var _606=function(M){if(--M.cbt<0){throw _606;}

//"lambda body for #(struct:LamPositionalName assf whalesong/lang/private/list.rkt 193 11 6170 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1047)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1048)(M);}};

var _1035=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym3448;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1027=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][51];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};





var _605=function(M){if(--M.cbt<0){throw _605;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 196 13 6336 44)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_990)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_993,M.p));
return((M.p).label)(M);}};

var _604=function(M){if(--M.cbt<0){throw _604;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:187:13 whalesong/lang/private/list.rkt 187 13 5882 258)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_986)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_987)(M);}};

var _602=function(M){if(--M.cbt<0){throw _602;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_980)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_603)(M);}};

var _970=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};





var _601=function(M){if(--M.cbt<0){throw _601;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 191 14 6106 33)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-5]);
if(M.v===false){return(_927)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][22][0][M.e[M.e.length-3][22][1]];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_930,M.p));
return((M.p).label)(M);}};

var _917=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym3442;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _599=function(M){if(--M.cbt<0){throw _599;}

//"lambda body for #(struct:LamPositionalName assv whalesong/lang/private/list.rkt 182 11 5719 55)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _872=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][16];
M.e[M.e.length-1]=sym3444;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _858=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-10][48];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.e[M.e.length-4]=M.e[M.e.length-6];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,10);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};




var _597=function(M){if(--M.cbt<0){throw _597;}

//"lambda body for #(struct:LamPositionalName assq whalesong/lang/private/list.rkt 179 11 5636 54)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][47];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _815=function(M){M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][16];
M.e[M.e.length-1]=sym3438;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};





var _594=function(M){if(--M.cbt<0){throw _594;}

//"lambda body for #(struct:LamPositionalName bad-list whalesong/lang/private/list.rkt 138 0 4055 136)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]="not a proper list: ";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _593=function(M){if(--M.cbt<0){throw _593;}

//"lambda body for #(struct:LamPositionalName findf whalesong/lang/private/list.rkt 123 0 3608 445)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_772)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_773)(M);}};


var _592=function(M){if(--M.cbt<0){throw _592;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 126 2 3751 301)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_759)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _591=function(M){if(--M.cbt<0){throw _591;}

//"lambda body for #(struct:LamPositionalName memf whalesong/lang/private/list.rkt 111 0 3225 381)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_755)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_756)(M);}};

var _590=function(M){if(--M.cbt<0){throw _590;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 114 2 3366 239)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_743)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _588=function(M){if(--M.cbt<0){throw _588;}

//"lambda body for #(struct:LamPositionalName remq* whalesong/lang/private/list.rkt 105 0 3120 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][9];
M.e[M.e.length-1]=sym3455;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _587=function(M){if(--M.cbt<0){throw _587;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:99:4 whalesong/lang/private/list.rkt 99 4 2905 211)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_735)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_736)(M);}};

var _585=function(M){if(--M.cbt<0){throw _585;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_729)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_586)(M);}};


var _584=function(M){if(--M.cbt<0){throw _584;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 90 13 2602 216)"

M.v=(M.e[M.e.length-5]===RT.NULL);
if(M.v===false){return(_714)(M);}else{M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_583_c;
M.a=3;
M.c.push(new RT.CallFrame(_718,M.p));
return(_583)(M);}};

var _583=function(M){if(--M.cbt<0){throw _583;}

//"lambda body for #(struct:LamPositionalName rloop whalesong/lang/private/list.rkt 86 2 2502 320)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_708)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _581=function(M){if(--M.cbt<0){throw _581;}

//"lambda body for #(struct:LamPositionalName remv whalesong/lang/private/list.rkt 78 0 2288 60)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym3456;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eqv?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _580=function(M){if(--M.cbt<0){throw _580;}

//"lambda body for #(struct:LamPositionalName remq whalesong/lang/private/list.rkt 75 0 2227 59)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym3457;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["eq?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _577=function(M){if(--M.cbt<0){throw _577;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_687)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_578)(M);}};


var _576=function(M){if(--M.cbt<0){throw _576;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/list.rkt 61 2 1755 156)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_678)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _575=function(M){if(--M.cbt<0){throw _575;}

//"lambda body for #(struct:LamPositionalName do-remove whalesong/lang/private/list.rkt 58 0 1649 263)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_673)(M);}else{M.v=M.e[M.e.length-2];
M.v=RT.VOID;
return(_674)(M);}};

var _661=function(M){if(--M.cbt<0){throw _661;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:394:12 whalesong/lang/private/list.rkt 394 12 14590 81)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1398)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1379=function(M){if(--M.cbt<0){throw _1379;}
if(M.a===0){return(_1376)(M);}else{M.e.push(M.v);
return(_1376)(M);}};

var _1365=function(M){if(--M.cbt<0){throw _1365;}
if(M.a===0){return(_1362)(M);}else{M.e.push(M.v);
return(_1362)(M);}};

var _1355=function(M){if(--M.cbt<0){throw _1355;}
if(M.a===0){return(_1352)(M);}else{M.e.push(M.v);
return(_1352)(M);}};

var _1260=function(M){if(--M.cbt<0){throw _1260;}
if(M.a===0){return(_1257)(M);}else{M.e.push(M.v);
return(_1257)(M);}};

var _1253=function(M){if(--M.cbt<0){throw _1253;}
if(M.a===0){return(_1250)(M);}else{M.e.push(M.v);
return(_1250)(M);}};

var _1227=function(M){if(--M.cbt<0){throw _1227;}
if(M.a===0){return(_1224)(M);}else{M.e.push(M.v);
return(_1224)(M);}};

var _618=function(M){if(--M.cbt<0){throw _618;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:252:4 whalesong/lang/private/list.rkt 252 4 8466 168)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][25];
M.e[M.e.length-1]=sym3453;
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1137,M.p));
return((M.p).label)(M);};

var _603=function(M){if(--M.cbt<0){throw _603;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:186:13 whalesong/lang/private/list.rkt 186 13 5830 38)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][49];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _578=function(M){if(--M.cbt<0){throw _578;}

//"lambda body for #(struct:LamPositionalName ...private/list.rkt:68:4 whalesong/lang/private/list.rkt 68 4 1948 50)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][0];
M.e[M.e.length-1]=sym3441;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.primitives["equal?"];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

_1066.mvr=_1065;
_1076.mvr=_1075;
_1080.mvr=_1079;
_1089.mvr=_1088;
_1109.mvr=_1108;
_1121.mvr=_1120;
_1137.mvr=_1136;
_1149.mvr=_1148;
_1226.mvr=_1227;
_1252.mvr=_1253;
_1259.mvr=_1260;
_1296.mvr=_1295;
_1302.mvr=_1301;
_1354.mvr=_1355;
_1364.mvr=_1365;
_1371.mvr=_1372;
_1378.mvr=_1379;
_1385.mvr=_1384;
_1428.mvr=_1427;
_1430.mvr=_1429;
_1432.mvr=_1431;
_1434.mvr=_1433;
_1436.mvr=_1435;
_1438.mvr=_1437;
_1440.mvr=_1439;
_1442.mvr=_1441;
_1444.mvr=_1443;
_1446.mvr=_1445;
_1448.mvr=_1447;
_1450.mvr=_1449;
_1452.mvr=_1451;
_1454.mvr=_1453;
_1456.mvr=_1455;
_1458.mvr=_1457;
_1460.mvr=_1459;
_1462.mvr=_1461;
_1464.mvr=_1463;
_1466.mvr=_1465;
_1468.mvr=_1467;
_1470.mvr=_1469;
_1472.mvr=_1471;
_1474.mvr=_1473;
_1476.mvr=_1475;
_1478.mvr=_1477;
_1480.mvr=_1479;
_1482.mvr=_1481;
_1484.mvr=_1483;
_1486.mvr=_1485;
_1488.mvr=_1487;
_1490.mvr=_1489;
_1492.mvr=_1491;
_1494.mvr=_1493;
_1496.mvr=_1495;
_1498.mvr=_1497;
_1500.mvr=_1499;
_1502.mvr=_1501;
_1504.mvr=_1503;
_1506.mvr=_1505;
_1508.mvr=_1507;
_1510.mvr=_1509;
_1512.mvr=_1511;
_1514.mvr=_1513;
_1516.mvr=_1515;
_1518.mvr=_1517;
_1524.mvr=_1523;
_1520.mvr=_1519;
_672.mvr=_671;
var sym3449=RT.makeSymbol("compose");
var sym3452=RT.makeSymbol("foldl");
var sym3447=RT.makeSymbol("filter");
var sym3453=RT.makeSymbol("foldr");
var sym3450=RT.makeSymbol("build-list");
var sym3454=RT.makeSymbol("remv*");
var sym3438=RT.makeSymbol("assq");
var sym3455=RT.makeSymbol("remq*");
var sym3442=RT.makeSymbol("assoc");
var sym3457=RT.makeSymbol("remq");
var sym3444=RT.makeSymbol("assv");
var sym3456=RT.makeSymbol("remv");
var sym3440=RT.makeSymbol("remove*");
var sym3445=RT.makeSymbol("memf");
var sym3448=RT.makeSymbol("assf");
var sym3446=RT.makeSymbol("build-vector");
var sym3443=RT.makeSymbol("compose1");
var sym3441=RT.makeSymbol("remove");
var sym3439=RT.makeSymbol("findf");
var sym3451=RT.makeSymbol("build-string");var _614_c=new RT.Closure(_614,3,void(0),"loop");
var _647_c=new RT.Closure(_647,3,void(0),"loop");
var _645_c=new RT.Closure(_645,2,void(0),"pipeline1");
var _584_c=new RT.Closure(_584,5,void(0),"loop");
var _583_c=new RT.Closure(_583,3,void(0),"rloop");
var _668_c=new RT.Closure(_668,0,void(0),"...private/list.rkt:403:12");
var _663_c=new RT.Closure(_663,0,void(0),"...private/list.rkt:403:12");
var _608_c=new RT.Closure(_608,3,void(0),"loop");
var _607_c=new RT.Closure(_607,3,void(0),"mapadd");
var _576_c=new RT.Closure(_576,3,void(0),"loop");
var _619_c=new RT.Closure(_619,3,void(0),"loop");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1526(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/list.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/list.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <UninterpretedSource /Users/dyoo/work/whalesong/whalesong/lang/unsafe/ops.rkt>
(function(M) {
"use strict";
 
M.installedModules["whalesong/lang/unsafe/ops.rkt"] = function() {
    return new plt.runtime.ModuleRecord("whalesong/lang/unsafe/ops.rkt",
        function(M) {
            
             if(--M.cbt<0) { throw arguments.callee; }
             var modrec = M.modules["whalesong/lang/unsafe/ops.rkt"];
             var ns = modrec.getExports();
             var extNs = modrec.getExternalExports();
             modrec.prefix=[void(0),void(0)];modrec.prefix.names=["unsafe-car1.1","unsafe-cdr2.3"];modrec.prefix.internalNames=["unsafe-car","unsafe-cdr"];
             var exports = {};
             modrec.isInvoked = true;
             (function(MACHINE, EXPORTS){
EXPORTS['unsafe-car'] =
    plt.baselib.functions.makePrimitiveProcedure(
        'unsafe-car',
        1,
        function(MACHINE) {
            return MACHINE.e[MACHINE.e.length - 1].first;
        });


EXPORTS['unsafe-cdr'] = 
    plt.baselib.functions.makePrimitiveProcedure(
        'unsafe-cdr',
        1,
        function(MACHINE) {
            return MACHINE.e[MACHINE.e.length - 1].rest;
        });
})(M, exports);
             ns.set("unsafe-car1.1",exports["unsafe-car"]);
extNs.set("unsafe-car",exports["unsafe-car"]);
modrec.prefix[0]=exports["unsafe-car"];
ns.set("unsafe-cdr2.3",exports["unsafe-cdr"]);
extNs.set("unsafe-cdr",exports["unsafe-cdr"]);
modrec.prefix[1]=exports["unsafe-cdr"];

             modrec.privateExports = exports;
             return M.c.pop().label(M);
        });
   }
 }(plt.runtime.currentMachine));
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/hash.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1567=function(M){if(M.v===false){return(_1564)(M);}else{M.v=RT.VOID;
return(_1565)(M);}};

var _1539=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1530_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1530)(M);};

var _1540=function(M){M.v=false;
return(_1541)(M);};

var _1564=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3514;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1565)(M);};

var _1541=function(M){if(M.v===false){return(_1538)(M);}else{M.v=RT.VOID;
return(_1539)(M);}};

var _1565=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["hash-keys"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1538=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3515;
M.e[M.e.length-2]="procedure (arity 2)";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1539)(M);};

var _1536=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3515;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1537)(M);};

var _1570=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1533=function(M){M.c.push(new RT.PromptFrame(_1535,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/hash.rkt"]=function(){return new RT.ModuleRecord("hash",_1571);}
return(_1570)(M);};

var _1575=function(M){if(--M.cbt<0){throw _1575;}
M.c.push(new RT.PromptFrame(_1577,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1532,2,[M.e[M.e.length-1]],"hash-for-each");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1573=function(M){if(--M.cbt<0){throw _1573;}
M.c.push(new RT.PromptFrame(_1575,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1531,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1576=function(M){if(--M.cbt<0){throw _1576;}
M.e.length-=(M.a-1);
return(_1577)(M);};

var _1574=function(M){if(--M.cbt<0){throw _1574;}
M.e.length-=(M.a-1);
return(_1575)(M);};

var _1559=function(M){if(--M.cbt<0){throw _1559;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][7];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1553=function(M){if(--M.cbt<0){throw _1553;}
M.e[M.e.length-2]=M.v;
return(_1551)(M);};

var _1572=function(M){if(--M.cbt<0){throw _1572;}
M.e.length-=(M.a-1);
return(_1573)(M);};

var _1557=function(M){if(--M.cbt<0){throw _1557;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1559,M.p));
return((M.p).label)(M);};

var _1548=function(M){if(--M.cbt<0){throw _1548;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1550,M.p));
return((M.p).label)(M);};

var _1558=function(M){if(--M.cbt<0){throw _1558;}
M.e.length-=(M.a-1);
return(_1559)(M);};


var _1530=function(M){if(--M.cbt<0){throw _1530;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 10 2 288 163)"

M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1545)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _1532=function(M){if(--M.cbt<0){throw _1532;}

//"lambda body for #(struct:LamPositionalName hash-for-each whalesong/lang/private/hash.rkt 17 0 455 413)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_1562)(M);}else{M.v=RT.VOID;
return(_1563)(M);}};

var _1531=function(M){if(--M.cbt<0){throw _1531;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/hash.rkt 22 2 694 173)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-4]===RT.NULL);
if(M.v===false){return(_1554)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1529=function(M){if(--M.cbt<0){throw _1529;}

//"lambda body for #(struct:LamPositionalName hash-map whalesong/lang/private/hash.rkt 5 0 64 388)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["hash?"]._i(M);
M.e.pop();
if(M.v===false){return(_1536)(M);}else{M.v=RT.VOID;
return(_1537)(M);}};

var _1550=function(M){if(--M.cbt<0){throw _1550;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1530_c;
M.a=3;
M.c.push(new RT.CallFrame(_1553,M.p));
return(_1530)(M);};

var _1571=function(M){M.modules["whalesong/lang/private/hash.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("hash-map")||M.primitives["hash-map"],M.primitives["raise-type-error"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["hash-keys"],M.params.currentNamespace.get("hash-for-each")||M.primitives["hash-for-each"],M.primitives["void"],false]);M.e[M.e.length-1].names=["hash-map","raise-type-error","procedure?","procedure-arity-includes?","hash-keys","hash-for-each","void",false];
M.modules["whalesong/lang/private/hash.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_1573,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1529,2,[M.e[M.e.length-1]],"hash-map");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1545=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["hash-ref"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-9]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1548,M.p));
return((M.p).label)(M);};

var _1578=function(M){return(_1533)(M);};

var _1534=function(M){if(--M.cbt<0){throw _1534;}
M.e.length-=(M.a-1);
return(_1535)(M);};

var _1562=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3514;
M.e[M.e.length-2]="hash";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_1563)(M);};

var _1577=function(M){if(--M.cbt<0){throw _1577;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);extNs.set("hash-for-each", prefix[selfMod.getPrefixOffset("hash-for-each")]);ns.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);extNs.set("hash-map", prefix[selfMod.getPrefixOffset("hash-map")]);}(M.modules["whalesong/lang/private/hash.rkt"],M.modules["whalesong/lang/private/hash.rkt"].getExports(),M.modules["whalesong/lang/private/hash.rkt"].getExternalExports(),M.modules["whalesong/lang/private/hash.rkt"].prefix));
return(M.p)(M);};

var _1535=function(M){if(--M.cbt<0){throw _1535;}
};

var _1563=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1566)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1567)(M);}};

var _1554=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["hash-ref"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1557,M.p));
return((M.p).label)(M);};

var _1551=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1566=function(M){M.v=false;
return(_1567)(M);};

var _1537=function(M){M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1540)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_1541)(M);}};

_1559.mvr=_1558;
_1573.mvr=_1572;
_1575.mvr=_1574;
_1577.mvr=_1576;
_1535.mvr=_1534;
var sym3514=RT.makeSymbol("hash-for-each");
var sym3515=RT.makeSymbol("hash-map");var _1530_c=new RT.Closure(_1530,3,void(0),"loop");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1578(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/hash.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/hash.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/qq-and-or.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1590=function(M){if(--M.cbt<0){throw _1590;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/qq-and-or.rkt"],M.modules["whalesong/lang/private/qq-and-or.rkt"].getExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].getExternalExports(),M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix));
return(M.p)(M);};

var _1587=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1589=function(M){if(--M.cbt<0){throw _1589;}
M.e.length-=(M.a-1);
return(_1590)(M);};

var _1588=function(M){M.modules["whalesong/lang/private/qq-and-or.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("qq-append")||M.primitives["qq-append"]]);M.e[M.e.length-1].names=["qq-append"];
M.modules["whalesong/lang/private/qq-and-or.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_1590,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_1579_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1579=function(M){if(--M.cbt<0){throw _1579;}

//"lambda body for #(struct:LamPositionalName qq-append whalesong/lang/private/qq-and-or.rkt 149 4 10310 107)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_1583)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["append"];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1582=function(M){if(--M.cbt<0){throw _1582;}
};

var _1581=function(M){if(--M.cbt<0){throw _1581;}
M.e.length-=(M.a-1);
return(_1582)(M);};

var _1580=function(M){M.c.push(new RT.PromptFrame(_1582,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/qq-and-or.rkt"]=function(){return new RT.ModuleRecord("qq-and-or",_1588);}
return(_1587)(M);};

var _1591=function(M){return(_1580)(M);};

var _1583=function(M){M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3518;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=M.e[M.e.length-4];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

_1590.mvr=_1589;
_1582.mvr=_1581;
var sym3518=RT.makeSymbol("unquote-splicing");var _1579_c=new RT.Closure(_1579,2,void(0),"qq-append");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1591(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/qq-and-or.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/qq-and-or.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/map.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1851=function(M){return(_1616)(M);};

var _1850=function(M){if(--M.cbt<0){throw _1850;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("andmap2", prefix[selfMod.getPrefixOffset("andmap2")]);extNs.set("andmap", prefix[selfMod.getPrefixOffset("andmap2")]);ns.set("for-each2", prefix[selfMod.getPrefixOffset("for-each2")]);extNs.set("for-each", prefix[selfMod.getPrefixOffset("for-each2")]);ns.set("map2", prefix[selfMod.getPrefixOffset("map2")]);extNs.set("map", prefix[selfMod.getPrefixOffset("map2")]);ns.set("ormap2", prefix[selfMod.getPrefixOffset("ormap2")]);extNs.set("ormap", prefix[selfMod.getPrefixOffset("ormap2")]);}(M.modules["whalesong/lang/private/map.rkt"],M.modules["whalesong/lang/private/map.rkt"].getExports(),M.modules["whalesong/lang/private/map.rkt"].getExternalExports(),M.modules["whalesong/lang/private/map.rkt"].prefix));
return(M.p)(M);};

var _1842=function(M){if(--M.cbt<0){throw _1842;}
M.c.push(new RT.PromptFrame(_1844,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1599,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1815=function(M){if(--M.cbt<0){throw _1815;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_1805)(M);};

var _1753=function(M){if(--M.cbt<0){throw _1753;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_1743)(M);};

var _1665=function(M){if(--M.cbt<0){throw _1665;}
M.e[M.e.length-2]=M.v;
return(_1663)(M);};

var _1639=function(M){if(--M.cbt<0){throw _1639;}
M.e[M.e.length-2]=M.v;
return(_1637)(M);};

var _1849=function(M){if(--M.cbt<0){throw _1849;}
M.e.length-=(M.a-1);
return(_1850)(M);};

var _1841=function(M){if(--M.cbt<0){throw _1841;}
M.e.length-=(M.a-1);
return(_1842)(M);};

var _1838=function(M){M.modules["whalesong/lang/private/map.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("map2")||M.primitives["map2"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["map"],M.primitives["length"],M.params.currentNamespace.get("for-each2")||M.primitives["for-each2"],M.primitives["void"],M.primitives["for-each"],M.params.currentNamespace.get("andmap2")||M.primitives["andmap2"],M.primitives["andmap"],M.params.currentNamespace.get("ormap2")||M.primitives["ormap2"],M.primitives["ormap"],false,false]);M.e[M.e.length-1].names=["map2","procedure?","procedure-arity-includes?","map","length","for-each2","void","for-each","andmap2","andmap","ormap2","ormap",false,false];
M.modules["whalesong/lang/private/map.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_1840,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1593,2,[M.e[M.e.length-4]],".../private/map.rkt:12:11");
M.e[M.e.length-2]=new RT.Closure(_1595,3,[M.e[M.e.length-4]],".../private/map.rkt:21:11");
M.e[M.e.length-3]=new RT.Closure(_1597,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:33:11");
M.v=new RT.Closure(_1592,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"map");
M.e.length-=3;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1823=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1828,M.p));
return((M.p).label)(M);};

var _1614=function(M){if(--M.cbt<0){throw _1614;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 116 20 3959 236)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_1823)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _1804=function(M){M.v=false;
return(_1805)(M);};

var _1790=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1795,M.p));
return((M.p).label)(M);};

var _1612=function(M){if(--M.cbt<0){throw _1612;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 103 20 3466 162)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_1790)(M);}else{M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1613=function(M){if(--M.cbt<0){throw _1613;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:108:11 whalesong/lang/private/map.rkt 108 11 3671 559)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1804)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1806)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1808)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_1810)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1813,M.p));
return((M.p).label)(M);}}}}};

var _1775=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1611)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1615)(M);}};

var _1761=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1768,M.p));
return((M.p).label)(M);};

var _1608=function(M){if(--M.cbt<0){throw _1608;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 85 20 2864 238)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_1761)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};


var _1733=function(M){M.v=false;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1729=function(M){M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1736,M.p));
return((M.p).label)(M);};

var _1720=function(M){M.v=false;
return(_1719)(M);};

var _1607=function(M){if(--M.cbt<0){throw _1607;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:77:11 whalesong/lang/private/map.rkt 77 11 2576 562)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1742)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1744)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1746)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_1748)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1751,M.p));
return((M.p).label)(M);}}}}};

var _1713=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1714)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1607)(M);}};


var _1697=function(M){M.v=false;
return(_1696)(M);};

var _1603=function(M){if(--M.cbt<0){throw _1603;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:60:11 whalesong/lang/private/map.rkt 60 11 2047 36)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["for-each"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1600=function(M){if(--M.cbt<0){throw _1600;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1680)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1601)(M);}};

var _1599=function(M){if(--M.cbt<0){throw _1599;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 54 16 1793 205)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1674)(M);}else{M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1596=function(M){if(--M.cbt<0){throw _1596;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 27 16 872 201)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_1659)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1642=function(M){M.v=false;
return(_1643)(M);};


var _1594=function(M){if(--M.cbt<0){throw _1594;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 16 16 463 139)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_1633)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1597=function(M){if(--M.cbt<0){throw _1597;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:33:11 whalesong/lang/private/map.rkt 33 11 1117 31)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["map"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1616=function(M){M.c.push(new RT.PromptFrame(_1618,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/map.rkt"]=function(){return new RT.ModuleRecord("map",_1838);}
return(_1837)(M);};

var _1605=function(M){if(--M.cbt<0){throw _1605;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:66:11 whalesong/lang/private/map.rkt 66 11 2168 396)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1718)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1720)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_1719)(M);}}};

var _1593=function(M){if(--M.cbt<0){throw _1593;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:12:11 whalesong/lang/private/map.rkt 12 11 319 311)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1624)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1626)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_1625)(M);}}};

var _1844=function(M){if(--M.cbt<0){throw _1844;}
M.c.push(new RT.PromptFrame(_1846,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1601,2,[M.e[M.e.length-4]],".../private/map.rkt:39:11");
M.e[M.e.length-2]=new RT.Closure(_1602,3,[M.e[M.e.length-4]],".../private/map.rkt:48:11");
M.e[M.e.length-3]=new RT.Closure(_1603,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:60:11");
M.v=new RT.Closure(_1600,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"for-each");
M.e.length-=3;
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1618=function(M){if(--M.cbt<0){throw _1618;}
};

var _1768=function(M){if(--M.cbt<0){throw _1768;}
if(M.v===false){return(_1765)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1608_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1608)(M);}};

var _1706=function(M){if(--M.cbt<0){throw _1706;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_1696)(M);};

var _1704=function(M){if(--M.cbt<0){throw _1704;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1706,M.p));
return((M.p).label)(M);};

var _1662=function(M){if(--M.cbt<0){throw _1662;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.p=_1596_c;
M.a=3;
M.c.push(new RT.CallFrame(_1665,M.p));
return(_1596)(M);};

var _1636=function(M){if(--M.cbt<0){throw _1636;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1594_c;
M.a=2;
M.c.push(new RT.CallFrame(_1639,M.p));
return(_1594)(M);};

var _1839=function(M){if(--M.cbt<0){throw _1839;}
M.e.length-=(M.a-1);
return(_1840)(M);};

var _1816=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1614_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1614)(M);};

var _1810=function(M){M.v=false;
return(_1805)(M);};

var _1783=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_1612_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1612)(M);};

var _1781=function(M){M.v=false;
return(_1780)(M);};

var _1754=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1608_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1608)(M);};

var _1748=function(M){M.v=false;
return(_1743)(M);};

var _1722=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_1606_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1606)(M);};

var _1718=function(M){M.v=false;
return(_1719)(M);};

var _1604=function(M){if(--M.cbt<0){throw _1604;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1713)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1605)(M);}};

var _1701=function(M){M.v=false;
return(_1696)(M);};

var _1683=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1687=function(M){M.v=false;
return(_1686)(M);};

var _1681=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1601)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1603)(M);}};

var _1674=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-6]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1677,M.p));
return((M.p).label)(M);};

var _1663=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1648=function(M){M.v=false;
return(_1643)(M);};

var _1637=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1622=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1624=function(M){M.v=false;
return(_1625)(M);};

var _1619=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1620)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1595)(M);}};

var _1846=function(M){if(--M.cbt<0){throw _1846;}
M.c.push(new RT.PromptFrame(_1848,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1605,2,[M.e[M.e.length-4]],".../private/map.rkt:66:11");
M.e[M.e.length-2]=new RT.Closure(_1607,3,[M.e[M.e.length-4]],".../private/map.rkt:77:11");
M.e[M.e.length-3]=new RT.Closure(_1609,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:91:11");
M.v=new RT.Closure(_1604,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"andmap");
M.e.length-=3;
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1828=function(M){if(--M.cbt<0){throw _1828;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1830)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1795=function(M){if(--M.cbt<0){throw _1795;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_1797)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1751=function(M){if(--M.cbt<0){throw _1751;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1753,M.p));
return((M.p).label)(M);};

var _1677=function(M){if(--M.cbt<0){throw _1677;}
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][13];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1651=function(M){if(--M.cbt<0){throw _1651;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1653,M.p));
return((M.p).label)(M);};

var _1847=function(M){if(--M.cbt<0){throw _1847;}
M.e.length-=(M.a-1);
return(_1848)(M);};

var _1843=function(M){if(--M.cbt<0){throw _1843;}
M.e.length-=(M.a-1);
return(_1844)(M);};

var _1830=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_1614_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1614)(M);};

var _1802=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1808=function(M){M.v=false;
return(_1805)(M);};

var _1797=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1612_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1612)(M);};

var _1777=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["ormap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1779=function(M){M.v=false;
return(_1780)(M);};

var _1610=function(M){if(--M.cbt<0){throw _1610;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1774)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1611)(M);}};


var _1740=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1746=function(M){M.v=false;
return(_1743)(M);};

var _1744=function(M){M.v=false;
return(_1743)(M);};

var _1606=function(M){if(--M.cbt<0){throw _1606;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 72 20 2369 163)"

M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_1729)(M);}else{M.e.push(M.e[M.e.length-1]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1716=function(M){M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1609=function(M){if(--M.cbt<0){throw _1609;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:91:11 whalesong/lang/private/map.rkt 91 11 3150 34)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["andmap"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1693=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["for-each"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _1686=function(M){if(M.v===false){return(_1683)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1685=function(M){M.v=false;
return(_1686)(M);};

var _1680=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1681)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1602)(M);}};

var _1668=function(M){M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1671,M.p));
return((M.p).label)(M);};


var _1640=function(M){M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1643=function(M){if(M.v===false){return(_1640)(M);}else{M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.p=_1596_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1596)(M);}};

var _1646=function(M){M.v=false;
return(_1643)(M);};

var _1633=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=RT.checkedCar(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1636,M.p));
return((M.p).label)(M);};

var _1625=function(M){if(M.v===false){return(_1622)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_1594_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1594)(M);}};

var _1620=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1593)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1597)(M);}};

var _1592=function(M){if(--M.cbt<0){throw _1592;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_1619)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1593)(M);}};

var _1848=function(M){if(--M.cbt<0){throw _1848;}
M.c.push(new RT.PromptFrame(_1850,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1611,2,[M.e[M.e.length-4]],".../private/map.rkt:97:11");
M.e[M.e.length-2]=new RT.Closure(_1613,3,[M.e[M.e.length-4]],".../private/map.rkt:108:11");
M.e[M.e.length-3]=new RT.Closure(_1615,(RT.makeArityAtLeast(1)),[M.e[M.e.length-4]],".../private/map.rkt:122:11");
M.v=new RT.Closure(_1610,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"ormap");
M.e.length-=3;
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1840=function(M){if(--M.cbt<0){throw _1840;}
M.c.push(new RT.PromptFrame(_1842,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1598,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1813=function(M){if(--M.cbt<0){throw _1813;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1815,M.p));
return((M.p).label)(M);};

var _1736=function(M){if(--M.cbt<0){throw _1736;}
if(M.v===false){return(_1733)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1606_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1606)(M);}};

var _1671=function(M){if(--M.cbt<0){throw _1671;}
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][12];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1653=function(M){if(--M.cbt<0){throw _1653;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_1643)(M);};

var _1845=function(M){if(--M.cbt<0){throw _1845;}
M.e.length-=(M.a-1);
return(_1846)(M);};

var _1837=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1617=function(M){if(--M.cbt<0){throw _1617;}
M.e.length-=(M.a-1);
return(_1618)(M);};


var _1805=function(M){if(M.v===false){return(_1802)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1816)(M);}else{M.v=false;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};


var _1806=function(M){M.v=false;
return(_1805)(M);};


var _1780=function(M){if(M.v===false){return(_1777)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1783)(M);}else{M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1615=function(M){if(--M.cbt<0){throw _1615;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:122:11 whalesong/lang/private/map.rkt 122 11 4242 33)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["ormap"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1774=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_1775)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1613)(M);}};

var _1765=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1743=function(M){if(M.v===false){return(_1740)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1754)(M);}else{M.v=true;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};


var _1742=function(M){M.v=false;
return(_1743)(M);};


var _1719=function(M){if(M.v===false){return(_1716)(M);}else{M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1722)(M);}else{M.v=true;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1714=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1605)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1609)(M);}};

var _1696=function(M){if(M.v===false){return(_1693)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][13];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1699=function(M){M.v=false;
return(_1696)(M);};

var _1695=function(M){M.v=false;
return(_1696)(M);};

var _1602=function(M){if(--M.cbt<0){throw _1602;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:48:11 whalesong/lang/private/map.rkt 48 11 1563 472)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1695)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1697)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1699)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_1701)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1704,M.p));
return((M.p).label)(M);}}}}};

var _1676=function(M){if(--M.cbt<0){throw _1676;}
M.e.length-=(M.a-1);
return(_1677)(M);};

var _1670=function(M){if(--M.cbt<0){throw _1670;}
M.e.length-=(M.a-1);
return(_1671)(M);};

var _1598=function(M){if(--M.cbt<0){throw _1598;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/private/map.rkt 43 16 1376 142)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_1668)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.a=0;
M.v=M.primitives["void"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1659=function(M){M.e.push(void(0),void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-6]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1662,M.p));
return((M.p).label)(M);};


var _1644=function(M){M.v=false;
return(_1643)(M);};


var _1626=function(M){M.v=false;
return(_1625)(M);};

var _1595=function(M){if(--M.cbt<0){throw _1595;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:21:11 whalesong/lang/private/map.rkt 21 11 642 463)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1642)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=2;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1644)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_1646)(M);}else{M.v=RT.isList(M.e[M.e.length-4]);
if(M.v===false){return(_1648)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1651,M.p));
return((M.p).label)(M);}}}}};

var _1611=function(M){if(--M.cbt<0){throw _1611;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:97:11 whalesong/lang/private/map.rkt 97 11 3265 394)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1779)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1781)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_1780)(M);}}};

var _1601=function(M){if(--M.cbt<0){throw _1601;}

//"lambda body for #(struct:LamPositionalName .../private/map.rkt:39:11 whalesong/lang/private/map.rkt 39 11 1232 319)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_1685)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_1687)(M);}else{M.v=RT.isList(M.e[M.e.length-3]);
return(_1686)(M);}}};

_1671.mvr=_1670;
_1677.mvr=_1676;
_1840.mvr=_1839;
_1842.mvr=_1841;
_1844.mvr=_1843;
_1846.mvr=_1845;
_1848.mvr=_1847;
_1850.mvr=_1849;
_1618.mvr=_1617;
var _1608_c=new RT.Closure(_1608,3,void(0),"loop");
var _1594_c=new RT.Closure(_1594,2,void(0),"loop");
var _1614_c=new RT.Closure(_1614,3,void(0),"loop");
var _1612_c=new RT.Closure(_1612,2,void(0),"loop");
var _1596_c=new RT.Closure(_1596,3,void(0),"loop");
var _1606_c=new RT.Closure(_1606,2,void(0),"loop");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1851(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/map.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/map.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/local/racket/collects/racket/private/modbeg.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1855=function(M){if(--M.cbt<0){throw _1855;}
};

var _1861=function(M){M.modules["collects/racket/private/modbeg.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("print-values")||M.primitives["print-values"]]);M.e[M.e.length-1].names=["print-values"];
M.modules["collects/racket/private/modbeg.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_1863,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_1852_c;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1856=function(M){if(--M.cbt<0){throw _1856;}
M.e.length-=(M.a-1);
return(_1857)(M);};

var _1863=function(M){if(--M.cbt<0){throw _1863;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["collects/racket/private/modbeg.rkt"],M.modules["collects/racket/private/modbeg.rkt"].getExports(),M.modules["collects/racket/private/modbeg.rkt"].getExternalExports(),M.modules["collects/racket/private/modbeg.rkt"].prefix));
return(M.p)(M);};

var _1862=function(M){if(--M.cbt<0){throw _1862;}
M.e.length-=(M.a-1);
return(_1863)(M);};

var _1854=function(M){if(--M.cbt<0){throw _1854;}
M.e.length-=(M.a-1);
return(_1855)(M);};

var _1860=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1853=function(M){M.c.push(new RT.PromptFrame(_1855,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["collects/racket/private/modbeg.rkt"]=function(){return new RT.ModuleRecord("modbeg",_1861);}
return(_1860)(M);};

var _1864=function(M){return(_1853)(M);};

var _1857=function(M){if(--M.cbt<0){throw _1857;}
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["values"];
M.e[M.e.length-2]=M.e[M.e.length-3];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1852=function(M){if(--M.cbt<0){throw _1852;}

//"lambda body for #(struct:LamPositionalName print-values collects/racket/private/modbeg.rkt 10 4 214 72)"

M.unspliceRestFromStack(0,M.a);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["for-each"];
M.a=0;
M.v=M.primitives["current-print"]._i(M);
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-3];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_1857,M.p));
return((M.p).label)(M);};

_1857.mvr=_1856;
_1863.mvr=_1862;
_1855.mvr=_1854;
var _1852_c=new RT.Closure(_1852,(RT.makeArityAtLeast(0)),void(0),"print-values");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_1864(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/local/racket/collects/racket/private/modbeg.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/local/racket/collects/racket/private/modbeg.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/list.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _1891=function(M){if(--M.cbt<0){throw _1891;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 93 2 2076 74)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_2061)(M);}else{M.v=M.e[M.e.length-4];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1889=function(M){if(--M.cbt<0){throw _1889;}

//"lambda body for #(struct:LamPositionalName cons? whalesong/lang/list.rkt 86 14 1860 22)"

M.v=RT.isPair(M.e[M.e.length-1]);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2059=function(M){M.v=false;
return(_2060)(M);};

var _2048=function(M){if(M.v===false){return(_2045)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1887_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1887)(M);}};

var _2047=function(M){M.v=false;
return(_2048)(M);};

var _1885=function(M){if(--M.cbt<0){throw _1885;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 67 4 1404 86)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2040)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1885_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1885)(M);}};

var _2031=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3579;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1882=function(M){if(--M.cbt<0){throw _1882;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2025)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2027)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1880=function(M){if(--M.cbt<0){throw _1880;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2015)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2017)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2005=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3580;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=8;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1877=function(M){if(--M.cbt<0){throw _1877;}

//"lambda body for #(struct:LamPositionalName seventh whalesong/lang/list.rkt 60 0 1252 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2001)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=7;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1991=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3581;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1874=function(M){if(--M.cbt<0){throw _1874;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1985)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_1987)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1872=function(M){if(--M.cbt<0){throw _1872;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1975)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_1977)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1965=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3582;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=4;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1869=function(M){if(--M.cbt<0){throw _1869;}

//"lambda body for #(struct:LamPositionalName third whalesong/lang/list.rkt 56 0 1144 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_1961)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=3;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1951=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3583;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1943=function(M){M.v=false;
return(_1944)(M);};

var _1929=function(M){if(--M.cbt<0){throw _1929;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:318:15 whalesong/lang/list.rkt 318 15 11384 32)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2352,M.p));
return((M.p).label)(M);};

var _2156=function(M){M.e.pop();
M.v=RT.NULL;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2133=function(M){M.e.pop();
M.p=_1903_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1903)(M);};

var _2283=function(M){M.v=false;
return(_2284)(M);};

var _2273=function(M){M.v=M.e[M.e.length-9];
return(_2274)(M);};

var _2263=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2244=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2246,M.p));
return((M.p).label)(M);};

var _2236=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.p=_1920_c;
M.a=2;
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return(_1920)(M);};

var _2228=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3584;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_1918_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2235,M.p));
return((M.p).label)(M);};

var _2221=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2230)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2233,M.p));
return((M.p).label)(M);}};

var _2210=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-5][66];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2217,M.p));
return((M.p).label)(M);};

var _2203=function(M){M.e.push(void(0));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2206,M.p));
return((M.p).label)(M);};

var _2199=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-5][65];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2202,M.p));
return((M.p).label)(M);};

var _2191=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCar(M, M.e[M.e.length-6]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-6][65];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2194,M.p));
return((M.p).label)(M);};

var _2166=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 5]).racketArity,M.a)){return(_1907)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 5];
return(_1911)(M);}};

var _2165=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 4]).racketArity,M.a)){return(_2166)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 4];
return(_1910)(M);}};

var _2157=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-8][22];
M.e[M.e.length-1]=sym3585;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2160,M.p));
return((M.p).label)(M);};

var _2146=function(M){M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-4];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2141=function(M){M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2130=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2132,M.p));
return((M.p).label)(M);};

var _2113=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][21];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2115,M.p));
return((M.p).label)(M);};

var _2104=function(M){M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][21];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2106,M.p));
return((M.p).label)(M);};

var _2093=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym3586;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2086=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][62];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2079=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][22];
M.e[M.e.length-1]=sym3587;
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2076=function(M){M.a=3;
M.v=M.primitives["format"]._i(M);
M.e.length-=3;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.v=M.primitives["raise-mismatch-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2071=function(M){M.v=false;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2061=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][61];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedSub1(M, M.e[M.e.length-6]);
M.v=RT.makePair(M.e[M.e.length-5],M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1890=function(M){if(--M.cbt<0){throw _1890;}

//"lambda body for #(struct:LamPositionalName empty? whalesong/lang/list.rkt 87 15 1899 22)"

M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1883=function(M){if(--M.cbt<0){throw _1883;}

//"lambda body for #(struct:LamPositionalName tenth whalesong/lang/list.rkt 63 0 1333 27)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2031)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][60];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=10;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2399=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2403,M.p));
return((M.p).label)(M);};

var _2401=function(M){if(M.v===false){return(_2398)(M);}else{M.v=RT.VOID;
return(_2399)(M);}};

var _1875=function(M){if(--M.cbt<0){throw _1875;}

//"lambda body for #(struct:LamPositionalName sixth whalesong/lang/list.rkt 59 0 1225 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_1991)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=6;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2376=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][69];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2375=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3588;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2376)(M);};

var _2373=function(M){M.v=false;
return(_2374)(M);};

var _2363=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][69];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-6]);
M.e.push(M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2368,M.p));
return((M.p).label)(M);};

var _1867=function(M){if(--M.cbt<0){throw _1867;}

//"lambda body for #(struct:LamPositionalName second whalesong/lang/list.rkt 55 0 1117 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_1951)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=2;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2345=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][68];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=RT.NULL;
M.e[M.e.length-4]=RT.NULL;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2274=function(M){M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2518=function(M){if(--M.cbt<0){throw _2518;}
M.c.push(new RT.PromptFrame(_2520,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1935,4,[M.e[M.e.length-1]],"mk-min");
M.e[M.e.length-1][48]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2261=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.p=_1920_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1920)(M);};

var _2252=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2241=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym3584;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2243=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_2244)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_2244)(M);}};

var _2229=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2236)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2239,M.p));
return((M.p).label)(M);}};

var _2231=function(M){if(M.v===false){return(_2228)(M);}else{M.v=RT.VOID;
return(_2229)(M);}};

var _2220=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3584;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2227,M.p));
return((M.p).label)(M);};

var _2222=function(M){M.v=false;
return(_2223)(M);};

var _2438=function(M){if(--M.cbt<0){throw _2438;}
M.c.push(new RT.PromptFrame(_2440,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1877,1,[M.e[M.e.length-1]],"seventh");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2424=function(M){if(--M.cbt<0){throw _2424;}
M.c.push(new RT.PromptFrame(_2426,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1870,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][54]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2197=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.v=(M.e[M.e.length-1]===RT.NULL);
M.e.pop();
if(M.v===false){return(_2199)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _2183=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2181=function(M){M.v=RT.isPair(M.e[M.e.length-1]);
if(M.v===false){return(_2183)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.p=_1913_c;
M.a=2;
M.c.push(new RT.CallFrame(_2187,M.p));
return(_1913)(M);}};

var _2288=function(M){if(--M.cbt<0){throw _2288;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2282)(M);};

var _2164=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_2165)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1909)(M);}};

var _2246=function(M){if(--M.cbt<0){throw _2246;}
if(M.v===false){return(_2241)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][66];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2153=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][64];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0));
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][21];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2155,M.p));
return((M.p).label)(M);};

var _2143=function(M){M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2134=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym3589;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2137,M.p));
return((M.p).label)(M);};

var _2129=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3589;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2130)(M);};

var _2117=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-7][22];
M.e[M.e.length-1]=sym3590;
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2120,M.p));
return((M.p).label)(M);};

var _2112=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3590;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2113)(M);};

var _2103=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3591;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2104)(M);};

var _2100=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][63];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.e[M.e.length-5]=RT.NULL;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2085=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3587;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2086)(M);};

var _2077=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2079)(M);}else{M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][62];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-11]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2082,M.p));
return((M.p).label)(M);}};

var _2075=function(M){M.e[M.e.length-3]=" (not a proper list)";
return(_2076)(M);};

var _2069=function(M){M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2071)(M);}else{M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-2]=M.e[M.e.length-3][21];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-5]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1892=function(M){if(--M.cbt<0){throw _1892;}

//"lambda body for #(struct:LamPositionalName make-list whalesong/lang/list.rkt 90 0 1943 208)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2065)(M);}else{M.v=RT.VOID;
return(_2066)(M);}};

var _2057=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3592;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1888=function(M){if(--M.cbt<0){throw _1888;}

//"lambda body for #(struct:LamPositionalName rest whalesong/lang/list.rkt 81 0 1734 110)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2059)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2060)(M);}};

var _1887=function(M){if(--M.cbt<0){throw _1887;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 75 4 1590 92)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2052)(M);}else{M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1887_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1887)(M);}};

var _1886=function(M){if(--M.cbt<0){throw _1886;}

//"lambda body for #(struct:LamPositionalName last whalesong/lang/list.rkt 73 0 1537 195)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2047)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_2048)(M);}};

var _1884=function(M){if(--M.cbt<0){throw _1884;}

//"lambda body for #(struct:LamPositionalName last-pair whalesong/lang/list.rkt 65 0 1362 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2035)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1885_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1885)(M);}};

var _2413=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1881=function(M){if(--M.cbt<0){throw _1881;}

//"lambda body for #(struct:LamPositionalName ninth whalesong/lang/list.rkt 62 0 1306 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2021)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][59];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=9;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2398=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2399)(M);};

var _2400=function(M){M.v=false;
return(_2401)(M);};

var _2397=function(M){if(M.v===false){return(_2394)(M);}else{M.v=RT.VOID;
return(_2395)(M);}};

var _2385=function(M){M.e.push(void(0),void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2389,M.p));
return((M.p).label)(M);};

var _1977=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2372=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2375)(M);}else{M.v=RT.VOID;
return(_2376)(M);}};

var _1870=function(M){if(--M.cbt<0){throw _1870;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1965)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_1967)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1868=function(M){if(--M.cbt<0){throw _1868;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1955)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_1957)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1947=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][52];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2349=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 3]).racketArity,M.a)){return(_1929)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 3];
return(_1931)(M);}};

var _2344=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3593;
M.e[M.e.length-2]="proper list";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2345)(M);};

var _2524=function(M){if(--M.cbt<0){throw _2524;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);extNs.set("add-between", prefix[selfMod.getPrefixOffset("add-between")]);ns.set("append*", prefix[selfMod.getPrefixOffset("append*")]);extNs.set("append*", prefix[selfMod.getPrefixOffset("append*")]);ns.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);extNs.set("append-map", prefix[selfMod.getPrefixOffset("append-map")]);ns.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);extNs.set("argmax", prefix[selfMod.getPrefixOffset("argmax")]);ns.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);extNs.set("argmin", prefix[selfMod.getPrefixOffset("argmin")]);ns.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);extNs.set("cons?", prefix[selfMod.getPrefixOffset("cons?")]);ns.set("count", prefix[selfMod.getPrefixOffset("count")]);extNs.set("count", prefix[selfMod.getPrefixOffset("count")]);ns.set("drop", prefix[selfMod.getPrefixOffset("drop")]);extNs.set("drop", prefix[selfMod.getPrefixOffset("drop")]);ns.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);extNs.set("drop-right", prefix[selfMod.getPrefixOffset("drop-right")]);ns.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);extNs.set("eighth", prefix[selfMod.getPrefixOffset("eighth")]);ns.set("empty", prefix[selfMod.getPrefixOffset("empty")]);extNs.set("empty", prefix[selfMod.getPrefixOffset("empty")]);ns.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);extNs.set("empty?", prefix[selfMod.getPrefixOffset("empty?")]);ns.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);extNs.set("fifth", prefix[selfMod.getPrefixOffset("fifth")]);ns.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);extNs.set("filter-map", prefix[selfMod.getPrefixOffset("filter-map")]);ns.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);extNs.set("filter-not", prefix[selfMod.getPrefixOffset("filter-not")]);ns.set("first", prefix[selfMod.getPrefixOffset("first")]);extNs.set("first", prefix[selfMod.getPrefixOffset("first")]);ns.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);extNs.set("flatten", prefix[selfMod.getPrefixOffset("flatten")]);ns.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);extNs.set("fourth", prefix[selfMod.getPrefixOffset("fourth")]);ns.set("last", prefix[selfMod.getPrefixOffset("last")]);extNs.set("last", prefix[selfMod.getPrefixOffset("last")]);ns.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);extNs.set("last-pair", prefix[selfMod.getPrefixOffset("last-pair")]);ns.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);extNs.set("make-list", prefix[selfMod.getPrefixOffset("make-list")]);ns.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);extNs.set("ninth", prefix[selfMod.getPrefixOffset("ninth")]);ns.set("partition", prefix[selfMod.getPrefixOffset("partition")]);extNs.set("partition", prefix[selfMod.getPrefixOffset("partition")]);ns.set("rest", prefix[selfMod.getPrefixOffset("rest")]);extNs.set("rest", prefix[selfMod.getPrefixOffset("rest")]);ns.set("second", prefix[selfMod.getPrefixOffset("second")]);extNs.set("second", prefix[selfMod.getPrefixOffset("second")]);ns.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);extNs.set("seventh", prefix[selfMod.getPrefixOffset("seventh")]);ns.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);extNs.set("sixth", prefix[selfMod.getPrefixOffset("sixth")]);ns.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);extNs.set("split-at", prefix[selfMod.getPrefixOffset("split-at")]);ns.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);extNs.set("split-at-right", prefix[selfMod.getPrefixOffset("split-at-right")]);ns.set("take", prefix[selfMod.getPrefixOffset("take")]);extNs.set("take", prefix[selfMod.getPrefixOffset("take")]);ns.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);extNs.set("take-right", prefix[selfMod.getPrefixOffset("take-right")]);ns.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);extNs.set("tenth", prefix[selfMod.getPrefixOffset("tenth")]);ns.set("third", prefix[selfMod.getPrefixOffset("third")]);extNs.set("third", prefix[selfMod.getPrefixOffset("third")]);}(M.modules["whalesong/lang/list.rkt"],M.modules["whalesong/lang/list.rkt"].getExports(),M.modules["whalesong/lang/list.rkt"].getExternalExports(),M.modules["whalesong/lang/list.rkt"].prefix));
return(M.p)(M);};

var _2516=function(M){if(--M.cbt<0){throw _2516;}
M.c.push(new RT.PromptFrame(_2518,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1934,6,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][70]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2269=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-5][67];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2272,M.p));
return((M.p).label)(M);};

var _2502=function(M){if(--M.cbt<0){throw _2502;}
M.c.push(new RT.PromptFrame(_2504,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1921,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][67]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2256=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-2]);
M.v=RT.checkedCar(M, M.e[M.e.length-4]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2259,M.p));
return((M.p).label)(M);};

var _2486=function(M){if(--M.cbt<0){throw _2486;}
M.c.push(new RT.PromptFrame(_2488,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1904,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][64]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2478=function(M){if(--M.cbt<0){throw _2478;}
M.c.push(new RT.PromptFrame(_2480,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1898,2,[M.e[M.e.length-1]],"split-at");
M.e[M.e.length-1][25]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2470=function(M){if(--M.cbt<0){throw _2470;}
M.c.push(new RT.PromptFrame(_2472,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1894,3,[M.e[M.e.length-1]],"too-large");
M.e[M.e.length-1][22]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2230=function(M){M.v=false;
return(_2231)(M);};

var _2223=function(M){if(M.v===false){return(_2220)(M);}else{M.v=RT.VOID;
return(_2221)(M);}};

var _2446=function(M){if(--M.cbt<0){throw _2446;}
M.c.push(new RT.PromptFrame(_2448,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1881,1,[M.e[M.e.length-1]],"ninth");
M.e[M.e.length-1][10]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2436=function(M){if(--M.cbt<0){throw _2436;}
M.c.push(new RT.PromptFrame(_2438,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1876,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][57]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2428=function(M){if(--M.cbt<0){throw _2428;}
M.c.push(new RT.PromptFrame(_2430,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1872,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][55]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2195=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3594;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=8;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2403=function(M){if(--M.cbt<0){throw _2403;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_2405)(M);}else{M.v=RT.VOID;
return(_2406)(M);}};

var _2185=function(M){M.p=_1913_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1913)(M);};

var _2316=function(M){if(--M.cbt<0){throw _2316;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2300=function(M){if(--M.cbt<0){throw _2300;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_1924,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:282:18");
M.a=1;
if(M.a===0){return(_2304)(M);}else{M.e.push(M.v);
return(_2304)(M);}};

var _2163=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2164)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1908)(M);}};

var _2259=function(M){if(--M.cbt<0){throw _2259;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2261)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-7]);
M.p=_1920_c;
M.a=2;
M.c.push(new RT.CallFrame(_2265,M.p));
return(_1920)(M);}};

var _2152=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3585;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2153)(M);};

var _2215=function(M){if(--M.cbt<0){throw _2215;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2202=function(M){if(--M.cbt<0){throw _2202;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2155=function(M){if(--M.cbt<0){throw _2155;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2157)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2156)(M);}};

var _2124=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2523=function(M){if(--M.cbt<0){throw _2523;}
M.e.length-=(M.a-1);
return(_2524)(M);};

var _2108=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][22];
M.e[M.e.length-1]=sym3591;
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2511=function(M){if(--M.cbt<0){throw _2511;}
M.e.length-=(M.a-1);
return(_2512)(M);};

var _2099=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3586;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2100)(M);};

var _2089=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2093)(M);}else{M.e.push(void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-5]=M.e[M.e.length-6][63];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(M.e[M.e.length-9]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e[M.e.length-4]=RT.checkedSub1(M, M.e[M.e.length-10]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-11]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-13];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.e[M.e.length-5];
M.e[M.e.length-5]=M.v;
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2487=function(M){if(--M.cbt<0){throw _2487;}
M.e.length-=(M.a-1);
return(_2488)(M);};

var _2479=function(M){if(--M.cbt<0){throw _2479;}
M.e.length-=(M.a-1);
return(_2480)(M);};

var _2066=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][61];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=RT.NULL;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2065=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3595;
M.e[M.e.length-2]="non-negative exact integer";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2066)(M);};

var _2060=function(M){if(M.v===false){return(_2057)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2052=function(M){M.v=RT.checkedCar(M, M.e[M.e.length-1]);
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2045=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3596;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2040=function(M){M.v=M.e[M.e.length-1];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2035=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3597;
M.e[M.e.length-2]="pair";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2027=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][60];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2017=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][59];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1879=function(M){if(--M.cbt<0){throw _1879;}

//"lambda body for #(struct:LamPositionalName eighth whalesong/lang/list.rkt 61 0 1279 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2011)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=8;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2395=function(M){M.v=RT.isList(M.e[M.e.length-5]);
if(M.v===false){return(_2400)(M);}else{M.v=RT.isPair(M.e[M.e.length-5]);
return(_2401)(M);}};

var _2396=function(M){M.v=false;
return(_2397)(M);};

var _2384=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2385)(M);};

var _2379=function(M){M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=RT.checkedCar(M, M.e[M.e.length-9]);
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2382,M.p));
return((M.p).label)(M);};

var _2371=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3588;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2372)(M);};

var _2366=function(M){M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1957=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][53];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1945=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3583;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=2;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2348=function(M){if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 2]).racketArity,M.a)){return(_2349)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 2];
return(_1930)(M);}};

var _2341=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2344)(M);}else{M.v=RT.VOID;
return(_2345)(M);}};

var _2326=function(M){M.e.push(void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-4]);
M.e.push(void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-5];
M.e[M.e.length-1]=M.e[M.e.length-3];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2335,M.p));
return((M.p).label)(M);};

var _2522=function(M){if(--M.cbt<0){throw _2522;}
M.c.push(new RT.PromptFrame(_2524,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1937,2,[M.e[M.e.length-1]],"argmax");
M.e[M.e.length-1][51]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2514=function(M){if(--M.cbt<0){throw _2514;}
M.c.push(new RT.PromptFrame(_2516,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1933,2,[M.e[M.e.length-1]],"filter-not");
M.e[M.e.length-1][47]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2510=function(M){if(--M.cbt<0){throw _2510;}
M.c.push(new RT.PromptFrame(_2512,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1929,2,[M.e[M.e.length-4]],"...ng/lang/list.rkt:318:15");
M.e[M.e.length-2]=new RT.Closure(_1930,3,[M.e[M.e.length-4]],"...ng/lang/list.rkt:319:15");
M.e[M.e.length-3]=new RT.Closure(_1931,(RT.makeArityAtLeast(2)),[M.e[M.e.length-4]],"...ng/lang/list.rkt:320:15");
M.v=new RT.Closure(_1928,RT.makePair(2,RT.makePair(3,RT.makePair((RT.makeArityAtLeast(2)),RT.NULL))),[M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append-map");
M.e.length-=3;
M.e[M.e.length-1][46]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2500=function(M){if(--M.cbt<0){throw _2500;}
M.c.push(new RT.PromptFrame(_2502,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1917,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"filter-map");
M.e[M.e.length-1][36]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2494=function(M){if(--M.cbt<0){throw _2494;}
M.c.push(new RT.PromptFrame(_2496,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1914,2,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][65]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2484=function(M){if(--M.cbt<0){throw _2484;}
M.c.push(new RT.PromptFrame(_2486,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1902,2,[M.e[M.e.length-1]],"drop-right");
M.e[M.e.length-1][29]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2476=function(M){if(--M.cbt<0){throw _2476;}
M.c.push(new RT.PromptFrame(_2478,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1897,5,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][63]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2468=function(M){if(--M.cbt<0){throw _2468;}
M.c.push(new RT.PromptFrame(_2470,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1893,2,[M.e[M.e.length-1]],"drop*");
M.e[M.e.length-1][21]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2462=function(M){if(--M.cbt<0){throw _2462;}
M.c.push(new RT.PromptFrame(_2464,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=RT.NULL;
M.e[M.e.length-1][17]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2454=function(M){if(--M.cbt<0){throw _2454;}
M.c.push(new RT.PromptFrame(_2456,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1886,1,[M.e[M.e.length-1]],"last");
M.e[M.e.length-1][13]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2444=function(M){if(--M.cbt<0){throw _2444;}
M.c.push(new RT.PromptFrame(_2446,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1880,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][59]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2434=function(M){if(--M.cbt<0){throw _2434;}
M.c.push(new RT.PromptFrame(_2436,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1875,1,[M.e[M.e.length-1]],"sixth");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2420=function(M){if(--M.cbt<0){throw _2420;}
M.c.push(new RT.PromptFrame(_2422,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1868,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][53]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1915=function(M){if(--M.cbt<0){throw _1915;}

//"lambda body for #(struct:LamPositionalName add-between whalesong/lang/list.rkt 176 0 5304 349)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_2195)(M);}else{M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2197)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2360=function(M){if(--M.cbt<0){throw _2360;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2307=function(M){if(--M.cbt<0){throw _2307;}
if(M.v===false){return(_2302)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-6][67];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=0;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1910=function(M){if(--M.cbt<0){throw _1910;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:165:15 whalesong/lang/list.rkt 165 15 4925 42)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-7];
M.e[M.e.length-3]=M.e[M.e.length-8];
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-10,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2278=function(M){if(--M.cbt<0){throw _2278;}
if(M.v===false){return(_2273)(M);}else{M.v=RT.checkedAdd1(M, M.e[M.e.length-9]);
return(_2274)(M);}};

var _2265=function(M){if(--M.cbt<0){throw _2265;}
M.e[M.e.length-2]=M.v;
return(_2263)(M);};

var _2235=function(M){if(--M.cbt<0){throw _2235;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2229)(M);};

var _2225=function(M){if(--M.cbt<0){throw _2225;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2223)(M);};

var _2208=function(M){if(--M.cbt<0){throw _2208;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2210)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-7][66];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-9]);
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["cdr"];
M.e[M.e.length-2]=M.e[M.e.length-12];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2213,M.p));
return((M.p).label)(M);}};


var _2115=function(M){if(--M.cbt<0){throw _2115;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2117)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2116)(M);}};

var _2521=function(M){if(--M.cbt<0){throw _2521;}
M.e.length-=(M.a-1);
return(_2522)(M);};

var _2519=function(M){if(--M.cbt<0){throw _2519;}
M.e.length-=(M.a-1);
return(_2520)(M);};

var _2509=function(M){if(--M.cbt<0){throw _2509;}
M.e.length-=(M.a-1);
return(_2510)(M);};

var _2503=function(M){if(--M.cbt<0){throw _2503;}
M.e.length-=(M.a-1);
return(_2504)(M);};

var _2495=function(M){if(--M.cbt<0){throw _2495;}
M.e.length-=(M.a-1);
return(_2496)(M);};

var _2485=function(M){if(--M.cbt<0){throw _2485;}
M.e.length-=(M.a-1);
return(_2486)(M);};

var _2477=function(M){if(--M.cbt<0){throw _2477;}
M.e.length-=(M.a-1);
return(_2478)(M);};

var _2471=function(M){if(--M.cbt<0){throw _2471;}
M.e.length-=(M.a-1);
return(_2472)(M);};

var _2463=function(M){if(--M.cbt<0){throw _2463;}
M.e.length-=(M.a-1);
return(_2464)(M);};

var _2455=function(M){if(--M.cbt<0){throw _2455;}
M.e.length-=(M.a-1);
return(_2456)(M);};

var _2447=function(M){if(--M.cbt<0){throw _2447;}
M.e.length-=(M.a-1);
return(_2448)(M);};

var _2439=function(M){if(--M.cbt<0){throw _2439;}
M.e.length-=(M.a-1);
return(_2440)(M);};

var _2431=function(M){if(--M.cbt<0){throw _2431;}
M.e.length-=(M.a-1);
return(_2432)(M);};

var _2419=function(M){if(--M.cbt<0){throw _2419;}
M.e.length-=(M.a-1);
return(_2420)(M);};

var _2025=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3579;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=10;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2406=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=RT.checkedCar(M, M.e[M.e.length-12]);
M.e[M.e.length-5]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-12]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-12,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2015=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3598;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=9;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2394=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-9];
M.e[M.e.length-5]=M.e[M.e.length-10];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2395)(M);};

var _1876=function(M){if(--M.cbt<0){throw _1876;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1995)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_1997)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1987=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][56];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1873=function(M){if(--M.cbt<0){throw _1873;}

//"lambda body for #(struct:LamPositionalName fifth whalesong/lang/list.rkt 58 0 1198 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_1981)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][55];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=5;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2374=function(M){if(M.v===false){return(_2371)(M);}else{M.v=RT.VOID;
return(_2372)(M);}};

var _2365=function(M){M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
return(_2366)(M);};

var _1955=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3599;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=3;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _1866=function(M){if(--M.cbt<0){throw _1866;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_1945)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_1947)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _2340=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3593;
M.e[M.e.length-2]="procedure (arity 1)";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2341)(M);};

var _2116=function(M){M.e.pop();
M.p=_1901_c;
M.a=2;
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return(_1901)(M);};

var _2305=function(M){M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-7];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2307,M.p));
return((M.p).label)(M);};

var _2297=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=0;
M.p=_1925_c;
M.a=3;
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return(_1925)(M);};

var _2289=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3600;
M.e[M.e.length-2]="proper list";
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["ormap"];
M.e[M.e.length-1]=_1923_c;
M.v=RT.makePair(M.e[M.e.length-8],M.e[M.e.length-9]);
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2296,M.p));
return((M.p).label)(M);};

var _2281=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3600;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="procedure (arity ~a)";
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-11];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2288,M.p));
return((M.p).label)(M);};

var _2520=function(M){if(--M.cbt<0){throw _2520;}
M.c.push(new RT.PromptFrame(_2522,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1936,2,[M.e[M.e.length-1]],"argmin");
M.e[M.e.length-1][50]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2512=function(M){if(--M.cbt<0){throw _2512;}
M.c.push(new RT.PromptFrame(_2514,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1932,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][69]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2508=function(M){if(--M.cbt<0){throw _2508;}
M.c.push(new RT.PromptFrame(_2510,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1927,2,[M.e[M.e.length-1]],"partition");
M.e[M.e.length-1][45]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2498=function(M){if(--M.cbt<0){throw _2498;}
M.c.push(new RT.PromptFrame(_2500,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1916,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][66]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2492=function(M){if(--M.cbt<0){throw _2492;}
M.c.push(new RT.PromptFrame(_2494,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_1912_c;
M.e[M.e.length-1][33]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2482=function(M){if(--M.cbt<0){throw _2482;}
M.c.push(new RT.PromptFrame(_2484,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1900,2,[M.e[M.e.length-1]],"take-right");
M.e[M.e.length-1][28]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2474=function(M){if(--M.cbt<0){throw _2474;}
M.c.push(new RT.PromptFrame(_2476,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1896,2,[M.e[M.e.length-1]],"take");
M.e[M.e.length-1][24]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2466=function(M){if(--M.cbt<0){throw _2466;}
M.c.push(new RT.PromptFrame(_2468,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1892,2,[M.e[M.e.length-1]],"make-list");
M.e[M.e.length-1][18]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2460=function(M){if(--M.cbt<0){throw _2460;}
M.c.push(new RT.PromptFrame(_2462,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_1890_c;
M.e[M.e.length-1][16]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2452=function(M){if(--M.cbt<0){throw _2452;}
M.c.push(new RT.PromptFrame(_2454,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1884,1,[M.e[M.e.length-1]],"last-pair");
M.e[M.e.length-1][12]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2442=function(M){if(--M.cbt<0){throw _2442;}
M.c.push(new RT.PromptFrame(_2444,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1879,1,[M.e[M.e.length-1]],"eighth");
M.e[M.e.length-1][9]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2432=function(M){if(--M.cbt<0){throw _2432;}
M.c.push(new RT.PromptFrame(_2434,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1874,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][56]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2426=function(M){if(--M.cbt<0){throw _2426;}
M.c.push(new RT.PromptFrame(_2428,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1871,1,[M.e[M.e.length-1]],"fourth");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2418=function(M){if(--M.cbt<0){throw _2418;}
M.c.push(new RT.PromptFrame(_2420,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1867,1,[M.e[M.e.length-1]],"second");
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2389=function(M){if(--M.cbt<0){throw _2389;}
if(M.v===false){return(_2386)(M);}else{M.v=M.e[M.e.length-7];
M.v=M.e[M.e.length-6];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=RT.checkedCar(M, M.e[M.e.length-14]);
M.e[M.e.length-5]=M.e[M.e.length-7];
M.e.push(M.e[M.e.length-14]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2356=function(M){if(--M.cbt<0){throw _2356;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2335=function(M){if(--M.cbt<0){throw _2335;}
if(M.v===false){return(_2332)(M);}else{M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][68];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=RT.makePair(M.e[M.e.length-6],M.e[M.e.length-10]);
M.v=M.e[M.e.length-11];
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2296=function(M){if(--M.cbt<0){throw _2296;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2290)(M);};

var _2276=function(M){if(--M.cbt<0){throw _2276;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2278,M.p));
return((M.p).label)(M);};


var _2233=function(M){if(--M.cbt<0){throw _2233;}
return(_2231)(M);};

var _2213=function(M){if(--M.cbt<0){throw _2213;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2215,M.p));
return((M.p).label)(M);};

var _2194=function(M){if(--M.cbt<0){throw _2194;}
M.e[M.e.length-3]=M.v;
M.a=3;
M.v=M.primitives["list*"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2187=function(M){if(--M.cbt<0){throw _2187;}
M.e[M.e.length-2]=M.v;
return(_2185)(M);};

var _2120=function(M){if(--M.cbt<0){throw _2120;}
M.e[M.e.length-3]=M.v;
return(_2116)(M);};


var _2517=function(M){if(--M.cbt<0){throw _2517;}
M.e.length-=(M.a-1);
return(_2518)(M);};

var _2507=function(M){if(--M.cbt<0){throw _2507;}
M.e.length-=(M.a-1);
return(_2508)(M);};

var _2501=function(M){if(--M.cbt<0){throw _2501;}
M.e.length-=(M.a-1);
return(_2502)(M);};

var _2493=function(M){if(--M.cbt<0){throw _2493;}
M.e.length-=(M.a-1);
return(_2494)(M);};

var _2483=function(M){if(--M.cbt<0){throw _2483;}
M.e.length-=(M.a-1);
return(_2484)(M);};

var _2475=function(M){if(--M.cbt<0){throw _2475;}
M.e.length-=(M.a-1);
return(_2476)(M);};

var _2469=function(M){if(--M.cbt<0){throw _2469;}
M.e.length-=(M.a-1);
return(_2470)(M);};

var _2461=function(M){if(--M.cbt<0){throw _2461;}
M.e.length-=(M.a-1);
return(_2462)(M);};

var _2453=function(M){if(--M.cbt<0){throw _2453;}
M.e.length-=(M.a-1);
return(_2454)(M);};

var _2445=function(M){if(--M.cbt<0){throw _2445;}
M.e.length-=(M.a-1);
return(_2446)(M);};

var _2437=function(M){if(--M.cbt<0){throw _2437;}
M.e.length-=(M.a-1);
return(_2438)(M);};

var _2429=function(M){if(--M.cbt<0){throw _2429;}
M.e.length-=(M.a-1);
return(_2430)(M);};

var _2423=function(M){if(--M.cbt<0){throw _2423;}
M.e.length-=(M.a-1);
return(_2424)(M);};

var _2415=function(M){if(--M.cbt<0){throw _2415;}
M.e.length-=(M.a-1);
return(_2416)(M);};

var _2021=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3598;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2405=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]="procedure that returns real numbers";
M.e[M.e.length-3]=0;
M.e[M.e.length-4]=M.e[M.e.length-10];
M.e[M.e.length-5]=M.e[M.e.length-11];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2406)(M);};

var _1878=function(M){if(--M.cbt<0){throw _1878;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 49 9 849 218)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2005)(M);}else{M.v=(M.e[M.e.length-4]===1);
if(M.v===false){return(_2007)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}}};

var _1997=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][57];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1985=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3581;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=6;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1981=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3601;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1975=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3601;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=5;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1961=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3599;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};



var _1941=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3602;
M.e[M.e.length-2]="non-empty list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2343=function(M){if(M.v===false){return(_2340)(M);}else{M.v=RT.VOID;
return(_2341)(M);}};

var _2342=function(M){M.v=false;
return(_2343)(M);};

var _2332=function(M){M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-4]=M.e[M.e.length-7][68];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.v=RT.makePair(M.e[M.e.length-6],M.e[M.e.length-11]);
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-11,7);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2320=function(M){M.p=_1925_c;
M.a=3;
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return(_1925)(M);};

var _2313=function(M){M.v=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2302=function(M){M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-4];
M.v=M.e[M.e.length-3];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=sym3600;
M.e[M.e.length-2]="all lists must have same size";
M.a=2;
M.v=M.primitives["error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2304=function(M){M.c.push(new RT.Frame());
M.c[M.c.length-1].pendingBegin0Count=M.a;
M.unspliceRestFromStack(0,M.a);
M.c[M.c.length-1].pendingBegin0Values=M.e[M.e.length-1];
M.e.pop();
M.v=M.e[M.e.length-3];
M.e.push(M.c[M.c.length-1].pendingBegin0Values);
M.spliceListIntoStack(0);
M.a=M.c[M.c.length-1].pendingBegin0Count;
M.c.pop();
if(M.a===0){return(_2305)(M);}else{M.v=M.e[M.e.length-1];
M.e.pop();
return(_2305)(M);}};

var _2290=function(M){M.v=RT.isPair(M.e[M.e.length-4]);
if(M.v===false){return(_2297)(M);}else{M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2300,M.p));
return((M.p).label)(M);}};

var _2292=function(M){if(M.v===false){return(_2289)(M);}else{M.v=RT.VOID;
return(_2290)(M);}};

var _2284=function(M){if(M.v===false){return(_2281)(M);}else{M.v=RT.VOID;
return(_2282)(M);}};



var _2506=function(M){if(--M.cbt<0){throw _2506;}
M.c.push(new RT.PromptFrame(_2508,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1926,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][68]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2496=function(M){if(--M.cbt<0){throw _2496;}
M.c.push(new RT.PromptFrame(_2498,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1915,2,[M.e[M.e.length-1]],"add-between");
M.e[M.e.length-1][34]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2490=function(M){if(--M.cbt<0){throw _2490;}
M.c.push(new RT.PromptFrame(_2492,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=new RT.Closure(_1907,1,[M.e[M.e.length-6]],"...ng/lang/list.rkt:162:15");
M.e[M.e.length-2]=new RT.Closure(_1908,2,[M.e[M.e.length-6]],"...ng/lang/list.rkt:163:15");
M.e[M.e.length-3]=new RT.Closure(_1909,3,[M.e[M.e.length-6]],"...ng/lang/list.rkt:164:15");
M.e[M.e.length-4]=new RT.Closure(_1910,4,[M.e[M.e.length-6]],"...ng/lang/list.rkt:165:15");
M.e[M.e.length-5]=new RT.Closure(_1911,(RT.makeArityAtLeast(1)),[M.e[M.e.length-6]],"...ng/lang/list.rkt:166:15");
M.v=new RT.Closure(_1906,RT.makePair(1,RT.makePair(2,RT.makePair(3,RT.makePair(4,RT.makePair((RT.makeArityAtLeast(1)),RT.NULL))))),[M.e[M.e.length-5],M.e[M.e.length-4],M.e[M.e.length-3],M.e[M.e.length-2],M.e[M.e.length-1]],"append*");
M.e.length-=5;
M.e[M.e.length-1][31]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2480=function(M){if(--M.cbt<0){throw _2480;}
M.c.push(new RT.PromptFrame(_2482,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1899,2,[M.e[M.e.length-1]],"drop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2472=function(M){if(--M.cbt<0){throw _2472;}
M.c.push(new RT.PromptFrame(_2474,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1895,4,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][62]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2464=function(M){if(--M.cbt<0){throw _2464;}
M.c.push(new RT.PromptFrame(_2466,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1891,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][61]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2458=function(M){if(--M.cbt<0){throw _2458;}
M.c.push(new RT.PromptFrame(_2460,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_1889_c;
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2450=function(M){if(--M.cbt<0){throw _2450;}
M.c.push(new RT.PromptFrame(_2452,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1883,1,[M.e[M.e.length-1]],"tenth");
M.e[M.e.length-1][11]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2440=function(M){if(--M.cbt<0){throw _2440;}
M.c.push(new RT.PromptFrame(_2442,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1878,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][58]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2430=function(M){if(--M.cbt<0){throw _2430;}
M.c.push(new RT.PromptFrame(_2432,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1873,1,[M.e[M.e.length-1]],"fifth");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2416=function(M){if(--M.cbt<0){throw _2416;}
M.c.push(new RT.PromptFrame(_2418,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1866,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][52]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1940=function(M){if(--M.cbt<0){throw _1940;}
};

var _2368=function(M){if(--M.cbt<0){throw _2368;}
if(M.v===false){return(_2365)(M);}else{M.v=M.e[M.e.length-6];
M.v=M.e[M.e.length-7];
return(_2366)(M);}};

var _1913=function(M){if(--M.cbt<0){throw _1913;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 169 2 5055 168)"

M.v=(M.e[M.e.length-1]===RT.NULL);
if(M.v===false){return(_2181)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1911=function(M){if(--M.cbt<0){throw _1911;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:166:15 whalesong/lang/list.rkt 166 15 4983 38)"

M.unspliceRestFromStack(1,(M.a-1));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["apply"];
M.e[M.e.length-2]=M.primitives["append"];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2286=function(M){if(--M.cbt<0){throw _2286;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2284)(M);};

var _2255=function(M){if(--M.cbt<0){throw _2255;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2227=function(M){if(--M.cbt<0){throw _2227;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-1]);
M.e.pop();
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=3;
return(_2221)(M);};

var _2217=function(M){if(--M.cbt<0){throw _2217;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2206=function(M){if(--M.cbt<0){throw _2206;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2208,M.p));
return((M.p).label)(M);};

var _2145=function(M){if(--M.cbt<0){throw _2145;}
M.e[M.e.length-2]=M.v;
return(_2143)(M);};

var _2132=function(M){if(--M.cbt<0){throw _2132;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2134)(M);}else{M.e[M.e.length-3]=M.e[M.e.length-1];
return(_2133)(M);}};

var _2082=function(M){if(--M.cbt<0){throw _2082;}
M.e[M.e.length-2]=M.v;
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2515=function(M){if(--M.cbt<0){throw _2515;}
M.e.length-=(M.a-1);
return(_2516)(M);};

var _2505=function(M){if(--M.cbt<0){throw _2505;}
M.e.length-=(M.a-1);
return(_2506)(M);};

var _2499=function(M){if(--M.cbt<0){throw _2499;}
M.e.length-=(M.a-1);
return(_2500)(M);};

var _2491=function(M){if(--M.cbt<0){throw _2491;}
M.e.length-=(M.a-1);
return(_2492)(M);};

var _2481=function(M){if(--M.cbt<0){throw _2481;}
M.e.length-=(M.a-1);
return(_2482)(M);};

var _2473=function(M){if(--M.cbt<0){throw _2473;}
M.e.length-=(M.a-1);
return(_2474)(M);};

var _2467=function(M){if(--M.cbt<0){throw _2467;}
M.e.length-=(M.a-1);
return(_2468)(M);};

var _2459=function(M){if(--M.cbt<0){throw _2459;}
M.e.length-=(M.a-1);
return(_2460)(M);};

var _2451=function(M){if(--M.cbt<0){throw _2451;}
M.e.length-=(M.a-1);
return(_2452)(M);};

var _2443=function(M){if(--M.cbt<0){throw _2443;}
M.e.length-=(M.a-1);
return(_2444)(M);};

var _2435=function(M){if(--M.cbt<0){throw _2435;}
M.e.length-=(M.a-1);
return(_2436)(M);};

var _2427=function(M){if(--M.cbt<0){throw _2427;}
M.e.length-=(M.a-1);
return(_2428)(M);};

var _2417=function(M){if(--M.cbt<0){throw _2417;}
M.e.length-=(M.a-1);
return(_2418)(M);};

var _2414=function(M){M.modules["whalesong/lang/list.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("first")||M.primitives["first"],M.primitives["raise-type-error"],M.params.currentNamespace.get("second")||M.primitives["second"],M.primitives["format"],M.params.currentNamespace.get("third")||M.primitives["third"],M.params.currentNamespace.get("fourth")||M.primitives["fourth"],M.params.currentNamespace.get("fifth")||M.primitives["fifth"],M.params.currentNamespace.get("sixth")||M.primitives["sixth"],M.params.currentNamespace.get("seventh")||M.primitives["seventh"],M.params.currentNamespace.get("eighth")||M.primitives["eighth"],M.params.currentNamespace.get("ninth")||M.primitives["ninth"],M.params.currentNamespace.get("tenth")||M.primitives["tenth"],M.params.currentNamespace.get("last-pair")||M.primitives["last-pair"],M.params.currentNamespace.get("last")||M.primitives["last"],M.params.currentNamespace.get("rest")||M.primitives["rest"],M.params.currentNamespace.get("cons?")||M.primitives["cons?"],M.params.currentNamespace.get("empty?")||M.primitives["empty?"],M.params.currentNamespace.get("empty")||M.primitives["empty"],M.params.currentNamespace.get("make-list")||M.primitives["make-list"],M.primitives["exact-nonnegative-integer?"],M.primitives["zero?"],M.params.currentNamespace.get("drop*")||M.primitives["drop*"],M.params.currentNamespace.get("too-large")||M.primitives["too-large"],M.primitives["raise-mismatch-error"],M.params.currentNamespace.get("take")||M.primitives["take"],M.params.currentNamespace.get("split-at")||M.primitives["split-at"],M.primitives["reverse"],M.params.currentNamespace.get("drop")||M.primitives["drop"],M.params.currentNamespace.get("take-right")||M.primitives["take-right"],M.params.currentNamespace.get("drop-right")||M.primitives["drop-right"],M.params.currentNamespace.get("split-at-right")||M.primitives["split-at-right"],M.params.currentNamespace.get("append*")||M.primitives["append*"],M.primitives["append"],M.params.currentNamespace.get("flatten")||M.primitives["flatten"],M.params.currentNamespace.get("add-between")||M.primitives["add-between"],M.primitives["list*"],M.params.currentNamespace.get("filter-map")||M.primitives["filter-map"],M.primitives["procedure?"],M.primitives["procedure-arity-includes?"],M.primitives["length"],M.primitives["andmap"],M.primitives["ormap"],M.primitives["map"],M.primitives["error"],M.params.currentNamespace.get("count")||M.primitives["count"],M.params.currentNamespace.get("partition")||M.primitives["partition"],M.params.currentNamespace.get("append-map")||M.primitives["append-map"],M.params.currentNamespace.get("filter-not")||M.primitives["filter-not"],M.params.currentNamespace.get("mk-min")||M.primitives["mk-min"],M.primitives["real?"],M.params.currentNamespace.get("argmin")||M.primitives["argmin"],M.params.currentNamespace.get("argmax")||M.primitives["argmax"],false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);M.e[M.e.length-1].names=["first","raise-type-error","second","format","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","last-pair","last","rest","cons?","empty?","empty","make-list","exact-nonnegative-integer?","zero?","drop*","too-large","raise-mismatch-error","take","split-at","reverse","drop","take-right","drop-right","split-at-right","append*","append","flatten","add-between","list*","filter-map","procedure?","procedure-arity-includes?","length","andmap","ormap","map","error","count","partition","append-map","filter-not","mk-min","real?","argmin","argmax",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
M.modules["whalesong/lang/list.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_2416,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1865,1,[M.e[M.e.length-1]],"first");
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1936=function(M){if(--M.cbt<0){throw _1936;}

//"lambda body for #(struct:LamPositionalName argmin whalesong/lang/list.rkt 366 0 13188 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives["<"];
M.e[M.e.length-2]=sym3603;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2011=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3580;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2001=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3604;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1995=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3604;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="list with ~a or more items";
M.e[M.e.length-2]=7;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2386=function(M){M.v=M.e[M.e.length-1];
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-6]=M.e[M.e.length-8][70];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e[M.e.length-2]=M.e[M.e.length-10];
M.e[M.e.length-3]=M.e[M.e.length-11];
M.e[M.e.length-4]=M.e[M.e.length-12];
M.e[M.e.length-5]=M.e[M.e.length-13];
M.v=RT.checkedCdr(M, M.e[M.e.length-14]);
M.p=M.e[M.e.length-6];
M.e[M.e.length-6]=M.v;
M.a=6;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-14,8);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _1871=function(M){if(--M.cbt<0){throw _1871;}

//"lambda body for #(struct:LamPositionalName fourth whalesong/lang/list.rkt 57 0 1171 26)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isList(M.e[M.e.length-2]);
if(M.v===false){return(_1971)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=4;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1967=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][54];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _1931=function(M){if(--M.cbt<0){throw _1931;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:320:15 whalesong/lang/list.rkt 320 15 11488 46)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["map"];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.e[M.e.length-4]=M.e[M.e.length-10];
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2360,M.p));
return((M.p).label)(M);};

var _1944=function(M){if(M.v===false){return(_1941)(M);}else{M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1865=function(M){if(--M.cbt<0){throw _1865;}

//"lambda body for #(struct:LamPositionalName first whalesong/lang/list.rkt 39 0 613 112)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_1943)(M);}else{M.v=RT.isList(M.e[M.e.length-2]);
return(_1944)(M);}};

var _1907=function(M){if(--M.cbt<0){throw _1907;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:162:15 whalesong/lang/list.rkt 162 15 4764 24)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2319=function(M){M.e[M.e.length-3]=M.e[M.e.length-6];
return(_2320)(M);};

var _2317=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-4]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2322,M.p));
return((M.p).label)(M);};




var _2291=function(M){M.v=false;
return(_2292)(M);};

var _2282=function(M){M.v=RT.isList(M.e[M.e.length-3]);
if(M.v===false){return(_2291)(M);}else{M.e.push(void(0),void(0));
M.p=M.primitives["andmap"];
M.e[M.e.length-1]=M.primitives["list?"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2294,M.p));
return((M.p).label)(M);}};

var _2525=function(M){return(_1938)(M);};


var _2504=function(M){if(--M.cbt<0){throw _2504;}
M.c.push(new RT.PromptFrame(_2506,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1922,(RT.makeArityAtLeast(2)),[M.e[M.e.length-1]],"count");
M.e[M.e.length-1][44]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2488=function(M){if(--M.cbt<0){throw _2488;}
M.c.push(new RT.PromptFrame(_2490,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1905,2,[M.e[M.e.length-1]],"split-at-right");
M.e[M.e.length-1][30]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _2456=function(M){if(--M.cbt<0){throw _2456;}
M.c.push(new RT.PromptFrame(_2458,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1888,1,[M.e[M.e.length-1]],"rest");
M.e[M.e.length-1][14]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2448=function(M){if(--M.cbt<0){throw _2448;}
M.c.push(new RT.PromptFrame(_2450,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1882,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][60]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};




var _2422=function(M){if(--M.cbt<0){throw _2422;}
M.c.push(new RT.PromptFrame(_2424,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_1869,1,[M.e[M.e.length-1]],"third");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2382=function(M){if(--M.cbt<0){throw _2382;}
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-1]);
M.v=M.primitives["real?"]._i(M);
M.e.pop();
if(M.v===false){return(_2384)(M);}else{M.v=RT.VOID;
return(_2385)(M);}};

var _2352=function(M){if(--M.cbt<0){throw _2352;}
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2322=function(M){if(--M.cbt<0){throw _2322;}
if(M.v===false){return(_2319)(M);}else{M.e[M.e.length-3]=RT.checkedAdd1(M, M.e[M.e.length-6]);
return(_2320)(M);}};

var _2294=function(M){if(--M.cbt<0){throw _2294;}
return(_2292)(M);};

var _2272=function(M){if(--M.cbt<0){throw _2272;}
M.e[M.e.length-3]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-3]=M.primitives["apply"];
M.e[M.e.length-1]=M.e[M.e.length-9];
M.e.push(M.e[M.e.length-10]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.primitives["car"];
M.e[M.e.length-2]=M.e[M.e.length-13];
M.a=2;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2276,M.p));
return((M.p).label)(M);};


var _2239=function(M){if(--M.cbt<0){throw _2239;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["andmap"];
M.v=new RT.Closure(_1919,1,[M.e[M.e.length-4],M.e[M.e.length-3]],"...ng/lang/list.rkt:256:18");
M.a=1;
if(M.a===0){return(_2243)(M);}else{M.e.push(M.v);
return(_2243)(M);}};



var _2160=function(M){if(--M.cbt<0){throw _2160;}
M.e[M.e.length-3]=M.v;
return(_2156)(M);};

var _2137=function(M){if(--M.cbt<0){throw _2137;}
M.e[M.e.length-3]=M.v;
return(_2133)(M);};

var _2106=function(M){if(--M.cbt<0){throw _2106;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2108)(M);}else{M.v=M.e[M.e.length-1];
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2513=function(M){if(--M.cbt<0){throw _2513;}
M.e.length-=(M.a-1);
return(_2514)(M);};


var _2497=function(M){if(--M.cbt<0){throw _2497;}
M.e.length-=(M.a-1);
return(_2498)(M);};

var _2489=function(M){if(--M.cbt<0){throw _2489;}
M.e.length-=(M.a-1);
return(_2490)(M);};


var _1895=function(M){if(--M.cbt<0){throw _1895;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 109 2 2636 173)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_2077)(M);}else{M.v=RT.NULL;
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2465=function(M){if(--M.cbt<0){throw _2465;}
M.e.length-=(M.a-1);
return(_2466)(M);};

var _2457=function(M){if(--M.cbt<0){throw _2457;}
M.e.length-=(M.a-1);
return(_2458)(M);};

var _2449=function(M){if(--M.cbt<0){throw _2449;}
M.e.length-=(M.a-1);
return(_2450)(M);};

var _2441=function(M){if(--M.cbt<0){throw _2441;}
M.e.length-=(M.a-1);
return(_2442)(M);};

var _2433=function(M){if(--M.cbt<0){throw _2433;}
M.e.length-=(M.a-1);
return(_2434)(M);};

var _2425=function(M){if(--M.cbt<0){throw _2425;}
M.e.length-=(M.a-1);
return(_2426)(M);};

var _2421=function(M){if(--M.cbt<0){throw _2421;}
M.e.length-=(M.a-1);
return(_2422)(M);};

var _1939=function(M){if(--M.cbt<0){throw _1939;}
M.e.length-=(M.a-1);
return(_1940)(M);};

var _1937=function(M){if(--M.cbt<0){throw _1937;}

//"lambda body for #(struct:LamPositionalName argmax whalesong/lang/list.rkt 367 0 13235 46)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][48];
M.e[M.e.length-1]=M.primitives[">"];
M.e[M.e.length-2]=sym3605;
M.e[M.e.length-3]=M.e[M.e.length-6];
M.e[M.e.length-4]=M.e[M.e.length-7];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};


var _2007=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][58];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.v=RT.checkedSub1(M, M.e[M.e.length-7]);
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1935=function(M){if(--M.cbt<0){throw _1935;}

//"lambda body for #(struct:LamPositionalName mk-min whalesong/lang/list.rkt 341 0 12292 894)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2396)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2397)(M);}};


var _1934=function(M){if(--M.cbt<0){throw _1934;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 351 4 12715 469)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-7]===RT.NULL);
if(M.v===false){return(_2379)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1971=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=sym3582;
M.e[M.e.length-2]="list";
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _1933=function(M){if(--M.cbt<0){throw _1933;}

//"lambda body for #(struct:LamPositionalName filter-not whalesong/lang/list.rkt 324 0 11634 500)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2373)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2374)(M);}};

var _1932=function(M){if(--M.cbt<0){throw _1932;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 332 2 11989 144)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2363)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["reverse"]._i(M);
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1930=function(M){if(--M.cbt<0){throw _1930;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:319:15 whalesong/lang/list.rkt 319 15 11432 40)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["map"];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e[M.e.length-3]=M.e[M.e.length-9];
M.a=3;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2356,M.p));
return((M.p).label)(M);};

var _1928=function(M){if(--M.cbt<0){throw _1928;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2348)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1929)(M);}};

var _1938=function(M){M.c.push(new RT.PromptFrame(_1940,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/list.rkt"]=function(){return new RT.ModuleRecord("list",_2414);}
return(_2413)(M);};

var _1927=function(M){if(--M.cbt<0){throw _1927;}

//"lambda body for #(struct:LamPositionalName partition whalesong/lang/list.rkt 307 0 10913 435)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2342)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=1;
M.v=M.primitives["procedure-arity-includes?"]._i(M);
M.e.length-=2;
return(_2343)(M);}};

var _1926=function(M){if(--M.cbt<0){throw _1926;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 311 2 11151 196)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2326)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,5);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};



var _1925=function(M){if(--M.cbt<0){throw _1925;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 289 4 10141 90)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2317)(M);}else{M.v=M.e[M.e.length-3];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1924=function(M){if(--M.cbt<0){throw _1924;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:282:18 whalesong/lang/list.rkt 282 18 9859 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2316,M.p));
return((M.p).label)(M);};

var _1923=function(M){if(--M.cbt<0){throw _1923;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:279:12 whalesong/lang/list.rkt 279 12 9744 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_2313)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _1922=function(M){if(--M.cbt<0){throw _1922;}

//"lambda body for #(struct:LamPositionalName count whalesong/lang/list.rkt 272 0 9446 787)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2283)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2286,M.p));
return((M.p).label)(M);}};


var _1921=function(M){if(--M.cbt<0){throw _1921;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 283 8 9903 176)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2269)(M);}else{M.v=M.e[M.e.length-5];
M.e.length-=5;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _1920=function(M){if(--M.cbt<0){throw _1920;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 265 4 9222 140)"

M.v=(M.e[M.e.length-2]===RT.NULL);
if(M.v===false){return(_2256)(M);}else{M.v=RT.NULL;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _1919=function(M){if(--M.cbt<0){throw _1919;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:256:18 whalesong/lang/list.rkt 256 18 8870 31)"

M.e.push(M.p.closedVals[0],M.p.closedVals[1]);
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2255,M.p));
return((M.p).label)(M);};

var _1918=function(M){if(--M.cbt<0){throw _1918;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:253:12 whalesong/lang/list.rkt 253 12 8755 36)"

M.v=RT.isList(M.e[M.e.length-1]);
if(M.v===false){return(_2252)(M);}else{M.v=false;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _1917=function(M){if(--M.cbt<0){throw _1917;}

//"lambda body for #(struct:LamPositionalName filter-map whalesong/lang/list.rkt 246 0 8442 922)"

M.unspliceRestFromStack(2,(M.a-2));
M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["procedure?"]._i(M);
M.e.pop();
if(M.v===false){return(_2222)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2225,M.p));
return((M.p).label)(M);}};


var _1916=function(M){if(--M.cbt<0){throw _1916;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 257 8 8914 241)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2203)(M);}else{M.v=RT.NULL;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1914=function(M){if(--M.cbt<0){throw _1914;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 181 20 5502 147)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-3]===RT.NULL);
if(M.v===false){return(_2191)(M);}else{M.v=RT.NULL;
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};


var _1912=function(M){if(--M.cbt<0){throw _1912;}

//"lambda body for #(struct:LamPositionalName flatten whalesong/lang/list.rkt 168 0 5025 199)"

M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=RT.NULL;
M.p=_1913_c;
M.a=2;
M.e.splice(M.e.length-3,1);
M.c[M.c.length-1].p=M.p;
return(_1913)(M);};

var _1909=function(M){if(--M.cbt<0){throw _1909;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:164:15 whalesong/lang/list.rkt 164 15 4873 36)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e[M.e.length-4]=M.e[M.e.length-8];
M.a=4;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1908=function(M){if(--M.cbt<0){throw _1908;}

//"lambda body for #(struct:LamPositionalName ...ng/lang/list.rkt:163:15 whalesong/lang/list.rkt 163 15 4827 30)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.p=M.primitives["apply"];
M.e[M.e.length-1]=M.primitives["append"];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.e[M.e.length-3]=M.e[M.e.length-6];
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-6,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _1906=function(M){if(--M.cbt<0){throw _1906;}
if(!RT.isArityMatching(((M.p).closedVals[(M.p).closedVals.length - 1]).racketArity,M.a)){return(_2163)(M);}else{M.p=(M.p).closedVals[(M.p).closedVals.length - 1];
return(_1907)(M);}};

var _1905=function(M){if(--M.cbt<0){throw _1905;}

//"lambda body for #(struct:LamPositionalName split-at-right whalesong/lang/list.rkt 150 0 4278 453)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2152)(M);}else{M.v=RT.VOID;
return(_2153)(M);}};

var _1904=function(M){if(--M.cbt<0){throw _1904;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 153 2 4424 306)"

M.e.push(M.p.closedVals[0]);
M.v=RT.isPair(M.e[M.e.length-3]);
if(M.v===false){return(_2146)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][64];
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-5]);
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["unsafe-car"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=M.e[M.e.length-9];
M.v=RT.makePair(M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-7,4);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1903=function(M){while(true){if(--M.cbt<0){throw _1903;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 143 2 4028 247)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2141)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCar(M, M.e[M.e.length-3]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-5]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1903_c;
M.a=2;
M.c.push(new RT.CallFrame(_2145,M.p));
}}};

var _1902=function(M){if(--M.cbt<0){throw _1902;}

//"lambda body for #(struct:LamPositionalName drop-right whalesong/lang/list.rkt 140 0 3890 386)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2129)(M);}else{M.v=RT.VOID;
return(_2130)(M);}};

var _1901=function(M){if(--M.cbt<0){throw _1901;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 133 2 3657 230)"

M.v=RT.isPair(M.e[M.e.length-2]);
if(M.v===false){return(_2124)(M);}else{M.e.push(void(0),void(0));
M.e[M.e.length-1]=RT.checkedCdr(M, M.e[M.e.length-3]);
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["unsafe-cdr"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.p=_1901_c;
M.a=2;
M.e.splice(M.e.length-4,2);
M.c[M.c.length-1].p=M.p;
return(_1901)(M);}};


var _1900=function(M){if(--M.cbt<0){throw _1900;}

//"lambda body for #(struct:LamPositionalName take-right whalesong/lang/list.rkt 130 0 3512 376)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2112)(M);}else{M.v=RT.VOID;
return(_2113)(M);}};

var _1899=function(M){if(--M.cbt<0){throw _1899;}

//"lambda body for #(struct:LamPositionalName drop whalesong/lang/list.rkt 122 0 3176 253)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2103)(M);}else{M.v=RT.VOID;
return(_2104)(M);}};

var _1898=function(M){if(--M.cbt<0){throw _1898;}

//"lambda body for #(struct:LamPositionalName split-at whalesong/lang/list.rkt 114 0 2812 362)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2099)(M);}else{M.v=RT.VOID;
return(_2100)(M);}};

var _1897=function(M){if(--M.cbt<0){throw _1897;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/list.rkt 117 2 2958 215)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-5]);
if(M.v===false){return(_2089)(M);}else{M.v=M.e[M.e.length-5];
M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0),void(0));
M.e[M.e.length-2]=M.primitives["values"];
M.e.push(M.e[M.e.length-8]);
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-6];
M.p=M.e[M.e.length-2];
M.e[M.e.length-2]=M.v;
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-8,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _1896=function(M){if(--M.cbt<0){throw _1896;}

//"lambda body for #(struct:LamPositionalName take whalesong/lang/list.rkt 106 0 2498 312)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["exact-nonnegative-integer?"]._i(M);
M.e.pop();
if(M.v===false){return(_2085)(M);}else{M.v=RT.VOID;
return(_2086)(M);}};

var _1894=function(M){if(--M.cbt<0){throw _1894;}

//"lambda body for #(struct:LamPositionalName too-large whalesong/lang/list.rkt 99 0 2322 174)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="index ~e too large for list~a: ";
M.e[M.e.length-2]=M.e[M.e.length-10];
M.v=RT.isList(M.e[M.e.length-9]);
if(M.v===false){return(_2075)(M);}else{M.e[M.e.length-3]="";
return(_2076)(M);}};

var _1893=function(M){if(--M.cbt<0){throw _1893;}

//"lambda body for #(struct:LamPositionalName drop* whalesong/lang/list.rkt 97 0 2175 146)"

M.e.push(M.p.closedVals[0]);
M.v=RT.checkedIsZero(M, M.e[M.e.length-3]);
if(M.v===false){return(_2069)(M);}else{M.v=M.e[M.e.length-2];
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

_2416.mvr=_2415;
_2418.mvr=_2417;
_2420.mvr=_2419;
_2422.mvr=_2421;
_2424.mvr=_2423;
_2426.mvr=_2425;
_2428.mvr=_2427;
_2430.mvr=_2429;
_2432.mvr=_2431;
_2434.mvr=_2433;
_2436.mvr=_2435;
_2438.mvr=_2437;
_2440.mvr=_2439;
_2442.mvr=_2441;
_2444.mvr=_2443;
_2446.mvr=_2445;
_2448.mvr=_2447;
_2450.mvr=_2449;
_2452.mvr=_2451;
_2454.mvr=_2453;
_2456.mvr=_2455;
_2458.mvr=_2457;
_2460.mvr=_2459;
_2462.mvr=_2461;
_2464.mvr=_2463;
_2466.mvr=_2465;
_2468.mvr=_2467;
_2470.mvr=_2469;
_2472.mvr=_2471;
_2474.mvr=_2473;
_2476.mvr=_2475;
_2478.mvr=_2477;
_2480.mvr=_2479;
_2482.mvr=_2481;
_2484.mvr=_2483;
_2486.mvr=_2485;
_2488.mvr=_2487;
_2490.mvr=_2489;
_2492.mvr=_2491;
_2494.mvr=_2493;
_2496.mvr=_2495;
_2498.mvr=_2497;
_2500.mvr=_2499;
_2502.mvr=_2501;
_2504.mvr=_2503;
_2506.mvr=_2505;
_2508.mvr=_2507;
_2510.mvr=_2509;
_2512.mvr=_2511;
_2514.mvr=_2513;
_2516.mvr=_2515;
_2518.mvr=_2517;
_2520.mvr=_2519;
_2522.mvr=_2521;
_2524.mvr=_2523;
_1940.mvr=_1939;
var sym3598=RT.makeSymbol("ninth");
var sym3599=RT.makeSymbol("third");
var sym3601=RT.makeSymbol("fifth");
var sym3597=RT.makeSymbol("last-pair");
var sym3595=RT.makeSymbol("make-list");
var sym3593=RT.makeSymbol("partition");
var sym3600=RT.makeSymbol("count");
var sym3594=RT.makeSymbol("add-between");
var sym3591=RT.makeSymbol("drop");
var sym3596=RT.makeSymbol("last");
var sym3592=RT.makeSymbol("rest");
var sym3581=RT.makeSymbol("sixth");
var sym3582=RT.makeSymbol("fourth");
var sym3585=RT.makeSymbol("split-at-right");
var sym3586=RT.makeSymbol("split-at");
var sym3590=RT.makeSymbol("take-right");
var sym3589=RT.makeSymbol("drop-right");
var sym3587=RT.makeSymbol("take");
var sym3579=RT.makeSymbol("tenth");
var sym3604=RT.makeSymbol("seventh");
var sym3602=RT.makeSymbol("first");
var sym3605=RT.makeSymbol("argmax");
var sym3584=RT.makeSymbol("filter-map");
var sym3588=RT.makeSymbol("filter-not");
var sym3603=RT.makeSymbol("argmin");
var sym3583=RT.makeSymbol("second");
var sym3580=RT.makeSymbol("eighth");var _1890_c=new RT.Closure(_1890,1,void(0),"empty?");
var _1912_c=new RT.Closure(_1912,1,void(0),"flatten");
var _1887_c=new RT.Closure(_1887,2,void(0),"loop");
var _1920_c=new RT.Closure(_1920,2,void(0),"loop");
var _1885_c=new RT.Closure(_1885,2,void(0),"loop");
var _1918_c=new RT.Closure(_1918,1,void(0),"...ng/lang/list.rkt:253:12");
var _1901_c=new RT.Closure(_1901,2,void(0),"loop");
var _1903_c=new RT.Closure(_1903,2,void(0),"loop");
var _1925_c=new RT.Closure(_1925,3,void(0),"loop");
var _1923_c=new RT.Closure(_1923,1,void(0),"...ng/lang/list.rkt:279:12");
var _1889_c=new RT.Closure(_1889,1,void(0),"cons?");
var _1913_c=new RT.Closure(_1913,2,void(0),"loop");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2525(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/list.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/list.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/whalesong.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2548=function(M){if(--M.cbt<0){throw _2548;}
M.e.push([]);M.e[M.e.length-1].names=[];
M.modules["whalesong/lang/whalesong.rkt"].prefix=M.e[M.e.length-1];
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("*", M.primitives["*"]);ns.set("+", M.primitives["+"]);ns.set("-", M.primitives["-"]);ns.set("/", M.primitives["/"]);ns.set("<", M.primitives["<"]);ns.set("<=", M.primitives["<="]);ns.set("=", M.primitives["="]);ns.set(">", M.primitives[">"]);ns.set(">=", M.primitives[">="]);ns.set("abort-current-continuation", M.primitives["abort-current-continuation"]);ns.set("abs", M.primitives["abs"]);ns.set("acos", M.primitives["acos"]);ns.set("add-between", M.modules["whalesong/lang/list.rkt"].getExports().get("add-between"));ns.set("add1", M.primitives["add1"]);ns.set("andmap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("andmap2"));ns.set("angle", M.primitives["angle"]);ns.set("append", M.primitives["append"]);ns.set("append*", M.modules["whalesong/lang/list.rkt"].getExports().get("append*"));ns.set("append-map", M.modules["whalesong/lang/list.rkt"].getExports().get("append-map"));ns.set("apply", M.primitives["apply"]);ns.set("argmax", M.modules["whalesong/lang/list.rkt"].getExports().get("argmax"));ns.set("argmin", M.modules["whalesong/lang/list.rkt"].getExports().get("argmin"));ns.set("asin", M.primitives["asin"]);ns.set("assf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assf"));ns.set("assoc", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assoc"));ns.set("assq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assq"));ns.set("assv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("assv"));ns.set("atan", M.primitives["atan"]);ns.set("boolean=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("boolean=?"));ns.set("boolean?", M.primitives["boolean?"]);ns.set("box", M.primitives["box"]);ns.set("box?", M.primitives["box?"]);ns.set("build-list", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-list"));ns.set("build-string", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-string"));ns.set("build-vector", M.modules["whalesong/lang/private/list.rkt"].getExports().get("build-vector"));ns.set("byte?", M.primitives["byte?"]);ns.set("caaaar", M.primitives["caaaar"]);ns.set("caaadr", M.primitives["caaadr"]);ns.set("caaar", M.primitives["caaar"]);ns.set("caadar", M.primitives["caadar"]);ns.set("caaddr", M.primitives["caaddr"]);ns.set("caadr", M.primitives["caadr"]);ns.set("caar", M.primitives["caar"]);ns.set("cadaar", M.primitives["cadaar"]);ns.set("cadadr", M.primitives["cadadr"]);ns.set("cadar", M.primitives["cadar"]);ns.set("caddar", M.primitives["caddar"]);ns.set("cadddr", M.primitives["cadddr"]);ns.set("caddr", M.primitives["caddr"]);ns.set("cadr", M.primitives["cadr"]);ns.set("call-with-current-continuation", M.primitives["call-with-current-continuation"]);ns.set("call-with-values", M.primitives["call-with-values"]);ns.set("call/cc", M.primitives["call/cc"]);ns.set("car", M.primitives["car"]);ns.set("cdaaar", M.primitives["cdaaar"]);ns.set("cdaadr", M.primitives["cdaadr"]);ns.set("cdaar", M.primitives["cdaar"]);ns.set("cdadar", M.primitives["cdadar"]);ns.set("cdaddr", M.primitives["cdaddr"]);ns.set("cdadr", M.primitives["cdadr"]);ns.set("cdar", M.primitives["cdar"]);ns.set("cddaar", M.primitives["cddaar"]);ns.set("cddadr", M.primitives["cddadr"]);ns.set("cddar", M.primitives["cddar"]);ns.set("cdddar", M.primitives["cdddar"]);ns.set("cddddr", M.primitives["cddddr"]);ns.set("cdddr", M.primitives["cdddr"]);ns.set("cddr", M.primitives["cddr"]);ns.set("cdr", M.primitives["cdr"]);ns.set("ceiling", M.primitives["ceiling"]);ns.set("char->integer", M.primitives["char->integer"]);ns.set("char-alphabetic?", M.primitives["char-alphabetic?"]);ns.set("char-ci<=?", M.primitives["char-ci<=?"]);ns.set("char-ci<?", M.primitives["char-ci<?"]);ns.set("char-ci=?", M.primitives["char-ci=?"]);ns.set("char-ci>=?", M.primitives["char-ci>=?"]);ns.set("char-ci>?", M.primitives["char-ci>?"]);ns.set("char-downcase", M.primitives["char-downcase"]);ns.set("char-lower-case?", M.primitives["char-lower-case?"]);ns.set("char-numeric?", M.primitives["char-numeric?"]);ns.set("char-upcase", M.primitives["char-upcase"]);ns.set("char-upper-case?", M.primitives["char-upper-case?"]);ns.set("char-whitespace?", M.primitives["char-whitespace?"]);ns.set("char<=?", M.primitives["char<=?"]);ns.set("char<?", M.primitives["char<?"]);ns.set("char=?", M.primitives["char=?"]);ns.set("char>=?", M.primitives["char>=?"]);ns.set("char>?", M.primitives["char>?"]);ns.set("char?", M.primitives["char?"]);ns.set("complex?", M.primitives["complex?"]);ns.set("compose", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose"));ns.set("compose1", M.modules["whalesong/lang/private/list.rkt"].getExports().get("compose1"));ns.set("conjugate", M.primitives["conjugate"]);ns.set("cons", M.primitives["cons"]);ns.set("cons?", M.modules["whalesong/lang/list.rkt"].getExports().get("cons?"));ns.set("continuation-mark-set->list", M.primitives["continuation-mark-set->list"]);ns.set("continuation-prompt-tag?", M.primitives["continuation-prompt-tag?"]);ns.set("cos", M.primitives["cos"]);ns.set("cosh", M.primitives["cosh"]);ns.set("count", M.modules["whalesong/lang/list.rkt"].getExports().get("count"));ns.set("current-continuation-marks", M.primitives["current-continuation-marks"]);ns.set("current-inexact-milliseconds", M.primitives["current-inexact-milliseconds"]);ns.set("current-output-port", M.primitives["current-output-port"]);ns.set("current-print", M.primitives["current-print"]);ns.set("current-print-mode", M.primitives["current-print-mode"]);ns.set("current-seconds", M.primitives["current-seconds"]);ns.set("default-continuation-prompt-tag", M.primitives["default-continuation-prompt-tag"]);ns.set("denominator", M.primitives["denominator"]);ns.set("display", M.primitives["display"]);ns.set("displayln", M.primitives["displayln"]);ns.set("drop", M.modules["whalesong/lang/list.rkt"].getExports().get("drop"));ns.set("drop-right", M.modules["whalesong/lang/list.rkt"].getExports().get("drop-right"));ns.set("e", M.primitives["e"]);ns.set("eighth", M.modules["whalesong/lang/list.rkt"].getExports().get("eighth"));ns.set("empty", M.modules["whalesong/lang/list.rkt"].getExports().get("empty"));ns.set("empty?", M.modules["whalesong/lang/list.rkt"].getExports().get("empty?"));ns.set("eof", M.primitives["eof"]);ns.set("eof-object?", M.primitives["eof-object?"]);ns.set("eq?", M.primitives["eq?"]);ns.set("equal-hash-code", M.primitives["equal-hash-code"]);ns.set("equal?", M.primitives["equal?"]);ns.set("eqv?", M.primitives["eqv?"]);ns.set("error", M.primitives["error"]);ns.set("even?", M.primitives["even?"]);ns.set("exact->inexact", M.primitives["exact->inexact"]);ns.set("exact-integer?", M.primitives["exact-integer?"]);ns.set("exact-nonnegative-integer?", M.primitives["exact-nonnegative-integer?"]);ns.set("exact?", M.primitives["exact?"]);ns.set("exn-continuation-marks", M.primitives["exn-continuation-marks"]);ns.set("exn-message", M.primitives["exn-message"]);ns.set("exp", M.primitives["exp"]);ns.set("expt", M.primitives["expt"]);ns.set("false", M.modules["whalesong/lang/bool.rkt"].getExports().get("false"));ns.set("false?", M.modules["whalesong/lang/bool.rkt"].getExports().get("false?"));ns.set("fifth", M.modules["whalesong/lang/list.rkt"].getExports().get("fifth"));ns.set("filter", M.modules["whalesong/lang/private/list.rkt"].getExports().get("filter"));ns.set("filter-map", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-map"));ns.set("filter-not", M.modules["whalesong/lang/list.rkt"].getExports().get("filter-not"));ns.set("findf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("findf"));ns.set("first", M.modules["whalesong/lang/list.rkt"].getExports().get("first"));ns.set("flatten", M.modules["whalesong/lang/list.rkt"].getExports().get("flatten"));ns.set("floor", M.primitives["floor"]);ns.set("foldl", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldl"));ns.set("foldr", M.modules["whalesong/lang/private/list.rkt"].getExports().get("foldr"));ns.set("for-each", M.modules["whalesong/lang/private/map.rkt"].getExports().get("for-each2"));ns.set("format", M.primitives["format"]);ns.set("fourth", M.modules["whalesong/lang/list.rkt"].getExports().get("fourth"));ns.set("fprintf", M.primitives["fprintf"]);ns.set("gcd", M.primitives["gcd"]);ns.set("gensym", M.primitives["gensym"]);ns.set("hash", M.primitives["hash"]);ns.set("hash-copy", M.primitives["hash-copy"]);ns.set("hash-count", M.primitives["hash-count"]);ns.set("hash-eq?", M.primitives["hash-eq?"]);ns.set("hash-equal?", M.primitives["hash-equal?"]);ns.set("hash-eqv?", M.primitives["hash-eqv?"]);ns.set("hash-for-each", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-for-each"));ns.set("hash-has-key?", M.primitives["hash-has-key?"]);ns.set("hash-keys", M.primitives["hash-keys"]);ns.set("hash-map", M.modules["whalesong/lang/private/hash.rkt"].getExports().get("hash-map"));ns.set("hash-ref", M.primitives["hash-ref"]);ns.set("hash-remove", M.primitives["hash-remove"]);ns.set("hash-remove!", M.primitives["hash-remove!"]);ns.set("hash-set", M.primitives["hash-set"]);ns.set("hash-set!", M.primitives["hash-set!"]);ns.set("hash-values", M.primitives["hash-values"]);ns.set("hash?", M.primitives["hash?"]);ns.set("hasheq", M.primitives["hasheq"]);ns.set("hasheqv", M.primitives["hasheqv"]);ns.set("imag-part", M.primitives["imag-part"]);ns.set("inexact->exact", M.primitives["inexact->exact"]);ns.set("inexact?", M.primitives["inexact?"]);ns.set("integer->char", M.primitives["integer->char"]);ns.set("integer-sqrt", M.primitives["integer-sqrt"]);ns.set("integer?", M.primitives["integer?"]);ns.set("last", M.modules["whalesong/lang/list.rkt"].getExports().get("last"));ns.set("last-pair", M.modules["whalesong/lang/list.rkt"].getExports().get("last-pair"));ns.set("lcm", M.primitives["lcm"]);ns.set("length", M.primitives["length"]);ns.set("list", M.primitives["list"]);ns.set("list*", M.primitives["list*"]);ns.set("list->string", M.primitives["list->string"]);ns.set("list->vector", M.primitives["list->vector"]);ns.set("list-ref", M.primitives["list-ref"]);ns.set("list?", M.primitives["list?"]);ns.set("log", M.primitives["log"]);ns.set("magnitude", M.primitives["magnitude"]);ns.set("make-continuation-prompt-tag", M.primitives["make-continuation-prompt-tag"]);ns.set("make-exn", M.primitives["make-exn"]);ns.set("make-exn:fail", M.primitives["make-exn:fail"]);ns.set("make-exn:fail:contract", M.primitives["make-exn:fail:contract"]);ns.set("make-exn:fail:contract:arity", M.primitives["make-exn:fail:contract:arity"]);ns.set("make-exn:fail:contract:divide-by-zero", M.primitives["make-exn:fail:contract:divide-by-zero"]);ns.set("make-exn:fail:contract:variable", M.primitives["make-exn:fail:contract:variable"]);ns.set("make-hash", M.primitives["make-hash"]);ns.set("make-hasheq", M.primitives["make-hasheq"]);ns.set("make-hasheqv", M.primitives["make-hasheqv"]);ns.set("make-immutable-hash", M.primitives["make-immutable-hash"]);ns.set("make-immutable-hasheq", M.primitives["make-immutable-hasheq"]);ns.set("make-immutable-hasheqv", M.primitives["make-immutable-hasheqv"]);ns.set("make-list", M.modules["whalesong/lang/list.rkt"].getExports().get("make-list"));ns.set("make-placeholder", M.primitives["make-placeholder"]);ns.set("make-polar", M.primitives["make-polar"]);ns.set("make-posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("make-posn"));ns.set("make-reader-graph", M.primitives["make-reader-graph"]);ns.set("make-rectangular", M.primitives["make-rectangular"]);ns.set("make-srcloc", M.primitives["make-srcloc"]);ns.set("make-string", M.primitives["make-string"]);ns.set("make-struct-field-accessor", M.primitives["make-struct-field-accessor"]);ns.set("make-struct-field-mutator", M.primitives["make-struct-field-mutator"]);ns.set("make-struct-type", M.primitives["make-struct-type"]);ns.set("make-vector", M.primitives["make-vector"]);ns.set("map", M.modules["whalesong/lang/private/map.rkt"].getExports().get("map2"));ns.set("max", M.primitives["max"]);ns.set("member", M.primitives["member"]);ns.set("memf", M.modules["whalesong/lang/private/list.rkt"].getExports().get("memf"));ns.set("memq", M.primitives["memq"]);ns.set("memv", M.primitives["memv"]);ns.set("min", M.primitives["min"]);ns.set("modulo", M.primitives["modulo"]);ns.set("negative?", M.primitives["negative?"]);ns.set("newline", M.primitives["newline"]);ns.set("ninth", M.modules["whalesong/lang/list.rkt"].getExports().get("ninth"));ns.set("not", M.primitives["not"]);ns.set("null", M.primitives["null"]);ns.set("null?", M.primitives["null?"]);ns.set("number->string", M.primitives["number->string"]);ns.set("number?", M.primitives["number?"]);ns.set("numerator", M.primitives["numerator"]);ns.set("odd?", M.primitives["odd?"]);ns.set("ormap", M.modules["whalesong/lang/private/map.rkt"].getExports().get("ormap2"));ns.set("pair?", M.primitives["pair?"]);ns.set("partition", M.modules["whalesong/lang/list.rkt"].getExports().get("partition"));ns.set("pi", M.primitives["pi"]);ns.set("placeholder-set!", M.primitives["placeholder-set!"]);ns.set("positive?", M.primitives["positive?"]);ns.set("posn-x", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-x"));ns.set("posn-y", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn-y"));ns.set("posn?", M.modules["whalesong/lang/posn.rkt"].getExports().get("posn?"));ns.set("printf", M.primitives["printf"]);ns.set("procedure-arity", M.primitives["procedure-arity"]);ns.set("procedure-arity-includes?", M.primitives["procedure-arity-includes?"]);ns.set("procedure-rename", M.primitives["procedure-rename"]);ns.set("procedure?", M.primitives["procedure?"]);ns.set("prop:exn:srclocs", M.primitives["prop:exn:srclocs"]);ns.set("quotient", M.primitives["quotient"]);ns.set("raise", M.primitives["raise"]);ns.set("raise-mismatch-error", M.primitives["raise-mismatch-error"]);ns.set("raise-type-error", M.primitives["raise-type-error"]);ns.set("random", M.primitives["random"]);ns.set("rational?", M.primitives["rational?"]);ns.set("read-byte", M.primitives["read-byte"]);ns.set("real-part", M.primitives["real-part"]);ns.set("real?", M.primitives["real?"]);ns.set("remainder", M.primitives["remainder"]);ns.set("remove", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove"));ns.set("remove*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remove*"));ns.set("remq", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq"));ns.set("remq*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remq*"));ns.set("remv", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv"));ns.set("remv*", M.modules["whalesong/lang/private/list.rkt"].getExports().get("remv*"));ns.set("rest", M.modules["whalesong/lang/list.rkt"].getExports().get("rest"));ns.set("reverse", M.primitives["reverse"]);ns.set("round", M.primitives["round"]);ns.set("second", M.modules["whalesong/lang/list.rkt"].getExports().get("second"));ns.set("set-box!", M.primitives["set-box!"]);ns.set("set-car!", M.primitives["set-car!"]);ns.set("set-cdr!", M.primitives["set-cdr!"]);ns.set("set-posn-x!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-x!"));ns.set("set-posn-y!", M.modules["whalesong/lang/posn.rkt"].getExports().get("set-posn-y!"));ns.set("seventh", M.modules["whalesong/lang/list.rkt"].getExports().get("seventh"));ns.set("sgn", M.primitives["sgn"]);ns.set("sin", M.primitives["sin"]);ns.set("sinh", M.primitives["sinh"]);ns.set("sixth", M.modules["whalesong/lang/list.rkt"].getExports().get("sixth"));ns.set("split-at", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at"));ns.set("split-at-right", M.modules["whalesong/lang/list.rkt"].getExports().get("split-at-right"));ns.set("sqr", M.primitives["sqr"]);ns.set("sqrt", M.primitives["sqrt"]);ns.set("srcloc-column", M.primitives["srcloc-column"]);ns.set("srcloc-line", M.primitives["srcloc-line"]);ns.set("srcloc-position", M.primitives["srcloc-position"]);ns.set("srcloc-source", M.primitives["srcloc-source"]);ns.set("srcloc-span", M.primitives["srcloc-span"]);ns.set("srcloc?", M.primitives["srcloc?"]);ns.set("string", M.primitives["string"]);ns.set("string->list", M.primitives["string->list"]);ns.set("string->number", M.primitives["string->number"]);ns.set("string->symbol", M.primitives["string->symbol"]);ns.set("string-append", M.primitives["string-append"]);ns.set("string-ci<=?", M.primitives["string-ci<=?"]);ns.set("string-ci<?", M.primitives["string-ci<?"]);ns.set("string-ci=?", M.primitives["string-ci=?"]);ns.set("string-ci>=?", M.primitives["string-ci>=?"]);ns.set("string-ci>?", M.primitives["string-ci>?"]);ns.set("string-copy", M.primitives["string-copy"]);ns.set("string-length", M.primitives["string-length"]);ns.set("string-ref", M.primitives["string-ref"]);ns.set("string-set!", M.primitives["string-set!"]);ns.set("string<=?", M.primitives["string<=?"]);ns.set("string<?", M.primitives["string<?"]);ns.set("string=?", M.primitives["string=?"]);ns.set("string>=?", M.primitives["string>=?"]);ns.set("string>?", M.primitives["string>?"]);ns.set("string?", M.primitives["string?"]);ns.set("struct-type?", M.primitives["struct-type?"]);ns.set("struct:exn:fail", M.primitives["struct:exn:fail"]);ns.set("struct:posn", M.modules["whalesong/lang/posn.rkt"].getExports().get("struct:posn"));ns.set("struct?", M.primitives["struct?"]);ns.set("sub1", M.primitives["sub1"]);ns.set("substring", M.primitives["substring"]);ns.set("symbol->string", M.primitives["symbol->string"]);ns.set("symbol=?", M.modules["whalesong/lang/bool.rkt"].getExports().get("symbol=?"));ns.set("symbol?", M.primitives["symbol?"]);ns.set("take", M.modules["whalesong/lang/list.rkt"].getExports().get("take"));ns.set("take-right", M.modules["whalesong/lang/list.rkt"].getExports().get("take-right"));ns.set("tan", M.primitives["tan"]);ns.set("tenth", M.modules["whalesong/lang/list.rkt"].getExports().get("tenth"));ns.set("third", M.modules["whalesong/lang/list.rkt"].getExports().get("third"));ns.set("true", M.modules["whalesong/lang/bool.rkt"].getExports().get("true"));ns.set("truncate", M.primitives["truncate"]);ns.set("unbox", M.primitives["unbox"]);ns.set("values", M.primitives["values"]);ns.set("vector", M.primitives["vector"]);ns.set("vector->list", M.primitives["vector->list"]);ns.set("vector-length", M.primitives["vector-length"]);ns.set("vector-ref", M.primitives["vector-ref"]);ns.set("vector-set!", M.primitives["vector-set!"]);ns.set("vector?", M.primitives["vector?"]);ns.set("void", M.primitives["void"]);ns.set("void?", M.primitives["void?"]);ns.set("write", M.primitives["write"]);ns.set("write-byte", M.primitives["write-byte"]);ns.set("zero?", M.primitives["zero?"]);}(M.modules["whalesong/lang/whalesong.rkt"],M.modules["whalesong/lang/whalesong.rkt"].getExports(),M.modules["whalesong/lang/whalesong.rkt"].getExternalExports(),M.modules["whalesong/lang/whalesong.rkt"].prefix));
return(M.p)(M);};

var _2546=function(M){if(M.modules["whalesong/lang/posn.rkt"].isInvoked!==false){return(_2548)(M);}else{M.c.push(new RT.CallFrame(_2548,M.p));
return(M.modules["whalesong/lang/posn.rkt"].label)(M);}};

var _2541=function(M){if(--M.cbt<0){throw _2541;}
M.e.length-=(M.a-1);
return(_2542)(M);};

var _2537=function(M){if(M.modules["whalesong/lang/private/shared.rkt"].isInvoked!==false){return(_2539)(M);}else{M.c.push(new RT.CallFrame(_2539,M.p));
return(M.modules["whalesong/lang/private/shared.rkt"].label)(M);}};

var _2543=function(M){if(M.modules["whalesong/lang/bool.rkt"].isInvoked!==false){return(_2545)(M);}else{M.c.push(new RT.CallFrame(_2545,M.p));
return(M.modules["whalesong/lang/bool.rkt"].label)(M);}};

var _2529=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2547=function(M){if(--M.cbt<0){throw _2547;}
M.e.length-=(M.a-1);
return(_2548)(M);};

var _2534=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_2536)(M);}else{M.c.push(new RT.CallFrame(_2536,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _2526=function(M){M.c.push(new RT.PromptFrame(_2528,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/whalesong.rkt"]=function(){return new RT.ModuleRecord("whalesong",_2530);}
return(_2529)(M);};

var _2535=function(M){if(--M.cbt<0){throw _2535;}
M.e.length-=(M.a-1);
return(_2536)(M);};

var _2545=function(M){if(--M.cbt<0){throw _2545;}
if((M.installedModules["whalesong/lang/posn.rkt"]!==void(0)&&M.modules["whalesong/lang/posn.rkt"]!==undefined)!==false){return(_2546)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/posn.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2546);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2546)(M);}};

var _2530=function(M){M.modules["whalesong/lang/whalesong.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2531)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2531);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2531)(M);}};

var _2536=function(M){if(--M.cbt<0){throw _2536;}
if((M.installedModules["whalesong/lang/private/shared.rkt"]!==void(0)&&M.modules["whalesong/lang/private/shared.rkt"]!==undefined)!==false){return(_2537)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/shared.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2537);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2537)(M);}};

var _2533=function(M){if(--M.cbt<0){throw _2533;}
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_2534)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2534);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2534)(M);}};

var _2542=function(M){if(--M.cbt<0){throw _2542;}
if((M.installedModules["whalesong/lang/bool.rkt"]!==void(0)&&M.modules["whalesong/lang/bool.rkt"]!==undefined)!==false){return(_2543)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/bool.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2543);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2543)(M);}};

var _2539=function(M){if(--M.cbt<0){throw _2539;}
if((M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]!==void(0)&&M.modules["whalesong/lang/check-expect/check-expect.rkt"]!==undefined)!==false){return(_2540)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/check-expect/check-expect.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2540);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2540)(M);}};

var _2532=function(M){if(--M.cbt<0){throw _2532;}
M.e.length-=(M.a-1);
return(_2533)(M);};

var _2527=function(M){if(--M.cbt<0){throw _2527;}
M.e.length-=(M.a-1);
return(_2528)(M);};

var _2528=function(M){if(--M.cbt<0){throw _2528;}
};

var _2544=function(M){if(--M.cbt<0){throw _2544;}
M.e.length-=(M.a-1);
return(_2545)(M);};

var _2538=function(M){if(--M.cbt<0){throw _2538;}
M.e.length-=(M.a-1);
return(_2539)(M);};

var _2549=function(M){return(_2526)(M);};

var _2531=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2533)(M);}else{M.c.push(new RT.CallFrame(_2533,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2540=function(M){if(M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked!==false){return(_2542)(M);}else{M.c.push(new RT.CallFrame(_2542,M.p));
return(M.modules["whalesong/lang/check-expect/check-expect.rkt"].label)(M);}};

_2533.mvr=_2532;
_2536.mvr=_2535;
_2539.mvr=_2538;
_2542.mvr=_2541;
_2545.mvr=_2544;
_2548.mvr=_2547;
_2528.mvr=_2527;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2549(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/whalesong.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/whalesong.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/bool.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2579=function(M){if(--M.cbt<0){throw _2579;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);extNs.set("boolean=?", prefix[selfMod.getPrefixOffset("boolean=?")]);ns.set("false", prefix[selfMod.getPrefixOffset("false")]);extNs.set("false", prefix[selfMod.getPrefixOffset("false")]);ns.set("false?", prefix[selfMod.getPrefixOffset("false?")]);extNs.set("false?", prefix[selfMod.getPrefixOffset("false?")]);ns.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);extNs.set("symbol=?", prefix[selfMod.getPrefixOffset("symbol=?")]);ns.set("true", prefix[selfMod.getPrefixOffset("true")]);extNs.set("true", prefix[selfMod.getPrefixOffset("true")]);}(M.modules["whalesong/lang/bool.rkt"],M.modules["whalesong/lang/bool.rkt"].getExports(),M.modules["whalesong/lang/bool.rkt"].getExternalExports(),M.modules["whalesong/lang/bool.rkt"].prefix));
return(M.p)(M);};

var _2577=function(M){if(--M.cbt<0){throw _2577;}
M.c.push(new RT.PromptFrame(_2579,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2552,2,[M.e[M.e.length-1]],"symbol=?");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2578=function(M){if(--M.cbt<0){throw _2578;}
M.e.length-=(M.a-1);
return(_2579)(M);};

var _2568=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2566=function(M){M.e[M.e.length-3]=0;
return(_2567)(M);};

var _2562=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3913;
M.e[M.e.length-2]="symbol";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_2566)(M);}else{M.e[M.e.length-3]=1;
return(_2567)(M);}};

var _2569=function(M){M.modules["whalesong/lang/bool.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("true")||M.primitives["true"],M.params.currentNamespace.get("false")||M.primitives["false"],M.params.currentNamespace.get("false?")||M.primitives["false?"],M.params.currentNamespace.get("boolean=?")||M.primitives["boolean=?"],M.primitives["boolean?"],M.primitives["raise-type-error"],M.params.currentNamespace.get("symbol=?")||M.primitives["symbol=?"],M.primitives["symbol?"]]);M.e[M.e.length-1].names=["true","false","false?","boolean=?","boolean?","raise-type-error","symbol=?","symbol?"];
M.modules["whalesong/lang/bool.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_2571,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=true;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2575=function(M){if(--M.cbt<0){throw _2575;}
M.c.push(new RT.PromptFrame(_2577,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2551,2,[M.e[M.e.length-1]],"boolean=?");
M.e[M.e.length-1][3]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2565=function(M){if(M.v===false){return(_2562)(M);}else{M.v=RT.VOID;
return(_2563)(M);}};

var _2570=function(M){if(--M.cbt<0){throw _2570;}
M.e.length-=(M.a-1);
return(_2571)(M);};

var _2571=function(M){if(--M.cbt<0){throw _2571;}
M.c.push(new RT.PromptFrame(_2573,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=false;
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2564=function(M){M.v=false;
return(_2565)(M);};

var _2572=function(M){if(--M.cbt<0){throw _2572;}
M.e.length-=(M.a-1);
return(_2573)(M);};

var _2551=function(M){if(--M.cbt<0){throw _2551;}

//"lambda body for #(struct:LamPositionalName boolean=? whalesong/lang/bool.rkt 12 0 161 149)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_2558)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
return(_2559)(M);}};

var _2553=function(M){M.c.push(new RT.PromptFrame(_2555,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/bool.rkt"]=function(){return new RT.ModuleRecord("bool",_2569);}
return(_2568)(M);};

var _2580=function(M){return(_2553)(M);};

var _2550=function(M){if(--M.cbt<0){throw _2550;}

//"lambda body for #(struct:LamPositionalName false? whalesong/lang/bool.rkt 10 0 129 30)"

M.v=(M.e[M.e.length-1]===false);
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2576=function(M){if(--M.cbt<0){throw _2576;}
M.e.length-=(M.a-1);
return(_2577)(M);};

var _2556=function(M){M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-1]=sym3914;
M.e[M.e.length-2]="boolean";
M.e.push(M.e[M.e.length-7]);
M.v=M.primitives["boolean?"]._i(M);
M.e.pop();
if(M.v===false){return(_2560)(M);}else{M.e[M.e.length-3]=1;
return(_2561)(M);}};

var _2554=function(M){if(--M.cbt<0){throw _2554;}
M.e.length-=(M.a-1);
return(_2555)(M);};

var _2555=function(M){if(--M.cbt<0){throw _2555;}
};

var _2560=function(M){M.e[M.e.length-3]=0;
return(_2561)(M);};

var _2573=function(M){if(--M.cbt<0){throw _2573;}
M.c.push(new RT.PromptFrame(_2575,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=_2550_c;
M.e[M.e.length-1][2]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2552=function(M){if(--M.cbt<0){throw _2552;}

//"lambda body for #(struct:LamPositionalName symbol=? whalesong/lang/bool.rkt 17 0 312 143)"

M.e.push(M.p.closedVals[0]);
M.e.push(M.e[M.e.length-2]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
if(M.v===false){return(_2564)(M);}else{M.e.push(M.e[M.e.length-3]);
M.v=M.primitives["symbol?"]._i(M);
M.e.pop();
return(_2565)(M);}};

var _2561=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2557)(M);};

var _2567=function(M){M.e[M.e.length-4]=M.e[M.e.length-7];
M.e[M.e.length-5]=M.e[M.e.length-8];
M.a=5;
M.v=M.primitives["raise-type-error"]._i(M);
M.e.length-=5;
return(_2563)(M);};

var _2574=function(M){if(--M.cbt<0){throw _2574;}
M.e.length-=(M.a-1);
return(_2575)(M);};

var _2557=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2563=function(M){M.v=(M.e[M.e.length-2]===M.e[M.e.length-3]);
M.e.length-=3;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2558=function(M){M.v=false;
return(_2559)(M);};

var _2559=function(M){if(M.v===false){return(_2556)(M);}else{M.v=RT.VOID;
return(_2557)(M);}};

_2571.mvr=_2570;
_2573.mvr=_2572;
_2575.mvr=_2574;
_2577.mvr=_2576;
_2579.mvr=_2578;
_2555.mvr=_2554;
var sym3914=RT.makeSymbol("boolean=?");
var sym3913=RT.makeSymbol("symbol=?");var _2550_c=new RT.Closure(_2550,1,void(0),"false?");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2580(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/bool.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/bool.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/check-expect/check-expect.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2620=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="All ~a tests passed!";
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-6][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-6].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-6][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2623,M.p));
return((M.p).label)(M);};

var _2687=RT.si_context_expected(4);

var _2678=function(M){if(--M.cbt<0){throw _2678;}
M.c.push(new RT.PromptFrame(_2680,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-11]=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym3955;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=1;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.a=0;
M.v=M.primitives["current-inspector"]._i(M);
M.e[M.e.length-7]=M.v;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.makePair(0,RT.NULL);
M.e[M.e.length-10]=false;
M.v=sym3955;
M.p=M.e[M.e.length-11];
M.e[M.e.length-11]=M.v;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2684,M.p));
return((M.p).label)(M);};

var _2670=function(M){if(--M.cbt<0){throw _2670;}
M.c.push(new RT.PromptFrame(_2672,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2584,1,[M.e[M.e.length-1]],"test-suffixed");
M.e[M.e.length-1][6]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2590=function(M){if(--M.cbt<0){throw _2590;}
};

var _2649=function(M){if(--M.cbt<0){throw _2649;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2633=function(M){if(--M.cbt<0){throw _2633;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2635,M.p));
return((M.p).label)(M);};

var _2625=function(M){if(--M.cbt<0){throw _2625;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2627,M.p));
return((M.p).label)(M);};

var _2614=function(M){if(--M.cbt<0){throw _2614;}
M.e[M.e.length-2]=M.v;
M.v=RT.checkedNumEquals(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2611)(M);}else{M.v=M.e[M.e.length-3];
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2616,M.p));
return((M.p).label)(M);}};

var _2672=function(M){if(--M.cbt<0){throw _2672;}
M.c.push(new RT.PromptFrame(_2674,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2585,1,[M.e[M.e.length-1]],"capitalize");
M.e[M.e.length-1][8]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2666=function(M){if(--M.cbt<0){throw _2666;}
M.c.push(new RT.PromptFrame(_2668,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2582,1,[M.e[M.e.length-1]],"display-location");
M.e[M.e.length-1][4]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2640=function(M){if(--M.cbt<0){throw _2640;}
M.e[M.e.length-1]=M.v;
M.v=M.e[M.e.length-1];
if(M.v===false){return(_2642)(M);}else{M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=RT.checkedAdd1(M, M.e[M.e.length-7]);
M.e[M.e.length-2]=M.e[M.e.length-8];
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2645,M.p));
return((M.p).label)(M);}};

var _2629=function(M){if(--M.cbt<0){throw _2629;}
M.p=M.e[M.e.length-1];
M.e[M.e.length-1]=M.v;
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2631,M.p));
return((M.p).label)(M);};

var _2623=function(M){if(--M.cbt<0){throw _2623;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
return(_2617)(M);};

var _2595=function(M){if(--M.cbt<0){throw _2595;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-3];
M.e[M.e.length-2]=M.e[M.e.length-4];
M.v=M.primitives["equal?"]._i(M);
M.e.length-=2;
if(M.v===false){return(_2597)(M);}else{M.v=true;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};




var _2661=function(M){if(--M.cbt<0){throw _2661;}
M.e.length-=(M.a-1);
return(_2662)(M);};


var _2585=function(M){if(--M.cbt<0){throw _2585;}

//"lambda body for #(struct:LamPositionalName capitalize whalesong/lang/check-expect/check-expect.rkt 184 0 6148 189)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(M.e[M.e.length-4]);
M.v=M.primitives["string-length"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2605)(M);}else{M.e.push(void(0),void(0));
M.e.push(void(0));
M.e.push(void(0));
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=0;
M.v=M.primitives["string-ref"]._i(M);
M.e.length-=2;
M.e[M.e.length-1]=M.v;
M.v=M.primitives["char-upcase"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.a=1;
M.v=M.primitives["string"]._i(M);
M.e.pop();
M.e[M.e.length-1]=M.v;
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-6];
M.e[M.e.length-2]=1;
M.a=2;
M.v=M.primitives["substring"]._i(M);
M.e.length-=2;
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["string-append"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2583=function(M){if(--M.cbt<0){throw _2583;}

//"lambda body for #(struct:LamPositionalName accumulate-test! whalesong/lang/check-expect/check-expect.rkt 171 0 5881 73)"

M.e.push(M.p.closedVals[0]);
M.e[M.e.length-1][0]=RT.makePair(M.e[M.e.length-2],M.e[M.e.length-1][0]);
M.v=RT.VOID;
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2581=function(M){if(--M.cbt<0){throw _2581;}

//"lambda body for #(struct:LamPositionalName check-expect* whalesong/lang/check-expect/check-expect.rkt 79 0 2489 669)"

M.e.push(M.p.closedVals[0]);
M.v=M.e[M.e.length-2];
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2592,M.p));
return((M.p).label)(M);};

var _2663=function(M){if(--M.cbt<0){throw _2663;}
M.e.length-=(M.a-1);
return(_2664)(M);};

var _2659=function(M){M.modules["whalesong/lang/check-expect/check-expect.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/base.rkt"]!==void(0)&&M.modules["whalesong/lang/base.rkt"]!==undefined)!==false){return(_2660)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/base.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2660);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2660)(M);}};

var _2600=function(M){if(--M.cbt<0){throw _2600;}
M.v=false;
M.e.length-=7;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2686=function(M){if(--M.cbt<0){throw _2686;}
if((M.a-4)===0){return(_2682)(M);}else{RT.si_context_expected(4)(M);
}};

var _2599=function(M){if(--M.cbt<0){throw _2599;}
M.e.length-=(M.a-1);
return(_2600)(M);};


var _2682=function(M){M.e.splice(M.e.length-8,5);
M.e[M.e.length-4][23]=M.v;
M.e[M.e.length-4][24]=M.e[M.e.length-1];
M.e[M.e.length-4][25]=M.e[M.e.length-2];
M.e[M.e.length-4][26]=M.e[M.e.length-3];
M.e.length-=3;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2660=function(M){if(M.modules["whalesong/lang/base.rkt"].isInvoked!==false){return(_2662)(M);}else{M.c.push(new RT.CallFrame(_2662,M.p));
return(M.modules["whalesong/lang/base.rkt"].label)(M);}};

var _2680=function(M){if(--M.cbt<0){throw _2680;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);extNs.set("run-tests", prefix[selfMod.getPrefixOffset("run-tests")]);}(M.modules["whalesong/lang/check-expect/check-expect.rkt"],M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].getExternalExports(),M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix));
return(M.p)(M);};

var _2685=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.v=M.e[M.e.length-5];
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-4]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.e[M.e.length-2]=M.e[M.e.length-6];
M.e[M.e.length-3]=M.e[M.e.length-7];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-11];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym3956;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-4];
M.e[M.e.length-4]=M.v;
M.a=4;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2687,M.p));
return((M.p).label)(M);};

var _2677=function(M){if(--M.cbt<0){throw _2677;}
M.e.length-=(M.a-1);
return(_2678)(M);};

var _2667=function(M){if(--M.cbt<0){throw _2667;}
M.e.length-=(M.a-1);
return(_2668)(M);};

var _2612=function(M){M.e[M.e.length-1][0]=RT.NULL;
M.v=RT.VOID;
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2607=function(M){M.e.push(void(0));
M.e.push(void(0));
M.p=M.e[M.e.length-3][20][0][M.e[M.e.length-3][20][1]];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2637,M.p));
return((M.p).label)(M);};

var _2605=function(M){M.v=M.e[M.e.length-2];
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2603=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a tests";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.a=2;
M.v=M.primitives["format"]._i(M);
M.e.length-=4;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2683=function(M){if(--M.cbt<0){throw _2683;}
if((M.a-5)===0){return(_2685)(M);}else{RT.si_context_expected(5)(M);
}};

var _2671=function(M){if(--M.cbt<0){throw _2671;}
M.e.length-=(M.a-1);
return(_2672)(M);};

var _2618=function(M){M.v=(M.e[M.e.length-1]===2);
if(M.v===false){return(_2620)(M);}else{M.e[M.e.length-2]="Both tests passed!";
return(_2617)(M);}};

var _2597=function(M){M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]="check-expect: actual value ~s differs from ~s, the expected value\n";
M.e[M.e.length-2]=M.e[M.e.length-4];
M.e[M.e.length-3]=M.e[M.e.length-5];
M.a=3;
M.v=M.primitives["printf"]._i(M);
M.e.length-=3;
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-4][4];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2600,M.p));
return((M.p).label)(M);};

var _2689=function(M){return(_2588)(M);};

var _2676=function(M){if(--M.cbt<0){throw _2676;}
M.c.push(new RT.PromptFrame(_2678,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2587,0,[M.e[M.e.length-1]],"run-tests");
M.e[M.e.length-1][15]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2668=function(M){if(--M.cbt<0){throw _2668;}
M.c.push(new RT.PromptFrame(_2670,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2583,1,[M.e[M.e.length-1]],"accumulate-test!");
M.e[M.e.length-1][5]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2655=function(M){if(--M.cbt<0){throw _2655;}
M.e[M.e.length-1]=M.v;
M.e[M.e.length-2]=0;
M.v=RT.checkedGreaterThan(M, M.e[M.e.length-1],M.e[M.e.length-2]);
M.e.length-=2;
if(M.v===false){return(_2652)(M);}else{M.e.push("Running tests...\n");
M.a=1;
M.v=M.primitives["printf"]._i(M);
M.e.pop();
M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-4][27];
M.e[M.e.length-1]=0;
M.e[M.e.length-2]=0;
M.e.push(void(0));
if (M.e[M.e.length-5][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-5][0];
M.v=M.primitives["reverse"]._i(M);
M.e.pop();
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-4,1);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);}};

var _2637=function(M){if(--M.cbt<0){throw _2637;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-2];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2640,M.p));
return((M.p).label)(M);};

var _2635=function(M){if(--M.cbt<0){throw _2635;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
return(_2612)(M);};

var _2627=function(M){if(--M.cbt<0){throw _2627;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a passed.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][8];
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][6];
M.e[M.e.length-1]=M.e[M.e.length-6];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2629,M.p));
return((M.p).label)(M);};

var _2610=function(M){if(--M.cbt<0){throw _2610;}
if(M.v===false){return(_2607)(M);}else{M.v=M.e[M.e.length-4];
M.e.push(void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2614,M.p));
return((M.p).label)(M);}};

var _2592=function(M){if(--M.cbt<0){throw _2592;}
M.e[M.e.length-1]=M.v;
M.e.push(void(0));
M.p=M.e[M.e.length-6];
M.a=0;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2595,M.p));
return((M.p).label)(M);};

var _2664=function(M){if(--M.cbt<0){throw _2664;}
M.c.push(new RT.PromptFrame(_2666,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2581,4,[M.e[M.e.length-1]],"check-expect*");
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2645=function(M){if(--M.cbt<0){throw _2645;}
M.p=M.e[M.e.length-3];
M.e[M.e.length-3]=M.v;
M.a=3;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-9,6);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2631=function(M){if(--M.cbt<0){throw _2631;}
M.e[M.e.length-2]=M.v;
M.a=2;
M.v=M.primitives["printf"]._i(M);
M.e.length-=2;
M.e.push(void(0),void(0));
M.e[M.e.length-1]="~a failed.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][8];
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-5][6];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2633,M.p));
return((M.p).label)(M);};

var _2589=function(M){if(--M.cbt<0){throw _2589;}
M.e.length-=(M.a-1);
return(_2590)(M);};

var _2587=function(M){if(--M.cbt<0){throw _2587;}

//"lambda body for #(struct:LamPositionalName run-tests whalesong/lang/check-expect/check-expect.rkt 193 0 6362 1414)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-4][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-4].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-4][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2655,M.p));
return((M.p).label)(M);};






var _2586=function(M){if(--M.cbt<0){throw _2586;}

//"lambda body for #(struct:LamPositionalName loop whalesong/lang/check-expect/check-expect.rkt 197 4 6480 1294)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0));
M.p=M.e[M.e.length-2][17][0][M.e[M.e.length-2][17][1]];
M.e[M.e.length-1]=M.e[M.e.length-5];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2610,M.p));
return((M.p).label)(M);};

var _2584=function(M){if(--M.cbt<0){throw _2584;}

//"lambda body for #(struct:LamPositionalName test-suffixed whalesong/lang/check-expect/check-expect.rkt 176 0 5996 115)"

M.e.push(M.p.closedVals[0]);
M.v=(M.e[M.e.length-2]===0);
if(M.v===false){return(_2601)(M);}else{M.v="zero tests";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};



var _2662=function(M){if(--M.cbt<0){throw _2662;}
M.e.push([M.params.currentNamespace.get("*tests*")||M.primitives["*tests*"],M.params.currentNamespace.get("check-expect*")||M.primitives["check-expect*"],M.primitives["equal?"],M.primitives["printf"],M.params.currentNamespace.get("display-location")||M.primitives["display-location"],M.params.currentNamespace.get("accumulate-test!")||M.primitives["accumulate-test!"],M.params.currentNamespace.get("test-suffixed")||M.primitives["test-suffixed"],M.primitives["format"],M.params.currentNamespace.get("capitalize")||M.primitives["capitalize"],M.primitives["string-length"],M.primitives["string-append"],M.primitives["string"],M.primitives["char-upcase"],M.primitives["string-ref"],M.primitives["substring"],M.params.currentNamespace.get("run-tests")||M.primitives["run-tests"],M.primitives["length"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("empty?"),{moduleName:"whalesong/lang/list.rkt",name:"empty?"}],M.primitives["display"],M.primitives["newline"],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("first"),{moduleName:"whalesong/lang/list.rkt",name:"first"}],[M.modules["whalesong/lang/list.rkt"].prefix,M.modules["whalesong/lang/list.rkt"].getPrefixOffset("rest"),{moduleName:"whalesong/lang/list.rkt",name:"rest"}],M.primitives["reverse"],M.params.currentNamespace.get("struct:unexpected-no-error")||M.primitives["struct:unexpected-no-error"],M.params.currentNamespace.get("make-unexpected-no-error")||M.primitives["make-unexpected-no-error"],M.params.currentNamespace.get("unexpected-no-error?")||M.primitives["unexpected-no-error?"],M.params.currentNamespace.get("unexpected-no-error-result")||M.primitives["unexpected-no-error-result"],false]);M.e[M.e.length-1].names=["*tests*","check-expect*","equal?","printf","display-location","accumulate-test!","test-suffixed","format","capitalize","string-length","string-append","string","char-upcase","string-ref","substring","run-tests","length","empty?","display","newline","first","rest","reverse","struct:unexpected-no-error","make-unexpected-no-error","unexpected-no-error?","unexpected-no-error-result",false];
M.modules["whalesong/lang/check-expect/check-expect.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_2664,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=RT.NULL;
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2616=function(M){if(--M.cbt<0){throw _2616;}
M.e[M.e.length-1]=M.v;
M.v=(M.e[M.e.length-1]===1);
if(M.v===false){return(_2618)(M);}else{M.e[M.e.length-2]="The test passed!";
return(_2617)(M);}};


var _2674=function(M){if(--M.cbt<0){throw _2674;}
M.c.push(new RT.PromptFrame(_2676,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2586,3,[M.e[M.e.length-1]],"loop");
M.e[M.e.length-1][27]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2582=function(M){if(--M.cbt<0){throw _2582;}

//"lambda body for #(struct:LamPositionalName display-location whalesong/lang/check-expect/check-expect.rkt 98 0 3161 171)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0),void(0),void(0));
M.e[M.e.length-1]="  at: ~s, line ~s, column ~s\n";
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-source"]._i(M);
M.e.pop();
M.e[M.e.length-2]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-line"]._i(M);
M.e.pop();
M.e[M.e.length-3]=M.v;
M.e.push(M.e[M.e.length-6]);
M.v=M.primitives["srcloc-column"]._i(M);
M.e.pop();
M.e[M.e.length-4]=M.v;
M.a=4;
M.v=M.primitives["printf"]._i(M);
M.e.length-=6;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};


var _2665=function(M){if(--M.cbt<0){throw _2665;}
M.e.length-=(M.a-1);
return(_2666)(M);};

var _2611=function(M){M.e.push(void(0),void(0));
M.e[M.e.length-1]="Ran ~a.\n";
M.e.push(void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-1]=M.e[M.e.length-4][6];
M.e.push(void(0));
M.p=M.primitives["length"];
if (M.e[M.e.length-5][0]===void(0)){ RT.raiseUnboundToplevelError(M,M.e[M.e.length-5].names[0]); }
M.e[M.e.length-1]=M.e[M.e.length-5][0];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2625,M.p));
return((M.p).label)(M);};


var _2642=function(M){M.e.push(void(0),void(0),void(0));
//"Constant toplevel ref: ?"

M.e[M.e.length-3]=M.e[M.e.length-6][27];
M.e[M.e.length-1]=M.e[M.e.length-7];
M.e[M.e.length-2]=RT.checkedAdd1(M, M.e[M.e.length-8]);
M.e.push(void(0));
M.p=M.e[M.e.length-7][21][0][M.e[M.e.length-7][21][1]];
M.e[M.e.length-1]=M.e[M.e.length-10];
M.a=1;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2649,M.p));
return((M.p).label)(M);};

var _2675=function(M){if(--M.cbt<0){throw _2675;}
M.e.length-=(M.a-1);
return(_2676)(M);};


var _2617=function(M){M.e.pop();
M.a=1;
M.v=M.primitives["display"]._i(M);
M.e.pop();
M.a=0;
M.v=M.primitives["newline"]._i(M);
return(_2612)(M);};

var _2658=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2684=RT.si_context_expected(5);

var _2601=function(M){M.v=(M.e[M.e.length-2]===1);
if(M.v===false){return(_2603)(M);}else{M.v="one test";
M.e.length-=2;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);}};

var _2679=function(M){if(--M.cbt<0){throw _2679;}
M.e.length-=(M.a-1);
return(_2680)(M);};

var _2669=function(M){if(--M.cbt<0){throw _2669;}
M.e.length-=(M.a-1);
return(_2670)(M);};

var _2588=function(M){M.c.push(new RT.PromptFrame(_2590,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/check-expect/check-expect.rkt"]=function(){return new RT.ModuleRecord("check-expect",_2659);}
return(_2658)(M);};

var _2652=function(M){M.v=RT.VOID;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2673=function(M){if(--M.cbt<0){throw _2673;}
M.e.length-=(M.a-1);
return(_2674)(M);};

_2600.mvr=_2599;
_2662.mvr=_2661;
_2664.mvr=_2663;
_2666.mvr=_2665;
_2668.mvr=_2667;
_2670.mvr=_2669;
_2672.mvr=_2671;
_2674.mvr=_2673;
_2676.mvr=_2675;
_2678.mvr=_2677;
_2684.mvr=_2683;
_2687.mvr=_2686;
_2680.mvr=_2679;
_2590.mvr=_2589;
var sym3955=RT.makeSymbol("unexpected-no-error");
var sym3956=RT.makeSymbol("result");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2689(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/check-expect/check-expect.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/check-expect/check-expect.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/shared.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2695=function(M){if(M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked!==false){return(_2697)(M);}else{M.c.push(new RT.CallFrame(_2697,M.p));
return(M.modules["whalesong/lang/private/traced-app.rkt"].label)(M);}};

var _2690=function(M){M.c.push(new RT.PromptFrame(_2692,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/shared.rkt"]=function(){return new RT.ModuleRecord("shared",_2694);}
return(_2693)(M);};

var _2702=function(M){return(_2690)(M);};

var _2696=function(M){if(--M.cbt<0){throw _2696;}
M.e.length-=(M.a-1);
return(_2697)(M);};

var _2697=function(M){if(--M.cbt<0){throw _2697;}
M.e.push([M.params.currentNamespace.get("undefined")||M.primitives["undefined"]]);M.e[M.e.length-1].names=["undefined"];
M.modules["whalesong/lang/private/shared.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_2699,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([void(0)]);
M.v=RT.VOID;
M.v=M.e[M.e.length-1][0];
M.e.pop();
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2692=function(M){if(--M.cbt<0){throw _2692;}
};

var _2698=function(M){if(--M.cbt<0){throw _2698;}
M.e.length-=(M.a-1);
return(_2699)(M);};

var _2694=function(M){M.modules["whalesong/lang/private/shared.rkt"].isInvoked=true;
if((M.installedModules["whalesong/lang/private/traced-app.rkt"]!==void(0)&&M.modules["whalesong/lang/private/traced-app.rkt"]!==undefined)!==false){return(_2695)(M);}else{RT.PAUSE(
                  function(restart){
                      var modname = "whalesong/lang/private/traced-app.rkt";
                      RT.currentModuleLoader(M,modname,
                                             function(){
                                                 M.modules[modname] = M.installedModules[modname]();
                                                 restart(_2695);
                                             },
                                             function(){
                                                 RT.raiseModuleLoadingError(M,modname); 
                                             });
                  });
return(_2695)(M);}};

var _2691=function(M){if(--M.cbt<0){throw _2691;}
M.e.length-=(M.a-1);
return(_2692)(M);};

var _2693=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2699=function(M){if(--M.cbt<0){throw _2699;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {}(M.modules["whalesong/lang/private/shared.rkt"],M.modules["whalesong/lang/private/shared.rkt"].getExports(),M.modules["whalesong/lang/private/shared.rkt"].getExternalExports(),M.modules["whalesong/lang/private/shared.rkt"].prefix));
return(M.p)(M);};

_2697.mvr=_2696;
_2699.mvr=_2698;
_2692.mvr=_2691;
M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2702(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/shared.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/shared.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/traced-app.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2711=function(M){if(--M.cbt<0){throw _2711;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);extNs.set("traced-app-key", prefix[selfMod.getPrefixOffset("traced-app-key")]);ns.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);extNs.set("traced-callee-key", prefix[selfMod.getPrefixOffset("traced-callee-key")]);}(M.modules["whalesong/lang/private/traced-app.rkt"],M.modules["whalesong/lang/private/traced-app.rkt"].getExports(),M.modules["whalesong/lang/private/traced-app.rkt"].getExternalExports(),M.modules["whalesong/lang/private/traced-app.rkt"].prefix));
return(M.p)(M);};

var _2709=function(M){if(--M.cbt<0){throw _2709;}
M.c.push(new RT.PromptFrame(_2711,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(sym4185);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][1]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2707=function(M){M.modules["whalesong/lang/private/traced-app.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("traced-app-key")||M.primitives["traced-app-key"],M.params.currentNamespace.get("traced-callee-key")||M.primitives["traced-callee-key"]]);M.e[M.e.length-1].names=["traced-app-key","traced-callee-key"];
M.modules["whalesong/lang/private/traced-app.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_2709,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(sym4186);
M.a=1;
M.v=M.primitives["gensym"]._i(M);
M.e.pop();
M.e[M.e.length-1][0]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2708=function(M){if(--M.cbt<0){throw _2708;}
M.e.length-=(M.a-1);
return(_2709)(M);};

var _2703=function(M){M.c.push(new RT.PromptFrame(_2705,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/private/traced-app.rkt"]=function(){return new RT.ModuleRecord("traced-app",_2707);}
return(_2706)(M);};

var _2710=function(M){if(--M.cbt<0){throw _2710;}
M.e.length-=(M.a-1);
return(_2711)(M);};

var _2706=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2712=function(M){return(_2703)(M);};

var _2705=function(M){if(--M.cbt<0){throw _2705;}
};

var _2704=function(M){if(--M.cbt<0){throw _2704;}
M.e.length-=(M.a-1);
return(_2705)(M);};

_2709.mvr=_2708;
_2711.mvr=_2710;
_2705.mvr=_2704;
var sym4186=RT.makeSymbol("traced-app-key");
var sym4185=RT.makeSymbol("traced-callee-key");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2712(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/traced-app.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/private/traced-app.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});
// ** Visiting <ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/posn.rkt>
((function(M, success, fail, params) {
"use strict";
var param;
var RT = plt.runtime;
var _2731=function(M){if(--M.cbt<0){throw _2731;}
M.e.length-=(M.a-1);
return(_2732)(M);};

var _2728=function(M){if(--M.cbt<0){throw _2728;}
if((M.a-7)===0){return(_2724)(M);}else{RT.si_context_expected(7)(M);
}};

var _2729=RT.si_context_expected(7);

var _2726=RT.si_context_expected(5);

var _2725=function(M){if(--M.cbt<0){throw _2725;}
if((M.a-5)===0){return(_2727)(M);}else{RT.si_context_expected(5)(M);
}};

var _2715=function(M){if(--M.cbt<0){throw _2715;}
M.e.length-=(M.a-1);
return(_2716)(M);};

var _2722=function(M){if(--M.cbt<0){throw _2722;}
M.c.push(new RT.PromptFrame(_2732,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.v=new RT.Closure(_2713,2,[M.e[M.e.length-1]],"make-posn");
M.e[M.e.length-1][7]=M.v;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2727=function(M){M.e[M.e.length-5]=M.v;
M.e[M.e.length-6]=M.e[M.e.length-1];
M.e[M.e.length-7]=M.e[M.e.length-2];
M.e[M.e.length-8]=M.e[M.e.length-3];
M.e[M.e.length-9]=M.e[M.e.length-4];
M.e.length-=4;
M.v=RT.VOID;
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.e[M.e.length-7]=M.primitives["values"];
M.e[M.e.length-1]=M.e[M.e.length-8];
M.e[M.e.length-2]=M.e[M.e.length-9];
M.e[M.e.length-3]=M.e[M.e.length-10];
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym4214;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-4]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-14];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym4215;
M.a=3;
M.v=M.primitives["make-struct-field-accessor"]._i(M);
M.e.length-=3;
M.e[M.e.length-5]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=0;
M.e[M.e.length-3]=sym4214;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.e[M.e.length-6]=M.v;
M.e.push(void(0),void(0),void(0));
M.e[M.e.length-1]=M.e[M.e.length-15];
M.e[M.e.length-2]=1;
M.e[M.e.length-3]=sym4215;
M.a=3;
M.v=M.primitives["make-struct-field-mutator"]._i(M);
M.e.length-=3;
M.p=M.e[M.e.length-7];
M.e[M.e.length-7]=M.v;
M.a=7;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2729,M.p));
return((M.p).label)(M);};

var _2720=function(M){M.modules["whalesong/lang/posn.rkt"].isInvoked=true;
M.e.push([M.params.currentNamespace.get("struct:posn")||M.primitives["struct:posn"],M.params.currentNamespace.get("posn1.1")||M.primitives["posn1.1"],M.params.currentNamespace.get("posn?")||M.primitives["posn?"],M.params.currentNamespace.get("posn-x")||M.primitives["posn-x"],M.params.currentNamespace.get("posn-y")||M.primitives["posn-y"],M.params.currentNamespace.get("set-posn-x!")||M.primitives["set-posn-x!"],M.params.currentNamespace.get("set-posn-y!")||M.primitives["set-posn-y!"],M.params.currentNamespace.get("make-posn")||M.primitives["make-posn"]]);M.e[M.e.length-1].names=["struct:posn","posn1.1","posn?","posn-x","posn-y","set-posn-x!","set-posn-y!","make-posn"];
M.modules["whalesong/lang/posn.rkt"].prefix=M.e[M.e.length-1];
M.c.push(new RT.PromptFrame(_2722,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push(void(0),void(0),void(0),void(0),void(0));
M.e.push(void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0),void(0));
M.p=M.primitives["make-struct-type"];
M.e[M.e.length-1]=sym4216;
M.e[M.e.length-2]=false;
M.e[M.e.length-3]=2;
M.e[M.e.length-4]=0;
M.e[M.e.length-5]=false;
M.e[M.e.length-6]=RT.NULL;
M.e[M.e.length-7]=false;
M.e[M.e.length-8]=false;
M.e[M.e.length-9]=RT.NULL;
M.e[M.e.length-10]=false;
M.e[M.e.length-11]=sym4216;
M.a=11;
RT.checkClosureAndArity(M);
M.c.push(new RT.CallFrame(_2726,M.p));
return((M.p).label)(M);};

var _2713=function(M){if(--M.cbt<0){throw _2713;}

//"lambda body for #(struct:LamPositionalName make-posn whalesong/lang/posn.rkt 11 0 312 35)"

M.e.push(M.p.closedVals[0]);
M.e.push(void(0),void(0));
//"Constant toplevel ref: ?"

M.p=M.e[M.e.length-3][1];
M.e[M.e.length-1]=M.e[M.e.length-4];
M.e[M.e.length-2]=M.e[M.e.length-5];
M.a=2;
RT.checkClosureAndArity(M);
M.e.splice(M.e.length-5,3);
M.c[M.c.length-1].p=M.p;
return((M.p).label)(M);};

var _2721=function(M){if(--M.cbt<0){throw _2721;}
M.e.length-=(M.a-1);
return(_2722)(M);};

var _2716=function(M){if(--M.cbt<0){throw _2716;}
};

var _2732=function(M){if(--M.cbt<0){throw _2732;}
M.v=M.v;
M.e.pop();
M.p=M.c[M.c.length-1].label;
M.c.pop();
(function (selfMod,ns,extNs,prefix) {ns.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);extNs.set("make-posn", prefix[selfMod.getPrefixOffset("make-posn")]);ns.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);extNs.set("posn-x", prefix[selfMod.getPrefixOffset("posn-x")]);ns.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);extNs.set("posn-y", prefix[selfMod.getPrefixOffset("posn-y")]);ns.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);extNs.set("posn?", prefix[selfMod.getPrefixOffset("posn?")]);ns.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);extNs.set("set-posn-x!", prefix[selfMod.getPrefixOffset("set-posn-x!")]);ns.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);extNs.set("set-posn-y!", prefix[selfMod.getPrefixOffset("set-posn-y!")]);ns.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);extNs.set("struct:posn", prefix[selfMod.getPrefixOffset("struct:posn")]);}(M.modules["whalesong/lang/posn.rkt"],M.modules["whalesong/lang/posn.rkt"].getExports(),M.modules["whalesong/lang/posn.rkt"].getExternalExports(),M.modules["whalesong/lang/posn.rkt"].prefix));
return(M.p)(M);};

var _2724=function(M){M.e.splice(M.e.length-11,5);
M.e[M.e.length-7][0]=M.v;
M.e[M.e.length-7][1]=M.e[M.e.length-1];
M.e[M.e.length-7][2]=M.e[M.e.length-2];
M.e[M.e.length-7][3]=M.e[M.e.length-3];
M.e[M.e.length-7][4]=M.e[M.e.length-4];
M.e[M.e.length-7][5]=M.e[M.e.length-5];
M.e[M.e.length-7][6]=M.e[M.e.length-6];
M.e.length-=6;
M.v=RT.VOID;
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2719=function(M){M.v=M.v;
M.e.splice(M.e.length-((M.a-1)+1),1);
M.p=M.c[M.c.length-1].label;
M.c.pop();
return(M.p)(M);};

var _2714=function(M){M.c.push(new RT.PromptFrame(_2716,RT.DEFAULT_CONTINUATION_PROMPT_TAG,M.e.length,false));
M.e.push([false]);M.e[M.e.length-1].names=[false];
M.installedModules["whalesong/lang/posn.rkt"]=function(){return new RT.ModuleRecord("posn",_2720);}
return(_2719)(M);};

var _2733=function(M){return(_2714)(M);};

_2726.mvr=_2725;
_2729.mvr=_2728;
_2722.mvr=_2721;
_2732.mvr=_2731;
_2716.mvr=_2715;
var sym4215=RT.makeSymbol("y");
var sym4214=RT.makeSymbol("x");
var sym4216=RT.makeSymbol("posn");M.params.currentErrorHandler = fail;
M.params.currentSuccessHandler = success;
for (param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
        M.params[param] = params[param];
    }
}_2733(M); }))(plt.runtime.currentMachine,
                     function() {
                          if (window.console && window.console.log) {
                              window.console.log('loaded ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/posn.rkt>");
                          }
                     },
                     function(M, err) {
                          if (window.console && window.console.log) {
                              window.console.log('error: unable to load ' + "<ModuleSource /Users/dyoo/work/whalesong/whalesong/lang/posn.rkt>");
                              if (err && err.stack) { console.log(err.stack); }
                         }
                     },
                     {});