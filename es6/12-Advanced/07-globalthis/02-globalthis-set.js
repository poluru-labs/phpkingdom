globalThis.__demo = 42;
document.getElementById("out").textContent = String(globalThis.__demo);
delete globalThis.__demo;
