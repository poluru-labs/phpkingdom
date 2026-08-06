const o = { a: 1, b: 2 };
const doubled = Object.fromEntries(
  Object.entries(o).map(([k, v]) => [k, v * 2])
);
document.getElementById("out").textContent = JSON.stringify(doubled);
