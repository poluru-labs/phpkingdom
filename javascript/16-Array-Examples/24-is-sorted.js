function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) if (arr[i] < arr[i - 1]) return false;
  return true;
}
document.getElementById("out").textContent =
  isSorted([1,2,3,4]) + " / " + isSorted([1,3,2]);
