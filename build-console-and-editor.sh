#!/bin/sh

## Assumes closure-library is under $HOME/work/closure-library.
## We may want to include closure-library as one of the external
## submodules of WeScheme.
# ClosureDir="${HOME}/work/closure-library"

ClosureDir="$(dirname $(cd $(dirname $0) && pwd))/closure-library"
CompilerJarPath="$(cd $(dirname $0) && pwd)/bin/compiler.jar"

build() {
    mkdir -p `dirname war/$2`
    "${ClosureDir}/closure/bin/calcdeps.py" \
        -i war-src/$1 \
        -c "$CompilerJarPath"\
        -f "--compilation_level=SIMPLE_OPTIMIZATIONS"\
        -p "$ClosureDir" \
        -p war-src \
        -o compiled \
        > war/$2    
}


echo "Building properties file for JS"
## fill me in
cp wescheme.properties war/wescheme.properties
python bin/make-properties.py <wescheme.properties >war-src/js/wescheme-properties.js

######################################################################

echo "Building console"
build js/console.js js/console-calc.js

echo "Building view"
build js/view.js js/view-calc.js

echo "Building editor"
build js/openEditor/index.js js/openEditor/openEditor-calc.js

echo "Compressing codemirror"
java -jar "$CompilerJarPath" --compilation_level=SIMPLE_OPTIMIZATIONS <war/js/codemirror2/lib/codemirror.js >war/js/codemirror2/lib/codemirror-min.js
