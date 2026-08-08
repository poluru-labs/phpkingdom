const d = new Date(2024, 0, 15, 14, 30, 45, 250);
document.getElementById("out").textContent =
  "getHours(): " + d.getHours() + "\n" +
  "getMinutes(): " + d.getMinutes() + "\n" +
  "getSeconds(): " + d.getSeconds() + "\n" +
  "getMilliseconds(): " + d.getMilliseconds();
