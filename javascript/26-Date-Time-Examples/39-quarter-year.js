function getQuarter(d) {
  return Math.floor(d.getMonth() / 3) + 1;
}
const d = new Date(2024, 0, 15);
document.getElementById("out").textContent = "Jan 15, 2024 is Q" + getQuarter(d);
