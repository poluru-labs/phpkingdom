let log = "";
log += "1 ";
new Promise((resolve) => {
  log += "2 ";
  resolve();
  log += "3 ";
}).then(() => {
  log += "5";
  document.getElementById("out").textContent = log;
});
log += "4 ";
document.getElementById("out").textContent = log;
