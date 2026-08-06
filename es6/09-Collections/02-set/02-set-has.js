const s = new Set();
s.add("es6");
document.getElementById("out").textContent =
  "has=" + s.has("es6") + " size=" + s.size;
