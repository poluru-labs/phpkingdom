document.getElementById("name").addEventListener("input", (e) => {
  document.getElementById("out").textContent = "live: " + e.target.value;
});
