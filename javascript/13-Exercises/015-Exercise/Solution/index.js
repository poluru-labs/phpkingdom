let count = 0;
document.getElementById("btn").addEventListener("click", function () {
  count += 1;
  document.getElementById("out").textContent = String(count);
});
