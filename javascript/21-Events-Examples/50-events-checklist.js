const tips = [
  "Prefer addEventListener over onclick attributes",
  "Use delegation for lists that change",
  "preventDefault for links/forms when handling in JS",
  "stopPropagation only when you truly need it",
  "Named functions for removeEventListener / AbortSignal",
  "passive:true for touch/wheel/scroll when not calling preventDefault",
  "Debounce input; throttle scroll/resize",
  "CustomEvent + detail for app-level messages",
];
document.getElementById("out").textContent =
  tips.map((t, i) => (i + 1) + ". " + t).join("\n");
