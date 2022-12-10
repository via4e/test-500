import Alien from './src/object'
import './style.css'

import randomWASM from './utils/rnd.mjs';
const wasm_module = await randomWASM();
console.log(wasm_module._hi500());
console.log(wasm_module._randomNP(4));

// Init
const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

let fieldHeight, fieldWidth
resize()
window.onresize = resize;

const aliens =[]
const aliensArmy = 500 // numbers of aliens

for (let i = 0; i < aliensArmy; i++) {
  aliens[i] = new Alien(fieldHeight, fieldWidth)
}

function resize() {
  fieldHeight = window.innerHeight
  fieldWidth = window.innerWidth
  canvas.height = fieldHeight;
  canvas.width = fieldWidth;
  console.log('win h, w', window.innerHeight, window.innerWidth)
  console.log('canvas', canvas)
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < aliensArmy; i++) {
    aliens[i].update()
    aliens[i].draw(ctx)    
  }

  //setTimeout(loop, 0)
  requestAnimationFrame(loop)
}

loop()