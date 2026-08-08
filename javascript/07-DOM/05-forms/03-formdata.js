document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  document.getElementById("out").textContent =
    data.get("title") + " / " + data.get("level");
});
