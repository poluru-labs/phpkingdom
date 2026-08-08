function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
document.getElementById("out").textContent = [1, 2, 3, 4, 5, 6]
  .map((n) => n + " stairs → " + climbStairs(n) + " ways")
  .join("\n");
