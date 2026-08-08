function runTwice(fn) { return fn() + " | " + fn(); }
const tick = function () { return "tick"; };
document.getElementById("out").textContent = runTwice(tick);
