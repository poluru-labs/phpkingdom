function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
let count = 0;
const bump = debounce(() => { count += 1; }, 50);
bump(); bump(); bump();
setTimeout(() => {
  document.getElementById("out").textContent = "debounced calls = " + count;
}, 120);
