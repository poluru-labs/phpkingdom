async function allValues(obj) {
  const entries = Object.entries(obj);
  const values = await Promise.all(entries.map(([, p]) => p));
  return Object.fromEntries(entries.map(([k], i) => [k, values[i]]));
}
allValues({
  site: Promise.resolve("phpkingdom.com"),
  author: Promise.resolve("Subrahmanyam Poluru")
}).then((result) => {
  document.getElementById("out").textContent = JSON.stringify(result, null, 2);
});
