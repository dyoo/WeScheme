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
var spacing = function() { return (plt.Kernel.setLastLoc({offset:1176, line:34, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[13])); };
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
var posn_dash__greaterthan_point = function(posn) { return (plt.Kernel.setLastLoc({offset:1730, line:49, span:54, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:1741, line:49, span:13, id:"<unknown>"}) && plt.Kernel.posn_dash_x(posn)),(plt.Kernel.setLastLoc({offset:1755, line:49, span:28, id:"<unknown>"}) && plt.Kernel._plus_([HEIGHT,(plt.Kernel.setLastLoc({offset:1765, line:49, span:17, id:"<unknown>"}) && plt.Kernel._dash_((plt.Kernel.setLastLoc({offset:1768, line:49, span:13, id:"<unknown>"}) && plt.Kernel.posn_dash_y(posn)), []))])))); };
var draw_dash_being = function(being, background) { return (plt.Kernel.setLastLoc({offset:1933, line:54, span:182, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args16) {
var screen_dash_posn = args16[0];  return (plt.Kernel.setLastLoc({offset:1991, line:55, span:123, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:2004, line:55, span:21, id:"<unknown>"}) && being_dash_costume(being)),(plt.Kernel.setLastLoc({offset:2044, line:56, span:20, id:"<unknown>"}) && plt.Kernel.posn_dash_x(screen_dash_posn)),(plt.Kernel.setLastLoc({offset:2065, line:56, span:20, id:"<unknown>"}) && plt.Kernel.posn_dash_y(screen_dash_posn)),background)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:1952, line:54, span:32, id:"<unknown>"}) && posn_dash__greaterthan_point((plt.Kernel.setLastLoc({offset:1965, line:54, span:18, id:"<unknown>"}) && being_dash_posn(being))))]),                    [])); };
var draw_dash_world = function(w) { return (plt.Kernel.setLastLoc({offset:2261, line:62, span:92, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args17) {
var score_dash_string = args17[0];  return (plt.Kernel.setLastLoc({offset:2363, line:63, span:251, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args18) {
var player = args18[0];  return (plt.Kernel.setLastLoc({offset:2624, line:67, span:93, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args19) {
var all_dash_beings = args19[0];  return (plt.Kernel.setLastLoc({offset:2723, line:68, span:130, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:2736, line:68, span:34, id:"<unknown>"}) && plt.world.Kernel.text(score_dash_string,_SHARED[6],TITLE_dash_COLOR)),_SHARED[20],_SHARED[12],(plt.Kernel.setLastLoc({offset:2794, line:69, span:58, id:"<unknown>"}) && plt.Kernel.foldl((plt.types.liftToplevelToFunctionValue(draw_dash_being,(plt.types.String.makeInstance("draw-being")),2,(plt.types.Rational.makeInstance(2, 1)))),(plt.Kernel.setLastLoc({offset:2812, line:69, span:28, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(BACKGROUND,_SHARED[12],_SHARED[12])), [all_dash_beings])))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:2636, line:67, span:80, id:"<unknown>"}) && plt.Kernel.append([(plt.Kernel.setLastLoc({offset:2644, line:67, span:17, id:"<unknown>"}) && world_dash_targets(w)),(plt.Kernel.setLastLoc({offset:2662, line:67, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:2680, line:67, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),(plt.Kernel.setLastLoc({offset:2702, line:67, span:13, id:"<unknown>"}) && plt.Kernel.list([player]))]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:2375, line:63, span:21, id:"<unknown>"}) && plt.Kernel._greaterthan_((plt.Kernel.setLastLoc({offset:2378, line:63, span:15, id:"<unknown>"}) && world_dash_timer(w)),_SHARED[12], [])) ?
 (plt.Kernel.setLastLoc({offset:2418, line:64, span:156, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:2430, line:64, span:29, id:"<unknown>"}) && being_dash_posn((plt.Kernel.setLastLoc({offset:2442, line:64, span:16, id:"<unknown>"}) && world_dash_player(w)))),(plt.Kernel.setLastLoc({offset:2493, line:65, span:80, id:"<unknown>"}) && plt.world.Kernel.star(_SHARED[21],(plt.Kernel.setLastLoc({offset:2501, line:65, span:23, id:"<unknown>"}) && plt.Kernel._star_([_SHARED[22],(plt.Kernel.setLastLoc({offset:2508, line:65, span:15, id:"<unknown>"}) && world_dash_timer(w))])),(plt.Kernel.setLastLoc({offset:2525, line:65, span:23, id:"<unknown>"}) && plt.Kernel._star_([_SHARED[23],(plt.Kernel.setLastLoc({offset:2532, line:65, span:15, id:"<unknown>"}) && world_dash_timer(w))])),_SHARED[8],EXPLOSION_dash_COLOR)))) :
 (plt.Kernel.setLastLoc({offset:2596, line:66, span:16, id:"<unknown>"}) && world_dash_player(w)))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:2275, line:62, span:77, id:"<unknown>"}) && plt.Kernel.string_dash_append([(plt.Kernel.setLastLoc({offset:2290, line:62, span:15, id:"<unknown>"}) && world_dash_title(w)),_SHARED[24],(plt.Kernel.setLastLoc({offset:2319, line:62, span:32, id:"<unknown>"}) && plt.Kernel.number_dash__greaterthan_string((plt.Kernel.setLastLoc({offset:2335, line:62, span:15, id:"<unknown>"}) && world_dash_score(w))))]))]),                    [])); };
