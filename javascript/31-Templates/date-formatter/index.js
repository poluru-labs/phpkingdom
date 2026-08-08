const d = new Date("2026-07-21T15:30:00Z");
document.getElementById("out").textContent = [
  d.toISOString(),
  d.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
  new Intl.DateTimeFormat("en-GB").format(d)
].join("\n");
