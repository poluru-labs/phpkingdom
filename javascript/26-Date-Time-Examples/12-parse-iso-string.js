const iso = "2024-01-15T14:30:45.000Z";
const d = new Date(iso);
document.getElementById("out").textContent =
  "Input: " + iso + "\n" +
  "Parsed: " + d.toString() + "\n" +
  "getTime(): " + d.getTime();
