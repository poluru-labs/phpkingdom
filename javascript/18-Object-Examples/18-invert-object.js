function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [String(v), k]));
}
document.getElementById("out").textContent = JSON.stringify(invert({ a: 1, b: 2, c: 3 }));
