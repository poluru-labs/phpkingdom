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
mapLimit([1, 2, 3, 4, 5], 2, async (n) => {
  await new Promise((r) => setTimeout(r, 50));
  return n * 10;
}).then((values) => {
  document.getElementById("out").textContent = values.join(", ");
});
