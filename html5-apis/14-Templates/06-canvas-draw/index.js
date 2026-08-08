const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#0f766e"; ctx.lineWidth = 2;
let drawing = false;
canvas.onmousedown = (e) => { drawing = true; ctx.beginPath(); ctx.moveTo(e.offsetX, e.offsetY); };
canvas.onmousemove = (e) => { if (!drawing) return; ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke(); };
canvas.onmouseup = () => { drawing = false; };
document.getElementById("clear").onclick = () => { ctx.clearRect(0,0,canvas.width,canvas.height); };
