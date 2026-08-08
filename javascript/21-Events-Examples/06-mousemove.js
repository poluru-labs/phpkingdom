document.getElementById("box").addEventListener("mousemove", (e) => {
  document.getElementById("out").textContent =
    "clientX=" + e.clientX + " clientY=" + e.clientY +
    "\noffsetX=" + e.offsetX + " offsetY=" + e.offsetY;
});
