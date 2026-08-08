let log = "";
log += "1 ";
setTimeout(function () { log += "3 "; document.getElementById("out").textContent = log; }, 0);
log += "2 ";
document.getElementById("out").textContent = log;
