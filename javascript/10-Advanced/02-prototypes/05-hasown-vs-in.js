const proto = { a: 1 };
const o = Object.create(proto);
o.b = 2;
document.getElementById("out").textContent =
  "hasOwn a=" + Object.hasOwn(o, "a") + "\n'a' in o=" + ("a" in o) + "\nhasOwn b=" + Object.hasOwn(o, "b");
