const out = document.getElementById("out");
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    out.textContent = entry.isIntersecting ? "visible" : "hidden";
  });
}, { threshold: 0.25 });
io.observe(document.getElementById("target"));
