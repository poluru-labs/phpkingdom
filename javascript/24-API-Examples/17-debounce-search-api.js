function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
async function searchAPI(q) {
  return { q, results: ["js-" + q, "api-" + q] };
}
const run = debounce(async (q) => {
  const data = await searchAPI(q);
  document.getElementById("out").textContent = JSON.stringify(data);
}, 300);
run("ja");
run("jav");
run("java"); // only this call should effectively "win" after debounce
