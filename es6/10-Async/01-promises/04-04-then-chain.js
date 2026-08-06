Promise.resolve(2).then(n => n * 3).then(n => { document.getElementById("out").textContent = String(n); });
