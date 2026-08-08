function memoizeAsync(fn) {
  const cache = new Map();
  return (key) => {
    if (!cache.has(key)) {
      cache.set(key, fn(key));
    }
    return cache.get(key);
  };
}
let calls = 0;
const loadUser = memoizeAsync(async (id) => {
  calls++;
  return { id, calls };
});
Promise.all([loadUser(1), loadUser(1), loadUser(1)]).then((results) => {
  document.getElementById("out").textContent =
    JSON.stringify(results) + "\nloaderCalls=" + calls;
});
