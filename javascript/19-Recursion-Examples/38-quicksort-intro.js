function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.slice(0, -1).filter((x) => x <= pivot);
  const right = arr.slice(0, -1).filter((x) => x > pivot);
  return quickSort(left).concat([pivot], quickSort(right));
}
document.getElementById("out").textContent = quickSort([10, 7, 8, 9, 1, 5]).join(", ");
