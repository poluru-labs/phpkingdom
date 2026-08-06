const log = [];
setTimeout(() => log.push("timeout"), 0);
queueMicrotask(() => log.push("microtask"));
Promise.resolve().then(() => log.push("then"));
setTimeout(() => {
  document.getElementById("out").textContent = log.join(" → ");
}, 20);
