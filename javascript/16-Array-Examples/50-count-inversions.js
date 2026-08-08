function countInversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) if (arr[i] > arr[j]) count++;
  }
  return count;
}
document.getElementById("out").textContent = String(countInversions([2,4,1,3,5]));
