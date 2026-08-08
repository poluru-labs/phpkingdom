const log = [];
setTimeout(() => log.push("timeout"), 0);
Promise.resolve().then(() => log.push("then"));
queueMicrotask(() => log.push("micro"));
setTimeout(() => {
  document.getElementById("out").textContent = log.join(" → ");
}, 20);
