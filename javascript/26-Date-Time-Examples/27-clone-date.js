const original = new Date(2024, 0, 15, 14, 30, 0);
const clone = new Date(original.getTime());
clone.setDate(20);
document.getElementById("out").textContent =
  "Original: " + original.toDateString() + "\n" +
  "Clone after setDate(20): " + clone.toDateString() + "\n" +
  "Same reference? " + (original === clone);
