function memoize(fn) {
  const cache = {};
  return function (n) {
    const key = String(n);
    if (key in cache) return cache[key] + " (cache)";
    const value = fn(n);
    cache[key] = value;
    return value + " (fresh)";
  };
}
const slowSquare = memoize((n) => n * n);
document.getElementById("out").textContent = slowSquare(9) + " | " + slowSquare(9);
