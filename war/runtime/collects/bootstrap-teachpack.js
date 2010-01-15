if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["bootstrap-teachpack.js"]) == 'undefined') {
    plt._MODULES["bootstrap-teachpack.js"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {}};
    (function() {
var _SHARED = {};
var WIDTH; 
var HEIGHT; 
var EXPLOSION_dash_COLOR; 
var TITLE_dash_COLOR; 
var PROJECTILE_dash_IMG; 
var BACKGROUND; 
var DIRECTION; 
var score; 
var spacing = function() { return (plt.Kernel.setLastLoc({offset:1192, line:34, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[13])); };
var being = function (posn,costume) { plt.types.Struct.call(this, "make-being", [posn,costume]);this.posn = posn;
this.costume = costume; };
being.prototype = new plt.types.Struct();

var make_dash_being = function (id0,id1) { return new being(id0,id1); };
var being_dash_posn = function(obj) {
     if (being_question_ (obj)) {
        return obj.posn;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('being-posn: not a being: ~s', [obj]));
     }
};

var being_dash_costume = function(obj) {
     if (being_question_ (obj)) {
        return obj.costume;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('being-costume: not a being: ~s', [obj]));
     }
};

var set_dash_being_dash_posn_bang_ = function(obj,newVal) {
	 if (being_question_ (obj)) {
		obj.posn = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_being_dash_posn_bang_: not a being: ~s', [obj]));
     }
};

var set_dash_being_dash_costume_bang_ = function(obj,newVal) {
	 if (being_question_ (obj)) {
		obj.costume = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_being_dash_costume_bang_: not a being: ~s', [obj]));
     }
};

var being_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof being; };

var world = function (objects,targets,player,projectiles,bg,score,title,timer) { plt.types.Struct.call(this, "make-world", [objects,targets,player,projectiles,bg,score,title,timer]);this.objects = objects;
this.targets = targets;
this.player = player;
this.projectiles = projectiles;
this.bg = bg;
this.score = score;
this.title = title;
this.timer = timer; };
world.prototype = new plt.types.Struct();

var make_dash_world = function (id0,id1,id2,id3,id4,id5,id6,id7) { return new world(id0,id1,id2,id3,id4,id5,id6,id7); };
var world_dash_objects = function(obj) {
     if (world_question_ (obj)) {
        return obj.objects;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-objects: not a world: ~s', [obj]));
     }
};

var world_dash_targets = function(obj) {
     if (world_question_ (obj)) {
        return obj.targets;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-targets: not a world: ~s', [obj]));
     }
};

var world_dash_player = function(obj) {
     if (world_question_ (obj)) {
        return obj.player;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-player: not a world: ~s', [obj]));
     }
};

var world_dash_projectiles = function(obj) {
     if (world_question_ (obj)) {
        return obj.projectiles;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-projectiles: not a world: ~s', [obj]));
     }
};

var world_dash_bg = function(obj) {
     if (world_question_ (obj)) {
        return obj.bg;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-bg: not a world: ~s', [obj]));
     }
};

var world_dash_score = function(obj) {
     if (world_question_ (obj)) {
        return obj.score;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-score: not a world: ~s', [obj]));
     }
};

var world_dash_title = function(obj) {
     if (world_question_ (obj)) {
        return obj.title;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-title: not a world: ~s', [obj]));
     }
};

var world_dash_timer = function(obj) {
     if (world_question_ (obj)) {
        return obj.timer;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-timer: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_objects_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.objects = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_objects_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_targets_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.targets = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_targets_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_player_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.player = newVal;
           obj._fields[2] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_player_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_projectiles_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.projectiles = newVal;
           obj._fields[3] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_projectiles_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_bg_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.bg = newVal;
           obj._fields[4] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_bg_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_score_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.score = newVal;
           obj._fields[5] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_score_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_title_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.title = newVal;
           obj._fields[6] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_title_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_timer_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.timer = newVal;
           obj._fields[7] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_timer_bang_: not a world: ~s', [obj]));
     }
};

var world_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof world; };

