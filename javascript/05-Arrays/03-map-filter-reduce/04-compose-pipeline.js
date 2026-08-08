const total = [1,2,3,4,5]
  .map(n => n * 2)
  .filter(n => n > 5)
  .reduce((a, b) => a + b, 0);
document.getElementById("out").textContent = String(total);
