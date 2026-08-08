document.getElementById("box").addEventListener("dblclick", () => {
  document.getElementById("out").textContent = "double-clicked at " + new Date().toLocaleTimeString();
});
