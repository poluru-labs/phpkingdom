const a = Symbol.for("app.user");
const b = Symbol.for("app.user");
document.getElementById("out").textContent = String(a === b) + " keyFor=" + Symbol.keyFor(a);
