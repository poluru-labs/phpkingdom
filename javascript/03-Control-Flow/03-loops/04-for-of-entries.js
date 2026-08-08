const items = ["a","b"];
const lines = [];
for (const [i, v] of items.entries()) lines.push(i + ":" + v);
document.getElementById("out").textContent = lines.join("\n");
