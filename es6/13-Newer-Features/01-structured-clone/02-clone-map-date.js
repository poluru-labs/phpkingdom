const a = { when: new Date("2026-01-01"), tags: new Map([["a", 1]]) };
const b = structuredClone(a);
document.getElementById("out").textContent =
  b.when.toISOString() + " | map=" + b.tags.get("a");
