const N = 5;
const row = [1];
for (let k = 0; k < N; k++) {
  row.push(row[k] * (N - k) / (k + 1));
}
document.getElementById("out").textContent = "row " + N + ": " + row.map(Math.round).join(" ");
