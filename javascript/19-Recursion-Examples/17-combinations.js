function combinations(arr, k, start = 0, path = [], result = []) {
  if (path.length === k) {
    result.push([...path]);
    return result;
  }
  for (let i = start; i < arr.length; i++) {
    path.push(arr[i]);
    combinations(arr, k, i + 1, path, result);
    path.pop();
  }
  return result;
}
const combos = combinations([1, 2, 3, 4], 2);
document.getElementById("out").textContent = combos.map((c) => c.join(",")).join("\n");
