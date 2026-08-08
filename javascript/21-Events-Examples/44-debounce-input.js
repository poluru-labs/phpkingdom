function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
const out = document.getElementById("out");
const onSearch = debounce((value) => {
  out.textContent = "debounced query: " + value;
}, 300);
document.getElementById("q").addEventListener("input", (e) => {
  out.textContent = "typing…";
  onSearch(e.target.value);
});
