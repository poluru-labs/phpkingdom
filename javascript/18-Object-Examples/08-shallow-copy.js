const a = { x: 1, nested: { y: 2 } };
const b = { ...a };
b.x = 9;
document.getElementById("out").textContent = "a.x=" + a.x + ", b.x=" + b.x;
