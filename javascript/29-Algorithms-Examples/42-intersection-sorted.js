function intersectSorted(a, b) {
  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { out.push(a[i]); i++; j++; }
    else if (a[i] < b[j]) i++;
    else j++;
  }
  return out;
}
const a = [1, 2, 2, 3, 4];
const b = [2, 2, 4, 6];
document.getElementById("out").textContent =
  "a: " + JSON.stringify(a) + "\nb: " + JSON.stringify(b) + "\n" +
  "intersection: " + JSON.stringify(intersectSorted(a, b));
