let log = "start\n";
setTimeout(function () {
  log += "timeout\n";
  document.getElementById("out").textContent = log + "end already printed first";
}, 300);
log += "end\n";
document.getElementById("out").textContent = log;
