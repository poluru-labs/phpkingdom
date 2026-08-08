const d=document.getElementById("d");new MutationObserver(()=>document.getElementById("out").textContent="mutated").observe(d,{childList:true});document.getElementById("b").onclick=()=>d.append("x");
