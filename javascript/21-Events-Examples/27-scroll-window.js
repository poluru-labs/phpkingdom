window.addEventListener("scroll", () => {
  document.getElementById("out").textContent =
    "scrollY=" + Math.round(window.scrollY);
}, { passive: true });
