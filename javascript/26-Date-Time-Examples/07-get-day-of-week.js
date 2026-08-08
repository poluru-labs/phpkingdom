const d = new Date(2024, 0, 15); // Monday
const names = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
document.getElementById("out").textContent =
  "getDay(): " + d.getDay() + " (" + names[d.getDay()] + ")";
