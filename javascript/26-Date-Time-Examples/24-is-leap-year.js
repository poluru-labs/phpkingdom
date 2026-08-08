function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}
const years = [2020, 2021, 2024, 2100];
document.getElementById("out").textContent = years.map(y => y + " => " + isLeapYear(y)).join("\n");
