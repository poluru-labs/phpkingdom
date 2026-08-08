const x = "1";
let msg = "no match";
switch (x) {
  case 1: msg = "number 1"; break;
  case "1": msg = "string 1"; break;
}
document.getElementById("out").textContent = msg;
