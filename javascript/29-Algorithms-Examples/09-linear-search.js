function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
const arr = [4, 2, 7, 1, 9, 3];
const target = 7;
document.getElementById("out").textContent =
  "array:  " + JSON.stringify(arr) + "\n" +
  "target: " + target + "\n" +
  "index:  " + linearSearch(arr, target);
