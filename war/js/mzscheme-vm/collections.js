var COLLECTIONS = {};
COLLECTIONS["bootstrap/bootstrap-teachpack"] = { 'name': "bootstrap/bootstrap-teachpack", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"playerImg"
} ,{"$":"global-bucket" ,"value":"targetImgs"
} ,{"$":"global-bucket" ,"value":"objectImgs"
} ,{"$":"global-bucket" ,"value":"update-object*"
} ,{"$":"global-bucket" ,"value":"update-target*"
} ,{"$":"global-bucket" ,"value":"update-projectile*"
} ,{"$":"global-bucket" ,"value":"update-player*"
} ,{"$":"global-bucket" ,"value":"offscreen*?"
} ,{"$":"global-bucket" ,"value":"collide*?"
} ,{"$":"global-bucket" ,"value":"update-player"
} ,{"$":"global-bucket" ,"value":"update-object"
} ,{"$":"global-bucket" ,"value":"update-target"
} ,{"$":"global-bucket" ,"value":"update-projectile"
} ,{"$":"global-bucket" ,"value":"title"
} ,{"$":"global-bucket" ,"value":"bg"
} ,{"$":"global-bucket" ,"value":"player"
} ,{"$":"global-bucket" ,"value":"targets"
} ,{"$":"global-bucket" ,"value":"objects"
} ,{"$":"global-bucket" ,"value":"keypress*"
} ,{"$":"global-bucket" ,"value":"projectiles"
} ,{"$":"global-bucket" ,"value":"t"
} ,{"$":"global-bucket" ,"value":"collide?"
} ,{"$":"global-bucket" ,"value":"move"
} ,{"$":"global-bucket" ,"value":"offscreen?"
} ,{"$":"global-bucket" ,"value":"f"
} ,{"$":"global-bucket" ,"value":"w"
} ,{"$":"global-bucket" ,"value":"score-string"
} ,{"$":"global-bucket" ,"value":"background"
} ,{"$":"global-bucket" ,"value":"being?"
} ,{"$":"global-bucket" ,"value":"world"
} ,{"$":"global-bucket" ,"value":"world-set!"
} ,{"$":"global-bucket" ,"value":"world-title"
} ,{"$":"global-bucket" ,"value":"world?"
} ,{"$":"global-bucket" ,"value":"wrap-update"
} ,{"$":"global-bucket" ,"value":"world-targets"
} ,{"$":"global-bucket" ,"value":"world-timer"
} ,{"$":"global-bucket" ,"value":"world-player"
} ,{"$":"global-bucket" ,"value":"world-ref"
} ,{"$":"global-bucket" ,"value":"world-score"
} ,{"$":"global-bucket" ,"value":"world-projectiles"
} ,{"$":"global-bucket" ,"value":"world-objects"
} ,{"$":"global-bucket" ,"value":"world-bg"
} ,{"$":"global-bucket" ,"value":"make-world"
} ,{"$":"global-bucket" ,"value":"score"
} ,{"$":"global-bucket" ,"value":"sq"
} ,{"$":"global-bucket" ,"value":"test-frame"
} ,{"$":"global-bucket" ,"value":"tangent"
} ,{"$":"global-bucket" ,"value":"spacing"
} ,{"$":"global-bucket" ,"value":"sine"
} ,{"$":"global-bucket" ,"value":"posn->point"
} ,{"$":"global-bucket" ,"value":"reset"
} ,{"$":"global-bucket" ,"value":"move-all"
} ,{"$":"global-bucket" ,"value":"draw-world"
} ,{"$":"global-bucket" ,"value":"make-being"
} ,{"$":"global-bucket" ,"value":"keypress"
} ,{"$":"global-bucket" ,"value":"cosine"
} ,{"$":"global-bucket" ,"value":"draw-being"
} ,{"$":"global-bucket" ,"value":"check-collision"
} ,{"$":"global-bucket" ,"value":"TITLE-COLOR"
} ,{"$":"global-bucket" ,"value":"being-posn"
} ,{"$":"global-bucket" ,"value":"being-set!"
} ,{"$":"global-bucket" ,"value":"being-x"
} ,{"$":"global-bucket" ,"value":"being-y"
} ,{"$":"global-bucket" ,"value":"being-ref"
} ,{"$":"global-bucket" ,"value":"being"
} ,{"$":"global-bucket" ,"value":"being-costume"
} ,{"$":"global-bucket" ,"value":"WIDTH"
} ,{"$":"global-bucket" ,"value":"any-collide?"
} ,{"$":"global-bucket" ,"value":"HEIGHT"
} ,{"$":"global-bucket" ,"value":"PROJECTILE-IMG"
} ,{"$":"global-bucket" ,"value":"START"
} ,{"$":"global-bucket" ,"value":"DIRECTION"
} ,{"$":"global-bucket" ,"value":"EXPLOSION-COLOR"
} ,{"$":"global-bucket" ,"value":"BACKGROUND"
} ,{"$":"module-variable" ,"sym":types.symbol("list") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("text") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("true") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("unbox") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("throw-cond-exhausted-error") ,"modidx":{"$":"module-path" ,"path":"moby/runtime/kernel/misc" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("tan") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string=?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("star") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("posn-y") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("put-pinhole") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("rest") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("set-box!") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("sin") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("rectangle") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("random") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure-arity") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("number->string") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-tick") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("posn-x") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("pi") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("place-image") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-key") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-redraw") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("map") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("not") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("member") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-posn") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-field-accessor") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("length") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("key=?") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-big-bang") ,"modidx":{"$":"module-path" ,"path":"moby/jsworld" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("foldl") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("filter") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("compose") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("cons") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("cos") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("box") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("-") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("=") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol(">") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("/") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("+") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("*") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":67 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":640
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":69 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":480
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":73 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":"gray"
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":59 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",976,28,20,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"white"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":70 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1014,29,23,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1019,29,28,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":5
} ,{"$":"constant" ,"value":20
} ,{"$":"constant" ,"value":30
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"yellow"
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":74 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1072,30,19,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1077,30,24,40])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":89 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":67 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":69 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"black"
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":72 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1138,31,18,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":44 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1166,32,14,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":48 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("spacing") ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1223,34,18,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":500
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":54 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":29 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":64 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":61 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1363,39,0,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("being")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":60 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1363,39,0,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":64 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("posn")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":66 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1363,39,0,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":64 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("costume")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":30 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":43 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":33 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":31 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("world")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":8
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":41 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("objects")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":35 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("targets")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":37 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":types.symbol("player")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":40 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":3
} ,{"$":"constant" ,"value":types.symbol("projectiles")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":42 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":4
} ,{"$":"constant" ,"value":types.symbol("bg")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":39 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":5
} ,{"$":"constant" ,"value":types.symbol("score")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":32 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":6
} ,{"$":"constant" ,"value":types.symbol("title")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":36 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":7
} ,{"$":"constant" ,"value":types.symbol("timer")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":62 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1630,45,16,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":94 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":60 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":63 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1675,46,16,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":84 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":60 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":50 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("posn->point") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1777,49,27,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1788,49,38,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1802,49,52,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":69 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1812,49,62,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1815,49,65,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":84 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":57 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-being") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1980,54,2,182])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2038,55,4,123])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2051,55,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2091,56,17,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2112,56,38,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":84 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1999,54,21,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":50 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2012,54,34,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":60 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":53 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-world") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2308,62,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2410,63,9,251])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2671,67,9,93])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2770,68,4,146])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2783,68,17,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":76 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":20
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2805,68,39,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":8 ,"pos":59 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":10
} ,{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2849,69,17,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":57 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2867,69,35,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2880,69,48,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":11 ,"pos":74 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2683,67,21,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2691,67,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2709,67,47,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2727,67,65,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2749,67,87,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2422,63,21,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2425,63,24,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2465,64,21,156])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2477,64,33,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":60 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2489,64,45,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2540,65,33,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":7
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2548,65,41,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(3, 2)
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2555,65,48,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2572,65,65,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(1, 4)
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2579,65,72,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"toplevel" ,"depth":8 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2643,66,21,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2322,62,23,77])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":80 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2337,62,38,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":"    score:"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2366,62,67,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2382,62,83,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":34 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("wrap-update") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3111,76,10,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3114,76,13,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3137,76,36,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3145,76,44,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3163,76,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"top"
} ,{"$":"constant" ,"value":"bottom"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3204,77,17,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3216,77,29,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3227,77,40,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3239,77,52,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3242,77,55,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3256,77,69,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3287,78,10,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3290,78,13,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3313,78,36,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3321,78,44,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3339,78,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
} ,{"$":"constant" ,"value":"right"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3380,79,17,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3392,79,29,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3403,79,40,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3406,79,43,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3419,79,56,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3432,79,69,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":77 ,"const?":false ,"ready?":false
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3475,80,22,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3487,80,34,27])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3490,80,37,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3502,80,49,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3515,80,62,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3095,75,2,441])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),3095,75,2,441,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":51 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("reset") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3670,85,2,407])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3698,87,6,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3708,87,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3734,87,42,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3745,87,53,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3748,87,56,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"constant" ,"value":-1
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3762,87,70,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":69 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3786,88,6,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3796,88,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3823,88,43,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3834,88,54,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3837,88,57,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"toplevel" ,"depth":6 ,"pos":67 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3854,88,74,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":69 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3878,89,6,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3888,89,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"top"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3913,89,41,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3924,89,52,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":67 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3939,89,67,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3942,89,70,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"toplevel" ,"depth":6 ,"pos":69 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3968,90,6,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3978,90,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"bottom"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4006,90,44,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4017,90,55,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":67 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4032,90,70,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4035,90,73,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"constant" ,"value":-1
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3685,86,3,366])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),3685,86,3,366,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4055,91,3,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":52 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("move-all") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4277,96,2,64])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4298,96,23,14])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4313,96,38,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":51 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4323,96,48,8])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":55 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("keypress") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4617,103,5,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":" "
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4639,104,5,489])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4651,104,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4686,105,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4721,106,17,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4755,107,17,243])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4761,107,23,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4773,107,35,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":60 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4785,107,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":14 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4803,107,65,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":13 ,"pos":70 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4854,108,27,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":20
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4860,108,33,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4868,108,41,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":14 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4919,109,27,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":86 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4925,109,33,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4975,110,27,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5016,111,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5046,112,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5079,113,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5112,114,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":77 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5145,116,5,287])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5157,116,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5192,117,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5227,118,17,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5242,118,32,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5281,119,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5320,120,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5350,121,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5383,122,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5416,123,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4606,102,2,828])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),4606,102,2,828,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":68 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("any-collide?") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5592,128,2,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5597,128,7,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5605,128,15,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5625,128,35,14])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":58 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("check-collision") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5872,133,2,158])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5897,133,27,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5967,134,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":51 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":71 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("START") ,"flags":[
] ,"num-params":14 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6585,148,4,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6629,149,4,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":59 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6668,150,4,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":74 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6705,151,4,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":72 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6747,152,11,68])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,10 ,11 ,12 ,13 ,14 ,15
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6827,153,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6904,154,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6981,155,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7091,156,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7201,157,11,19])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7232,158,11,44])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7288,159,11,44])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7344,160,11,52])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7408,161,11,824])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8244,170,11,208])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8464,173,11,91])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8567,174,11,214])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8793,179,11,55])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8860,180,11,1860])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10728,206,6,144])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10766,207,19,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":93 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":types.rational(1, 10)
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10811,208,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":53 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10853,209,19,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8951,182,29,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":44 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8967,182,45,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9020,183,36,167])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9224,185,36,63])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9324,186,36,175])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9536,188,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9596,189,36,25])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9658,190,36,17])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9712,191,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9772,192,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,7 ,8 ,9 ,10
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9868,194,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9914,195,34,75])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":16 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9976,195,96,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":19 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":10
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10025,196,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10207,199,36,73])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10257,199,86,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":50
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":16 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":100
}
]
}
}
]
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10317,200,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10501,203,36,73])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10551,203,86,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":20
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":16 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":100
}
]
}
}
]
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":77 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10616,204,39,68])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":16 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":17 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9828,193,31,858])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),9828,193,31,858,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9779,192,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9719,191,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9662,190,40,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9604,189,44,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9543,188,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9337,186,49,161])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9357,186,69,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9362,186,74,14])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9436,187,57,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9446,187,67,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9233,185,45,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9243,185,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9029,183,45,157])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9039,183,55,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":58 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9056,183,72,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9074,183,90,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8818,179,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8574,174,18,206])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8651,175,30,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"constant" ,"value":0
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8490,173,37,63])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8501,173,48,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8514,173,61,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8527,173,74,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8540,173,87,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8272,170,39,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8275,170,42,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8347,171,39,25])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8360,171,52,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8412,172,39,37])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8425,172,52,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8437,172,64,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7463,162,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7466,162,37,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7502,162,73,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7510,162,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7528,162,99,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
} ,{"$":"constant" ,"value":"right"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7595,163,43,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7607,163,55,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7618,163,66,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7630,163,78,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7646,163,94,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7717,164,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7772,165,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7775,165,37,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7811,165,73,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7819,165,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7837,165,99,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"top"
} ,{"$":"constant" ,"value":"bottom"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7904,166,43,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7916,166,55,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7927,166,66,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7943,166,82,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7958,166,97,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8026,167,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":1 ,"pos":77 ,"const?":false ,"ready?":false
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8095,168,48,133])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8107,168,60,42])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8123,168,76,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8135,168,88,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8210,169,60,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7423,161,26,808])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),7423,161,26,808,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7363,160,30,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":34 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7303,159,26,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":34 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7247,158,26,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":34 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"toplevel" ,"depth":1 ,"pos":112 ,"const?":false ,"ready?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7100,156,20,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7117,156,37,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7129,156,49,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7140,156,60,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7145,156,65,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7156,156,76,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":69 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6990,155,20,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7007,155,37,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7019,155,49,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7030,155,60,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7035,155,65,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7046,155,76,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":69 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6920,154,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6950,154,57,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6843,153,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6873,153,57,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6755,152,19,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6767,152,31,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6778,152,42,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":67 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6790,152,54,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":69 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":46 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("test-frame") ,"flags":[
] ,"num-params":6 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11072,214,9,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11147,215,9,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11222,216,9,51])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11283,217,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11385,218,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11487,219,9,75])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11572,220,9,200])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11778,225,4,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":53 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11579,220,16,192])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11654,221,28,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"constant" ,"value":100
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11500,219,22,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11506,219,28,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11518,219,40,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":-200
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11537,219,59,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":70 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11394,218,18,82])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11411,218,35,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11423,218,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11434,218,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11447,218,71,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":480
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11292,217,18,82])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11309,217,35,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11321,217,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11332,217,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11345,217,71,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":480
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11230,216,17,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11242,216,29,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":320
} ,{"$":"constant" ,"value":400
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11163,215,25,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11193,215,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11088,214,25,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11118,214,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":45 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("sq") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11840,229,15,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":49 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("sine") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11893,231,17,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11898,231,22,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11903,231,27,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":95 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":180
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":56 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("cosine") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11965,233,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11970,233,24,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11975,233,29,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":95 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":180
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":47 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("tangent") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",12039,235,20,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":81 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",12044,235,25,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",12049,235,30,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":95 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":180
}
]
}
}
]
}
}
]
}
}
}
}
]
}
}, 'provides': ["score","sq","test-frame","tangent","sine","START","cosine"]};
COLLECTIONS["bootstrap/function-teachpack"] = { 'name': "bootstrap/function-teachpack", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"source"
} ,{"$":"global-bucket" ,"value":"world-ref"
} ,{"$":"global-bucket" ,"value":"world-set!"
} ,{"$":"global-bucket" ,"value":"world?"
} ,{"$":"global-bucket" ,"value":"world-rocket-height"
} ,{"$":"global-bucket" ,"value":"tock"
} ,{"$":"global-bucket" ,"value":"world"
} ,{"$":"global-bucket" ,"value":"world-current-height"
} ,{"$":"global-bucket" ,"value":"text-add"
} ,{"$":"global-bucket" ,"value":"start"
} ,{"$":"global-bucket" ,"value":"IMAGE0"
} ,{"$":"global-bucket" ,"value":"draw-world"
} ,{"$":"global-bucket" ,"value":"make-world"
} ,{"$":"global-bucket" ,"value":"rocket-add"
} ,{"$":"global-bucket" ,"value":"WIDTH"
} ,{"$":"global-bucket" ,"value":"ROCKET"
} ,{"$":"global-bucket" ,"value":"HEIGHT"
} ,{"$":"module-variable" ,"sym":types.symbol("throw-cond-exhausted-error") ,"modidx":{"$":"module-path" ,"path":"moby/runtime/kernel/misc" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("true") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("text") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("image-height") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("open-image-url") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("put-pinhole") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("place-image") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-key") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-redraw") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("number->string") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-field-accessor") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("image-width") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-big-bang") ,"modidx":{"$":"module-path" ,"path":"moby/jsworld" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty-scene") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol(">=") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("-") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("/") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("+") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":15 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":200
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":17 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":600
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":11 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",432,17,15,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":33 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":15 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":1 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",478,20,2,71])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"http://www.wescheme.org/images/teachpacks/rocket.png"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":16 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",567,22,15,69])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",587,22,35,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",590,22,38,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":31 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":6 ,"pos":1 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",614,22,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":1 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":7 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":13 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":4 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":2 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":3 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",639,24,0,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":30 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("world")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":8 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",639,24,0,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":29 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":2 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("current-height")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":5 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",639,24,0,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":29 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":2 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("rocket-height")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":12 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-world") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",878,31,2,83])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":9 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",888,31,12,50])
} ,"body":{"$":"application" ,"rator":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",889,31,13,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",913,31,37,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",939,31,63,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":14 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":4 ,"pos":11 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":9 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("text-add") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1080,36,2,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1093,36,15,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1099,36,21,50])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"Height: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1125,36,47,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":28 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":14
} ,{"$":"constant" ,"value":types.symbol("black")
}
]
}
} ,{"$":"constant" ,"value":60
} ,{"$":"constant" ,"value":0
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":14 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("rocket-add") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1384,45,5,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":34 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1388,45,9,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":16 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1410,45,31,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1420,45,41,50])
} ,"body":{"$":"application" ,"rator":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1421,45,42,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1445,45,66,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1478,46,5,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":16 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":100
} ,{"$":"constant" ,"value":200
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":19 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1525,47,10,93])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":16 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":100
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1549,47,34,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1559,47,44,50])
} ,"body":{"$":"application" ,"rator":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1560,47,45,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1584,47,69,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1373,44,2,247])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),1373,44,2,247,"bootstrap/function-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":6 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("tock") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1745,53,2,81])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":13 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1757,53,14,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":1
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1762,53,19,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1802,54,14,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":10 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("start") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1862,58,2,109])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1875,58,15,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":13 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1919,59,15,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":26 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":6 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/function-teachpack",1948,60,15,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":27 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":12 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
}
}
]
}
}, 'provides': ["start"]};
COLLECTIONS["bootstrap/cage-teachpack"] = { 'name': "bootstrap/cage-teachpack", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"offscreen?"
} ,{"$":"global-bucket" ,"value":"w"
} ,{"$":"global-bucket" ,"value":"draw-butterfly"
} ,{"$":"global-bucket" ,"value":"world"
} ,{"$":"global-bucket" ,"value":"world-set!"
} ,{"$":"global-bucket" ,"value":"world-y"
} ,{"$":"global-bucket" ,"value":"world?"
} ,{"$":"global-bucket" ,"value":"world-x"
} ,{"$":"global-bucket" ,"value":"world-ref"
} ,{"$":"global-bucket" ,"value":"butterfly"
} ,{"$":"global-bucket" ,"value":"move"
} ,{"$":"global-bucket" ,"value":"source"
} ,{"$":"global-bucket" ,"value":"start"
} ,{"$":"global-bucket" ,"value":"make-world"
} ,{"$":"global-bucket" ,"value":"draw-world"
} ,{"$":"global-bucket" ,"value":"WIDTH"
} ,{"$":"global-bucket" ,"value":"HEIGHT"
} ,{"$":"module-variable" ,"sym":types.symbol("on-redraw") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("true") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("put-pinhole") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("text") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("throw-cond-exhausted-error") ,"modidx":{"$":"module-path" ,"path":"moby/runtime/kernel/misc" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("open-image-url") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("place-image") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("number->string") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-key") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("key=?") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-field-accessor") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("image-width") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-big-bang") ,"modidx":{"$":"module-path" ,"path":"moby/jsworld" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty-scene") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("image-height") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("char?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("-") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("/") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("+") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":16 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":400
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":17 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":200
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":12 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",369,19,2,74])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"http://www.wescheme.org/images/teachpacks/butterfly.png"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":10 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",464,21,18,75])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":12 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",484,21,38,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",487,21,41,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":31 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":6 ,"pos":12 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",511,21,65,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",514,21,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":34 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":6 ,"pos":12 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":4 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":14 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":7 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":9 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":5 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",617,25,0,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":26 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("world")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":8 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",617,25,0,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":30 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":9 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("x")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":6 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",617,25,0,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":30 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":9 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("y")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":11 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("move") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",735,31,5,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":29 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",754,31,24,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":14 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",766,31,36,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",769,31,39,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":10
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",785,31,55,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",804,32,5,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":29 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",824,32,25,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":14 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",836,32,37,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",839,32,40,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":10
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",855,32,56,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",874,33,5,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":29 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"down"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",893,33,24,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":14 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",905,33,36,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",917,33,48,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",920,33,51,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":10
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",943,34,5,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":29 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"up"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",960,34,22,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":14 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",972,34,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",984,34,46,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",987,34,49,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":10
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":19 ,"const?":false ,"ready?":false
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",724,30,2,294])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),724,30,2,294,"bootstrap/cage-teachpack"])
}
]
}
}
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":15 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-world") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1211,42,9,127])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1348,44,9,409])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1763,51,4,59])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1781,51,22,40])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1794,51,35,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":33 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":6 ,"pos":16 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1399,45,22,356])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1412,45,35,224])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1418,45,41,166])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"x-coordinate: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1450,45,73,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":27 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1466,45,89,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":"   y-coordinate: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1555,46,76,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":27 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1571,46,92,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"constant" ,"value":14
} ,{"$":"constant" ,"value":types.symbol("black")
}
]
}
} ,{"$":"constant" ,"value":60
} ,{"$":"constant" ,"value":0
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1272,43,27,64])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":10 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1295,43,50,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1307,43,62,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1317,43,72,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":13 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("start") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1863,55,9,240])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2109,61,4,107])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2122,61,17,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":14 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":200
} ,{"$":"constant" ,"value":100
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2160,62,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":28 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2193,63,17,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":15 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1934,57,22,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1969,58,22,89])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1981,58,34,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":8 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1990,58,43,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":11 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2037,59,34,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":6 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2046,59,43,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":11 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":19 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",2089,60,27,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":11 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1905,56,19,196])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),1905,56,19,196,"bootstrap/cage-teachpack"])
}
]
}
}
}
}
}
}
]
}
}
}
}
]
}
}, 'provides': ["start"]};
COLLECTIONS["bootstrap/bootstrap-gtp-teachpack"] = { 'name': "bootstrap/bootstrap-gtp-teachpack", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"targetImgs"
} ,{"$":"global-bucket" ,"value":"dangerImgs"
} ,{"$":"global-bucket" ,"value":"origTargets"
} ,{"$":"global-bucket" ,"value":"origDangers"
} ,{"$":"global-bucket" ,"value":"update-danger*"
} ,{"$":"global-bucket" ,"value":"update-target*"
} ,{"$":"global-bucket" ,"value":"update-player*"
} ,{"$":"global-bucket" ,"value":"onscreen*?"
} ,{"$":"global-bucket" ,"value":"collide*?"
} ,{"$":"global-bucket" ,"value":"update-player"
} ,{"$":"global-bucket" ,"value":"dangerSource"
} ,{"$":"global-bucket" ,"value":"update-danger"
} ,{"$":"global-bucket" ,"value":"targetSource"
} ,{"$":"global-bucket" ,"value":"onscreen?"
} ,{"$":"global-bucket" ,"value":"update-target"
} ,{"$":"global-bucket" ,"value":"title"
} ,{"$":"global-bucket" ,"value":"bg"
} ,{"$":"global-bucket" ,"value":"targets"
} ,{"$":"global-bucket" ,"value":"dangers"
} ,{"$":"global-bucket" ,"value":"keypress*"
} ,{"$":"global-bucket" ,"value":"sources"
} ,{"$":"global-bucket" ,"value":"move"
} ,{"$":"global-bucket" ,"value":"in-domain?"
} ,{"$":"global-bucket" ,"value":"source"
} ,{"$":"global-bucket" ,"value":"f"
} ,{"$":"global-bucket" ,"value":"b"
} ,{"$":"global-bucket" ,"value":"player"
} ,{"$":"global-bucket" ,"value":"collide?"
} ,{"$":"global-bucket" ,"value":"w"
} ,{"$":"global-bucket" ,"value":"score-string"
} ,{"$":"global-bucket" ,"value":"background"
} ,{"$":"global-bucket" ,"value":"in?"
} ,{"$":"global-bucket" ,"value":"safer-rectangle"
} ,{"$":"global-bucket" ,"value":"world"
} ,{"$":"global-bucket" ,"value":"world-set!"
} ,{"$":"global-bucket" ,"value":"world-title"
} ,{"$":"global-bucket" ,"value":"world?"
} ,{"$":"global-bucket" ,"value":"wrap-update"
} ,{"$":"global-bucket" ,"value":"world-targets"
} ,{"$":"global-bucket" ,"value":"world-timer"
} ,{"$":"global-bucket" ,"value":"world-player"
} ,{"$":"global-bucket" ,"value":"world-ref"
} ,{"$":"global-bucket" ,"value":"world-score"
} ,{"$":"global-bucket" ,"value":"world-dangers"
} ,{"$":"global-bucket" ,"value":"world-bg"
} ,{"$":"global-bucket" ,"value":"sq"
} ,{"$":"global-bucket" ,"value":"string->image"
} ,{"$":"global-bucket" ,"value":"tangent"
} ,{"$":"global-bucket" ,"value":"type"
} ,{"$":"global-bucket" ,"value":"subset?"
} ,{"$":"global-bucket" ,"value":"start"
} ,{"$":"global-bucket" ,"value":"score"
} ,{"$":"global-bucket" ,"value":"spacing"
} ,{"$":"global-bucket" ,"value":"sine"
} ,{"$":"global-bucket" ,"value":"safer-triangle"
} ,{"$":"global-bucket" ,"value":"safer-star"
} ,{"$":"global-bucket" ,"value":"overlay-at"
} ,{"$":"global-bucket" ,"value":"random-posn"
} ,{"$":"global-bucket" ,"value":"safer-circle"
} ,{"$":"global-bucket" ,"value":"safer-ellipse"
} ,{"$":"global-bucket" ,"value":"reset"
} ,{"$":"global-bucket" ,"value":"posn->point"
} ,{"$":"global-bucket" ,"value":"put-image"
} ,{"$":"global-bucket" ,"value":"pick"
} ,{"$":"global-bucket" ,"value":"make-being"
} ,{"$":"global-bucket" ,"value":"move-all"
} ,{"$":"global-bucket" ,"value":"number->image"
} ,{"$":"global-bucket" ,"value":"make-world"
} ,{"$":"global-bucket" ,"value":"keypress"
} ,{"$":"global-bucket" ,"value":"being-ref"
} ,{"$":"global-bucket" ,"value":"being-y"
} ,{"$":"global-bucket" ,"value":"draw-being"
} ,{"$":"global-bucket" ,"value":"draw-world"
} ,{"$":"global-bucket" ,"value":"check-collision"
} ,{"$":"global-bucket" ,"value":"cosine"
} ,{"$":"global-bucket" ,"value":"being?"
} ,{"$":"global-bucket" ,"value":"being-source"
} ,{"$":"global-bucket" ,"value":"being-x"
} ,{"$":"global-bucket" ,"value":"being-set!"
} ,{"$":"global-bucket" ,"value":"HEIGHT"
} ,{"$":"global-bucket" ,"value":"assert-equal"
} ,{"$":"global-bucket" ,"value":"being-costume"
} ,{"$":"global-bucket" ,"value":"being-posn"
} ,{"$":"global-bucket" ,"value":"being"
} ,{"$":"global-bucket" ,"value":"WIDTH"
} ,{"$":"global-bucket" ,"value":"TITLE-COLOR"
} ,{"$":"global-bucket" ,"value":"BACKGROUND"
} ,{"$":"global-bucket" ,"value":"EXPLOSION-COLOR"
} ,{"$":"global-bucket" ,"value":"*functions-complained-about*"
} ,{"$":"module-variable" ,"sym":types.symbol("unbox") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("throw-cond-exhausted-error") ,"modidx":{"$":"module-path" ,"path":"moby/runtime/kernel/misc" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("triangle") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("true") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("text") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("tan") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("symbol?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string=?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("place-image") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("star") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("rectangle") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("set-box!") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("sin") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("random") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("raise") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("put-pinhole") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("posn-x") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("posn?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure-arity") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("posn-y") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("pi") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("overlay/xy") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-redraw") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-tick") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("on-key") ,"modidx":{"$":"module-path" ,"path":"moby/world-handlers" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("number->string") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("number?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("member") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("not") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("map") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-posn") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-field-accessor") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-hash") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("display") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("format") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list-ref") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("length") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-big-bang") ,"modidx":{"$":"module-path" ,"path":"moby/jsworld" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("image?") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("foldl") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("filter") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("floor") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("ellipse") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("equal?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("error") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty-scene") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("circle") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("compose") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("cos") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("boolean?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("box") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("andmap") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("<=") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol(">") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("=") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("+") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("-") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("/") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("*") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":89 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1122,38,37,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":147 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1127,38,42,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":126 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":81 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("assert-equal") ,"flags":[
] ,"num-params":5 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1245,42,6,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":139 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1290,43,6,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":127 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":""
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1318,44,6,536])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":127 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1338,45,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":139 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1346,45,19,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":128 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"~a"
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1374,45,47,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":128 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"~a"
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1408,46,11,208])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":128 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1421,47,12,128])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"EXAMPLE CHECK FAILED: \n"
} ,{"$":"constant" ,"value":"  For ~a at line ~a\n"
} ,{"$":"constant" ,"value":"  Expected: ~s\n"
} ,{"$":"constant" ,"value":"   But got: ~s\n"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1621,55,11,231])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":128 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",1635,56,12,136])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"EXAMPLE CHECK FAILED: \n"
} ,{"$":"constant" ,"value":"  For ~a at line ~a\n"
} ,{"$":"constant" ,"value":"  Expected: ~a  =>  ~s\n"
} ,{"$":"constant" ,"value":"   But got: ~s\n"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":49 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("type") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3211,114,4,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"Function"
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3244,115,4,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"Number"
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3272,116,4,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"String"
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3300,117,4,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":134 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"Image"
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3326,118,4,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":146 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"Boolean"
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3356,119,4,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"Position"
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3384,120,4,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"constant" ,"value":"Symbol"
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"constant" ,"value":"I don't know."
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3201,113,2,233])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),3201,113,2,233,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":47 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("string->image") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3541,126,2,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":14
} ,{"$":"constant" ,"value":types.symbol("black")
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":67 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("number->image") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3666,131,2,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":47 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3681,131,17,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":63 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("put-image") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3863,137,2,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3882,137,21,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":480
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",3892,137,31,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":141 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
} ,{"$":"constant" ,"value":480
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":57 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("overlay-at") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4017,141,2,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4042,141,27,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":59 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("safer-circle") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4120,145,9,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4135,145,24,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4156,146,4,130])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4163,146,11,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"circle: expected <positive real number less than 10000> as first argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4263,146,111,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4297,147,9,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":143 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4105,144,2,218])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),4105,144,2,218,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":55 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("safer-triangle") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4383,150,9,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4398,150,24,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4419,151,4,132])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4426,151,11,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"triangle: expected <positive real number less than 10000> as first argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4528,151,113,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4562,152,9,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4368,149,2,222])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),4368,149,2,222,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":33 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("safer-rectangle") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4659,155,9,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4675,155,25,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4697,156,4,134])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4704,156,11,126])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"rectangle: expected <positive real number less than 10000> as first argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4807,156,114,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4842,157,9,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4859,157,26,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4882,158,4,136])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4889,158,11,128])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"rectangle: expected <positive real number less than 10000> as second argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4993,158,115,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5029,159,9,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",4644,154,2,422])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),4644,154,2,422,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":60 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("safer-ellipse") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5133,162,9,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5149,162,25,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5171,163,4,132])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5178,163,11,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"ellipse: expected <positive real number less than 10000> as first argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5279,163,112,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5314,164,9,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5331,164,26,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5354,165,4,134])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5361,165,11,126])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"ellipse: expected <positive real number less than 10000> as second argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5463,165,113,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5499,166,9,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":138 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5118,161,2,416])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),5118,161,2,416,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":56 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("safer-star") ,"flags":[
] ,"num-params":5 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5607,169,9,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5624,169,26,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5647,170,4,130])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5654,170,11,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"star: expected <positive real number less than 10000> as first argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5752,170,109,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5788,171,9,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5806,171,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5830,172,4,132])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5837,172,11,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"star: expected <positive real number less than 10000> as second argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5936,172,110,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5973,173,9,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5990,173,26,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":150 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":10000
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6013,174,4,130])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6020,174,11,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"star: expected <positive real number less than 10000> as third argument, given: "
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6118,174,109,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6154,175,9,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",5592,168,2,603])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),5592,168,2,603,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":85 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":640
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":80 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":480
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":88 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":"gray"
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":86 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6302,181,20,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":147 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"white"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":87 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6336,182,19,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":147 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6341,182,24,40])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"black"
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":52 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6398,183,14,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":147 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":53 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("spacing") ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6455,185,18,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":200
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":84 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":76 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":79 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6625,192,0,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("being")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":3
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":83 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6625,192,0,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("posn")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":82 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6625,192,0,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("costume")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":77 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6625,192,0,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":types.symbol("source")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":34 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":68 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":37 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":35 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("world")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":7
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":44 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("dangers")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":39 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("targets")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":41 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":types.symbol("player")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":45 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":3
} ,{"$":"constant" ,"value":types.symbol("bg")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":43 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":4
} ,{"$":"constant" ,"value":types.symbol("score")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":36 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":5
} ,{"$":"constant" ,"value":types.symbol("title")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":40 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6771,195,0,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":6
} ,{"$":"constant" ,"value":types.symbol("timer")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":78 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6887,198,16,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":144 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":109 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":83 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":71 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",6932,199,16,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":144 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":112 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":83 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":62 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("posn->point") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7034,202,27,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7045,202,38,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7059,202,52,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7069,202,62,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7072,202,65,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":72 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-being") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7237,207,2,182])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7295,208,4,123])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7308,208,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7348,209,17,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7369,209,38,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7256,207,21,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7269,207,34,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":73 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-world") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7565,215,9,102])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7677,217,9,318])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8005,225,9,74])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8085,227,4,146])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8098,227,17,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":20
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8120,227,39,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":8 ,"pos":86 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":10
} ,{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8164,228,17,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":135 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":72 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8182,228,35,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8195,228,48,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":11 ,"pos":87 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8020,226,10,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":148 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8028,226,18,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8046,226,36,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8064,226,54,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7689,217,21,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":151 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7692,217,24,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7732,218,21,223])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7744,218,33,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7756,218,45,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7807,219,33,104])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":7
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7815,219,41,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(3, 2)
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7822,219,48,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7851,220,39,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(1, 4)
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7858,220,46,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"toplevel" ,"depth":9 ,"pos":88 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7917,222,33,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7931,222,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7977,224,21,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7579,215,23,87])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7594,215,38,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":"    score:"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7633,216,38,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",7649,216,54,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":74 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("check-collision") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8286,231,2,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8291,231,7,74])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":142 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8299,231,15,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":136 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8323,231,39,23])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":64 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("pick") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8416,236,2,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":129 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8430,236,16,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8438,236,24,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":132 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":50 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("subset?") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8577,241,2,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":149 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8602,242,17,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":32 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("in?") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8650,246,6,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":130 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8660,246,16,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":50 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8674,246,30,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":38 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("wrap-update") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8902,252,10,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8905,252,13,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8928,252,36,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8941,252,49,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"top"
} ,{"$":"constant" ,"value":"bottom"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8982,253,17,96])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8994,253,29,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9005,253,40,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9017,253,52,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9020,253,55,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9043,254,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9061,254,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9091,255,10,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9094,255,13,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9117,255,36,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9130,255,49,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
} ,{"$":"constant" ,"value":"right"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9171,256,17,96])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9183,256,29,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9194,256,40,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9197,256,43,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9210,256,56,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9232,257,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9250,257,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9275,258,5,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9278,258,8,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9318,259,17,84])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9330,259,29,27])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9333,259,32,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9345,259,44,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9367,260,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9385,260,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9410,261,5,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9413,261,8,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":3
}
]
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9453,262,17,100])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9465,262,29,44])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9468,262,32,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9480,262,44,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9492,262,56,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9518,263,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9536,263,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",8886,251,2,670])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),8886,251,2,670,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":58 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("random-posn") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9591,267,2,1608])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9647,270,6,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9679,271,6,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9690,271,17,8])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":-1
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9699,271,26,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9723,272,6,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9756,273,6,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9767,273,17,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":4 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9779,273,29,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9803,274,6,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"top"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9834,275,6,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9845,275,17,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9860,275,32,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":4 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9881,276,6,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"bottom"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9915,277,6,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9926,277,17,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9941,277,32,8])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":-1
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9958,278,6,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"bottom-left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9997,279,6,144])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10011,280,7,129])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10019,281,8,71])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10030,281,19,5])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10060,281,49,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10068,281,57,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":137 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10075,281,64,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10092,282,8,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10103,282,19,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10111,282,27,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":137 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10118,282,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10133,282,49,5])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10149,283,6,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"bottom-right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10188,284,6,139])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10201,285,7,125])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10208,286,8,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10219,286,19,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10228,286,28,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10249,286,49,5])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10257,287,8,68])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10268,287,19,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10295,287,46,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10303,287,54,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":137 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10310,287,61,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10335,288,6,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"top-left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10370,289,6,143])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10383,290,7,129])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10390,291,8,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10401,291,19,5])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10431,291,49,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10441,291,59,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10457,292,8,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10468,292,19,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10476,292,27,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":137 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10483,292,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10498,292,49,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10521,293,6,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"top-right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10557,294,6,145])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10571,295,7,130])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10579,296,8,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10590,296,19,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10599,296,28,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":85 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10620,296,49,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10635,297,8,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10646,297,19,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10676,297,49,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10686,297,59,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":9 ,"pos":80 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10710,298,6,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"onscreen"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10745,299,6,81])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10756,299,17,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10759,299,20,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10767,299,28,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10775,299,36,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10792,300,17,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10795,300,20,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10803,300,28,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10811,300,36,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10834,301,6,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"screen-left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10872,302,6,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10883,302,17,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":types.rational(1, 4)
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10897,302,31,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10900,302,34,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10908,302,42,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10916,302,50,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10939,303,6,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"screen-right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10978,304,6,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",10989,304,17,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":types.rational(3, 4)
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11003,304,31,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11006,304,34,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11014,304,42,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11022,304,50,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11045,305,6,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"center"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11078,306,6,40])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11089,306,17,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":types.rational(1, 2)
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11103,306,31,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":types.rational(1, 2)
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11131,307,11,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":140 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11138,307,18,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":128 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"don't know what position ~a means"
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9635,269,4,1563])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),9635,269,4,1563,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",9600,267,11,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":53 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"constant" ,"value":types.rational(1, 3)
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":61 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("reset") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11370,315,5,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":130 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11391,316,5,101])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11429,317,7,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11441,317,19,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":58 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11462,317,40,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11405,316,19,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11499,318,5,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11522,319,5,64])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11534,319,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":58 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11556,319,39,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11598,320,10,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":140 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"strange being source"
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11358,314,3,272])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),11358,314,3,272,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":66 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("move-all") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11838,325,2,119])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11862,326,13,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11874,326,25,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11886,326,37,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11906,327,13,8])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",11922,328,13,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":61 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":69 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("keypress") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12233,336,5,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"release"
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12276,338,5,248])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12288,338,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12323,339,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12358,340,17,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12373,340,32,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12412,341,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":45 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12442,342,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12475,343,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12508,344,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",12222,335,2,304])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),12222,335,2,304,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":51 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("start") ,"flags":[
] ,"num-params":13 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13094,358,4,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":86 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13133,359,4,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13177,360,11,88])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,7 ,8 ,10 ,11 ,12 ,13 ,14
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13277,362,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13354,363,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13424,364,11,113])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13542,368,11,112])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13666,372,11,256])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13934,376,11,214])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14160,380,11,57])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14229,381,11,57])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14298,382,11,904])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15214,406,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15324,408,11,108])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15444,411,11,202])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4 ,5 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15658,416,11,55])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15725,417,11,1664])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,8 ,9
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17397,451,6,135])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":133 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17432,452,16,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":types.rational(1, 10)
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17474,453,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17513,454,16,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15874,421,29,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":52 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15890,421,45,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15944,423,36,96])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,5 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16077,426,36,97])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16211,429,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16271,430,36,25])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16333,431,36,17])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16387,432,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16447,433,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,7 ,8 ,9
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16543,435,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":151 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16589,436,34,75])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16651,437,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":17 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":10
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16700,438,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":74 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16885,441,36,68])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16930,442,48,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":154 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":50
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":100
}
]
}
}
]
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16990,443,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":74 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17177,446,36,68])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17222,447,48,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":153 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":20
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":100
}
]
}
}
]
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17287,448,39,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16503,434,31,852])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),16503,434,31,852,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16454,433,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16394,432,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16337,431,40,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":45 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16279,430,44,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16218,429,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16095,427,37,78])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",16105,427,47,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15962,424,37,77])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":66 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15972,424,47,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15683,416,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":69 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15451,411,18,194])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15516,412,30,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"constant" ,"value":0
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15360,409,23,70])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15371,409,34,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15384,409,47,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15404,410,34,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15417,410,47,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15229,406,26,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15232,406,29,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[7
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15284,407,40,14])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"else":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14353,383,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14356,383,37,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14399,384,34,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14420,384,55,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
} ,{"$":"constant" ,"value":"right"
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14449,385,34,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14470,385,55,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
} ,{"$":"constant" ,"value":"right"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14548,387,31,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14565,388,32,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14576,388,43,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14597,389,43,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14613,389,59,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14633,390,32,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14655,391,32,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14709,392,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14712,392,37,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14755,393,34,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14776,393,55,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"top"
} ,{"$":"constant" ,"value":"bottom"
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14805,394,34,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14826,394,55,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"top"
} ,{"$":"constant" ,"value":"bottom"
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14904,396,31,123])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14920,397,32,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14931,397,43,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14947,397,59,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14971,398,43,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14988,399,32,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15010,400,32,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":1 ,"pos":93 ,"const?":false ,"ready?":false
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15087,402,36,111])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15099,402,48,51])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15115,402,64,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15136,403,64,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":71 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15157,404,48,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",15181,405,48,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14313,382,26,888])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),14313,382,26,888,"bootstrap/bootstrap-gtp-teachpack"])
}
]
}
}
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14244,381,26,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14175,380,26,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13952,376,29,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":1
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13957,376,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13999,377,29,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":139 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":100
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14011,377,41,20])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"constant" ,"value":100
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14093,379,24,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",14110,379,41,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":61 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13684,372,29,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":152 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":1
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13689,372,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13731,373,29,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":139 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":100
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13743,373,41,20])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"constant" ,"value":100
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13867,375,24,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13884,375,41,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":61 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13560,369,12,93])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13582,370,19,55])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13594,370,31,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":58 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"screen-left"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13442,365,12,94])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13464,366,19,56])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13476,366,31,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":58 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"screen-right"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13370,363,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":130 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13400,363,57,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13293,362,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":130 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13323,362,57,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13185,360,19,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":65 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13197,360,31,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13208,360,42,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":8 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",13220,360,54,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":8 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
}
]
}
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"center"
}
]
}
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":46 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("sq") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17577,458,15,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":54 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("sine") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17630,460,17,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17635,460,22,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17640,460,27,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":113 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":180
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":75 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("cosine") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17702,462,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":145 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17707,462,24,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17712,462,29,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":113 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":180
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":48 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("tangent") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17776,464,20,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17781,464,25,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":156 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-gtp-teachpack",17786,464,30,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":155 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":113 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":180
}
]
}
}
]
}
}
]
}
}
}
}
]
}
}, 'provides': ["score","string->image","type","tangent","sq","start","sine","number->image","put-image","overlay-at","assert-equal","cosine"]};
COLLECTIONS["bootstrap/autos-teachpack"] = { 'name': "bootstrap/autos-teachpack", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"auto-ref"
} ,{"$":"global-bucket" ,"value":"draw-auto"
} ,{"$":"global-bucket" ,"value":"paint-job"
} ,{"$":"global-bucket" ,"value":"turbo-charge"
} ,{"$":"global-bucket" ,"value":"make-auto"
} ,{"$":"global-bucket" ,"value":"auto?"
} ,{"$":"global-bucket" ,"value":"car1"
} ,{"$":"global-bucket" ,"value":"auto-set!"
} ,{"$":"global-bucket" ,"value":"auto-rims"
} ,{"$":"global-bucket" ,"value":"auto-hp"
} ,{"$":"global-bucket" ,"value":"auto-model"
} ,{"$":"global-bucket" ,"value":"auto-color"
} ,{"$":"global-bucket" ,"value":"auto-cost"
} ,{"$":"global-bucket" ,"value":"auto"
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-field-accessor") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("print-values") ,"modidx":{"$":"module-path" ,"path":"moby/runtime/kernel/misc" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("rectangle") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("place-image") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-struct-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("empty-scene") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("circle") ,"modidx":{"$":"module-path" ,"path":"moby/world" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("EXAMPLE") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("+") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":14 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":5 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":6 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":8 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",200,16,0,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("auto")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":5
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":11 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",200,16,0,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("model")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":10 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",200,16,0,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("hp")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":9 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",200,16,0,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":types.symbol("rims")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":12 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",200,16,0,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":3
} ,{"$":"constant" ,"value":types.symbol("color")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":13 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",200,16,0,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":1 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":4
} ,{"$":"constant" ,"value":types.symbol("cost")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":7 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",286,19,13,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"M5"
} ,{"$":"constant" ,"value":480
} ,{"$":"constant" ,"value":22
} ,{"$":"constant" ,"value":"black"
} ,{"$":"constant" ,"value":50000
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":3 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("paint-job") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",585,30,2,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",596,30,13,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":11 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",624,31,13,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":10 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",649,32,13,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":9 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",695,34,13,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":13 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":4 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("turbo-charge") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",799,39,2,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",810,39,13,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":11 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",838,40,13,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",841,40,16,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":10 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":20
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",870,41,13,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":9 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",897,42,13,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":12 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",925,43,13,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":13 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":2 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("draw-auto") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1109,58,2,939])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1122,58,15,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":130
} ,{"$":"constant" ,"value":50
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1148,58,41,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":12 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":130
} ,{"$":"constant" ,"value":50
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1201,60,15,846])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1214,60,28,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1222,60,36,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":9 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"silver"
}
]
}
} ,{"$":"constant" ,"value":210
} ,{"$":"constant" ,"value":110
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1318,62,28,728])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1331,62,41,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":15 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1339,62,49,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":16 ,"pos":9 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":17 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"silver"
}
]
}
} ,{"$":"constant" ,"value":90
} ,{"$":"constant" ,"value":110
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1460,64,41,585])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":16 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1473,64,54,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":19 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":30
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"black"
}
]
}
} ,{"$":"constant" ,"value":210
} ,{"$":"constant" ,"value":110
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1617,66,54,427])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":20 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1630,66,67,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":23 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":30
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"black"
}
]
}
} ,{"$":"constant" ,"value":90
} ,{"$":"constant" ,"value":110
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1799,68,67,244])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":24 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1812,68,80,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":28 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":220
} ,{"$":"constant" ,"value":60
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",1838,68,106,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":29 ,"pos":12 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":30 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":150
} ,{"$":"constant" ,"value":90
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",2021,70,80,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":26 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":300
} ,{"$":"constant" ,"value":150
}
]
}
}
]
}
}
]
}
}
]
}
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",950,46,0,74])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":16 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",950,46,0,74])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",959,46,9,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":3 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":7 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"purple"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/autos-teachpack",985,46,35,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"M5"
} ,{"$":"constant" ,"value":480
} ,{"$":"constant" ,"value":22
} ,{"$":"constant" ,"value":"purple"
} ,{"$":"constant" ,"value":50000
}
]
}
}
]
}
}
]
}
}
]
}
}, 'provides': ["draw-auto","paint-job","turbo-charge","make-auto","auto?","car1","auto-hp","auto-model","auto-rims","auto-color","auto-cost"]};
COLLECTIONS["jsworld/google-maps"] = { 'name': "jsworld/google-maps", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"script-url"
} ,{"$":"global-bucket" ,"value":"param-string"
} ,{"$":"global-bucket" ,"value":"params"
} ,{"$":"global-bucket" ,"value":"esc"
} ,{"$":"global-bucket" ,"value":"s"
} ,{"$":"global-bucket" ,"value":"elts"
} ,{"$":"global-bucket" ,"value":"delim"
} ,{"$":"global-bucket" ,"value":"marker-text"
} ,{"$":"global-bucket" ,"value":"marker"
} ,{"$":"global-bucket" ,"value":"response"
} ,{"$":"global-bucket" ,"value":"geocoder"
} ,{"$":"global-bucket" ,"value":"zoom-val"
} ,{"$":"global-bucket" ,"value":"x/y"
} ,{"$":"global-bucket" ,"value":"lat/lng"
} ,{"$":"global-bucket" ,"value":"world-updater"
} ,{"$":"global-bucket" ,"value":"w"
} ,{"$":"global-bucket" ,"value":"effect-updater"
} ,{"$":"global-bucket" ,"value":"center"
} ,{"$":"global-bucket" ,"value":"get-center"
} ,{"$":"global-bucket" ,"value":"handler"
} ,{"$":"global-bucket" ,"value":"map-dom"
} ,{"$":"global-bucket" ,"value":"attribs"
} ,{"$":"global-bucket" ,"value":"load"
} ,{"$":"global-bucket" ,"value":"zoom"
} ,{"$":"global-bucket" ,"value":"lng"
} ,{"$":"global-bucket" ,"value":"lat"
} ,{"$":"global-bucket" ,"value":"mymap"
} ,{"$":"global-bucket" ,"value":"dom"
} ,{"$":"global-bucket" ,"value":"maps"
} ,{"$":"global-bucket" ,"value":"callback"
} ,{"$":"global-bucket" ,"value":"google"
} ,{"$":"global-bucket" ,"value":"tag"
} ,{"$":"global-bucket" ,"value":"url"
} ,{"$":"global-bucket" ,"value":"elem"
} ,{"$":"global-bucket" ,"value":"escape"
} ,{"$":"global-bucket" ,"value":"make-effect:map"
} ,{"$":"global-bucket" ,"value":"make-effect:reverse-geocode"
} ,{"$":"global-bucket" ,"value":"on-map-click!"
} ,{"$":"global-bucket" ,"value":"on-map-drag!"
} ,{"$":"global-bucket" ,"value":"on-map-rightclick!"
} ,{"$":"global-bucket" ,"value":"on-map-dblclick!"
} ,{"$":"global-bucket" ,"value":"my-string-join"
} ,{"$":"global-bucket" ,"value":"make-effect:script"
} ,{"$":"global-bucket" ,"value":"make-effect:map:pan"
} ,{"$":"global-bucket" ,"value":"make-effect:map:zoom"
} ,{"$":"global-bucket" ,"value":"make-effect:map:location"
} ,{"$":"global-bucket" ,"value":"make-effect:map:marker"
} ,{"$":"global-bucket" ,"value":"make-effect:map:clear"
} ,{"$":"global-bucket" ,"value":"js-array->list"
} ,{"$":"global-bucket" ,"value":"list->js-array"
} ,{"$":"global-bucket" ,"value":"loadScript"
} ,{"$":"global-bucket" ,"value":"loadGoogleMaps"
} ,{"$":"global-bucket" ,"value":"jsworld"
} ,{"$":"global-bucket" ,"value":"getElementsByTagName"
} ,{"$":"global-bucket" ,"value":"google-map"
} ,{"$":"global-bucket" ,"value":"form-url"
} ,{"$":"global-bucket" ,"value":"effect:map:zoom?"
} ,{"$":"global-bucket" ,"value":"effect:reverse-geocode-mutator"
} ,{"$":"global-bucket" ,"value":"effect:script"
} ,{"$":"global-bucket" ,"value":"effect:script-mutator"
} ,{"$":"global-bucket" ,"value":"effect:script?"
} ,{"$":"global-bucket" ,"value":"effect:script-accessor"
} ,{"$":"global-bucket" ,"value":"effect:reverse-geocode?"
} ,{"$":"global-bucket" ,"value":"effect:reverse-geocode"
} ,{"$":"global-bucket" ,"value":"effect:reverse-geocode-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map?"
} ,{"$":"global-bucket" ,"value":"effect:map:location?"
} ,{"$":"global-bucket" ,"value":"effect:map:pan?"
} ,{"$":"global-bucket" ,"value":"effect:map:zoom-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:zoom-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:zoom"
} ,{"$":"global-bucket" ,"value":"effect:map:marker?"
} ,{"$":"global-bucket" ,"value":"effect:map:pan-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:pan-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:pan"
} ,{"$":"global-bucket" ,"value":"effect:map:marker-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:marker-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:marker"
} ,{"$":"global-bucket" ,"value":"effect:map"
} ,{"$":"global-bucket" ,"value":"effect:map:clear?"
} ,{"$":"global-bucket" ,"value":"effect:map:location-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:location-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:location"
} ,{"$":"global-bucket" ,"value":"effect:map-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:clear-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:clear-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:clear"
} ,{"$":"global-bucket" ,"value":"effect:map-accessor"
} ,{"$":"global-bucket" ,"value":"createElement"
} ,{"$":"global-bucket" ,"value":"document"
} ,{"$":"global-bucket" ,"value":"GLatLng"
} ,{"$":"module-variable" ,"sym":types.symbol("true") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("vector->list") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("world-with-effects") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("void") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("values") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("substring") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("sub1") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-length") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("scheme->prim-js") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("second") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("prim-js->scheme") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure->void-js-fun") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("not") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("positive?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("number?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-set-field!") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-world-config") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("map") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-effect-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list->vector") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("length") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-undefined") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("equal?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-get-field") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-make-hash") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-new") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-get-named-object") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-call") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-div") ,"modidx":{"$":"module-path" ,"path":"moby/jsworld" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("integer?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("exact?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("foldr") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("false") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("first") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("error") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("andmap") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("=") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":90 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",363,17,17,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"document"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":89 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",419,18,22,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":90 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"createElement"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":54 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",489,19,29,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":90 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"getElementsByTagName"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":53 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",553,20,16,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"jsworld"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":50 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("list->js-array") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",926,27,2,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",943,27,19,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":49 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("js-array->list") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",994,30,2,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":93 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1008,30,16,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":51 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("loadScript") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1081,33,23,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":89 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1113,33,55,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"script"
}
]
}
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1164,34,22,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1178,34,36,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":54 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":7 ,"pos":90 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"head"
}
]
}
} ,{"$":"constant" ,"value":"0"
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1249,36,6,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"src"
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1286,37,6,45])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"type"
} ,{"$":"constant" ,"value":"text/javascript"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1338,38,6,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1347,38,15,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"appendChild"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1396,39,6,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":52 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("loadGoogleMaps") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1463,43,4,133])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":51 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"http://www.google.com/jsapi?key=ABQIAAAANuLQS-qn8FP_vP2FRBltExQIToEyJbLNev2L3JVYkG889ZSczxQlHFTiT5TMwWkBl4392LfkmDmJ4A"
}
]
}
} ,{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"lam" ,"name":types.symbol("phase2") ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[1 ,0 ,2 ,3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1687,45,52,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"google"
}
]
}
} ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1755,46,35,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":3 ,"pos":118 ,"const?":false ,"ready?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1863,48,37,245])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1872,48,46,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2007,50,46,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2086,51,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":500
}
]
}
}
]
}
}
]
} ,"else":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2166,52,56,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"load"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2256,53,60,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2357,55,39,1624])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"callback"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2392,55,74,1588])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[7 ,6 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2601,57,98,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"maps"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2730,58,99,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2738,58,107,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"Map2"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2940,60,81,621])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2949,60,90,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"setCenter"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3168,62,90,279])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3176,62,98,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"LatLng"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3304,63,98,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3425,64,98,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3538,65,90,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3643,66,81,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3652,66,90,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"setUIToDefault"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3778,67,81,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3787,67,90,45])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"disableDoubleClickZoom"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3944,68,81,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4021,69,39,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4042,69,60,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"maps"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4067,69,85,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"2.x"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
}
}
}
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4128,72,6,8])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":true ,"pos":0 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[
]
}
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":91 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("GLatLng") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4169,75,2,84])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4177,75,10,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GLatLng"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4209,75,42,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4231,75,64,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":55 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("google-map") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4839,87,22,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4875,89,6,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"jsworldOpaque"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4910,89,41,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":92 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4940,90,6,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":0 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":39 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-drag!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5756,106,22,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5792,107,4,1184])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5841,109,7,536])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5850,109,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5923,111,16,414])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6000,112,42,335])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6052,113,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6066,113,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6204,115,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,{"$":"constant" ,"value":"drag"
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6354,118,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":4000
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6432,119,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":5 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6486,121,29,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6551,122,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"getCenter"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":2 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6615,123,30,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":3 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6670,124,27,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6679,124,36,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"lat"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":4 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6743,125,27,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6752,125,36,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"lng"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6799,126,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6819,126,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6837,126,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6859,126,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6911,127,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6928,127,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6950,127,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
}
}
}
}
}
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":38 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-click!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7065,130,24,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7101,131,4,1077])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7150,133,7,537])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7159,133,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7232,135,16,415])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7309,136,42,336])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7361,137,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7375,137,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7513,139,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,{"$":"constant" ,"value":"click"
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7664,142,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":4000
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7742,143,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7908,145,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"x"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7963,146,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"y"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8001,147,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8021,147,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8039,147,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8061,147,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8113,148,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8130,148,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8152,148,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
}
}
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":41 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-dblclick!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8270,151,24,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8306,152,4,1080])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8355,154,7,540])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8364,154,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8437,156,16,418])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8514,157,42,339])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8566,158,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8580,158,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8718,160,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,{"$":"constant" ,"value":"dblclick"
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8872,163,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":4000
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8950,164,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9116,166,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"x"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9171,167,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"y"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9209,168,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9229,168,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9247,168,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9269,168,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9321,169,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9338,169,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9360,169,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
}
}
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":40 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-rightclick!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9551,172,24,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9587,173,4,977])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9636,175,7,548])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9645,175,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9718,177,16,426])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9795,178,42,347])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9847,179,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9861,179,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9999,181,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,{"$":"constant" ,"value":"singlerightclick"
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10161,184,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":4000
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10239,185,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10302,187,27,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"x"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10353,188,27,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"y"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10387,189,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10407,189,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10425,189,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10447,189,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10499,190,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10516,190,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10538,190,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
}
}
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":79 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":36 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":66 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":88 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":84 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11269,199,2,490])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":1
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11385,202,38,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map")
} ,{"$":"constant" ,"value":"has no default implementation"
}
]
}
}
} ,{"$":"constant" ,"value":types.EMPTY
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11531,205,26,84])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11563,206,27,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11571,206,35,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,{"$":"toplevel" ,"depth":3 ,"pos":118 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11676,208,26,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"expected type <map (dom-sexp)> as 1st argument, given: ~s"
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":71 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":45 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":57 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":69 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":70 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11884,211,2,685])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:zoom")
} ,{"$":"toplevel" ,"depth":6 ,"pos":79 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12064,215,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12120,216,24,55])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12129,216,33,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"setZoom"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
} ,{"$":"constant" ,"value":types.EMPTY
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12281,219,31,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":127 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12330,220,31,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":126 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12381,221,31,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12429,222,26,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12477,223,26,89])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"expected type <exact positive integer> as 2nd argument, given: ~s"
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":83 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":46 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":67 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":82 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12714,226,2,661])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:location")
} ,{"$":"toplevel" ,"depth":6 ,"pos":79 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12897,230,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12953,231,24,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12962,231,33,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"setCenter"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13001,231,72,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
}
} ,{"$":"constant" ,"value":types.EMPTY
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13156,235,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13197,236,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13238,237,26,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13289,238,26,83])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"expected type <number> as 2nd and 3rd argument, given: ~s ~s"
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":75 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":44 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":68 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":73 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":74 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13495,241,2,651])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:pan")
} ,{"$":"toplevel" ,"depth":6 ,"pos":79 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13672,245,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13728,246,24,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13737,246,33,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"panTo"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13772,246,68,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
}
} ,{"$":"constant" ,"value":types.EMPTY
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13927,250,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13968,251,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14009,252,26,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14060,253,26,83])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"expected type <number> as 2nd and 3rd argument, given: ~s ~s"
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":87 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":48 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":86 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14276,256,2,307])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:clear")
} ,{"$":"toplevel" ,"depth":5 ,"pos":79 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14447,260,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14503,261,24,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14512,261,33,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"clearOverlays"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
} ,{"$":"constant" ,"value":types.EMPTY
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":64 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":37 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":63 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":58 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14743,265,2,492])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:reverse-geocode")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":3
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14924,269,47,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14932,269,55,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GClientGeocoder"
}
]
}
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14999,270,24,84])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15008,270,33,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"getLocations"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15056,270,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
} ,{"$":"constant" ,"value":types.list([2])
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15208,273,22,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":78 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":47 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":72 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":76 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":77 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15425,278,2,1592])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:marker")
} ,{"$":"toplevel" ,"depth":6 ,"pos":79 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":3
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15617,282,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15693,283,45,152])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15748,284,46,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GMarker"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15827,285,46,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15905,287,26,538])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15941,288,27,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15955,288,41,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":7 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"click"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16130,292,27,312])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[8 ,7 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16225,293,53,215])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16234,293,62,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"openInfoWindowHtml"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16410,295,62,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16470,296,26,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16479,296,35,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"addOverlay"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16526,296,82,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":129 ,"const?":false ,"ready?":false
}
]
}
}
]
}
}
]
}
}
}
}
} ,{"$":"constant" ,"value":types.EMPTY
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":5 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16714,301,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16755,302,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16796,303,27,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16838,304,26,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16894,305,26,120])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"expected type <number> as 2nd and 3rd argument and <string> as 4th argument, given: ~s ~s ~s"
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":42 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("my-string-join") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17089,309,12,119])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":128 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17133,310,21,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"constant" ,"value":""
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17219,313,8,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":134 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17222,313,11,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"constant" ,"value":""
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17262,315,8,40])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17277,315,23,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17283,315,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":35 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("escape") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17348,318,22,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"escape"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17385,319,4,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17402,319,21,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":129 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":56 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("form-url") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17500,323,31,446])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17549,324,32,360])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17606,325,39,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17622,325,55,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":35 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":"="
}
]
}
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17681,326,37,227])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":132 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17742,327,45,165])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17794,328,46,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"output"
} ,{"$":"constant" ,"value":"json"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17864,329,46,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"callback"
} ,{"$":"constant" ,"value":"script_effect_callback"
}
]
}
}
]
}
}
]
}
}
]
}
} ,{"$":"constant" ,"value":"&"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17953,331,4,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"?"
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":59 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":43 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":61 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":62 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":60 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18105,334,2,1347])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:script")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":3
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18283,338,49,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":56 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18364,340,26,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18379,340,41,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"window"
}
]
}
} ,{"$":"constant" ,"value":"script_effect_callback"
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18471,341,26,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":51 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
} ,{"$":"constant" ,"value":types.list([2])
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18637,345,27,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18679,346,27,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":133 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":115 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18728,347,27,248])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":133 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18790,348,42,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":134 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18793,348,45,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18849,349,42,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18858,349,51,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":130 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18911,350,42,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",18920,350,51,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",19004,352,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",19045,353,27,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",19094,354,26,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",19149,355,26,300])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":131 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"expected type <string> as 1st argument, <list-of (list-of strings)> as 2nd argument, and <procedure> as 3rd argument: given ~s ~s ~s"
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
}
]
}
}
}
]
}
}, 'provides': ["make-effect:map:zoom","on-map-dblclick!","on-map-drag!","on-map-rightclick!","make-effect:script","on-map-click!","make-effect:reverse-geocode","make-effect:map:location","make-effect:map:marker","make-effect:map:pan","google-map","make-effect:map:clear"]};
COLLECTIONS["jsworld/phonegap"] = { 'name': "jsworld/phonegap", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"sms"
} ,{"$":"global-bucket" ,"value":"geolocation"
} ,{"$":"global-bucket" ,"value":"world-updater"
} ,{"$":"global-bucket" ,"value":"w"
} ,{"$":"global-bucket" ,"value":"effect-updater"
} ,{"$":"global-bucket" ,"value":"accelerometer"
} ,{"$":"global-bucket" ,"value":"on-sms-receive"
} ,{"$":"global-bucket" ,"value":"on-tilt"
} ,{"$":"global-bucket" ,"value":"on-tilt!"
} ,{"$":"global-bucket" ,"value":"on-sms-receive!"
} ,{"$":"global-bucket" ,"value":"on-shake"
} ,{"$":"global-bucket" ,"value":"on-shake!"
} ,{"$":"global-bucket" ,"value":"on-location-change"
} ,{"$":"global-bucket" ,"value":"on-location-change!"
} ,{"$":"global-bucket" ,"value":"on-acceleration!"
} ,{"$":"global-bucket" ,"value":"on-acceleration"
} ,{"$":"module-variable" ,"sym":types.symbol("js-new") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("world-with-effects") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("void") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("prim-js->scheme") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-world-config") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-get-field") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-get-named-object") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("js-call") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("error") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":15 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-acceleration!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1304,37,2,930])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1404,38,4,829])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1472,39,25,188])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1481,39,34,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchAcceleration"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1706,43,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1806,45,25,294])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1983,48,27,116])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2003,48,47,24])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2075,49,47,23])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1815,45,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1873,46,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1931,47,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2164,51,25,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-acceleration!")
} ,{"$":"constant" ,"value":"an error occured with the accelerometer"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1325,37,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1333,37,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1347,37,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Accelerometer"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":16 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-acceleration") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2338,58,2,837])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2438,59,4,736])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2506,60,25,188])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2515,60,34,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchAcceleration"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2740,64,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2840,66,25,202])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3017,69,27,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":5 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2849,66,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2907,67,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2965,68,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3106,71,25,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-acceleration")
} ,{"$":"constant" ,"value":"an error occured with the accelerometer"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2359,58,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2367,58,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2381,58,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Accelerometer"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":12 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-shake!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3288,79,2,709])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3388,80,4,608])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3456,81,25,181])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3465,81,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchShake"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3683,85,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3768,87,25,102])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3788,87,45,18])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3852,88,45,17])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3934,90,25,60])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-shake!")
} ,{"$":"constant" ,"value":"an error occured with the accelerometer"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3309,79,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3317,79,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3331,79,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Accelerometer"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":11 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-shake") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4108,96,2,581])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4208,97,4,480])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4276,98,25,181])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4285,98,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchShake"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4503,102,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":false
}
]
}
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4627,105,25,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-shake")
} ,{"$":"constant" ,"value":"an error occured with the accelerometer"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4129,96,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4137,96,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4151,96,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Accelerometer"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":9 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-tilt!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4793,110,2,960])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4867,111,4,885])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4935,112,25,187])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4944,112,34,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchOrientation"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5168,116,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5281,118,25,346])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5484,121,27,142])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5504,121,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5589,122,47,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5296,118,40,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5364,119,38,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5429,120,37,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5691,124,25,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-tilt!")
} ,{"$":"constant" ,"value":"an error occured with the accelerometer"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4814,110,23,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4822,110,31,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"Accelerometer"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":8 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-tilt") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5840,129,2,853])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5914,130,4,778])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5982,131,25,187])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5991,131,34,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchOrientation"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6215,135,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6328,137,25,240])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6531,140,27,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6343,137,40,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6411,138,38,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6476,139,37,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6632,142,25,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-tilt")
} ,{"$":"constant" ,"value":"an error occured with the accelerometer"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5861,129,23,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5869,129,31,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"Accelerometer"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":14 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-location-change!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6806,148,2,940])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6902,150,4,843])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6970,151,25,180])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6979,151,34,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchPosition"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7188,155,36,154])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7197,155,45,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"clearWatch"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7412,159,25,190])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7432,159,45,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7450,159,63,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7472,159,85,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7540,160,45,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7557,160,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7579,160,84,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7666,162,25,77])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-location-change!")
} ,{"$":"constant" ,"value":"an error occurred with accessing GPS locations"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6825,148,21,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6839,148,35,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"navigator"
}
]
}
} ,{"$":"constant" ,"value":"phonegap_geo"
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":13 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-location-change") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7859,168,2,810])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7955,170,4,713])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8023,171,25,180])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8032,171,34,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"watchPosition"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8241,175,36,154])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8250,175,45,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"clearWatch"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8465,179,25,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8482,179,42,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8504,179,64,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8590,181,25,76])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("on-location-change")
} ,{"$":"constant" ,"value":"an error occurred with accessing GPS locations"
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7878,168,21,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7892,168,35,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"navigator"
}
]
}
} ,{"$":"constant" ,"value":"phonegap_geo"
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":10 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-sms-receive!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8793,187,2,692])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8873,188,4,611])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8935,189,25,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8944,189,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"toplevel" ,"depth":3 ,"pos":19 ,"const?":false ,"ready?":false
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9218,194,25,264])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9357,196,25,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9377,196,45,29])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9452,197,45,28])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9232,194,39,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9301,195,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8804,187,13,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8812,187,21,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8826,187,35,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Sms"
}
]
}
}
]
}
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":7 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-sms-receive") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9589,202,2,596])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9669,203,4,515])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9731,204,25,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9740,204,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,{"$":"toplevel" ,"depth":3 ,"pos":19 ,"const?":false ,"ready?":false
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10014,209,25,168])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10153,211,25,28])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10028,209,39,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10097,210,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9600,202,13,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9608,202,21,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9622,202,35,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Sms"
}
]
}
}
]
}
}
]
}
}
}
}
]
}
}, 'provides': ["on-sms-receive","on-tilt","on-tilt!","on-sms-receive!","on-shake","on-shake!","on-location-change","on-location-change!","on-acceleration!","on-acceleration"]};
