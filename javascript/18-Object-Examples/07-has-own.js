const obj = { color: "teal" };
document.getElementById("out").textContent =
  Object.hasOwn(obj, "color") + " / " + Object.hasOwn(obj, "toString");
