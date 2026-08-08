const checklist = [
  "[x] Prefer ISO 8601 for storage and APIs",
  "[x] Use fixed dates in demos/tests for stability",
  "[x] Remember getMonth() is 0-based",
  "[x] Check invalid dates with !isNaN(d.getTime())",
  "[x] Be careful: date-only strings parse as UTC",
  "[x] Use Intl for locale-aware formatting",
  "[x] Clone before mutating shared dates",
  "[x] Document timezone assumptions for users"
];
document.getElementById("out").textContent = checklist.join("\n");
