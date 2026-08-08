document.getElementById("name").addEventListener("input", function (e) {
  document.getElementById("out").textContent = "Hello, " + e.target.value;
});
