function* g() { yield 1; yield 2; } document.getElementById("out").textContent = [...g()].join(",");
