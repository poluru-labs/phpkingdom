document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("status").textContent = "DOM is ready";
  document.getElementById("out").textContent =
    "readyState=" + document.readyState;
});
// If this script is at end of body, readyState may already be interactive/complete.
if (document.readyState !== "loading") {
  document.getElementById("status").textContent = "already ready (" + document.readyState + ")";
}