var wrap_dash_update = function(f) { return (((plt.Kernel.setLastLoc({offset:3048, line:76, span:25, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:3051, line:76, span:19, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(f)),_SHARED[25], []))&&(plt.Kernel.setLastLoc({offset:3074, line:76, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:3092, line:76, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[26],_SHARED[27]]))))) ?
 ((function() {
   var _result_ = (function(args28) {
var b = args28[0];  return (plt.Kernel.setLastLoc({offset:3133, line:77, span:70, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:3145, line:77, span:39, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3156, line:77, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    [])),(plt.Kernel.setLastLoc({offset:3168, line:77, span:15, id:"<unknown>"}) && plt.Kernel.apply(f,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:3171, line:77, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    []))]),                    [])))),(plt.Kernel.setLastLoc({offset:3185, line:77, span:17, id:"<unknown>"}) && being_dash_costume(b)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (((plt.Kernel.setLastLoc({offset:3216, line:78, span:25, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:3219, line:78, span:19, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(f)),_SHARED[25], []))&&(plt.Kernel.setLastLoc({offset:3242, line:78, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:3260, line:78, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[11],_SHARED[29]]))))) ?
 ((function() {
   var _result_ = (function(args30) {
var b = args30[0];  return (plt.Kernel.setLastLoc({offset:3301, line:79, span:70, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:3313, line:79, span:39, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3324, line:79, span:15, id:"<unknown>"}) && plt.Kernel.apply(f,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:3327, line:79, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    []))]),                    [])),(plt.Kernel.setLastLoc({offset:3340, line:79, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    [])))),(plt.Kernel.setLastLoc({offset:3353, line:79, span:17, id:"<unknown>"}) && being_dash_costume(b)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.types.Logic.TRUE ?
 ((function() {
   var _result_ = (function(args31) {
var b = args31[0];  return (plt.Kernel.setLastLoc({offset:3396, line:80, span:58, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:3408, line:80, span:27, id:"<unknown>"}) && plt.Kernel.apply(f,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:3411, line:80, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    [])), (plt.Kernel.setLastLoc({offset:3423, line:80, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    []))]),                    [])),(plt.Kernel.setLastLoc({offset:3436, line:80, span:17, id:"<unknown>"}) && being_dash_costume(b)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.Kernel.setLastLoc({offset:3032, line:75, span:425, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32]))))); };
var reset = function(being) { return (plt.Kernel.setLastLoc({offset:3591, line:85, span:375, id:"<unknown>"}) && make_dash_being(((plt.Kernel.setLastLoc({offset:3619, line:87, span:27, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[11], [])) ?
 (plt.Kernel.setLastLoc({offset:3647, line:87, span:44, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3658, line:87, span:16, id:"<unknown>"}) && plt.Kernel._star_([(plt.Kernel.setLastLoc({offset:3661, line:87, span:9, id:"<unknown>"}) && spacing()),_SHARED[33]])),(plt.Kernel.setLastLoc({offset:3675, line:87, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))) :
 ((plt.Kernel.setLastLoc({offset:3699, line:88, span:28, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[29], [])) ?
 (plt.Kernel.setLastLoc({offset:3728, line:88, span:47, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3739, line:88, span:19, id:"<unknown>"}) && plt.Kernel._plus_([(plt.Kernel.setLastLoc({offset:3742, line:88, span:9, id:"<unknown>"}) && spacing()),WIDTH])),(plt.Kernel.setLastLoc({offset:3759, line:88, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))) :
 ((plt.Kernel.setLastLoc({offset:3783, line:89, span:26, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[26], [])) ?
 (plt.Kernel.setLastLoc({offset:3810, line:89, span:47, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3821, line:89, span:14, id:"<unknown>"}) && plt.Kernel.random(WIDTH)),(plt.Kernel.setLastLoc({offset:3836, line:89, span:20, id:"<unknown>"}) && plt.Kernel._plus_([(plt.Kernel.setLastLoc({offset:3839, line:89, span:9, id:"<unknown>"}) && spacing()),HEIGHT])))) :
 ((plt.Kernel.setLastLoc({offset:3865, line:90, span:29, id:"<unknown>"}) && plt.Kernel.string_equal__question_(DIRECTION,_SHARED[27], [])) ?
 (plt.Kernel.setLastLoc({offset:3895, line:90, span:43, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:3906, line:90, span:14, id:"<unknown>"}) && plt.Kernel.random(WIDTH)),(plt.Kernel.setLastLoc({offset:3921, line:90, span:16, id:"<unknown>"}) && plt.Kernel._star_([(plt.Kernel.setLastLoc({offset:3924, line:90, span:9, id:"<unknown>"}) && spacing()),_SHARED[33]])))) :
 (plt.Kernel.setLastLoc({offset:3606, line:86, span:334, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))))),(plt.Kernel.setLastLoc({offset:3944, line:91, span:21, id:"<unknown>"}) && being_dash_costume(being)))); };
var move_dash_all = function(beings, move, in_dash_domain_question_) { return (plt.Kernel.setLastLoc({offset:4166, line:96, span:86, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args34) {
var b = args34[0];  return ((plt.Kernel.setLastLoc({offset:4187, line:96, span:36, id:"<unknown>"}) && plt.Kernel.apply(in_dash_domain_question_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:4199, line:96, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b]),                    [])), (plt.Kernel.setLastLoc({offset:4211, line:96, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b]),                    []))]),                    [])) ?
 (plt.Kernel.setLastLoc({offset:4224, line:96, span:8, id:"<unknown>"}) && plt.Kernel.apply(move,                     plt.Kernel.list([b]),                    [])) :
 (plt.Kernel.setLastLoc({offset:4233, line:96, span:9, id:"<unknown>"}) && reset(b))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [beings])); };
