const fmt = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" });
document.getElementById("out").textContent = fmt.format(new Date("2026-07-21T12:00:00Z"));
