Promise.all([Promise.resolve(1),Promise.resolve(2)]).then(v=>document.getElementById('out').textContent=v.join(','));
