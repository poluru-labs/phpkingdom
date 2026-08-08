document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("out").textContent =
    document.getElementById("email").value;
});
