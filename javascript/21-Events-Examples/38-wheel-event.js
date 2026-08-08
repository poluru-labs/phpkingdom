document.getElementById("box").addEventListener("wheel", (e) => {
  e.preventDefault();
  document.getElementById("out").textContent =
    "deltaY=" + e.deltaY.toFixed(1) + " deltaMode=" + e.deltaMode;
}, { passive: false });
