class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function prepend(head, val) { return new ListNode(val, head); }
let head = null;
[30, 20, 10].forEach(v => head = prepend(head, v));
const vals = [];
for (let c = head; c; c = c.next) vals.push(c.val);
document.getElementById("out").textContent = "prepend 30,20,10: " + vals.join(" -> ");
