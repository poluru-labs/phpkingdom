function bubbleSort(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    let swapped = false;
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return a;
}
const input = [64, 34, 25, 12, 22, 11, 90];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(bubbleSort(input));
