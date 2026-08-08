const localMidnight = new Date(2024, 0, 15, 0, 0, 0);
document.getElementById("out").textContent =
  "Local midnight: " + localMidnight.toString() + "\n" +
  "UTC via ISO: " + localMidnight.toISOString() + "\n" +
  "Pitfall: date-only strings like '2024-01-15' parse as UTC midnight, not local.";