var being_dash_x; 
var being_dash_y; 
var posn_dash__greaterthan_point = function(posn) { return (plt.Kernel.setLastLoc({offset:1746, line:49, span:54, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:1757, line:49, span:13, id:"<unknown>"}) && plt.Kernel.posn_dash_x(posn)),(plt.Kernel.setLastLoc({offset:1771, line:49, span:28, id:"<unknown>"}) && plt.Kernel._plus_([HEIGHT,(plt.Kernel.setLastLoc({offset:1781, line:49, span:17, id:"<unknown>"}) && plt.Kernel._dash_((plt.Kernel.setLastLoc({offset:1784, line:49, span:13, id:"<unknown>"}) && plt.Kernel.posn_dash_y(posn)), []))])))); };
var draw_dash_being = function(being, background) { return (plt.Kernel.setLastLoc({offset:1949, line:54, span:182, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args16) {
var screen_dash_posn = args16[0];  return (plt.Kernel.setLastLoc({offset:2007, line:55, span:123, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:2020, line:55, span:21, id:"<unknown>"}) && being_dash_costume(being)),(plt.Kernel.setLastLoc({offset:2060, line:56, span:20, id:"<unknown>"}) && plt.Kernel.posn_dash_x(screen_dash_posn)),(plt.Kernel.setLastLoc({offset:2081, line:56, span:20, id:"<unknown>"}) && plt.Kernel.posn_dash_y(screen_dash_posn)),background)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:1968, line:54, span:32, id:"<unknown>"}) && posn_dash__greaterthan_point((plt.Kernel.setLastLoc({offset:1981, line:54, span:18, id:"<unknown>"}) && being_dash_posn(being))))]),                    [])); };
var draw_dash_world = function(w) { return (plt.Kernel.setLastLoc({offset:2277, line:62, span:92, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args17) {
var score_dash_string = args17[0];  return (plt.Kernel.setLastLoc({offset:2379, line:63, span:251, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args18) {
var player = args18[0];  return (plt.Kernel.setLastLoc({offset:2640, line:67, span:93, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args19) {
var all_dash_beings = args19[0];  return (plt.Kernel.setLastLoc({offset:2739, line:68, span:130, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:2752, line:68, span:34, id:"<unknown>"}) && plt.world.Kernel.text(score_dash_string,_SHARED[6],TITLE_dash_COLOR)),_SHARED[20],_SHARED[12],(plt.Kernel.setLastLoc({offset:2810, line:69, span:58, id:"<unknown>"}) && plt.Kernel.foldl((plt.types.liftToplevelToFunctionValue(draw_dash_being,(plt.types.String.makeInstance("draw-being")),2,(plt.types.Rational.makeInstance(2, 1)))),(plt.Kernel.setLastLoc({offset:2828, line:69, span:28, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(BACKGROUND,_SHARED[12],_SHARED[12])), [all_dash_beings])))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:2652, line:67, span:80, id:"<unknown>"}) && plt.Kernel.append([(plt.Kernel.setLastLoc({offset:2660, line:67, span:17, id:"<unknown>"}) && world_dash_targets(w)),(plt.Kernel.setLastLoc({offset:2678, line:67, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:2696, line:67, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),(plt.Kernel.setLastLoc({offset:2718, line:67, span:13, id:"<unknown>"}) && plt.Kernel.list([player]))]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:2391, line:63, span:21, id:"<unknown>"}) && plt.Kernel._greaterthan_((plt.Kernel.setLastLoc({offset:2394, line:63, span:15, id:"<unknown>"}) && world_dash_timer(w)),_SHARED[12], [])) ?
 (plt.Kernel.setLastLoc({offset:2434, line:64, span:156, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:2446, line:64, span:29, id:"<unknown>"}) && being_dash_posn((plt.Kernel.setLastLoc({offset:2458, line:64, span:16, id:"<unknown>"}) && world_dash_player(w)))),(plt.Kernel.setLastLoc({offset:2509, line:65, span:80, id:"<unknown>"}) && plt.world.Kernel.star(_SHARED[21],(plt.Kernel.setLastLoc({offset:2517, line:65, span:23, id:"<unknown>"}) && plt.Kernel._star_([_SHARED[22],(plt.Kernel.setLastLoc({offset:2524, line:65, span:15, id:"<unknown>"}) && world_dash_timer(w))])),(plt.Kernel.setLastLoc({offset:2541, line:65, span:23, id:"<unknown>"}) && plt.Kernel._star_([_SHARED[23],(plt.Kernel.setLastLoc({offset:2548, line:65, span:15, id:"<unknown>"}) && world_dash_timer(w))])),_SHARED[8],EXPLOSION_dash_COLOR)))) :
 (plt.Kernel.setLastLoc({offset:2612, line:66, span:16, id:"<unknown>"}) && world_dash_player(w)))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:2291, line:62, span:77, id:"<unknown>"}) && plt.Kernel.string_dash_append([(plt.Kernel.setLastLoc({offset:2306, line:62, span:15, id:"<unknown>"}) && world_dash_title(w)),_SHARED[24],(plt.Kernel.setLastLoc({offset:2335, line:62, span:32, id:"<unknown>"}) && plt.Kernel.number_dash__greaterthan_string((plt.Kernel.setLastLoc({offset:2351, line:62, span:15, id:"<unknown>"}) && world_dash_score(w))))]))]),                    [])); };
