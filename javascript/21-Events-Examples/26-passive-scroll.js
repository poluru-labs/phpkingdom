const box = document.getElementById("scroller");
box.addEventListener("scroll", () => {
  document.getElementById("out").textContent = "scrollTop=" + box.scrollTop;
}, { passive: true });
