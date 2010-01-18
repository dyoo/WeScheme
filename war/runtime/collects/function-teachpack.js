if (typeof(plt) == 'undefined') { plt = {}; }
if (typeof(plt._MODULES) == 'undefined') { plt._MODULES = {}; }
if (typeof(plt._MODULES["function-teachpack.js"]) == 'undefined') {
    plt._MODULES["function-teachpack.js"] =         { COMPILER_VERSION: "2.31",
	BINDINGS: {},
	EXPORTS : {}};
    (function() {
var _SHARED = {};
var WIDTH; 
var HEIGHT; 
var IMAGE0; 
var source; 
var ROCKET; 
var world = function (current_dash_height,rocket_dash_height) { plt.types.Struct.call(this, "make-world", [current_dash_height,rocket_dash_height]);this.current_dash_height = current_dash_height;
this.rocket_dash_height = rocket_dash_height; };
world.prototype = new plt.types.Struct();

var make_dash_world = function (id0,id1) { return new world(id0,id1); };
var world_dash_current_dash_height = function(obj) {
     if (world_question_ (obj)) {
        return obj.current_dash_height;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-current-height: not a world: ~s', [obj]));
     }
};

var world_dash_rocket_dash_height = function(obj) {
     if (world_question_ (obj)) {
        return obj.rocket_dash_height;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('world-rocket-height: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_current_dash_height_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.current_dash_height = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_current_dash_height_bang_: not a world: ~s', [obj]));
     }
};

var set_dash_world_dash_rocket_dash_height_bang_ = function(obj,newVal) {
	 if (world_question_ (obj)) {
		obj.rocket_dash_height = newVal;
           obj._fields[1] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_world_dash_rocket_dash_height_bang_: not a world: ~s', [obj]));
     }
};

var world_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof world; };

var draw_dash_world = function(w) { return (plt.Kernel.setLastLoc({offset:942, line:32, span:83, id:"<unknown>"}) && text_dash_add((plt.Kernel.setLastLoc({offset:952, line:32, span:50, id:"<unknown>"}) && plt.Kernel.apply((plt.Kernel.setLastLoc({offset:953, line:32, span:23, id:"<unknown>"}) && world_dash_rocket_dash_height(w)),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:977, line:32, span:24, id:"<unknown>"}) && world_dash_current_dash_height(w))]),                    [])),(plt.Kernel.setLastLoc({offset:1003, line:32, span:21, id:"<unknown>"}) && rocket_dash_add(w,IMAGE0)))); };
var text_dash_add = function(height, IMAGE0) { return (plt.Kernel.setLastLoc({offset:1144, line:37, span:140, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:1157, line:37, span:67, id:"<unknown>"}) && plt.world.Kernel.text((plt.Kernel.setLastLoc({offset:1163, line:37, span:50, id:"<unknown>"}) && plt.Kernel.string_dash_append([_SHARED[6],(plt.Kernel.setLastLoc({offset:1189, line:37, span:23, id:"<unknown>"}) && plt.Kernel.number_dash__greaterthan_string(height))])),_SHARED[7],(plt.types.Symbol.makeInstance("black")))),_SHARED[8],_SHARED[9],IMAGE0)); };
var rocket_dash_add = function(w, IMAGE0) { return ((plt.Kernel.setLastLoc({offset:1448, line:46, span:88, id:"<unknown>"}) && plt.Kernel._greaterthan__equal_((plt.Kernel.setLastLoc({offset:1452, line:46, span:21, id:"<unknown>"}) && plt.world.Kernel.imageHeight(ROCKET)),(plt.Kernel.setLastLoc({offset:1474, line:46, span:61, id:"<unknown>"}) && plt.Kernel._dash_(HEIGHT, [(plt.Kernel.setLastLoc({offset:1484, line:46, span:50, id:"<unknown>"}) && plt.Kernel.apply((plt.Kernel.setLastLoc({offset:1485, line:46, span:23, id:"<unknown>"}) && world_dash_rocket_dash_height(w)),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:1509, line:46, span:24, id:"<unknown>"}) && world_dash_current_dash_height(w))]),                    []))])), [])) ?
 (plt.Kernel.setLastLoc({offset:1542, line:47, span:35, id:"<unknown>"}) && plt.world.Kernel.placeImage(ROCKET,_SHARED[10],_SHARED[1],IMAGE0)) :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:1589, line:48, span:93, id:"<unknown>"}) && plt.world.Kernel.placeImage(ROCKET,_SHARED[10],(plt.Kernel.setLastLoc({offset:1613, line:48, span:61, id:"<unknown>"}) && plt.Kernel._dash_(HEIGHT, [(plt.Kernel.setLastLoc({offset:1623, line:48, span:50, id:"<unknown>"}) && plt.Kernel.apply((plt.Kernel.setLastLoc({offset:1624, line:48, span:23, id:"<unknown>"}) && world_dash_rocket_dash_height(w)),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:1648, line:48, span:24, id:"<unknown>"}) && world_dash_current_dash_height(w))]),                    []))])),IMAGE0)) :
 (plt.Kernel.setLastLoc({offset:1437, line:45, span:247, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[11])))); };
