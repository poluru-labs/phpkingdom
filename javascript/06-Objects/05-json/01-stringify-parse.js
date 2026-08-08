const user = { name: "Ada", active: true };
const text = JSON.stringify(user);
const back = JSON.parse(text);
document.getElementById("out").textContent = text + "\n" + back.name;
