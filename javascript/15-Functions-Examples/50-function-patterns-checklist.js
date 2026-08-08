const patterns = [
  "declaration & expression",
  "arrow, defaults, rest",
  "HOF, callbacks, closure",
  "partial, curry, compose, pipe",
  "debounce, throttle, once, memoize",
  "recursion, this, call/apply/bind",
  "factory, IIFE, module pattern",
  "pure vs impure, generators",
];
document.getElementById("out").textContent =
  "50 Function Patterns Checklist:\n" +
  patterns.map((p, i) => (i + 1) + ". " + p).join("\n");
