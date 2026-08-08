function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[k - 1]) arr[k++] = arr[i];
  }
  return k;
}
const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const a = arr.slice();
const len = removeDuplicates(a);
document.getElementById("out").textContent =
  "input:   " + JSON.stringify(arr) + "\n" +
  "unique:  " + JSON.stringify(a.slice(0, len)) + "\n" +
  "length:  " + len;
