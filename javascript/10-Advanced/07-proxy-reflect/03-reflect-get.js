const obj = { a: 1 };
document.getElementById("out").textContent = String(Reflect.get(obj, "a"));
