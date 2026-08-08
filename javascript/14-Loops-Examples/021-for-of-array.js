const fruits = ["apple", "banana", "cherry"];
const lines = [];
for (const f of fruits) lines.push(f.toUpperCase());
document.getElementById("out").textContent = lines.join("\n");
