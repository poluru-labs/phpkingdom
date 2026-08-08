function threeSum(arr) {
  arr.sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let lo = i + 1, hi = arr.length - 1;
    while (lo < hi) {
      const sum = arr[i] + arr[lo] + arr[hi];
      if (sum === 0) {
        out.push([arr[i], arr[lo], arr[hi]]);
        while (lo < hi && arr[lo] === arr[lo + 1]) lo++;
        while (lo < hi && arr[hi] === arr[hi - 1]) hi--;
        lo++; hi--;
      } else if (sum < 0) lo++;
      else hi--;
    }
  }
  return out;
}
const input = [-1, 0, 1, 2, -1, -4];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\n" +
  "triplets: " + JSON.stringify(threeSum(input.slice()));
