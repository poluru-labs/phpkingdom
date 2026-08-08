function findMaxAverage(arr, k) {
  let window = 0;
  for (let i = 0; i < k; i++) window += arr[i];
  let bestSum = window;
  for (let i = k; i < arr.length; i++) {
    window += arr[i] - arr[i - k];
    bestSum = Math.max(bestSum, window);
  }
  return bestSum / k;
}
const arr = [1, 12, -5, -6, 50, 3];
const k = 4;
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "k: " + k + "\n" +
  "max average: " + findMaxAverage(arr, k);
