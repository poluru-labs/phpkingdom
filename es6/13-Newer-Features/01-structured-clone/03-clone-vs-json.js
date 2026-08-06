const a = { d: new Date(0), u: undefined };
const viaJson = JSON.parse(JSON.stringify(a));
const viaSC = structuredClone(a);
document.getElementById("out").textContent =
  "json d type=" + typeof viaJson.d +
  "\nsc d is Date=" + (viaSC.d instanceof Date) +
  "\njson has u=" + ("u" in viaJson);
