import Alien from './src/object'
import Fibo from './src/fibo'
import './src/style.css'

// config parametres
const aliensArmy = 1000 // numbers of aliens
const fiboDepth = 1477
let calcType = js // calculate wa or js

const fibo = new Fibo(fiboDepth)

import WASM from './utils/rnd.mjs';
const wasm_module = await WASM();

// Test, write to console from wasm
console.log(wasm_module._hi500(), 'wasm-fib:', wasm_module._fib(fiboDepth), 'EOF FIB' );

// Init
document.getElementById('aliens-number').innerText = '' + aliensArmy

const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
const fps = document.getElementById("fps");

let fieldHeight, fieldWidth
let counter = 0
let last = 0
resize()

//always 5k, uncomment for change
//window.onresize = resize;

// Create aliens army
const aliens =[]
for (let i = 0; i < aliensArmy; i++) {
  aliens[i] = new Alien(fieldHeight, fieldWidth)
}

// Set timer
let timer = setInterval(fpsMetr, 1000)

// Set buttons
let calcTypeBtn = document.getElementById('calc-type')
const buttons = document.querySelectorAll(".button")
buttons.forEach((button) => {
  button.addEventListener("click", buttonClick, false )
});
function buttonClick (e) {
  calcType = e.target.id
  calcTypeBtn.innerText = e.target.id
}


function resize() {
  fieldHeight = window.innerHeight
  fieldWidth = window.innerWidth
  canvas.height = fieldHeight;
  canvas.width = fieldWidth;
}

function fpsMetr() {
  fps.textContent = counter - last
  //save last value
  last = counter
}

function loop() {
  calcType ==='js' ? fibo.getFibo() : wasm_module._fib(fiboDepth)

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  counter = counter + 1
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
