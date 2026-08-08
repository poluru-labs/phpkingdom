function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
}
const box = document.getElementById("scroller");
const out = document.getElementById("out");
let raw = 0, throttled = 0;
box.addEventListener("scroll", () => { raw += 1; }, { passive: true });
box.addEventListener("scroll", throttle(() => {
  throttled += 1;
  out.textContent = "raw=" + raw + " throttled=" + throttled + " top=" + box.scrollTop;
}, 200), { passive: true });
