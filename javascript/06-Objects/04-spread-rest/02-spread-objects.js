const base = { a: 1, b: 2 };
const next = { ...base, b: 9, c: 3 };
document.getElementById("out").textContent = JSON.stringify(next);
