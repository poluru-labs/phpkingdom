function twoSumSorted(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const sum = arr[lo] + arr[hi];
    if (sum === target) return [lo, hi];
    if (sum < target) lo++;
    else hi--;
  }
  return [-1, -1];
}
const arr = [1, 2, 4, 6, 8, 9];
const target = 10;
const pair = twoSumSorted(arr, target);
document.getElementById("out").textContent =
  "array:  " + JSON.stringify(arr) + "\n" +
  "target: " + target + "\n" +
  "indices: " + JSON.stringify(pair) + "  values: [" + arr[pair[0]] + ", " + arr[pair[1]] + "]";
