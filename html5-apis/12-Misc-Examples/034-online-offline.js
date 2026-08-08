const s=()=>document.getElementById("out").textContent=navigator.onLine;s();addEventListener("online",s);addEventListener("offline",s);
