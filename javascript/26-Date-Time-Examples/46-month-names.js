const d = new Date(2024, 0, 15);
const long = d.toLocaleString("en-US", { month: "long" });
const short = d.toLocaleString("en-US", { month: "short" });
document.getElementById("out").textContent =
  "Month index 0 => long: " + long + ", short: " + short;
