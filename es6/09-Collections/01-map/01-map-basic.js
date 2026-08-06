const m = new Map();
m.set("a", 1);
m.set(1, "one");
document.getElementById("out").textContent =
  m.get("a") + "," + m.get(1) + " size=" + m.size;
