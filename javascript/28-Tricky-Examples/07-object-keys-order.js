const obj = { b: 2, a: 1, 10: "ten", 2: "two" };
document.getElementById("out").textContent = Object.keys(obj).join(", ");
