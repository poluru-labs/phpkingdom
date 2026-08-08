document.getElementById("area").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  document.getElementById("out").textContent =
    "custom menu at (" + e.clientX + ", " + e.clientY + ")";
});
