function isEven(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  return isOdd(n - 1);
}
function isOdd(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  return isEven(n - 1);
}
const nums = [0, 1, 4, 7, 10];
document.getElementById("out").textContent = nums
  .map((n) => n + " is " + (isEven(n) ? "even" : "odd"))
  .join("\n");
