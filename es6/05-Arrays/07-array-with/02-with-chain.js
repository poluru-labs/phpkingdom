const a = [3, 1, 2];
const b = a.with(0, 0).toSorted((x, y) => x - y);
document.getElementById("out").textContent = String(b);
