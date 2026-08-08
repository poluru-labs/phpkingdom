class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function inorder(root, out = []) {
  if (!root) return out;
  inorder(root.left, out); out.push(root.val); inorder(root.right, out);
  return out;
}
const bst = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14)));
document.getElementById("out").textContent = "BST inorder (sorted): " + inorder(bst).join(", ");
