goog.provide("plt.wescheme.makeDynamicModuleLoader");

goog.require("plt.wescheme.AjaxActions");

(function() {
    'use strict';


    // The dynamic module loader will either cause bytecode from publicId-shared
    // programs to load, or those in the built-in collections.
    plt.wescheme.makeDynamicModuleLoader = function(rootLibraryPath) {

        var actions = new plt.wescheme.AjaxActions();

        var handleBuiltInCollection = function(aName, onSuccess, onFail) {
            loadScript(rootLibraryPath + "/" + aName + "-min.js?__gensym="+encodeURIComponent('' + Math.random()),
                       onSuccess,
                       onFail);
        };

        var handleWeschemeModule = function(aName, onSuccess, onFail) {
            var m = aName.match(/wescheme\/(\w+)/);
            var publicId = m[1];
            actions.loadProject(
                null, 
                publicId, 
                function(aProgram) {
                    try {
                        window.COLLECTIONS[aName] = { 
                            'name': aName,  
                            'bytecode' : (0,eval)('(' + aProgram.getObjectCode() + ')'),
                            'provides' : aProgram.getProvides() 
                        };
                    } catch(e) {
                        onFail();
                        return;
                    }
                    onSuccess();
                },
                onFail);
        };

        var isWeschemeModule = function(aName) {
            var m = aName.match(/^wescheme\/(\w+)$/);
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
