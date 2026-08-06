const o = { a: 1 };
document.getElementById("out").textContent =
  String(Object.hasOwn(o, "a")) + ", " + String(Object.hasOwn(o, "toString"));
