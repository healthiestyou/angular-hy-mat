# Clean up previous distributions
rm -rf dist
rm -rf build

# Variables
NGC="node node_modules/.bin/ngc"
TSC="node node_modules/.bin/tsc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$NGC -p src/tsconfig-build.json

# Rollup
$ROLLUP build/angular-hy-mat.js -o dist/angular-smd.js

# Run Angular Compiler to ES5
$NGC -p src/tsconfig-es5.json

# Rollup
$ROLLUP build/angular-hy-mat.js -o dist/angular-smd.es5.js

# Copy non-js files from build
rsync -a --exclude=*.js build/ dist

# Copy library package.json
cp src/package.json dist/package.json