function equilibriumIndex(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    const right = total - left - arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
document.getElementById("out").textContent = String(equilibriumIndex([1,3,5,2,2]));
