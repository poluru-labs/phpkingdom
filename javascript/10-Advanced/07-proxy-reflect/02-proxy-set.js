const p = new Proxy({}, {
  set(t, prop, value) {
    if (typeof value !== "number") return false;
    t[prop] = value;
    return true;
  }
});
p.n = 3;
try { p.n = "x"; } catch (e) { /* ignore */ }
document.getElementById("out").textContent = "n=" + p.n;
