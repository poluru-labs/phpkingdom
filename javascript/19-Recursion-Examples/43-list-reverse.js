function reverseList(node, prev = null) {
  if (!node) return prev;
  const next = node.next;
  node.next = prev;
  return reverseList(next, node);
}
const list = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
const reversed = reverseList(list);
function toArray(node, out = []) {
  if (!node) return out;
  out.push(node.val);
  return toArray(node.next, out);
}
document.getElementById("out").textContent = toArray(reversed).join(" → ");
