const ids = [3, 42, 789, 1000];
const padded = ids.map(n => String(n).replace(/^\d+$/, m => m.padStart(4, "0")));
document.getElementById("out").textContent =
  "ids:    " + JSON.stringify(ids) + "\n" +
  "padded: " + JSON.stringify(padded);
