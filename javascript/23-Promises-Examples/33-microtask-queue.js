let log = "sync1 ";
Promise.resolve().then(() => {
  log += "microtask ";
  document.getElementById("out").textContent = log;
});
log += "sync2 ";
document.getElementById("out").textContent = log;
