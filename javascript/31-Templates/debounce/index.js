function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}
const log = debounce((v) => {
  document.getElementById("out").textContent = "query=" + v;
}, 200);
document.getElementById("q").oninput = (e) => log(e.target.value);
