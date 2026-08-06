const o = {};
document.getElementById("out").textContent =
  "in toString=" + ("toString" in o) +
  "\nhasOwn toString=" + Object.hasOwn(o, "toString");
