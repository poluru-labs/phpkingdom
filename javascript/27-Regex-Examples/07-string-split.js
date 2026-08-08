const csv = "apple, banana;  cherry | date";
const parts = csv.split(/[,;|\s]+/);
document.getElementById("out").textContent =
  "input: " + csv + "\n" +
  "split(/[,;|\\s]+/) =>\n" +
  JSON.stringify(parts, null, 2);
