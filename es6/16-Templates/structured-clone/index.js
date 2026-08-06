const src = { a: { b: 1 } }; const c = structuredClone(src); c.a.b = 9; document.getElementById("out").textContent = src.a.b + ":" + c.a.b;
