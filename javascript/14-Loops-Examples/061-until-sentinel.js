const stream = [4, 7, 2, 0, 9];
let sum = 0, i = 0;
while (i < stream.length && stream[i] !== 0) {
  sum += stream[i];
  i++;
}
document.getElementById("out").textContent = "sum before 0 = " + sum;
