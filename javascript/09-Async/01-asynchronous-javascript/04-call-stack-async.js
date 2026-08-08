const log = [];
log.push("A");
setTimeout(() => {
  log.push("C");
  document.getElementById("out").textContent = log.join(" → ");
}, 0);
log.push("B");
document.getElementById("out").textContent = "scheduling…";
