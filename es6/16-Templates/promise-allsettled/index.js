Promise.allSettled([Promise.resolve(1), Promise.reject("x")]).then(r => { document.getElementById("out").textContent = r.map(x => x.status).join(","); });
