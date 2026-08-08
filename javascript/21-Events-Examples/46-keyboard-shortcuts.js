window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
    e.preventDefault();
    document.getElementById("out").textContent =
      "shortcut save at " + new Date().toLocaleTimeString();
  }
});
