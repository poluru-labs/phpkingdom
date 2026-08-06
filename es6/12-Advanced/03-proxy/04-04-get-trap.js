const p = new Proxy({}, { get: (_, k) => `missing:${String(k)}` }); document.getElementById("out").textContent = p.foo;
