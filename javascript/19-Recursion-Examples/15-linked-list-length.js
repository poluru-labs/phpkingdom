const list = { val: 10, next: { val: 20, next: { val: 30, next: null } } };
function listLength(node) {
  if (!node) return 0;
  return 1 + listLength(node.next);
}
document.getElementById("out").textContent = "length = " + listLength(list);
