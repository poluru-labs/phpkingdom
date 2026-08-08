function lowerBound(arr, target) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
const arr = [1, 2, 4, 4, 5];
const targets = [4, 0, 6];
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  targets.map(t => "lower bound of " + t + " => index " + lowerBound(arr, t)).join("\n");
