function show() {
  document.getElementById("out").textContent =
    "visibilityState=" + document.visibilityState +
    "\nhidden=" + document.hidden;
}
show();
document.addEventListener("visibilitychange", show);
