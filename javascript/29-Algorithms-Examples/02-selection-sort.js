function selectionSort(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}
const input = [29, 10, 14, 37, 14];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(selectionSort(input));
