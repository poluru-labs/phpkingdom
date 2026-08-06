Promise.reject(new Error("boom")).catch(e => { document.getElementById("out").textContent = e.message; });
