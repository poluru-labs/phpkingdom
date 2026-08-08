const bad = [];
for (var i = 0; i < 3; i++) {
  bad.push(function () { return i; });
}
const good = [];
for (let j = 0; j < 3; j++) {
  good.push(function () { return j; });
}
document.getElementById("out").textContent =
  "var loop => " + bad.map((f) => f()).join(", ") + "\n" +
  "let loop => " + good.map((f) => f()).join(", ");
