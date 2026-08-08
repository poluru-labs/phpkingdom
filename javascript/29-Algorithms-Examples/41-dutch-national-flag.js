function sortColors(arr) {
  let lo = 0, mid = 0, hi = arr.length - 1;
  while (mid <= hi) {
    if (arr[mid] === 0) {
      [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
      lo++; mid++;
    } else if (arr[mid] === 1) mid++;
    else {
      [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
      hi--;
    }
  }
  return arr;
}
const input = [2, 0, 2, 1, 1, 0];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(sortColors(input.slice()));
