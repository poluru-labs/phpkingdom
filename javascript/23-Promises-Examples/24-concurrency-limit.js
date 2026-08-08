async function mapLimit(items, limit, worker) {
  const ret = [];
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      ret[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return ret;
}
mapLimit([1, 2, 3, 4, 5], 2, (n) =>
  new Promise((resolve) => setTimeout(() => resolve(n * n), 40))
).then((values) => {
  document.getElementById("out").textContent = values.join(", ");
});
