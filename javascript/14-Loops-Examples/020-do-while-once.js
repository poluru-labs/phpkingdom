let n = 0;
const lines = [];
do {
  lines.push("body with n=" + n);
  n++;
} while (n < 0);
document.getElementById("out").textContent = lines.join("\n") + "\n(final n=" + n + ")";
