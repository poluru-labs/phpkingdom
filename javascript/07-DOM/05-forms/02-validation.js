document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  const v = document.getElementById("user").value.trim();
  document.getElementById("out").textContent =
    v.length < 3 ? "Too short" : "OK: " + v;
});
