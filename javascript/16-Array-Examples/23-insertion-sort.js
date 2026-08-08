function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    let key = a[i], j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}
document.getElementById("out").textContent = insertionSort([12,11,13,5,6]).join(", ");
