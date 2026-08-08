const s="banana"; const m={}; for(const c of s) m[c]=(m[c]||0)+1; document.getElementById("out").textContent=JSON.stringify(m);
