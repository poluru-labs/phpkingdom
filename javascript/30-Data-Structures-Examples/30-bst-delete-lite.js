class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function insert(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insert(root.left, val);
  else if (val > root.val) root.right = insert(root.right, val);
  return root;
}
function deleteLite(root, key) {
  if (!root) return null;
  if (key < root.val) root.left = deleteLite(root.left, key);
  else if (key > root.val) root.right = deleteLite(root.right, key);
  else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
  }
  return root;
}
function inorder(root, out = []) {
  if (!root) return out;
  inorder(root.left, out); out.push(root.val); inorder(root.right, out);
  return out;
}
let bst = null;
[8, 3, 10, 1, 6].forEach(v => bst = insert(bst, v));
bst = deleteLite(bst, 3);
document.getElementById("out").textContent = "after delete 3: " + inorder(bst).join(", ");
