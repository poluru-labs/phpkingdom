const a = [1, 2, 3];
const b = [3, 4, 5];
const seen = new Set();
const union = [];
for (const x of [...a, ...b]) {
  if (!seen.has(x)) { seen.add(x); union.push(x); }
}
document.getElementById("out").textContent = union.join(", ");
