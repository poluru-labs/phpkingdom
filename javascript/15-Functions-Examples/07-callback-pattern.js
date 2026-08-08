function forEachItem(arr, callback) {
  for (let i = 0; i < arr.length; i++) callback(arr[i], i);
}
const lines = [];
forEachItem(["a", "b", "c"], (item, i) => lines.push(i + ":" + item));
document.getElementById("out").textContent = lines.join("\n");
