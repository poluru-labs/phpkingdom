function memoize(fn) {
  const cache = new Map();
  return function (key) {
    if (cache.has(key)) return cache.get(key);
    const value = fn(key);
    cache.set(key, value);
    return value;
  };
}
let calls = 0;
const slowSquare = memoize((n) => { calls += 1; return n * n; });
slowSquare(6); slowSquare(6); slowSquare(8);
document.getElementById("out").textContent =
  "results: " + slowSquare(6) + ", " + slowSquare(8) + "\ncalls = " + calls;
