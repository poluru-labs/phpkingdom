function observable(obj, log) {
  return new Proxy(obj, {
    set(t, p, v) { log.push(String(p) + "=" + v); t[p] = v; return true; }
  });
}
const log = [];
const state = observable({ count: 0 }, log);
state.count = 1;
state.count = 2;
document.getElementById("out").textContent = log.join("\n");
