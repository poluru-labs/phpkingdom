function show() {
  document.getElementById("out").textContent = "hash=" + (location.hash || "(empty)");
}
show();
window.addEventListener("hashchange", show);
