const a = [1,2,3,4];
const copy = a.slice(1, 3);
a.splice(1, 2, 9);
document.getElementById("out").textContent = "copy=" + copy + "\na=" + a;
