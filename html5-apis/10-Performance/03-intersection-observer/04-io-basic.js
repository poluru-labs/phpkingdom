const io = new IntersectionObserver((entries) => {
  document.getElementById("out").textContent = entries.map(e =>
    "intersecting=" + e.isIntersecting + " ratio=" + e.intersectionRatio.toFixed(2)
  ).join("\n");
}, { threshold: [0, 0.5, 1] });
io.observe(document.getElementById("target"));
