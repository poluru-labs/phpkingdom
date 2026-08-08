function show() {
  document.getElementById("out").textContent =
    "innerWidth=" + window.innerWidth + " innerHeight=" + window.innerHeight;
}
show();
window.addEventListener("resize", show);
