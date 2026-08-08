class NotFoundError extends Error {
  constructor(id) {
    super("Not found: " + id);
    this.name = "NotFoundError";
  }
}
const out = document.getElementById("out");
function handle(err) {
  if (err instanceof NotFoundError) return "404 style: " + err.message;
  if (err instanceof Error) return "generic: " + err.message;
  return "unknown";
}
try {
  throw new NotFoundError(42);
} catch (e) {
  out.textContent = handle(e);
}
