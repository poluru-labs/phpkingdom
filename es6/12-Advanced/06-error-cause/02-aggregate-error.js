const err = new AggregateError(
  [new Error("a"), new Error("b")],
  "many failed"
);
document.getElementById("out").textContent =
  err.message + " → " + err.errors.map(e => e.message).join(", ");
