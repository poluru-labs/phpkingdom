document.getElementById("btn").addEventListener("click", (e) => {
  document.getElementById("out").textContent =
    "ctrl=" + e.ctrlKey + " meta=" + e.metaKey +
    " shift=" + e.shiftKey + " alt=" + e.altKey;
});
