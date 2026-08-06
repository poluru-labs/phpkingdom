const log = [];
queueMicrotask(() => log.push(1));
Promise.resolve().then(() => log.push(2));
queueMicrotask(() => {
  log.push(3);
  document.getElementById("out").textContent = log.join(",");
});
