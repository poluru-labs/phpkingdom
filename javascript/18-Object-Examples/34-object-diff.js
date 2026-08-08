function diff(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  const changed = {};
  for (const k of keys) {
    if (a[k] !== b[k]) changed[k] = { from: a[k], to: b[k] };
  }
  return changed;
}
document.getElementById("out").textContent = JSON.stringify(diff({ a: 1, b: 2 }, { a: 1, b: 9, c: 3 }), null, 2);
