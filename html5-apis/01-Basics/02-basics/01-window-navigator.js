document.getElementById("out").textContent =
  "userAgent: " + navigator.userAgent.slice(0, 60) + "…\n" +
  "language: " + navigator.language + "\n" +
  "onLine: " + navigator.onLine;
