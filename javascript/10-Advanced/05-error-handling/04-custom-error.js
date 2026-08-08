class AppError extends Error {
  constructor(msg) { super(msg); this.name = "AppError"; }
}
try {
  throw new AppError("nope");
} catch (e) {
  document.getElementById("out").textContent = e.name + ": " + e.message;
}
