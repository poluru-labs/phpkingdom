document.getElementById("btn").addEventListener("click", (e) => {
  document.getElementById("out").textContent = [
    "type=" + e.type,
    "timeStamp=" + Math.round(e.timeStamp),
    "isTrusted=" + e.isTrusted,
    "defaultPrevented=" + e.defaultPrevented,
    "eventPhase=" + e.eventPhase,
  ].join("\n");
});
