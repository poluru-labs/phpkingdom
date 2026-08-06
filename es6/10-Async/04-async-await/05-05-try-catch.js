(async () => { try { await Promise.reject(new Error("fail")); } catch (e) { document.getElementById("out").textContent = e.message; } })();
