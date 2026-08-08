function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
}
const arr = [5, 3, 8, 1, 9];
document.getElementById("out").textContent =
  "index of 8 = " + linearSearch(arr, 8) + "\nindex of 2 = " + linearSearch(arr, 2);
