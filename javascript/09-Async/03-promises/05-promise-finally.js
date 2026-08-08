Promise.resolve(1)
  .finally(() => { document.getElementById("out").textContent = "cleaned"; })
  .then(v => { document.getElementById("out").textContent += " value=" + v; });
