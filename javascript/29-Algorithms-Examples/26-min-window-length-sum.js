function minSubArrayLen(target, arr) {
  let lo = 0, sum = 0, best = Infinity;
  for (let hi = 0; hi < arr.length; hi++) {
    sum += arr[hi];
    while (sum >= target) {
      best = Math.min(best, hi - lo + 1);
      sum -= arr[lo++];
    }
  }
  return best === Infinity ? 0 : best;
}
const arr = [2, 3, 1, 2, 4, 3];
const target = 7;
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "target sum >= " + target + "\n" +
  "min length: " + minSubArrayLen(target, arr);
