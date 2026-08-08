function Box() {}
Box.prototype.items = [];
const a = new Box();
const b = new Box();
a.items.push("x");
document.getElementById("out").textContent =
  "b.items => [" + b.items.join(",") + "]  (shared reference!)";
