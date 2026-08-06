let ok = true; try { new RegExp(".", "v"); } catch { ok = false; } document.getElementById("out").textContent = "v supported: " + ok;
