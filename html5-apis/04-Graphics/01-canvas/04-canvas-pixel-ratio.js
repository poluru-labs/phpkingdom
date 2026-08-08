const canvas = document.getElementById("c");
const dpr = window.devicePixelRatio || 1;
const cssW = 300, cssH = 120;
canvas.width = cssW * dpr; canvas.height = cssH * dpr;
const ctx = canvas.getContext("2d");
ctx.scale(dpr, dpr);
ctx.fillStyle = "#0f766e";
ctx.fillRect(20, 20, 100, 60);
document.getElementById("out").textContent = "dpr=" + dpr + " buffer=" + canvas.width + "x" + canvas.height;
