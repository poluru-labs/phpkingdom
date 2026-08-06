(async () => { const a = await Promise.resolve("A"); const b = await Promise.resolve("B"); document.getElementById("out").textContent = a + b; })();
