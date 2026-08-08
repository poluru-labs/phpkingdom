class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function search(root, target) {
  if (!root) return false;
  if (root.val === target) return true;
  return search(root.left, target) || search(root.right, target);
}
const root = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10));
document.getElementById("out").textContent =
  "search 6 => " + search(root, 6) + "\nsearch 99 => " + search(root, 99);
