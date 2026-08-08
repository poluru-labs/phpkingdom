function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
const run = debounce((v) => {
  document.getElementById("out").textContent = "debounced: " + v;
}, 50);
run("a"); run("ab"); run("abc");
