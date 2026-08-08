const tree = { val: 1, left: { val: 2, left: { val: 4 }, right: null }, right: { val: 3, left: { val: 5 }, right: { val: 6 } } };
function allPaths(node, path = [], result = []) {
  if (!node) return result;
  path.push(node.val);
  if (!node.left && !node.right) result.push([...path]);
  else {
    allPaths(node.left, path, result);
    allPaths(node.right, path, result);
  }
  path.pop();
  return result;
}
document.getElementById("out").textContent = allPaths(tree)
  .map((p) => p.join(" → "))
  .join("\n");
