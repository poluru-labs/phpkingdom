window.addEventListener("message", (e) => {
  if (e.origin !== location.origin) return;
  document.getElementById("out").textContent = "got: " + e.data;
});
document.getElementById("btn").onclick = () => {
  window.postMessage("hello from phpkingdom", location.origin);
};
