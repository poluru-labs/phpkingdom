const o = { x: 1 };
Reflect.set(o, "y", 2);
document.getElementById("out").textContent =
  Reflect.get(o, "x") + "," + o.y;
