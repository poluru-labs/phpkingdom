function searchInsert(arr, target) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
const arr = [1, 3, 5, 6];
const targets = [5, 2, 7];
const lines = targets.map(t => "insert " + t + " at index " + searchInsert(arr, t));
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" + lines.join("\n");
