function tick(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n), 50));
}
async function wrong() {
  const order = [];
  [1, 2, 3].forEach(async (n) => {
    order.push(await tick(n));
  });
  return order; // usually empty or incomplete
}
async function right() {
  const order = [];
  for (const n of [1, 2, 3]) order.push(await tick(n));
  return order;
}
(async () => {
  const w = await wrong();
  await new Promise((r) => setTimeout(r, 200));
  const r = await right();
  document.getElementById("out").textContent =
    "forEach snapshot=" + JSON.stringify(w) + "\nfor-of=" + r.join(",");
})();
