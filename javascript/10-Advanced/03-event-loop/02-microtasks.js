let log = "";
setTimeout(function () { log += "timeout "; document.getElementById("out").textContent = log; }, 0);
Promise.resolve().then(function () { log += "promise "; document.getElementById("out").textContent = log; });
log += "sync ";
document.getElementById("out").textContent = log;
