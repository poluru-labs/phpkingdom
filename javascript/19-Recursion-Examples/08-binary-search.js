function binarySearch(arr, target, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, hi);
  return binarySearch(arr, target, lo, mid - 1);
}
const sorted = [1, 3, 5, 7, 9, 11];
document.getElementById("out").textContent =
  "index of 7: " + binarySearch(sorted, 7) + "\nindex of 4: " + binarySearch(sorted, 4);
