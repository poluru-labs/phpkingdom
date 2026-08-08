const day = "Mon";
let label;
switch (day) {
  case "Mon": label = "Start of week"; break;
  case "Fri": label = "Almost weekend"; break;
  default: label = "Midweek";
}
document.getElementById("out").textContent = label;
