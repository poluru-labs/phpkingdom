function show() {
  document.getElementById("out").textContent =
    "visibilityState=" + document.visibilityState +
    " hidden=" + document.hidden;
}
show();
document.addEventListener("visibilitychange", show);
