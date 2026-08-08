const a=[1,2,3,4]; const out=[]; for(let i=0;i<a.length;i+=2) out.push(a.slice(i,i+2)); document.getElementById("out").textContent=JSON.stringify(out);
