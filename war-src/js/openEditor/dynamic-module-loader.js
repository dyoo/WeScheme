goog.provide("plt.wescheme.makeDynamicModuleLoader");


(function() {
    // The dynamic module loader will either cause bytecode from publicId-shared
    // programs to load, or those in the built-in collections.
    plt.wescheme.makeDynamicModuleLoader = function(rootLibraryPath) {

        var handleBuiltInCollection = function(aName, onSuccess, onFail) {
            loadScript(rootLibraryPath + "/" + aName + "-min.js?__gensym="+encodeURIComponent('' + Math.random()),
                       onSuccess,
                       onFail);
        };

        var handleWeschemeModule = function(aName, onSuccess, onFail) {
            var m = aName.match(/wescheme\/(\\w+)/);
            throw new Error("unimplemented.");
        };

        var isWeschemeModule = function(aName) {
            var m = aName.match(/wescheme\/(\\w+)/);
            if (m) { return true; }
            return false;
        };


        return function(aName, onSuccess, onFail) {
            window.COLLECTIONS = window.COLLECTIONS || {};
            // FIXME: is this a WeScheme URL?
            if (isWeschemeModule(aName)) {
                handleWeschemeModule(aName, onSuccess, onFail);
            } else {
                handleBuiltInCollection(aName, onSuccess, onFail);
            }
        };
    };
}());