var keypress = function(w, key, update_dash_player) { return ((plt.Kernel.setLastLoc({offset:4528, line:103, span:18, id:"<unknown>"}) && plt.Kernel.string_equal__question_(key,_SHARED[35], [])) ?
 (plt.Kernel.setLastLoc({offset:4553, line:104, span:481, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:4565, line:104, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:4600, line:105, span:17, id:"<unknown>"}) && world_dash_targets(w)),(plt.Kernel.setLastLoc({offset:4635, line:106, span:16, id:"<unknown>"}) && world_dash_player(w)),(plt.Kernel.setLastLoc({offset:4669, line:107, span:235, id:"<unknown>"}) && plt.Kernel.cons((plt.Kernel.setLastLoc({offset:4675, line:107, span:57, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:4687, line:107, span:29, id:"<unknown>"}) && being_dash_posn((plt.Kernel.setLastLoc({offset:4699, line:107, span:16, id:"<unknown>"}) && world_dash_player(w)))),PROJECTILE_dash_IMG)),((plt.Kernel.setLastLoc({offset:4760, line:108, span:37, id:"<unknown>"}) && plt.Kernel._equal_(_SHARED[6],(plt.Kernel.setLastLoc({offset:4766, line:108, span:30, id:"<unknown>"}) && plt.Kernel.length((plt.Kernel.setLastLoc({offset:4774, line:108, span:21, id:"<unknown>"}) && world_dash_projectiles(w)))), [])) ?
 (plt.Kernel.setLastLoc({offset:4825, line:109, span:28, id:"<unknown>"}) && plt.Kernel.rest((plt.Kernel.setLastLoc({offset:4831, line:109, span:21, id:"<unknown>"}) && world_dash_projectiles(w)))) :
 (plt.Kernel.setLastLoc({offset:4881, line:110, span:21, id:"<unknown>"}) && world_dash_projectiles(w))))),(plt.Kernel.setLastLoc({offset:4922, line:111, span:12, id:"<unknown>"}) && world_dash_bg(w)),(plt.Kernel.setLastLoc({offset:4952, line:112, span:15, id:"<unknown>"}) && world_dash_score(w)),(plt.Kernel.setLastLoc({offset:4985, line:113, span:15, id:"<unknown>"}) && world_dash_title(w)),(plt.Kernel.setLastLoc({offset:5018, line:114, span:15, id:"<unknown>"}) && world_dash_timer(w)))) :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:5051, line:116, span:287, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:5063, line:116, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:5098, line:117, span:17, id:"<unknown>"}) && world_dash_targets(w)),(plt.Kernel.setLastLoc({offset:5133, line:118, span:36, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:5148, line:118, span:16, id:"<unknown>"}) && world_dash_player(w)), key]),                    [])),(plt.Kernel.setLastLoc({offset:5187, line:119, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),(plt.Kernel.setLastLoc({offset:5226, line:120, span:12, id:"<unknown>"}) && world_dash_bg(w)),(plt.Kernel.setLastLoc({offset:5256, line:121, span:15, id:"<unknown>"}) && world_dash_score(w)),(plt.Kernel.setLastLoc({offset:5289, line:122, span:15, id:"<unknown>"}) && world_dash_title(w)),(plt.Kernel.setLastLoc({offset:5322, line:123, span:15, id:"<unknown>"}) && world_dash_timer(w)))) :
 (plt.Kernel.setLastLoc({offset:4517, line:102, span:823, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))); };
