setTimeout(function () {
  setTimeout(function () {
    document.getElementById("out").textContent = "Nested timeouts finished";
  }, 200);
}, 200);
