class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
document.getElementById("out").textContent = "middle value (odd len): " + middleNode(head).val;
const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
document.getElementById("out").textContent += "\nmiddle value (even len): " + middleNode(head2).val;
