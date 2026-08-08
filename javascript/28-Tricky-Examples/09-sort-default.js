const nums = [10, 2, 1, 20];
document.getElementById("out").textContent =
  "default: " + [...nums].sort().join(", ") + "\n" +
  "numeric: " + [...nums].sort((a, b) => a - b).join(", ");
