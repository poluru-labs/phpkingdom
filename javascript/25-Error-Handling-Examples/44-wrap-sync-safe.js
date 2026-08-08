const out = document.getElementById("out");
function safeSync(fn) {
  return function (...args) {
    try {
      return [null, fn(...args)];
    } catch (e) {
      return [e, null];
    }
  };
}
const parse = safeSync(JSON.parse);
const [err] = parse("{bad");
out.textContent = err ? err.name + ": caught safely" : "ok";
