function debounce(fn,ms){let t; return (...a)=>{clearTimeout(t); t=setTimeout(()=>fn(...a),ms);};} document.getElementById("out").textContent="debounce helper ready";
