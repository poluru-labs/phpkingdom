function isEmpty(obj) { return Object.keys(obj).length === 0; }
document.getElementById("out").textContent = isEmpty({}) + " / " + isEmpty({ a: 1 });
