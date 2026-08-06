function* g() { const x = yield 0; yield x; } const it = g(); it.next(); document.getElementById("out").textContent = String(it.next(42).value);
