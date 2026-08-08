function maxSumK(arr, k) {
  let window = 0, best = 0;
  for (let i = 0; i < k; i++) window += arr[i];
  best = window;
  for (let i = k; i < arr.length; i++) {
    window += arr[i] - arr[i - k];
    best = Math.max(best, window);
  }
  return best;
}
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "k: " + k + "\n" +
  "max sum: " + maxSumK(arr, k);