var tock = function(w, ke) { return (plt.Kernel.setLastLoc({offset:1809, line:54, span:81, id:"<unknown>"}) && make_dash_world((plt.Kernel.setLastLoc({offset:1821, line:54, span:30, id:"<unknown>"}) && plt.Kernel._plus_([_SHARED[12],(plt.Kernel.setLastLoc({offset:1826, line:54, span:24, id:"<unknown>"}) && world_dash_current_dash_height(w))])),(plt.Kernel.setLastLoc({offset:1866, line:55, span:23, id:"<unknown>"}) && world_dash_rocket_dash_height(w)))); };
var start = function(rocket_dash_height) { return (plt.Kernel.setLastLoc({offset:1926, line:59, span:109, id:"<unknown>"}) && plt.world.MobyJsworld.bigBang((plt.Kernel.setLastLoc({offset:1939, line:59, span:28, id:"<unknown>"}) && make_dash_world(_SHARED[9],rocket_dash_height)), [(plt.Kernel.setLastLoc({offset:1983, line:60, span:13, id:"<unknown>"}) && plt.world.config.Kernel.onKey((plt.types.liftToplevelToFunctionValue(tock,(plt.types.String.makeInstance("tock")),2,(plt.types.Rational.makeInstance(2, 1)))))),(plt.Kernel.setLastLoc({offset:2012, line:61, span:22, id:"<unknown>"}) && plt.world.config.Kernel.onRedraw((plt.types.liftToplevelToFunctionValue(draw_dash_world,(plt.types.String.makeInstance("draw-world")),1,(plt.types.Rational.makeInstance(1, 1))))))])); };_SHARED[10] = (plt.types.Rational.makeInstance(100, 1));
_SHARED[2] = (plt.types.Rational.makeInstance(600, 1));
_SHARED[11] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[3] = (plt.types.String.makeInstance("http://www.wescheme.org/images/teachpacks/rocket.png"));
_SHARED[6] = (plt.types.String.makeInstance("Height: "));
_SHARED[1] = (plt.types.Rational.makeInstance(200, 1));
_SHARED[7] = (plt.types.Rational.makeInstance(14, 1));
_SHARED[8] = (plt.types.Rational.makeInstance(60, 1));
_SHARED[12] = (plt.types.Rational.makeInstance(1, 1));
_SHARED[4] = (plt.types.Rational.makeInstance(2, 1));
_SHARED[9] = (plt.types.Rational.makeInstance(0, 1));

        ((function (toplevel_dash_expression_dash_show0) { 
WIDTH = _SHARED[1];
HEIGHT = _SHARED[2];
IMAGE0 = (plt.Kernel.setLastLoc({offset:431, line:17, span:26, id:"<unknown>"}) && plt.world.Kernel.emptyScene(WIDTH,HEIGHT));
source = (plt.Kernel.setLastLoc({offset:477, line:20, span:71, id:"<unknown>"}) && plt.world.Kernel.openImageUrl(_SHARED[3]));
ROCKET = (plt.Kernel.setLastLoc({offset:631, line:23, span:69, id:"<unknown>"}) && plt.world.Kernel.put_dash_pinhole(source,(plt.Kernel.setLastLoc({offset:651, line:23, span:26, id:"<unknown>"}) && plt.Kernel._slash_((plt.Kernel.setLastLoc({offset:654, line:23, span:20, id:"<unknown>"}) && plt.world.Kernel.imageWidth(source)), [_SHARED[4]])),(plt.Kernel.setLastLoc({offset:678, line:23, span:21, id:"<unknown>"}) && plt.world.Kernel.imageHeight(source))));





 }))(plt.Kernel.identity);
plt._MODULES["function-teachpack.js"].EXPORTS["start"] = start;
     }());
}
