const o = Object.create(null);
o.x = 1;
document.getElementById("out").textContent = String(Object.hasOwn(o, "x"));
