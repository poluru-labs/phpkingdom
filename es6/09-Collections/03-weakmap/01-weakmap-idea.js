const wm = new WeakMap();
const obj = {};
wm.set(obj, "meta");
document.getElementById("out").textContent = wm.get(obj);
