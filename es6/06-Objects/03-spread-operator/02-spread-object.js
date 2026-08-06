const base = { a: 1 };
const next = { ...base, b: 2 };
document.getElementById("out").textContent = JSON.stringify(next);
