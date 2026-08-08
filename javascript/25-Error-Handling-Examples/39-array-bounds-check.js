const out = document.getElementById("out");
function at(arr, i) {
  if (!Array.isArray(arr)) throw new TypeError("expected array");
  if (i < 0 || i >= arr.length) throw new RangeError("index out of bounds");
  return arr[i];
}
try {
  out.textContent = String(at([10, 20], 5));
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
