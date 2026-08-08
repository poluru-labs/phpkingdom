const user = { id: 1, name: "Ada", temp: true };
const { temp, ...clean } = user;
document.getElementById("out").textContent = JSON.stringify(clean);
