class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function merge(a, b) {
  const dummy = new ListNode(0);
  let cur = dummy;
  while (a && b) {
    if (a.val <= b.val) { cur.next = a; a = a.next; }
    else { cur.next = b; b = b.next; }
    cur = cur.next;
  }
  cur.next = a || b;
  return dummy.next;
}
function toArr(h) { const r = []; for (let c = h; c; c = c.next) r.push(c.val); return r; }
const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
document.getElementById("out").textContent = "merged: " + toArr(merge(l1, l2)).join(" -> ");
