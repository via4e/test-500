import Alien from './src/object'
import './style.css'

import randomWASM from './utils/rnd.mjs';
const wasm_module = await randomWASM();
console.log(wasm_module._hi500());

// Init
const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

let fieldHeight, fieldWidth
resize()

//always 5k, uncomment for change
//window.onresize = resize;

const aliens =[]
const aliensArmy = 1500 // numbers of aliens

for (let i = 0; i < aliensArmy; i++) {
  aliens[i] = new Alien(fieldHeight, fieldWidth)
}

function resize() {
  fieldHeight = window.innerHeight
  fieldWidth = window.innerWidth
  canvas.height = fieldHeight;
  canvas.width = fieldWidth;
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // visual dot with max x,y coords
  ctx.beginPath();
  ctx.arc(2160, 3840, 150, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#ffff00';
  ctx.fill();

  for (let i = 0; i < aliensArmy; i++) {
    aliens[i].update()
    aliens[i].draw(ctx)    
  }

  setTimeout(loop, 0)
  //requestAnimationFrame(loop)
}

loop()