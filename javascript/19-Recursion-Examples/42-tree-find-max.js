const tree = { val: 8, left: { val: 3, left: { val: 1 }, right: { val: 6 } }, right: { val: 10, left: null, right: { val: 14 } } };
function treeMax(node) {
  if (!node) return -Infinity;
  return Math.max(node.val, treeMax(node.left), treeMax(node.right));
}
document.getElementById("out").textContent = "max = " + treeMax(tree);
