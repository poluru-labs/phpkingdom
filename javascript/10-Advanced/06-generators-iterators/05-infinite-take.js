function* naturals() { let n = 0; for (;;) yield n++; }
function take(n, it) {
  const out = [];
  for (const v of it) {
    out.push(v);
    if (out.length >= n) break;
  }
  return out;
}
document.getElementById("out").textContent = take(5, naturals()).join(",");
