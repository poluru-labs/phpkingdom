class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function find(head, target) {
  let cur = head, idx = 0;
  while (cur) {
    if (cur.val === target) return idx;
    cur = cur.next; idx++;
  }
  return -1;
}
const head = new ListNode(5, new ListNode(10, new ListNode(15)));
document.getElementById("out").textContent =
  "find 10 => index " + find(head, 10) + "\nfind 99 => index " + find(head, 99);
