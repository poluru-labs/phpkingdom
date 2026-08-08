const d = new Date(2024, 0, 15, 14, 30, 0);
document.getElementById("out").textContent =
  "Local: " + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + "\n" +
  "UTC:   " + d.getUTCFullYear() + "-" + (d.getUTCMonth()+1) + "-" + d.getUTCDate() + " " + d.getUTCHours() + ":" + d.getUTCMinutes() + "\n" +
  "toISOString(): " + d.toISOString();
