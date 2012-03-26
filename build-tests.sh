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
        -p "$ClosureDir" \
        -p war-src \
        -o script \
        > war/$2    
}


echo "Building properties file for JS"
## fill me in
cp wescheme.properties war/wescheme.properties
python bin/make-properties.py <wescheme.properties >war-src/js/wescheme-properties.js

######################################################################

echo "Building tests"
build js/tests/test-all.js js/tests/test-all.js

echo "Tests built.  Open war/js/tests/test-all.html to run the test suite."