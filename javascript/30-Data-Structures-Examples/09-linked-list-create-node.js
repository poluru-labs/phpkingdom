class ListNode {
  constructor(val, next = null) { this.val = val; this.next = next; }
}
const head = new ListNode(1, new ListNode(2, new ListNode(3)));
const vals = [];
let cur = head;
while (cur) { vals.push(cur.val); cur = cur.next; }
document.getElementById("out").textContent = "values: " + vals.join(" -> ");
