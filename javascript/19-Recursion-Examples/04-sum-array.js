function sumArray(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + sumArray(arr, i + 1);
}
const nums = [2, 4, 6, 8];
document.getElementById("out").textContent = "sum([2,4,6,8]) = " + sumArray(nums);
