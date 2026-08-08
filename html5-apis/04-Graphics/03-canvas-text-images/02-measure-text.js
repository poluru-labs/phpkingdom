const c = document.createElement("canvas");
const ctx = c.getContext("2d");
ctx.font = "20px Georgia";
const m = ctx.measureText("Hello APIs");
document.getElementById("out").textContent = "width ≈ " + m.width.toFixed(1);
