const d = new Date(2024, 0, 15, 14, 30, 45);
document.getElementById("out").textContent =
  "en-US date: " + d.toLocaleDateString("en-US") + "\n" +
  "en-US time: " + d.toLocaleTimeString("en-US") + "\n" +
  "en-GB date: " + d.toLocaleDateString("en-GB");
