let log = "";
log += "A ";
new Promise((resolve) => {
  log += "B ";
  resolve("D");
  log += "C ";
}).then((v) => {
  log += v;
  document.getElementById("out").textContent = log;
});
log += "E ";
document.getElementById("out").textContent = log;
