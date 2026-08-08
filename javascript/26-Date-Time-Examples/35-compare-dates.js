const a = new Date(2024, 0, 15);
const b = new Date(2024, 0, 20);
document.getElementById("out").textContent =
  "a < b: " + (a.getTime() < b.getTime()) + "\n" +
  "a > b: " + (a.getTime() > b.getTime()) + "\n" +
  "a === b (reference): " + (a === b);
