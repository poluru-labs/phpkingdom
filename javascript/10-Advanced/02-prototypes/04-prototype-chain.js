const proto = { greet() { return "hi"; } };
const obj = Object.create(proto);
document.getElementById("out").textContent = obj.greet() + "\n" + (Object.getPrototypeOf(obj) === proto);
