class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function preorder(root, out = []) {
  if (!root) return out;
  out.push(root.val);
  preorder(root.left, out);
  preorder(root.right, out);
  return out;
}
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)));
document.getElementById("out").textContent = "preorder: " + preorder(root).join(" -> ");
