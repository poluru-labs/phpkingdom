class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
const a = new ListNode(1), b = new ListNode(2), c = new ListNode(3);
a.next = b; b.next = c; c.next = b;
const x = new ListNode(10, new ListNode(20));
document.getElementById("out").textContent =
  "cycle list => " + hasCycle(a) + "\nno cycle => " + hasCycle(x);
