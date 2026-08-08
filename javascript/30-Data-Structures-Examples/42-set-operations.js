const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);
const union = new Set([...a, ...b]);
const inter = new Set([...a].filter(x => b.has(x)));
document.getElementById("out").textContent =
  "a has 3 => " + a.has(3) + "\nunion => [" + [...union].join(", ") + "]\nintersection => [" + [...inter].join(", ") + "]";
