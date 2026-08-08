const tips = [
  "Always define a clear base case first",
  "Make progress toward the base case each call",
  "Trust the recursive leap — assume subcalls work",
  "Draw the recursion tree for small inputs",
  "Watch stack depth on deep inputs (tail-call or iterate)",
  "Memoize overlapping subproblems (fib, grid paths)",
  "Backtracking: choose → explore → unchoose",
  "Test empty/null, single element, and two-element cases",
];
document.getElementById("out").textContent =
  tips.map((t, i) => (i + 1) + ". " + t).join("\n");
