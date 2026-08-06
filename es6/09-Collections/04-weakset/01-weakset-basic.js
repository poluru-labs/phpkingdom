const ws = new WeakSet();
const o = {};
ws.add(o);
document.getElementById("out").textContent = "has=" + ws.has(o);
