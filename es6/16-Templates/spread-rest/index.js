const a = { x: 1 }; const b = { ...a, y: 2 }; const sum = (...ns) => ns.reduce((s,n)=>s+n,0); document.getElementById("out").textContent = JSON.stringify(b) + " sum=" + sum(1,2,3);
