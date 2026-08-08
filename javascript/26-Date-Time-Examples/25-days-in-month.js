function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}
document.getElementById("out").textContent =
  "Jan 2024: " + daysInMonth(2024, 0) + "\n" +
  "Feb 2024: " + daysInMonth(2024, 1) + "\n" +
  "Feb 2023: " + daysInMonth(2023, 1);
