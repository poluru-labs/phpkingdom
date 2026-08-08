const out = document.getElementById("out");
const logs = [];
function onReject(ev) {
  logs.push(ev.reason.message);
  if (ev.preventDefault) ev.preventDefault();
}
window.addEventListener("unhandledrejection", onReject);
onReject({ reason: new Error("simulated unhandled"), preventDefault() {} });
window.removeEventListener("unhandledrejection", onReject);
out.textContent = "logged once: " + logs[0];
