function mapValues(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));
}
document.getElementById("out").textContent = JSON.stringify(mapValues({ a: 1, b: 2 }, (v) => v * 10));
