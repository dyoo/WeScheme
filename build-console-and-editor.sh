#!/bin/sh

## Assumes closure-library is under $HOME/work/closure-library.
## We may want to include closure-library as one of the external
## submodules of WeScheme.

build() {
    mkdir -p `dirname war/$2`
    $HOME/work/closure-library/closure/bin/calcdeps.py  -i war-src/$1 -p $HOME/work/closure-library -p war-src -o script > war/$2    
}



echo "Building test hello application: if this fails, something's wrong, and closure-library hasn't been installed"
build js/hello.js js/hello-calc.js

echo "Building console"
build js/console.js js/console-calc.js

echo "Building view"
build js/view.js js/view-calc.js

echo "Building editor"
build js/openEditor/index.js js/openEditor/openEditor-calc.js



echo "buildtest splitframe"
build test/splitframe.js test/splitframe-calc.js
