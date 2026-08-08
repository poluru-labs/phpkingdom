const d = new Date(2024, 0, 15, 14, 30, 45);
const obj = { event: "demo", when: d };
document.getElementById("out").textContent =
  "toJSON(): " + d.toJSON() + "\n" +
  "JSON.stringify: " + JSON.stringify(obj);
