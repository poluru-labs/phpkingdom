const out = document.getElementById("out");
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
try {
  out.textContent = "result: " + divide(10, 0);
} catch (e) {
  out.textContent = "error: " + e.message;
}
