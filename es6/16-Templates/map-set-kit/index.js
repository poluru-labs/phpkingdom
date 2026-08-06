const m = new Map([["a",1]]); const s = new Set([1,1,2]); document.getElementById("out").textContent = m.get("a") + ":" + [...s].join(",");
