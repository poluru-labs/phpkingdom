function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) if (arr[i] < arr[i - 1]) return false;
  return true;
}
document.getElementById("out").textContent =
  "[1,2,2,4] → " + isSorted([1, 2, 2, 4]) +
  "\n[1,3,2] → " + isSorted([1, 3, 2]);
