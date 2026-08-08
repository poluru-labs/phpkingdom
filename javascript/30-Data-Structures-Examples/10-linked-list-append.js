class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function append(head, val) {
  const node = new ListNode(val);
  if (!head) return node;
  let cur = head;
  while (cur.next) cur = cur.next;
  cur.next = node;
  return head;
}
let head = null;
[10, 20, 30].forEach(v => head = append(head, v));
const vals = [];
for (let c = head; c; c = c.next) vals.push(c.val);
document.getElementById("out").textContent = "after append 10,20,30: " + vals.join(" -> ");
