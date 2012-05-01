window.COLLECTIONS = window.COLLECTIONS || {};
window.COLLECTIONS["jsworld/phonegap"] = { 'name': "jsworld/phonegap", 'bytecode': {"$":"compilation-top" ,"max-let-depth":0 ,"prefix":{"$":"prefix" ,"num-lifts":0 ,"toplevels":[false ,{"$":"global-bucket" ,"value":"sms"
} ,{"$":"global-bucket" ,"value":"geolocation"
} ,{"$":"global-bucket" ,"value":"world-updater"
} ,{"$":"global-bucket" ,"value":"w"
} ,{"$":"global-bucket" ,"value":"effect-updater"
} ,{"$":"global-bucket" ,"value":"accelerometer"
} ,{"$":"global-bucket" ,"value":"on-shake"
} ,{"$":"global-bucket" ,"value":"on-sms-receive"
} ,{"$":"global-bucket" ,"value":"on-sms-receive!"
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
] ,"code":{"$":"seq" ,"forms":[{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":13 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-acceleration!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1308,37,2,930])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1408,38,4,829])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1476,39,25,188])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1485,39,34,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1710,43,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1810,45,25,294])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4 ,5 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1987,48,27,116])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2007,48,47,24])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":12 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2079,49,47,23])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1819,45,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1877,46,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1935,47,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2168,51,25,67])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1329,37,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1337,37,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",1351,37,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":21 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":14 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-acceleration") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2342,58,2,837])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2442,59,4,736])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2510,60,25,188])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2519,60,34,48])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2744,64,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2844,66,25,202])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3021,69,27,24])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2853,66,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2911,67,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2969,68,34,22])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3110,71,25,66])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2363,58,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2371,58,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",2385,58,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":21 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"name":types.symbol("on-shake!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3292,79,2,709])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3392,80,4,608])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3460,81,25,181])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3469,81,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3687,85,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3772,87,25,102])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3792,87,45,18])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3856,88,45,17])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3938,90,25,60])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3313,79,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3321,79,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",3335,79,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":21 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":7 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-shake") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4112,96,2,581])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4212,97,4,480])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4280,98,25,181])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4289,98,34,41])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4507,102,44,23])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":22 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4631,105,25,59])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4133,96,23,72])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4141,96,31,63])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",4155,96,45,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":21 ,"const?":false ,"ready?":false
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
] ,"body":{"$":"lam" ,"name":types.symbol("on-location-change!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6909,148,2,940])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7005,150,4,843])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,7
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7073,151,25,180])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7082,151,34,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7291,155,36,154])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7300,155,45,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7515,159,25,190])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7535,159,45,62])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7553,159,63,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7575,159,85,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":11 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7643,160,45,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7660,160,62,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7682,160,84,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7769,162,25,77])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6928,148,21,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",6942,148,35,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":11 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-location-change") ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7962,168,2,810])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8058,170,4,713])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[4 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8126,171,25,180])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8135,171,34,42])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":6 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8344,175,36,154])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8353,175,45,39])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8568,179,25,61])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8585,179,42,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8607,179,64,21])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8693,181,25,76])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":23 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7981,168,21,70])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",7995,168,35,33])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":21 ,"const?":false ,"ready?":false
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
} ,{"$":"def-values" ,"ids":[{"$":"toplevel" ,"depth":0 ,"pos":9 ,"const?":false ,"ready?":false
}
] ,"body":{"$":"lam" ,"name":types.symbol("on-sms-receive!") ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[0
] ,"closure-types":[types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8896,187,2,692])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2 ,3
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8976,188,4,611])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,6
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9038,189,25,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9047,189,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,{"$":"toplevel" ,"depth":3 ,"pos":16 ,"const?":false ,"ready?":false
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9321,194,25,264])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[2 ,3 ,4 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9460,196,25,124])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":15 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9480,196,45,29])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":8 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":9 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":10 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9555,197,45,28])
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9335,194,39,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":7 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9404,195,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8907,187,13,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8915,187,21,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",8929,187,35,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":21 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9692,202,2,596])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[1 ,2
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9772,203,4,515])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":18 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":1 ,"param-types":[types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,5
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9834,204,25,122])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":22 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9843,204,34,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":20 ,"const?":false ,"ready?":false
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
} ,{"$":"toplevel" ,"depth":3 ,"pos":16 ,"const?":false ,"ready?":false
} ,{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":3 ,"param-types":[types.symbol("val") ,types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10117,209,25,168])
} ,"body":{"$":"application" ,"rator":{"$":"lam" ,"name":types.EMPTY ,"flags":[
] ,"num-params":2 ,"param-types":[types.symbol("val") ,types.symbol("val")
] ,"rest?":false ,"closure-map":[3 ,4
] ,"closure-types":[types.symbol("val/ref") ,types.symbol("val/ref")
] ,"max-let-depth":0 ,"body":{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10256,211,25,28])
} ,"body":{"$":"application" ,"rator":{"$":"localref" ,"unbox?":false ,"pos":3 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":4 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":5 ,"clear":false ,"other-clears?":false ,"flonum?":false
} ,{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
}
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10131,209,39,31])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":17 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"localref" ,"unbox?":false ,"pos":6 ,"clear":false ,"other-clears?":false ,"flonum?":false
}
]
}
} ,{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",10200,210,36,28])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":3 ,"pos":17 ,"const?":false ,"ready?":false
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
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9703,202,13,62])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":2 ,"pos":19 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9711,202,21,53])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":4 ,"pos":20 ,"const?":false ,"ready?":false
} ,"rands":[{"$":"with-cont-mark" ,"key":{"$":"constant" ,"value":types.symbol("moby-stack-record-continuation-mark-key")
} ,"val":{"$":"constant" ,"value":types.vector(["jsworld/phonegap",9725,202,35,32])
} ,"body":{"$":"application" ,"rator":{"$":"toplevel" ,"depth":5 ,"pos":21 ,"const?":false ,"ready?":false
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
}, 'provides': ["on-shake","on-sms-receive","on-sms-receive!","on-shake!","on-location-change","on-location-change!","on-acceleration!","on-acceleration"]};
