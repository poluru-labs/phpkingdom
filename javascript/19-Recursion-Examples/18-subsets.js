function subsets(arr, i = 0, path = [], result = []) {
  if (i === arr.length) {
    result.push([...path]);
    return result;
  }
  path.push(arr[i]);
  subsets(arr, i + 1, path, result);
  path.pop();
  subsets(arr, i + 1, path, result);
  return result;
}
const subs = subsets([1, 2, 3]);
document.getElementById("out").textContent = subs.map((s) => "{" + s.join(",") + "}").join("\n");
