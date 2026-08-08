function longestOnes(arr, k) {
  let lo = 0, zeros = 0, best = 0;
  for (let hi = 0; hi < arr.length; hi++) {
    if (arr[hi] === 0) zeros++;
    while (zeros > k) {
      if (arr[lo] === 0) zeros--;
      lo++;
    }
    best = Math.max(best, hi - lo + 1);
  }
  return best;
}
const arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "k flips allowed: " + k + "\n" +
  "longest window: " + longestOnes(arr, k);
