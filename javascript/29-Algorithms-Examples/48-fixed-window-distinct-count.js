function distinctInWindows(arr, k) {
  const freq = new Map(), out = [];
  for (let i = 0; i < arr.length; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
    if (i >= k) {
      const left = arr[i - k];
      freq.set(left, freq.get(left) - 1);
      if (freq.get(left) === 0) freq.delete(left);
    }
    if (i >= k - 1) out.push(freq.size);
  }
  return out;
}
const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4;
document.getElementById("out").textContent =
  "array: " + JSON.stringify(arr) + "\n" +
  "k: " + k + "\n" +
  "distinct counts: " + JSON.stringify(distinctInWindows(arr, k));
