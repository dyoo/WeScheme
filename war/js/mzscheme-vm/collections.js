var COLLECTIONS = {};
COLLECTIONS["bootstrap/bootstrap-teachpack"] = { 'name': "bootstrap/bootstrap-teachpack", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"playerImg"
} ,{"$":"global-bucket" ,"value":"targetImgs"
} ,{"$":"global-bucket" ,"value":"objectImgs"
} ,{"$":"global-bucket" ,"value":"update-object*"
} ,{"$":"global-bucket" ,"value":"update-target*"
} ,{"$":"global-bucket" ,"value":"update-projectile*"
} ,{"$":"global-bucket" ,"value":"update-player*"
} ,{"$":"global-bucket" ,"value":"in-domain*?"
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
} ,{"$":"global-bucket" ,"value":"in-domain?"
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
} ,"rands":[{"$":"constant" ,"value":types.rational(3.0, 2.0)
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
} ,"rands":[{"$":"constant" ,"value":types.rational(1.0, 4.0)
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4277,96,2,86])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4298,96,23,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4310,96,35,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4322,96,47,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4335,96,60,8])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4344,96,69,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":51 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4639,103,5,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":" "
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4661,104,5,489])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4673,104,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4708,105,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4743,106,17,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4777,107,17,243])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4783,107,23,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4795,107,35,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":60 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4807,107,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":14 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4825,107,65,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":13 ,"pos":70 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4876,108,27,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":20
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4882,108,33,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4890,108,41,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4941,109,27,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":86 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4947,109,33,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4997,110,27,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5038,111,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5068,112,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5101,113,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5134,114,17,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5167,116,5,287])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5179,116,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5214,117,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5249,118,17,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5264,118,32,16])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5303,119,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5342,120,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5372,121,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5405,122,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":32 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5438,123,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4628,102,2,828])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),4628,102,2,828,"bootstrap/bootstrap-teachpack"])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5614,128,2,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5619,128,7,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5627,128,15,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5647,128,35,14])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5894,133,2,158])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5919,133,27,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5989,134,27,13])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6607,148,4,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6651,149,4,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":59 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6690,150,4,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":74 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6727,151,4,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":72 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6769,152,11,68])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,10 ,11 ,12 ,13 ,14 ,15
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6849,153,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6926,154,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7003,155,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7113,156,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7223,157,11,19])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7254,158,11,44])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7310,159,11,44])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7366,160,11,52])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7430,161,11,824])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8266,170,11,96])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8374,171,11,91])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8477,172,11,214])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8703,177,11,55])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8770,178,11,1760])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10538,203,6,144])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10576,204,19,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":93 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(3602879701896397.0, types.bignum("3.602879701896397e+16"))
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10621,205,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":53 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10663,206,19,18])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8861,180,29,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":44 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8877,180,45,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8930,181,36,167])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9134,183,36,63])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9234,184,36,75])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9346,185,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9406,186,36,25])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9468,187,36,17])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9522,188,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9582,189,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,7 ,8 ,9 ,10
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9678,191,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9724,192,34,75])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":16 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9786,192,96,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9835,193,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10017,196,36,73])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10067,196,86,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10127,197,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":68 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10311,200,36,73])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10361,200,86,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10426,201,39,68])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9638,190,31,858])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),9638,190,31,858,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9589,189,43,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9529,188,43,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9472,187,40,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9414,186,44,16])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9353,185,43,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9247,184,49,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9257,184,59,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9143,183,45,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9153,183,55,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8939,181,45,157])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":52 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8949,181,55,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":58 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8966,181,72,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8984,181,90,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8728,177,36,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8484,172,18,206])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8561,173,30,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8400,171,37,63])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8411,171,48,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8424,171,61,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8437,171,74,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8450,171,87,12])
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
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8282,170,27,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8285,170,30,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[5
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8332,170,77,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"else":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
}
]
}
}
} ,"rands":[{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7485,162,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7488,162,37,32])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7524,162,73,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7532,162,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7550,162,99,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7617,163,43,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7629,163,55,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7640,163,66,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7652,163,78,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7668,163,94,11])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7739,164,55,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7794,165,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7797,165,37,32])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7833,165,73,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7841,165,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":78 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":72 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7859,165,99,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7926,166,43,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7938,166,55,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7949,166,66,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7965,166,82,11])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7980,166,97,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8048,167,55,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8117,168,48,133])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8129,168,60,42])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8145,168,76,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":62 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8157,168,88,11])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8232,169,60,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7445,161,26,808])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),7445,161,26,808,"bootstrap/bootstrap-teachpack"])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7385,160,30,32])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7325,159,26,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7269,158,26,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7122,156,20,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7139,156,37,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7151,156,49,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7162,156,60,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7167,156,65,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7178,156,76,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7012,155,20,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7029,155,37,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7041,155,49,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7052,155,60,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7057,155,65,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":48 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7068,155,76,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6942,154,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6972,154,57,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6865,153,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6895,153,57,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6777,152,19,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6789,152,31,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6800,152,42,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":67 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6812,152,54,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10882,211,9,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10957,212,9,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11032,213,9,51])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11093,214,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11195,215,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11297,216,9,75])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11382,217,9,200])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11588,222,4,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":53 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11389,217,16,192])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11464,218,28,20])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11310,216,22,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11316,216,28,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11328,216,40,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":-200
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11347,216,59,22])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11204,215,18,82])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11221,215,35,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11233,215,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11244,215,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11257,215,71,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11102,214,18,82])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11119,214,35,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11131,214,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11142,214,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11155,214,71,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11040,213,17,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11052,213,29,19])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10973,212,25,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11003,212,55,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10898,211,25,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10928,211,55,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11650,226,15,7])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11703,228,17,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11708,228,22,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11713,228,27,10])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11775,230,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11780,230,24,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11785,230,29,10])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11849,232,20,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":81 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11854,232,25,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11859,232,30,10])
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
COLLECTIONS["jsworld/google-maps"] = { 'name': "jsworld/google-maps", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"script-url"
} ,{"$":"global-bucket" ,"value":"response"
} ,{"$":"global-bucket" ,"value":"param-string"
} ,{"$":"global-bucket" ,"value":"params"
} ,{"$":"global-bucket" ,"value":"esc"
} ,{"$":"global-bucket" ,"value":"s"
} ,{"$":"global-bucket" ,"value":"elts"
} ,{"$":"global-bucket" ,"value":"delim"
} ,{"$":"global-bucket" ,"value":"marker-text"
} ,{"$":"global-bucket" ,"value":"marker"
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
} ,{"$":"global-bucket" ,"value":"effect:map:zoom?"
} ,{"$":"global-bucket" ,"value":"make-effect:map"
} ,{"$":"global-bucket" ,"value":"make-effect:script"
} ,{"$":"global-bucket" ,"value":"on-map-click!"
} ,{"$":"global-bucket" ,"value":"on-map-drag!"
} ,{"$":"global-bucket" ,"value":"on-map-rightclick!"
} ,{"$":"global-bucket" ,"value":"on-map-dblclick!"
} ,{"$":"global-bucket" ,"value":"my-string-join"
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
} ,{"$":"global-bucket" ,"value":"escape"
} ,{"$":"global-bucket" ,"value":"getElementsByTagName"
} ,{"$":"global-bucket" ,"value":"google-map"
} ,{"$":"global-bucket" ,"value":"form-url"
} ,{"$":"global-bucket" ,"value":"effect:script"
} ,{"$":"global-bucket" ,"value":"effect:script-mutator"
} ,{"$":"global-bucket" ,"value":"effect:script?"
} ,{"$":"global-bucket" ,"value":"effect:script-accessor"
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
} ,{"$":"global-bucket" ,"value":"effect:map-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:clear?"
} ,{"$":"global-bucket" ,"value":"effect:map:location-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:location-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:location"
} ,{"$":"global-bucket" ,"value":"effect:map:clear-accessor"
} ,{"$":"global-bucket" ,"value":"effect:map:clear-mutator"
} ,{"$":"global-bucket" ,"value":"effect:map:clear"
} ,{"$":"global-bucket" ,"value":"effect:map"
} ,{"$":"global-bucket" ,"value":"effect:map-accessor"
} ,{"$":"global-bucket" ,"value":"document"
} ,{"$":"global-bucket" ,"value":"createElement"
} ,{"$":"module-variable" ,"sym":types.symbol("js-set-field!") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("string-append") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
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
} ,{"$":"module-variable" ,"sym":types.symbol("string-length") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("prim-js->scheme") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("scheme->prim-js") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("second") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("procedure->void-js-fun") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-world-config") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
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
} ,{"$":"module-variable" ,"sym":types.symbol("map") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("list->vector") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("make-effect-type") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
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
} ,{"$":"module-variable" ,"sym":types.symbol("equal?") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
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
} ,{"$":"module-variable" ,"sym":types.symbol("=") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
} ,{"$":"module-variable" ,"sym":types.symbol("andmap") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
}
} ,"pos":-1 ,"phase":0
}
] ,"stxs":[
]
} ,"compiled-indirects":[
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":83 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",326,16,17,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"document"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":84 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",382,17,22,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":83 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"createElement"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":53 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",452,18,29,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":83 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"getElementsByTagName"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":51 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",516,19,16,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"jsworld"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":48 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("list->js-array") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",705,26,2,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",722,26,19,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
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
] ,"body":{"$":"lam" ,"name":types.symbol("js-array->list") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",773,29,2,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",787,29,16,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":96 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"name":types.symbol("loadScript") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",860,32,23,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":84 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":83 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",892,32,55,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"script"
}
]
}
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",943,33,22,65])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",957,33,36,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":53 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":7 ,"pos":83 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"head"
}
]
}
} ,{"$":"constant" ,"value":"0"
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1028,35,6,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"src"
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1065,36,6,45])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"type"
} ,{"$":"constant" ,"value":"text/javascript"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1117,37,6,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1126,37,15,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1175,38,6,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":90 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":50 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("loadGoogleMaps") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1242,42,4,133])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":49 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"http://www.google.com/jsapi?key=ABQIAAAANuLQS-qn8FP_vP2FRBltExQIToEyJbLNev2L3JVYkG889ZSczxQlHFTiT5TMwWkBl4392LfkmDmJ4A"
}
]
}
} ,{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"lam" ,"name":types.symbol("phase2") ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[1 ,0 ,2 ,3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1466,44,52,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"google"
}
]
}
} ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1534,45,35,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":3 ,"pos":111 ,"const?":false ,"ready?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1642,47,37,245])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1651,47,46,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1786,49,46,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1865,50,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",1945,51,56,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"load"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2035,52,60,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":113 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2136,54,39,1458])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"callback"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2171,54,74,1422])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[7 ,6 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2380,56,98,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"maps"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2509,57,99,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2517,57,107,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2719,59,81,621])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2728,59,90,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"setCenter"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2947,61,90,279])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",2955,61,98,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"LatLng"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3083,62,98,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3204,63,98,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3317,64,90,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3422,65,81,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3431,65,90,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3557,66,81,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":85 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3634,67,39,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3655,67,60,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"maps"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3680,67,85,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",3741,70,6,8])
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":54 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("google-map") ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4013,77,22,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4049,79,6,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"jsworldOpaque"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4084,79,41,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":87 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4114,80,6,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":50 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":38 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-drag!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4470,89,22,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4506,90,4,1184])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4555,92,7,536])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4564,92,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4637,94,16,414])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4714,95,42,335])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4766,96,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4780,96,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",4918,98,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5068,101,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5146,102,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":5 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5200,104,29,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5265,105,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"getCenter"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":2 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5329,106,30,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":3 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5384,107,27,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5393,107,36,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5457,108,27,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5466,108,36,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5513,109,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":89 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5533,109,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5551,109,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5573,109,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5625,110,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5642,110,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5664,110,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":96 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":37 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-click!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5779,113,24,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5815,114,4,1077])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5864,116,7,537])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5873,116,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",5946,118,16,415])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6023,119,42,336])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6075,120,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6089,120,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6227,122,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6378,125,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6456,126,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6622,128,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"x"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6677,129,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"y"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6715,130,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":89 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6735,130,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6753,130,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6775,130,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6827,131,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6844,131,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6866,131,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-dblclick!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",6984,134,24,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7020,135,4,1080])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7069,137,7,540])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7078,137,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7151,139,16,418])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7228,140,42,339])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7280,141,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7294,141,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7432,143,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7586,146,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7664,147,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7830,149,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"x"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7885,150,27,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"y"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7923,151,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":89 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7943,151,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7961,151,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",7983,151,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8035,152,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8052,152,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8074,152,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":39 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-map-rightclick!") ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8265,155,24,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8301,156,4,977])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8350,158,7,548])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8359,158,16,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"setTimeout"
}
]
}
} ,{"$":"toplevel" ,"depth":4 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8432,160,16,426])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8509,161,42,347])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8561,162,43,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8575,162,57,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8713,164,43,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8875,167,16,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",8953,168,18,6])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":0 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9016,170,27,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"x"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9067,171,27,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"y"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9101,172,9,174])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":89 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9121,172,29,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9139,172,47,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9161,172,69,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9213,173,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9230,173,46,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9252,173,68,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":96 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":35 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":60 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":82 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":73 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9629,183,2,490])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":1
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9745,186,38,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9891,189,26,84])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9923,190,27,51])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",9931,190,35,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,{"$":"toplevel" ,"depth":3 ,"pos":111 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":1 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10036,192,26,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":43 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":34 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":63 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":64 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10244,195,2,685])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:zoom")
} ,{"$":"toplevel" ,"depth":6 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10424,199,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10480,200,24,55])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10489,200,33,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10641,203,31,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10690,204,31,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10741,205,31,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10789,206,26,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",10837,207,26,89])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":77 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":44 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":61 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":75 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":76 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11074,210,2,911])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:location")
} ,{"$":"toplevel" ,"depth":6 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11257,214,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11313,215,24,316])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11322,215,33,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"setCenter"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11361,215,72,267])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11442,216,73,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GLatLng"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11766,222,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11807,223,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11848,224,26,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",11899,225,26,83])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":69 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":42 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":62 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":67 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":68 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12105,228,2,959])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:pan")
} ,{"$":"toplevel" ,"depth":6 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12282,232,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12338,233,24,370])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12347,233,33,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"panTo"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12382,233,68,325])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12459,234,69,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GLatLng"
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12845,241,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12886,242,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12927,243,26,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",12978,244,26,83])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":124 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":80 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":46 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":74 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":78 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":79 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13194,247,2,307])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:clear")
} ,{"$":"toplevel" ,"depth":5 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13365,251,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13421,252,24,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13430,252,33,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":112 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":72 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":45 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":66 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":71 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13691,258,2,1769])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:map:marker")
} ,{"$":"toplevel" ,"depth":6 ,"pos":81 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":3
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":4 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":2 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13883,262,44,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"gmap"
}
]
}
} ,"body":{"$":"install-value" ,"count":1 ,"pos":1 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",13959,263,45,329])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14014,264,46,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GMarker"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14093,265,46,194])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14101,265,54,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GLatLng"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14188,266,54,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14265,267,54,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14348,269,26,538])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14384,270,27,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14398,270,41,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"GEvent"
}
]
}
} ,{"$":"constant" ,"value":"addListener"
}
]
}
} ,{"$":"toplevel" ,"depth":7 ,"pos":122 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"click"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14573,274,27,312])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[8 ,7 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14668,275,53,215])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14677,275,62,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"openInfoWindowHtml"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14853,277,62,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":97 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14913,278,26,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14922,278,35,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":"addOverlay"
}
]
}
} ,{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":true ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",14969,278,82,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":122 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15157,283,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15198,284,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15239,285,27,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"else":{"$":"constant" ,"value":false
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15281,286,26,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15337,287,26,120])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":41 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("my-string-join") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15836,295,12,119])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15880,296,21,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":86 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15966,299,8,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":126 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",15969,299,11,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":95 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16009,301,8,40])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":93 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16024,301,23,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16030,301,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":95 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":52 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("escape") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16095,304,22,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"escape"
}
]
}
} ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16132,305,4,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":96 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16149,305,21,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":true ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":55 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("form-url") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16247,309,31,446])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16296,310,32,360])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16353,311,39,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16369,311,55,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":52 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16428,312,37,227])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":125 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16489,313,45,165])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16541,314,46,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"output"
} ,{"$":"constant" ,"value":"json"
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16611,315,46,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":109 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16700,317,4,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":86 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":56 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":36 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":58 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":59 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":57 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",16852,320,2,1347])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("effect:script")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":3
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[6
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"let-void" ,"count":1 ,"boxes?":true ,"body":{"$":"install-value" ,"count":1 ,"pos":0 ,"boxes?":true ,"rhs":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17030,324,49,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17111,326,26,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":85 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17126,326,41,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":115 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17218,327,26,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":49 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17384,331,27,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17426,332,27,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":127 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":108 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17475,333,27,248])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":127 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17537,334,42,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":126 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17540,334,45,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17596,335,42,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17605,335,51,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17658,336,42,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17667,336,51,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":98 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17751,338,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17792,339,27,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":99 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17841,340,26,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/google-maps",17896,341,26,300])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":124 ,"const?":false ,"ready?":false
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
}, 'provides': ["make-effect:map:zoom","on-map-dblclick!","on-map-drag!","on-map-rightclick!","on-map-click!","make-effect:script","make-effect:map:location","make-effect:map:marker","make-effect:map:pan","google-map","make-effect:map:clear"]};
COLLECTIONS["jsworld/phonegap"] = { 'name': "jsworld/phonegap", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"sms"
} ,{"$":"global-bucket" ,"value":"geolocation"
} ,{"$":"global-bucket" ,"value":"js-azimuth"
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
} ,{"$":"module-variable" ,"sym":types.symbol("js-new") ,"modidx":{"$":"module-path" ,"path":"moby/toplevel" ,"base":{"$":"module-path" ,"path":false ,"base":false
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
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":16 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1481,39,34,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1333,37,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1347,37,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2515,60,34,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":6 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2367,58,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2381,58,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":13 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3465,81,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3317,79,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3331,79,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4285,98,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4137,96,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4151,96,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":10 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-tilt!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4793,110,2,985])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4893,111,4,884])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4961,112,25,187])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4970,112,34,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5194,116,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5306,118,25,346])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5509,121,27,142])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5529,121,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5614,122,47,36])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5321,118,40,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":3 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5389,119,38,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5454,120,37,25])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5716,124,25,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4814,110,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4822,110,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4836,110,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"name":types.symbol("on-tilt") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5865,129,2,878])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5965,130,4,777])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6033,131,25,187])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6042,131,34,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6266,135,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":25 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6378,137,25,240])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6581,140,27,36])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6393,137,40,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":3 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6461,138,38,26])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6526,139,37,25])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6682,142,25,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5886,129,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5894,129,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",5908,129,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":15 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-location-change!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6856,148,2,940])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6952,149,4,843])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7020,150,25,180])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7029,150,34,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7238,154,36,154])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7247,154,45,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7462,158,25,190])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7482,158,45,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7500,158,63,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7522,158,85,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7590,159,45,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7607,159,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7629,159,84,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7716,161,25,77])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6875,148,21,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6883,148,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6897,148,43,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Geolocation"
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
] ,"body":{"$":"lam" ,"name":types.symbol("on-location-change") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7909,167,2,810])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8005,168,4,713])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8073,169,25,180])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8082,169,34,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8291,173,36,154])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8300,173,45,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8515,177,25,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8532,177,42,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8554,177,64,21])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8640,179,25,76])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":26 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7928,167,21,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7936,167,29,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7950,167,43,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"phonegap"
}
]
}
} ,{"$":"constant" ,"value":"Geolocation"
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
] ,"body":{"$":"lam" ,"name":types.symbol("on-sms-receive!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8843,185,2,692])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8923,186,4,611])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8985,187,25,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8994,187,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9268,192,25,264])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9407,194,25,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9427,194,45,29])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9502,195,45,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9282,192,39,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9351,193,36,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8854,185,13,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8862,185,21,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8876,185,35,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":8 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-sms-receive") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9639,200,2,596])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9719,201,4,515])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":21 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9781,202,25,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":25 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9790,202,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10064,207,25,168])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10203,209,25,28])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10078,207,39,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10147,208,36,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9650,200,13,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9658,200,21,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":23 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9672,200,35,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":24 ,"const?":false ,"ready?":false
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
