function show() {
  document.getElementById("out").textContent =
    "navigator.onLine=" + navigator.onLine;
}
show();
window.addEventListener("online", show);
window.addEventListener("offline", show);
