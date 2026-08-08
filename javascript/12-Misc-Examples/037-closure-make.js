const make=()=>{let c=0; return ()=>++c;}; const n=make(); document.getElementById("out").textContent=n()+","+n();
