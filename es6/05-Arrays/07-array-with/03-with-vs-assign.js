const a = [1, 2, 3];
const copy = a.slice();
copy[0] = 9;
const b = a.with(0, 9);
document.getElementById("out").textContent =
  "mutated copy=" + copy + "\nwith result=" + b + "\noriginal=" + a;
