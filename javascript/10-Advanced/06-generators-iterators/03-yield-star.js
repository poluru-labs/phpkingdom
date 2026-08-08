function* a() { yield 1; yield 2; }
function* b() { yield* a(); yield 3; }
document.getElementById("out").textContent = [...b()].join(",");
