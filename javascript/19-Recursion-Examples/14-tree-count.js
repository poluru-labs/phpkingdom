const tree = { val: 1, left: { val: 2, left: { val: 4 }, right: null }, right: { val: 3, left: { val: 5 }, right: { val: 6 } } };
function countNodes(node) {
  if (!node) return 0;
  return 1 + countNodes(node.left) + countNodes(node.right);
}
document.getElementById("out").textContent = "node count = " + countNodes(tree);
