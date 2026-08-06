const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
let out;
if (typeof a.intersection === "function") {
  out = [...a.intersection(b)];
} else {
  out = [...a].filter(x => b.has(x));
}
document.getElementById("out").textContent = out.join(", ");
