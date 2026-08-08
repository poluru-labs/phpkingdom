class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function deleteVal(head, val) {
  if (!head) return null;
  if (head.val === val) return head.next;
  let cur = head;
  while (cur.next && cur.next.val !== val) cur = cur.next;
  if (cur.next) cur.next = cur.next.next;
  return head;
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2))));
head = deleteVal(head, 2);
const vals = [];
for (let c = head; c; c = c.next) vals.push(c.val);
document.getElementById("out").textContent = "delete 2: " + vals.join(" -> ");
