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
} ,{"$":"global-bucket" ,"value":"PROJECTILE-IMAGE"
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
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":68 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":640
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":70 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":480
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":74 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"constant" ,"value":"gray"
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":60 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",976,28,20,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"white"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":71 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1014,29,23,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1019,29,28,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":84 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":75 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1072,30,19,46])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1077,30,24,40])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":90 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":68 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":5 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"constant" ,"value":"black"
}
]
}
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":73 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1138,31,18,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":"left"
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":45 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1166,32,14,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":117 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":49 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":0 ,"param-types":[
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1223,34,18,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":500
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":66 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":55 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":30 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":62 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1363,39,0,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("being")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":61 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1363,39,0,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("posn")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":67 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1363,39,0,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":65 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("costume")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":31 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":44 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":34 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":0 ,"pos":32 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":100 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.symbol("world")
} ,{"$":"constant" ,"value":false
} ,{"$":"constant" ,"value":8
} ,{"$":"constant" ,"value":0
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":42 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":0
} ,{"$":"constant" ,"value":types.symbol("objects")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":36 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":1
} ,{"$":"constant" ,"value":types.symbol("targets")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":38 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
} ,{"$":"constant" ,"value":types.symbol("player")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":41 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":3
} ,{"$":"constant" ,"value":types.symbol("projectiles")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":43 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":4
} ,{"$":"constant" ,"value":types.symbol("bg")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":40 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":5
} ,{"$":"constant" ,"value":types.symbol("score")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":33 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":6
} ,{"$":"constant" ,"value":types.symbol("title")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":37 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1502,42,0,79])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":105 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":39 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":7
} ,{"$":"constant" ,"value":types.symbol("timer")
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":63 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1630,45,16,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":95 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":61 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":64 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1675,46,16,27])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":114 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":85 ,"const?":false ,"ready?":false
} ,{"$":"toplevel" ,"depth":2 ,"pos":61 ,"const?":false ,"ready?":false
}
]
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":51 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1777,49,27,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1788,49,38,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1802,49,52,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":70 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1812,49,62,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1815,49,65,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":85 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":58 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",1980,54,2,182])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2038,55,4,123])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2051,55,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":67 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2091,56,17,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":95 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2112,56,38,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":85 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":51 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2012,54,34,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":61 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":54 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2308,62,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2410,63,9,251])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2671,67,9,93])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2770,68,4,146])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":97 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2783,68,17,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":77 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":20
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2805,68,39,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":8 ,"pos":60 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":110 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":58 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2867,69,35,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":86 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2880,69,48,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":11 ,"pos":75 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":118 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2691,67,29,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2709,67,47,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2727,67,65,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2749,67,87,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2425,63,24,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":37 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2477,64,33,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":61 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2489,64,45,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2540,65,33,80])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":84 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":7
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2548,65,41,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(3.0, 2.0)
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2555,65,48,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2572,65,65,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(1.0, 4.0)
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2579,65,72,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"constant" ,"value":"solid"
} ,{"$":"toplevel" ,"depth":8 ,"pos":74 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2643,66,21,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":38 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":81 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2337,62,38,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":33 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":"    score:"
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2366,62,67,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":93 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",2382,62,83,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":40 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":35 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3111,76,10,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3114,76,13,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":92 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3145,76,44,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3163,76,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3204,77,17,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3216,77,29,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3227,77,40,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3239,77,52,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3242,77,55,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":64 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3290,78,13,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":92 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3321,78,44,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":3 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3339,78,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3380,79,17,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3392,79,29,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3403,79,40,15])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3406,79,43,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3419,79,56,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3432,79,69,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":78 ,"const?":false ,"ready?":false
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0 ,1
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3475,80,22,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3487,80,34,27])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3490,80,37,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3502,80,49,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3515,80,62,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":80 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),3095,75,2,441,"bootstrap/bootstrap-teachpack"])
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
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3670,85,2,407])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3698,87,6,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3708,87,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"left"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3734,87,42,44])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3745,87,53,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3748,87,56,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":49 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"constant" ,"value":-1
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3762,87,70,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":70 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3786,88,6,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3796,88,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"right"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3823,88,43,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3834,88,54,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3837,88,57,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":49 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"toplevel" ,"depth":6 ,"pos":68 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3854,88,74,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":70 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3878,89,6,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3888,89,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"top"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3913,89,41,47])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3924,89,52,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":68 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3939,89,67,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":123 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3942,89,70,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":49 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
} ,{"$":"toplevel" ,"depth":6 ,"pos":70 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3968,90,6,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":83 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",3978,90,16,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"constant" ,"value":"bottom"
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4006,90,44,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4017,90,55,14])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":68 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4032,90,70,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4035,90,73,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":49 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":80 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
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
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4277,96,2,86])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4298,96,23,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4310,96,35,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4322,96,47,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":64 ,"const?":false ,"ready?":false
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
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":52 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":56 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4639,103,5,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":108 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":" "
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4661,104,5,491])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4673,104,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4708,105,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4743,106,17,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4777,107,17,245])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":115 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4783,107,23,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4795,107,35,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":61 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4807,107,47,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":14 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4825,107,65,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":13 ,"pos":23 ,"const?":false ,"ready?":false
}
]
}
}
]
}
} ,{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4878,108,27,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":20
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4884,108,33,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":13 ,"pos":107 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4892,108,41,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":14 ,"pos":41 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4943,109,27,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":87 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4949,109,33,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4999,110,27,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5040,111,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5070,112,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5103,113,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":33 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5136,114,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":78 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5169,116,5,287])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5181,116,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5216,117,17,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":36 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5251,118,17,36])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5266,118,32,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":11 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5305,119,17,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":41 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5344,120,17,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":43 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5374,121,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5407,122,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":33 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5440,123,17,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":37 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",4628,102,2,830])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":80 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),4628,102,2,830,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":69 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5616,128,2,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":102 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5621,128,7,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":112 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5629,128,15,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":111 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5649,128,35,14])
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":59 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5896,133,2,158])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5921,133,27,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":69 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",5991,134,27,13])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":52 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":72 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":14 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6609,148,4,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":71 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6653,149,4,34])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":60 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6692,150,4,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":75 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6729,151,4,30])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":73 ,"const?":false ,"ready?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6771,152,11,68])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,10 ,11 ,12 ,13 ,14 ,15
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6851,153,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6928,154,11,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7005,155,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7115,156,11,98])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7225,157,11,19])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7256,158,11,44])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7312,159,11,44])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7368,160,11,52])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7432,161,11,824])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8268,170,11,96])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8376,171,11,91])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8479,172,11,214])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,8 ,9 ,10 ,11 ,12 ,13
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8705,177,11,55])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8772,178,11,1760])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10540,203,6,144])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":109 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10578,204,19,25])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":94 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.rational(3602879701896397.0, types.bignum("3.602879701896397e+16"))
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10623,205,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":99 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":54 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10665,206,19,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":98 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8863,180,29,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":88 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":2 ,"pos":45 ,"const?":false ,"ready?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8879,180,45,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":40 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8932,181,36,167])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9136,183,36,63])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9236,184,36,75])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9348,185,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9408,186,36,25])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9470,187,36,17])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9524,188,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9584,189,36,23])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,4 ,5 ,6 ,7 ,8 ,9 ,10
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9680,191,34,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":121 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":0
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9726,192,34,75])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":16 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9788,192,96,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":19 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"constant" ,"value":10
}
]
}
}
]
}
} ,"else":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9837,193,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":69 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10019,196,36,73])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10069,196,86,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":119 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10129,197,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":69 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"seq" ,"forms":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10313,200,36,73])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10363,200,86,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":10 ,"pos":123 ,"const?":false ,"ready?":false
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
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":0 ,"pos":78 ,"const?":false ,"ready?":false
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10428,201,39,68])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":44 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9640,190,31,858])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":80 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),9640,190,31,858,"bootstrap/bootstrap-teachpack"])
}
]
}
}
}
}
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9591,189,43,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9531,188,43,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":33 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9474,187,40,12])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9416,186,44,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":38 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9355,185,43,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9249,184,49,61])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":53 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9259,184,59,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":41 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9145,183,45,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":53 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",9155,183,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":36 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8941,181,45,157])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":53 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8951,181,55,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":59 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8968,181,72,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":42 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8986,181,90,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":8 ,"pos":41 ,"const?":false ,"ready?":false
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
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8730,177,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":56 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8486,172,18,206])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8563,173,30,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":86 ,"const?":false ,"ready?":false
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
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8402,171,37,63])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8413,171,48,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8426,171,61,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8439,171,74,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8452,171,87,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":64 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8284,170,27,35])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8287,170,30,29])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":1
}
]
}
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[5
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8334,170,77,15])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7487,162,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7490,162,37,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7526,162,73,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7534,162,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7552,162,99,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7619,163,43,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7631,163,55,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7642,163,66,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7654,163,78,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7670,163,94,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":64 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7741,164,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"branch" ,"test":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7796,165,34,38])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":120 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7799,165,37,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":92 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"constant" ,"value":2
}
]
}
} ,"then":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7835,165,73,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":103 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7843,165,81,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":4 ,"pos":73 ,"const?":false ,"ready?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7861,165,99,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7928,166,43,140])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7940,166,55,54])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7951,166,66,30])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7967,166,82,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7982,166,97,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8050,167,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"branch" ,"test":{"$":"toplevel" ,"depth":1 ,"pos":78 ,"const?":false ,"ready?":false
} ,"then":{"$":"lam" ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8119,168,48,133])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8131,168,60,42])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8147,168,76,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":63 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8159,168,88,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":64 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",8234,169,60,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":67 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7447,161,26,808])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":80 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":types.list([types.symbol("make-Loc"),7447,161,26,808,"bootstrap/bootstrap-teachpack"])
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7387,160,30,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7327,159,26,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7271,158,26,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":35 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
}
} ,"rands":[{"$":"toplevel" ,"depth":1 ,"pos":113 ,"const?":false ,"ready?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7124,156,20,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7141,156,37,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7153,156,49,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7164,156,60,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7169,156,65,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":49 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7180,156,76,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":70 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7014,155,20,88])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7031,155,37,58])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7043,155,49,43])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7054,155,60,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":119 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":0
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7059,155,65,9])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":49 ,"const?":false ,"ready?":false
} ,"rands":[
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",7070,155,76,15])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":70 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6944,154,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6974,154,57,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6867,153,27,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6897,153,57,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6779,152,19,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6791,152,31,36])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6802,152,42,11])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":68 ,"const?":false ,"ready?":false
} ,{"$":"constant" ,"value":2
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",6814,152,54,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":7 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":7 ,"pos":70 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":47 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":6 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10884,211,9,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10959,212,9,65])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11034,213,9,51])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11095,214,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11197,215,9,92])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11299,216,9,77])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11386,217,9,200])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11592,222,4,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":54 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":2 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11393,217,16,192])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":9 ,"pos":44 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":14 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":13 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":15 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11468,218,28,20])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":12 ,"pos":86 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11312,216,22,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":76 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11318,216,28,56])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11330,216,40,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":-200
} ,{"$":"constant" ,"value":0
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11349,216,59,24])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":79 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11206,215,18,82])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11223,215,35,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11235,215,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11246,215,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11259,215,71,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11104,214,18,82])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":101 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11121,214,35,52])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11133,214,47,37])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":104 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11144,214,58,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"constant" ,"value":640
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11157,214,71,12])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":91 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11042,213,17,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":55 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11054,213,29,19])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":104 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10975,212,25,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11005,212,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10900,211,25,18])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":106 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,"then":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"else":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",10930,211,55,17])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":76 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":46 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11654,226,15,7])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
}
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":50 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11707,228,17,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":89 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11712,228,22,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11717,228,27,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":96 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":57 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11779,230,19,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":116 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11784,230,24,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11789,230,29,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":96 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11853,232,20,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":1 ,"pos":82 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11858,232,25,16])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":124 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/bootstrap-teachpack",11863,232,30,10])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":122 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"toplevel" ,"depth":5 ,"pos":96 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1211,42,9,127])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1348,44,9,409])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
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
} ,"rands":[{"$":"lam" ,"flags":[
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
} ,"rands":[{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["bootstrap/cage-teachpack",1863,55,9,240])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"flags":[
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
} ,"rands":[{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
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
] ,"body":{"$":"lam" ,"flags":[
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