function compact(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== null && v !== undefined));
}
document.getElementById("out").textContent = JSON.stringify(compact({ a: 1, b: null, c: undefined, d: 0, e: "" }));
