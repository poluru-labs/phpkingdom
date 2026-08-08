function isValidYYYYMMDD(str) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(str)) return false;
  const [y, m, d] = str.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
}
const samples = ["2024-01-15", "2024-02-30", "24-01-15"];
document.getElementById("out").textContent = samples.map(s => s + " => " + isValidYYYYMMDD(s)).join("\n");
