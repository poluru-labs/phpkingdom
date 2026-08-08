const topics = [
  "Stack (01-03, 43)", "Queue (04-06)", "Deque & Priority Queue (07-08)",
  "Singly Linked List (09-17, 44)", "Doubly Linked List (18)",
  "Binary Tree (19-26, 45)", "BST (27-30, 46)", "Graph (31-38, 47, 49)",
  "Trie (39-40)", "Hash Map & Set (41-42)", "Heap (48)"
];
document.getElementById("out").textContent =
  "50 Data Structure Examples — Coverage\n\n" + topics.map((t, i) => (i + 1) + ". " + t).join("\n");
