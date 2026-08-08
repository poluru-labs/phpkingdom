const N = 5;
const lines = [];
for (let i = 0; i < N; i++) {
  let row = "";
  for (let j = 0; j < N; j++) {
    row += (i === 0 || i === N - 1 || j === 0 || j === N - 1) ? "*" : " ";
  }
  lines.push(row);
}
document.getElementById("out").textContent = lines.join("\n");
