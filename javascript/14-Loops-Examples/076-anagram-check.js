function counts(s) {
  const c = {};
  for (const ch of s.toLowerCase()) {
    if (ch === " ") continue;
    c[ch] = (c[ch] || 0) + 1;
  }
  return c;
}
function same(a, b) {
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) if (a[k] !== b[k]) return false;
  return true;
}
document.getElementById("out").textContent =
  "listen/silent → " + same(counts("listen"), counts("silent"));
