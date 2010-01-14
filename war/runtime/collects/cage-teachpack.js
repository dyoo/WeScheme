if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["cage-teachpack.js"]) == 'undefined') {
    plt._MODULES["cage-teachpack.js"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {}};
    (function() {
var _SHARED = {};
var WIDTH; 
var HEIGHT; 
var source; 
var butterfly; 
var world = function (x,y) { plt.types.Struct.call(this, "make-world", [x,y]);this.x = x;
this.y = y; };
world.prototype = new plt.types.Struct();

var make_dash_world = function (id0,id1) { return new world(id0,id1); };
var world_dash_x = function(obj) {
     if (world_question_ (obj)) {
        return obj.x;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-x: not a world: ~s', [obj]));
     }
};

var world_dash_y = function(obj) {
     if (world_question_ (obj)) {
        return obj.y;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-y: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_x_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.x = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_x_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_y_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.y = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_y_bang_: not a world: ~s', [obj]));
     }
};

var world_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof world; };

var move = function(w, key) { return ((plt.Kernel.setLastLoc({offset:804, line:32, span:18, id:"<unknown>"}) && plt.world.Kernel.isKeyEqual(key,_SHARED[6])) ?
 (plt.Kernel.setLastLoc({offset:823, line:32, span:43, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:835, line:32, span:18, id:"<unknown>"}) && plt.Kernel._dash_((plt.Kernel.setLastLoc({offset:838, line:32, span:11, id:"<unknown>"}) && world_dash_x(w)), [_SHARED[7]])),(plt.Kernel.setLastLoc({offset:854, line:32, span:11, id:"<unknown>"}) && world_dash_y(w)))) :
 ((plt.Kernel.setLastLoc({offset:873, line:33, span:19, id:"<unknown>"}) && plt.world.Kernel.isKeyEqual(key,_SHARED[8])) ?
 (plt.Kernel.setLastLoc({offset:893, line:33, span:43, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:905, line:33, span:18, id:"<unknown>"}) && plt.Kernel._plus_([(plt.Kernel.setLastLoc({offset:908, line:33, span:11, id:"<unknown>"}) && world_dash_x(w)),_SHARED[7]])),(plt.Kernel.setLastLoc({offset:924, line:33, span:11, id:"<unknown>"}) && world_dash_y(w)))) :
 ((plt.Kernel.setLastLoc({offset:943, line:34, span:18, id:"<unknown>"}) && plt.world.Kernel.isKeyEqual(key,_SHARED[9])) ?
 (plt.Kernel.setLastLoc({offset:962, line:34, span:43, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:974, line:34, span:11, id:"<unknown>"}) && world_dash_x(w)),(plt.Kernel.setLastLoc({offset:986, line:34, span:18, id:"<unknown>"}) && plt.Kernel._dash_((plt.Kernel.setLastLoc({offset:989, line:34, span:11, id:"<unknown>"}) && world_dash_y(w)), [_SHARED[7]])))) :
 ((plt.Kernel.setLastLoc({offset:1012, line:35, span:16, id:"<unknown>"}) && plt.world.Kernel.isKeyEqual(key,_SHARED[10])) ?
 (plt.Kernel.setLastLoc({offset:1029, line:35, span:43, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:1041, line:35, span:11, id:"<unknown>"}) && world_dash_x(w)),(plt.Kernel.setLastLoc({offset:1053, line:35, span:18, id:"<unknown>"}) && plt.Kernel._plus_([(plt.Kernel.setLastLoc({offset:1056, line:35, span:11, id:"<unknown>"}) && world_dash_y(w)),_SHARED[7]])))) :
 (plt.types.Logic.TRUE ?
 w :
 (plt.Kernel.setLastLoc({offset:793, line:31, span:294, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[11]))))))); };
