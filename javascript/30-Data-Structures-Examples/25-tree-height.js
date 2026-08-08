class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5)));
document.getElementById("out").textContent = "height = " + height(root);
