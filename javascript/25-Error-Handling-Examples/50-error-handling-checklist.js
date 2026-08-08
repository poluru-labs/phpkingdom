const out = document.getElementById("out");
const tips = [
  "Validate inputs early; fail fast with clear messages",
  "Use try/catch around risky sync code (JSON.parse, user input)",
  "Always catch async/await and handle Promise rejections",
  "Prefer custom Error subclasses for domain errors",
  "Use error.cause to preserve original failure context",
  "Map technical errors to user-friendly messages",
  "Use finally for cleanup (locks, timers, connections)",
  "Log errors once; avoid duplicate global + local handlers",
  "Use Promise.allSettled when partial failure is OK",
  "Add retries/timeouts only where transient failures exist",
];
out.textContent = tips.map((t, i) => (i + 1) + ". " + t).join("\n");
