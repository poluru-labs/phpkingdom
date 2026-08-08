const tree = { val: 1, left: { val: 2, left: { val: 4 }, right: null }, right: { val: 3, left: { val: 5 }, right: { val: 6 } } };
function depth(node) {
  if (!node) return 0;
  return 1 + Math.max(depth(node.left), depth(node.right));
}
document.getElementById("out").textContent = "max depth = " + depth(tree);
