const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const common = [];
for (const x of a) {
  for (const y of b) {
    if (x === y && !common.includes(x)) common.push(x);
  }
}
document.getElementById("out").textContent = common.join(", ");
