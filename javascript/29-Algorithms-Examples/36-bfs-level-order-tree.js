function buildTree(arr) {
  if (!arr.length || arr[0] == null) return null;
  const nodes = arr.map(v => (v == null ? null : { val: v, left: null, right: null }));
  for (let i = 0, j = 1; j < nodes.length; i++) {
    if (!nodes[i]) continue;
    if (j < nodes.length) nodes[i].left = nodes[j++];
    if (j < nodes.length) nodes[i].right = nodes[j++];
  }
  return nodes[0];
}
function levelOrder(root) {
  if (!root) return [];
  const q = [root], levels = [];
  while (q.length) {
    const size = q.length, row = [];
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      row.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    levels.push(row);
  }
  return levels;
}
const arr = [3, 9, 20, null, null, 15, 7];
document.getElementById("out").textContent =
  "tree array: " + JSON.stringify(arr) + "\n" +
  "level order: " + JSON.stringify(levelOrder(buildTree(arr)));
