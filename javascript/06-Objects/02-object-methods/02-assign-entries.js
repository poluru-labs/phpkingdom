const a = { x: 1 };
const b = Object.assign({}, a, { y: 2 });
document.getElementById("out").textContent =
  JSON.stringify(b) + " / " + Object.entries(b).join(";");
