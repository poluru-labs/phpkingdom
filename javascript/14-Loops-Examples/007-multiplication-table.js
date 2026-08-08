const n = 7;
const lines = [];
for (let i = 1; i <= 10; i++) lines.push(n + " x " + i + " = " + (n * i));
document.getElementById("out").textContent = lines.join("\n");
