const fixed = new Date(2024, 0, 15, 14, 30, 45);
document.getElementById("out").textContent =
  "getTime(): " + fixed.getTime() + "\n" +
  "From ms: " + new Date(fixed.getTime()).toISOString();
