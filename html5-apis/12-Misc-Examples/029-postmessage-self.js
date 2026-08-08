onmessage=e=>{if(e.origin===location.origin)document.getElementById("out").textContent=e.data;};document.getElementById("b").onclick=()=>postMessage("hi",location.origin);
