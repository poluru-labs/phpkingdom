function countingSort(arr, maxVal) {
  const count = new Array(maxVal + 1).fill(0);
  for (const x of arr) count[x]++;
  const out = [];
  for (let v = 0; v <= maxVal; v++) {
    while (count[v]-- > 0) out.push(v);
  }
  return out;
}
const input = [4, 2, 2, 8, 3, 3, 1];
document.getElementById("out").textContent =
  "input:  " + JSON.stringify(input) + "\noutput: " + JSON.stringify(countingSort(input, 8));
