const text = "cost $19.99 and 19.99 units";
const re = /(?<=\$)\d+(?:\.\d{2})?/g;
const matches = text.match(re);
document.getElementById("out").textContent =
  "text: " + text + "\n" +
  "/(?<=\\$)\\d+/g => " + JSON.stringify(matches);
