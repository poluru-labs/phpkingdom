const obj = { color: "teal" };
document.getElementById("out").textContent =
  String(Object.prototype.hasOwnProperty.call(obj, "color"));
