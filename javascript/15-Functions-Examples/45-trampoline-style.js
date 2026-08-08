function trampoline(fn) {
  return function (...args) {
    let result = fn(...args);
    while (typeof result === "function") result = result();
    return result;
  };
}
function sumDown(n, acc = 0) {
  if (n === 0) return acc;
  return () => sumDown(n - 1, acc + n);
}
const sumTo = trampoline(sumDown);
document.getElementById("out").textContent = "sum 1..100 = " + sumTo(100);
