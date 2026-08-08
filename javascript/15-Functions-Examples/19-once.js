function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
const init = once(() => "initialized");
document.getElementById("out").textContent =
  init() + "\n" + init() + "\n(same both times)";
