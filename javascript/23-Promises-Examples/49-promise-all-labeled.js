async function parallelLabeled(tasks) {
  const keys = Object.keys(tasks);
  const values = await Promise.all(keys.map((k) => tasks[k]));
  return Object.fromEntries(keys.map((k, i) => [k, values[i]]));
}
parallelLabeled({
  user: Promise.resolve({ id: 1 }),
  posts: Promise.resolve([1, 2]),
  site: Promise.resolve("phpkingdom.com")
}).then((result) => {
  document.getElementById("out").textContent = JSON.stringify(result, null, 2);
});
