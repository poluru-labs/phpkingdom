function sortedSquares(arr) {
  let lo = 0, hi = arr.length - 1;
  const out = new Array(arr.length);
  for (let k = arr.length - 1; k >= 0; k--) {
    const l2 = arr[lo] * arr[lo], r2 = arr[hi] * arr[hi];
    if (l2 > r2) { out[k] = l2; lo++; }
    else { out[k] = r2; hi--; }
  }
  return out;
}
const arr = [-4, -1, 0, 3, 10];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(arr) + "\noutput: " + JSON.stringify(sortedSquares(arr));