var draw_dash_world = function(w) { return (plt.Kernel.setLastLoc({offset:1280, line:43, span:127, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args12) {
var draw_dash_butterfly = args12[0];  return (plt.Kernel.setLastLoc({offset:1417, line:45, span:409, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args13) {
var draw_dash_text = args13[0];  return (plt.Kernel.setLastLoc({offset:1832, line:52, span:59, id:"<unknown>"}) && plt.Kernel.apply(draw_dash_butterfly,                     plt.Kernel.list([w, (plt.Kernel.setLastLoc({offset:1850, line:52, span:40, id:"<unknown>"}) && plt.Kernel.apply(draw_dash_text,                     plt.Kernel.list([w, (plt.Kernel.setLastLoc({offset:1863, line:52, span:26, id:"<unknown>"}) && plt.world.Kernel.emptyScene(WIDTH,HEIGHT))]),                    []))]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args14) {
var w = args14[0];
var scene = args14[1];  return (plt.Kernel.setLastLoc({offset:1468, line:46, span:356, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:1481, line:46, span:224, id:"<unknown>"}) && plt.world.Kernel.text((plt.Kernel.setLastLoc({offset:1487, line:46, span:166, id:"<unknown>"}) && plt.Kernel.string_dash_append([_SHARED[15],(plt.Kernel.setLastLoc({offset:1519, line:46, span:28, id:"<unknown>"}) && plt.Kernel.number_dash__greaterthan_string((plt.Kernel.setLastLoc({offset:1535, line:46, span:11, id:"<unknown>"}) && world_dash_x(w)))),_SHARED[16],(plt.Kernel.setLastLoc({offset:1624, line:47, span:28, id:"<unknown>"}) && plt.Kernel.number_dash__greaterthan_string((plt.Kernel.setLastLoc({offset:1640, line:47, span:11, id:"<unknown>"}) && world_dash_y(w))))])),_SHARED[17],(plt.types.Symbol.makeInstance("black")))),_SHARED[18],_SHARED[19],scene)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args20) {
var w = args20[0];
var scene = args20[1];  return (plt.Kernel.setLastLoc({offset:1341, line:44, span:64, id:"<unknown>"}) && plt.world.Kernel.placeImage(butterfly,(plt.Kernel.setLastLoc({offset:1364, line:44, span:11, id:"<unknown>"}) && world_dash_x(w)),(plt.Kernel.setLastLoc({offset:1376, line:44, span:22, id:"<unknown>"}) && plt.Kernel._dash_(HEIGHT, [(plt.Kernel.setLastLoc({offset:1386, line:44, span:11, id:"<unknown>"}) && world_dash_y(w))])),scene)); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); };
var start = function(offscreen_question_) { return (plt.Kernel.setLastLoc({offset:1932, line:56, span:291, id:"<unknown>"}) && plt.Kernel.apply(((function() {
   var _result_ = (function(args21) {
var update = args21[0];  return (plt.Kernel.setLastLoc({offset:2229, line:62, span:107, id:"<unknown>"}) && plt.world.MobyJsworld.bigBang((plt.Kernel.setLastLoc({offset:2242, line:62, span:20, id:"<unknown>"}) && make_dash_world(_SHARED[2],_SHARED[22])), [(plt.Kernel.setLastLoc({offset:2280, line:63, span:15, id:"<unknown>"}) && plt.world.config.Kernel.onKey(update)),(plt.Kernel.setLastLoc({offset:2313, line:64, span:22, id:"<unknown>"}) && plt.world.config.Kernel.onRedraw((plt.types.liftToplevelToFunctionValue(draw_dash_world,(plt.types.String.makeInstance("draw-world")),1,(plt.types.Rational.makeInstance(1, 1))))))])); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(1, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })()),                    plt.Kernel.list([((function() {
   var _result_ = (function(args23) {
var w = args23[0];
var k = args23[1];  return ((plt.Kernel.setLastLoc({offset:2003, line:58, span:9, id:"<unknown>"}) && plt.Kernel.char_question_(k)) ?
 w :
 ((plt.Kernel.setLastLoc({offset:2038, line:59, span:123, id:"<unknown>"}) && plt.Kernel.apply(offscreen_question_,                     plt.Kernel.list([(plt.Kernel.setLastLoc({offset:2050, line:59, span:37, id:"<unknown>"}) && world_dash_x((plt.Kernel.setLastLoc({offset:2059, line:59, span:27, id:"<unknown>"}) && move(w,(plt.Kernel.setLastLoc({offset:2067, line:59, span:18, id:"<unknown>"}) && plt.Kernel.symbol_dash__greaterthan_string(k)))))), (plt.Kernel.setLastLoc({offset:2123, line:60, span:37, id:"<unknown>"}) && world_dash_y((plt.Kernel.setLastLoc({offset:2132, line:60, span:27, id:"<unknown>"}) && move(w,(plt.Kernel.setLastLoc({offset:2140, line:60, span:18, id:"<unknown>"}) && plt.Kernel.symbol_dash__greaterthan_string(k))))))]),                    [])) ?
 w :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:2192, line:61, span:27, id:"<unknown>"}) && move(w,(plt.Kernel.setLastLoc({offset:2200, line:61, span:18, id:"<unknown>"}) && plt.Kernel.symbol_dash__greaterthan_string(k)))) :
 (plt.Kernel.setLastLoc({offset:1974, line:57, span:247, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[11]))))); });_result_._eqHashCode = plt.types.makeEqHashCode();_result_.toWrittenString = function (cache) { return '<function:lambda>'; };_result_.isEqual = function(other, cache) { return this === other; };_result_.procedureArity = (plt.types.Rational.makeInstance(2, 1));_result_.toDisplayedString = _result_.toWrittenString;return _result_;  })())]),                    [])); };_SHARED[3] = (plt.types.String.makeInstance("http://www.wescheme.org/images/teachpacks/butterfly.png"));
_SHARED[8] = (plt.types.String.makeInstance("right"));
_SHARED[10] = (plt.types.String.makeInstance("up"));
_SHARED[15] = (plt.types.String.makeInstance("x-coordinate: "));
_SHARED[6] = (plt.types.String.makeInstance("left"));
_SHARED[18] = (plt.types.Rational.makeInstance(60, 1));
_SHARED[2] = (plt.types.Rational.makeInstance(200, 1));
_SHARED[11] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[9] = (plt.types.String.makeInstance("down"));
_SHARED[1] = (plt.types.Rational.makeInstance(400, 1));
_SHARED[16] = (plt.types.String.makeInstance("   y-coordinate: "));
_SHARED[22] = (plt.types.Rational.makeInstance(100, 1));
_SHARED[7] = (plt.types.Rational.makeInstance(10, 1));
_SHARED[17] = (plt.types.Rational.makeInstance(14, 1));
_SHARED[4] = (plt.types.Rational.makeInstance(2, 1));
_SHARED[19] = (plt.types.Rational.makeInstance(0, 1));

        ((function (toplevel_dash_expression_dash_show0) { 
WIDTH = _SHARED[1];
HEIGHT = _SHARED[2];
source = (plt.Kernel.setLastLoc({offset:367, line:19, span:74, id:"<unknown>"}) && plt.world.Kernel.openImageUrl(_SHARED[3]));
butterfly = (plt.Kernel.setLastLoc({offset:530, line:22, span:75, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(source,(plt.Kernel.setLastLoc({offset:550, line:22, span:26, id:"<unknown>"}) && plt.Kernel._slash_((plt.Kernel.setLastLoc({offset:553, line:22, span:20, id:"<unknown>"}) && plt.world.Kernel.imageWidth(source)), [_SHARED[4]])),(plt.Kernel.setLastLoc({offset:577, line:22, span:27, id:"<unknown>"}) && plt.Kernel._slash_((plt.Kernel.setLastLoc({offset:580, line:22, span:21, id:"<unknown>"}) && plt.world.Kernel.imageHeight(source)), [_SHARED[4]]))));



 }))(plt.Kernel.identity);
plt._MODULES["cage-teachpack.js"].EXPORTS["start"] = start;
     }());
}
