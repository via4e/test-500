import './style.css'

console.log('500')

// resize listener
window.onresize = resize;
resize(); // init

function resize() {
  let fieldHeight = window.innerHeight
  let fieldWidth = window.innerWidth
  console.log('height:', fieldHeight, 'width:', fieldWidth)
}

// Canvas init
const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 55, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 55, 50);