const base = new Date(2024, 0, 15, 12, 0, 0);
const target = new Date(2024, 0, 18, 12, 0, 0);
const diffDays = Math.round((target - base) / (1000 * 60 * 60 * 24));
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
document.getElementById("out").textContent =
  "Base: " + base.toDateString() + "\n" +
  "Target: " + target.toDateString() + "\n" +
  "Relative: " + rtf.format(diffDays, "day");
