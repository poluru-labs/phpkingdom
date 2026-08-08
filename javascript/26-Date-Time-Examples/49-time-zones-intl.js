const d = new Date(Date.UTC(2024, 0, 15, 18, 0, 0));
const zones = ["UTC", "America/New_York", "Europe/London", "Asia/Kolkata"];
const lines = zones.map(z => {
  const f = new Intl.DateTimeFormat("en-US", { timeZone: z, dateStyle: "medium", timeStyle: "short" });
  return z + ": " + f.format(d);
});
document.getElementById("out").textContent = lines.join("\n");
