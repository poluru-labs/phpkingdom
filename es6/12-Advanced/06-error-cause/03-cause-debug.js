function wrap(fn) {
  try { return fn(); }
  catch (e) { throw new Error("wrap failed", { cause: e }); }
}
try {
  wrap(() => { throw new TypeError("bad"); });
} catch (e) {
  document.getElementById("out").textContent =
    e.name + ": " + e.message + " / " + e.cause.name;
}
