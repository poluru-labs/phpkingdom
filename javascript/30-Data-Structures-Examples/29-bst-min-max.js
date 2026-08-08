class TreeNode { constructor(val, l = null, r = null) { this.val = val; this.left = l; this.right = r; } }
function minVal(root) { while (root.left) root = root.left; return root.val; }
function maxVal(root) { while (root.right) root = root.right; return root.val; }
const bst = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14)));
document.getElementById("out").textContent = "min = " + minVal(bst) + ", max = " + maxVal(bst);
