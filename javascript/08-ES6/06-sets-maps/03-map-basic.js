const m = new Map();
const k = { id: 1 };
m.set(k, "Ada");
document.getElementById("out").textContent = m.get(k) + " size=" + m.size;
