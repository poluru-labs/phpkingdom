let n = 0;
document.getElementById("btn").addEventListener("click", function () {
  n += 1;
  document.getElementById("out").textContent = String(n);
});
