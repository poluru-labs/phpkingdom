const t = { a: 1 };
Object.assign(t, { b: 2 }, { c: 3 });
document.getElementById("out").textContent = JSON.stringify(t);
