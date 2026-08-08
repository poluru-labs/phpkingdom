class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function bstSearch(root, target) {
  if (!root) return false;
  if (root.val === target) return true;
  return target < root.val ? bstSearch(root.left, target) : bstSearch(root.right, target);
}
const bst = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14)));
document.getElementById("out").textContent =
  "search 6 => " + bstSearch(bst, 6) + "\nsearch 7 => " + bstSearch(bst, 7);
