function curry2(fn) {
  return (a) => (b) => fn(a, b);
}
const curriedAdd = curry2((a, b) => a + b);
document.getElementById("out").textContent = "curriedAdd(3)(4) = " + curriedAdd(3)(4);
