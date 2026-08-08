function firstOccurrence(arr, target) {
  let lo = 0, hi = arr.length - 1, ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) { ans = mid; hi = mid - 1; }
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return ans;
}
const arr = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
document.getElementById("out").textContent =
  "array:  " + JSON.stringify(arr) + "\n" +
  "target: " + target + "\n" +
  "first index: " + firstOccurrence(arr, target);
