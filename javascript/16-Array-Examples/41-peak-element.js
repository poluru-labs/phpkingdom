function findPeak(arr) {
  for (let i = 0; i < arr.length; i++) {
    const left = i === 0 || arr[i] > arr[i - 1];
    const right = i === arr.length - 1 || arr[i] > arr[i + 1];
    if (left && right) return i;
  }
  return -1;
}
const arr = [1,3,20,4,1,0];
document.getElementById("out").textContent = "index=" + findPeak(arr) + ", value=" + arr[findPeak(arr)];
