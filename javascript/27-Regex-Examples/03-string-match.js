const text = "cat bat rat mat";
const single = text.match(/\w+at/);
const all = text.match(/\w+at/g);
document.getElementById("out").textContent =
  "single match: " + JSON.stringify(single) + "\n" +
  "global match: " + JSON.stringify(all);
