const tree = { val: 1, left: { val: 2, left: { val: 4 }, right: null }, right: { val: 3, left: { val: 5 }, right: { val: 6 } } };
function treeSum(node) {
  if (!node) return 0;
  return node.val + treeSum(node.left) + treeSum(node.right);
}
document.getElementById("out").textContent = "tree sum = " + treeSum(tree);
