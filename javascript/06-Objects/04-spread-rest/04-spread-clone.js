const a = { n: 1, nested: { x: 2 } };
const b = { ...a };
b.n = 9;
document.getElementById("out").textContent = "a.n=" + a.n + " b.n=" + b.n + " same nested=" + (a.nested === b.nested);
