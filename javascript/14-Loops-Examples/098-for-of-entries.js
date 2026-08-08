const arr = ["a", "b", "c"];
const lines = [];
for (const [i, v] of arr.entries()) lines.push(i + ": " + v);
document.getElementById("out").textContent = lines.join("\n");
