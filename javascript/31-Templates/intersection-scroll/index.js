const root = document.getElementById("scroller");
const io = new IntersectionObserver((entries) => {
  document.getElementById("out").textContent = entries.map(e =>
    "isIntersecting=" + e.isIntersecting
  ).join("\n");
}, { root, threshold: 0.1 });
io.observe(document.getElementById("sentinel"));
