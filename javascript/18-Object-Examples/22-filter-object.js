function filterObject(obj, fn) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn(v, k)));
}
const scores = { html: 90, css: 70, js: 95 };
document.getElementById("out").textContent = JSON.stringify(filterObject(scores, (v) => v >= 90));
