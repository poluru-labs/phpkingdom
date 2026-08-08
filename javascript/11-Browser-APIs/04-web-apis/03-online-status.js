function show() {
  document.getElementById("out").textContent =
    "online=" + navigator.onLine;
}
show();
window.addEventListener("online", show);
window.addEventListener("offline", show);
