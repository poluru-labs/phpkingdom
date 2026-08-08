const tree = { val: 8, left: { val: 3, left: { val: 1 }, right: { val: 6 } }, right: { val: 10, left: null, right: { val: 14 } } };
function findValue(node, target) {
  if (!node) return false;
  if (node.val === target) return true;
  return findValue(node.left, target) || findValue(node.right, target);
}
document.getElementById("out").textContent =
  "find 6: " + findValue(tree, 6) + "\nfind 99: " + findValue(tree, 99);