var any_dash_collide_question_ = function(collide_question_, t, beings) { return (plt.Kernel.setLastLoc({offset:5498, line:128, span:58, id:"<unknown>"}) && plt.Kernel.not((plt.Kernel.setLastLoc({offset:5503, line:128, span:52, id:"<unknown>"}) && plt.Kernel.empty_question_((plt.Kernel.setLastLoc({offset:5511, line:128, span:43, id:"<unknown>"}) && plt.Kernel.filter(((function() {
   var _result_ = (function(args36) {
var b = args36[0];  return (plt.Kernel.setLastLoc({offset:5531, line:128, span:14, id:"<unknown>"}) && plt.Kernel.apply(collide_question_,                     plt.Kernel.list([b, t]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),beings)))))); };
var check_dash_collision = function(beings, projectiles, collide_question_) { return (plt.Kernel.setLastLoc({offset:5778, line:133, span:158, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args37) {
var being = args37[0];  return ((plt.Kernel.setLastLoc({offset:5803, line:133, span:41, id:"<unknown>"}) && any_dash_collide_question_(collide_question_,being,projectiles)) ?
 (plt.Kernel.setLastLoc({offset:5873, line:134, span:13, id:"<unknown>"}) && reset(being)) :
 being); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [beings])); };
var START = function(title, title_dash_color, background, objectImgs, targetImgs, playerImg, projectileImg, direction, update_dash_player_star_, update_dash_target_star_, update_dash_object_star_, update_dash_projectile_star_, collide_star__question_, in_dash_domain_star__question_) { return (function(){(function(){ 
PROJECTILE_dash_IMG = projectileImg;})();
(function(){ 
TITLE_dash_COLOR = title_dash_color;})();
(function(){ 
BACKGROUND = background;})();
(function(){ 
DIRECTION = direction;})();
return (plt.Kernel.setLastLoc({offset:6665, line:152, span:68, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args38) {
var player = args38[0];  return (plt.Kernel.setLastLoc({offset:6745, line:153, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args39) {
var targetImgs = args39[0];  return (plt.Kernel.setLastLoc({offset:6822, line:154, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args40) {
var objectImgs = args40[0];  return (plt.Kernel.setLastLoc({offset:6899, line:155, span:98, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args41) {
var targets = args41[0];  return (plt.Kernel.setLastLoc({offset:7009, line:156, span:98, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args42) {
var objects = args42[0];  return (plt.Kernel.setLastLoc({offset:7119, line:157, span:19, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args43) {
var projectiles = args43[0];  return (plt.Kernel.setLastLoc({offset:7150, line:158, span:44, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args44) {
var update_dash_object = args44[0];  return (plt.Kernel.setLastLoc({offset:7206, line:159, span:44, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args45) {
var update_dash_target = args45[0];  return (plt.Kernel.setLastLoc({offset:7262, line:160, span:52, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args46) {
var update_dash_projectile = args46[0];  return (plt.Kernel.setLastLoc({offset:7326, line:161, span:808, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args47) {
var update_dash_player = args47[0];  return (plt.Kernel.setLastLoc({offset:8146, line:170, span:96, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args48) {
var in_dash_domain_question_ = args48[0];  return (plt.Kernel.setLastLoc({offset:8254, line:171, span:91, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args49) {
var collide_question_ = args49[0];  return (plt.Kernel.setLastLoc({offset:8357, line:172, span:214, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args50) {
var world = args50[0];  return (plt.Kernel.setLastLoc({offset:8583, line:177, span:55, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args51) {
var keypress_star_ = args51[0];  return (plt.Kernel.setLastLoc({offset:8650, line:178, span:1756, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args52) {
var update_dash_world = args52[0];  return (plt.Kernel.setLastLoc({offset:10414, line:203, span:144, id:"<unknown>"}) && plt.world.MobyJsworld.bigBang(world, [(plt.Kernel.setLastLoc({offset:10452, line:204, span:25, id:"<unknown>"}) && plt.world.config.Kernel.onTick(_SHARED[53],update_dash_world)),(plt.Kernel.setLastLoc({offset:10497, line:205, span:22, id:"<unknown>"}) && plt.world.config.Kernel.onRedraw((plt.types.liftToplevelToFunctionValue(draw_dash_world,(plt.types.String.makeInstance("draw-world")),1,(plt.types.Rational.makeInstance(1, 1)))))),(plt.Kernel.setLastLoc({offset:10539, line:206, span:18, id:"<unknown>"}) && plt.world.config.Kernel.onKey(keypress_star_))])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args54) {
var w = args54[0];  return (function(){(function(){ 
score = (plt.Kernel.setLastLoc({offset:8753, line:180, span:15, id:"<unknown>"}) && world_dash_score(w));})();
return (plt.Kernel.setLastLoc({offset:8806, line:181, span:167, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args55) {
var objects = args55[0];  return (plt.Kernel.setLastLoc({offset:9010, line:183, span:63, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args56) {
var targets = args56[0];  return (plt.Kernel.setLastLoc({offset:9110, line:184, span:75, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args57) {
var projectiles = args57[0];  return (plt.Kernel.setLastLoc({offset:9222, line:185, span:23, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args58) {
var score = args58[0];  return (plt.Kernel.setLastLoc({offset:9282, line:186, span:25, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args59) {
var player = args59[0];  return (plt.Kernel.setLastLoc({offset:9344, line:187, span:17, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args60) {
var bg = args60[0];  return (plt.Kernel.setLastLoc({offset:9398, line:188, span:23, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args61) {
var title = args61[0];  return (plt.Kernel.setLastLoc({offset:9458, line:189, span:23, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args62) {
var timer = args62[0];  return ((plt.Kernel.setLastLoc({offset:9554, line:191, span:11, id:"<unknown>"}) && plt.Kernel._greaterthan_(timer,_SHARED[12], [])) ?
 (plt.Kernel.setLastLoc({offset:9600, line:192, span:75, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,score,title,(plt.Kernel.setLastLoc({offset:9662, line:192, span:12, id:"<unknown>"}) && plt.Kernel._dash_(timer, [_SHARED[20]])))) :
 ((plt.Kernel.setLastLoc({offset:9711, line:193, span:38, id:"<unknown>"}) && any_dash_collide_question_(collide_question_,player,objects)) ?
 (function(){;
return (plt.Kernel.setLastLoc({offset:9893, line:196, span:73, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,(plt.Kernel.setLastLoc({offset:9943, line:196, span:12, id:"<unknown>"}) && plt.Kernel._dash_(score, [_SHARED[63]])),title,_SHARED[64]));})() :
 ((plt.Kernel.setLastLoc({offset:10003, line:197, span:38, id:"<unknown>"}) && any_dash_collide_question_(collide_question_,player,targets)) ?
 (function(){;
return (plt.Kernel.setLastLoc({offset:10187, line:200, span:73, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,(plt.Kernel.setLastLoc({offset:10237, line:200, span:12, id:"<unknown>"}) && plt.Kernel._plus_([score,_SHARED[6]])),title,_SHARED[64]));})() :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:10302, line:201, span:68, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,bg,score,title,timer)) :
 (plt.Kernel.setLastLoc({offset:9514, line:190, span:858, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9465, line:189, span:15, id:"<unknown>"}) && world_dash_timer(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9405, line:188, span:15, id:"<unknown>"}) && world_dash_title(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9348, line:187, span:12, id:"<unknown>"}) && world_dash_bg(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9290, line:186, span:16, id:"<unknown>"}) && world_dash_player(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9229, line:185, span:15, id:"<unknown>"}) && world_dash_score(w))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9123, line:184, span:61, id:"<unknown>"}) && move_dash_all((plt.Kernel.setLastLoc({offset:9133, line:184, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),update_dash_projectile,in_dash_domain_question_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:9019, line:183, span:53, id:"<unknown>"}) && move_dash_all((plt.Kernel.setLastLoc({offset:9029, line:183, span:17, id:"<unknown>"}) && world_dash_targets(w)),update_dash_target,in_dash_domain_question_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8815, line:181, span:157, id:"<unknown>"}) && move_dash_all((plt.Kernel.setLastLoc({offset:8825, line:181, span:66, id:"<unknown>"}) && check_dash_collision((plt.Kernel.setLastLoc({offset:8842, line:181, span:17, id:"<unknown>"}) && world_dash_objects(w)),(plt.Kernel.setLastLoc({offset:8860, line:181, span:21, id:"<unknown>"}) && world_dash_projectiles(w)),collide_question_)),update_dash_object,in_dash_domain_question_))]),                    []));})(); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args65) {
var w = args65[0];
var k = args65[1];  return (plt.Kernel.setLastLoc({offset:8608, line:177, span:28, id:"<unknown>"}) && keypress(w,k,update_dash_player)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8364, line:172, span:206, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,(plt.Kernel.setLastLoc({offset:8441, line:173, span:28, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(background,_SHARED[12],_SHARED[12])),_SHARED[12],title,_SHARED[12]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args66) {
var b1 = args66[0];
var b2 = args66[1];  return (plt.Kernel.setLastLoc({offset:8280, line:171, span:63, id:"<unknown>"}) && plt.Kernel.apply(collide_star__question_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8291, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b1]),                    [])), (plt.Kernel.setLastLoc({offset:8304, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b1]),                    [])), (plt.Kernel.setLastLoc({offset:8317, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([b2]),                    [])), (plt.Kernel.setLastLoc({offset:8330, line:171, span:12, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([b2]),                    []))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:8162, line:170, span:35, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:8165, line:170, span:29, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(in_dash_domain_star__question_)),_SHARED[25], [])) ?
 ((function() {
   var _result_ = (function(args67) {
var x = args67[0];
var y = args67[1];  return (plt.Kernel.setLastLoc({offset:8212, line:170, span:15, id:"<unknown>"}) && plt.Kernel.apply(in_dash_domain_star__question_,                     plt.Kernel.list([x]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 in_dash_domain_star__question_)]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(((plt.Kernel.setLastLoc({offset:7381, line:162, span:38, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:7384, line:162, span:32, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(update_dash_player_star_)),_SHARED[68], []))&&(plt.Kernel.setLastLoc({offset:7420, line:162, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:7438, line:162, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[11],_SHARED[29]]))))) ?
 ((function() {
   var _result_ = (function(args69) {
var p = args69[0];
var k = args69[1];  return (plt.Kernel.setLastLoc({offset:7505, line:163, span:140, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7517, line:163, span:54, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:7528, line:163, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([p]),                    [])),(plt.Kernel.setLastLoc({offset:7540, line:163, span:30, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player_star_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7556, line:163, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([p]),                    [])), k]),                    [])))),(plt.Kernel.setLastLoc({offset:7627, line:164, span:17, id:"<unknown>"}) && being_dash_costume(p)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (((plt.Kernel.setLastLoc({offset:7682, line:165, span:38, id:"<unknown>"}) && plt.Kernel._equal_((plt.Kernel.setLastLoc({offset:7685, line:165, span:32, id:"<unknown>"}) && plt.Kernel.procedure_dash_arity(update_dash_player_star_)),_SHARED[68], []))&&(plt.Kernel.setLastLoc({offset:7721, line:165, span:40, id:"<unknown>"}) && plt.Kernel.member(DIRECTION,(plt.Kernel.setLastLoc({offset:7739, line:165, span:21, id:"<unknown>"}) && plt.Kernel.list([_SHARED[26],_SHARED[27]]))))) ?
 ((function() {
   var _result_ = (function(args70) {
var p = args70[0];
var k = args70[1];  return (plt.Kernel.setLastLoc({offset:7806, line:166, span:140, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7818, line:166, span:54, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:7829, line:166, span:30, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player_star_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7845, line:166, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([p]),                    [])), k]),                    [])),(plt.Kernel.setLastLoc({offset:7860, line:166, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([p]),                    [])))),(plt.Kernel.setLastLoc({offset:7928, line:167, span:17, id:"<unknown>"}) && being_dash_costume(p)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.types.Logic.TRUE ?
 ((function() {
   var _result_ = (function(args71) {
var p = args71[0];
var k = args71[1];  return (plt.Kernel.setLastLoc({offset:7997, line:168, span:133, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:8009, line:168, span:42, id:"<unknown>"}) && plt.Kernel.apply(update_dash_player_star_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:8025, line:168, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_x,                     plt.Kernel.list([p]),                    [])), (plt.Kernel.setLastLoc({offset:8037, line:168, span:11, id:"<unknown>"}) && plt.Kernel.apply(being_dash_y,                     plt.Kernel.list([p]),                    [])), k]),                    [])),(plt.Kernel.setLastLoc({offset:8112, line:169, span:17, id:"<unknown>"}) && being_dash_costume(p)))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()) :
 (plt.Kernel.setLastLoc({offset:7341, line:161, span:792, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[32])))))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7281, line:160, span:32, id:"<unknown>"}) && wrap_dash_update(update_dash_projectile_star_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7221, line:159, span:28, id:"<unknown>"}) && wrap_dash_update(update_dash_target_star_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7165, line:158, span:28, id:"<unknown>"}) && wrap_dash_update(update_dash_object_star_))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([plt.types.Empty.EMPTY]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:7018, line:156, span:88, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args72) {
var o = args72[0];  return (plt.Kernel.setLastLoc({offset:7035, line:156, span:58, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:7047, line:156, span:43, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:7058, line:156, span:15, id:"<unknown>"}) && plt.Kernel._dash_(_SHARED[12], [(plt.Kernel.setLastLoc({offset:7063, line:156, span:9, id:"<unknown>"}) && spacing())])),(plt.Kernel.setLastLoc({offset:7074, line:156, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))),o)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [objectImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:6908, line:155, span:88, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args73) {
var t = args73[0];  return (plt.Kernel.setLastLoc({offset:6925, line:155, span:58, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:6937, line:155, span:43, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:6948, line:155, span:15, id:"<unknown>"}) && plt.Kernel._dash_(_SHARED[12], [(plt.Kernel.setLastLoc({offset:6953, line:155, span:9, id:"<unknown>"}) && spacing())])),(plt.Kernel.setLastLoc({offset:6964, line:155, span:15, id:"<unknown>"}) && plt.Kernel.random(HEIGHT)))),t)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [targetImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:6838, line:154, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(objectImgs)) ?
 objectImgs :
 (plt.Kernel.setLastLoc({offset:6868, line:154, span:17, id:"<unknown>"}) && plt.Kernel.list([objectImgs])))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:6761, line:153, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(targetImgs)) ?
 targetImgs :
 (plt.Kernel.setLastLoc({offset:6791, line:153, span:17, id:"<unknown>"}) && plt.Kernel.list([targetImgs])))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:6673, line:152, span:59, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:6685, line:152, span:36, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:6696, line:152, span:11, id:"<unknown>"}) && plt.Kernel._slash_(WIDTH, [_SHARED[68]])),(plt.Kernel.setLastLoc({offset:6708, line:152, span:12, id:"<unknown>"}) && plt.Kernel._slash_(HEIGHT, [_SHARED[68]])))),playerImg))]),                    []));})(); };
var test_dash_frame = function(title, bg, objectImgs, targetImgs, playerImg, projectileImgs) { return (plt.Kernel.setLastLoc({offset:10758, line:211, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args74) {
var targetImgs = args74[0];  return (plt.Kernel.setLastLoc({offset:10833, line:212, span:65, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args75) {
var objectImgs = args75[0];  return (plt.Kernel.setLastLoc({offset:10908, line:213, span:51, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args76) {
var player = args76[0];  return (plt.Kernel.setLastLoc({offset:10969, line:214, span:92, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args77) {
var targets = args77[0];  return (plt.Kernel.setLastLoc({offset:11071, line:215, span:92, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args78) {
var objects = args78[0];  return (plt.Kernel.setLastLoc({offset:11173, line:216, span:67, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args79) {
var projectiles = args79[0];  return (plt.Kernel.setLastLoc({offset:11250, line:217, span:200, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args80) {
var world = args80[0];  return (plt.Kernel.setLastLoc({offset:11456, line:222, span:18, id:"<unknown>"}) && draw_dash_world(world)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11257, line:217, span:192, id:"<unknown>"}) && make_dash_world(objects,targets,player,projectiles,(plt.Kernel.setLastLoc({offset:11332, line:218, span:20, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(bg,_SHARED[12],_SHARED[12])),_SHARED[64],title,_SHARED[12]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11186, line:216, span:53, id:"<unknown>"}) && plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11192, line:216, span:46, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:11204, line:216, span:18, id:"<unknown>"}) && plt.Kernel.make_dash_posn(_SHARED[81],_SHARED[12])),PROJECTILE_dash_IMG))]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:11080, line:215, span:82, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args82) {
var o = args82[0];  return (plt.Kernel.setLastLoc({offset:11097, line:215, span:52, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:11109, line:215, span:37, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:11120, line:215, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[1])),(plt.Kernel.setLastLoc({offset:11133, line:215, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[2])))),o)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [objectImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:10978, line:214, span:82, id:"<unknown>"}) && plt.Kernel.map(((function() {
   var _result_ = (function(args83) {
var t = args83[0];  return (plt.Kernel.setLastLoc({offset:10995, line:214, span:52, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:11007, line:214, span:37, id:"<unknown>"}) && plt.Kernel.make_dash_posn((plt.Kernel.setLastLoc({offset:11018, line:214, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[1])),(plt.Kernel.setLastLoc({offset:11031, line:214, span:12, id:"<unknown>"}) && plt.Kernel.random(_SHARED[2])))),t)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()), [targetImgs]))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:10916, line:213, span:42, id:"<unknown>"}) && make_dash_being((plt.Kernel.setLastLoc({offset:10928, line:213, span:19, id:"<unknown>"}) && plt.Kernel.make_dash_posn(_SHARED[84],_SHARED[85])),playerImg))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:10849, line:212, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(objectImgs)) ?
 objectImgs :
 (plt.Kernel.setLastLoc({offset:10879, line:212, span:17, id:"<unknown>"}) && plt.Kernel.list([objectImgs])))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((plt.Kernel.setLastLoc({offset:10774, line:211, span:18, id:"<unknown>"}) && plt.Kernel.list_question_(targetImgs)) ?
 targetImgs :
 (plt.Kernel.setLastLoc({offset:10804, line:211, span:17, id:"<unknown>"}) && plt.Kernel.list([targetImgs])))]),                    [])); };
var sq = function(x) { return (plt.Kernel.setLastLoc({offset:11518, line:226, span:7, id:"<unknown>"}) && plt.Kernel._star_([x,x])); };
var sine = function(x) { return (plt.Kernel.setLastLoc({offset:11571, line:228, span:22, id:"<unknown>"}) && plt.Kernel.sin((plt.Kernel.setLastLoc({offset:11576, line:228, span:16, id:"<unknown>"}) && plt.Kernel._star_([x,(plt.Kernel.setLastLoc({offset:11581, line:228, span:10, id:"<unknown>"}) && plt.Kernel._slash_(plt.Kernel.pi, [_SHARED[86]]))])))); };
var cosine = function(x) { return (plt.Kernel.setLastLoc({offset:11643, line:230, span:22, id:"<unknown>"}) && plt.Kernel.cos((plt.Kernel.setLastLoc({offset:11648, line:230, span:16, id:"<unknown>"}) && plt.Kernel._star_([x,(plt.Kernel.setLastLoc({offset:11653, line:230, span:10, id:"<unknown>"}) && plt.Kernel._slash_(plt.Kernel.pi, [_SHARED[86]]))])))); };
var tangent = function(x) { return (plt.Kernel.setLastLoc({offset:11717, line:232, span:22, id:"<unknown>"}) && plt.Kernel.tan((plt.Kernel.setLastLoc({offset:11722, line:232, span:16, id:"<unknown>"}) && plt.Kernel._star_([x,(plt.Kernel.setLastLoc({offset:11727, line:232, span:10, id:"<unknown>"}) && plt.Kernel._slash_(plt.Kernel.pi, [_SHARED[86]]))])))); };_SHARED[21] = (plt.types.Rational.makeInstance(7, 1));
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
PROJECTILE_dash_IMG = (plt.Kernel.setLastLoc({offset:991, line:29, span:31, id:"<unknown>"}) && plt.world.Kernel.star(_SHARED[5],_SHARED[6],_SHARED[7],_SHARED[8],_SHARED[9]));
BACKGROUND = (plt.Kernel.setLastLoc({offset:1043, line:30, span:40, id:"<unknown>"}) && plt.world.Kernel.rectangle(WIDTH,HEIGHT,_SHARED[8],_SHARED[10]));
DIRECTION = _SHARED[11];
score = _SHARED[12];



being_dash_x = (plt.Kernel.setLastLoc({offset:1583, line:45, span:27, id:"<unknown>"}) && plt.Kernel.compose([(plt.types.liftToplevelToFunctionValue(plt.Kernel.posn_dash_x,(plt.types.String.makeInstance("posn-x")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(being_dash_posn,(plt.types.String.makeInstance("being-posn")),1,(plt.types.Rational.makeInstance(1, 1))))]));
being_dash_y = (plt.Kernel.setLastLoc({offset:1628, line:46, span:27, id:"<unknown>"}) && plt.Kernel.compose([(plt.types.liftToplevelToFunctionValue(plt.Kernel.posn_dash_y,(plt.types.String.makeInstance("posn-y")),1,(plt.types.Rational.makeInstance(1, 1)))),(plt.types.liftToplevelToFunctionValue(being_dash_posn,(plt.types.String.makeInstance("being-posn")),1,(plt.types.Rational.makeInstance(1, 1))))]));














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
