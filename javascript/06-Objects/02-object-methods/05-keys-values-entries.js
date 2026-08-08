const o = { b: 2, a: 1 };
document.getElementById("out").textContent = JSON.stringify({
  keys: Object.keys(o),
  values: Object.values(o),
  entries: Object.entries(o)
}, null, 2);
