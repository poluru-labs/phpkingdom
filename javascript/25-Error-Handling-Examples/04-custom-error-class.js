class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}
const out = document.getElementById("out");
try {
  throw new ValidationError("email", "Invalid email format");
} catch (e) {
  out.textContent = e.name + " on " + e.field + ": " + e.message;
}
