new Promise((resolve) => setTimeout(() => resolve("ready"), 250))
  .then((v) => { document.getElementById("out").textContent = v; });
