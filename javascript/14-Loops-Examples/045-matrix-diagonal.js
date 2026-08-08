const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let sum = 0;
for (let i = 0; i < m.length; i++) sum += m[i][i];
document.getElementById("out").textContent = "main diagonal sum = " + sum;
