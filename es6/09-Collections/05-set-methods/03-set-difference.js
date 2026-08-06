const a = new Set([1, 2, 3]);
const b = new Set([3, 4]);
let diff, sym;
if (typeof a.difference === "function") {
  diff = [...a.difference(b)];
  sym = [...a.symmetricDifference(b)];
} else {
  diff = [...a].filter(x => !b.has(x));
  sym = [...a, ...b].filter(x => a.has(x) !== b.has(x));
}
document.getElementById("out").textContent =
  "diff=" + diff + "\nsym=" + sym;
