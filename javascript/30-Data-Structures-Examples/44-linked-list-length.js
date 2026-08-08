class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function length(head) {
  let count = 0, cur = head;
  while (cur) { count++; cur = cur.next; }
  return count;
}
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
document.getElementById("out").textContent = "length = " + length(head);
