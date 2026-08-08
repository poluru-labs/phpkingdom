function retry(fn, attempts) {
  return function (...args) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
      try { return fn(...args); }
      catch (e) { lastError = e; }
    }
    throw lastError;
  };
}
let tries = 0;
const flaky = retry(() => {
  tries += 1;
  if (tries < 3) throw new Error("fail");
  return "ok on try " + tries;
}, 5);
document.getElementById("out").textContent = flaky();
