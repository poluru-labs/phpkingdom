const tree = { val: 1, left: { val: 2, left: { val: 4 }, right: null }, right: { val: 3, left: { val: 5 }, right: { val: 6 } } };
function preorder(node, out = []) {
  if (!node) return out;
  out.push(node.val);
  preorder(node.left, out);
  preorder(node.right, out);
  return out;
}
document.getElementById("out").textContent = "preorder: " + preorder(tree).join(" → ");
