class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function reverse(head) {
  let prev = null, cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
const head = new ListNode(1, new ListNode(2, new ListNode(3)));
const rev = reverse(head);
const vals = [];
for (let c = rev; c; c = c.next) vals.push(c.val);
document.getElementById("out").textContent = "reversed: " + vals.join(" -> ");
