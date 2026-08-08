const d = new Date(2024, 0, 15, 14, 30, 45);
const fmtUS = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" });
const fmtIN = new Intl.DateTimeFormat("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
document.getElementById("out").textContent =
  "en-US: " + fmtUS.format(d) + "\n" +
  "en-IN: " + fmtIN.format(d);
