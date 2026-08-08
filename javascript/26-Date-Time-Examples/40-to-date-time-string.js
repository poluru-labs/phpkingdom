const d = new Date(2024, 0, 15, 14, 30, 45);
document.getElementById("out").textContent =
  "toDateString(): " + d.toDateString() + "\n" +
  "toTimeString(): " + d.toTimeString();
