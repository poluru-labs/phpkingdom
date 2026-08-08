let n = 0;
const id = setInterval(function () {
  n += 1;
  document.getElementById("out").textContent = String(n);
}, 400);
document.getElementById("stop").onclick = function () { clearInterval(id); };
