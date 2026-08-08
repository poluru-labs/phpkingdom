const day = 6;
let kind;
switch (day) {
  case 6:
  case 0: kind = "weekend"; break;
  default: kind = "weekday";
}
document.getElementById("out").textContent = kind;
