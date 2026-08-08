const out = document.getElementById("out");
const errors = [
  new TypeError("bad type"),
  new RangeError("out of range"),
];
try {
  throw new AggregateError(errors, "Multiple validation failures");
} catch (e) {
  const lines = [e.message, ...e.errors.map(x => "  - " + x.name + ": " + x.message)];
  out.textContent = lines.join("\n");
}
