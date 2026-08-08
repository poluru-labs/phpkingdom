function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}
try {
  divide(4, 0);
} catch (e) {
  document.getElementById("out").textContent = e.message;
}
