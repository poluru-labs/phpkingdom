const text = "2026-07-19";
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const { groups } = re.exec(text);
document.getElementById("out").textContent =
  "year:  " + groups.year + "\n" +
  "month: " + groups.month + "\n" +
  "day:   " + groups.day;
