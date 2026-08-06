const items = [
  { cat: "fruit", n: "apple" },
  { cat: "veg", n: "kale" },
  { cat: "fruit", n: "pear" },
];
const g = Object.groupBy(items, i => i.cat);
document.getElementById("out").textContent =
  Object.keys(g).map(k => k + ": " + g[k].map(x => x.n).join(", ")).join("\n");
