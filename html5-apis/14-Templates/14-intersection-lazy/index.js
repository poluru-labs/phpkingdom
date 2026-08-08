const io = new IntersectionObserver((ents) => {
  ents.forEach((e) => { if (e.isIntersecting) { e.target.textContent = "Loaded!"; io.unobserve(e.target); } });
}, { threshold: 0.4 });
io.observe(document.getElementById("lazy"));
