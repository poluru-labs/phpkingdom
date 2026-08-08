const m = new Map([["a", 1], ["b", 2]]);
const lines = [];
for (const [k, v] of m) lines.push(k + "=" + v);
document.getElementById("out").textContent = lines.join("\n");
