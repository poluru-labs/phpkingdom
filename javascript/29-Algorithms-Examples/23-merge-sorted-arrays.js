function mergeSorted(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);
    else out.push(b[j++]);
  }
  return out.concat(a.slice(i), b.slice(j));
}
const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];
document.getElementById("out").textContent =
  "a: " + JSON.stringify(a) + "\nb: " + JSON.stringify(b) + "\n" +
  "merged: " + JSON.stringify(mergeSorted(a, b));
