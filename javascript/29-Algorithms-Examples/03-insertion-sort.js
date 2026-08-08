function insertionSort(arr) {
  const a = arr.slice();
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}
const input = [5, 2, 4, 6, 1, 3];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(insertionSort(input));
