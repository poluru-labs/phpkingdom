const names = ["ada", "lin", "grace"];
const titled = [];
for (let i = 0; i < names.length; i++) {
  titled.push(names[i][0].toUpperCase() + names[i].slice(1));
}
document.getElementById("out").textContent = titled.join(", ");
