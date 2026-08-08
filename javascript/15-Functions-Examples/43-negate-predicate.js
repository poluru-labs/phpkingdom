function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isEven = (n) => n % 2 === 0;
const isOdd = negate(isEven);
document.getElementById("out").textContent =
  "isOdd(5) = " + isOdd(5) + ", isOdd(4) = " + isOdd(4);
