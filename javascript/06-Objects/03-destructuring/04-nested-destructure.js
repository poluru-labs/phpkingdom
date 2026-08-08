const res = { user: { name: "Ada", age: 36 } };
const { user: { name, age = 0 } } = res;
document.getElementById("out").textContent = name + " (" + age + ")";
