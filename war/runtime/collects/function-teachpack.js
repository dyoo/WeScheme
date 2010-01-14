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
var draw_dash_world = function(w) { return (plt.Kernel.setLastLoc({offset:887, line:29, span:50, id:"<unknown>"}) && text_dash_add((plt.Kernel.setLastLoc({offset:897, line:29, span:17, id:"<unknown>"}) && plt.Kernel.apply((plt.Kernel.setLastLoc({offset:898, line:29, span:7, id:"<unknown>"}) && plt.Kernel.cdr(w)),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:906, line:29, span:7, id:"<unknown>"}) && plt.Kernel.car(w))]),                    [])),(plt.Kernel.setLastLoc({offset:915, line:29, span:21, id:"<unknown>"}) && rocket_dash_add(w,IMAGE0)))); };
var text_dash_add = function(height, IMAGE0) { return (plt.Kernel.setLastLoc({offset:1056, line:34, span:140, id:"<unknown>"}) && plt.world.Kernel.placeImage((plt.Kernel.setLastLoc({offset:1069, line:34, span:67, id:"<unknown>"}) && plt.world.Kernel.text((plt.Kernel.setLastLoc({offset:1075, line:34, span:50, id:"<unknown>"}) && plt.Kernel.string_dash_append([_SHARED[5],(plt.Kernel.setLastLoc({offset:1101, line:34, span:23, id:"<unknown>"}) && plt.Kernel.number_dash__greaterthan_string(height))])),_SHARED[6],(plt.types.Symbol.makeInstance("black")))),_SHARED[7],_SHARED[8],IMAGE0)); };
var rocket_dash_add = function(w, IMAGE0) { return ((plt.Kernel.setLastLoc({offset:1360, line:43, span:55, id:"<unknown>"}) && plt.Kernel._greaterthan__equal_((plt.Kernel.setLastLoc({offset:1364, line:43, span:21, id:"<unknown>"}) && plt.world.Kernel.imageHeight(ROCKET)),(plt.Kernel.setLastLoc({offset:1386, line:43, span:28, id:"<unknown>"}) && plt.Kernel._dash_(HEIGHT, [(plt.Kernel.setLastLoc({offset:1396, line:43, span:17, id:"<unknown>"}) && plt.Kernel.apply((plt.Kernel.setLastLoc({offset:1397, line:43, span:7, id:"<unknown>"}) && plt.Kernel.cdr(w)),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:1405, line:43, span:7, id:"<unknown>"}) && plt.Kernel.car(w))]),                    []))])), [])) ?
 (plt.Kernel.setLastLoc({offset:1421, line:44, span:35, id:"<unknown>"}) && plt.world.Kernel.placeImage(ROCKET,_SHARED[9],_SHARED[1],IMAGE0)) :
 (plt.types.Logic.TRUE ?
 (plt.Kernel.setLastLoc({offset:1468, line:45, span:60, id:"<unknown>"}) && plt.world.Kernel.placeImage(ROCKET,_SHARED[9],(plt.Kernel.setLastLoc({offset:1492, line:45, span:28, id:"<unknown>"}) && plt.Kernel._dash_(HEIGHT, [(plt.Kernel.setLastLoc({offset:1502, line:45, span:17, id:"<unknown>"}) && plt.Kernel.apply((plt.Kernel.setLastLoc({offset:1503, line:45, span:7, id:"<unknown>"}) && plt.Kernel.cdr(w)),                    plt.Kernel.list([(plt.Kernel.setLastLoc({offset:1511, line:45, span:7, id:"<unknown>"}) && plt.Kernel.car(w))]),                    []))])),IMAGE0)) :
 (plt.Kernel.setLastLoc({offset:1349, line:42, span:181, id:"<unknown>"}) && plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[10])))); };
var tock = function(w, ke) { return (plt.Kernel.setLastLoc({offset:1655, line:51, span:28, id:"<unknown>"}) && plt.Kernel.cons((plt.Kernel.setLastLoc({offset:1661, line:51, span:13, id:"<unknown>"}) && plt.Kernel._plus_([_SHARED[11],(plt.Kernel.setLastLoc({offset:1666, line:51, span:7, id:"<unknown>"}) && plt.Kernel.car(w))])),(plt.Kernel.setLastLoc({offset:1675, line:51, span:7, id:"<unknown>"}) && plt.Kernel.cdr(w)))); };
var start = function(rocket_dash_height) { return (plt.Kernel.setLastLoc({offset:1719, line:55, span:103, id:"<unknown>"}) && plt.world.MobyJsworld.bigBang((plt.Kernel.setLastLoc({offset:1732, line:55, span:22, id:"<unknown>"}) && plt.Kernel.cons(_SHARED[8],rocket_dash_height)), [(plt.Kernel.setLastLoc({offset:1770, line:56, span:13, id:"<unknown>"}) && plt.world.config.Kernel.onKey((plt.types.liftToplevelToFunctionValue(tock,(plt.types.String.makeInstance("tock")),2,(plt.types.Rational.makeInstance(2, 1)))))),(plt.Kernel.setLastLoc({offset:1799, line:57, span:22, id:"<unknown>"}) && plt.world.config.Kernel.onRedraw((plt.types.liftToplevelToFunctionValue(draw_dash_world,(plt.types.String.makeInstance("draw-world")),1,(plt.types.Rational.makeInstance(1, 1))))))])); };_SHARED[9] = (plt.types.Rational.makeInstance(100, 1));
_SHARED[2] = (plt.types.Rational.makeInstance(600, 1));
_SHARED[10] = (plt.types.String.makeInstance("cond: fell out of cond"));
_SHARED[3] = (plt.types.String.makeInstance("http://www.wescheme.org/images/teachpacks/rocket.png"));
_SHARED[5] = (plt.types.String.makeInstance("Height: "));
_SHARED[1] = (plt.types.Rational.makeInstance(200, 1));
_SHARED[6] = (plt.types.Rational.makeInstance(14, 1));
_SHARED[7] = (plt.types.Rational.makeInstance(60, 1));
_SHARED[11] = (plt.types.Rational.makeInstance(1, 1));
_SHARED[4] = (plt.types.Rational.makeInstance(2, 1));
_SHARED[8] = (plt.types.Rational.makeInstance(0, 1));

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
