const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('matrix-background').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FF0000';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

body {
  margin: 0;
  overflow: hidden;
  background: black;
  color: red;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
}

#matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: black;
}

.content {
  position: relative;
  top: 35vh;
  opacity: 0;
  transition: opacity 2s ease;
}

.content.show {
  opacity: 1;
}

h1 {
  font-size: 3em;
  letter-spacing: 3px;
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px red; }
  to { text-shadow: 0 0 25px darkred, 0 0 50px crimson; }
}

.btn {
  display: inline-block;
  margin: 15px;
  padding: 15px 25px;
  color: white;
  border: 2px solid red;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.2em;
  transition: 0.3s;
  background: rgba(255,0,0,0.1);
}

.btn:hover {
  background: red;
  color: black;
  box-shadow: 0 0 15px red;
}

/* Loading Screen */
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: red;
  font-size: 1.5em;
  z-index: 999;
  text-shadow: 0 0 10px red;
  animation: flicker 2s infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.9; }
}

.dots::after {
  content: '';
  animation: dots 1.5s steps(3, end) infinite;
}

@keyframes dots {
  0% { content: ''; }
  33% { content: '.'; }
  66% { content: '..'; }
  100% { content: '...'; }
}

.hidden {
  display: none;
}
