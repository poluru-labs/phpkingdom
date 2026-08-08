function countdown(n) {
  if (n <= 0) return [];
  return [n, ...countdown(n - 1)];
}
const result = countdown(5);
document.getElementById("out").textContent = result.join(" ");
