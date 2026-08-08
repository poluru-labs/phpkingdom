const out = document.getElementById("out");
function callFn(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("fn must be a function");
  }
  return fn();
}
try {
  out.textContent = String(callFn(42));
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
