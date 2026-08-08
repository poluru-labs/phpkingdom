const checklist = [
  "Sorting: bubble, selection, insertion, merge, quick, counting, heap, stability",
  "Searching: linear, binary, first/last occurrence, insert position, lower bound",
  "Two pointers: two sum, dedupe, reverse, container water, palindrome, zeros, 3-sum, rain, merge",
  "Sliding window: max sum k, longest unique, min length sum, max average, anagrams, k flips",
  "Stack: parentheses, next greater, daily temps, RPN, min stack, decode string, monotonic",
  "Queue: BFS level order, sliding max deque, binary numbers, stack/queue conversions, circular queue"
];
document.getElementById("out").textContent =
  "29-Algorithms-Examples — 50 demos\n\n" +
  checklist.map((line, i) => (i + 1) + ". " + line).join("\n") +
  "\n\nAll examples run in the browser with vanilla JavaScript.";
