class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function insert(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insert(root.left, val);
  else if (val > root.val) root.right = insert(root.right, val);
  return root;
}
function inorder(root, out = []) {
  if (!root) return out;
  inorder(root.left, out); out.push(root.val); inorder(root.right, out);
  return out;
}
let bst = null;
[8, 3, 10, 1, 6, 14, 4].forEach(v => bst = insert(bst, v));
document.getElementById("out").textContent = "inorder after inserts: " + inorder(bst).join(", ");
