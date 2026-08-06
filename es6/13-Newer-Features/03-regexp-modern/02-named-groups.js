const m = /(?<year>\d{4})-(?<month>\d{2})/.exec("2026-07");
document.getElementById("out").textContent = JSON.stringify(m.groups);