var wrap_dash_update = function(f) { return (((plt.Kernel.setLastLoc({offset:3064, line:76, span:25, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:3067, line:76, span:19, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(f)),_SHARED[25], []))&&(plt.Kernel.setLastLoc({offset:3090, line:76, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:3108, line:76, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[26],_SHARED[27]]))))) ?
 ((function() {
   var _result_ = (function(args28) {
var b = args28[0];  return (plt.Kernel.setLastLoc({offset:3149, line:77, span:70, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:3161, line:77, span:39, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3172, line:77, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    [])),(plt.Kernel.setLastLoc({offset:3184, line:77, span:15, id:"<unknown>"}) && plt.Kernel.apply(f,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:3187, line:77, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    []))]),                    [])))),(plt.Kernel.setLastLoc({offset:3201, line:77, span:17, id:"<unknown>"}) && being_dash_costume(b)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (((plt.Kernel.setLastLoc({offset:3232, line:78, span:25, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:3235, line:78, span:19, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(f)),_SHARED[25], []))&&(plt.Kernel.setLastLoc({offset:3258, line:78, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:3276, line:78, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[11],_SHARED[29]]))))) ?
 ((function() {
   var _result_ = (function(args30) {
var b = args30[0];  return (plt.Kernel.setLastLoc({offset:3317, line:79, span:70, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:3329, line:79, span:39, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3340, line:79, span:15, id:"<unknown>"}) && plt.Kernel.apply(f,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:3343, line:79, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    []))]),                    [])),(plt.Kernel.setLastLoc({offset:3356, line:79, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    [])))),(plt.Kernel.setLastLoc({offset:3369, line:79, span:17, id:"<unknown>"}) && being_dash_costume(b)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.types.Logic.TRUE ?
 ((function() {
   var _result_ = (function(args31) {
var b = args31[0];  return (plt.Kernel.setLastLoc({offset:3412, line:80, span:58, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:3424, line:80, span:27, id:"<unknown>"}) && plt.Kernel.apply(f,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:3427, line:80, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    [])), (plt.Kernel.setLastLoc({offset:3439, line:80, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    []))]),                    [])),(plt.Kernel.setLastLoc({offset:3452, line:80, span:17, id:"<unknown>"}) && being_dash_costume(b)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.Kernel.setLastLoc({offset:3048, line:75, span:425, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32]))))); };
var reset = function(being) { return (plt.Kernel.setLastLoc({offset:3607, line:85, span:375, id:"<unknown>"}) && make_dash_being(((plt.Kernel.setLastLoc({offset:3635, line:87, span:27, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[11], [])) ?
 (plt.Kernel.setLastLoc({offset:3663, line:87, span:44, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3674, line:87, span:16, id:"<unknown>"}) && plt.Kernel._star_([(plt.Kernel.setLastLoc({offset:3677, line:87, span:9, id:"<unknown>"}) && spacing()),_SHARED[33]])),(plt.Kernel.setLastLoc({offset:3691, line:87, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))) :
 ((plt.Kernel.setLastLoc({offset:3715, line:88, span:28, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[29], [])) ?
 (plt.Kernel.setLastLoc({offset:3744, line:88, span:47, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3755, line:88, span:19, id:"<unknown>"}) && plt.Kernel._plus_([(plt.Kernel.setLastLoc({offset:3758, line:88, span:9, id:"<unknown>"}) && spacing()),WIDTH])),(plt.Kernel.setLastLoc({offset:3775, line:88, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))) :
 ((plt.Kernel.setLastLoc({offset:3799, line:89, span:26, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[26], [])) ?
 (plt.Kernel.setLastLoc({offset:3826, line:89, span:47, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3837, line:89, span:14, id:"<unknown>"}) && plt.Kernel.random(WIDTH)),(plt.Kernel.setLastLoc({offset:3852, line:89, span:20, id:"<unknown>"}) && plt.Kernel._plus_([(plt.Kernel.setLastLoc({offset:3855, line:89, span:9, id:"<unknown>"}) && spacing()),HEIGHT])))) :
 ((plt.Kernel.setLastLoc({offset:3881, line:90, span:29, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[27], [])) ?
 (plt.Kernel.setLastLoc({offset:3911, line:90, span:43, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3922, line:90, span:14, id:"<unknown>"}) && plt.Kernel.random(WIDTH)),(plt.Kernel.setLastLoc({offset:3937, line:90, span:16, id:"<unknown>"}) && plt.Kernel._star_([(plt.Kernel.setLastLoc({offset:3940, line:90, span:9, id:"<unknown>"}) && spacing()),_SHARED[33]])))) :
 (plt.Kernel.setLastLoc({offset:3622, line:86, span:334, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))))),(plt.Kernel.setLastLoc({offset:3960, line:91, span:21, id:"<unknown>"}) && being_dash_costume(being)))); };
var move_dash_all = function(beings, move, in_dash_domain_question_) { return (plt.Kernel.setLastLoc({offset:4182, line:96, span:86, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args34) {
var b = args34[0];  return ((plt.Kernel.setLastLoc({offset:4203, line:96, span:36, id:"<unknown>"}) && plt.Kernel.apply(in_dash_domain_question_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:4215, line:96, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    [])), (plt.Kernel.setLastLoc({offset:4227, line:96, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    []))]),                    [])) ?
 (plt.Kernel.setLastLoc({offset:4240, line:96, span:8, id:"<unknown>"}) && plt.Kernel.apply(move,                     plt.Kernel.list([b]),                    [])) :
 (plt.Kernel.setLastLoc({offset:4249, line:96, span:9, id:"<unknown>"}) && reset(b))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [beings])); };
var keypress = function(w, key, update_dash_player) { return ((plt.Kernel.setLastLoc({offset:4544, line:103, span:18, id:"<unknown>"}) && plt.Kernel.string_equal__question_(key,_SHARED[35], [])) ?
 (plt.Kernel.setLastLoc({offset:4569, line:104, span:481, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:4581, line:104, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:4616, line:105, span:17, id:"<unknown>"}) && world_dash_targets(w)),(plt.Kernel.setLastLoc({offset:4651, line:106, span:16, id:"<unknown>"}) && world_dash_player(w)),(plt.Kernel.setLastLoc({offset:4685, line:107, span:235, id:"<unknown>"}) && plt.Kernel.cons((plt.Kernel.setLastLoc({offset:4691, line:107, span:57, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:4703, line:107, span:29, id:"<unknown>"}) && being_dash_posn((plt.Kernel.setLastLoc({offset:4715, line:107, span:16, id:"<unknown>"}) && world_dash_player(w)))),PROJECTILE_dash_IMG)),((plt.Kernel.setLastLoc({offset:4776, line:108, span:37, id:"<unknown>"}) && plt.Kernel._equal_(_SHARED[6],(plt.Kernel.setLastLoc({offset:4782, line:108, span:30, id:"<unknown>"}) && plt.Kernel.length((plt.Kernel.setLastLoc({offset:4790, line:108, span:21, id:"<unknown>"}) && world_dash_projectiles(w)))), [])) ?
 (plt.Kernel.setLastLoc({offset:4841, line:109, span:28, id:"<unknown>"}) && plt.Kernel.rest((plt.Kernel.setLastLoc({offset:4847, line:109, span:21, id:"<unknown>"}) && world_dash_projectiles(w)))) :
 (plt.Kernel.setLastLoc({offset:4897, line:110, span:21, id:"<unknown>"}) && world_dash_projectiles(w))))),(plt.Kernel.setLastLoc({offset:4938, line:111, span:12, id:"<unknown>"}) && world_dash_bg(w)),(plt.Kernel.setLastLoc({offset:4968, line:112, span:15, id:"<unknown>"}) && world_dash_score(w)),(plt.Kernel.setLastLoc({offset:5001, line:113, span:15, id:"<unknown>"}) && world_dash_title(w)),(plt.Kernel.setLastLoc({offset:5034, line:114, span:15, id:"<unknown>"}) && world_dash_timer(w)))) :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:5067, line:116, span:287, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:5079, line:116, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:5114, line:117, span:17, id:"<unknown>"}) && world_dash_targets(w)),(plt.Kernel.setLastLoc({offset:5149, line:118, span:36, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:5164, line:118, span:16, id:"<unknown>"}) && world_dash_player(w)), key]),                    [])),(plt.Kernel.setLastLoc({offset:5203, line:119, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),(plt.Kernel.setLastLoc({offset:5242, line:120, span:12, id:"<unknown>"}) && world_dash_bg(w)),(plt.Kernel.setLastLoc({offset:5272, line:121, span:15, id:"<unknown>"}) && world_dash_score(w)),(plt.Kernel.setLastLoc({offset:5305, line:122, span:15, id:"<unknown>"}) && world_dash_title(w)),(plt.Kernel.setLastLoc({offset:5338, line:123, span:15, id:"<unknown>"}) && world_dash_timer(w)))) :
 (plt.Kernel.setLastLoc({offset:4533, line:102, span:823, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))); };
