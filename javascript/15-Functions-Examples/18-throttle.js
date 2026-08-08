function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      return fn.apply(this, args);
    }
  };
}
let runs = 0;
const track = throttle(() => { runs += 1; }, 40);
track(); track(); track();
setTimeout(() => {
  track();
  document.getElementById("out").textContent = "throttled runs = " + runs;
}, 60);
