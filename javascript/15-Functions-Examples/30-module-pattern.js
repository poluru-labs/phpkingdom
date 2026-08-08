const CounterModule = (function () {
  let value = 0;
  return {
    inc() { value += 1; return value; },
    get() { return value; },
  };
})();
CounterModule.inc();
CounterModule.inc();
document.getElementById("out").textContent = "count = " + CounterModule.get();
