document.getElementById("btn").addEventListener("click", function (e) {
  document.getElementById("out").textContent =
    "type=" + e.type + ", target=" + e.target.tagName;
});
