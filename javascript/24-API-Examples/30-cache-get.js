const cache = new Map();
async function cachedGet(key, loader) {
  if (cache.has(key)) return { ...cache.get(key), cached: true };
  const data = await loader();
  cache.set(key, data);
  return { ...data, cached: false };
}
async function load() {
  const loader = async () => ({ site: "phpkingdom.com", ts: Date.now() });
  const a = await cachedGet("/api/site", loader);
  const b = await cachedGet("/api/site", loader);
  document.getElementById("out").textContent = JSON.stringify({ a, b }, null, 2);
}
load();
