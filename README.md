# test-500
500 moving objects 
5k resolution for 16:9 ratio is 5120 × 2880

## Start

1. install deps: yarn / npm i
2. start: yarn dev / npm run dev
3. Open in browser localhost:5173

## Config

Number of objects - change number in main.js file, string 6 (constant aliensArmy)
Depth of Fibonacci calculating - change number in main.js file, string 6 (constant fiboDepth)

FYI: Large values in both cases degrade performance.

## TODO
1. movement strategy as plugin
2. Perfomance optimize: All object calculates move to WASM module
3. Perfomance optimize: try web workers
4. config
5. keyboard: pause, change modes
6. 'yarn build' cors fix

## Emscipten

If you need install emscripten, for change utils/rnd.c, follow the instructions from the official site:
https://emscripten.org/docs/getting_started/downloads.html

OR (my case for linux):

git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest

// Set ENV PATH
source ./emsdk_env.sh

// Add startup routine
echo 'source "/home/v4e/emsdk/emsdk_env.sh"' >> $HOME/.bash_profile

// check
emcc --version



