const iso = "2024-01-15";
const slash = "01/02/2024";
const dIso = new Date(iso);
const dSlash = new Date(slash);
document.getElementById("out").textContent =
  "ISO '2024-01-15' => " + dIso.toString() + "\n" +
  "'01/02/2024' => " + dSlash.toString() + " (locale-dependent)\n" +
  "Safer: new Date(2024, 0, 2) or parse with explicit format";
