class TreeNode { constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }
function buildLevel(arr) {
  if (!arr.length || arr[0] == null) return null;
  const root = new TreeNode(arr[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < arr.length) {
    const node = q.shift();
    if (i < arr.length && arr[i] != null) { node.left = new TreeNode(arr[i]); q.push(node.left); }
    i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.push(node.right); }
    i++;
  }
  return root;
}
const root = buildLevel([1, 2, 3, null, 4, 5]);
function preorder(n) { return n ? [n.val, ...preorder(n.left), ...preorder(n.right)] : []; }
document.getElementById("out").textContent = "preorder: " + preorder(root).join(", ");
