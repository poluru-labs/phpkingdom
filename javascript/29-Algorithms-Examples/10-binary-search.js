function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
document.getElementById("out").textContent =
  "array:  " + JSON.stringify(arr) + "\n" +
  "target: " + target + "\n" +
  "index:  " + binarySearch(arr, target);
