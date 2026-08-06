const a = new Set([1, 2]);
const b = new Set([2, 3]);
const u = typeof a.union === "function" ? a.union(b) : new Set([...a, ...b]);
document.getElementById("out").textContent = [...u].join(", ");
