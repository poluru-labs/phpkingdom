function heapify(arr, n, i) {
  let smallest = i;
  const l = 2 * i + 1, r = 2 * i + 2;
  if (l < n && arr[l] < arr[smallest]) smallest = l;
  if (r < n && arr[r] < arr[smallest]) smallest = r;
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, n, smallest);
  }
}
function buildMinHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  return arr;
}
const heap = buildMinHeap([9, 4, 7, 1, 3, 2, 8]);
document.getElementById("out").textContent = "min-heap array: [" + heap.join(", ") + "]";
