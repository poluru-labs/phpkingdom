const data = JSON.parse(JSON.stringify({ ok: true }));
document.getElementById("out").textContent = String(data.ok);
