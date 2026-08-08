function sortKeys(obj) {
  return Object.fromEntries(Object.keys(obj).sort().map((k) => [k, obj[k]]));
}
document.getElementById("out").textContent = JSON.stringify(sortKeys({ c: 3, a: 1, b: 2 }));
