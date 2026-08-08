const p = new Proxy({}, {
  get(t, prop) { return prop in t ? t[prop] : `missing:${String(prop)}`; }
});
document.getElementById("out").textContent = p.hello;
