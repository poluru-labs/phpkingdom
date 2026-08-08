function countKeys(obj) { return Object.keys(obj).length; }
document.getElementById("out").textContent = String(countKeys({ a: 1, b: 2, c: 3 }));
