const a={x:1}; const b=JSON.parse(JSON.stringify(a)); b.x=2; document.getElementById("out").textContent=a.x+","+b.x;
