try { JSON.parse("{"); }
catch (e) { document.getElementById("out").textContent = e.name; }
