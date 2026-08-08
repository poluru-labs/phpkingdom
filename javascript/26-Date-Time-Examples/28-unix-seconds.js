const d = new Date(2024, 0, 15, 0, 0, 0);
const seconds = Math.floor(d.getTime() / 1000);
const back = new Date(seconds * 1000);
document.getElementById("out").textContent =
  "Date: " + d.toString() + "\n" +
  "Unix seconds: " + seconds + "\n" +
  "Restored: " + back.toString();