var any_dash_collide_question_ = function(collide_question_, t, beings) { return (plt.Kernel.setLastLoc({offset:5514, line:128, span:58, id:"<unknown>"}) && plt.Kernel.not((plt.Kernel.setLastLoc({offset:5519, line:128, span:52, id:"<unknown>"}) && plt.Kernel.empty_question_((plt.Kernel.setLastLoc({offset:5527, line:128, span:43, id:"<unknown>"}) && plt.Kernel.filter(((function() {
   var _result_ = (function(args36) {
var b = args36[0];  return (plt.Kernel.setLastLoc({offset:5547, line:128, span:14, id:"<unknown>"}) && plt.Kernel.apply(collide_question_,                     plt.Kernel.list([b, t]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),beings)))))); };
var check_dash_collision = function(beings, projectiles, collide_question_) { return (plt.Kernel.setLastLoc({offset:5794, line:133, span:158, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args37) {
var being = args37[0];  return ((plt.Kernel.setLastLoc({offset:5819, line:133, span:41, id:"<unknown>"}) && any_dash_collide_question_(collide_question_,being,projectiles)) ?
 (plt.Kernel.setLastLoc({offset:5889, line:134, span:13, id:"<unknown>"}) && reset(being)) :
 being); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [beings])); };
var START = function(title, title_dash_color, background, objectImgs, targetImgs, playerImg, projectileImg, direction, update_dash_player_star_, update_dash_target_star_, update_dash_object_star_, update_dash_projectile_star_, collide_star__question_, in_dash_domain_star__question_) { return (function(){(function(){ 
PROJECTILE_dash_IMG = projectileImg;})();
(function(){ 
TITLE_dash_COLOR = title_dash_color;})();
(function(){ 
BACKGROUND = background;})();
(function(){ 
DIRECTION = direction;})();
return (plt.Kernel.setLastLoc({offset:6653, line:152, span:68, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args38) {
var player = args38[0];  return (plt.Kernel.setLastLoc({offset:6733, line:153, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args39) {
var targetImgs = args39[0];  return (plt.Kernel.setLastLoc({offset:6810, line:154, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args40) {
var objectImgs = args40[0];  return (plt.Kernel.setLastLoc({offset:6887, line:155, span:98, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args41) {
var targets = args41[0];  return (plt.Kernel.setLastLoc({offset:6997, line:156, span:98, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args42) {
var objects = args42[0];  return (plt.Kernel.setLastLoc({offset:7107, line:157, span:19, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args43) {
var projectiles = args43[0];  return (plt.Kernel.setLastLoc({offset:7138, line:158, span:44, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args44) {
var update_dash_object = args44[0];  return (plt.Kernel.setLastLoc({offset:7194, line:159, span:44, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args45) {
var update_dash_target = args45[0];  return (plt.Kernel.setLastLoc({offset:7250, line:160, span:52, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args46) {
var update_dash_projectile = args46[0];  return (plt.Kernel.setLastLoc({offset:7314, line:161, span:808, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args47) {
var update_dash_player = args47[0];  return (plt.Kernel.setLastLoc({offset:8134, line:170, span:96, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args48) {
var in_dash_domain_question_ = args48[0];  return (plt.Kernel.setLastLoc({offset:8242, line:171, span:91, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args49) {
var collide_question_ = args49[0];  return (plt.Kernel.setLastLoc({offset:8345, line:172, span:214, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args50) {
var world = args50[0];  return (plt.Kernel.setLastLoc({offset:8571, line:177, span:55, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args51) {
var keypress_star_ = args51[0];  return (plt.Kernel.setLastLoc({offset:8638, line:178, span:1756, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args52) {
var update_dash_world = args52[0];  return (plt.Kernel.setLastLoc({offset:10402, line:203, span:144, id:"<unknown>"}) && plt.world.MobyJsworld.bigBang(world, [(plt.Kernel.setLastLoc({offset:10440, line:204, span:25, id:"<unknown>"}) && plt.world.config.Kernel.onTick(_SHARED[53],update_dash_world)),(plt.Kernel.setLastLoc({offset:10485, line:205, span:22, id:"<unknown>"}) && plt.world.config.Kernel.onRedraw((plt.types.liftToplevelToFunctionValue(draw_dash_world,(plt.types.String.makeInstance("draw-world")),1,(plt.types.Rational.makeInstance(1, 1)))))),(plt.Kernel.setLastLoc({offset:10527, line:206, span:18, id:"<unknown>"}) && plt.world.config.Kernel.onKey(keypress_star_))])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args54) {
var w = args54[0];  return (function(){(function(){ 
score = (plt.Kernel.setLastLoc({offset:8741, line:180, span:15, id:"<unknown>"}) && world_dash_score(w));})();
return (plt.Kernel.setLastLoc({offset:8794, line:181, span:167, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args55) {
var objects = args55[0];  return (plt.Kernel.setLastLoc({offset:8998, line:183, span:63, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args56) {
var targets = args56[0];  return (plt.Kernel.setLastLoc({offset:9098, line:184, span:75, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args57) {
var projectiles = args57[0];  return (plt.Kernel.setLastLoc({offset:9210, line:185, span:23, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args58) {
var score = args58[0];  return (plt.Kernel.setLastLoc({offset:9270, line:186, span:25, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args59) {
var player = args59[0];  return (plt.Kernel.setLastLoc({offset:9332, line:187, span:17, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args60) {
var bg = args60[0];  return (plt.Kernel.setLastLoc({offset:9386, line:188, span:23, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args61) {
var title = args61[0];  return (plt.Kernel.setLastLoc({offset:9446, line:189, span:23, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args62) {
var timer = args62[0];  return ((plt.Kernel.setLastLoc({offset:9542, line:191, span:11, id:"<unknown>"}) && plt.Kernel._greaterthan_(timer,_SHARED[12], [])) ?
 (plt.Kernel.setLastLoc({offset:9588, line:192, span:75, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,score,title,(plt.Kernel.setLastLoc({offset:9650, line:192, span:12, id:"<unknown>"}) && plt.Kernel._dash_(timer, [_SHARED[20]])))) :
 ((plt.Kernel.setLastLoc({offset:9699, line:193, span:38, id:"<unknown>"}) && any_dash_collide_question_(collide_question_,player,objects)) ?
 (function(){;
return (plt.Kernel.setLastLoc({offset:9881, line:196, span:73, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,(plt.Kernel.setLastLoc({offset:9931, line:196, span:12, id:"<unknown>"}) && plt.Kernel._dash_(score, [_SHARED[63]])),title,_SHARED[64]));})() :
 ((plt.Kernel.setLastLoc({offset:9991, line:197, span:38, id:"<unknown>"}) && any_dash_collide_question_(collide_question_,player,targets)) ?
 (function(){;
return (plt.Kernel.setLastLoc({offset:10175, line:200, span:73, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,(plt.Kernel.setLastLoc({offset:10225, line:200, span:12, id:"<unknown>"}) && plt.Kernel._plus_([score,_SHARED[6]])),title,_SHARED[64]));})() :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:10290, line:201, span:68, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,score,title,timer)) :
 (plt.Kernel.setLastLoc({offset:9502, line:190, span:858, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9453, line:189, span:15, id:"<unknown>"}) && world_dash_timer(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9393, line:188, span:15, id:"<unknown>"}) && world_dash_title(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9336, line:187, span:12, id:"<unknown>"}) && world_dash_bg(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9278, line:186, span:16, id:"<unknown>"}) && world_dash_player(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9217, line:185, span:15, id:"<unknown>"}) && world_dash_score(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9111, line:184, span:61, id:"<unknown>"}) && move_dash_all((plt.Kernel.setLastLoc({offset:9121, line:184, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),update_dash_projectile,in_dash_domain_question_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9007, line:183, span:53, id:"<unknown>"}) && move_dash_all((plt.Kernel.setLastLoc({offset:9017, line:183, span:17, id:"<unknown>"}) && world_dash_targets(w)),update_dash_target,in_dash_domain_question_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8803, line:181, span:157, id:"<unknown>"}) && move_dash_all((plt.Kernel.setLastLoc({offset:8813, line:181, span:66, id:"<unknown>"}) && check_dash_collision((plt.Kernel.setLastLoc({offset:8830, line:181, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:8848, line:181, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),collide_question_)),update_dash_object,in_dash_domain_question_))]),                    []));})(); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args65) {
var w = args65[0];
var k = args65[1];  return (plt.Kernel.setLastLoc({offset:8596, line:177, span:28, id:"<unknown>"}) && keypress(w,k,update_dash_player)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8352, line:172, span:206, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,(plt.Kernel.setLastLoc({offset:8429, line:173, span:28, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(background,_SHARED[12],_SHARED[12])),_SHARED[12],title,_SHARED[12]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args66) {
var b1 = args66[0];
var b2 = args66[1];  return (plt.Kernel.setLastLoc({offset:8268, line:171, span:63, id:"<unknown>"}) && plt.Kernel.apply(collide_star__question_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8279, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b1]),                    [])), (plt.Kernel.setLastLoc({offset:8292, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b1]),                    [])), (plt.Kernel.setLastLoc({offset:8305, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b2]),                    [])), (plt.Kernel.setLastLoc({offset:8318, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b2]),                    []))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:8150, line:170, span:35, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:8153, line:170, span:29, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(in_dash_domain_star__question_)),_SHARED[25], [])) ?
 ((function() {
   var _result_ = (function(args67) {
var x = args67[0];
var y = args67[1];  return (plt.Kernel.setLastLoc({offset:8200, line:170, span:15, id:"<unknown>"}) && plt.Kernel.apply(in_dash_domain_star__question_,                     plt.Kernel.list([x]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 in_dash_domain_star__question_)]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(((plt.Kernel.setLastLoc({offset:7369, line:162, span:38, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:7372, line:162, span:32, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(update_dash_player_star_)),_SHARED[68], []))&&(plt.Kernel.setLastLoc({offset:7408, line:162, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:7426, line:162, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[11],_SHARED[29]]))))) ?
 ((function() {
   var _result_ = (function(args69) {
var p = args69[0];
var k = args69[1];  return (plt.Kernel.setLastLoc({offset:7493, line:163, span:140, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7505, line:163, span:54, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:7516, line:163, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([p]),                    [])),(plt.Kernel.setLastLoc({offset:7528, line:163, span:30, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player_star_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7544, line:163, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([p]),                    [])), k]),                    [])))),(plt.Kernel.setLastLoc({offset:7615, line:164, span:17, id:"<unknown>"}) && being_dash_costume(p)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (((plt.Kernel.setLastLoc({offset:7670, line:165, span:38, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:7673, line:165, span:32, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(update_dash_player_star_)),_SHARED[68], []))&&(plt.Kernel.setLastLoc({offset:7709, line:165, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:7727, line:165, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[26],_SHARED[27]]))))) ?
 ((function() {
   var _result_ = (function(args70) {
var p = args70[0];
var k = args70[1];  return (plt.Kernel.setLastLoc({offset:7794, line:166, span:140, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7806, line:166, span:54, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:7817, line:166, span:30, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player_star_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7833, line:166, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([p]),                    [])), k]),                    [])),(plt.Kernel.setLastLoc({offset:7848, line:166, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([p]),                    [])))),(plt.Kernel.setLastLoc({offset:7916, line:167, span:17, id:"<unknown>"}) && being_dash_costume(p)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.types.Logic.TRUE ?
 ((function() {
   var _result_ = (function(args71) {
var p = args71[0];
var k = args71[1];  return (plt.Kernel.setLastLoc({offset:7985, line:168, span:133, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7997, line:168, span:42, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player_star_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8013, line:168, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([p]),                    [])), (plt.Kernel.setLastLoc({offset:8025, line:168, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([p]),                    [])), k]),                    [])),(plt.Kernel.setLastLoc({offset:8100, line:169, span:17, id:"<unknown>"}) && being_dash_costume(p)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.Kernel.setLastLoc({offset:7329, line:161, span:792, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7269, line:160, span:32, id:"<unknown>"}) && wrap_dash_update(update_dash_projectile_star_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7209, line:159, span:28, id:"<unknown>"}) && wrap_dash_update(update_dash_target_star_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7153, line:158, span:28, id:"<unknown>"}) && wrap_dash_update(update_dash_object_star_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([plt.types.Empty.EMPTY]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7006, line:156, span:88, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args72) {
var o = args72[0];  return (plt.Kernel.setLastLoc({offset:7023, line:156, span:58, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7035, line:156, span:43, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:7046, line:156, span:15, id:"<unknown>"}) && plt.Kernel._dash_(_SHARED[12], [(plt.Kernel.setLastLoc({offset:7051, line:156, span:9, id:"<unknown>"}) && spacing())])),(plt.Kernel.setLastLoc({offset:7062, line:156, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))),o)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [objectImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:6896, line:155, span:88, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args73) {
var t = args73[0];  return (plt.Kernel.setLastLoc({offset:6913, line:155, span:58, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:6925, line:155, span:43, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:6936, line:155, span:15, id:"<unknown>"}) && plt.Kernel._dash_(_SHARED[12], [(plt.Kernel.setLastLoc({offset:6941, line:155, span:9, id:"<unknown>"}) && spacing())])),(plt.Kernel.setLastLoc({offset:6952, line:155, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))),t)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [targetImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:6826, line:154, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(objectImgs)) ?
 objectImgs :
 (plt.Kernel.setLastLoc({offset:6856, line:154, span:17, id:"<unknown>"}) && plt.Kernel.list([objectImgs])))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:6749, line:153, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(targetImgs)) ?
 targetImgs :
 (plt.Kernel.setLastLoc({offset:6779, line:153, span:17, id:"<unknown>"}) && plt.Kernel.list([targetImgs])))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:6661, line:152, span:59, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:6673, line:152, span:36, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:6684, line:152, span:11, id:"<unknown>"}) && plt.Kernel._slash_(WIDTH, [_SHARED[68]])),(plt.Kernel.setLastLoc({offset:6696, line:152, span:12, id:"<unknown>"}) && plt.Kernel._slash_(HEIGHT, [_SHARED[68]])))),playerImg))]),                    []));})(); };
var test_dash_frame = function(title, bg, objectImgs, targetImgs, playerImg, projectileImgs) { return (plt.Kernel.setLastLoc({offset:10746, line:211, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args74) {
var targetImgs = args74[0];  return (plt.Kernel.setLastLoc({offset:10821, line:212, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args75) {
var objectImgs = args75[0];  return (plt.Kernel.setLastLoc({offset:10896, line:213, span:51, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args76) {
var player = args76[0];  return (plt.Kernel.setLastLoc({offset:10957, line:214, span:92, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args77) {
var targets = args77[0];  return (plt.Kernel.setLastLoc({offset:11059, line:215, span:92, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args78) {
var objects = args78[0];  return (plt.Kernel.setLastLoc({offset:11161, line:216, span:67, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args79) {
var projectiles = args79[0];  return (plt.Kernel.setLastLoc({offset:11238, line:217, span:200, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args80) {
var world = args80[0];  return (plt.Kernel.setLastLoc({offset:11444, line:222, span:18, id:"<unknown>"}) && draw_dash_world(world)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11245, line:217, span:192, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,(plt.Kernel.setLastLoc({offset:11320, line:218, span:20, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(bg,_SHARED[12],_SHARED[12])),_SHARED[64],title,_SHARED[12]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11174, line:216, span:53, id:"<unknown>"}) && plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11180, line:216, span:46, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:11192, line:216, span:18, id:"<unknown>"}) && plt.Kernel.make_dash_posn(_SHARED[81],_SHARED[12])),PROJECTILE_dash_IMG))]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11068, line:215, span:82, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args82) {
var o = args82[0];  return (plt.Kernel.setLastLoc({offset:11085, line:215, span:52, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:11097, line:215, span:37, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:11108, line:215, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[1])),(plt.Kernel.setLastLoc({offset:11121, line:215, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[2])))),o)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [objectImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:10966, line:214, span:82, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args83) {
var t = args83[0];  return (plt.Kernel.setLastLoc({offset:10983, line:214, span:52, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:10995, line:214, span:37, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:11006, line:214, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[1])),(plt.Kernel.setLastLoc({offset:11019, line:214, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[2])))),t)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [targetImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:10904, line:213, span:42, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:10916, line:213, span:19, id:"<unknown>"}) && plt.Kernel.make_dash_posn(_SHARED[84],_SHARED[85])),playerImg))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:10837, line:212, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(objectImgs)) ?
 objectImgs :
 (plt.Kernel.setLastLoc({offset:10867, line:212, span:17, id:"<unknown>"}) && plt.Kernel.list([objectImgs])))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:10762, line:211, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(targetImgs)) ?
 targetImgs :
 (plt.Kernel.setLastLoc({offset:10792, line:211, span:17, id:"<unknown>"}) && plt.Kernel.list([targetImgs])))]),                    [])); };
var sq = function(x) { return (plt.Kernel.setLastLoc({offset:11506, line:226, span:7, id:"<unknown>"}) && plt.Kernel._star_([x,x])); };
var sine = function(x) { return (plt.Kernel.setLastLoc({offset:11559, line:228, span:22, id:"<unknown>"}) && plt.Kernel.sin((plt.Kernel.setLastLoc({offset:11564, line:228, span:16, id:"<unknown>"}) && plt.Kernel._star_([x,(plt.Kernel.setLastLoc({offset:11569, line:228, span:10, id:"<unknown>"}) && plt.Kernel._slash_(plt.Kernel.pi, [_SHARED[86]]))])))); };
var cosine = function(x) { return (plt.Kernel.setLastLoc({offset:11631, line:230, span:22, id:"<unknown>"}) && plt.Kernel.cos((plt.Kernel.setLastLoc({offset:11636, line:230, span:16, id:"<unknown>"}) && plt.Kernel._star_([x,(plt.Kernel.setLastLoc({offset:11641, line:230, span:10, id:"<unknown>"}) && plt.Kernel._slash_(plt.Kernel.pi, [_SHARED[86]]))])))); };
var tangent = function(x) { return (plt.Kernel.setLastLoc({offset:11705, line:232, span:22, id:"<unknown>"}) && plt.Kernel.tan((plt.Kernel.setLastLoc({offset:11710, line:232, span:16, id:"<unknown>"}) && plt.Kernel._star_([x,(plt.Kernel.setLastLoc({offset:11715, line:232, span:10, id:"<unknown>"}) && plt.Kernel._slash_(plt.Kernel.pi, [_SHARED[86]]))])))); };_SHARED[21] = (plt.types.Rational.makeInstance(7, 1));
_SHARED[2] = (plt.types.Rational.makeInstance(480, 1));
_SHARED[27] = (plt.types.String.makeInstance("bottom"));
_SHARED[3] = (plt.types.String.makeInstance("gray"));
_SHARED[8] = (plt.types.String.makeInstance("solid"));
_SHARED[4] = (plt.types.String.makeInstance("white"));
_SHARED[9] = (plt.types.String.makeInstance("yellow"));
_SHARED[26] = (plt.types.String.makeInstance("top"));
_SHARED[11] = (plt.types.String.makeInstance("left"));
_SHARED[29] = (plt.types.String.makeInstance("right"));
_SHARED[32] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[24] = (plt.types.String.makeInstance("    score:"));
_SHARED[10] = (plt.types.String.makeInstance("black"));
_SHARED[1] = (plt.types.Rational.makeInstance(640, 1));
_SHARED[35] = (plt.types.String.makeInstance(" "));
_SHARED[13] = (plt.types.Rational.makeInstance(500, 1));
_SHARED[63] = (plt.types.Rational.makeInstance(50, 1));
_SHARED[84] = (plt.types.Rational.makeInstance(320, 1));
_SHARED[85] = (plt.types.Rational.makeInstance(400, 1));
_SHARED[64] = (plt.types.Rational.makeInstance(100, 1));
_SHARED[86] = (plt.types.Rational.makeInstance(180, 1));
_SHARED[6] = (plt.types.Rational.makeInstance(20, 1));
_SHARED[7] = (plt.types.Rational.makeInstance(30, 1));
_SHARED[20] = (plt.types.Rational.makeInstance(10, 1));
_SHARED[23] = (plt.types.Rational.makeInstance(1, 4));
_SHARED[22] = (plt.types.Rational.makeInstance(3, 2));
_SHARED[5] = (plt.types.Rational.makeInstance(5, 1));
_SHARED[68] = (plt.types.Rational.makeInstance(2, 1));
_SHARED[25] = (plt.types.Rational.makeInstance(1, 1));
_SHARED[33] = (plt.types.Rational.makeInstance(-1, 1));
_SHARED[12] = (plt.types.Rational.makeInstance(0, 1));
_SHARED[53] = (plt.types.Rational.makeInstance(1, 10));
_SHARED[81] = (plt.types.Rational.makeInstance(-200, 1));

        ((function (toplevel_dash_expression_dash_show0) { 
WIDTH = _SHARED[1];
HEIGHT = _SHARED[2];
EXPLOSION_dash_COLOR = _SHARED[3];
TITLE_dash_COLOR = _SHARED[4];
PROJECTILE_dash_IMG = (plt.Kernel.setLastLoc({offset:1007, line:29, span:31, id:"<unknown>"}) && plt.world.Kernel.star(_SHARED[5],_SHARED[6],_SHARED[7],_SHARED[8],_SHARED[9]));
BACKGROUND = (plt.Kernel.setLastLoc({offset:1059, line:30, span:40, id:"<unknown>"}) && plt.world.Kernel.rectangle(WIDTH,HEIGHT,_SHARED[8],_SHARED[10]));
DIRECTION = _SHARED[11];
score = _SHARED[12];



being_dash_x = (plt.Kernel.setLastLoc({offset:1599, line:45, span:27, id:"<unknown>"}) && plt.Kernel.compose([(plt.types.liftToplevelToFunctionValue(plt.Kernel.posn_dash_x,(plt.types.String.makeInstance("posn-x")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(being_dash_posn,(plt.types.String.makeInstance("being-posn")),1,(plt.types.Rational.makeInstance(1, 1))))]));
being_dash_y = (plt.Kernel.setLastLoc({offset:1644, line:46, span:27, id:"<unknown>"}) && plt.Kernel.compose([(plt.types.liftToplevelToFunctionValue(plt.Kernel.posn_dash_y,(plt.types.String.makeInstance("posn-y")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(being_dash_posn,(plt.types.String.makeInstance("being-posn")),1,(plt.types.Rational.makeInstance(1, 1))))]));














 }))(plt.Kernel.identity);
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["score"] = score;
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["sq"] = sq;
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["test_dash_frame"] = test_dash_frame;
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["tangent"] = tangent;
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["sine"] = sine;
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["START"] = START;
plt._MODULES["bootstrap-teachpack.js"].EXPORTS["cosine"] = cosine;
     }());
}
