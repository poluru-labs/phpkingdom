function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));
}
document.getElementById("out").textContent = rotateLeft([1,2,3,4,5], 2).join(", ");
