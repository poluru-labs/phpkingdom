function isPowerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}
const nums = [1, 2, 3, 8, 16, 18];
document.getElementById("out").textContent = nums
  .map((n) => n + " → " + isPowerOfTwo(n))
  .join("\n");
