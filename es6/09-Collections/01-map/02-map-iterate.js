const m = new Map([["x", 1], ["y", 2]]);
const lines = [];
for (const [k, v] of m) lines.push(k + "=" + v);
document.getElementById("out").textContent = lines.join(" ");
