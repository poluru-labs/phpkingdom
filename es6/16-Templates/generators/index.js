function* ids() { yield "a"; yield "b"; } document.getElementById("out").textContent = [...ids()].join("-");
