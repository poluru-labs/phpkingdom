function arrayMax(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return Math.max(arr[i], arrayMax(arr, i + 1));
}
const nums = [3, 9, 2, 14, 7];
document.getElementById("out").textContent = "max = " + arrayMax(nums);
