document.getElementById("field").addEventListener("keyup", (e) => {
  document.getElementById("out").textContent = "released: " + e.key;
});
