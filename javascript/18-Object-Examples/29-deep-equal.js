function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || !a || !b) return false;
  const ak = Object.keys(a), bk = Object.keys(b);
  if (ak.length !== bk.length) return false;
  return ak.every((k) => deepEqual(a[k], b[k]));
}
document.getElementById("out").textContent =
  deepEqual({ a: { b: 1 } }, { a: { b: 1 } }) + " / " + deepEqual({ a: 1 }, { a: 2 });
