const a = Symbol("id");
const b = Symbol("id");
document.getElementById("out").textContent = String(a === b) + "\n" + String(a.description);
