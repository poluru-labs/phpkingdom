const text = "wildcat cat catalog";
const re = /(?<!wild)cat/g;
const matches = text.match(re);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "/(?<!wild)cat/g => " + JSON.stringify(matches);
