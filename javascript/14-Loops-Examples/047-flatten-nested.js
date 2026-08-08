const nested = [[1, 2], [3], [4, 5, 6]];
const flat = [];
for (const inner of nested) for (const x of inner) flat.push(x);
document.getElementById("out").textContent = flat.join(", ");
