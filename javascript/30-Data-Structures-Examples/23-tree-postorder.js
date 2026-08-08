class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function postorder(root, out = []) {
  if (!root) return out;
  postorder(root.left, out);
  postorder(root.right, out);
  out.push(root.val);
  return out;
}
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
document.getElementById("out").textContent = "postorder: " + postorder(root).join(" -> ");
