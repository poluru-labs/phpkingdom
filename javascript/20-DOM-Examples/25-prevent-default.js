document.getElementById("link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("out").textContent = "navigation blocked";
});
