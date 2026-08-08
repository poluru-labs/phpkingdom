document.getElementById("btn").onclick = function () {
  const out = document.getElementById("out");
  out.textContent = "Loading...";
  setTimeout(function () {
    out.textContent = "Done (after 700ms)";
  }, 700);
};
