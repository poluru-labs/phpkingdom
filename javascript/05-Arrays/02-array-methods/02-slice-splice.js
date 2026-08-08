const a = [1,2,3,4];
const copy = a.slice(1, 3);
const b = [1,2,3,4];
b.splice(1, 2, 9);
document.getElementById("out").textContent = copy + " / " + b;
