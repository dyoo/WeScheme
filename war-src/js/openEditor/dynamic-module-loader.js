goog.provide("plt.wescheme.makeDynamicModuleLoader");


(function() {
    // The dynamic module loader will either cause bytecode from publicId-shared
    // programs to load, or those in the built-in collections.
    plt.wescheme.makeDynamicModuleLoader = function(rootLibraryPath) {
        return function(aName, onSuccess, onFail) {
            // FIXME: is this a WeScheme URL?

            // Otherwise, treat it as a built-in and pull it from the
            // set of built in collections.
            loadScript(rootLibraryPath + "/" + aName + "-min.js",
                       onSuccess,
                       onFail);
        };
    };
}());
