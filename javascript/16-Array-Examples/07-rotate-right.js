function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}
document.getElementById("out").textContent = rotateRight([1,2,3,4,5], 2).join(", ");
