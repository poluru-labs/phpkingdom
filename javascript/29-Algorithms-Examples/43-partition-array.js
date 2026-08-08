function partition(arr, pivot) {
  let lo = 0, hi = arr.length - 1;
  let i = 0;
  while (i <= hi) {
    if (arr[i] < pivot) {
      [arr[lo], arr[i]] = [arr[i], arr[lo]];
      lo++; i++;
    } else if (arr[i] > pivot) {
      [arr[i], arr[hi]] = [arr[hi], arr[i]];
      hi--;
    } else i++;
  }
  return arr;
}
const input = [3, 8, 2, 5, 1, 4, 2];
const pivot = 4;
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\n" +
  "pivot:  " + pivot + "\n" +
  "output: " + JSON.stringify(partition(input.slice(), pivot));
