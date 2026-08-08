document.getElementById("out").textContent = "fetch(url, { signal })\n  .catch(e => { if (e.name === 'AbortError') /* cancelled */ });";
