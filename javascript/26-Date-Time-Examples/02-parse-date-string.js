const samples = [
  "2024-01-15",
  "2024-01-15T14:30:45",
  "January 15, 2024",
  "01/15/2024"
];
const lines = samples.map(s => s + " => " + new Date(s).toString());
document.getElementById("out").textContent = lines.join("\n");
