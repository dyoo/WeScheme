#!/bin/sh

## Assumes closure-library is under $HOME/work/closure-library.
## We may want to include closure-library as one of the external
## submodules of WeScheme.


echo "Building test hello application: if this fails, something's wrong, and closure-library hasn't been installed"
$HOME/work/closure-library/closure/bin/calcdeps.py  -i war-src/js/hello.js -p $HOME/work/closure-library -p war-src -o script > war/js/hello-calc.js


if [ -f war-src/js/console.js ]
then
    echo "Building console"
    mkdir -p war/js
    $HOME/work/closure-library/closure/bin/calcdeps.py  -i war-src/js/console.js -p $HOME/work/closure-library -p war-src -o script > war/js/console-calc.js
    
fi

if [ -f war-src/js/openEditor/index.js ]
then
    echo "Building editor"
    mkdir -p war/js/openEditor
    $HOME/work/closure-library/closure/bin/calcdeps.py  -i war-src/js/openEditor/index.js -p $HOME/work/closure-library -p war-src -o script > war/js/openEditor/openEditor-calc.js
fi