function show() {
  document.getElementById("out").textContent =
    "onLine=" + navigator.onLine + "\nuserAgent=" + navigator.userAgent.slice(0, 60) + "…";
}
document.getElementById("go").onclick = show;
window.addEventListener("online", show);
window.addEventListener("offline", show);
show();
