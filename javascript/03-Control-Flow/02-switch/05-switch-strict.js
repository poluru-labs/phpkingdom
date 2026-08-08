const x = "1";
let msg = "none";
switch (x) { case 1: msg = "number"; break; case "1": msg = "string"; break; }
document.getElementById("out").textContent = msg;
